import seedUsers from "./user";
import seedCats from "./cat";
import seedTags from "./tag";
import seedPods from "./pod";
import seedPosts from "./post";
import seedNotifs from "./notif";
import seedThreads from "./thread";
import clean from "./clean";

import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "../__generated__/prisma-client";
import * as faker from "faker";

const prisma = new PrismaClient();

async function main() {
  const { user1, user2 } = await seedUsers();
  const { cat1, cat2 } = await seedCats();
  const { tag1, tag2 } = await seedTags();
  const { pod1, pod2, pod3 } = await seedPods(user1, cat1, user2, cat2);
  const { post1, post2, post3, post4 } = await seedPosts(
    user1,
    pod1,
    user2,
    pod2,
    tag1,
    pod3
  );
  const { notif1 } = await seedNotifs(user1, user2, post1);
  const { thread1 } = await seedThreads(user1, user2);
}

clean()
  .catch((e) => console.error(e))
  .finally(async () => {
    console.info("cleaned");
    // reload
    main()
      .catch((e) => console.error(e))
      .finally(async () => {
        console.info("disconnect");
        await prisma.disconnect();
      });
  });
