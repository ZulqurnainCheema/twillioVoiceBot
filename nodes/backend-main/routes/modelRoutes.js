import {
  createNewModelController,
  deleteModelsController,
  getModelsController,
} from "../controllers/modelsController.js";

const createModelSchema = {
  body: {
    type: "object",
    required: ["instructions", "modelName", "trainingData"],
    properties: {
      instructions: { type: "string" },
      modelName: { type: "string" },
      trainingData: { type: "string" },
    },
  },
  Response: {
    201: {
      type: "object",
      properties: {
        id: { type: "integer" },
        modelName: { type: "string" },
        instructions: { type: "string" },
        trainingData: { type: "string" },
        createdAt: { type: "string", format: "date-time" },
      },
    },
  },
};

const getModelsSchema = {
  Response: {
    201: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "integer" },
          modelName: { type: "string" },
          instructions: { type: "string" },
          trainingData: { type: "string" },
          createdAt: { type: "string", format: "date-time" },
        },
      },
    },
  },
};

export const modelRoutes = async (fastify, options) => {
  fastify.addHook("onRequest",fastify.authenticate)
  fastify.get("/", { schema: getModelsSchema }, async (request, reply) => {
    return getModelsController(request, reply);
  });
  fastify.get("/delete", async (request, reply) => {
    return deleteModelsController(request, reply);
  });
  fastify.post(
    "/create-model",
    { schema: createModelSchema },
    async (request, reply) => {
      return createNewModelController(request, reply);
    }
  );
};
