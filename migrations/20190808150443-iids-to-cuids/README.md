# Migration `20190808150443-iids-to-cuids`

This migration has been generated at 8/8/2019, 3:04:43 PM.
You can check out the [state of the datamodel](./datamodel.prisma) after the migration.

## Database Steps

```sql
DROP TABLE "reeviewr-prisma-main"."Pod","reeviewr-prisma-main"."PodMeta","reeviewr-prisma-main"."Annotation","reeviewr-prisma-main"."ThreadMeta","reeviewr-prisma-main"."Question","reeviewr-prisma-main"."Thread","reeviewr-prisma-main"."QuestionMeta","reeviewr-prisma-main"."AnnotationMeta","reeviewr-prisma-main"."Notification","reeviewr-prisma-main"."NotificationMeta","reeviewr-prisma-main"."Message","reeviewr-prisma-main"."Tag","reeviewr-prisma-main"."Favorite","reeviewr-prisma-main"."_FollowRelation","reeviewr-prisma-main"."UserMeta","reeviewr-prisma-main"."MessageMeta","reeviewr-prisma-main"."Category","reeviewr-prisma-main"."ReviewMeta","reeviewr-prisma-main"."User","reeviewr-prisma-main"."Post","reeviewr-prisma-main"."PostMeta","reeviewr-prisma-main"."Review";

CREATE TABLE "reeviewr-prisma-main"."User"("id" text NOT NULL  ,"userType" integer NOT NULL DEFAULT 0 ,"userEmail" text NOT NULL DEFAULT '' ,"userPassword" text NOT NULL DEFAULT '' ,"publicHash" text NOT NULL DEFAULT '' ,"privateHash" text NOT NULL DEFAULT '' ,"confirmHash" text NOT NULL DEFAULT '' ,"forgotHash" text NOT NULL DEFAULT '' ,"userConfirmed" integer NOT NULL DEFAULT 0 ,"userDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."UserMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Pod"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemUrlSegment" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."PodMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Post"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemUrlSegment" text NOT NULL DEFAULT '' ,"itemMimeType" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."PostMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Review"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemUrlSegment" text NOT NULL DEFAULT '' ,"itemMimeType" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."ReviewMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Annotation"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemUrlSegment" text NOT NULL DEFAULT '' ,"itemMimeType" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."AnnotationMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Question"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemUrlSegment" text NOT NULL DEFAULT '' ,"itemMimeType" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."QuestionMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Thread"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."ThreadMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Message"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."MessageMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Notification"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."NotificationMeta"("id" text NOT NULL  ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Favorite"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Tag"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Category"("id" text NOT NULL  ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."_FollowRelation"("A" text NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),"B" text NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"));

ALTER TABLE "reeviewr-prisma-main"."UserMeta" ADD COLUMN "user" text NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id");

ALTER TABLE "reeviewr-prisma-main"."Pod" ADD COLUMN "user" text NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id");

ALTER TABLE "reeviewr-prisma-main"."PodMeta" ADD COLUMN "pod" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Pod"("id");

ALTER TABLE "reeviewr-prisma-main"."Post" ADD COLUMN "user" text NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),ADD COLUMN "pod" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Pod"("id");

ALTER TABLE "reeviewr-prisma-main"."PostMeta" ADD COLUMN "pod" text   REFERENCES "reeviewr-prisma-main"."Pod"("id"),ADD COLUMN "post" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Post"("id");

ALTER TABLE "reeviewr-prisma-main"."Review" ADD COLUMN "user" text NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),ADD COLUMN "post" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Post"("id");

ALTER TABLE "reeviewr-prisma-main"."ReviewMeta" ADD COLUMN "review" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Review"("id");

ALTER TABLE "reeviewr-prisma-main"."Annotation" ADD COLUMN "user" text NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),ADD COLUMN "post" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Post"("id");

ALTER TABLE "reeviewr-prisma-main"."AnnotationMeta" ADD COLUMN "annotation" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Annotation"("id");

ALTER TABLE "reeviewr-prisma-main"."Question" ADD COLUMN "user" text NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),ADD COLUMN "post" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Post"("id");

ALTER TABLE "reeviewr-prisma-main"."QuestionMeta" ADD COLUMN "question" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Question"("id");

ALTER TABLE "reeviewr-prisma-main"."Thread" ADD COLUMN "user" text NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id");

ALTER TABLE "reeviewr-prisma-main"."ThreadMeta" ADD COLUMN "thread" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Thread"("id");

ALTER TABLE "reeviewr-prisma-main"."Message" ADD COLUMN "user" text NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),ADD COLUMN "thread" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Thread"("id");

ALTER TABLE "reeviewr-prisma-main"."MessageMeta" ADD COLUMN "message" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Message"("id");

ALTER TABLE "reeviewr-prisma-main"."Notification" ADD COLUMN "user" text NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),ADD COLUMN "thread" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Thread"("id");

ALTER TABLE "reeviewr-prisma-main"."NotificationMeta" ADD COLUMN "notification" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Notification"("id");

ALTER TABLE "reeviewr-prisma-main"."Favorite" ADD COLUMN "user" text NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),ADD COLUMN "post" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Post"("id");

ALTER TABLE "reeviewr-prisma-main"."Tag" ADD COLUMN "post" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Post"("id");

ALTER TABLE "reeviewr-prisma-main"."Category" ADD COLUMN "pod" text NOT NULL  REFERENCES "reeviewr-prisma-main"."Pod"("id");
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration 20190729181120-pod-meta..20190808150443-iids-to-cuids
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url      = "postgresql://alex@localhost:5432/reeviewr-prisma2?schema=reeviewr-prisma-main"
+  url      = env("DATABASE_URL")
 }
 generator photonjs {
   provider = "photonjs"
@@ -11,9 +11,9 @@
   provider = "nexus-prisma"
 }
 model User {
-  id            Int        @id
+  id            String     @id @default(cuid())
   userType      Int
   userEmail     String     @unique
   userPassword  String
   publicHash    String     @unique
@@ -38,9 +38,9 @@
   updatedAt DateTime @updatedAt
 }
 model UserMeta {
-  id          Int      @id
+  id          String   @id @default(cuid())
   user        User
   metaType    String
   metaName    String
   metaValue   String
@@ -49,9 +49,9 @@
   updatedAt   DateTime @updatedAt
 }
 model Pod {
-  id             Int        @id
+  id             String     @id @default(cuid())
   user           User
   itemType       String
   itemStatus     String
   itemUrlSegment String
@@ -65,9 +65,9 @@
   updatedAt      DateTime   @updatedAt
 }
 model PodMeta {
-  id          Int      @id
+  id          String   @id @default(cuid())
   pod         Pod
   metaType    String
   metaName    String
   metaValue   String
@@ -76,9 +76,9 @@
   updatedAt   DateTime @updatedAt
 }
 model Post {
-  id             Int          @id
+  id             String       @id @default(cuid())
   user           User
   pod            Pod
   itemType       String
   itemStatus     String
@@ -97,9 +97,9 @@
   updatedAt      DateTime     @updatedAt
 }
 model PostMeta {
-  id          Int      @id
+  id          String   @id @default(cuid())
   post        Post
   metaType    String
   metaName    String
   metaValue   String
@@ -108,9 +108,9 @@
   updatedAt   DateTime @updatedAt
 }
 model Review {
-  id             Int          @id
+  id             String       @id @default(cuid())
   user           User
   itemType       String
   itemStatus     String
   itemUrlSegment String
@@ -124,9 +124,9 @@
   updatedAt      DateTime     @updatedAt
 }
 model ReviewMeta {
-  id          Int      @id
+  id          String   @id @default(cuid())
   review      Review
   metaType    String
   metaName    String
   metaValue   String
@@ -135,9 +135,9 @@
   updatedAt   DateTime @updatedAt
 }
 model Annotation {
-  id             Int              @id
+  id             String           @id @default(cuid())
   user           User
   itemType       String
   itemStatus     String
   itemUrlSegment String
@@ -151,9 +151,9 @@
   updatedAt      DateTime         @updatedAt
 }
 model AnnotationMeta {
-  id          Int        @id
+  id          String     @id @default(cuid())
   annotation  Annotation
   metaType    String
   metaName    String
   metaValue   String
@@ -162,9 +162,9 @@
   updatedAt   DateTime   @updatedAt
 }
 model Question {
-  id             Int            @id
+  id             String         @id @default(cuid())
   user           User
   itemType       String
   itemStatus     String
   itemUrlSegment String
@@ -178,9 +178,9 @@
   updatedAt      DateTime       @updatedAt
 }
 model QuestionMeta {
-  id          Int      @id
+  id          String   @id @default(cuid())
   question    Question
   metaType    String
   metaName    String
   metaValue   String
@@ -189,9 +189,9 @@
   updatedAt   DateTime @updatedAt
 }
 model Thread {
-  id          Int          @id
+  id          String       @id @default(cuid())
   user        User
   itemType    String
   itemStatus  String
   itemName    String
@@ -202,9 +202,9 @@
   updatedAt   DateTime     @updatedAt
 }
 model ThreadMeta {
-  id          Int      @id
+  id          String   @id @default(cuid())
   thread      Thread
   metaType    String
   metaName    String
   metaValue   String
@@ -213,9 +213,9 @@
   updatedAt   DateTime @updatedAt
 }
 model Message {
-  id          Int           @id
+  id          String        @id @default(cuid())
   user        User
   itemType    String
   itemStatus  String
   itemName    String
@@ -227,9 +227,9 @@
   updatedAt   DateTime      @updatedAt
 }
 model MessageMeta {
-  id          Int      @id
+  id          String   @id @default(cuid())
   message     Message
   metaType    String
   metaName    String
   metaValue   String
@@ -238,9 +238,9 @@
   updatedAt   DateTime @updatedAt
 }
 model Notification {
-  id          Int                @id
+  id          String             @id @default(cuid())
   user        User
   itemType    String
   itemStatus  String
   itemName    String
@@ -252,9 +252,9 @@
   updatedAt   DateTime           @updatedAt
 }
 model NotificationMeta {
-  id           Int          @id
+  id           String       @id @default(cuid())
   notification Notification
   metaType     String
   metaName     String
   metaValue    String
@@ -263,9 +263,9 @@
   updatedAt    DateTime     @updatedAt
 }
 model Favorite {
-  id          Int      @id
+  id          String   @id @default(cuid())
   user        User
   itemType    String
   itemStatus  String
   itemName    String
@@ -275,9 +275,9 @@
   updatedAt   DateTime @updatedAt
 }
 model Tag {
-  id          Int      @id
+  id          String   @id @default(cuid())
   itemType    String
   itemStatus  String
   itemName    String
   itemContent String
@@ -286,9 +286,9 @@
   updatedAt   DateTime @updatedAt
 }
 model Category {
-  id          Int      @id
+  id          String   @id @default(cuid())
   itemType    String
   itemStatus  String
   itemName    String
   itemContent String
```

## Photon Usage

You can use a specific Photon built for this migration (20190808150443-iids-to-cuids)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/20190808150443-iids-to-cuids'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```
