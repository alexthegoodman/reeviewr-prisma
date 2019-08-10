import Photon from "@generated/photon";
import uuid = require("uuid");

const photon = new Photon();

async function clean() {
  await photon.podMetas.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.pods.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.users.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.categories.deleteMany({
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
      privateHash: "1111",
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
      privateHash: "1112",
      forgotHash: "1112",
      confirmHash: "1112",
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
            metaName: "filename",
            metaValue: `me_circle.jpg`,
            metaType: "default",
          },
        ],
      },
      // posts: { connect: {} },
      categories: { connect: { id: cat1.id } },
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
