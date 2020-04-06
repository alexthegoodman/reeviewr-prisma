import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "../__generated__/prisma-client";
import * as faker from "faker";

const prisma = new PrismaClient();

export default async function seedCats() {
  const catSchema = {
    // itemName: "Music",
    itemContent: "",
    itemType: "default",
    itemStatus: "active",
  };

  const cat1 = await prisma.category.create({
    data: {
      ...catSchema,
      itemName: "Music",
    },
  });

  const cat2 = await prisma.category.create({
    data: {
      ...catSchema,
      itemName: "Painting",
    },
  });

  return {
    cat1,
    cat2,
  };
}
