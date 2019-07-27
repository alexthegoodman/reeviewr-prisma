# Migration `20190727193517-init`

This migration has been generated at 7/27/2019, 7:35:17 PM.
You can check out the [state of the datamodel](./datamodel.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "reeviewr-prisma-main"."User"("id" integer NOT NULL DEFAULT 0 ,"userType" integer NOT NULL DEFAULT 0 ,"userEmail" text NOT NULL DEFAULT '' ,"userPassword" text NOT NULL DEFAULT '' ,"publicHash" text NOT NULL DEFAULT '' ,"privateHash" text NOT NULL DEFAULT '' ,"confirmHash" text NOT NULL DEFAULT '' ,"forgotHash" text NOT NULL DEFAULT '' ,"userConfirmed" integer NOT NULL DEFAULT 0 ,"userDeleted" boolean NOT NULL DEFAULT false ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."UserMeta"("id" integer NOT NULL DEFAULT 0 ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Post"("id" integer NOT NULL DEFAULT 0 ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemUrlSegment" text NOT NULL DEFAULT '' ,"itemMimeType" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."PostMeta"("id" integer NOT NULL DEFAULT 0 ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."Review"("id" integer NOT NULL DEFAULT 0 ,"itemType" text NOT NULL DEFAULT '' ,"itemStatus" text NOT NULL DEFAULT '' ,"itemUrlSegment" text NOT NULL DEFAULT '' ,"itemMimeType" text NOT NULL DEFAULT '' ,"itemName" text NOT NULL DEFAULT '' ,"itemContent" text NOT NULL DEFAULT '' ,"itemDeleted" boolean NOT NULL DEFAULT false ,PRIMARY KEY ("id"));

CREATE TABLE "reeviewr-prisma-main"."ReviewMeta"("id" integer NOT NULL DEFAULT 0 ,"metaType" text NOT NULL DEFAULT '' ,"metaName" text NOT NULL DEFAULT '' ,"metaValue" text NOT NULL DEFAULT '' ,"metaDeleted" boolean NOT NULL DEFAULT false ,PRIMARY KEY ("id"));

ALTER TABLE "reeviewr-prisma-main"."UserMeta" ADD COLUMN "user" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id");

ALTER TABLE "reeviewr-prisma-main"."Post" ADD COLUMN "user" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id");

ALTER TABLE "reeviewr-prisma-main"."PostMeta" ADD COLUMN "post" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Post"("id");

ALTER TABLE "reeviewr-prisma-main"."Review" ADD COLUMN "user" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."User"("id"),ADD COLUMN "post" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Post"("id");

ALTER TABLE "reeviewr-prisma-main"."ReviewMeta" ADD COLUMN "review" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Review"("id");

CREATE UNIQUE INDEX "User.userEmail._UNIQUE" ON "reeviewr-prisma-main"."User"("userEmail")

CREATE UNIQUE INDEX "User.publicHash._UNIQUE" ON "reeviewr-prisma-main"."User"("publicHash")

CREATE UNIQUE INDEX "User.privateHash._UNIQUE" ON "reeviewr-prisma-main"."User"("privateHash")

CREATE UNIQUE INDEX "User.confirmHash._UNIQUE" ON "reeviewr-prisma-main"."User"("confirmHash")

CREATE UNIQUE INDEX "User.forgotHash._UNIQUE" ON "reeviewr-prisma-main"."User"("forgotHash")
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration ..20190727193517-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,76 @@
+datasource db {
+  provider = "postgresql"
+  url      = "postgresql://alex@localhost:5432/reeviewr-prisma2?schema=reeviewr-prisma-main"
+}
+
+
+model User {
+  id            Int        @id
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
+  posts         Post[]
+  reviews       Review[]
+}
+
+model UserMeta {
+  id          Int     @id
+  user        User
+  metaType    String
+  metaName    String
+  metaValue   String
+  metaDeleted Boolean @default(false)
+}
+
+model Post {
+  id             Int        @id
+  user           User
+  itemType       String
+  itemStatus     String
+  itemUrlSegment String
+  itemMimeType   String
+  itemName       String
+  itemContent    String
+  itemDeleted    Boolean    @default(false)
+  itemMeta       PostMeta[]
+  reviews        Review[]
+}
+
+model PostMeta {
+  id          Int     @id
+  post        Post
+  metaType    String
+  metaName    String
+  metaValue   String
+  metaDeleted Boolean @default(false)
+}
+
+model Review {
+  id             Int          @id
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
+}
+
+model ReviewMeta {
+  id          Int     @id
+  review      Review
+  metaType    String
+  metaName    String
+  metaValue   String
+  metaDeleted Boolean @default(false)
+}
```

## Photon Usage

You can use a specific Photon built for this migration (20190727193517-init)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/20190727193517-init'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```
