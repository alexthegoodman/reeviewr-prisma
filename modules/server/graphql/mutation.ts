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
  },
});
