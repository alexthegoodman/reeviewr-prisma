import Photon from "@generated/photon";
import * as faker from "faker";

const photon = new Photon();

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

  const pod1 = await photon.pods.create({
    data: {
      ...podSchema,
      itemUrlSegment: faker.lorem.slug(),
      itemName: faker.name.findName(),
      categories: { connect: { id: cat1.id } },
    },
  });

  const pod2 = await photon.pods.create({
    data: {
      ...podSchema,
      itemUrlSegment: faker.lorem.slug(),
      itemName: faker.name.findName(),
      categories: { connect: { id: cat1.id } },
    },
  });

  const pod3 = await photon.pods.create({
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
