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

    t.boolean("deleteOneUser", {
      args: { id: idArg() },
      nullable: true,
      resolve: async (_, { id }, ctx) => {
        await ctx.photon.users.update({
          where: { id },
          data: { userDeleted: true },
        });

        return true;
      },
    });

    t.boolean("deleteOnePod", {
      args: { id: idArg() },
      nullable: true,
      resolve: async (_, { id }, ctx) => {
        await ctx.photon.pods.update({
          where: { id },
          data: { itemDeleted: true },
        });
        return true;
      },
    });

    t.boolean("deleteOnePost", {
      args: { id: idArg() },
      nullable: true,
      resolve: async (_, { id }, ctx) => {
        await ctx.photon.posts.update({
          where: { id },
          data: { itemDeleted: true },
        });

        return true;
      },
    });

    t.boolean("deleteOneReview", {
      args: { id: idArg() },
      nullable: true,
      resolve: async (_, { id }, ctx) => {
        await ctx.photon.reviews.update({
          where: { id },
          data: { itemDeleted: true },
        });

        return true;
      },
    });

    t.boolean("deleteOneAnnotation", {
      args: { id: idArg() },
      nullable: true,
      resolve: async (_, { id }, ctx) => {
        await ctx.photon.annotations.update({
          where: { id },
          data: { itemDeleted: true },
        });

        return true;
      },
    });

    t.boolean("deleteOneQuestion", {
      args: { id: idArg() },
      nullable: true,
      resolve: async (_, { id }, ctx) => {
        await ctx.photon.questions.update({
          where: { id },
          data: { itemDeleted: true },
        });

        return true;
      },
    });

    t.boolean("deleteOneThread", {
      args: { id: idArg() },
      nullable: true,
      resolve: async (_, { id }, ctx) => {
        await ctx.photon.threads.update({
          where: { id },
          data: { itemDeleted: true },
        });

        return true;
      },
    });

    t.boolean("deleteOneMessage", {
      args: { id: idArg() },
      nullable: true,
      resolve: async (_, { id }, ctx) => {
        await ctx.photon.messages.update({
          where: { id },
          data: { itemDeleted: true },
        });

        return true;
      },
    });
  },
});
