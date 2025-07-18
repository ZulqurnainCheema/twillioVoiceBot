import Fastify from "fastify";
import WebSocket from "ws";
import dotenv from "dotenv";
import fastifyFormBody from "@fastify/formbody";
import fastifyWs from "@fastify/websocket";
import twilio from "twilio";
import { PrismaClient } from "./generated/prisma/index.js";
import { sendAppointmentEmail } from "./utils/googleClient.js";
import { logger } from "./utils/logger.js";
import { loggerOptions } from "./utils/logger.js";
import { appendTranscription } from "./utils/transriber.js";
import fastifyStatic from "@fastify/static";
import path from "path";
import fastifyCors from "@fastify/cors";
dotenv.config();
const Prisma = new PrismaClient();
// Retrieve environment variables
const { OPENAI_API_KEY, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_NUMBER } =
  process.env;

console.log(
  OPENAI_API_KEY,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_NUMBER
);
const callParametersStore = {};
// Validate environment variables
if (!OPENAI_API_KEY) {
  logger.error("Missing OpenAI API key. Please set it in the .env file.");
  process.exit(1);
}
if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_NUMBER) {
  logger.error(
    "Missing Twilio credentials. Please set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_NUMBER in the .env file."
  );
  process.exit(1);
}

// Initialize Twilio client
const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// Initialize Fastify
const fastify = Fastify({
  logger: loggerOptions,
});
fastify.register(fastifyCors, {
  origin: true, // Adjust this for production (e.g., specific origins)
  methods: ["GET", "POST", "OPTIONS"],
});
fastify.register(fastifyFormBody);
fastify.register(fastifyWs);
fastify.register(fastifyStatic, {
  root: path.join(process.cwd(), "transcriptions"),
  prefix: "/transcriptions/", // url: http://localhost:5050/transcriptions/CA123…txt
});
const SYSTEM_MESSAGE =
  "You are a helpful and bubbly AI assistant who loves to chat about anything the user is interested about and is prepared to offer them facts. You have a penchant for dad jokes, owl jokes, and rickrolling – subtly. Always stay positive, but work in a joke when appropriate.";
const VOICE = "alloy";
const PORT = process.env.PORT || 5050;

// List of Event Types to log
const LOG_EVENT_TYPES = [
  "error",
  "response.content.done",
  "rate_limits.updated",
  "response.done",
  "input_audio_buffer.committed",
  "input_audio_buffer.speech_stopped",
  "input_audio_buffer.speech_started",
  "session.created",
];

// Show AI response elapsed timing calculations
const SHOW_TIMING_MATH = false;
function hangupCall(connection, streamSid) {
  if (!streamSid) return;
  connection.send(JSON.stringify({ event: "stop", streamSid }));
  logger.info("🛑 Hanging up call now");
}

// Root Route
fastify.get("/", async (request, reply) => {
  reply.send({ message: "Twilio Media Stream Server is running!" });
});

// Route for Twilio to handle incoming calls
fastify.all("/incoming-call", async (request, reply) => {
  const twimlResponse = `<?xml version="1.0" encoding="UTF-8"?>
                              <Connect>
                                  <Stream url="wss://${request.headers.host}/media-stream" />
                              </Connect>
                          </Response>`;
  reply.type("text/xml").send(twimlResponse);
});

// Route for Twilio to handle outgoing calls
fastify.get("/outgoing-call", async (request, reply) => {
  const twimlResponse = `<?xml version="1.0" encoding="UTF-8"?>
    <Response>
      <Connect>
        <Stream url="wss://${request.headers.host}/media-stream?outgoing=true"/>
      </Connect>
    </Response>`;
  reply.type("text/xml").send(twimlResponse);
});

