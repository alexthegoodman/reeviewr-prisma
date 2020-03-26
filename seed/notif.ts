import Photon from "@generated/photon";
import { NOTIFICATION_CODE } from "../modules/services/NOTIFICATION_CODE";
import * as faker from "faker";

const photon = new Photon();

export default async function seedNotifs(user1, user2, post1) {
  const notifSchema = {
    // user: { connect: { id: user1.id } },
    itemName: NOTIFICATION_CODE.A001,
    itemContent: "",
    itemType: "default",
    itemStatus: "active",
    sender: { connect: { id: user2.id } },
    receiver: { connect: { id: user1.id } },
    // pod: { connect: { id: pod1.id } },
    post: { connect: { id: post1.id } },
    // itemMeta: {
    //   create: [
    //     {
    //       metaName: "action",
    //       metaValue: NOTIFICATION_CODE.A001,
    //       metaType: "active"
    //     }
    //   ]
    // }
  };

  const notif1 = await photon.notifications.create({
    data: {
      ...notifSchema,
    },
  });

  return {
    notif1,
  };
}
