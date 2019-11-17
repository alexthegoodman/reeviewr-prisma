import { idArg, makeSchema, objectType } from "@prisma/nexus";

export const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.crud.createOneUser();
    t.crud.createOnePod();
    t.crud.createOnePost();
    t.crud.createOneReview();
    t.crud.createOneAnnotation();
    t.crud.createOneQuestion();
    t.crud.createOneThread();
    t.crud.createOneMessage();
    t.crud.createOneNotification();
    t.crud.createOneFavorite();
    t.crud.createOneTag();
    t.crud.createOneCategory();

    t.crud.updateOneUser();
    t.crud.updateOnePod();
    t.crud.updateOnePost();
    t.crud.updateOneReview();
    t.crud.updateOneAnnotation();
    t.crud.updateOneQuestion();
    t.crud.updateOneThread();
    t.crud.updateOneMessage();
    t.crud.updateOneNotification();
    t.crud.updateOneFavorite();
    t.crud.updateOneTag();
    t.crud.updateOneCategory();
  },
});
