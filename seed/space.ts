// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../__generated__/prisma-client";
import * as faker from "faker";

const prisma = new PrismaClient({ log: ["query", "info", "warn"] });

export default async function seedSpaces(
  user1,
  user2,
  user3,
  user4,
  user5,
  cat1,
  cat2
) {
  const spaceSchema = {
    user: { connect: { id: user1.id } },
    itemType: "default",
    itemStatus: "active",
    // itemUrlSegment: faker.lorem.slug(),
    // itemName: faker.name.findName(),
    itemContent: "",
    itemDeleted: false,
    itemMeta: {
      create: [
        {
          metaName: "description",
          metaValue: `need lorem ipsum package`,
          metaType: "default",
        },
        {
          metaName: "postType",
          metaValue: `Image`,
          metaType: "default",
        },
        {
          metaName: "privateSpace",
          metaValue: ``,
          metaType: "default",
        },
        {
          metaName: "bannerFilename",
          metaValue: `me_circle.jpg`,
          metaType: "default",
        },
      ],
    },
  };

  const space1 = await prisma.space.create({
    data: {
      ...spaceSchema,
      itemUrlSegment: faker.lorem.slug(),
      itemName: "Watercolor Painting",
      categories: { connect: { id: cat1.id } },
      members: { connect: [{ id: user2.id }, { id: user3.id }] },
    },
  });

  const space2 = await prisma.space.create({
    data: {
      ...spaceSchema,
      itemUrlSegment: faker.lorem.slug(),
      itemName: "Oil Painting",
      categories: { connect: { id: cat1.id } },
      members: { connect: [{ id: user4.id }, { id: user5.id }] },
    },
  });

  const space3 = await prisma.space.create({
    data: {
      ...spaceSchema,
      itemUrlSegment: faker.lorem.slug(),
      itemName: "Landscapes and Outdoors",
      categories: { connect: { id: cat2.id } },
      members: { connect: [{ id: user1.id }] },
    },
  });

  return {
    space1,
    space2,
    space3,
  };
}
