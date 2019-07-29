# Migration `20190729181120-pod-meta`

This migration has been generated at 7/29/2019, 6:11:20 PM.
You can check out the [state of the datamodel](./datamodel.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "reeviewr-prisma-main"."PodMeta" DROP COLUMN "post",ADD COLUMN "pod" integer NOT NULL  REFERENCES "reeviewr-prisma-main"."Pod"("id");
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration 20190728094146-ideal-datamodel..20190729181120-pod-meta
--- datamodel.dml
+++ datamodel.dml
@@ -11,19 +11,20 @@
   provider = "nexus-prisma"
 }
 model User {
-  id            Int            @id
+  id            Int        @id
   userType      Int
-  userEmail     String         @unique
+  userEmail     String     @unique
   userPassword  String
-  publicHash    String         @unique
-  privateHash   String         @unique
-  confirmHash   String         @unique
-  forgotHash    String         @unique
+  publicHash    String     @unique
+  privateHash   String     @unique
+  confirmHash   String     @unique
+  forgotHash    String     @unique
   userConfirmed Int
-  userDeleted   Boolean        @default(false)
+  userDeleted   Boolean    @default(false)
   userMeta      UserMeta[]
+
   posts         Post[]
   favorites     Favorite[]
   reviews       Review[]
   annotations   Annotation[]
@@ -31,10 +32,11 @@
   threads       Thread[]
   notifications Notification[]
   following     User[]         @relation(name: "FollowRelation")
   followers     User[]         @relation(name: "FollowRelation")
-  createdAt     DateTime       @default(now())
-  updatedAt     DateTime       @updatedAt
+
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
 }
 model UserMeta {
   id          Int      @id
@@ -64,9 +66,9 @@
 }
 model PodMeta {
   id          Int      @id
-  post        Post
+  pod         Pod
   metaType    String
   metaName    String
   metaValue   String
   metaDeleted Boolean  @default(false)
```

## Photon Usage

You can use a specific Photon built for this migration (20190729181120-pod-meta)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/20190729181120-pod-meta'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```
