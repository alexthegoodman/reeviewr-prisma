# Migration `20190809182036-init`

This migration has been generated at 8/9/2019, 6:20:36 PM.
You can check out the [state of the datamodel](./datamodel.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User"("id" text NOT NULL  ,"userType" integer NOT NULL DEFAULT 0 ,"userEmail" text NOT NULL DEFAULT '' ,"userPassword" text NOT NULL DEFAULT '' ,"publicHash" text NOT NULL DEFAULT '' ,"privateHash" text NOT NULL DEFAULT '' ,"confirmHash" text NOT NULL DEFAULT '' ,"forgotHash" text NOT NULL DEFAULT '' ,"userConfirmed" integer NOT NULL DEFAULT 0 ,"userDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."UserMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."Pod"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemUrlSegment" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."PodMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."Post"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemUrlSegment" text NOT NULL DEFAULT '' ,"itemMimeType" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."PostMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."Review"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemUrlSegment" text NOT NULL DEFAULT '' ,"itemMimeType" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."ReviewMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."Annotation"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemUrlSegment" text NOT NULL DEFAULT '' ,"itemMimeType" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."AnnotationMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."Question"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemUrlSegment" text NOT NULL DEFAULT '' ,"itemMimeType" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."QuestionMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."Thread"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."ThreadMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."Message"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."MessageMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."Notification"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."NotificationMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."Favorite"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."Tag"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."Category"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "public"."_FollowRelation"("A" text   REFERENCES "public"."User"("id") ON DELETE CASCADE,"B" text   REFERENCES "public"."User"("id") ON DELETE CASCADE);

ALTER TABLE "public"."UserMeta" ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Pod" ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL,ADD COLUMN "podMeta" text   REFERENCES "public"."PodMeta"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Post" ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL,ADD COLUMN "pod" text   REFERENCES "public"."Pod"("id") ON DELETE SET NULL;

ALTER TABLE "public"."PostMeta" ADD COLUMN "pod" text   REFERENCES "public"."Pod"("id") ON DELETE SET NULL,ADD COLUMN "post" text   REFERENCES "public"."Post"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Review" ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL,ADD COLUMN "post" text   REFERENCES "public"."Post"("id") ON DELETE SET NULL;

ALTER TABLE "public"."ReviewMeta" ADD COLUMN "review" text   REFERENCES "public"."Review"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Annotation" ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL,ADD COLUMN "post" text   REFERENCES "public"."Post"("id") ON DELETE SET NULL;

ALTER TABLE "public"."AnnotationMeta" ADD COLUMN "annotation" text   REFERENCES "public"."Annotation"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Question" ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL,ADD COLUMN "post" text   REFERENCES "public"."Post"("id") ON DELETE SET NULL;

ALTER TABLE "public"."QuestionMeta" ADD COLUMN "question" text   REFERENCES "public"."Question"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Thread" ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL;

ALTER TABLE "public"."ThreadMeta" ADD COLUMN "thread" text   REFERENCES "public"."Thread"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Message" ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL,ADD COLUMN "thread" text   REFERENCES "public"."Thread"("id") ON DELETE SET NULL;

ALTER TABLE "public"."MessageMeta" ADD COLUMN "message" text   REFERENCES "public"."Message"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Notification" ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL,ADD COLUMN "thread" text   REFERENCES "public"."Thread"("id") ON DELETE SET NULL;

ALTER TABLE "public"."NotificationMeta" ADD COLUMN "notification" text   REFERENCES "public"."Notification"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Favorite" ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL,ADD COLUMN "post" text   REFERENCES "public"."Post"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Tag" ADD COLUMN "post" text   REFERENCES "public"."Post"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Category" ADD COLUMN "pod" text   REFERENCES "public"."Pod"("id") ON DELETE SET NULL;

CREATE UNIQUE INDEX "User.userEmail._UNIQUE" ON "public"."User"("userEmail")

CREATE UNIQUE INDEX "User.publicHash._UNIQUE" ON "public"."User"("publicHash")

CREATE UNIQUE INDEX "User.privateHash._UNIQUE" ON "public"."User"("privateHash")

CREATE UNIQUE INDEX "User.confirmHash._UNIQUE" ON "public"."User"("confirmHash")

CREATE UNIQUE INDEX "User.forgotHash._UNIQUE" ON "public"."User"("forgotHash")
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration ..20190809182036-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,298 @@
+datasource db {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+generator photonjs {
+  provider = "photonjs"
+}
+
+generator nexus_prisma {
+  provider = "nexus-prisma"
+}
+
+model User {
+  id            String     @id @default(cuid())
+  userType      Int
+  userEmail     String     @unique
+  userPassword  String
+  publicHash    String     @unique
+  privateHash   String     @unique
+  confirmHash   String     @unique
+  forgotHash    String     @unique
+  userConfirmed Int
+  userDeleted   Boolean    @default(false)
+  userMeta      UserMeta[]
+
+  posts         Post[]
+  favorites     Favorite[]
+  reviews       Review[]
+  annotations   Annotation[]
+  questions     Question[]
+  threads       Thread[]
+  notifications Notification[]
+  following     User[]         @relation(name: "FollowRelation")
+  followers     User[]         @relation(name: "FollowRelation")
+
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+}
+
+model UserMeta {
+  id          String   @id @default(cuid())
+  user        User
+  metaType    String
+  metaName    String
+  metaValue   String
+  metaDeleted Boolean  @default(false)
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+}
+
+model Pod {
+  id             String     @id @default(cuid())
+  user           User
+  itemType       String
+  itemStatus     String
+  itemUrlSegment String
+  itemName       String
+  itemContent    String
+  itemDeleted    Boolean    @default(false)
+  itemMeta       PostMeta[]
+  posts          Post[]
+  categories     Category[]
+  createdAt      DateTime   @default(now())
+  updatedAt      DateTime   @updatedAt
+}
+
+model PodMeta {
+  id          String   @id @default(cuid())
+  pod         Pod
+  metaType    String
+  metaName    String
+  metaValue   String
+  metaDeleted Boolean  @default(false)
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+}
+
+model Post {
+  id             String       @id @default(cuid())
+  user           User
+  pod            Pod
+  itemType       String
+  itemStatus     String
+  itemUrlSegment String
+  itemMimeType   String
+  itemName       String
+  itemContent    String
+  itemDeleted    Boolean      @default(false)
+  itemMeta       PostMeta[]
+  tags           Tag[]
+  favorites      Favorite[]
+  reviews        Review[]
+  annotations    Annotation[]
+  questions      Question[]
+  createdAt      DateTime     @default(now())
+  updatedAt      DateTime     @updatedAt
+}
+
+model PostMeta {
+  id          String   @id @default(cuid())
+  post        Post
+  metaType    String
+  metaName    String
+  metaValue   String
+  metaDeleted Boolean  @default(false)
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+}
+
+model Review {
+  id             String       @id @default(cuid())
+  user           User
+  itemType       String
+  itemStatus     String
+  itemUrlSegment String
+  itemMimeType   String
+  itemName       String
+  itemContent    String
+  itemDeleted    Boolean      @default(false)
+  itemMeta       ReviewMeta[]
+  post           Post
+  createdAt      DateTime     @default(now())
+  updatedAt      DateTime     @updatedAt
+}
+
+model ReviewMeta {
+  id          String   @id @default(cuid())
+  review      Review
+  metaType    String
+  metaName    String
+  metaValue   String
+  metaDeleted Boolean  @default(false)
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+}
+
+model Annotation {
+  id             String           @id @default(cuid())
+  user           User
+  itemType       String
+  itemStatus     String
+  itemUrlSegment String
+  itemMimeType   String
+  itemName       String
+  itemContent    String
+  itemDeleted    Boolean          @default(false)
+  itemMeta       AnnotationMeta[]
+  post           Post
+  createdAt      DateTime         @default(now())
+  updatedAt      DateTime         @updatedAt
+}
+
+model AnnotationMeta {
+  id          String     @id @default(cuid())
+  annotation  Annotation
+  metaType    String
+  metaName    String
+  metaValue   String
+  metaDeleted Boolean    @default(false)
+  createdAt   DateTime   @default(now())
+  updatedAt   DateTime   @updatedAt
+}
+
+model Question {
+  id             String         @id @default(cuid())
+  user           User
+  itemType       String
+  itemStatus     String
+  itemUrlSegment String
+  itemMimeType   String
+  itemName       String
+  itemContent    String
+  itemDeleted    Boolean        @default(false)
+  itemMeta       QuestionMeta[]
+  post           Post
+  createdAt      DateTime       @default(now())
+  updatedAt      DateTime       @updatedAt
+}
+
+model QuestionMeta {
+  id          String   @id @default(cuid())
+  question    Question
+  metaType    String
+  metaName    String
+  metaValue   String
+  metaDeleted Boolean  @default(false)
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+}
+
+model Thread {
+  id          String       @id @default(cuid())
+  user        User
+  itemType    String
+  itemStatus  String
+  itemName    String
+  itemContent String
+  itemDeleted Boolean      @default(false)
+  itemMeta    ThreadMeta[]
+  createdAt   DateTime     @default(now())
+  updatedAt   DateTime     @updatedAt
+}
+
+model ThreadMeta {
+  id          String   @id @default(cuid())
+  thread      Thread
+  metaType    String
+  metaName    String
+  metaValue   String
+  metaDeleted Boolean  @default(false)
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+}
+
+model Message {
+  id          String        @id @default(cuid())
+  user        User
+  itemType    String
+  itemStatus  String
+  itemName    String
+  itemContent String
+  itemDeleted Boolean       @default(false)
+  itemMeta    MessageMeta[]
+  thread      Thread
+  createdAt   DateTime      @default(now())
+  updatedAt   DateTime      @updatedAt
+}
+
+model MessageMeta {
+  id          String   @id @default(cuid())
+  message     Message
+  metaType    String
+  metaName    String
+  metaValue   String
+  metaDeleted Boolean  @default(false)
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+}
+
+model Notification {
+  id          String             @id @default(cuid())
+  user        User
+  itemType    String
+  itemStatus  String
+  itemName    String
+  itemContent String
+  itemDeleted Boolean            @default(false)
+  itemMeta    NotificationMeta[]
+  thread      Thread
+  createdAt   DateTime           @default(now())
+  updatedAt   DateTime           @updatedAt
+}
+
+model NotificationMeta {
+  id           String       @id @default(cuid())
+  notification Notification
+  metaType     String
+  metaName     String
+  metaValue    String
+  metaDeleted  Boolean      @default(false)
+  createdAt    DateTime     @default(now())
+  updatedAt    DateTime     @updatedAt
+}
+
+model Favorite {
+  id          String   @id @default(cuid())
+  user        User
+  itemType    String
+  itemStatus  String
+  itemName    String
+  itemContent String
+  post        Post
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+}
+
+model Tag {
+  id          String   @id @default(cuid())
+  itemType    String
+  itemStatus  String
+  itemName    String
+  itemContent String
+  post        Post
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+}
+
+model Category {
+  id          String   @id @default(cuid())
+  itemType    String
+  itemStatus  String
+  itemName    String
+  itemContent String
+  pod         Pod
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+}
```

## Photon Usage

You can use a specific Photon built for this migration (20190809182036-init)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/20190809182036-init'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```