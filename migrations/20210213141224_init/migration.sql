-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "userType" INTEGER NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userPassword" TEXT NOT NULL,
    "publicHash" TEXT NOT NULL,
    "privateHash" TEXT NOT NULL,
    "confirmHash" TEXT NOT NULL,
    "forgotHash" TEXT NOT NULL,
    "userConfirmed" INTEGER NOT NULL,
    "userDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMeta" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "metaType" TEXT NOT NULL,
    "metaName" TEXT NOT NULL,
    "metaValue" TEXT NOT NULL,
    "metaDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Space" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "itemStatus" TEXT NOT NULL,
    "itemUrlSegment" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemContent" TEXT NOT NULL,
    "itemDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpaceMeta" (
    "id" TEXT NOT NULL,
    "spaceId" TEXT NOT NULL,
    "metaType" TEXT NOT NULL,
    "metaName" TEXT NOT NULL,
    "metaValue" TEXT NOT NULL,
    "metaDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "spaceId" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "itemStatus" TEXT NOT NULL,
    "itemUrlSegment" TEXT NOT NULL,
    "itemMimeType" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemContent" TEXT NOT NULL,
    "itemDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostMeta" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "metaType" TEXT NOT NULL,
    "metaName" TEXT NOT NULL,
    "metaValue" TEXT NOT NULL,
    "metaDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "itemStatus" TEXT NOT NULL,
    "itemUrlSegment" TEXT NOT NULL,
    "itemMimeType" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemContent" TEXT NOT NULL,
    "itemDeleted" BOOLEAN NOT NULL DEFAULT false,
    "postId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewMeta" (
    "id" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,
    "metaType" TEXT NOT NULL,
    "metaName" TEXT NOT NULL,
    "metaValue" TEXT NOT NULL,
    "metaDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Annotation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "itemStatus" TEXT NOT NULL,
    "itemUrlSegment" TEXT NOT NULL,
    "itemMimeType" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemContent" TEXT NOT NULL,
    "itemDeleted" BOOLEAN NOT NULL DEFAULT false,
    "postId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnnotationMeta" (
    "id" TEXT NOT NULL,
    "annotationId" TEXT NOT NULL,
    "metaType" TEXT NOT NULL,
    "metaName" TEXT NOT NULL,
    "metaValue" TEXT NOT NULL,
    "metaDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "itemStatus" TEXT NOT NULL,
    "itemUrlSegment" TEXT NOT NULL,
    "itemMimeType" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemContent" TEXT NOT NULL,
    "itemDeleted" BOOLEAN NOT NULL DEFAULT false,
    "postId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionMeta" (
    "id" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "metaType" TEXT NOT NULL,
    "metaName" TEXT NOT NULL,
    "metaValue" TEXT NOT NULL,
    "metaDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Thread" (
    "id" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "itemStatus" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemContent" TEXT NOT NULL,
    "itemDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ThreadMeta" (
    "id" TEXT NOT NULL,
    "threadId" TEXT NOT NULL,
    "metaType" TEXT NOT NULL,
    "metaName" TEXT NOT NULL,
    "metaValue" TEXT NOT NULL,
    "metaDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "itemStatus" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemContent" TEXT NOT NULL,
    "itemDeleted" BOOLEAN NOT NULL DEFAULT false,
    "threadId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageMeta" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "metaType" TEXT NOT NULL,
    "metaName" TEXT NOT NULL,
    "metaValue" TEXT NOT NULL,
    "metaDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "itemStatus" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemContent" TEXT NOT NULL,
    "itemDeleted" BOOLEAN NOT NULL DEFAULT false,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "spaceId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationMeta" (
    "id" TEXT NOT NULL,
    "notificationId" TEXT NOT NULL,
    "metaType" TEXT NOT NULL,
    "metaName" TEXT NOT NULL,
    "metaValue" TEXT NOT NULL,
    "metaDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "itemStatus" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemContent" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "itemStatus" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemContent" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "itemStatus" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemContent" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_JoinSpaceRelation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ThreadUserRelation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FollowerRelation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_SpaceCategoriesRelation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostTagRelation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User.userEmail_unique" ON "User"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "User.publicHash_unique" ON "User"("publicHash");

-- CreateIndex
CREATE UNIQUE INDEX "User.privateHash_unique" ON "User"("privateHash");

-- CreateIndex
CREATE UNIQUE INDEX "User.confirmHash_unique" ON "User"("confirmHash");

-- CreateIndex
CREATE UNIQUE INDEX "User.forgotHash_unique" ON "User"("forgotHash");

-- CreateIndex
CREATE UNIQUE INDEX "_JoinSpaceRelation_AB_unique" ON "_JoinSpaceRelation"("A", "B");

-- CreateIndex
CREATE INDEX "_JoinSpaceRelation_B_index" ON "_JoinSpaceRelation"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ThreadUserRelation_AB_unique" ON "_ThreadUserRelation"("A", "B");

-- CreateIndex
CREATE INDEX "_ThreadUserRelation_B_index" ON "_ThreadUserRelation"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FollowerRelation_AB_unique" ON "_FollowerRelation"("A", "B");

-- CreateIndex
CREATE INDEX "_FollowerRelation_B_index" ON "_FollowerRelation"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SpaceCategoriesRelation_AB_unique" ON "_SpaceCategoriesRelation"("A", "B");

-- CreateIndex
CREATE INDEX "_SpaceCategoriesRelation_B_index" ON "_SpaceCategoriesRelation"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostTagRelation_AB_unique" ON "_PostTagRelation"("A", "B");

-- CreateIndex
CREATE INDEX "_PostTagRelation_B_index" ON "_PostTagRelation"("B");

-- AddForeignKey
ALTER TABLE "UserMeta" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Space" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpaceMeta" ADD FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostMeta" ADD FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewMeta" ADD FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Annotation" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Annotation" ADD FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnnotationMeta" ADD FOREIGN KEY ("annotationId") REFERENCES "Annotation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionMeta" ADD FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThreadMeta" ADD FOREIGN KEY ("threadId") REFERENCES "Thread"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD FOREIGN KEY ("threadId") REFERENCES "Thread"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageMeta" ADD FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationMeta" ADD FOREIGN KEY ("notificationId") REFERENCES "Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JoinSpaceRelation" ADD FOREIGN KEY ("A") REFERENCES "Space"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JoinSpaceRelation" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ThreadUserRelation" ADD FOREIGN KEY ("A") REFERENCES "Thread"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ThreadUserRelation" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowerRelation" ADD FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowerRelation" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SpaceCategoriesRelation" ADD FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SpaceCategoriesRelation" ADD FOREIGN KEY ("B") REFERENCES "Space"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostTagRelation" ADD FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostTagRelation" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
