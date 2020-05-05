// import { idArg, intArg, queryType, stringArg, objectType } from "@nexus/schema";
import { schema } from "nexus";

export const User = schema.objectType({
  name: "User",
  // rootTyping: "User",
  definition(t) {
    t.model.id();
    t.model.userType();
    t.model.userEmail();
    t.model.publicHash();
    t.model.privateHash();
    t.model.confirmHash();
    t.model.forgotHash();
    t.model.userConfirmed();
    t.model.userDeleted();
    t.model.userMeta();

    // t.model.spaces({
    //   // type: Nexu,
    //   filtering: true,
    //   pagination: true,
    // });
    t.model.spaces({
      pagination: true,
      ordering: true,
      filtering: true,
    });
    t.model.memberOf();
    t.model.posts({
      pagination: true,
      ordering: true,
      filtering: true,
    });
    t.model.favorites();
    t.model.reviews();
    t.model.annotations();
    t.model.questions();
    t.model.threads();
    t.model.notifications();
    t.model.following();
    t.model.followers();
    t.model.sentNotifications();
    t.model.recievedNotifications();
    t.model.createdAt();
    t.model.updatedAt();

    // // resolver example
    // // resolver is needed for certain kinds of deep queries
    t.list.field("memberOfPosts", {
      type: "Post",
      args: { userId: schema.stringArg(), postId: schema.stringArg() },
      nullable: true,
      resolve: async (_, { userId, postId }, ctx) => {
        console.info("call", ctx, userId, postId);

        // posts with spaces with members contain this user
        const posts = await ctx.prisma.post.findMany({
          where: { space: { members: { some: { id: userId } } } },
        });

        console.info("posts", posts);

        return posts;
      },
    });
  },
});

export const UserMeta = schema.objectType({
  name: "UserMeta",
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.metaType();
    t.model.metaName();
    t.model.metaValue();
    t.model.metaDeleted();
  },
});

export const Space = schema.objectType({
  name: "Space",
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.members();
    t.model.itemType();
    t.model.itemStatus();
    t.model.itemUrlSegment();
    t.model.itemName();
    t.model.itemContent();
    t.model.itemDeleted();
    t.model.itemMeta();
    t.model.posts({
      pagination: true,
      ordering: true,
      filtering: true,
    });
    t.model.categories();

    // t.list.field("livePosts", {
    //   type: "Post",
    //   args: { first: schema.intArg() },
    //   nullable: true,
    //   resolve: async (space, { first = 1 }, ctx) => {
    //     // console.info("livePosts ctx", ctx);
    //     const prisma: PrismaClient<{}, never> = ctx["prisma"];

    //     // posts with spaces with members contain this user
    //     const posts = await prisma.post
    //       .findMany({
    //         where: { space: { id: { equals: space.id } }, itemDeleted: false },
    //         // where: { space: { id: space.id } },
    //         // where: { itemDeleted: false },
    //         first,
    //       })
    //       .catch((err) => {
    //         console.error("livePosts error", err);
    //       });

    //     return posts;
    //   },
    // });
  },
});

export const SpaceMeta = schema.objectType({
  name: "SpaceMeta",
  definition(t) {
    t.model.id();
    t.model.space();
    t.model.metaType();
    t.model.metaName();
    t.model.metaValue();
    t.model.metaDeleted();
  },
});

