import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "../__generated__/prisma-client";
import * as faker from "faker";

const prisma = new PrismaClient();

export default async function seedPods(user1, cat1, user2, cat2) {
  const podSchema = {
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
          metaName: "privatePod",
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

  const pod1 = await prisma.pod.create({
    data: {
      ...podSchema,
      itemUrlSegment: faker.lorem.slug(),
      itemName: faker.name.findName(),
      categories: { connect: { id: cat1.id } },
    },
  });

  const pod2 = await prisma.pod.create({
    data: {
      ...podSchema,
      itemUrlSegment: faker.lorem.slug(),
      itemName: faker.name.findName(),
      categories: { connect: { id: cat1.id } },
    },
  });

  const pod3 = await prisma.pod.create({
    data: {
      ...podSchema,
      itemUrlSegment: faker.lorem.slug(),
      itemName: faker.name.findName(),
      categories: { connect: { id: cat2.id } },
    },
  });

  return {
    pod1,
    pod2,
    pod3,
  };
}
