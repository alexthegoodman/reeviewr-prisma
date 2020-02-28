import {
  idArg,
  makeSchema,
  objectType,
  stringArg,
  intArg,
} from "@prisma/nexus";

export const User = objectType({
  name: "User",
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

    t.model.pods();
    t.model.memberOf();
    t.model.posts();
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

    // resolver example
    // resolver is needed for certain kinds of deep queries
    t.list.field("memberOfPosts", {
      type: "Post",
      args: { userId: idArg(), postId: stringArg() },
      nullable: true,
      resolve: async (_, { userId, postId }, ctx) => {
        console.info("call", userId, postId);

        // posts with pods with members contain this user
        const posts = await ctx.photon.posts.findMany({
          where: { pod: { members: { some: { id: userId } } } },
        });

        console.info("posts", posts);

        return posts;
      },
    });
  },
});

export const UserMeta = objectType({
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

export const Pod = objectType({
  name: "Pod",
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
    // t.model.posts({ ordering: true, filtering: true });
    t.model.categories();

    t.list.field("livePosts", {
      type: "Post",
      args: { first: intArg() },
      nullable: true,
      resolve: async (pod, { first = 1 }, ctx) => {
        // posts with pods with members contain this user
        const posts = await ctx.photon.posts.findMany({
          where: { pod: { id: pod.id }, itemDeleted: false },
          first,
        });

        return posts;
      },
    });
  },
});

export const PodMeta = objectType({
  name: "PodMeta",
  definition(t) {
    t.model.id();
    t.model.pod();
    t.model.metaType();
    t.model.metaName();
    t.model.metaValue();
    t.model.metaDeleted();
  },
});

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.pod();
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

export const PostMeta = objectType({
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

export const Review = objectType({
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
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const ReviewMeta = objectType({
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

export const Annotation = objectType({
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

export const AnnotationMeta = objectType({
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

export const Question = objectType({
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

export const QuestionMeta = objectType({
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

export const Thread = objectType({
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

export const ThreadMeta = objectType({
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

export const Message = objectType({
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

export const MessageMeta = objectType({
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

export const Notification = objectType({
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
    t.model.pod();
    t.model.post();

    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const NotificationMeta = objectType({
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

export const Favorite = objectType({
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

export const Tag = objectType({
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

export const Category = objectType({
  name: "Category",
  definition(t) {
    t.model.id();
    t.model.itemType();
    t.model.itemStatus();
    t.model.itemName();
    t.model.itemContent();
    t.model.pods();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