export const Post = schema.objectType({
  name: "Post",
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.space();
    t.model.itemType();
    t.model.itemStatus();
    t.model.itemUrlSegment();
    t.model.itemMimeType();
    t.model.itemName();
    t.model.itemContent();
    t.model.itemDeleted();
    t.model.itemMeta();
    t.model.tags();
    t.model.favorites();
    t.model.reviews();
    t.model.annotations();
    t.model.questions();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const PostMeta = schema.objectType({
  name: "PostMeta",
  definition(t) {
    t.model.id();
    t.model.post();
    t.model.metaType();
    t.model.metaName();
    t.model.metaValue();
    t.model.metaDeleted();
  },
});

export const Review = schema.objectType({
  name: "Review",
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.itemType();
    t.model.itemStatus();
    t.model.itemUrlSegment();
    t.model.itemMimeType();
    t.model.itemName();
    t.model.itemContent();
    t.model.itemDeleted();
    t.model.itemMeta();
    t.model.post();
    // t.model("Review").post();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const ReviewMeta = schema.objectType({
  name: "ReviewMeta",
  definition(t) {
    t.model.id();
    t.model.review();
    t.model.metaType();
    t.model.metaName();
    t.model.metaValue();
    t.model.metaDeleted();
  },
});

export const Annotation = schema.objectType({
  name: "Annotation",
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.itemType();
    t.model.itemStatus();
    t.model.itemUrlSegment();
    t.model.itemMimeType();
    t.model.itemName();
    t.model.itemContent();
    t.model.itemDeleted();
    t.model.itemMeta();
    t.model.post();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const AnnotationMeta = schema.objectType({
  name: "AnnotationMeta",
  definition(t) {
    t.model.id();
    t.model.annotation();
    t.model.metaType();
    t.model.metaName();
    t.model.metaValue();
    t.model.metaDeleted();
  },
});

export const Question = schema.objectType({
  name: "Question",
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.itemType();
    t.model.itemStatus();
    t.model.itemUrlSegment();
    t.model.itemMimeType();
    t.model.itemName();
    t.model.itemContent();
    t.model.itemDeleted();
    t.model.itemMeta();
    t.model.post();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const QuestionMeta = schema.objectType({
  name: "QuestionMeta",
  definition(t) {
    t.model.id();
    t.model.question();
    t.model.metaType();
    t.model.metaName();
    t.model.metaValue();
    t.model.metaDeleted();
  },
});

export const Thread = schema.objectType({
  name: "Thread",
  definition(t) {
    t.model.id();
    t.model.participants();
    t.model.itemType();
    t.model.itemStatus();
    t.model.itemName();
    t.model.itemContent();
    t.model.itemDeleted();
    t.model.itemMeta();
    t.model.messages();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const ThreadMeta = schema.objectType({
  name: "ThreadMeta",
  definition(t) {
    t.model.id();
    t.model.thread();
    t.model.metaType();
    t.model.metaName();
    t.model.metaValue();
    t.model.metaDeleted();
  },
});

export const Message = schema.objectType({
  name: "Message",
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.itemType();
    t.model.itemStatus();
    t.model.itemName();
    t.model.itemContent();
    t.model.itemDeleted();
    t.model.itemMeta();
    t.model.thread();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const MessageMeta = schema.objectType({
  name: "MessageMeta",
  definition(t) {
    t.model.id();
    t.model.message();
    t.model.metaType();
    t.model.metaName();
    t.model.metaValue();
    t.model.metaDeleted();
  },
});

export const Notification = schema.objectType({
  name: "Notification",
  definition(t) {
    t.model.id();
    t.model.itemType();
    t.model.itemStatus();
    t.model.itemName();
    t.model.itemContent();
    t.model.itemDeleted();
    t.model.itemMeta();

    t.model.sender();
    t.model.receiver();
    t.model.space();
    t.model.post();

    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const NotificationMeta = schema.objectType({
  name: "NotificationMeta",
  definition(t) {
    t.model.id();
    t.model.notification();
    t.model.metaType();
    t.model.metaName();
    t.model.metaValue();
    t.model.metaDeleted();
  },
});

export const Favorite = schema.objectType({
  name: "Favorite",
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.itemType();
    t.model.itemStatus();
    t.model.itemName();
    t.model.itemContent();
    t.model.post();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const Tag = schema.objectType({
  name: "Tag",
  definition(t) {
    t.model.id();
    t.model.itemType();
    t.model.itemStatus();
    t.model.itemName();
    t.model.itemContent();
    t.model.posts();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const Category = schema.objectType({
  name: "Category",
  definition(t) {
    t.model.id();
    t.model.itemType();
    t.model.itemStatus();
    t.model.itemName();
    t.model.itemContent();
    t.model.spaces();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
