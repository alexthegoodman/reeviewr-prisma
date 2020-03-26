import Photon from "@generated/photon";
import { NOTIFICATION_CODE } from "../modules/services/NOTIFICATION_CODE";
import * as faker from "faker";

const photon = new Photon();

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

  const thread1 = await photon.threads.create({
    data: {
      ...threadSchema,
    },
  });

  return {
    thread1,
  };
}
