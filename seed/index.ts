import seedUsers from "./user";
import seedCats from "./cat";
import seedTags from "./tag";
import seedSpaces from "./space";
import seedPosts from "./post";
import seedNotifs from "./notif";
import seedThreads from "./thread";
import clean from "./clean";

// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../__generated__/prisma-client";
import * as faker from "faker";

const prisma = new PrismaClient();

async function main() {
  const { user1, user2, user3, user4, user5 } = await seedUsers();
  const { cat1, cat2 } = await seedCats();
  const { tag1, tag2 } = await seedTags();
  const { space1, space2, space3 } = await seedSpaces(
    user1,
    user2,
    user3,
    user4,
    user5,
    cat1,
    cat2
  );
  const { post1, post2, post3, post4 } = await seedPosts(
    user1,
    space1,
    user2,
    space2,
    tag1,
    space3
  );
  const { notif1 } = await seedNotifs(user1, user2, space1, post1);
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
