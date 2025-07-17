import { PrismaClient } from "../generated/prisma/index.js";
import fs from 'fs';
const Prisma = new PrismaClient();
import { logger } from "../utils/logger.js";
const createNewModel = async (instructions, modelName, trainingData) => {
  try {
    // Validate inputs
    if (!instructions || !modelName || !trainingData) {
      throw new Error(
        "All parameters (instructions, modelName, trainingData) are required."
      );
    }
    if (
      typeof modelName !== "string" ||
      typeof instructions !== "string" ||
      typeof trainingData !== "string"
    ) {
      throw new Error(
        "Invalid input types: modelName,trainingData and instructions should be strings."
      );
    }

    const newModel = Prisma.models.create({
      data: {
        modelName: modelName,
        instructions: instructions,
        trainingData: trainingData,
      },
    });

    if (newModel === null) {
      throw new Error("Failed to create new model.");
    }
    logger.info("New model created:", newModel);

    return newModel; // Return the newly created model
  } catch (error) {
    logger.error("Error creating new model:", error);
    throw error; // Re-throw the error for further handling
  }
};

const getModels = async () => {
  try {
    const models = await Prisma.models.findMany();
    return models; // Return the list of models
  } catch (error) {
    logger.error("Error fetching models:", error);
    throw error; // Re-throw the error for further handling
  }
};

const deleteModels = async (id) => {
  try {
    const deleteModel = await Prisma.models.delete({
        where:{id: id}
    });
    return deleteModel;
  } catch(error){
    throw error;
  }
};

export { createNewModel, getModels,deleteModels };
