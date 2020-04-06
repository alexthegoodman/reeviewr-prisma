import { PrismaClient } from "../__generated__/prisma-client";
import * as faker from "faker";

const prisma = new PrismaClient();

export default async function seedTags() {
  const tagSchema = {
    // itemName: "2019",
    itemContent: "",
    itemType: "default",
    itemStatus: "active",
  };

  const tag1 = await prisma.tag.create({
    data: {
      ...tagSchema,
      itemName: "2019",
    },
  });
  const tag2 = await prisma.tag.create({
    data: {
      ...tagSchema,
      itemName: "Space",
    },
  });

  return {
    tag1,
    tag2,
  };
}
