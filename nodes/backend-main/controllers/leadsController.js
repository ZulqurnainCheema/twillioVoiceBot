import { getLeadsWithDetails } from "../models/leadsModels.js";

const getLeadsController = async (request, reply) => {
  try {
    const leads = await getLeadsWithDetails();

    reply.send(leads);
  } catch (error) {
    request.log.error("Failed to fetch leads", error);
    reply.status(500).send({ error: "Failed to load leads data" });
  }
};

export { getLeadsController };
