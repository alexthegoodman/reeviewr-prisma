import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "../__generated__/prisma-client";
import * as faker from "faker";

const prisma = new PrismaClient();

export default async function seedUsers() {
  // try {
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

  const user1 = await prisma.user
    .create({
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
    })
    .catch((err) => {
      console.error("ERR", err);
    });
  const user2 = await prisma.user.create({
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
  // } catch (error) {
  //   console.error("ERROR", JSON.stringify(error), error);
  //   return {
  //     user1: null,
  //     user2: null,
  //   };
  // }
}