// Route to initiate outgoing calls
fastify.post("/make-call/:to", async (request, reply) => {
  const { to } = request.params;
  logger.info(to);
  if (!to) {
    reply.code(400).send({ error: 'Missing "to" parameter' });
    return;
  }
  // Extract additional parameters from query string
  const {
    campaignId,
    contactName,
    companyName,
    callScript,
    instructions,
    trainingData,
  } = request.body;

  logger.info(
    `${campaignId},${contactName},${companyName},${callScript},${instructions},${trainingData}`
  );

  if (
    !campaignId ||
    !contactName ||
    !companyName ||
    !callScript ||
    !instructions ||
    !trainingData
  ) {
    reply
      .code(400)
      .send({ error: "Missing one or more required query parameters" });
    return;
  }
  // const callUUID = uuidv4();
  try {
    const call = await twilioClient.calls.create({
      url: `http://${request.headers.host}/outgoing-call`,
      to: to,
      record: true,
      statusCallback: `http://${request.headers.host}/call-status`,
      from: TWILIO_NUMBER,
    });

    callParametersStore[call.sid] = {
      campaignId,
      contactName,
      companyName,
      contactPhone: to,
      callScript,
      instructions,
      trainingData,
    };
    reply.send({ message: `Call initiated to`, callSid: call.sid });
  } catch (error) {
    reply.code(500).send({ error: error });
  }
});
fastify.get("/call-status", async (request, reply) => {
  const { CallSid, CallStatus, From, To, CallDuration, RecordingUrl } =
    request.query;

  const calldata = callParametersStore[CallSid];
  try {
    const callDetails = await Prisma.calls.create({
      data: {
        contactName: calldata.contactName,
        contactPhone: To,
        callStatus: CallStatus,
        callSid: CallSid,
        recordingsLink: `${RecordingUrl}.mp3`,
        transcriptionsLink: `${CallSid}.txt`,
        BussinessName: calldata.companyName,
        CallDuration: CallDuration,
        From: From,
        campaigns: {
          connect: {
            id: Number(calldata.campaignId),
          },
        },
      },
    });

    logger.info("Successfully saved the call details");
  } catch (error) {
    logger.info("Error while ", error);
  }
});

