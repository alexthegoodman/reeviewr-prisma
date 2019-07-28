# Migration `20190728094146-ideal-datamodel`

This migration has been generated at 7/28/2019, 9:41:46 AM.
You can check out the [state of the datamodel](./datamodel.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "reeviewr-prisma-main"."Pod"("id" integer NOT NULL DEFAULT 0 ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemUrlSegment" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,"user" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."PodMeta"("id" integer NOT NULL DEFAULT 0 ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,"post" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Post"("id"),PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Annotation"("id" integer NOT NULL DEFAULT 0 ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemUrlSegment" text NOT NULL DEFAULT '' ,"itemMimeType" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,"user" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),"post" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Post"("id"),PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."AnnotationMeta"("id" integer NOT NULL DEFAULT 0 ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Question"("id" integer NOT NULL DEFAULT 0 ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemUrlSegment" text NOT NULL DEFAULT '' ,"itemMimeType" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,"user" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),"post" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Post"("id"),PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."QuestionMeta"("id" integer NOT NULL DEFAULT 0 ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Thread"("id" integer NOT NULL DEFAULT 0 ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,"user" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."ThreadMeta"("id" integer NOT NULL DEFAULT 0 ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Message"("id" integer NOT NULL DEFAULT 0 ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,"user" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."MessageMeta"("id" integer NOT NULL DEFAULT 0 ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Notification"("id" integer NOT NULL DEFAULT 0 ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,"user" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."NotificationMeta"("id" integer NOT NULL DEFAULT 0 ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Favorite"("id" integer NOT NULL DEFAULT 0 ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,"user" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),"post" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Post"("id"),PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Tag"("id" integer NOT NULL DEFAULT 0 ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,"post" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Post"("id"),PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Category"("id" integer NOT NULL DEFAULT 0 ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."_FollowRelation"("A" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),"B" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"));

ALTER TABLE "reeviewr-prisma-main"."UserMeta" ADD COLUMN "createdAt" timestamp(3) NOT NULL  ,ADD COLUMN "updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ;

ALTER TABLE "reeviewr-prisma-main"."PostMeta" ADD COLUMN "createdAt" timestamp(3) NOT NULL  ,ADD COLUMN "updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,ADD COLUMN "pod" integer   REFERENCES "reeviewr-prisma-main"."Pod"("id");

ALTER TABLE "reeviewr-prisma-main"."ReviewMeta" ADD COLUMN "createdAt" timestamp(3) NOT NULL  ,ADD COLUMN "updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ;

ALTER TABLE "reeviewr-prisma-main"."Post" ADD COLUMN "createdAt" timestamp(3) NOT NULL  ,ADD COLUMN "updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,ADD COLUMN "pod" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Pod"("id");

ALTER TABLE "reeviewr-prisma-main"."User" ADD COLUMN "createdAt" timestamp(3) NOT NULL  ,ADD COLUMN "updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ;

ALTER TABLE "reeviewr-prisma-main"."Review" ADD COLUMN "createdAt" timestamp(3) NOT NULL  ,ADD COLUMN "updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ;

ALTER TABLE "reeviewr-prisma-main"."AnnotationMeta" ADD COLUMN "annotation" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Annotation"("id");

ALTER TABLE "reeviewr-prisma-main"."QuestionMeta" ADD COLUMN "question" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Question"("id");

ALTER TABLE "reeviewr-prisma-main"."ThreadMeta" ADD COLUMN "thread" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Thread"("id");

ALTER TABLE "reeviewr-prisma-main"."Message" ADD COLUMN "thread" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Thread"("id");

ALTER TABLE "reeviewr-prisma-main"."MessageMeta" ADD COLUMN "message" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Message"("id");

ALTER TABLE "reeviewr-prisma-main"."Notification" ADD COLUMN "thread" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Thread"("id");

ALTER TABLE "reeviewr-prisma-main"."NotificationMeta" ADD COLUMN "notification" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Notification"("id");

ALTER TABLE "reeviewr-prisma-main"."Category" ADD COLUMN "pod" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Pod"("id");
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration 20190727193517-init..20190728094146-ideal-datamodel
--- datamodel.dml
+++ datamodel.dml
@@ -2,55 +2,109 @@
   provider = "postgresql"
   url      = "postgresql://alex@localhost:5432/reeviewr-prisma2?schema=reeviewr-prisma-main"
 }
+generator photonjs {
+  provider = "photonjs"
+}
+generator nexus_prisma {
+  provider = "nexus-prisma"
+}
+
 model User {
-  id            Int        @id
+  id            Int            @id
   userType      Int
-  userEmail     String     @unique
+  userEmail     String         @unique
   userPassword  String
-  publicHash    String     @unique
-  privateHash   String     @unique
-  confirmHash   String     @unique
-  forgotHash    String     @unique
+  publicHash    String         @unique
+  privateHash   String         @unique
+  confirmHash   String         @unique
+  forgotHash    String         @unique
   userConfirmed Int
-  userDeleted   Boolean    @default(false)
+  userDeleted   Boolean        @default(false)
   userMeta      UserMeta[]
   posts         Post[]
+  favorites     Favorite[]
   reviews       Review[]
+  annotations   Annotation[]
+  questions     Question[]
+  threads       Thread[]
+  notifications Notification[]
+  following     User[]         @relation(name: "FollowRelation")
+  followers     User[]         @relation(name: "FollowRelation")
+  createdAt     DateTime       @default(now())
+  updatedAt     DateTime       @updatedAt
 }
 model UserMeta {
-  id          Int     @id
+  id          Int      @id
   user        User
   metaType    String
   metaName    String
   metaValue   String
-  metaDeleted Boolean @default(false)
+  metaDeleted Boolean  @default(false)
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
 }
-model Post {
+model Pod {
   id             Int        @id
   user           User
   itemType       String
   itemStatus     String
   itemUrlSegment String
-  itemMimeType   String
   itemName       String
   itemContent    String
   itemDeleted    Boolean    @default(false)
   itemMeta       PostMeta[]
+  posts          Post[]
+  categories     Category[]
+  createdAt      DateTime   @default(now())
+  updatedAt      DateTime   @updatedAt
+}
+
+model PodMeta {
+  id          Int      @id
+  post        Post
+  metaType    String
+  metaName    String
+  metaValue   String
+  metaDeleted Boolean  @default(false)
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+}
+
+model Post {
+  id             Int          @id
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
   reviews        Review[]
+  annotations    Annotation[]
+  questions      Question[]
+  createdAt      DateTime     @default(now())
+  updatedAt      DateTime     @updatedAt
 }
 model PostMeta {
-  id          Int     @id
+  id          Int      @id
   post        Post
   metaType    String
   metaName    String
   metaValue   String
-  metaDeleted Boolean @default(false)
+  metaDeleted Boolean  @default(false)
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
 }
 model Review {
   id             Int          @id
@@ -63,14 +117,180 @@
   itemContent    String
   itemDeleted    Boolean      @default(false)
   itemMeta       ReviewMeta[]
   post           Post
+  createdAt      DateTime     @default(now())
+  updatedAt      DateTime     @updatedAt
 }
 model ReviewMeta {
-  id          Int     @id
+  id          Int      @id
   review      Review
   metaType    String
   metaName    String
   metaValue   String
-  metaDeleted Boolean @default(false)
+  metaDeleted Boolean  @default(false)
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+}
+
+model Annotation {
+  id             Int              @id
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
+  id          Int        @id
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
+  id             Int            @id
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
+  id          Int      @id
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
+  id          Int          @id
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
+  id          Int      @id
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
+  id          Int           @id
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
+  id          Int      @id
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
+  id          Int                @id
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
+  id           Int          @id
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
+  id          Int      @id
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
+  id          Int      @id
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
+  id          Int      @id
+  itemType    String
+  itemStatus  String
+  itemName    String
+  itemContent String
+  pod         Pod
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
 }
```

## Photon Usage

You can use a specific Photon built for this migration (20190728094146-ideal-datamodel)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/20190728094146-ideal-datamodel'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```
