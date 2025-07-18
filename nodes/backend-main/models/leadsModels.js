import { PrismaClient } from "@prisma/client";
const Prisma = new PrismaClient();

export async function getLeadsWithDetails() {
  return await Prisma.leads.findMany({
    include: {
      campaigns: true,
    },
  });
}
