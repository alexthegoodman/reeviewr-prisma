// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../__generated__/prisma-client";
import * as faker from "faker";

const prisma = new PrismaClient();

export default async function seedUsers() {
  const getDefaultUser = () => {
    return {
      userConfirmed: 0,
      userDeleted: false,
      // userMeta,
      userPassword:
        "$2a$12$QG3qjuizq4bb24Gl2hhhSegdv7XHpv0nJrc1Fw/920gOMNSzn80A.", // testing
      userType: 1,
      userEmail: faker.internet.email(),
      privateHash: faker.random.uuid(),
      publicHash: faker.random.uuid(),
      id: faker.random.uuid(),
      forgotHash: faker.random.uuid(),
      confirmHash: faker.random.uuid(),
      userMeta: {
        create: [
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
    };
  };

  const user1 = await prisma.user.create({
    data: {
      ...getDefaultUser(),
      userEmail: "test@email.com",
    },
  });
  const user2 = await prisma.user.create({
    data: {
      ...getDefaultUser(),
    },
  });
  const user3 = await prisma.user.create({
    data: {
      ...getDefaultUser(),
    },
  });
  const user4 = await prisma.user.create({
    data: {
      ...getDefaultUser(),
    },
  });
  const user5 = await prisma.user.create({
    data: {
      ...getDefaultUser(),
    },
  });

  return {
    user1,
    user2,
    user3,
    user4,
    user5,
  };
}
