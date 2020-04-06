// import { idArg, makeSchema, objectType } from "@prisma/nexus";
// import { schema } from "nexus";
import {
  mutationType,
  idArg,
  intArg,
  stringArg,
  objectType,
} from "@nexus/schema";
import { PrismaClient } from "../../../__generated__/prisma-client";

// https://www.nexusjs.org/#/plugins/prisma

export const Mutation = mutationType({
  // name: "Mutation",
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
        await ctx.prisma.user.update({
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
        await ctx.prisma.pod.update({
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
        await ctx.prisma.post.update({
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
        await ctx.prisma.review.update({
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
        await ctx.prisma.annotation.update({
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
        await ctx.prisma.question.update({
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
        await ctx.prisma.thread.update({
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
        await ctx.prisma.message.update({
          where: { id },
          data: { itemDeleted: true },
        });

        return true;
      },
    });
  },
});
