// import { idArg, makeSchema, objectType } from "@prisma/nexus";
import { schema } from "nexus";
// import { idArg, intArg, queryType, stringArg } from "@nexus/schema";
// import { makeSchema, mutationType, objectType, queryType } from '@nexus/schema';

// https://www.nexusjs.org/#/plugins/prisma

export const Query = schema.queryType({
  // name: "Query",
  definition(t) {
    // t.crud.findOneUser();
    // t.crud.findManyUser({ filtering: true, ordering: true });
    // t.crud.findManyUserMeta({ filtering: true, ordering: true });

    t.crud.user();
    t.crud.users({ filtering: true, ordering: true });
    t.crud.userMetas({ filtering: true, ordering: true });

    // t.crud.pod();
    // t.crud.pods({ filtering: true, ordering: true });
    // t.crud.podMetas({ filtering: true, ordering: true });

    // t.crud.post();
    // t.crud.posts({ filtering: true, ordering: true });
    // t.crud.postMetas({ filtering: true, ordering: true });

    // t.crud.review();
    // t.crud.reviews({ filtering: true, ordering: true });
    // t.crud.reviewMetas({ filtering: true, ordering: true });

    // t.crud.annotation();
    // t.crud.annotations({ filtering: true, ordering: true });
    // t.crud.annotationMetas({ filtering: true, ordering: true });

    // t.crud.question();
    // t.crud.questions({ filtering: true, ordering: true });
    // t.crud.questionMetas({ filtering: true, ordering: true });

    // t.crud.thread();
    // t.crud.threads({ filtering: true, ordering: true });
    // t.crud.threadMetas({ filtering: true, ordering: true });

    // t.crud.message();
    // t.crud.messages({ filtering: true, ordering: true });
    // t.crud.messageMetas({ filtering: true, ordering: true });

    // t.crud.notification();
    // t.crud.notifications({ filtering: true, ordering: true });
    // t.crud.notificationMetas({ filtering: true, ordering: true });

    // t.crud.favorite();
    // t.crud.favorites({ filtering: true, ordering: true });

    // t.crud.tag();
    // t.crud.tags({ filtering: true, ordering: true });

    // t.crud.category();
    // t.crud.categories({ filtering: true, ordering: true });
  },
});
