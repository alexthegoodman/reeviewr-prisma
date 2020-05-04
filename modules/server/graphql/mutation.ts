// import { schema.idArg, makeSchema, objectType } from "@prisma/nexus";
import { schema } from "nexus";
// import {
//   mutationType,
//   schema.idArg,
//   intArg,
//   stringArg,
//   objectType,
// } from "@nexus/schema";
import { PrismaClient } from "../../../__generated__/prisma-client";

// https://www.nexusjs.org/#/plugins/prisma

export const Mutation = schema.mutationType({
  // name: "Mutation",
  definition(t) {
    t.crud.createOneUser();
    t.crud.createOneSpace();
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
    t.crud.updateOneSpace();
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
      args: { id: schema.idArg() },
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
      args: { id: schema.idArg() },
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
      args: { id: schema.idArg() },
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
      args: { id: schema.idArg() },
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
      args: { id: schema.idArg() },
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
      args: { id: schema.idArg() },
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
      args: { id: schema.idArg() },
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
      args: { id: schema.idArg() },
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
