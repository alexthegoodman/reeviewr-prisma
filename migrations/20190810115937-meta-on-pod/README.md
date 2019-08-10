# Migration `20190810115937-meta-on-pod`

This migration has been generated at 8/10/2019, 11:59:37 AM.
You can check out the [state of the datamodel](./datamodel.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."AnnotationMeta" DROP COLUMN "annotation",ADD COLUMN "annotation" text   REFERENCES "public"."Annotation"("id") ON DELETE SET NULL;

ALTER TABLE "public"."QuestionMeta" DROP COLUMN "question",ADD COLUMN "question" text   REFERENCES "public"."Question"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Thread" DROP COLUMN "user",ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL;

ALTER TABLE "public"."ThreadMeta" DROP COLUMN "thread",ADD COLUMN "thread" text   REFERENCES "public"."Thread"("id") ON DELETE SET NULL;

ALTER TABLE "public"."ReviewMeta" DROP COLUMN "review",ADD COLUMN "review" text   REFERENCES "public"."Review"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Message" DROP COLUMN "user",ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL,DROP COLUMN "thread",ADD COLUMN "thread" text   REFERENCES "public"."Thread"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Question" DROP COLUMN "user",ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL,DROP COLUMN "post",ADD COLUMN "post" text   REFERENCES "public"."Post"("id") ON DELETE SET NULL;

ALTER TABLE "public"."NotificationMeta" DROP COLUMN "notification",ADD COLUMN "notification" text   REFERENCES "public"."Notification"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Pod" DROP COLUMN "podMeta",DROP COLUMN "user",ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL;

ALTER TABLE "public"."UserMeta" DROP COLUMN "user",ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL;

ALTER TABLE "public"."MessageMeta" DROP COLUMN "message",ADD COLUMN "message" text   REFERENCES "public"."Message"("id") ON DELETE SET NULL;

ALTER TABLE "public"."PodMeta" ADD COLUMN "pod" text   REFERENCES "public"."Pod"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Annotation" DROP COLUMN "user",ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL,DROP COLUMN "post",ADD COLUMN "post" text   REFERENCES "public"."Post"("id") ON DELETE SET NULL;

ALTER TABLE "public"."_FollowRelation" DROP COLUMN "A",ADD COLUMN "A" text   REFERENCES "public"."User"("id") ON DELETE CASCADE,DROP COLUMN "B",ADD COLUMN "B" text   REFERENCES "public"."User"("id") ON DELETE CASCADE;

ALTER TABLE "public"."Review" DROP COLUMN "user",ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL,DROP COLUMN "post",ADD COLUMN "post" text   REFERENCES "public"."Post"("id") ON DELETE SET NULL;

ALTER TABLE "public"."_CategoryToPod" DROP COLUMN "A",ADD COLUMN "A" text   REFERENCES "public"."Category"("id") ON DELETE CASCADE,DROP COLUMN "B",ADD COLUMN "B" text   REFERENCES "public"."Pod"("id") ON DELETE CASCADE;

ALTER TABLE "public"."_PostToTag" DROP COLUMN "A",ADD COLUMN "A" text   REFERENCES "public"."Post"("id") ON DELETE CASCADE,DROP COLUMN "B",ADD COLUMN "B" text   REFERENCES "public"."Tag"("id") ON DELETE CASCADE;

ALTER TABLE "public"."Notification" DROP COLUMN "user",ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL,DROP COLUMN "thread",ADD COLUMN "thread" text   REFERENCES "public"."Thread"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Favorite" DROP COLUMN "user",ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL,DROP COLUMN "post",ADD COLUMN "post" text   REFERENCES "public"."Post"("id") ON DELETE SET NULL;

ALTER TABLE "public"."PostMeta" DROP COLUMN "pod",DROP COLUMN "post",ADD COLUMN "post" text   REFERENCES "public"."Post"("id") ON DELETE SET NULL;

ALTER TABLE "public"."Post" DROP COLUMN "user",ADD COLUMN "user" text   REFERENCES "public"."User"("id") ON DELETE SET NULL,DROP COLUMN "pod",ADD COLUMN "pod" text   REFERENCES "public"."Pod"("id") ON DELETE SET NULL;
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration 20190809222327-multi-on-tags-and-cats..20190810115937-meta-on-pod
--- datamodel.dml
+++ datamodel.dml
@@ -57,9 +57,9 @@
   itemUrlSegment String
   itemName       String
   itemContent    String
   itemDeleted    Boolean    @default(false)
-  itemMeta       PostMeta[]
+  itemMeta       PodMeta[]
   posts          Post[]
   categories     Category[]
   createdAt      DateTime   @default(now())
   updatedAt      DateTime   @updatedAt
```

## Photon Usage

You can use a specific Photon built for this migration (20190810115937-meta-on-pod)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/20190810115937-meta-on-pod'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```
