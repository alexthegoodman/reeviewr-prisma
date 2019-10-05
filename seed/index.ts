import Photon from "@generated/photon";
import uuid = require("uuid");
import { NOTIFICATION_CODE } from "../modules/services/NOTIFICATION_CODE";

const photon = new Photon();

async function clean() {
  await photon.notificationMetas.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.notifications.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.podMetas.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.pods.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.posts.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.users.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.categories.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.tags.deleteMany({
    where: { id: { contains: "" } },
  });
}

async function main() {
  const user1 = await photon.users.create({
    data: {
      userEmail: "test@email.com",
      userConfirmed: 0,
      userDeleted: false,
      // userMeta,
      userPassword:
        "$2a$12$QG3qjuizq4bb24Gl2hhhSegdv7XHpv0nJrc1Fw/920gOMNSzn80A.", // testing
      userType: 1,
      publicHash: "1111",
      id: "1111",
      forgotHash: "1111",
      confirmHash: "1111",
    },
  });
  const user2 = await photon.users.create({
    data: {
      userEmail: "test-2@email.com",
      userConfirmed: 0,
      userDeleted: false,
      // userMeta,
      userPassword:
        "$2a$12$QG3qjuizq4bb24Gl2hhhSegdv7XHpv0nJrc1Fw/920gOMNSzn80A.", // testing
      userType: 1,
      publicHash: "1112",
      id: "1112",
      forgotHash: "1112",
      confirmHash: "1112",
    },
  });
  const notif1 = await photon.notifications.create({
    data: {
      user: { connect: { id: user1.id } },
      itemName: NOTIFICATION_CODE.A001,
      itemContent: "",
      itemType: "default",
      itemStatus: "active",
      itemMeta: {
        create: [
          {
            metaName: "sender",
            metaValue: user1.id,
            metaType: "active"
          },
          {
            metaName: "receiver",
            metaValue: user2.id,
            metaType: "active"
          },
          {
            metaName: "action",
            metaValue: NOTIFICATION_CODE.A001,
            metaType: "active"
          }
        ]
      }
    },
  });
  const cat1 = await photon.categories.create({
    data: {
      itemName: "Music",
      itemContent: "",
      itemType: "default",
      itemStatus: "active",
    },
  });
  const cat2 = await photon.categories.create({
    data: {
      itemName: "Painting",
      itemContent: "",
      itemType: "default",
      itemStatus: "active",
    },
  });
  const tag1 = await photon.tags.create({
    data: {
      itemName: "2019",
      itemContent: "",
      itemType: "default",
      itemStatus: "active",
    },
  });
  const tag2 = await photon.tags.create({
    data: {
      itemName: "Space",
      itemContent: "",
      itemType: "default",
      itemStatus: "active",
    },
  });
  const pod1 = await photon.pods.create({
    data: {
      user: { connect: { id: user1.id } },
      itemType: "default",
      itemStatus: "active",
      itemUrlSegment: "pod-name",
      itemName: "pod name",
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
      // posts: { connect: {} },
      categories: { connect: { id: cat1.id } },
    },
  });
  const post1 = await photon.posts.create({
    data: {
      user: { connect: { id: user1.id } },
      pod: { connect: { id: pod1.id } },
      itemType: "default",
      itemStatus: "active",
      itemUrlSegment: "post-name",
      itemMimeType: "image/jpg",
      itemName: "post name",
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
            metaValue: `lorem ipsum`,
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
    },
  });
}

// delete
clean()
  .catch(e => console.error(e))
  .finally(async () => {
    console.info("cleaned");
    // reload
    main()
      .catch(e => console.error(e))
      .finally(async () => {
        await photon.disconnect();
      });
  });
