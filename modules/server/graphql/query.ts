import { idArg, makeSchema, objectType } from "@prisma/nexus";

export const Query = objectType({
  name: "Query",
  definition(t) {
    t.crud.findOneUser();
    t.crud.findManyUser();

    t.crud.findOnePod();
    t.crud.findManyPod();

    t.crud.findOnePost();
    t.crud.findManyPost();

    t.crud.findOneReview();
    t.crud.findManyReview();

    t.crud.findOneAnnotation();
    t.crud.findManyAnnotation();

    t.crud.findOneQuestion();
    t.crud.findManyQuestion();

    t.crud.findOneThread();
    t.crud.findManyThread();

    t.crud.findOneMessage();
    t.crud.findManyMessage();

    t.crud.findOneNotification();
    t.crud.findManyNotification();

    t.crud.findOneFavorite();
    t.crud.findManyFavorite();

    t.crud.findOneTag();
    t.crud.findManyTag();

    t.crud.findOneCategory();
    t.crud.findManyCategory();
  },
});
