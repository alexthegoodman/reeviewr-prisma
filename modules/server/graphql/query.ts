import { idArg, makeSchema, objectType } from "@prisma/nexus";

export const Query = objectType({
  name: "Query",
  definition(t) {
    t.crud.findOneUser();
    t.crud.findManyUser({ filtering: true, ordering: true });
    t.crud.findManyUserMeta({ filtering: true, ordering: true });

    t.crud.findOnePod();
    t.crud.findManyPod({ filtering: true, ordering: true });
    t.crud.findManyPodMeta({ filtering: true, ordering: true });

    t.crud.findOnePost();
    t.crud.findManyPost({ filtering: true, ordering: true });
    t.crud.findManyPostMeta({ filtering: true, ordering: true });

    t.crud.findOneReview();
    t.crud.findManyReview({ filtering: true, ordering: true });
    t.crud.findManyReviewMeta({ filtering: true, ordering: true });

    t.crud.findOneAnnotation();
    t.crud.findManyAnnotation({ filtering: true, ordering: true });
    t.crud.findManyAnnotationMeta({ filtering: true, ordering: true });

    t.crud.findOneQuestion();
    t.crud.findManyQuestion({ filtering: true, ordering: true });
    t.crud.findManyQuestionMeta({ filtering: true, ordering: true });

    t.crud.findOneThread();
    t.crud.findManyThread({ filtering: true, ordering: true });
    t.crud.findManyThreadMeta({ filtering: true, ordering: true });

    t.crud.findOneMessage();
    t.crud.findManyMessage({ filtering: true, ordering: true });
    t.crud.findManyMessageMeta({ filtering: true, ordering: true });

    t.crud.findOneNotification();
    t.crud.findManyNotification({ filtering: true, ordering: true });
    t.crud.findManyNotificationMeta({ filtering: true, ordering: true });

    t.crud.findOneFavorite();
    t.crud.findManyFavorite({ filtering: true, ordering: true });

    t.crud.findOneTag();
    t.crud.findManyTag({ filtering: true, ordering: true });

    t.crud.findOneCategory();
    t.crud.findManyCategory({ filtering: true, ordering: true });
  },
});
