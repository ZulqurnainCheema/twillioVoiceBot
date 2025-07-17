import { getCalls } from "../models/callsModels.js";
import { logger } from "../utils/logger.js";
const getCallsController = async (request, reply) => {
  try {
    const calls = await getCalls();
    // console.log(campaigns);
    return reply.status(200).send(calls);
  } catch (error) {
    logger.error("Error fetching campaigns:", error);
    return reply.status(500).send({ error: "Internal server error" });
  }
};

export { getCallsController };
