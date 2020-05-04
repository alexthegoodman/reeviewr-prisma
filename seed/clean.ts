// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../__generated__/prisma-client";
import * as faker from "faker";

const prisma = new PrismaClient();

export default async function clean() {
  // await prisma
  //   .raw(
  //     `
  //   SELECT
  //     *
  //   FROM
  //     pg_catalog.pg_tables
  //   WHERE
  //     schemaname != 'pg_catalog'
  //   AND schemaname != 'information_schema';
  // `
  //   )
  //   .then((data) => {
  //     console.info("data", data);
  //   });

  // await prisma.raw("TRUNCATE AnnotationMeta;");

  await prisma.messageMeta.deleteMany({
    where: { id: { contains: "" } },
  });
  await prisma.message.deleteMany({
    where: { id: { contains: "" } },
  });
  await prisma.threadMeta.deleteMany({
    where: { id: { contains: "" } },
  });
  await prisma.thread.deleteMany({
    where: { id: { contains: "" } },
  });
  await prisma.notificationMeta.deleteMany({
    where: { id: { contains: "" } },
  });
  await prisma.notification.deleteMany({
    where: { id: { contains: "" } },
  });
  await prisma.postMeta.deleteMany({
    where: { id: { contains: "" } },
  });
  await prisma.post.deleteMany({
    where: { id: { contains: "" } },
  });
  await prisma.spaceMeta.deleteMany({
    where: { id: { contains: "" } },
  });
  await prisma.space.deleteMany({
    where: { id: { contains: "" } },
  });
  await prisma.userMeta.deleteMany({
    where: { id: { contains: "" } },
  });
  await prisma.user.deleteMany({
    where: { id: { not: "" } },
  });
  await prisma.category.deleteMany({
    where: { id: { contains: "" } },
  });
  await prisma.tag.deleteMany({
    where: { id: { contains: "" } },
  });
}
