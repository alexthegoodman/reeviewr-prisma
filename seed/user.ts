import Photon from "@generated/photon";
import * as faker from "faker";

const photon = new Photon();

export default async function seedUsers() {
  const metaSchema = [
    {
      metaName: "points",
      metaValue: "10", // 100s? 1000s?
      metaType: "active",
    },
    {
      metaName: "profileFilename",
      metaValue: `me_circle.jpg`,
      metaType: "default",
    },
  ];

  const userSchema = {
    userConfirmed: 0,
    userDeleted: false,
    // userMeta,
    userPassword:
      "$2a$12$QG3qjuizq4bb24Gl2hhhSegdv7XHpv0nJrc1Fw/920gOMNSzn80A.", // testing
    userType: 1,
  };

  const user1 = await photon.users.create({
    data: {
      ...userSchema,
      userEmail: faker.internet.email(),
      privateHash: faker.random.uuid(),
      publicHash: faker.random.uuid(),
      id: faker.random.number().toString(),
      forgotHash: faker.random.uuid(),
      confirmHash: faker.random.uuid(),
      userMeta: {
        create: [
          ...metaSchema,
          {
            metaName: "firstName",
            metaValue: faker.name.firstName(),
            metaType: "active",
          },
          {
            metaName: "lastName",
            metaValue: faker.name.lastName(),
            metaType: "active",
          },
        ],
      },
    },
  });
  const user2 = await photon.users.create({
    data: {
      ...userSchema,
      userEmail: faker.internet.email(),
      privateHash: faker.random.uuid(),
      publicHash: faker.random.uuid(),
      id: faker.random.number().toString(),
      forgotHash: faker.random.uuid(),
      confirmHash: faker.random.uuid(),
      userMeta: {
        create: [
          ...metaSchema,
          {
            metaName: "firstName",
            metaValue: faker.name.firstName(),
            metaType: "active",
          },
          {
            metaName: "lastName",
            metaValue: faker.name.lastName(),
            metaType: "active",
          },
        ],
      },
    },
  });

  return {
    user1,
    user2,
  };
}
