import { prisma } from "./prisma";

export const getBuah = async () => {
  try {
    const buahs = await prisma.buah.findMany();
    return buahs;
  } catch (error: any) {
    throw new Error("Failed to fetch contact data");
  }
};
