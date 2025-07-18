import { PrismaClient } from "../generated/prisma/index.js";
const Prisma = new PrismaClient();

export async function getLeadsWithDetails() {
  return await Prisma.leads.findMany({
    include: {
      campaigns: true,
    },
  });
}