// WebSocket route for media-stream
fastify.register(async (fastify) => {
  fastify.get("/media-stream", { websocket: true }, (connection, req) => {
    logger.info("Client connected");

    // Connection-specific state
    let streamSid = null;
    let latestMediaTimestamp = 0;
    let lastAssistantItem = null;
    let markQueue = [];
    let responseStartTimestampTwilio = null;
    let callSid = null;
    let customParamters;
    // Control initial session with OpenAI
    const initializeSession = (customParamters) => {
      const sessionUpdate = {
        type: "session.update",
        session: {
          turn_detection: { type: "server_vad" },
          input_audio_format: "g711_ulaw",
          output_audio_format: "g711_ulaw",
          voice: VOICE,
          instructions: `You are an AI sales representative making a cold call.

Your goal is to get the person to **book an appointment** by collecting and verifying their **full name** and **email address** with 100% accuracy. But keep in mind that be natural polite and not desperate at all only ask them for appointment if they are fully into our product and make sure you first make our offer clear to them and if they give consent only and only then move farther

Follow these steps exactly:

---

1. **Greet** the person politely and introduce yourself and your purpose using the context provided in the instructions.

2. Ask for their **full name**.
   - After they respond, **repeat the full name back clearly**.
   - Ask: “Did I get that right?”
   - ✅ If unclear, misheard, or incomplete (e.g., only first name), ask for clarification or spelling.
   - ✅ If unsure, say: “Can you please spell your full name letter by letter, including any spaces or special characters?”

3. Ask for their **email address**.
   - Repeat it back clearly: “So that’s [email], correct?”
   - ✅ If any part is unclear (e.g., background noise, unusual domain, or spoken too quickly), ask the user to **spell the email address aloud, letter by letter**.
   - ✅ Confirm each component explicitly:
     - The **local part** (before @)
     - The **domain name**
     - The **top-level domain** (e.g., gmail.com vs. g-mail.com or gmail.co.uk)
   - Say: “Just to be sure, can you please spell your email slowly so I can verify every character?”

4. **Explicitly confirm** both name and email.
   - Repeat: “Just to confirm, your full name is [name], and your email is [email], is that correct?”
   - Wait for a clear **"yes"** before proceeding.

5. **Only after both name and email have been confirmed**, you MUST call: sendAppointmentEmail(name, email)
   - This is **mandatory**.
   - Do not proceed without **full confirmation** of both values.

6. **Wait for the function result**:
   - ✅ If the result is **successful**, say: “Great! I’ve sent the confirmation. Please check your email.”
   - ❌ If the result indicates an **error** (e.g., missing characters, invalid domain), politely say: “Hmm, it looks like something went wrong while sending the email. Can we double-check your name and email address again?”


⚠️ Critical Guidelines:

- **Do not guess** or autofill parts of the name or email.
- Do **not proceed** if there’s even a slight ambiguity.
- You may ask the customer to **repeat or spell** their details **as many times as needed**.
- Always speak with patience and clarity, like a respectful human agent.
- Give the customer time to respond, and confirm that all details are correct **before sending**.
- Ensure that the full name and full, correctly spelled email appear in the final message body.


INSTRUCTIONS:
${customParamters.instructions}

TRAINING DATA:
${customParamters.trainingData}

`,

          modalities: ["text", "audio"],
          temperature: 0.8,
          input_audio_transcription: {
            model: "whisper-1",
          },
          tools: [
            {
              type: "function",
              name: "hangup",
              description: "Ends the call immediately.",
              parameters: { type: "object", properties: {}, required: [] },
            },
            {
              type: "function",
              name: "sendAppointmentEmail",
              description:
                "Sends an appointment confirmation email to the customer.",
              parameters: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                    description: "Customer's email address",
                  },
                  name: { type: "string", description: "Customer's name" },
                },
                required: ["email", "name"],
              },
            },
          ],
          tool_choice: "auto",
        },
      };

      logger.info("Sending session update:", JSON.stringify(sessionUpdate));
      openAiWs.send(JSON.stringify(sessionUpdate));

      // Uncomment the following line to have AI speak first:
      sendInitialConversationItem(customParamters);
    };

    // Send initial conversation item if AI talks first
    const sendInitialConversationItem = (customParamters) => {
      const initialConversationItem = {
        type: "conversation.item.create",
        item: {
          type: "message",
          role: "user",
          content: [
            {
              type: "input_text",
              text: `Greet the user with "Hello ${customParamters.contactName},${customParamters.callScript}"`,
            },
          ],
        },
      };

      if (SHOW_TIMING_MATH)
        logger.info(
          "Sending initial conversation item:",
          JSON.stringify(initialConversationItem)
        );
      openAiWs.send(JSON.stringify(initialConversationItem));
      openAiWs.send(JSON.stringify({ type: "response.create" }));
    };

    // Handle interruption when the caller's speech starts
    const handleSpeechStartedEvent = () => {
      if (markQueue.length > 0 && responseStartTimestampTwilio != null) {
        const elapsedTime = latestMediaTimestamp - responseStartTimestampTwilio;
        if (SHOW_TIMING_MATH)
          logger.info(
            `Calculating elapsed time for truncation: ${latestMediaTimestamp} - ${responseStartTimestampTwilio} = ${elapsedTime}ms`
          );

        if (lastAssistantItem) {
          const truncateEvent = {
            type: "conversation.item.truncate",
            item_id: lastAssistantItem,
            content_index: 0,
            audio_end_ms: elapsedTime,
          };
          if (SHOW_TIMING_MATH)
            logger.info(
              "Sending truncation event:",
              JSON.stringify(truncateEvent)
            );
          openAiWs.send(JSON.stringify(truncateEvent));
        }

        connection.send(
          JSON.stringify({
            event: "clear",
            streamSid: streamSid,
          })
        );

        // Reset
        markQueue = [];
        lastAssistantItem = null;
        responseStartTimestampTwilio = null;
      }
    };

    // Send mark messages to Media Streams so we know if and when AI response playback is finished
    const sendMark = (connection, streamSid) => {
      if (streamSid) {
        const markEvent = {
          event: "mark",
          streamSid: streamSid,
          mark: { name: "responsePart" },
        };
        connection.send(JSON.stringify(markEvent));
        markQueue.push("responsePart");
      }
    };

    // Open event for OpenAI WebSocket

    // Handle incoming messages from Twilio
    connection.on("message", (message) => {
      try {
        const data = JSON.parse(message);

        switch (data.event) {
          case "media":
            latestMediaTimestamp = data.media.timestamp;
            if (SHOW_TIMING_MATH)
              logger.info(
                `Received media message with timestamp: ${latestMediaTimestamp}ms`
              );
            if (openAiWs.readyState === WebSocket.OPEN) {
              const audioAppend = {
                type: "input_audio_buffer.append",
                audio: data.media.payload,
              };
              openAiWs.send(JSON.stringify(audioAppend));
            }
            break;
          case "start":
            streamSid = data.start.streamSid;
            callSid = data.start.callSid;
            customParamters = callParametersStore[data.start.callSid];
            logger.info(customParamters);
            logger.info("Incoming stream has started", streamSid);

            // Reset start and media timestamp on a new stream
            responseStartTimestampTwilio = null;
            latestMediaTimestamp = 0;
            break;
          case "mark":
            if (markQueue.length > 0) {
              markQueue.shift();
            }
            break;
          default:
            logger.info("Received non-media event:", data.event);
            break;
        }
      } catch (error) {
        logger.error("Error parsing message:", error, "Message:", message);
      }
    });
    connection.on("close", () => {
      if (openAiWs.readyState === WebSocket.OPEN) openAiWs.close();
      logger.info("Client disconnected.");
    });
    const openAiWs = new WebSocket(
      "wss://api.openai.com/v1/realtime?model=gpt-4o-mini-realtime-preview-2024-12-17",
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "OpenAI-Beta": "realtime=v1",
        },
      }
    );

    // Handle connection close

    openAiWs.on("open", () => {
      logger.info("Connected to the OpenAI Realtime API");
      setTimeout(() => initializeSession(customParamters), 100);
    });

    // Listen for messages from the OpenAI WebSocket (and send to Twilio if necessary)
    openAiWs.on("message", (data) => {
      try {
        const response = JSON.parse(data);

        if (LOG_EVENT_TYPES.includes(response.type)) {
        }

        if (response.type === "response.audio.delta" && response.delta) {
          const audioDelta = {
            event: "media",
            streamSid: streamSid,
            media: { payload: response.delta },
          };
          connection.send(JSON.stringify(audioDelta));

          // First delta from a new response starts the elapsed time counter
          if (!responseStartTimestampTwilio) {
            responseStartTimestampTwilio = latestMediaTimestamp;
            if (SHOW_TIMING_MATH)
              logger.info(
                `Setting start timestamp for new response: ${responseStartTimestampTwilio}ms`
              );
          }

          if (response.item_id) {
            lastAssistantItem = response.item_id;
          }

          sendMark(connection, streamSid);
        }

        /* 1️⃣  BOT (voicebot) transcript */
        if (response.type === "response.audio_transcript.done") {
          appendTranscription(callSid, "voicebot", response.transcript);
        }

        /* 2️⃣  CUSTOMER transcript */
        if (
          response.type ===
          "conversation.item.input_audio_transcription.completed"
        ) {
          appendTranscription(callSid, "customer", response.transcript);
        }
        if (response.type === "response.function_call_arguments.done") {
          (async () => {
            if (response.name === "hangup") {
              logger.info("🤖 GPT invoked hangup()");
              hangupCall(connection, streamSid); // helper from step 2 above
              return;
            }
            logger.info(`Function call triggered with:${response.arguments}`);

            try {
              const args = JSON.parse(response.arguments);

              const result = await sendAppointmentEmail(args);
              logger.info(`✅ Function result: ${result}`);

              openAiWs.send(
                JSON.stringify({
                  type: "conversation.item.create",
                  item: {
                    type: "function_call_output",
                    call_id: response.call_id,
                    output: JSON.stringify(result),
                  },
                })
              );
              openAiWs.send(JSON.stringify({ type: "response.create" }));

              try {
                await Prisma.leads.create({
                  data: {
                    campaignId: Number(customParamters.campaignId),
                    name: args.name,
                    email: args.email,
                    contactName: customParamters.contactName,
                    contactPhone: customParamters.contactPhone,
                    businessName: customParamters.companyName,
                  },
                });
                logger.info("📦 Lead saved successfully.");
              } catch (dbError) {
                logger.error(`❌ Error while saving lead: ${dbError}`);
              }
            } catch (e) {
              logger.error("❌ Function failed:", e);

              openAiWs.send(
                JSON.stringify({
                  type: "conversation.item.create",
                  item: {
                    type: "function_call_output",
                    call_id: response.call_id,
                    output: JSON.stringify("Function crashed"),
                  },
                })
              );
              openAiWs.send(JSON.stringify({ type: "response.create" }));
            }
          })(); // 👈 Don't forget to call the function!
        }

        if (response.type === "input_audio_buffer.speech_started") {
          handleSpeechStartedEvent();
        }
      } catch (error) {
        logger.error(
          "Error processing OpenAI message:",
          error,
          "Raw message:",
          data
        );
      }
    });
    // Handle WebSocket close and errors
    openAiWs.on("close", () => {
      logger.info("Disconnected from the OpenAI Realtime API");
      delete callParametersStore[callSid];
    });

    openAiWs.on("error", (error) => {
      logger.error("Error in the OpenAI WebSocket:", error);
    });
  });
});

fastify.listen({ port: PORT, host: "0.0.0.0" }, (err) => {
  if (err) {
    logger.error(err);
    process.exit(1);
  }
  logger.info(`Server is listening on port ${PORT}`);
});
