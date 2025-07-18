import pkg from "@prisma/client";
const { PrismaClient } = pkg;
import {
  createcampaign,
  getCampaigns,
  deleteCampaign,
  getCampaignStatus,
  updateCampaignStatus,
  getCampaignCalls,
  updateCampaignLastContactIndex,
} from "../models/campaignModels.js";
import path from "path";
import fs from "fs";
import { parseCSV } from "../utils/csvParser.js";
import axios from "axios";
import { logger } from "../utils/logger.js";
const Prisma = new PrismaClient();
const createcampaignController = async (request, reply) => {
  const { contacts, modelId, campaignName, campaignDescription, callScript } =
    request.body;

  if (!contacts || !contacts.filename || !contacts.toBuffer) {
    return reply.status(400).send({ error: "CSV file is required." });
  }

  if (!modelId?.value || !campaignName?.value || !campaignDescription?.value) {
    return reply.status(400).send({
      error:
        "All parameters (modelId, campaignName, campaignDescription) are required.",
    });
  }

  const fileName = `${Date.now()}-${campaignName.value}.${contacts.filename
    .split(".")
    .pop()}`;
  const filePath = path.resolve("./uploads/campaigns", fileName);

  try {
    const newCampaign = await createcampaign(
      fileName,
      modelId.value,
      campaignName.value,
      campaignDescription.value,
      callScript?.value || ""
    );

    try {
      await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
      const buffer = await contacts.toBuffer();
      await fs.promises.writeFile(filePath, buffer);
      logger.info(`File saved to ${filePath}`);
    } catch (err) {
      logger.error("Error saving file:", err);
      return reply.status(500).send({ error: "Failed to save file." });
    }
    return reply.status(201).send(newCampaign);
  } catch (err) {
    logger.error("Error creating campaign:", err);
    return reply.status(500).send({ error: "Internal server error", err });
  }
};

const getCampaignsController = async (request, reply) => {
  try {
    const campaigns = await getCampaigns();
    return reply.status(200).send(campaigns);
  } catch (error) {
    logger.error("Error fetching campaigns:", error);
    return reply.status(500).send({ error: "Internal server error" });
  }
};
const getCampaignCallsController = async (request, reply) => {
  const campaignId = request.params.campaignId;
  try {
    const calls = await getCampaignCalls(campaignId);
    return reply.status(200).send(calls);
  } catch (error) {
    logger.error("Error fetching campaigns:", error);
    return reply.status(500).send({ error: "Internal server error" });
  }
};

const pauseCampaign = async (request, reply) => {
  const { campaignId } = request.params;
  if (!campaignId)
    return reply.status(400).send({ error: "Campaign ID is required." });

  await updateCampaignStatus(campaignId, "paused");
  reply.send({ message: "Campaign paused successfully." });
};

const resumeCampaign = async (request, reply) => {
  const { campaignId } = request.params;
  if (!campaignId)
    return reply.status(400).send({ error: "Campaign ID is required." });

  await updateCampaignStatus(campaignId, "active");
  reply.send({ message: "Campaign resumed successfully." });
};
const restartCampaign = async (request, reply) => {
  const { campaignId } = request.params;
  if (!campaignId)
    return reply.status(400).send({ error: "Campaign ID is required." });

  await updateCampaignStatus(campaignId, "active");
  await updateCampaignLastContactIndex(campaignId);
  reply.send({ message: "Campaign restart successfully." });
};

const isCampaignPaused = async (campaignId) => {
  const status = await getCampaignStatus(campaignId);
  return status === "paused";
};
const startCampaignController = async (request, reply) => {
  const { campaignId } = request.params;

  if (!campaignId) {
    logger.warn("⚠️ No campaign ID provided");
    return reply.status(400).send({ error: "Campaign ID is required." });
  }

  try {
    const campaign = await Prisma.campaigns.findUnique({
      where: { id: Number(campaignId) },
      include: { models: true },
    });

    if (!campaign) {
      logger.warn(`⚠️ Campaign ${campaignId} not found`);
      return reply.status(404).send({ error: "Campaign not found." });
    }

    if (campaign.status === "completed") {
      return reply.status(400).send({ error: "Campaign already completed." });
    }

    const contacts = await parseCSV(`./uploads/campaigns/${campaign.contacts}`);
    if (!contacts || contacts.length === 0) {
      logger.warn(`⚠️ No contacts found in campaign ${campaignId}`);
      return reply
        .status(400)
        .send({ error: "No contacts found in the campaign." });
    }

    const batchSize = 10;
    let pausedMidway = false;

    for (
      let i = campaign.lastContactIndex || 0;
      i < contacts.length;
      i += batchSize
    ) {
      const batch = contacts.slice(i, i + batchSize);
      logger.info(`📦 Processing batch ${i / batchSize + 1}...`);

      for (let j = 0; j < batch.length; j++) {
        const contact = batch[j];
        const overallIndex = i + j;

        const paused = await isCampaignPaused(campaignId);
        if (paused) {
          logger.info("⏸ Campaign is paused. Halting processing.");
          pausedMidway = true;
          break;
        }

        try {
          const callResponse = await axios.post(
            `${process.env.STREAM_BACKEND_URL}/make-call/${contact.phone_number}`,
            {
              campaignId,
              contactName: contact.name,
              companyName: contact.bussiness_name,
              callScript: campaign.callScript,
              instructions: campaign.models.instructions,
              trainingData: campaign.models.trainingData,
            }
          );

          if (callResponse.status !== 200) {
            logger.error(`❌ Chatbot call failed: ${callResponse.statusText}`);
            throw new Error("Chatbot server error");
          }

          await Prisma.campaigns.update({
            where: { id: Number(campaignId) },
            data: { lastContactIndex: overallIndex },
          });

          logger.info(`✅ Called ${contact.name} (Index ${overallIndex})`);
        } catch (error) {
          logger.error(
            `❌ Error calling ${contact.name}: ${error.message}. Stopping campaign.`
          );
          return reply.status(500).send({
            error: "Campaign interrupted due to chatbot error.",
            detail: error.message,
          });
        }
      }

      if (pausedMidway) break;

      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (!pausedMidway) {
      await Prisma.campaigns.update({
        where: { id: Number(campaignId) },
        data: { status: "completed" },
      });

      logger.info(`🎉 Campaign ${campaignId} completed successfully.`);
      return reply.status(200).send({ message: "Campaign completed." });
    } else {
      return reply.status(200).send({ message: "Campaign paused mid-run." });
    }
  } catch (err) {
    logger.error(`🔥 Fatal campaign error: ${err.message}`);
    return reply.status(500).send({ error: "Campaign failed to complete." });
  }
};

const deleteCampaignsController = async (request, reply) => {
  const { campaignId } = request.query;
  try {
    const deletedCampaign = await deleteCampaign(Number(campaignId));
    reply.status(201).send(deletedCampaign);
  } catch (error) {
    logger.error("Error while deleting", error.message);
    reply.status(500).send(error);
  }
};
export {
  deleteCampaignsController,
  createcampaignController,
  getCampaignsController,
  startCampaignController,
  isCampaignPaused,
  getCampaignCallsController,
  resumeCampaign,
  pauseCampaign,
  restartCampaign,
};
