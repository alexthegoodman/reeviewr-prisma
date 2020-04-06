import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "../__generated__/prisma-client";
import * as faker from "faker";

const prisma = new PrismaClient();

export default async function seedThreads(user1, user2) {
  const threadSchema = {
    participants: { connect: [{ id: user1.id }, { id: user2.id }] },
    itemName: "Private Thread",
    itemContent: "",
    itemType: "default",
    itemStatus: "active",
    messages: {
      create: [
        {
          user: { connect: { id: user1.id } },
          itemName: "Private Message",
          itemContent: "",
          itemType: "default",
          itemStatus: "active",
          itemMeta: {
            create: [
              {
                metaName: "content",
                metaValue: "This is the message with no HTML",
                metaType: "default",
              },
            ],
          },
        },
        {
          user: { connect: { id: user2.id } },
          itemName: "Private Message",
          itemContent: "",
          itemType: "default",
          itemStatus: "active",
          itemMeta: {
            create: [
              {
                metaName: "content",
                metaValue: "Here is the response",
                metaType: "default",
              },
            ],
          },
        },
      ],
    },
  };

  const thread1 = await prisma.thread.create({
    data: {
      ...threadSchema,
    },
  });

  return {
    thread1,
  };
}
