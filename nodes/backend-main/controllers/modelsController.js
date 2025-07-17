import {
  createNewModel,
  getModels,
  deleteModels,
} from "../models/modelModels.js";
import { logger } from "../utils/logger.js";

const createNewModelController = async (request, reply) => {
  const { instructions, modelName, trainingData } = request.body;

  try {
    // Validate inputs
    if (!instructions || !modelName || !trainingData) {
      return reply.status(400).send({
        error:
          "All parameters (instructions, modelName, trainingData) are required.",
      });
    }
    if (
      typeof modelName !== "string" ||
      typeof instructions !== "string" ||
      typeof trainingData !== "string"
    ) {
      return reply.status(400).send({
        error:
          "Invalid input types: modelName, trainingData and instructions should be strings.",
      });
    }

    const newModel = await createNewModel(
      instructions,
      modelName,
      trainingData
    );

    if (!newModel) {
      return reply.status(500).send({ error: "Failed to create new model." });
    }

    logger.info("New model created:", newModel);
    return reply.status(201).send(newModel); // Return the newly created model
  } catch (error) {
    logger.error("Error creating new model:", error);
    return reply.status(500).send({ error: "Internal server error" });
  }
};

const getModelsController = async (request, reply) => {
  try {
    const models = await getModels(); // Fetch the list of models
    reply.status(201).send(models); // Return the list of models
  } catch (error) {
    logger.error("Error fetching models:", error);
    reply.status(500).send(error); // Re-throw the error for further handling
  }
};

const deleteModelsController = async (request, reply) => {
  const { modelId } = request.query;
  try {
    const deletedModel = await deleteModels(Number(modelId));
    reply.status(201).send(deletedModel);
  } catch (error) {
    logger.error("Error while deleting", error.message);
    reply.status(500).send(error);
  }
};
export {
  createNewModelController,
  getModelsController,
  deleteModelsController,
};
