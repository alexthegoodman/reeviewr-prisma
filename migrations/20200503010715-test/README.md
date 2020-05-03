# Migration `20200503010715-test`

This migration has been generated by Alex Woodman at 5/3/2020, 1:07:15 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
    "confirmHash" text  NOT NULL ,
    "createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "forgotHash" text  NOT NULL ,
    "id" text  NOT NULL ,
    "privateHash" text  NOT NULL ,
    "publicHash" text  NOT NULL ,
    "updatedAt" timestamp(3)  NOT NULL ,
    "userConfirmed" integer  NOT NULL ,
    "userDeleted" boolean  NOT NULL DEFAULT false,
    "userEmail" text  NOT NULL ,
    "userPassword" text  NOT NULL ,
    "userType" integer  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."UserMeta" (
    "createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" text  NOT NULL ,
    "metaDeleted" boolean  NOT NULL DEFAULT false,
    "metaName" text  NOT NULL ,
    "metaType" text  NOT NULL ,
    "metaValue" text  NOT NULL ,
    "updatedAt" timestamp(3)  NOT NULL ,
    "userId" text  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."_FollowerRelation" (
    "A" text  NOT NULL ,
    "B" text  NOT NULL 
) 

CREATE UNIQUE INDEX "User.userEmail" ON "public"."User"("userEmail")

CREATE UNIQUE INDEX "User.publicHash" ON "public"."User"("publicHash")

CREATE UNIQUE INDEX "User.privateHash" ON "public"."User"("privateHash")

CREATE UNIQUE INDEX "User.confirmHash" ON "public"."User"("confirmHash")

CREATE UNIQUE INDEX "User.forgotHash" ON "public"."User"("forgotHash")

CREATE UNIQUE INDEX "_FollowerRelation_AB_unique" ON "public"."_FollowerRelation"("A","B")

CREATE  INDEX "_FollowerRelation_B_index" ON "public"."_FollowerRelation"("B")

ALTER TABLE "public"."UserMeta" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."_FollowerRelation" ADD FOREIGN KEY ("A")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."_FollowerRelation" ADD FOREIGN KEY ("B")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200503010715-test
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,54 @@
+datasource db {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+// output   = "./__generated__/prisma-client/"
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = ["native", "darwin"]
+}
+
+// generator nexus_prisma {
+// provider = "nexus-prisma"
+// }
+model User {
+  id            String     @default(cuid()) @id
+  userType      Int
+  userEmail     String     @unique
+  userPassword  String
+  publicHash    String     @unique
+  privateHash   String     @unique
+  confirmHash   String     @unique
+  forgotHash    String     @unique
+  userConfirmed Int
+  userDeleted   Boolean    @default(false)
+  userMeta      UserMeta[] @relation("UserMetaRelation")
+  // posts                 Post[]         @relation("UserPostRelation")
+  // pods                  Pod[]          @relation("CreatePodRelation")
+  // memberOf              Pod[]          @relation("JoinPodRelation", references: [id])
+  // favorites             Favorite[]     @relation("UserFavoriteRelation")
+  // reviews               Review[]       @relation("UserReviewRelation")
+  // annotations           Annotation[]   @relation("UserAnnotationRelation")
+  // questions             Question[]     @relation("UserQuestionRelation")
+  // threads               Thread[]       @relation("ThreadUserRelation", references: [id])
+  following     User[]     @relation("FollowerRelation", references: [id])
+  followers     User[]     @relation("FollowerRelation", references: [id])
+  // notifications         Notification[] @relation("NotificationRelation")
+  // sentNotifications     Notification[] @relation("SendingUserRelation")
+  // recievedNotifications Notification[] @relation("ReceivingUserRelation")
+  createdAt     DateTime   @default(now())
+  updatedAt     DateTime   @updatedAt
+}
+
+model UserMeta {
+  id          String   @default(cuid()) @id
+  user        User     @relation("UserMetaRelation", fields: [userId], references: [id])
+  userId      String
+  metaType    String
+  metaName    String
+  metaValue   String
+  metaDeleted Boolean  @default(false)
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+}
```

