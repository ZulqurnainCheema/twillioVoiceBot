import { PrismaClient } from "@prisma/client";
const Prisma = new PrismaClient();
import fs from "fs";
import { logger } from "../utils/logger.js";
const createcampaign = async (
  contacts,
  modelId,
  campaignName,
  campaignDescription,
  callScript
) => {
  try {
    // Validate inputs
    if (!modelId || !campaignName || !campaignDescription || !contacts) {
      throw new Error(
        "All parameters (modelId, campaignName, campaignDescription, contacts) are required."
      );
    }
    if (
      typeof modelId !== "string" ||
      typeof campaignName !== "string" ||
      typeof campaignDescription !== "string" ||
      typeof contacts != "string"
    ) {
      throw new Error(
        "Invalid input types: modelId should be a number, campaignName,contacts and campaignDiscription should be strings."
      );
    }

    const newcampaign = await Prisma.campaigns.create({
      data: {
        modelId: Number(modelId),
        campaignName: campaignName,
        campaignDescription: campaignDescription,
        callScript: callScript,
        contacts: contacts,
      },
    });

    if (!newcampaign) {
      throw new Error("Failed to create new campaign.");
    }

    logger.info("New campaign created:", newcampaign);
    return newcampaign; // Return the newly created campaign
  } catch (error) {
    logger.error("Error creating new campaign:", error);
    throw error; // Re-throw the error for further handling
  }
};
const getCampaigns = async () => {
  try {
    const campaigns = await Prisma.campaigns.findMany();
    return campaigns; // Return the list of campaigns
  } catch (error) {
    logger.error("Error fetching campaigns:", error);
    throw error; // Re-throw the error for further handling
  }
};
const getCampaignCalls = async (campaignId) => {
  try {
    const calls = await Prisma.calls.findMany({
      where: {
        campaignId: Number(campaignId),
      },
    });
    return calls; // Return the list of campaigns
  } catch (error) {
    logger.error("Error fetching campaign calls:", error);
    throw error; // Re-throw the error for further handling
  }
};
const updateCampaignStatus = async (campaignId, status) => {
  return Prisma.campaigns.update({
    where: { id: Number(campaignId) },
    data: { status }, // 'paused' or 'active'
  });
};
const updateCampaignLastContactIndex = async (campaignId) => {
  return Prisma.campaigns.update({
    where: {
      id: Number(campaignId),
    },
    data: { lastContactIndex: 0 },
  });
};
const getCampaignStatus = async (campaignId) => {
  const campaign = await Prisma.campaigns.findUnique({
    where: { id: Number(campaignId) },
    select: { status: true },
  });
  return campaign?.status;
};

const deleteCampaign = async (id) => {
  try {
    const deletedCampaign = await Prisma.campaigns.delete({
      where: { id: id },
    });
    if (deletedCampaign.contacts) {
      fs.unlink(`./uploads/campaigns/${deletedCampaign.contacts}`, (err) => {
        if (err) throw err;
        logger.info(`${deletedCampaign.contacts} was deleted`);
      });
      return deletedCampaign;
    }
  } catch (error) {
    throw error;
  }
};
export {
  createcampaign,
  getCampaigns,
  deleteCampaign,
  getCampaignCalls,
  getCampaignStatus,
  updateCampaignStatus,
  updateCampaignLastContactIndex,
};
