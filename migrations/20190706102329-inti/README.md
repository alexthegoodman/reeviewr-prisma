# Migration `20190706102329-inti`

This migration has been generated at 7/6/2019, 10:23:29 AM.
You can check out the [state of the datamodel](./datamodel.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `reeviewr-prisma2`.`User`(`id` int NOT NULL DEFAULT 0 ,`userType` int NOT NULL DEFAULT 0 ,`userEmail` varchar(1000) NOT NULL DEFAULT '' ,`userPassword` varchar(1000) NOT NULL DEFAULT '' ,`publicHash` varchar(1000) NOT NULL DEFAULT '' ,`privateHash` varchar(1000) NOT NULL DEFAULT '' ,`confirmHash` varchar(1000) NOT NULL DEFAULT '' ,`forgotHash` varchar(1000) NOT NULL DEFAULT '' ,`userConfirmed` int NOT NULL DEFAULT 0 ,`userDeleted` boolean NOT NULL DEFAULT false ,PRIMARY KEY (`id`));

CREATE TABLE `reeviewr-prisma2`.`UserMeta`(`id` int NOT NULL DEFAULT 0 ,`metaType` varchar(1000) NOT NULL DEFAULT '' ,`metaName` varchar(1000) NOT NULL DEFAULT '' ,`metaValue` varchar(1000) NOT NULL DEFAULT '' ,`metaDeleted` boolean NOT NULL DEFAULT false ,PRIMARY KEY (`id`));

CREATE TABLE `reeviewr-prisma2`.`Post`(`id` int NOT NULL DEFAULT 0 ,`itemType` varchar(1000) NOT NULL DEFAULT '' ,`itemStatus` varchar(1000) NOT NULL DEFAULT '' ,`itemUrlSegment` varchar(1000) NOT NULL DEFAULT '' ,`itemMimeType` varchar(1000) NOT NULL DEFAULT '' ,`itemName` varchar(1000) NOT NULL DEFAULT '' ,`itemContent` varchar(1000) NOT NULL DEFAULT '' ,`itemDeleted` boolean NOT NULL DEFAULT false ,PRIMARY KEY (`id`));

CREATE TABLE `reeviewr-prisma2`.`PostMeta`(`id` int NOT NULL DEFAULT 0 ,`metaType` varchar(1000) NOT NULL DEFAULT '' ,`metaName` varchar(1000) NOT NULL DEFAULT '' ,`metaValue` varchar(1000) NOT NULL DEFAULT '' ,`metaDeleted` boolean NOT NULL DEFAULT false ,PRIMARY KEY (`id`));

CREATE TABLE `reeviewr-prisma2`.`Review`(`id` int NOT NULL DEFAULT 0 ,`itemType` varchar(1000) NOT NULL DEFAULT '' ,`itemStatus` varchar(1000) NOT NULL DEFAULT '' ,`itemUrlSegment` varchar(1000) NOT NULL DEFAULT '' ,`itemMimeType` varchar(1000) NOT NULL DEFAULT '' ,`itemName` varchar(1000) NOT NULL DEFAULT '' ,`itemContent` varchar(1000) NOT NULL DEFAULT '' ,`itemDeleted` boolean NOT NULL DEFAULT false ,PRIMARY KEY (`id`));

CREATE TABLE `reeviewr-prisma2`.`ReviewMeta`(`id` int NOT NULL DEFAULT 0 ,`metaType` varchar(1000) NOT NULL DEFAULT '' ,`metaName` varchar(1000) NOT NULL DEFAULT '' ,`metaValue` varchar(1000) NOT NULL DEFAULT '' ,`metaDeleted` boolean NOT NULL DEFAULT false ,PRIMARY KEY (`id`));

ALTER TABLE `reeviewr-prisma2`.`UserMeta` ADD COLUMN `user` int NOT NULL ,ADD FOREIGN KEY (`user`) REFERENCES `reeviewr-prisma2`.`User`(`id`);

ALTER TABLE `reeviewr-prisma2`.`Post` ADD COLUMN `user` int NOT NULL ,ADD FOREIGN KEY (`user`) REFERENCES `reeviewr-prisma2`.`User`(`id`);

ALTER TABLE `reeviewr-prisma2`.`PostMeta` ADD COLUMN `post` int NOT NULL ,ADD FOREIGN KEY (`post`) REFERENCES `reeviewr-prisma2`.`Post`(`id`);

ALTER TABLE `reeviewr-prisma2`.`Review` ADD COLUMN `user` int NOT NULL ,ADD FOREIGN KEY (`user`) REFERENCES `reeviewr-prisma2`.`User`(`id`),ADD COLUMN `post` int NOT NULL ,ADD FOREIGN KEY (`post`) REFERENCES `reeviewr-prisma2`.`Post`(`id`);

ALTER TABLE `reeviewr-prisma2`.`ReviewMeta` ADD COLUMN `review` int NOT NULL ,ADD FOREIGN KEY (`review`) REFERENCES `reeviewr-prisma2`.`Review`(`id`);
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration ..20190706102329-inti
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,75 @@
+datasource db {
+  provider = "mysql"
+  url      = "mysql://root:root@127.0.0.1:3306/reeviewr-prisma2"
+}
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

You can use a specific Photon built for this migration (20190706102329-inti)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/20190706102329-inti'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```
