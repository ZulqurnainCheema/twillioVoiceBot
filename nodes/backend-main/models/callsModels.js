import { PrismaClient } from "../generated/prisma/index.js";
const Prisma = new PrismaClient()
import {logger} from "../utils/logger.js";
const getCalls =async () => {
  try {
    const calls = await Prisma.calls.findMany({
        include:{
            campaigns:true,
        }
    });
    return calls; // Return the list of campaigns
  } catch (error) {
    logger.error("Error fetching calls:", error);
    throw error; // Re-throw the error for further handling
  }
};

export {getCalls}