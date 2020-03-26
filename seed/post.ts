import Photon from "@generated/photon";
import * as faker from "faker";

const photon = new Photon();

export default async function seedPosts(user1, pod1, user2, pod2, tag1) {
  const postSchema = {
    // user: { connect: { id: user1.id } },
    // pod: { connect: { id: pod1.id } },
    itemType: "default",
    itemStatus: "active",
    // itemUrlSegment: faker.lorem.slug(),
    // itemName: faker.lorem.words(),
    itemMimeType: "image/jpg",
    itemContent: "",
    itemDeleted: false,
    itemMeta: {
      create: [
        {
          metaName: "content",
          metaValue: ``,
          metaType: "default",
        },
        {
          metaName: "contentFilename",
          metaValue: ``,
          metaType: "default",
        },
        {
          metaName: "description",
          metaValue: faker.lorem.words(),
          metaType: "default",
        },
        {
          metaName: "questionType1",
          metaValue: `essay`,
          metaType: "default",
        },
        {
          metaName: "questionContent1",
          metaValue: `question one`,
          metaType: "default",
        },
        {
          metaName: "questionOne1",
          metaValue: ``,
          metaType: "default",
        },
        {
          metaName: "questionTwo1",
          metaValue: ``,
          metaType: "default",
        },
        {
          metaName: "questionThree1",
          metaValue: ``,
          metaType: "default",
        },
        {
          metaName: "questionFour1",
          metaValue: ``,
          metaType: "default",
        },
        {
          metaName: "questionType2",
          metaValue: `essay`,
          metaType: "default",
        },
        {
          metaName: "questionContent2",
          metaValue: `question two`,
          metaType: "default",
        },
        {
          metaName: "questionOne2",
          metaValue: ``,
          metaType: "default",
        },
        {
          metaName: "questionTwo2",
          metaValue: ``,
          metaType: "default",
        },
        {
          metaName: "questionThree2",
          metaValue: ``,
          metaType: "default",
        },
        {
          metaName: "questionFour2",
          metaValue: ``,
          metaType: "default",
        },
        {
          metaName: "questionType3",
          metaValue: `essay`,
          metaType: "default",
        },
        {
          metaName: "questionContent3",
          metaValue: `question three`,
          metaType: "default",
        },
        {
          metaName: "questionOne3",
          metaValue: ``,
          metaType: "default",
        },
        {
          metaName: "questionTwo3",
          metaValue: ``,
          metaType: "default",
        },
        {
          metaName: "questionThree3",
          metaValue: ``,
          metaType: "default",
        },
        {
          metaName: "questionFour3",
          metaValue: ``,
          metaType: "default",
        },
      ],
    },
    tags: {
      connect: [{ id: tag1.id }],
    },
  };

  const post1 = await photon.posts.create({
    data: {
      ...postSchema,
      user: { connect: { id: user1.id } },
      pod: { connect: { id: pod1.id } },
      itemUrlSegment: faker.lorem.slug(),
      itemName: faker.lorem.words(),
    },
  });

  const post2 = await photon.posts.create({
    data: {
      ...postSchema,
      user: { connect: { id: user1.id } },
      pod: { connect: { id: pod1.id } },
      itemUrlSegment: faker.lorem.slug(),
      itemName: faker.lorem.words(),
    },
  });

  const post3 = await photon.posts.create({
    data: {
      ...postSchema,
      user: { connect: { id: user2.id } },
      pod: { connect: { id: pod2.id } },
      itemUrlSegment: faker.lorem.slug(),
      itemName: faker.lorem.words(),
    },
  });

  return {
    post1,
    post2,
    post3,
  };
}
