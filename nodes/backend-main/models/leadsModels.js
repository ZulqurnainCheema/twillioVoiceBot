import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const Prisma = new PrismaClient();

export async function getLeadsWithDetails() {
  return await Prisma.leads.findMany({
    include: {
      campaigns: true,
    },
  });
}
