import Photon from "@generated/photon";
import * as faker from "faker";

const photon = new Photon();

export default async function clean() {
  await photon.messageMetas.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.messages.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.threadMetas.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.threads.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.notificationMetas.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.notifications.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.postMetas.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.posts.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.podMetas.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.pods.deleteMany({
    where: { id: { contains: "" } },
  });
  await photon.userMetas.deleteMany({
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
