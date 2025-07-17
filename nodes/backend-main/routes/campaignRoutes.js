import fastifyMultipart from "@fastify/multipart";
import {
  createcampaignController,
  deleteCampaignsController,
  getCampaignsController,
  startCampaignController,
  pauseCampaign,
  resumeCampaign,
  getCampaignCallsController,
  restartCampaign,
} from "../controllers/campaignController.js";
export const campaignsRoutes = async (fastify, options) => {
  fastify.addHook("onRequest", fastify.authenticate);
  fastify.get("/", async (request, reply) => {
    return getCampaignsController(request, reply);
  });
  fastify.post("/create-campaign", async (request, reply) => {
    return createcampaignController(request, reply);
  });
  fastify.post("/start-campaign/:campaignId", async (request, reply) => {
    return startCampaignController(request, reply);
  });
  fastify.get("/delete", async (request, reply) => {
    return deleteCampaignsController(request, reply);
  });
  fastify.post("/:campaignId/calls", async (request, reply) => {
    return getCampaignCallsController(request, reply);
  });
  fastify.post("/:campaignId/pause", async (request, reply) => {
    return pauseCampaign(request, reply);
  });
  fastify.post("/:campaignId/resume", async (request, reply) => {
    return resumeCampaign(request, reply);
  });
  fastify.post("/:campaignId/restart", async (request, reply) => {
    return restartCampaign(request, reply);
  });
};
