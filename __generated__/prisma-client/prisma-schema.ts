export const typeDefs = /* GraphQL */ `type AggregateBlogPost {
  count: Int!
}

type AggregateBlogPostMeta {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateFileMeta {
  count: Int!
}

type AggregateProfilePage {
  count: Int!
}

type AggregateProfilePageMeta {
  count: Int!
}

type AggregateReview {
  count: Int!
}

type AggregateReviewMeta {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserFeedback {
  count: Int!
}

type AggregateUserFeedbackMeta {
  count: Int!
}

type AggregateUserMeta {
  count: Int!
}

type AggregateUserTrack {
  count: Int!
}

type AggregateUserTrackMeta {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type BlogPost {
  id: ID!
  oldId: String
  user: User
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta(where: BlogPostMetaWhereInput, orderBy: BlogPostMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BlogPostMeta!]
}

type BlogPostConnection {
  pageInfo: PageInfo!
  edges: [BlogPostEdge]!
  aggregate: AggregateBlogPost!
}

input BlogPostCreateInput {
  oldId: String
  user: UserCreateOneWithoutBlogPostsInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: BlogPostMetaCreateManyWithoutBlogPostInput
}

input BlogPostCreateManyWithoutUserInput {
  create: [BlogPostCreateWithoutUserInput!]
  connect: [BlogPostWhereUniqueInput!]
}

input BlogPostCreateOneWithoutItemMetaInput {
  create: BlogPostCreateWithoutItemMetaInput
  connect: BlogPostWhereUniqueInput
}

input BlogPostCreateWithoutItemMetaInput {
  oldId: String
  user: UserCreateOneWithoutBlogPostsInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
}

input BlogPostCreateWithoutUserInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: BlogPostMetaCreateManyWithoutBlogPostInput
}

type BlogPostEdge {
  node: BlogPost!
  cursor: String!
}

type BlogPostMeta {
  id: ID!
  oldId: String
  itemOldId: String
  blogPost: BlogPost
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

type BlogPostMetaConnection {
  pageInfo: PageInfo!
  edges: [BlogPostMetaEdge]!
  aggregate: AggregateBlogPostMeta!
}

input BlogPostMetaCreateInput {
  oldId: String
  itemOldId: String
  blogPost: BlogPostCreateOneWithoutItemMetaInput
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

input BlogPostMetaCreateManyWithoutBlogPostInput {
  create: [BlogPostMetaCreateWithoutBlogPostInput!]
  connect: [BlogPostMetaWhereUniqueInput!]
}

input BlogPostMetaCreateWithoutBlogPostInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

type BlogPostMetaEdge {
  node: BlogPostMeta!
  cursor: String!
}

enum BlogPostMetaOrderByInput {
  id_ASC
  id_DESC
  oldId_ASC
  oldId_DESC
  itemOldId_ASC
  itemOldId_DESC
  metaType_ASC
  metaType_DESC
  metaName_ASC
  metaName_DESC
  metaValue_ASC
  metaValue_DESC
  metaDeleted_ASC
  metaDeleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BlogPostMetaPreviousValues {
  id: ID!
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

input BlogPostMetaScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemOldId: String
  itemOldId_not: String
  itemOldId_in: [String!]
  itemOldId_not_in: [String!]
  itemOldId_lt: String
  itemOldId_lte: String
  itemOldId_gt: String
  itemOldId_gte: String
  itemOldId_contains: String
  itemOldId_not_contains: String
  itemOldId_starts_with: String
  itemOldId_not_starts_with: String
  itemOldId_ends_with: String
  itemOldId_not_ends_with: String
  metaType: String
  metaType_not: String
  metaType_in: [String!]
  metaType_not_in: [String!]
  metaType_lt: String
  metaType_lte: String
  metaType_gt: String
  metaType_gte: String
  metaType_contains: String
  metaType_not_contains: String
  metaType_starts_with: String
  metaType_not_starts_with: String
  metaType_ends_with: String
  metaType_not_ends_with: String
  metaName: String
  metaName_not: String
  metaName_in: [String!]
  metaName_not_in: [String!]
  metaName_lt: String
  metaName_lte: String
  metaName_gt: String
  metaName_gte: String
  metaName_contains: String
  metaName_not_contains: String
  metaName_starts_with: String
  metaName_not_starts_with: String
  metaName_ends_with: String
  metaName_not_ends_with: String
  metaValue: String
  metaValue_not: String
  metaValue_in: [String!]
  metaValue_not_in: [String!]
  metaValue_lt: String
  metaValue_lte: String
  metaValue_gt: String
  metaValue_gte: String
  metaValue_contains: String
  metaValue_not_contains: String
  metaValue_starts_with: String
  metaValue_not_starts_with: String
  metaValue_ends_with: String
  metaValue_not_ends_with: String
  metaDeleted: Boolean
  metaDeleted_not: Boolean
  AND: [BlogPostMetaScalarWhereInput!]
  OR: [BlogPostMetaScalarWhereInput!]
  NOT: [BlogPostMetaScalarWhereInput!]
}

type BlogPostMetaSubscriptionPayload {
  mutation: MutationType!
  node: BlogPostMeta
  updatedFields: [String!]
  previousValues: BlogPostMetaPreviousValues
}

input BlogPostMetaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BlogPostMetaWhereInput
  AND: [BlogPostMetaSubscriptionWhereInput!]
  OR: [BlogPostMetaSubscriptionWhereInput!]
  NOT: [BlogPostMetaSubscriptionWhereInput!]
}

input BlogPostMetaUpdateInput {
  oldId: String
  itemOldId: String
  blogPost: BlogPostUpdateOneWithoutItemMetaInput
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input BlogPostMetaUpdateManyDataInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input BlogPostMetaUpdateManyMutationInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input BlogPostMetaUpdateManyWithoutBlogPostInput {
  create: [BlogPostMetaCreateWithoutBlogPostInput!]
  delete: [BlogPostMetaWhereUniqueInput!]
  connect: [BlogPostMetaWhereUniqueInput!]
  disconnect: [BlogPostMetaWhereUniqueInput!]
  update: [BlogPostMetaUpdateWithWhereUniqueWithoutBlogPostInput!]
  upsert: [BlogPostMetaUpsertWithWhereUniqueWithoutBlogPostInput!]
  deleteMany: [BlogPostMetaScalarWhereInput!]
  updateMany: [BlogPostMetaUpdateManyWithWhereNestedInput!]
}

input BlogPostMetaUpdateManyWithWhereNestedInput {
  where: BlogPostMetaScalarWhereInput!
  data: BlogPostMetaUpdateManyDataInput!
}

input BlogPostMetaUpdateWithoutBlogPostDataInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input BlogPostMetaUpdateWithWhereUniqueWithoutBlogPostInput {
  where: BlogPostMetaWhereUniqueInput!
  data: BlogPostMetaUpdateWithoutBlogPostDataInput!
}

input BlogPostMetaUpsertWithWhereUniqueWithoutBlogPostInput {
  where: BlogPostMetaWhereUniqueInput!
  update: BlogPostMetaUpdateWithoutBlogPostDataInput!
  create: BlogPostMetaCreateWithoutBlogPostInput!
}

input BlogPostMetaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemOldId: String
  itemOldId_not: String
  itemOldId_in: [String!]
  itemOldId_not_in: [String!]
  itemOldId_lt: String
  itemOldId_lte: String
  itemOldId_gt: String
  itemOldId_gte: String
  itemOldId_contains: String
  itemOldId_not_contains: String
  itemOldId_starts_with: String
  itemOldId_not_starts_with: String
  itemOldId_ends_with: String
  itemOldId_not_ends_with: String
  blogPost: BlogPostWhereInput
  metaType: String
  metaType_not: String
  metaType_in: [String!]
  metaType_not_in: [String!]
  metaType_lt: String
  metaType_lte: String
  metaType_gt: String
  metaType_gte: String
  metaType_contains: String
  metaType_not_contains: String
  metaType_starts_with: String
  metaType_not_starts_with: String
  metaType_ends_with: String
  metaType_not_ends_with: String
  metaName: String
  metaName_not: String
  metaName_in: [String!]
  metaName_not_in: [String!]
  metaName_lt: String
  metaName_lte: String
  metaName_gt: String
  metaName_gte: String
  metaName_contains: String
  metaName_not_contains: String
  metaName_starts_with: String
  metaName_not_starts_with: String
  metaName_ends_with: String
  metaName_not_ends_with: String
  metaValue: String
  metaValue_not: String
  metaValue_in: [String!]
  metaValue_not_in: [String!]
  metaValue_lt: String
  metaValue_lte: String
  metaValue_gt: String
  metaValue_gte: String
  metaValue_contains: String
  metaValue_not_contains: String
  metaValue_starts_with: String
  metaValue_not_starts_with: String
  metaValue_ends_with: String
  metaValue_not_ends_with: String
  metaDeleted: Boolean
  metaDeleted_not: Boolean
  AND: [BlogPostMetaWhereInput!]
  OR: [BlogPostMetaWhereInput!]
  NOT: [BlogPostMetaWhereInput!]
}

input BlogPostMetaWhereUniqueInput {
  id: ID
  oldId: String
}

enum BlogPostOrderByInput {
  id_ASC
  id_DESC
  oldId_ASC
  oldId_DESC
  itemType_ASC
  itemType_DESC
  itemStatus_ASC
  itemStatus_DESC
  itemUrlSegment_ASC
  itemUrlSegment_DESC
  itemMimeType_ASC
  itemMimeType_DESC
  itemName_ASC
  itemName_DESC
  itemContent_ASC
  itemContent_DESC
  itemDeleted_ASC
  itemDeleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BlogPostPreviousValues {
  id: ID!
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
}

input BlogPostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemType: String
  itemType_not: String
  itemType_in: [String!]
  itemType_not_in: [String!]
  itemType_lt: String
  itemType_lte: String
  itemType_gt: String
  itemType_gte: String
  itemType_contains: String
  itemType_not_contains: String
  itemType_starts_with: String
  itemType_not_starts_with: String
  itemType_ends_with: String
  itemType_not_ends_with: String
  itemStatus: String
  itemStatus_not: String
  itemStatus_in: [String!]
  itemStatus_not_in: [String!]
  itemStatus_lt: String
  itemStatus_lte: String
  itemStatus_gt: String
  itemStatus_gte: String
  itemStatus_contains: String
  itemStatus_not_contains: String
  itemStatus_starts_with: String
  itemStatus_not_starts_with: String
  itemStatus_ends_with: String
  itemStatus_not_ends_with: String
  itemUrlSegment: String
  itemUrlSegment_not: String
  itemUrlSegment_in: [String!]
  itemUrlSegment_not_in: [String!]
  itemUrlSegment_lt: String
  itemUrlSegment_lte: String
  itemUrlSegment_gt: String
  itemUrlSegment_gte: String
  itemUrlSegment_contains: String
  itemUrlSegment_not_contains: String
  itemUrlSegment_starts_with: String
  itemUrlSegment_not_starts_with: String
  itemUrlSegment_ends_with: String
  itemUrlSegment_not_ends_with: String
  itemMimeType: String
  itemMimeType_not: String
  itemMimeType_in: [String!]
  itemMimeType_not_in: [String!]
  itemMimeType_lt: String
  itemMimeType_lte: String
  itemMimeType_gt: String
  itemMimeType_gte: String
  itemMimeType_contains: String
  itemMimeType_not_contains: String
  itemMimeType_starts_with: String
  itemMimeType_not_starts_with: String
  itemMimeType_ends_with: String
  itemMimeType_not_ends_with: String
  itemName: String
  itemName_not: String
  itemName_in: [String!]
  itemName_not_in: [String!]
  itemName_lt: String
  itemName_lte: String
  itemName_gt: String
  itemName_gte: String
  itemName_contains: String
  itemName_not_contains: String
  itemName_starts_with: String
  itemName_not_starts_with: String
  itemName_ends_with: String
  itemName_not_ends_with: String
  itemContent: String
  itemContent_not: String
  itemContent_in: [String!]
  itemContent_not_in: [String!]
  itemContent_lt: String
  itemContent_lte: String
  itemContent_gt: String
  itemContent_gte: String
  itemContent_contains: String
  itemContent_not_contains: String
  itemContent_starts_with: String
  itemContent_not_starts_with: String
  itemContent_ends_with: String
  itemContent_not_ends_with: String
  itemDeleted: Boolean
  itemDeleted_not: Boolean
  AND: [BlogPostScalarWhereInput!]
  OR: [BlogPostScalarWhereInput!]
  NOT: [BlogPostScalarWhereInput!]
}

type BlogPostSubscriptionPayload {
  mutation: MutationType!
  node: BlogPost
  updatedFields: [String!]
  previousValues: BlogPostPreviousValues
}

input BlogPostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BlogPostWhereInput
  AND: [BlogPostSubscriptionWhereInput!]
  OR: [BlogPostSubscriptionWhereInput!]
  NOT: [BlogPostSubscriptionWhereInput!]
}

input BlogPostUpdateInput {
  oldId: String
  user: UserUpdateOneWithoutBlogPostsInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: BlogPostMetaUpdateManyWithoutBlogPostInput
}

input BlogPostUpdateManyDataInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
}

input BlogPostUpdateManyMutationInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
}

input BlogPostUpdateManyWithoutUserInput {
  create: [BlogPostCreateWithoutUserInput!]
  delete: [BlogPostWhereUniqueInput!]
  connect: [BlogPostWhereUniqueInput!]
  disconnect: [BlogPostWhereUniqueInput!]
  update: [BlogPostUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [BlogPostUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [BlogPostScalarWhereInput!]
  updateMany: [BlogPostUpdateManyWithWhereNestedInput!]
}

input BlogPostUpdateManyWithWhereNestedInput {
  where: BlogPostScalarWhereInput!
  data: BlogPostUpdateManyDataInput!
}

input BlogPostUpdateOneWithoutItemMetaInput {
  create: BlogPostCreateWithoutItemMetaInput
  update: BlogPostUpdateWithoutItemMetaDataInput
  upsert: BlogPostUpsertWithoutItemMetaInput
  delete: Boolean
  disconnect: Boolean
  connect: BlogPostWhereUniqueInput
}

input BlogPostUpdateWithoutItemMetaDataInput {
  oldId: String
  user: UserUpdateOneWithoutBlogPostsInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
}

input BlogPostUpdateWithoutUserDataInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: BlogPostMetaUpdateManyWithoutBlogPostInput
}

input BlogPostUpdateWithWhereUniqueWithoutUserInput {
  where: BlogPostWhereUniqueInput!
  data: BlogPostUpdateWithoutUserDataInput!
}

input BlogPostUpsertWithoutItemMetaInput {
  update: BlogPostUpdateWithoutItemMetaDataInput!
  create: BlogPostCreateWithoutItemMetaInput!
}

input BlogPostUpsertWithWhereUniqueWithoutUserInput {
  where: BlogPostWhereUniqueInput!
  update: BlogPostUpdateWithoutUserDataInput!
  create: BlogPostCreateWithoutUserInput!
}

input BlogPostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  user: UserWhereInput
  itemType: String
  itemType_not: String
  itemType_in: [String!]
  itemType_not_in: [String!]
  itemType_lt: String
  itemType_lte: String
  itemType_gt: String
  itemType_gte: String
  itemType_contains: String
  itemType_not_contains: String
  itemType_starts_with: String
  itemType_not_starts_with: String
  itemType_ends_with: String
  itemType_not_ends_with: String
  itemStatus: String
  itemStatus_not: String
  itemStatus_in: [String!]
  itemStatus_not_in: [String!]
  itemStatus_lt: String
  itemStatus_lte: String
  itemStatus_gt: String
  itemStatus_gte: String
  itemStatus_contains: String
  itemStatus_not_contains: String
  itemStatus_starts_with: String
  itemStatus_not_starts_with: String
  itemStatus_ends_with: String
  itemStatus_not_ends_with: String
  itemUrlSegment: String
  itemUrlSegment_not: String
  itemUrlSegment_in: [String!]
  itemUrlSegment_not_in: [String!]
  itemUrlSegment_lt: String
  itemUrlSegment_lte: String
  itemUrlSegment_gt: String
  itemUrlSegment_gte: String
  itemUrlSegment_contains: String
  itemUrlSegment_not_contains: String
  itemUrlSegment_starts_with: String
  itemUrlSegment_not_starts_with: String
  itemUrlSegment_ends_with: String
  itemUrlSegment_not_ends_with: String
  itemMimeType: String
  itemMimeType_not: String
  itemMimeType_in: [String!]
  itemMimeType_not_in: [String!]
  itemMimeType_lt: String
  itemMimeType_lte: String
  itemMimeType_gt: String
  itemMimeType_gte: String
  itemMimeType_contains: String
  itemMimeType_not_contains: String
  itemMimeType_starts_with: String
  itemMimeType_not_starts_with: String
  itemMimeType_ends_with: String
  itemMimeType_not_ends_with: String
  itemName: String
  itemName_not: String
  itemName_in: [String!]
  itemName_not_in: [String!]
  itemName_lt: String
  itemName_lte: String
  itemName_gt: String
  itemName_gte: String
  itemName_contains: String
  itemName_not_contains: String
  itemName_starts_with: String
  itemName_not_starts_with: String
  itemName_ends_with: String
  itemName_not_ends_with: String
  itemContent: String
  itemContent_not: String
  itemContent_in: [String!]
  itemContent_not_in: [String!]
  itemContent_lt: String
  itemContent_lte: String
  itemContent_gt: String
  itemContent_gte: String
  itemContent_contains: String
  itemContent_not_contains: String
  itemContent_starts_with: String
  itemContent_not_starts_with: String
  itemContent_ends_with: String
  itemContent_not_ends_with: String
  itemDeleted: Boolean
  itemDeleted_not: Boolean
  itemMeta_every: BlogPostMetaWhereInput
  itemMeta_some: BlogPostMetaWhereInput
  itemMeta_none: BlogPostMetaWhereInput
  AND: [BlogPostWhereInput!]
  OR: [BlogPostWhereInput!]
  NOT: [BlogPostWhereInput!]
}

input BlogPostWhereUniqueInput {
  id: ID
  oldId: String
}

type File {
  id: ID!
  oldId: String
  user: User
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta(where: FileMetaWhereInput, orderBy: FileMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FileMeta!]
  userTrack: UserTrack
}

type FileConnection {
  pageInfo: PageInfo!
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  oldId: String
  user: UserCreateOneWithoutFilesInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: FileMetaCreateManyWithoutFileInput
  userTrack: UserTrackCreateOneWithoutFilesInput
}

input FileCreateManyWithoutUserInput {
  create: [FileCreateWithoutUserInput!]
  connect: [FileWhereUniqueInput!]
}

input FileCreateManyWithoutUserTrackInput {
  create: [FileCreateWithoutUserTrackInput!]
  connect: [FileWhereUniqueInput!]
}

input FileCreateOneWithoutItemMetaInput {
  create: FileCreateWithoutItemMetaInput
  connect: FileWhereUniqueInput
}

input FileCreateWithoutItemMetaInput {
  oldId: String
  user: UserCreateOneWithoutFilesInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  userTrack: UserTrackCreateOneWithoutFilesInput
}

input FileCreateWithoutUserInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: FileMetaCreateManyWithoutFileInput
  userTrack: UserTrackCreateOneWithoutFilesInput
}

input FileCreateWithoutUserTrackInput {
  oldId: String
  user: UserCreateOneWithoutFilesInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: FileMetaCreateManyWithoutFileInput
}

type FileEdge {
  node: File!
  cursor: String!
}

type FileMeta {
  id: ID!
  oldId: String
  itemOldId: String
  file: File
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

type FileMetaConnection {
  pageInfo: PageInfo!
  edges: [FileMetaEdge]!
  aggregate: AggregateFileMeta!
}

input FileMetaCreateInput {
  oldId: String
  itemOldId: String
  file: FileCreateOneWithoutItemMetaInput
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

input FileMetaCreateManyWithoutFileInput {
  create: [FileMetaCreateWithoutFileInput!]
  connect: [FileMetaWhereUniqueInput!]
}

input FileMetaCreateWithoutFileInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

type FileMetaEdge {
  node: FileMeta!
  cursor: String!
}

enum FileMetaOrderByInput {
  id_ASC
  id_DESC
  oldId_ASC
  oldId_DESC
  itemOldId_ASC
  itemOldId_DESC
  metaType_ASC
  metaType_DESC
  metaName_ASC
  metaName_DESC
  metaValue_ASC
  metaValue_DESC
  metaDeleted_ASC
  metaDeleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FileMetaPreviousValues {
  id: ID!
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

input FileMetaScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemOldId: String
  itemOldId_not: String
  itemOldId_in: [String!]
  itemOldId_not_in: [String!]
  itemOldId_lt: String
  itemOldId_lte: String
  itemOldId_gt: String
  itemOldId_gte: String
  itemOldId_contains: String
  itemOldId_not_contains: String
  itemOldId_starts_with: String
  itemOldId_not_starts_with: String
  itemOldId_ends_with: String
  itemOldId_not_ends_with: String
  metaType: String
  metaType_not: String
  metaType_in: [String!]
  metaType_not_in: [String!]
  metaType_lt: String
  metaType_lte: String
  metaType_gt: String
  metaType_gte: String
  metaType_contains: String
  metaType_not_contains: String
  metaType_starts_with: String
  metaType_not_starts_with: String
  metaType_ends_with: String
  metaType_not_ends_with: String
  metaName: String
  metaName_not: String
  metaName_in: [String!]
  metaName_not_in: [String!]
  metaName_lt: String
  metaName_lte: String
  metaName_gt: String
  metaName_gte: String
  metaName_contains: String
  metaName_not_contains: String
  metaName_starts_with: String
  metaName_not_starts_with: String
  metaName_ends_with: String
  metaName_not_ends_with: String
  metaValue: String
  metaValue_not: String
  metaValue_in: [String!]
  metaValue_not_in: [String!]
  metaValue_lt: String
  metaValue_lte: String
  metaValue_gt: String
  metaValue_gte: String
  metaValue_contains: String
  metaValue_not_contains: String
  metaValue_starts_with: String
  metaValue_not_starts_with: String
  metaValue_ends_with: String
  metaValue_not_ends_with: String
  metaDeleted: Boolean
  metaDeleted_not: Boolean
  AND: [FileMetaScalarWhereInput!]
  OR: [FileMetaScalarWhereInput!]
  NOT: [FileMetaScalarWhereInput!]
}

type FileMetaSubscriptionPayload {
  mutation: MutationType!
  node: FileMeta
  updatedFields: [String!]
  previousValues: FileMetaPreviousValues
}

input FileMetaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FileMetaWhereInput
  AND: [FileMetaSubscriptionWhereInput!]
  OR: [FileMetaSubscriptionWhereInput!]
  NOT: [FileMetaSubscriptionWhereInput!]
}

input FileMetaUpdateInput {
  oldId: String
  itemOldId: String
  file: FileUpdateOneWithoutItemMetaInput
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input FileMetaUpdateManyDataInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input FileMetaUpdateManyMutationInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input FileMetaUpdateManyWithoutFileInput {
  create: [FileMetaCreateWithoutFileInput!]
  delete: [FileMetaWhereUniqueInput!]
  connect: [FileMetaWhereUniqueInput!]
  disconnect: [FileMetaWhereUniqueInput!]
  update: [FileMetaUpdateWithWhereUniqueWithoutFileInput!]
  upsert: [FileMetaUpsertWithWhereUniqueWithoutFileInput!]
  deleteMany: [FileMetaScalarWhereInput!]
  updateMany: [FileMetaUpdateManyWithWhereNestedInput!]
}

input FileMetaUpdateManyWithWhereNestedInput {
  where: FileMetaScalarWhereInput!
  data: FileMetaUpdateManyDataInput!
}

input FileMetaUpdateWithoutFileDataInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input FileMetaUpdateWithWhereUniqueWithoutFileInput {
  where: FileMetaWhereUniqueInput!
  data: FileMetaUpdateWithoutFileDataInput!
}

input FileMetaUpsertWithWhereUniqueWithoutFileInput {
  where: FileMetaWhereUniqueInput!
  update: FileMetaUpdateWithoutFileDataInput!
  create: FileMetaCreateWithoutFileInput!
}

input FileMetaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemOldId: String
  itemOldId_not: String
  itemOldId_in: [String!]
  itemOldId_not_in: [String!]
  itemOldId_lt: String
  itemOldId_lte: String
  itemOldId_gt: String
  itemOldId_gte: String
  itemOldId_contains: String
  itemOldId_not_contains: String
  itemOldId_starts_with: String
  itemOldId_not_starts_with: String
  itemOldId_ends_with: String
  itemOldId_not_ends_with: String
  file: FileWhereInput
  metaType: String
  metaType_not: String
  metaType_in: [String!]
  metaType_not_in: [String!]
  metaType_lt: String
  metaType_lte: String
  metaType_gt: String
  metaType_gte: String
  metaType_contains: String
  metaType_not_contains: String
  metaType_starts_with: String
  metaType_not_starts_with: String
  metaType_ends_with: String
  metaType_not_ends_with: String
  metaName: String
  metaName_not: String
  metaName_in: [String!]
  metaName_not_in: [String!]
  metaName_lt: String
  metaName_lte: String
  metaName_gt: String
  metaName_gte: String
  metaName_contains: String
  metaName_not_contains: String
  metaName_starts_with: String
  metaName_not_starts_with: String
  metaName_ends_with: String
  metaName_not_ends_with: String
  metaValue: String
  metaValue_not: String
  metaValue_in: [String!]
  metaValue_not_in: [String!]
  metaValue_lt: String
  metaValue_lte: String
  metaValue_gt: String
  metaValue_gte: String
  metaValue_contains: String
  metaValue_not_contains: String
  metaValue_starts_with: String
  metaValue_not_starts_with: String
  metaValue_ends_with: String
  metaValue_not_ends_with: String
  metaDeleted: Boolean
  metaDeleted_not: Boolean
  AND: [FileMetaWhereInput!]
  OR: [FileMetaWhereInput!]
  NOT: [FileMetaWhereInput!]
}

input FileMetaWhereUniqueInput {
  id: ID
  oldId: String
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  oldId_ASC
  oldId_DESC
  itemType_ASC
  itemType_DESC
  itemStatus_ASC
  itemStatus_DESC
  itemUrlSegment_ASC
  itemUrlSegment_DESC
  itemMimeType_ASC
  itemMimeType_DESC
  itemName_ASC
  itemName_DESC
  itemContent_ASC
  itemContent_DESC
  itemDeleted_ASC
  itemDeleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FilePreviousValues {
  id: ID!
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
}

input FileScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemType: String
  itemType_not: String
  itemType_in: [String!]
  itemType_not_in: [String!]
  itemType_lt: String
  itemType_lte: String
  itemType_gt: String
  itemType_gte: String
  itemType_contains: String
  itemType_not_contains: String
  itemType_starts_with: String
  itemType_not_starts_with: String
  itemType_ends_with: String
  itemType_not_ends_with: String
  itemStatus: String
  itemStatus_not: String
  itemStatus_in: [String!]
  itemStatus_not_in: [String!]
  itemStatus_lt: String
  itemStatus_lte: String
  itemStatus_gt: String
  itemStatus_gte: String
  itemStatus_contains: String
  itemStatus_not_contains: String
  itemStatus_starts_with: String
  itemStatus_not_starts_with: String
  itemStatus_ends_with: String
  itemStatus_not_ends_with: String
  itemUrlSegment: String
  itemUrlSegment_not: String
  itemUrlSegment_in: [String!]
  itemUrlSegment_not_in: [String!]
  itemUrlSegment_lt: String
  itemUrlSegment_lte: String
  itemUrlSegment_gt: String
  itemUrlSegment_gte: String
  itemUrlSegment_contains: String
  itemUrlSegment_not_contains: String
  itemUrlSegment_starts_with: String
  itemUrlSegment_not_starts_with: String
  itemUrlSegment_ends_with: String
  itemUrlSegment_not_ends_with: String
  itemMimeType: String
  itemMimeType_not: String
  itemMimeType_in: [String!]
  itemMimeType_not_in: [String!]
  itemMimeType_lt: String
  itemMimeType_lte: String
  itemMimeType_gt: String
  itemMimeType_gte: String
  itemMimeType_contains: String
  itemMimeType_not_contains: String
  itemMimeType_starts_with: String
  itemMimeType_not_starts_with: String
  itemMimeType_ends_with: String
  itemMimeType_not_ends_with: String
  itemName: String
  itemName_not: String
  itemName_in: [String!]
  itemName_not_in: [String!]
  itemName_lt: String
  itemName_lte: String
  itemName_gt: String
  itemName_gte: String
  itemName_contains: String
  itemName_not_contains: String
  itemName_starts_with: String
  itemName_not_starts_with: String
  itemName_ends_with: String
  itemName_not_ends_with: String
  itemContent: String
  itemContent_not: String
  itemContent_in: [String!]
  itemContent_not_in: [String!]
  itemContent_lt: String
  itemContent_lte: String
  itemContent_gt: String
  itemContent_gte: String
  itemContent_contains: String
  itemContent_not_contains: String
  itemContent_starts_with: String
  itemContent_not_starts_with: String
  itemContent_ends_with: String
  itemContent_not_ends_with: String
  itemDeleted: Boolean
  itemDeleted_not: Boolean
  AND: [FileScalarWhereInput!]
  OR: [FileScalarWhereInput!]
  NOT: [FileScalarWhereInput!]
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FileWhereInput
  AND: [FileSubscriptionWhereInput!]
  OR: [FileSubscriptionWhereInput!]
  NOT: [FileSubscriptionWhereInput!]
}

input FileUpdateInput {
  oldId: String
  user: UserUpdateOneWithoutFilesInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: FileMetaUpdateManyWithoutFileInput
  userTrack: UserTrackUpdateOneWithoutFilesInput
}

input FileUpdateManyDataInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
}

input FileUpdateManyMutationInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
}

input FileUpdateManyWithoutUserInput {
  create: [FileCreateWithoutUserInput!]
  delete: [FileWhereUniqueInput!]
  connect: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  update: [FileUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [FileUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [FileScalarWhereInput!]
  updateMany: [FileUpdateManyWithWhereNestedInput!]
}

input FileUpdateManyWithoutUserTrackInput {
  create: [FileCreateWithoutUserTrackInput!]
  delete: [FileWhereUniqueInput!]
  connect: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  update: [FileUpdateWithWhereUniqueWithoutUserTrackInput!]
  upsert: [FileUpsertWithWhereUniqueWithoutUserTrackInput!]
  deleteMany: [FileScalarWhereInput!]
  updateMany: [FileUpdateManyWithWhereNestedInput!]
}

input FileUpdateManyWithWhereNestedInput {
  where: FileScalarWhereInput!
  data: FileUpdateManyDataInput!
}

input FileUpdateOneWithoutItemMetaInput {
  create: FileCreateWithoutItemMetaInput
  update: FileUpdateWithoutItemMetaDataInput
  upsert: FileUpsertWithoutItemMetaInput
  delete: Boolean
  disconnect: Boolean
  connect: FileWhereUniqueInput
}

input FileUpdateWithoutItemMetaDataInput {
  oldId: String
  user: UserUpdateOneWithoutFilesInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  userTrack: UserTrackUpdateOneWithoutFilesInput
}

input FileUpdateWithoutUserDataInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: FileMetaUpdateManyWithoutFileInput
  userTrack: UserTrackUpdateOneWithoutFilesInput
}

input FileUpdateWithoutUserTrackDataInput {
  oldId: String
  user: UserUpdateOneWithoutFilesInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: FileMetaUpdateManyWithoutFileInput
}

input FileUpdateWithWhereUniqueWithoutUserInput {
  where: FileWhereUniqueInput!
  data: FileUpdateWithoutUserDataInput!
}

input FileUpdateWithWhereUniqueWithoutUserTrackInput {
  where: FileWhereUniqueInput!
  data: FileUpdateWithoutUserTrackDataInput!
}

input FileUpsertWithoutItemMetaInput {
  update: FileUpdateWithoutItemMetaDataInput!
  create: FileCreateWithoutItemMetaInput!
}

input FileUpsertWithWhereUniqueWithoutUserInput {
  where: FileWhereUniqueInput!
  update: FileUpdateWithoutUserDataInput!
  create: FileCreateWithoutUserInput!
}

input FileUpsertWithWhereUniqueWithoutUserTrackInput {
  where: FileWhereUniqueInput!
  update: FileUpdateWithoutUserTrackDataInput!
  create: FileCreateWithoutUserTrackInput!
}

input FileWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  user: UserWhereInput
  itemType: String
  itemType_not: String
  itemType_in: [String!]
  itemType_not_in: [String!]
  itemType_lt: String
  itemType_lte: String
  itemType_gt: String
  itemType_gte: String
  itemType_contains: String
  itemType_not_contains: String
  itemType_starts_with: String
  itemType_not_starts_with: String
  itemType_ends_with: String
  itemType_not_ends_with: String
  itemStatus: String
  itemStatus_not: String
  itemStatus_in: [String!]
  itemStatus_not_in: [String!]
  itemStatus_lt: String
  itemStatus_lte: String
  itemStatus_gt: String
  itemStatus_gte: String
  itemStatus_contains: String
  itemStatus_not_contains: String
  itemStatus_starts_with: String
  itemStatus_not_starts_with: String
  itemStatus_ends_with: String
  itemStatus_not_ends_with: String
  itemUrlSegment: String
  itemUrlSegment_not: String
  itemUrlSegment_in: [String!]
  itemUrlSegment_not_in: [String!]
  itemUrlSegment_lt: String
  itemUrlSegment_lte: String
  itemUrlSegment_gt: String
  itemUrlSegment_gte: String
  itemUrlSegment_contains: String
  itemUrlSegment_not_contains: String
  itemUrlSegment_starts_with: String
  itemUrlSegment_not_starts_with: String
  itemUrlSegment_ends_with: String
  itemUrlSegment_not_ends_with: String
  itemMimeType: String
  itemMimeType_not: String
  itemMimeType_in: [String!]
  itemMimeType_not_in: [String!]
  itemMimeType_lt: String
  itemMimeType_lte: String
  itemMimeType_gt: String
  itemMimeType_gte: String
  itemMimeType_contains: String
  itemMimeType_not_contains: String
  itemMimeType_starts_with: String
  itemMimeType_not_starts_with: String
  itemMimeType_ends_with: String
  itemMimeType_not_ends_with: String
  itemName: String
  itemName_not: String
  itemName_in: [String!]
  itemName_not_in: [String!]
  itemName_lt: String
  itemName_lte: String
  itemName_gt: String
  itemName_gte: String
  itemName_contains: String
  itemName_not_contains: String
  itemName_starts_with: String
  itemName_not_starts_with: String
  itemName_ends_with: String
  itemName_not_ends_with: String
  itemContent: String
  itemContent_not: String
  itemContent_in: [String!]
  itemContent_not_in: [String!]
  itemContent_lt: String
  itemContent_lte: String
  itemContent_gt: String
  itemContent_gte: String
  itemContent_contains: String
  itemContent_not_contains: String
  itemContent_starts_with: String
  itemContent_not_starts_with: String
  itemContent_ends_with: String
  itemContent_not_ends_with: String
  itemDeleted: Boolean
  itemDeleted_not: Boolean
  itemMeta_every: FileMetaWhereInput
  itemMeta_some: FileMetaWhereInput
  itemMeta_none: FileMetaWhereInput
  userTrack: UserTrackWhereInput
  AND: [FileWhereInput!]
  OR: [FileWhereInput!]
  NOT: [FileWhereInput!]
}

input FileWhereUniqueInput {
  id: ID
  oldId: String
}

scalar Long

type Mutation {
  createBlogPost(data: BlogPostCreateInput!): BlogPost!
  updateBlogPost(data: BlogPostUpdateInput!, where: BlogPostWhereUniqueInput!): BlogPost
  updateManyBlogPosts(data: BlogPostUpdateManyMutationInput!, where: BlogPostWhereInput): BatchPayload!
  upsertBlogPost(where: BlogPostWhereUniqueInput!, create: BlogPostCreateInput!, update: BlogPostUpdateInput!): BlogPost!
  deleteBlogPost(where: BlogPostWhereUniqueInput!): BlogPost
  deleteManyBlogPosts(where: BlogPostWhereInput): BatchPayload!
  createBlogPostMeta(data: BlogPostMetaCreateInput!): BlogPostMeta!
  updateBlogPostMeta(data: BlogPostMetaUpdateInput!, where: BlogPostMetaWhereUniqueInput!): BlogPostMeta
  updateManyBlogPostMetas(data: BlogPostMetaUpdateManyMutationInput!, where: BlogPostMetaWhereInput): BatchPayload!
  upsertBlogPostMeta(where: BlogPostMetaWhereUniqueInput!, create: BlogPostMetaCreateInput!, update: BlogPostMetaUpdateInput!): BlogPostMeta!
  deleteBlogPostMeta(where: BlogPostMetaWhereUniqueInput!): BlogPostMeta
  deleteManyBlogPostMetas(where: BlogPostMetaWhereInput): BatchPayload!
  createFile(data: FileCreateInput!): File!
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  deleteFile(where: FileWhereUniqueInput!): File
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  createFileMeta(data: FileMetaCreateInput!): FileMeta!
  updateFileMeta(data: FileMetaUpdateInput!, where: FileMetaWhereUniqueInput!): FileMeta
  updateManyFileMetas(data: FileMetaUpdateManyMutationInput!, where: FileMetaWhereInput): BatchPayload!
  upsertFileMeta(where: FileMetaWhereUniqueInput!, create: FileMetaCreateInput!, update: FileMetaUpdateInput!): FileMeta!
  deleteFileMeta(where: FileMetaWhereUniqueInput!): FileMeta
  deleteManyFileMetas(where: FileMetaWhereInput): BatchPayload!
  createProfilePage(data: ProfilePageCreateInput!): ProfilePage!
  updateProfilePage(data: ProfilePageUpdateInput!, where: ProfilePageWhereUniqueInput!): ProfilePage
  updateManyProfilePages(data: ProfilePageUpdateManyMutationInput!, where: ProfilePageWhereInput): BatchPayload!
  upsertProfilePage(where: ProfilePageWhereUniqueInput!, create: ProfilePageCreateInput!, update: ProfilePageUpdateInput!): ProfilePage!
  deleteProfilePage(where: ProfilePageWhereUniqueInput!): ProfilePage
  deleteManyProfilePages(where: ProfilePageWhereInput): BatchPayload!
  createProfilePageMeta(data: ProfilePageMetaCreateInput!): ProfilePageMeta!
  updateProfilePageMeta(data: ProfilePageMetaUpdateInput!, where: ProfilePageMetaWhereUniqueInput!): ProfilePageMeta
  updateManyProfilePageMetas(data: ProfilePageMetaUpdateManyMutationInput!, where: ProfilePageMetaWhereInput): BatchPayload!
  upsertProfilePageMeta(where: ProfilePageMetaWhereUniqueInput!, create: ProfilePageMetaCreateInput!, update: ProfilePageMetaUpdateInput!): ProfilePageMeta!
  deleteProfilePageMeta(where: ProfilePageMetaWhereUniqueInput!): ProfilePageMeta
  deleteManyProfilePageMetas(where: ProfilePageMetaWhereInput): BatchPayload!
  createReview(data: ReviewCreateInput!): Review!
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateManyReviews(data: ReviewUpdateManyMutationInput!, where: ReviewWhereInput): BatchPayload!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  createReviewMeta(data: ReviewMetaCreateInput!): ReviewMeta!
  updateReviewMeta(data: ReviewMetaUpdateInput!, where: ReviewMetaWhereUniqueInput!): ReviewMeta
  updateManyReviewMetas(data: ReviewMetaUpdateManyMutationInput!, where: ReviewMetaWhereInput): BatchPayload!
  upsertReviewMeta(where: ReviewMetaWhereUniqueInput!, create: ReviewMetaCreateInput!, update: ReviewMetaUpdateInput!): ReviewMeta!
  deleteReviewMeta(where: ReviewMetaWhereUniqueInput!): ReviewMeta
  deleteManyReviewMetas(where: ReviewMetaWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserFeedback(data: UserFeedbackCreateInput!): UserFeedback!
  updateUserFeedback(data: UserFeedbackUpdateInput!, where: UserFeedbackWhereUniqueInput!): UserFeedback
  updateManyUserFeedbacks(data: UserFeedbackUpdateManyMutationInput!, where: UserFeedbackWhereInput): BatchPayload!
  upsertUserFeedback(where: UserFeedbackWhereUniqueInput!, create: UserFeedbackCreateInput!, update: UserFeedbackUpdateInput!): UserFeedback!
  deleteUserFeedback(where: UserFeedbackWhereUniqueInput!): UserFeedback
  deleteManyUserFeedbacks(where: UserFeedbackWhereInput): BatchPayload!
  createUserFeedbackMeta(data: UserFeedbackMetaCreateInput!): UserFeedbackMeta!
  updateUserFeedbackMeta(data: UserFeedbackMetaUpdateInput!, where: UserFeedbackMetaWhereUniqueInput!): UserFeedbackMeta
  updateManyUserFeedbackMetas(data: UserFeedbackMetaUpdateManyMutationInput!, where: UserFeedbackMetaWhereInput): BatchPayload!
  upsertUserFeedbackMeta(where: UserFeedbackMetaWhereUniqueInput!, create: UserFeedbackMetaCreateInput!, update: UserFeedbackMetaUpdateInput!): UserFeedbackMeta!
  deleteUserFeedbackMeta(where: UserFeedbackMetaWhereUniqueInput!): UserFeedbackMeta
  deleteManyUserFeedbackMetas(where: UserFeedbackMetaWhereInput): BatchPayload!
  createUserMeta(data: UserMetaCreateInput!): UserMeta!
  updateUserMeta(data: UserMetaUpdateInput!, where: UserMetaWhereUniqueInput!): UserMeta
  updateManyUserMetas(data: UserMetaUpdateManyMutationInput!, where: UserMetaWhereInput): BatchPayload!
  upsertUserMeta(where: UserMetaWhereUniqueInput!, create: UserMetaCreateInput!, update: UserMetaUpdateInput!): UserMeta!
  deleteUserMeta(where: UserMetaWhereUniqueInput!): UserMeta
  deleteManyUserMetas(where: UserMetaWhereInput): BatchPayload!
  createUserTrack(data: UserTrackCreateInput!): UserTrack!
  updateUserTrack(data: UserTrackUpdateInput!, where: UserTrackWhereUniqueInput!): UserTrack
  updateManyUserTracks(data: UserTrackUpdateManyMutationInput!, where: UserTrackWhereInput): BatchPayload!
  upsertUserTrack(where: UserTrackWhereUniqueInput!, create: UserTrackCreateInput!, update: UserTrackUpdateInput!): UserTrack!
  deleteUserTrack(where: UserTrackWhereUniqueInput!): UserTrack
  deleteManyUserTracks(where: UserTrackWhereInput): BatchPayload!
  createUserTrackMeta(data: UserTrackMetaCreateInput!): UserTrackMeta!
  updateUserTrackMeta(data: UserTrackMetaUpdateInput!, where: UserTrackMetaWhereUniqueInput!): UserTrackMeta
  updateManyUserTrackMetas(data: UserTrackMetaUpdateManyMutationInput!, where: UserTrackMetaWhereInput): BatchPayload!
  upsertUserTrackMeta(where: UserTrackMetaWhereUniqueInput!, create: UserTrackMetaCreateInput!, update: UserTrackMetaUpdateInput!): UserTrackMeta!
  deleteUserTrackMeta(where: UserTrackMetaWhereUniqueInput!): UserTrackMeta
  deleteManyUserTrackMetas(where: UserTrackMetaWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type ProfilePage {
  id: ID!
  oldId: String
  user: User
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta(where: ProfilePageMetaWhereInput, orderBy: ProfilePageMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProfilePageMeta!]
}

type ProfilePageConnection {
  pageInfo: PageInfo!
  edges: [ProfilePageEdge]!
  aggregate: AggregateProfilePage!
}

input ProfilePageCreateInput {
  oldId: String
  user: UserCreateOneWithoutProfilePagesInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: ProfilePageMetaCreateManyWithoutProfilePageInput
}

input ProfilePageCreateManyWithoutUserInput {
  create: [ProfilePageCreateWithoutUserInput!]
  connect: [ProfilePageWhereUniqueInput!]
}

input ProfilePageCreateOneWithoutItemMetaInput {
  create: ProfilePageCreateWithoutItemMetaInput
  connect: ProfilePageWhereUniqueInput
}

input ProfilePageCreateWithoutItemMetaInput {
  oldId: String
  user: UserCreateOneWithoutProfilePagesInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
}

input ProfilePageCreateWithoutUserInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: ProfilePageMetaCreateManyWithoutProfilePageInput
}

type ProfilePageEdge {
  node: ProfilePage!
  cursor: String!
}

type ProfilePageMeta {
  id: ID!
  oldId: String
  itemOldId: String
  profilePage: ProfilePage
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

type ProfilePageMetaConnection {
  pageInfo: PageInfo!
  edges: [ProfilePageMetaEdge]!
  aggregate: AggregateProfilePageMeta!
}

input ProfilePageMetaCreateInput {
  oldId: String
  itemOldId: String
  profilePage: ProfilePageCreateOneWithoutItemMetaInput
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

input ProfilePageMetaCreateManyWithoutProfilePageInput {
  create: [ProfilePageMetaCreateWithoutProfilePageInput!]
  connect: [ProfilePageMetaWhereUniqueInput!]
}

input ProfilePageMetaCreateWithoutProfilePageInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

type ProfilePageMetaEdge {
  node: ProfilePageMeta!
  cursor: String!
}

enum ProfilePageMetaOrderByInput {
  id_ASC
  id_DESC
  oldId_ASC
  oldId_DESC
  itemOldId_ASC
  itemOldId_DESC
  metaType_ASC
  metaType_DESC
  metaName_ASC
  metaName_DESC
  metaValue_ASC
  metaValue_DESC
  metaDeleted_ASC
  metaDeleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProfilePageMetaPreviousValues {
  id: ID!
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

input ProfilePageMetaScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemOldId: String
  itemOldId_not: String
  itemOldId_in: [String!]
  itemOldId_not_in: [String!]
  itemOldId_lt: String
  itemOldId_lte: String
  itemOldId_gt: String
  itemOldId_gte: String
  itemOldId_contains: String
  itemOldId_not_contains: String
  itemOldId_starts_with: String
  itemOldId_not_starts_with: String
  itemOldId_ends_with: String
  itemOldId_not_ends_with: String
  metaType: String
  metaType_not: String
  metaType_in: [String!]
  metaType_not_in: [String!]
  metaType_lt: String
  metaType_lte: String
  metaType_gt: String
  metaType_gte: String
  metaType_contains: String
  metaType_not_contains: String
  metaType_starts_with: String
  metaType_not_starts_with: String
  metaType_ends_with: String
  metaType_not_ends_with: String
  metaName: String
  metaName_not: String
  metaName_in: [String!]
  metaName_not_in: [String!]
  metaName_lt: String
  metaName_lte: String
  metaName_gt: String
  metaName_gte: String
  metaName_contains: String
  metaName_not_contains: String
  metaName_starts_with: String
  metaName_not_starts_with: String
  metaName_ends_with: String
  metaName_not_ends_with: String
  metaValue: String
  metaValue_not: String
  metaValue_in: [String!]
  metaValue_not_in: [String!]
  metaValue_lt: String
  metaValue_lte: String
  metaValue_gt: String
  metaValue_gte: String
  metaValue_contains: String
  metaValue_not_contains: String
  metaValue_starts_with: String
  metaValue_not_starts_with: String
  metaValue_ends_with: String
  metaValue_not_ends_with: String
  metaDeleted: Boolean
  metaDeleted_not: Boolean
  AND: [ProfilePageMetaScalarWhereInput!]
  OR: [ProfilePageMetaScalarWhereInput!]
  NOT: [ProfilePageMetaScalarWhereInput!]
}

type ProfilePageMetaSubscriptionPayload {
  mutation: MutationType!
  node: ProfilePageMeta
  updatedFields: [String!]
  previousValues: ProfilePageMetaPreviousValues
}

input ProfilePageMetaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProfilePageMetaWhereInput
  AND: [ProfilePageMetaSubscriptionWhereInput!]
  OR: [ProfilePageMetaSubscriptionWhereInput!]
  NOT: [ProfilePageMetaSubscriptionWhereInput!]
}

input ProfilePageMetaUpdateInput {
  oldId: String
  itemOldId: String
  profilePage: ProfilePageUpdateOneWithoutItemMetaInput
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input ProfilePageMetaUpdateManyDataInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input ProfilePageMetaUpdateManyMutationInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input ProfilePageMetaUpdateManyWithoutProfilePageInput {
  create: [ProfilePageMetaCreateWithoutProfilePageInput!]
  delete: [ProfilePageMetaWhereUniqueInput!]
  connect: [ProfilePageMetaWhereUniqueInput!]
  disconnect: [ProfilePageMetaWhereUniqueInput!]
  update: [ProfilePageMetaUpdateWithWhereUniqueWithoutProfilePageInput!]
  upsert: [ProfilePageMetaUpsertWithWhereUniqueWithoutProfilePageInput!]
  deleteMany: [ProfilePageMetaScalarWhereInput!]
  updateMany: [ProfilePageMetaUpdateManyWithWhereNestedInput!]
}

input ProfilePageMetaUpdateManyWithWhereNestedInput {
  where: ProfilePageMetaScalarWhereInput!
  data: ProfilePageMetaUpdateManyDataInput!
}

input ProfilePageMetaUpdateWithoutProfilePageDataInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input ProfilePageMetaUpdateWithWhereUniqueWithoutProfilePageInput {
  where: ProfilePageMetaWhereUniqueInput!
  data: ProfilePageMetaUpdateWithoutProfilePageDataInput!
}

input ProfilePageMetaUpsertWithWhereUniqueWithoutProfilePageInput {
  where: ProfilePageMetaWhereUniqueInput!
  update: ProfilePageMetaUpdateWithoutProfilePageDataInput!
  create: ProfilePageMetaCreateWithoutProfilePageInput!
}

input ProfilePageMetaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemOldId: String
  itemOldId_not: String
  itemOldId_in: [String!]
  itemOldId_not_in: [String!]
  itemOldId_lt: String
  itemOldId_lte: String
  itemOldId_gt: String
  itemOldId_gte: String
  itemOldId_contains: String
  itemOldId_not_contains: String
  itemOldId_starts_with: String
  itemOldId_not_starts_with: String
  itemOldId_ends_with: String
  itemOldId_not_ends_with: String
  profilePage: ProfilePageWhereInput
  metaType: String
  metaType_not: String
  metaType_in: [String!]
  metaType_not_in: [String!]
  metaType_lt: String
  metaType_lte: String
  metaType_gt: String
  metaType_gte: String
  metaType_contains: String
  metaType_not_contains: String
  metaType_starts_with: String
  metaType_not_starts_with: String
  metaType_ends_with: String
  metaType_not_ends_with: String
  metaName: String
  metaName_not: String
  metaName_in: [String!]
  metaName_not_in: [String!]
  metaName_lt: String
  metaName_lte: String
  metaName_gt: String
  metaName_gte: String
  metaName_contains: String
  metaName_not_contains: String
  metaName_starts_with: String
  metaName_not_starts_with: String
  metaName_ends_with: String
  metaName_not_ends_with: String
  metaValue: String
  metaValue_not: String
  metaValue_in: [String!]
  metaValue_not_in: [String!]
  metaValue_lt: String
  metaValue_lte: String
  metaValue_gt: String
  metaValue_gte: String
  metaValue_contains: String
  metaValue_not_contains: String
  metaValue_starts_with: String
  metaValue_not_starts_with: String
  metaValue_ends_with: String
  metaValue_not_ends_with: String
  metaDeleted: Boolean
  metaDeleted_not: Boolean
  AND: [ProfilePageMetaWhereInput!]
  OR: [ProfilePageMetaWhereInput!]
  NOT: [ProfilePageMetaWhereInput!]
}

input ProfilePageMetaWhereUniqueInput {
  id: ID
  oldId: String
}

enum ProfilePageOrderByInput {
  id_ASC
  id_DESC
  oldId_ASC
  oldId_DESC
  itemType_ASC
  itemType_DESC
  itemStatus_ASC
  itemStatus_DESC
  itemUrlSegment_ASC
  itemUrlSegment_DESC
  itemMimeType_ASC
  itemMimeType_DESC
  itemName_ASC
  itemName_DESC
  itemContent_ASC
  itemContent_DESC
  itemDeleted_ASC
  itemDeleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProfilePagePreviousValues {
  id: ID!
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
}

input ProfilePageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemType: String
  itemType_not: String
  itemType_in: [String!]
  itemType_not_in: [String!]
  itemType_lt: String
  itemType_lte: String
  itemType_gt: String
  itemType_gte: String
  itemType_contains: String
  itemType_not_contains: String
  itemType_starts_with: String
  itemType_not_starts_with: String
  itemType_ends_with: String
  itemType_not_ends_with: String
  itemStatus: String
  itemStatus_not: String
  itemStatus_in: [String!]
  itemStatus_not_in: [String!]
  itemStatus_lt: String
  itemStatus_lte: String
  itemStatus_gt: String
  itemStatus_gte: String
  itemStatus_contains: String
  itemStatus_not_contains: String
  itemStatus_starts_with: String
  itemStatus_not_starts_with: String
  itemStatus_ends_with: String
  itemStatus_not_ends_with: String
  itemUrlSegment: String
  itemUrlSegment_not: String
  itemUrlSegment_in: [String!]
  itemUrlSegment_not_in: [String!]
  itemUrlSegment_lt: String
  itemUrlSegment_lte: String
  itemUrlSegment_gt: String
  itemUrlSegment_gte: String
  itemUrlSegment_contains: String
  itemUrlSegment_not_contains: String
  itemUrlSegment_starts_with: String
  itemUrlSegment_not_starts_with: String
  itemUrlSegment_ends_with: String
  itemUrlSegment_not_ends_with: String
  itemMimeType: String
  itemMimeType_not: String
  itemMimeType_in: [String!]
  itemMimeType_not_in: [String!]
  itemMimeType_lt: String
  itemMimeType_lte: String
  itemMimeType_gt: String
  itemMimeType_gte: String
  itemMimeType_contains: String
  itemMimeType_not_contains: String
  itemMimeType_starts_with: String
  itemMimeType_not_starts_with: String
  itemMimeType_ends_with: String
  itemMimeType_not_ends_with: String
  itemName: String
  itemName_not: String
  itemName_in: [String!]
  itemName_not_in: [String!]
  itemName_lt: String
  itemName_lte: String
  itemName_gt: String
  itemName_gte: String
  itemName_contains: String
  itemName_not_contains: String
  itemName_starts_with: String
  itemName_not_starts_with: String
  itemName_ends_with: String
  itemName_not_ends_with: String
  itemContent: String
  itemContent_not: String
  itemContent_in: [String!]
  itemContent_not_in: [String!]
  itemContent_lt: String
  itemContent_lte: String
  itemContent_gt: String
  itemContent_gte: String
  itemContent_contains: String
  itemContent_not_contains: String
  itemContent_starts_with: String
  itemContent_not_starts_with: String
  itemContent_ends_with: String
  itemContent_not_ends_with: String
  itemDeleted: Boolean
  itemDeleted_not: Boolean
  AND: [ProfilePageScalarWhereInput!]
  OR: [ProfilePageScalarWhereInput!]
  NOT: [ProfilePageScalarWhereInput!]
}

type ProfilePageSubscriptionPayload {
  mutation: MutationType!
  node: ProfilePage
  updatedFields: [String!]
  previousValues: ProfilePagePreviousValues
}

input ProfilePageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProfilePageWhereInput
  AND: [ProfilePageSubscriptionWhereInput!]
  OR: [ProfilePageSubscriptionWhereInput!]
  NOT: [ProfilePageSubscriptionWhereInput!]
}

input ProfilePageUpdateInput {
  oldId: String
  user: UserUpdateOneWithoutProfilePagesInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: ProfilePageMetaUpdateManyWithoutProfilePageInput
}

input ProfilePageUpdateManyDataInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
}

input ProfilePageUpdateManyMutationInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
}

input ProfilePageUpdateManyWithoutUserInput {
  create: [ProfilePageCreateWithoutUserInput!]
  delete: [ProfilePageWhereUniqueInput!]
  connect: [ProfilePageWhereUniqueInput!]
  disconnect: [ProfilePageWhereUniqueInput!]
  update: [ProfilePageUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ProfilePageUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [ProfilePageScalarWhereInput!]
  updateMany: [ProfilePageUpdateManyWithWhereNestedInput!]
}

input ProfilePageUpdateManyWithWhereNestedInput {
  where: ProfilePageScalarWhereInput!
  data: ProfilePageUpdateManyDataInput!
}

input ProfilePageUpdateOneWithoutItemMetaInput {
  create: ProfilePageCreateWithoutItemMetaInput
  update: ProfilePageUpdateWithoutItemMetaDataInput
  upsert: ProfilePageUpsertWithoutItemMetaInput
  delete: Boolean
  disconnect: Boolean
  connect: ProfilePageWhereUniqueInput
}

input ProfilePageUpdateWithoutItemMetaDataInput {
  oldId: String
  user: UserUpdateOneWithoutProfilePagesInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
}

input ProfilePageUpdateWithoutUserDataInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: ProfilePageMetaUpdateManyWithoutProfilePageInput
}

input ProfilePageUpdateWithWhereUniqueWithoutUserInput {
  where: ProfilePageWhereUniqueInput!
  data: ProfilePageUpdateWithoutUserDataInput!
}

input ProfilePageUpsertWithoutItemMetaInput {
  update: ProfilePageUpdateWithoutItemMetaDataInput!
  create: ProfilePageCreateWithoutItemMetaInput!
}

input ProfilePageUpsertWithWhereUniqueWithoutUserInput {
  where: ProfilePageWhereUniqueInput!
  update: ProfilePageUpdateWithoutUserDataInput!
  create: ProfilePageCreateWithoutUserInput!
}

input ProfilePageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  user: UserWhereInput
  itemType: String
  itemType_not: String
  itemType_in: [String!]
  itemType_not_in: [String!]
  itemType_lt: String
  itemType_lte: String
  itemType_gt: String
  itemType_gte: String
  itemType_contains: String
  itemType_not_contains: String
  itemType_starts_with: String
  itemType_not_starts_with: String
  itemType_ends_with: String
  itemType_not_ends_with: String
  itemStatus: String
  itemStatus_not: String
  itemStatus_in: [String!]
  itemStatus_not_in: [String!]
  itemStatus_lt: String
  itemStatus_lte: String
  itemStatus_gt: String
  itemStatus_gte: String
  itemStatus_contains: String
  itemStatus_not_contains: String
  itemStatus_starts_with: String
  itemStatus_not_starts_with: String
  itemStatus_ends_with: String
  itemStatus_not_ends_with: String
  itemUrlSegment: String
  itemUrlSegment_not: String
  itemUrlSegment_in: [String!]
  itemUrlSegment_not_in: [String!]
  itemUrlSegment_lt: String
  itemUrlSegment_lte: String
  itemUrlSegment_gt: String
  itemUrlSegment_gte: String
  itemUrlSegment_contains: String
  itemUrlSegment_not_contains: String
  itemUrlSegment_starts_with: String
  itemUrlSegment_not_starts_with: String
  itemUrlSegment_ends_with: String
  itemUrlSegment_not_ends_with: String
  itemMimeType: String
  itemMimeType_not: String
  itemMimeType_in: [String!]
  itemMimeType_not_in: [String!]
  itemMimeType_lt: String
  itemMimeType_lte: String
  itemMimeType_gt: String
  itemMimeType_gte: String
  itemMimeType_contains: String
  itemMimeType_not_contains: String
  itemMimeType_starts_with: String
  itemMimeType_not_starts_with: String
  itemMimeType_ends_with: String
  itemMimeType_not_ends_with: String
  itemName: String
  itemName_not: String
  itemName_in: [String!]
  itemName_not_in: [String!]
  itemName_lt: String
  itemName_lte: String
  itemName_gt: String
  itemName_gte: String
  itemName_contains: String
  itemName_not_contains: String
  itemName_starts_with: String
  itemName_not_starts_with: String
  itemName_ends_with: String
  itemName_not_ends_with: String
  itemContent: String
  itemContent_not: String
  itemContent_in: [String!]
  itemContent_not_in: [String!]
  itemContent_lt: String
  itemContent_lte: String
  itemContent_gt: String
  itemContent_gte: String
  itemContent_contains: String
  itemContent_not_contains: String
  itemContent_starts_with: String
  itemContent_not_starts_with: String
  itemContent_ends_with: String
  itemContent_not_ends_with: String
  itemDeleted: Boolean
  itemDeleted_not: Boolean
  itemMeta_every: ProfilePageMetaWhereInput
  itemMeta_some: ProfilePageMetaWhereInput
  itemMeta_none: ProfilePageMetaWhereInput
  AND: [ProfilePageWhereInput!]
  OR: [ProfilePageWhereInput!]
  NOT: [ProfilePageWhereInput!]
}

input ProfilePageWhereUniqueInput {
  id: ID
  oldId: String
}

type Query {
  blogPost(where: BlogPostWhereUniqueInput!): BlogPost
  blogPosts(where: BlogPostWhereInput, orderBy: BlogPostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BlogPost]!
  blogPostsConnection(where: BlogPostWhereInput, orderBy: BlogPostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BlogPostConnection!
  blogPostMeta(where: BlogPostMetaWhereUniqueInput!): BlogPostMeta
  blogPostMetas(where: BlogPostMetaWhereInput, orderBy: BlogPostMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BlogPostMeta]!
  blogPostMetasConnection(where: BlogPostMetaWhereInput, orderBy: BlogPostMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BlogPostMetaConnection!
  file(where: FileWhereUniqueInput!): File
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  fileMeta(where: FileMetaWhereUniqueInput!): FileMeta
  fileMetas(where: FileMetaWhereInput, orderBy: FileMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FileMeta]!
  fileMetasConnection(where: FileMetaWhereInput, orderBy: FileMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileMetaConnection!
  profilePage(where: ProfilePageWhereUniqueInput!): ProfilePage
  profilePages(where: ProfilePageWhereInput, orderBy: ProfilePageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProfilePage]!
  profilePagesConnection(where: ProfilePageWhereInput, orderBy: ProfilePageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfilePageConnection!
  profilePageMeta(where: ProfilePageMetaWhereUniqueInput!): ProfilePageMeta
  profilePageMetas(where: ProfilePageMetaWhereInput, orderBy: ProfilePageMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProfilePageMeta]!
  profilePageMetasConnection(where: ProfilePageMetaWhereInput, orderBy: ProfilePageMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfilePageMetaConnection!
  review(where: ReviewWhereUniqueInput!): Review
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  reviewMeta(where: ReviewMetaWhereUniqueInput!): ReviewMeta
  reviewMetas(where: ReviewMetaWhereInput, orderBy: ReviewMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ReviewMeta]!
  reviewMetasConnection(where: ReviewMetaWhereInput, orderBy: ReviewMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewMetaConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userFeedback(where: UserFeedbackWhereUniqueInput!): UserFeedback
  userFeedbacks(where: UserFeedbackWhereInput, orderBy: UserFeedbackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserFeedback]!
  userFeedbacksConnection(where: UserFeedbackWhereInput, orderBy: UserFeedbackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserFeedbackConnection!
  userFeedbackMeta(where: UserFeedbackMetaWhereUniqueInput!): UserFeedbackMeta
  userFeedbackMetas(where: UserFeedbackMetaWhereInput, orderBy: UserFeedbackMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserFeedbackMeta]!
  userFeedbackMetasConnection(where: UserFeedbackMetaWhereInput, orderBy: UserFeedbackMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserFeedbackMetaConnection!
  userMeta(where: UserMetaWhereUniqueInput!): UserMeta
  userMetas(where: UserMetaWhereInput, orderBy: UserMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserMeta]!
  userMetasConnection(where: UserMetaWhereInput, orderBy: UserMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserMetaConnection!
  userTrack(where: UserTrackWhereUniqueInput!): UserTrack
  userTracks(where: UserTrackWhereInput, orderBy: UserTrackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserTrack]!
  userTracksConnection(where: UserTrackWhereInput, orderBy: UserTrackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserTrackConnection!
  userTrackMeta(where: UserTrackMetaWhereUniqueInput!): UserTrackMeta
  userTrackMetas(where: UserTrackMetaWhereInput, orderBy: UserTrackMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserTrackMeta]!
  userTrackMetasConnection(where: UserTrackMetaWhereInput, orderBy: UserTrackMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserTrackMetaConnection!
  node(id: ID!): Node
}

type Review {
  id: ID!
  oldId: String
  user: User
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta(where: ReviewMetaWhereInput, orderBy: ReviewMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ReviewMeta!]
  userTrack: UserTrack
}

type ReviewConnection {
  pageInfo: PageInfo!
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  oldId: String
  user: UserCreateOneWithoutReviewsInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: ReviewMetaCreateManyWithoutReviewInput
  userTrack: UserTrackCreateOneWithoutReviewsInput
}

input ReviewCreateManyWithoutUserInput {
  create: [ReviewCreateWithoutUserInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateManyWithoutUserTrackInput {
  create: [ReviewCreateWithoutUserTrackInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateOneWithoutItemMetaInput {
  create: ReviewCreateWithoutItemMetaInput
  connect: ReviewWhereUniqueInput
}

input ReviewCreateWithoutItemMetaInput {
  oldId: String
  user: UserCreateOneWithoutReviewsInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  userTrack: UserTrackCreateOneWithoutReviewsInput
}

input ReviewCreateWithoutUserInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: ReviewMetaCreateManyWithoutReviewInput
  userTrack: UserTrackCreateOneWithoutReviewsInput
}

input ReviewCreateWithoutUserTrackInput {
  oldId: String
  user: UserCreateOneWithoutReviewsInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: ReviewMetaCreateManyWithoutReviewInput
}

type ReviewEdge {
  node: Review!
  cursor: String!
}

type ReviewMeta {
  id: ID!
  oldId: String
  itemOldId: String
  review: Review
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

type ReviewMetaConnection {
  pageInfo: PageInfo!
  edges: [ReviewMetaEdge]!
  aggregate: AggregateReviewMeta!
}

input ReviewMetaCreateInput {
  oldId: String
  itemOldId: String
  review: ReviewCreateOneWithoutItemMetaInput
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

input ReviewMetaCreateManyWithoutReviewInput {
  create: [ReviewMetaCreateWithoutReviewInput!]
  connect: [ReviewMetaWhereUniqueInput!]
}

input ReviewMetaCreateWithoutReviewInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

type ReviewMetaEdge {
  node: ReviewMeta!
  cursor: String!
}

enum ReviewMetaOrderByInput {
  id_ASC
  id_DESC
  oldId_ASC
  oldId_DESC
  itemOldId_ASC
  itemOldId_DESC
  metaType_ASC
  metaType_DESC
  metaName_ASC
  metaName_DESC
  metaValue_ASC
  metaValue_DESC
  metaDeleted_ASC
  metaDeleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReviewMetaPreviousValues {
  id: ID!
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

input ReviewMetaScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemOldId: String
  itemOldId_not: String
  itemOldId_in: [String!]
  itemOldId_not_in: [String!]
  itemOldId_lt: String
  itemOldId_lte: String
  itemOldId_gt: String
  itemOldId_gte: String
  itemOldId_contains: String
  itemOldId_not_contains: String
  itemOldId_starts_with: String
  itemOldId_not_starts_with: String
  itemOldId_ends_with: String
  itemOldId_not_ends_with: String
  metaType: String
  metaType_not: String
  metaType_in: [String!]
  metaType_not_in: [String!]
  metaType_lt: String
  metaType_lte: String
  metaType_gt: String
  metaType_gte: String
  metaType_contains: String
  metaType_not_contains: String
  metaType_starts_with: String
  metaType_not_starts_with: String
  metaType_ends_with: String
  metaType_not_ends_with: String
  metaName: String
  metaName_not: String
  metaName_in: [String!]
  metaName_not_in: [String!]
  metaName_lt: String
  metaName_lte: String
  metaName_gt: String
  metaName_gte: String
  metaName_contains: String
  metaName_not_contains: String
  metaName_starts_with: String
  metaName_not_starts_with: String
  metaName_ends_with: String
  metaName_not_ends_with: String
  metaValue: String
  metaValue_not: String
  metaValue_in: [String!]
  metaValue_not_in: [String!]
  metaValue_lt: String
  metaValue_lte: String
  metaValue_gt: String
  metaValue_gte: String
  metaValue_contains: String
  metaValue_not_contains: String
  metaValue_starts_with: String
  metaValue_not_starts_with: String
  metaValue_ends_with: String
  metaValue_not_ends_with: String
  metaDeleted: Boolean
  metaDeleted_not: Boolean
  AND: [ReviewMetaScalarWhereInput!]
  OR: [ReviewMetaScalarWhereInput!]
  NOT: [ReviewMetaScalarWhereInput!]
}

type ReviewMetaSubscriptionPayload {
  mutation: MutationType!
  node: ReviewMeta
  updatedFields: [String!]
  previousValues: ReviewMetaPreviousValues
}

input ReviewMetaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReviewMetaWhereInput
  AND: [ReviewMetaSubscriptionWhereInput!]
  OR: [ReviewMetaSubscriptionWhereInput!]
  NOT: [ReviewMetaSubscriptionWhereInput!]
}

input ReviewMetaUpdateInput {
  oldId: String
  itemOldId: String
  review: ReviewUpdateOneWithoutItemMetaInput
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input ReviewMetaUpdateManyDataInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input ReviewMetaUpdateManyMutationInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input ReviewMetaUpdateManyWithoutReviewInput {
  create: [ReviewMetaCreateWithoutReviewInput!]
  delete: [ReviewMetaWhereUniqueInput!]
  connect: [ReviewMetaWhereUniqueInput!]
  disconnect: [ReviewMetaWhereUniqueInput!]
  update: [ReviewMetaUpdateWithWhereUniqueWithoutReviewInput!]
  upsert: [ReviewMetaUpsertWithWhereUniqueWithoutReviewInput!]
  deleteMany: [ReviewMetaScalarWhereInput!]
  updateMany: [ReviewMetaUpdateManyWithWhereNestedInput!]
}

input ReviewMetaUpdateManyWithWhereNestedInput {
  where: ReviewMetaScalarWhereInput!
  data: ReviewMetaUpdateManyDataInput!
}

input ReviewMetaUpdateWithoutReviewDataInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input ReviewMetaUpdateWithWhereUniqueWithoutReviewInput {
  where: ReviewMetaWhereUniqueInput!
  data: ReviewMetaUpdateWithoutReviewDataInput!
}

input ReviewMetaUpsertWithWhereUniqueWithoutReviewInput {
  where: ReviewMetaWhereUniqueInput!
  update: ReviewMetaUpdateWithoutReviewDataInput!
  create: ReviewMetaCreateWithoutReviewInput!
}

input ReviewMetaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemOldId: String
  itemOldId_not: String
  itemOldId_in: [String!]
  itemOldId_not_in: [String!]
  itemOldId_lt: String
  itemOldId_lte: String
  itemOldId_gt: String
  itemOldId_gte: String
  itemOldId_contains: String
  itemOldId_not_contains: String
  itemOldId_starts_with: String
  itemOldId_not_starts_with: String
  itemOldId_ends_with: String
  itemOldId_not_ends_with: String
  review: ReviewWhereInput
  metaType: String
  metaType_not: String
  metaType_in: [String!]
  metaType_not_in: [String!]
  metaType_lt: String
  metaType_lte: String
  metaType_gt: String
  metaType_gte: String
  metaType_contains: String
  metaType_not_contains: String
  metaType_starts_with: String
  metaType_not_starts_with: String
  metaType_ends_with: String
  metaType_not_ends_with: String
  metaName: String
  metaName_not: String
  metaName_in: [String!]
  metaName_not_in: [String!]
  metaName_lt: String
  metaName_lte: String
  metaName_gt: String
  metaName_gte: String
  metaName_contains: String
  metaName_not_contains: String
  metaName_starts_with: String
  metaName_not_starts_with: String
  metaName_ends_with: String
  metaName_not_ends_with: String
  metaValue: String
  metaValue_not: String
  metaValue_in: [String!]
  metaValue_not_in: [String!]
  metaValue_lt: String
  metaValue_lte: String
  metaValue_gt: String
  metaValue_gte: String
  metaValue_contains: String
  metaValue_not_contains: String
  metaValue_starts_with: String
  metaValue_not_starts_with: String
  metaValue_ends_with: String
  metaValue_not_ends_with: String
  metaDeleted: Boolean
  metaDeleted_not: Boolean
  AND: [ReviewMetaWhereInput!]
  OR: [ReviewMetaWhereInput!]
  NOT: [ReviewMetaWhereInput!]
}

input ReviewMetaWhereUniqueInput {
  id: ID
  oldId: String
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  oldId_ASC
  oldId_DESC
  itemType_ASC
  itemType_DESC
  itemStatus_ASC
  itemStatus_DESC
  itemUrlSegment_ASC
  itemUrlSegment_DESC
  itemMimeType_ASC
  itemMimeType_DESC
  itemName_ASC
  itemName_DESC
  itemContent_ASC
  itemContent_DESC
  itemDeleted_ASC
  itemDeleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReviewPreviousValues {
  id: ID!
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
}

input ReviewScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemType: String
  itemType_not: String
  itemType_in: [String!]
  itemType_not_in: [String!]
  itemType_lt: String
  itemType_lte: String
  itemType_gt: String
  itemType_gte: String
  itemType_contains: String
  itemType_not_contains: String
  itemType_starts_with: String
  itemType_not_starts_with: String
  itemType_ends_with: String
  itemType_not_ends_with: String
  itemStatus: String
  itemStatus_not: String
  itemStatus_in: [String!]
  itemStatus_not_in: [String!]
  itemStatus_lt: String
  itemStatus_lte: String
  itemStatus_gt: String
  itemStatus_gte: String
  itemStatus_contains: String
  itemStatus_not_contains: String
  itemStatus_starts_with: String
  itemStatus_not_starts_with: String
  itemStatus_ends_with: String
  itemStatus_not_ends_with: String
  itemUrlSegment: String
  itemUrlSegment_not: String
  itemUrlSegment_in: [String!]
  itemUrlSegment_not_in: [String!]
  itemUrlSegment_lt: String
  itemUrlSegment_lte: String
  itemUrlSegment_gt: String
  itemUrlSegment_gte: String
  itemUrlSegment_contains: String
  itemUrlSegment_not_contains: String
  itemUrlSegment_starts_with: String
  itemUrlSegment_not_starts_with: String
  itemUrlSegment_ends_with: String
  itemUrlSegment_not_ends_with: String
  itemMimeType: String
  itemMimeType_not: String
  itemMimeType_in: [String!]
  itemMimeType_not_in: [String!]
  itemMimeType_lt: String
  itemMimeType_lte: String
  itemMimeType_gt: String
  itemMimeType_gte: String
  itemMimeType_contains: String
  itemMimeType_not_contains: String
  itemMimeType_starts_with: String
  itemMimeType_not_starts_with: String
  itemMimeType_ends_with: String
  itemMimeType_not_ends_with: String
  itemName: String
  itemName_not: String
  itemName_in: [String!]
  itemName_not_in: [String!]
  itemName_lt: String
  itemName_lte: String
  itemName_gt: String
  itemName_gte: String
  itemName_contains: String
  itemName_not_contains: String
  itemName_starts_with: String
  itemName_not_starts_with: String
  itemName_ends_with: String
  itemName_not_ends_with: String
  itemContent: String
  itemContent_not: String
  itemContent_in: [String!]
  itemContent_not_in: [String!]
  itemContent_lt: String
  itemContent_lte: String
  itemContent_gt: String
  itemContent_gte: String
  itemContent_contains: String
  itemContent_not_contains: String
  itemContent_starts_with: String
  itemContent_not_starts_with: String
  itemContent_ends_with: String
  itemContent_not_ends_with: String
  itemDeleted: Boolean
  itemDeleted_not: Boolean
  AND: [ReviewScalarWhereInput!]
  OR: [ReviewScalarWhereInput!]
  NOT: [ReviewScalarWhereInput!]
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
  AND: [ReviewSubscriptionWhereInput!]
  OR: [ReviewSubscriptionWhereInput!]
  NOT: [ReviewSubscriptionWhereInput!]
}

input ReviewUpdateInput {
  oldId: String
  user: UserUpdateOneWithoutReviewsInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: ReviewMetaUpdateManyWithoutReviewInput
  userTrack: UserTrackUpdateOneWithoutReviewsInput
}

input ReviewUpdateManyDataInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
}

input ReviewUpdateManyMutationInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
}

input ReviewUpdateManyWithoutUserInput {
  create: [ReviewCreateWithoutUserInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithoutUserTrackInput {
  create: [ReviewCreateWithoutUserTrackInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutUserTrackInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutUserTrackInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput!
  data: ReviewUpdateManyDataInput!
}

input ReviewUpdateOneWithoutItemMetaInput {
  create: ReviewCreateWithoutItemMetaInput
  update: ReviewUpdateWithoutItemMetaDataInput
  upsert: ReviewUpsertWithoutItemMetaInput
  delete: Boolean
  disconnect: Boolean
  connect: ReviewWhereUniqueInput
}

input ReviewUpdateWithoutItemMetaDataInput {
  oldId: String
  user: UserUpdateOneWithoutReviewsInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  userTrack: UserTrackUpdateOneWithoutReviewsInput
}

input ReviewUpdateWithoutUserDataInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: ReviewMetaUpdateManyWithoutReviewInput
  userTrack: UserTrackUpdateOneWithoutReviewsInput
}

input ReviewUpdateWithoutUserTrackDataInput {
  oldId: String
  user: UserUpdateOneWithoutReviewsInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: ReviewMetaUpdateManyWithoutReviewInput
}

input ReviewUpdateWithWhereUniqueWithoutUserInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutUserDataInput!
}

input ReviewUpdateWithWhereUniqueWithoutUserTrackInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutUserTrackDataInput!
}

input ReviewUpsertWithoutItemMetaInput {
  update: ReviewUpdateWithoutItemMetaDataInput!
  create: ReviewCreateWithoutItemMetaInput!
}

input ReviewUpsertWithWhereUniqueWithoutUserInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutUserDataInput!
  create: ReviewCreateWithoutUserInput!
}

input ReviewUpsertWithWhereUniqueWithoutUserTrackInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutUserTrackDataInput!
  create: ReviewCreateWithoutUserTrackInput!
}

input ReviewWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  user: UserWhereInput
  itemType: String
  itemType_not: String
  itemType_in: [String!]
  itemType_not_in: [String!]
  itemType_lt: String
  itemType_lte: String
  itemType_gt: String
  itemType_gte: String
  itemType_contains: String
  itemType_not_contains: String
  itemType_starts_with: String
  itemType_not_starts_with: String
  itemType_ends_with: String
  itemType_not_ends_with: String
  itemStatus: String
  itemStatus_not: String
  itemStatus_in: [String!]
  itemStatus_not_in: [String!]
  itemStatus_lt: String
  itemStatus_lte: String
  itemStatus_gt: String
  itemStatus_gte: String
  itemStatus_contains: String
  itemStatus_not_contains: String
  itemStatus_starts_with: String
  itemStatus_not_starts_with: String
  itemStatus_ends_with: String
  itemStatus_not_ends_with: String
  itemUrlSegment: String
  itemUrlSegment_not: String
  itemUrlSegment_in: [String!]
  itemUrlSegment_not_in: [String!]
  itemUrlSegment_lt: String
  itemUrlSegment_lte: String
  itemUrlSegment_gt: String
  itemUrlSegment_gte: String
  itemUrlSegment_contains: String
  itemUrlSegment_not_contains: String
  itemUrlSegment_starts_with: String
  itemUrlSegment_not_starts_with: String
  itemUrlSegment_ends_with: String
  itemUrlSegment_not_ends_with: String
  itemMimeType: String
  itemMimeType_not: String
  itemMimeType_in: [String!]
  itemMimeType_not_in: [String!]
  itemMimeType_lt: String
  itemMimeType_lte: String
  itemMimeType_gt: String
  itemMimeType_gte: String
  itemMimeType_contains: String
  itemMimeType_not_contains: String
  itemMimeType_starts_with: String
  itemMimeType_not_starts_with: String
  itemMimeType_ends_with: String
  itemMimeType_not_ends_with: String
  itemName: String
  itemName_not: String
  itemName_in: [String!]
  itemName_not_in: [String!]
  itemName_lt: String
  itemName_lte: String
  itemName_gt: String
  itemName_gte: String
  itemName_contains: String
  itemName_not_contains: String
  itemName_starts_with: String
  itemName_not_starts_with: String
  itemName_ends_with: String
  itemName_not_ends_with: String
  itemContent: String
  itemContent_not: String
  itemContent_in: [String!]
  itemContent_not_in: [String!]
  itemContent_lt: String
  itemContent_lte: String
  itemContent_gt: String
  itemContent_gte: String
  itemContent_contains: String
  itemContent_not_contains: String
  itemContent_starts_with: String
  itemContent_not_starts_with: String
  itemContent_ends_with: String
  itemContent_not_ends_with: String
  itemDeleted: Boolean
  itemDeleted_not: Boolean
  itemMeta_every: ReviewMetaWhereInput
  itemMeta_some: ReviewMetaWhereInput
  itemMeta_none: ReviewMetaWhereInput
  userTrack: UserTrackWhereInput
  AND: [ReviewWhereInput!]
  OR: [ReviewWhereInput!]
  NOT: [ReviewWhereInput!]
}

input ReviewWhereUniqueInput {
  id: ID
  oldId: String
}

type Subscription {
  blogPost(where: BlogPostSubscriptionWhereInput): BlogPostSubscriptionPayload
  blogPostMeta(where: BlogPostMetaSubscriptionWhereInput): BlogPostMetaSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  fileMeta(where: FileMetaSubscriptionWhereInput): FileMetaSubscriptionPayload
  profilePage(where: ProfilePageSubscriptionWhereInput): ProfilePageSubscriptionPayload
  profilePageMeta(where: ProfilePageMetaSubscriptionWhereInput): ProfilePageMetaSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  reviewMeta(where: ReviewMetaSubscriptionWhereInput): ReviewMetaSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userFeedback(where: UserFeedbackSubscriptionWhereInput): UserFeedbackSubscriptionPayload
  userFeedbackMeta(where: UserFeedbackMetaSubscriptionWhereInput): UserFeedbackMetaSubscriptionPayload
  userMeta(where: UserMetaSubscriptionWhereInput): UserMetaSubscriptionPayload
  userTrack(where: UserTrackSubscriptionWhereInput): UserTrackSubscriptionPayload
  userTrackMeta(where: UserTrackMetaSubscriptionWhereInput): UserTrackMetaSubscriptionPayload
}

type User {
  id: ID!
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userMeta(where: UserMetaWhereInput, orderBy: UserMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserMeta!]
  userTracks(where: UserTrackWhereInput, orderBy: UserTrackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserTrack!]
  userFeedbacks(where: UserFeedbackWhereInput, orderBy: UserFeedbackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserFeedback!]
  profilePages(where: ProfilePageWhereInput, orderBy: ProfilePageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProfilePage!]
  blogPosts(where: BlogPostWhereInput, orderBy: BlogPostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BlogPost!]
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userMeta: UserMetaCreateManyWithoutUserInput
  userTracks: UserTrackCreateManyWithoutUserInput
  userFeedbacks: UserFeedbackCreateManyWithoutUserInput
  profilePages: ProfilePageCreateManyWithoutUserInput
  blogPosts: BlogPostCreateManyWithoutUserInput
  reviews: ReviewCreateManyWithoutUserInput
  files: FileCreateManyWithoutUserInput
}

input UserCreateOneWithoutBlogPostsInput {
  create: UserCreateWithoutBlogPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutFilesInput {
  create: UserCreateWithoutFilesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutProfilePagesInput {
  create: UserCreateWithoutProfilePagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutUserFeedbacksInput {
  create: UserCreateWithoutUserFeedbacksInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutUserMetaInput {
  create: UserCreateWithoutUserMetaInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutUserTracksInput {
  create: UserCreateWithoutUserTracksInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBlogPostsInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userMeta: UserMetaCreateManyWithoutUserInput
  userTracks: UserTrackCreateManyWithoutUserInput
  userFeedbacks: UserFeedbackCreateManyWithoutUserInput
  profilePages: ProfilePageCreateManyWithoutUserInput
  reviews: ReviewCreateManyWithoutUserInput
  files: FileCreateManyWithoutUserInput
}

input UserCreateWithoutFilesInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userMeta: UserMetaCreateManyWithoutUserInput
  userTracks: UserTrackCreateManyWithoutUserInput
  userFeedbacks: UserFeedbackCreateManyWithoutUserInput
  profilePages: ProfilePageCreateManyWithoutUserInput
  blogPosts: BlogPostCreateManyWithoutUserInput
  reviews: ReviewCreateManyWithoutUserInput
}

input UserCreateWithoutProfilePagesInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userMeta: UserMetaCreateManyWithoutUserInput
  userTracks: UserTrackCreateManyWithoutUserInput
  userFeedbacks: UserFeedbackCreateManyWithoutUserInput
  blogPosts: BlogPostCreateManyWithoutUserInput
  reviews: ReviewCreateManyWithoutUserInput
  files: FileCreateManyWithoutUserInput
}

input UserCreateWithoutReviewsInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userMeta: UserMetaCreateManyWithoutUserInput
  userTracks: UserTrackCreateManyWithoutUserInput
  userFeedbacks: UserFeedbackCreateManyWithoutUserInput
  profilePages: ProfilePageCreateManyWithoutUserInput
  blogPosts: BlogPostCreateManyWithoutUserInput
  files: FileCreateManyWithoutUserInput
}

input UserCreateWithoutUserFeedbacksInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userMeta: UserMetaCreateManyWithoutUserInput
  userTracks: UserTrackCreateManyWithoutUserInput
  profilePages: ProfilePageCreateManyWithoutUserInput
  blogPosts: BlogPostCreateManyWithoutUserInput
  reviews: ReviewCreateManyWithoutUserInput
  files: FileCreateManyWithoutUserInput
}

input UserCreateWithoutUserMetaInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userTracks: UserTrackCreateManyWithoutUserInput
  userFeedbacks: UserFeedbackCreateManyWithoutUserInput
  profilePages: ProfilePageCreateManyWithoutUserInput
  blogPosts: BlogPostCreateManyWithoutUserInput
  reviews: ReviewCreateManyWithoutUserInput
  files: FileCreateManyWithoutUserInput
}

input UserCreateWithoutUserTracksInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userMeta: UserMetaCreateManyWithoutUserInput
  userFeedbacks: UserFeedbackCreateManyWithoutUserInput
  profilePages: ProfilePageCreateManyWithoutUserInput
  blogPosts: BlogPostCreateManyWithoutUserInput
  reviews: ReviewCreateManyWithoutUserInput
  files: FileCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

type UserFeedback {
  id: ID!
  oldId: String
  user: User
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta(where: UserFeedbackMetaWhereInput, orderBy: UserFeedbackMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserFeedbackMeta!]
}

type UserFeedbackConnection {
  pageInfo: PageInfo!
  edges: [UserFeedbackEdge]!
  aggregate: AggregateUserFeedback!
}

input UserFeedbackCreateInput {
  oldId: String
  user: UserCreateOneWithoutUserFeedbacksInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: UserFeedbackMetaCreateManyWithoutUserFeedbackInput
}

input UserFeedbackCreateManyWithoutUserInput {
  create: [UserFeedbackCreateWithoutUserInput!]
  connect: [UserFeedbackWhereUniqueInput!]
}

input UserFeedbackCreateOneWithoutItemMetaInput {
  create: UserFeedbackCreateWithoutItemMetaInput
  connect: UserFeedbackWhereUniqueInput
}

input UserFeedbackCreateWithoutItemMetaInput {
  oldId: String
  user: UserCreateOneWithoutUserFeedbacksInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
}

input UserFeedbackCreateWithoutUserInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: UserFeedbackMetaCreateManyWithoutUserFeedbackInput
}

type UserFeedbackEdge {
  node: UserFeedback!
  cursor: String!
}

type UserFeedbackMeta {
  id: ID!
  oldId: String
  itemOldId: String
  userFeedback: UserFeedback
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

type UserFeedbackMetaConnection {
  pageInfo: PageInfo!
  edges: [UserFeedbackMetaEdge]!
  aggregate: AggregateUserFeedbackMeta!
}

input UserFeedbackMetaCreateInput {
  oldId: String
  itemOldId: String
  userFeedback: UserFeedbackCreateOneWithoutItemMetaInput
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

input UserFeedbackMetaCreateManyWithoutUserFeedbackInput {
  create: [UserFeedbackMetaCreateWithoutUserFeedbackInput!]
  connect: [UserFeedbackMetaWhereUniqueInput!]
}

input UserFeedbackMetaCreateWithoutUserFeedbackInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

type UserFeedbackMetaEdge {
  node: UserFeedbackMeta!
  cursor: String!
}

enum UserFeedbackMetaOrderByInput {
  id_ASC
  id_DESC
  oldId_ASC
  oldId_DESC
  itemOldId_ASC
  itemOldId_DESC
  metaType_ASC
  metaType_DESC
  metaName_ASC
  metaName_DESC
  metaValue_ASC
  metaValue_DESC
  metaDeleted_ASC
  metaDeleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserFeedbackMetaPreviousValues {
  id: ID!
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

input UserFeedbackMetaScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemOldId: String
  itemOldId_not: String
  itemOldId_in: [String!]
  itemOldId_not_in: [String!]
  itemOldId_lt: String
  itemOldId_lte: String
  itemOldId_gt: String
  itemOldId_gte: String
  itemOldId_contains: String
  itemOldId_not_contains: String
  itemOldId_starts_with: String
  itemOldId_not_starts_with: String
  itemOldId_ends_with: String
  itemOldId_not_ends_with: String
  metaType: String
  metaType_not: String
  metaType_in: [String!]
  metaType_not_in: [String!]
  metaType_lt: String
  metaType_lte: String
  metaType_gt: String
  metaType_gte: String
  metaType_contains: String
  metaType_not_contains: String
  metaType_starts_with: String
  metaType_not_starts_with: String
  metaType_ends_with: String
  metaType_not_ends_with: String
  metaName: String
  metaName_not: String
  metaName_in: [String!]
  metaName_not_in: [String!]
  metaName_lt: String
  metaName_lte: String
  metaName_gt: String
  metaName_gte: String
  metaName_contains: String
  metaName_not_contains: String
  metaName_starts_with: String
  metaName_not_starts_with: String
  metaName_ends_with: String
  metaName_not_ends_with: String
  metaValue: String
  metaValue_not: String
  metaValue_in: [String!]
  metaValue_not_in: [String!]
  metaValue_lt: String
  metaValue_lte: String
  metaValue_gt: String
  metaValue_gte: String
  metaValue_contains: String
  metaValue_not_contains: String
  metaValue_starts_with: String
  metaValue_not_starts_with: String
  metaValue_ends_with: String
  metaValue_not_ends_with: String
  metaDeleted: Boolean
  metaDeleted_not: Boolean
  AND: [UserFeedbackMetaScalarWhereInput!]
  OR: [UserFeedbackMetaScalarWhereInput!]
  NOT: [UserFeedbackMetaScalarWhereInput!]
}

type UserFeedbackMetaSubscriptionPayload {
  mutation: MutationType!
  node: UserFeedbackMeta
  updatedFields: [String!]
  previousValues: UserFeedbackMetaPreviousValues
}

input UserFeedbackMetaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserFeedbackMetaWhereInput
  AND: [UserFeedbackMetaSubscriptionWhereInput!]
  OR: [UserFeedbackMetaSubscriptionWhereInput!]
  NOT: [UserFeedbackMetaSubscriptionWhereInput!]
}

input UserFeedbackMetaUpdateInput {
  oldId: String
  itemOldId: String
  userFeedback: UserFeedbackUpdateOneWithoutItemMetaInput
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input UserFeedbackMetaUpdateManyDataInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input UserFeedbackMetaUpdateManyMutationInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input UserFeedbackMetaUpdateManyWithoutUserFeedbackInput {
  create: [UserFeedbackMetaCreateWithoutUserFeedbackInput!]
  delete: [UserFeedbackMetaWhereUniqueInput!]
  connect: [UserFeedbackMetaWhereUniqueInput!]
  disconnect: [UserFeedbackMetaWhereUniqueInput!]
  update: [UserFeedbackMetaUpdateWithWhereUniqueWithoutUserFeedbackInput!]
  upsert: [UserFeedbackMetaUpsertWithWhereUniqueWithoutUserFeedbackInput!]
  deleteMany: [UserFeedbackMetaScalarWhereInput!]
  updateMany: [UserFeedbackMetaUpdateManyWithWhereNestedInput!]
}

input UserFeedbackMetaUpdateManyWithWhereNestedInput {
  where: UserFeedbackMetaScalarWhereInput!
  data: UserFeedbackMetaUpdateManyDataInput!
}

input UserFeedbackMetaUpdateWithoutUserFeedbackDataInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input UserFeedbackMetaUpdateWithWhereUniqueWithoutUserFeedbackInput {
  where: UserFeedbackMetaWhereUniqueInput!
  data: UserFeedbackMetaUpdateWithoutUserFeedbackDataInput!
}

input UserFeedbackMetaUpsertWithWhereUniqueWithoutUserFeedbackInput {
  where: UserFeedbackMetaWhereUniqueInput!
  update: UserFeedbackMetaUpdateWithoutUserFeedbackDataInput!
  create: UserFeedbackMetaCreateWithoutUserFeedbackInput!
}

input UserFeedbackMetaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemOldId: String
  itemOldId_not: String
  itemOldId_in: [String!]
  itemOldId_not_in: [String!]
  itemOldId_lt: String
  itemOldId_lte: String
  itemOldId_gt: String
  itemOldId_gte: String
  itemOldId_contains: String
  itemOldId_not_contains: String
  itemOldId_starts_with: String
  itemOldId_not_starts_with: String
  itemOldId_ends_with: String
  itemOldId_not_ends_with: String
  userFeedback: UserFeedbackWhereInput
  metaType: String
  metaType_not: String
  metaType_in: [String!]
  metaType_not_in: [String!]
  metaType_lt: String
  metaType_lte: String
  metaType_gt: String
  metaType_gte: String
  metaType_contains: String
  metaType_not_contains: String
  metaType_starts_with: String
  metaType_not_starts_with: String
  metaType_ends_with: String
  metaType_not_ends_with: String
  metaName: String
  metaName_not: String
  metaName_in: [String!]
  metaName_not_in: [String!]
  metaName_lt: String
  metaName_lte: String
  metaName_gt: String
  metaName_gte: String
  metaName_contains: String
  metaName_not_contains: String
  metaName_starts_with: String
  metaName_not_starts_with: String
  metaName_ends_with: String
  metaName_not_ends_with: String
  metaValue: String
  metaValue_not: String
  metaValue_in: [String!]
  metaValue_not_in: [String!]
  metaValue_lt: String
  metaValue_lte: String
  metaValue_gt: String
  metaValue_gte: String
  metaValue_contains: String
  metaValue_not_contains: String
  metaValue_starts_with: String
  metaValue_not_starts_with: String
  metaValue_ends_with: String
  metaValue_not_ends_with: String
  metaDeleted: Boolean
  metaDeleted_not: Boolean
  AND: [UserFeedbackMetaWhereInput!]
  OR: [UserFeedbackMetaWhereInput!]
  NOT: [UserFeedbackMetaWhereInput!]
}

input UserFeedbackMetaWhereUniqueInput {
  id: ID
  oldId: String
}

enum UserFeedbackOrderByInput {
  id_ASC
  id_DESC
  oldId_ASC
  oldId_DESC
  itemType_ASC
  itemType_DESC
  itemStatus_ASC
  itemStatus_DESC
  itemUrlSegment_ASC
  itemUrlSegment_DESC
  itemMimeType_ASC
  itemMimeType_DESC
  itemName_ASC
  itemName_DESC
  itemContent_ASC
  itemContent_DESC
  itemDeleted_ASC
  itemDeleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserFeedbackPreviousValues {
  id: ID!
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
}

input UserFeedbackScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemType: String
  itemType_not: String
  itemType_in: [String!]
  itemType_not_in: [String!]
  itemType_lt: String
  itemType_lte: String
  itemType_gt: String
  itemType_gte: String
  itemType_contains: String
  itemType_not_contains: String
  itemType_starts_with: String
  itemType_not_starts_with: String
  itemType_ends_with: String
  itemType_not_ends_with: String
  itemStatus: String
  itemStatus_not: String
  itemStatus_in: [String!]
  itemStatus_not_in: [String!]
  itemStatus_lt: String
  itemStatus_lte: String
  itemStatus_gt: String
  itemStatus_gte: String
  itemStatus_contains: String
  itemStatus_not_contains: String
  itemStatus_starts_with: String
  itemStatus_not_starts_with: String
  itemStatus_ends_with: String
  itemStatus_not_ends_with: String
  itemUrlSegment: String
  itemUrlSegment_not: String
  itemUrlSegment_in: [String!]
  itemUrlSegment_not_in: [String!]
  itemUrlSegment_lt: String
  itemUrlSegment_lte: String
  itemUrlSegment_gt: String
  itemUrlSegment_gte: String
  itemUrlSegment_contains: String
  itemUrlSegment_not_contains: String
  itemUrlSegment_starts_with: String
  itemUrlSegment_not_starts_with: String
  itemUrlSegment_ends_with: String
  itemUrlSegment_not_ends_with: String
  itemMimeType: String
  itemMimeType_not: String
  itemMimeType_in: [String!]
  itemMimeType_not_in: [String!]
  itemMimeType_lt: String
  itemMimeType_lte: String
  itemMimeType_gt: String
  itemMimeType_gte: String
  itemMimeType_contains: String
  itemMimeType_not_contains: String
  itemMimeType_starts_with: String
  itemMimeType_not_starts_with: String
  itemMimeType_ends_with: String
  itemMimeType_not_ends_with: String
  itemName: String
  itemName_not: String
  itemName_in: [String!]
  itemName_not_in: [String!]
  itemName_lt: String
  itemName_lte: String
  itemName_gt: String
  itemName_gte: String
  itemName_contains: String
  itemName_not_contains: String
  itemName_starts_with: String
  itemName_not_starts_with: String
  itemName_ends_with: String
  itemName_not_ends_with: String
  itemContent: String
  itemContent_not: String
  itemContent_in: [String!]
  itemContent_not_in: [String!]
  itemContent_lt: String
  itemContent_lte: String
  itemContent_gt: String
  itemContent_gte: String
  itemContent_contains: String
  itemContent_not_contains: String
  itemContent_starts_with: String
  itemContent_not_starts_with: String
  itemContent_ends_with: String
  itemContent_not_ends_with: String
  itemDeleted: Boolean
  itemDeleted_not: Boolean
  AND: [UserFeedbackScalarWhereInput!]
  OR: [UserFeedbackScalarWhereInput!]
  NOT: [UserFeedbackScalarWhereInput!]
}

type UserFeedbackSubscriptionPayload {
  mutation: MutationType!
  node: UserFeedback
  updatedFields: [String!]
  previousValues: UserFeedbackPreviousValues
}

input UserFeedbackSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserFeedbackWhereInput
  AND: [UserFeedbackSubscriptionWhereInput!]
  OR: [UserFeedbackSubscriptionWhereInput!]
  NOT: [UserFeedbackSubscriptionWhereInput!]
}

input UserFeedbackUpdateInput {
  oldId: String
  user: UserUpdateOneWithoutUserFeedbacksInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: UserFeedbackMetaUpdateManyWithoutUserFeedbackInput
}

input UserFeedbackUpdateManyDataInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
}

input UserFeedbackUpdateManyMutationInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
}

input UserFeedbackUpdateManyWithoutUserInput {
  create: [UserFeedbackCreateWithoutUserInput!]
  delete: [UserFeedbackWhereUniqueInput!]
  connect: [UserFeedbackWhereUniqueInput!]
  disconnect: [UserFeedbackWhereUniqueInput!]
  update: [UserFeedbackUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [UserFeedbackUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [UserFeedbackScalarWhereInput!]
  updateMany: [UserFeedbackUpdateManyWithWhereNestedInput!]
}

input UserFeedbackUpdateManyWithWhereNestedInput {
  where: UserFeedbackScalarWhereInput!
  data: UserFeedbackUpdateManyDataInput!
}

input UserFeedbackUpdateOneWithoutItemMetaInput {
  create: UserFeedbackCreateWithoutItemMetaInput
  update: UserFeedbackUpdateWithoutItemMetaDataInput
  upsert: UserFeedbackUpsertWithoutItemMetaInput
  delete: Boolean
  disconnect: Boolean
  connect: UserFeedbackWhereUniqueInput
}

input UserFeedbackUpdateWithoutItemMetaDataInput {
  oldId: String
  user: UserUpdateOneWithoutUserFeedbacksInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
}

input UserFeedbackUpdateWithoutUserDataInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: UserFeedbackMetaUpdateManyWithoutUserFeedbackInput
}

input UserFeedbackUpdateWithWhereUniqueWithoutUserInput {
  where: UserFeedbackWhereUniqueInput!
  data: UserFeedbackUpdateWithoutUserDataInput!
}

input UserFeedbackUpsertWithoutItemMetaInput {
  update: UserFeedbackUpdateWithoutItemMetaDataInput!
  create: UserFeedbackCreateWithoutItemMetaInput!
}

input UserFeedbackUpsertWithWhereUniqueWithoutUserInput {
  where: UserFeedbackWhereUniqueInput!
  update: UserFeedbackUpdateWithoutUserDataInput!
  create: UserFeedbackCreateWithoutUserInput!
}

input UserFeedbackWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  user: UserWhereInput
  itemType: String
  itemType_not: String
  itemType_in: [String!]
  itemType_not_in: [String!]
  itemType_lt: String
  itemType_lte: String
  itemType_gt: String
  itemType_gte: String
  itemType_contains: String
  itemType_not_contains: String
  itemType_starts_with: String
  itemType_not_starts_with: String
  itemType_ends_with: String
  itemType_not_ends_with: String
  itemStatus: String
  itemStatus_not: String
  itemStatus_in: [String!]
  itemStatus_not_in: [String!]
  itemStatus_lt: String
  itemStatus_lte: String
  itemStatus_gt: String
  itemStatus_gte: String
  itemStatus_contains: String
  itemStatus_not_contains: String
  itemStatus_starts_with: String
  itemStatus_not_starts_with: String
  itemStatus_ends_with: String
  itemStatus_not_ends_with: String
  itemUrlSegment: String
  itemUrlSegment_not: String
  itemUrlSegment_in: [String!]
  itemUrlSegment_not_in: [String!]
  itemUrlSegment_lt: String
  itemUrlSegment_lte: String
  itemUrlSegment_gt: String
  itemUrlSegment_gte: String
  itemUrlSegment_contains: String
  itemUrlSegment_not_contains: String
  itemUrlSegment_starts_with: String
  itemUrlSegment_not_starts_with: String
  itemUrlSegment_ends_with: String
  itemUrlSegment_not_ends_with: String
  itemMimeType: String
  itemMimeType_not: String
  itemMimeType_in: [String!]
  itemMimeType_not_in: [String!]
  itemMimeType_lt: String
  itemMimeType_lte: String
  itemMimeType_gt: String
  itemMimeType_gte: String
  itemMimeType_contains: String
  itemMimeType_not_contains: String
  itemMimeType_starts_with: String
  itemMimeType_not_starts_with: String
  itemMimeType_ends_with: String
  itemMimeType_not_ends_with: String
  itemName: String
  itemName_not: String
  itemName_in: [String!]
  itemName_not_in: [String!]
  itemName_lt: String
  itemName_lte: String
  itemName_gt: String
  itemName_gte: String
  itemName_contains: String
  itemName_not_contains: String
  itemName_starts_with: String
  itemName_not_starts_with: String
  itemName_ends_with: String
  itemName_not_ends_with: String
  itemContent: String
  itemContent_not: String
  itemContent_in: [String!]
  itemContent_not_in: [String!]
  itemContent_lt: String
  itemContent_lte: String
  itemContent_gt: String
  itemContent_gte: String
  itemContent_contains: String
  itemContent_not_contains: String
  itemContent_starts_with: String
  itemContent_not_starts_with: String
  itemContent_ends_with: String
  itemContent_not_ends_with: String
  itemDeleted: Boolean
  itemDeleted_not: Boolean
  itemMeta_every: UserFeedbackMetaWhereInput
  itemMeta_some: UserFeedbackMetaWhereInput
  itemMeta_none: UserFeedbackMetaWhereInput
  AND: [UserFeedbackWhereInput!]
  OR: [UserFeedbackWhereInput!]
  NOT: [UserFeedbackWhereInput!]
}

input UserFeedbackWhereUniqueInput {
  id: ID
  oldId: String
}

type UserMeta {
  id: ID!
  oldId: String
  user: User
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

type UserMetaConnection {
  pageInfo: PageInfo!
  edges: [UserMetaEdge]!
  aggregate: AggregateUserMeta!
}

input UserMetaCreateInput {
  oldId: String
  user: UserCreateOneWithoutUserMetaInput
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

input UserMetaCreateManyWithoutUserInput {
  create: [UserMetaCreateWithoutUserInput!]
  connect: [UserMetaWhereUniqueInput!]
}

input UserMetaCreateWithoutUserInput {
  oldId: String
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

type UserMetaEdge {
  node: UserMeta!
  cursor: String!
}

enum UserMetaOrderByInput {
  id_ASC
  id_DESC
  oldId_ASC
  oldId_DESC
  metaType_ASC
  metaType_DESC
  metaName_ASC
  metaName_DESC
  metaValue_ASC
  metaValue_DESC
  metaDeleted_ASC
  metaDeleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserMetaPreviousValues {
  id: ID!
  oldId: String
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

input UserMetaScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  metaType: String
  metaType_not: String
  metaType_in: [String!]
  metaType_not_in: [String!]
  metaType_lt: String
  metaType_lte: String
  metaType_gt: String
  metaType_gte: String
  metaType_contains: String
  metaType_not_contains: String
  metaType_starts_with: String
  metaType_not_starts_with: String
  metaType_ends_with: String
  metaType_not_ends_with: String
  metaName: String
  metaName_not: String
  metaName_in: [String!]
  metaName_not_in: [String!]
  metaName_lt: String
  metaName_lte: String
  metaName_gt: String
  metaName_gte: String
  metaName_contains: String
  metaName_not_contains: String
  metaName_starts_with: String
  metaName_not_starts_with: String
  metaName_ends_with: String
  metaName_not_ends_with: String
  metaValue: String
  metaValue_not: String
  metaValue_in: [String!]
  metaValue_not_in: [String!]
  metaValue_lt: String
  metaValue_lte: String
  metaValue_gt: String
  metaValue_gte: String
  metaValue_contains: String
  metaValue_not_contains: String
  metaValue_starts_with: String
  metaValue_not_starts_with: String
  metaValue_ends_with: String
  metaValue_not_ends_with: String
  metaDeleted: Boolean
  metaDeleted_not: Boolean
  AND: [UserMetaScalarWhereInput!]
  OR: [UserMetaScalarWhereInput!]
  NOT: [UserMetaScalarWhereInput!]
}

type UserMetaSubscriptionPayload {
  mutation: MutationType!
  node: UserMeta
  updatedFields: [String!]
  previousValues: UserMetaPreviousValues
}

input UserMetaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserMetaWhereInput
  AND: [UserMetaSubscriptionWhereInput!]
  OR: [UserMetaSubscriptionWhereInput!]
  NOT: [UserMetaSubscriptionWhereInput!]
}

input UserMetaUpdateInput {
  oldId: String
  user: UserUpdateOneWithoutUserMetaInput
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input UserMetaUpdateManyDataInput {
  oldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input UserMetaUpdateManyMutationInput {
  oldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input UserMetaUpdateManyWithoutUserInput {
  create: [UserMetaCreateWithoutUserInput!]
  delete: [UserMetaWhereUniqueInput!]
  connect: [UserMetaWhereUniqueInput!]
  disconnect: [UserMetaWhereUniqueInput!]
  update: [UserMetaUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [UserMetaUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [UserMetaScalarWhereInput!]
  updateMany: [UserMetaUpdateManyWithWhereNestedInput!]
}

input UserMetaUpdateManyWithWhereNestedInput {
  where: UserMetaScalarWhereInput!
  data: UserMetaUpdateManyDataInput!
}

input UserMetaUpdateWithoutUserDataInput {
  oldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input UserMetaUpdateWithWhereUniqueWithoutUserInput {
  where: UserMetaWhereUniqueInput!
  data: UserMetaUpdateWithoutUserDataInput!
}

input UserMetaUpsertWithWhereUniqueWithoutUserInput {
  where: UserMetaWhereUniqueInput!
  update: UserMetaUpdateWithoutUserDataInput!
  create: UserMetaCreateWithoutUserInput!
}

input UserMetaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  user: UserWhereInput
  metaType: String
  metaType_not: String
  metaType_in: [String!]
  metaType_not_in: [String!]
  metaType_lt: String
  metaType_lte: String
  metaType_gt: String
  metaType_gte: String
  metaType_contains: String
  metaType_not_contains: String
  metaType_starts_with: String
  metaType_not_starts_with: String
  metaType_ends_with: String
  metaType_not_ends_with: String
  metaName: String
  metaName_not: String
  metaName_in: [String!]
  metaName_not_in: [String!]
  metaName_lt: String
  metaName_lte: String
  metaName_gt: String
  metaName_gte: String
  metaName_contains: String
  metaName_not_contains: String
  metaName_starts_with: String
  metaName_not_starts_with: String
  metaName_ends_with: String
  metaName_not_ends_with: String
  metaValue: String
  metaValue_not: String
  metaValue_in: [String!]
  metaValue_not_in: [String!]
  metaValue_lt: String
  metaValue_lte: String
  metaValue_gt: String
  metaValue_gte: String
  metaValue_contains: String
  metaValue_not_contains: String
  metaValue_starts_with: String
  metaValue_not_starts_with: String
  metaValue_ends_with: String
  metaValue_not_ends_with: String
  metaDeleted: Boolean
  metaDeleted_not: Boolean
  AND: [UserMetaWhereInput!]
  OR: [UserMetaWhereInput!]
  NOT: [UserMetaWhereInput!]
}

input UserMetaWhereUniqueInput {
  id: ID
  oldId: String
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  oldId_ASC
  oldId_DESC
  userType_ASC
  userType_DESC
  userEmail_ASC
  userEmail_DESC
  userPassword_ASC
  userPassword_DESC
  publicHash_ASC
  publicHash_DESC
  privateHash_ASC
  privateHash_DESC
  confirmHash_ASC
  confirmHash_DESC
  forgotHash_ASC
  forgotHash_DESC
  userConfirmed_ASC
  userConfirmed_DESC
  userDeleted_ASC
  userDeleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

type UserTrack {
  id: ID!
  oldId: String
  user: User
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta(where: UserTrackMetaWhereInput, orderBy: UserTrackMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserTrackMeta!]
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
}

type UserTrackConnection {
  pageInfo: PageInfo!
  edges: [UserTrackEdge]!
  aggregate: AggregateUserTrack!
}

input UserTrackCreateInput {
  oldId: String
  user: UserCreateOneWithoutUserTracksInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: UserTrackMetaCreateManyWithoutUserTrackInput
  reviews: ReviewCreateManyWithoutUserTrackInput
  files: FileCreateManyWithoutUserTrackInput
}

input UserTrackCreateManyWithoutUserInput {
  create: [UserTrackCreateWithoutUserInput!]
  connect: [UserTrackWhereUniqueInput!]
}

input UserTrackCreateOneWithoutFilesInput {
  create: UserTrackCreateWithoutFilesInput
  connect: UserTrackWhereUniqueInput
}

input UserTrackCreateOneWithoutItemMetaInput {
  create: UserTrackCreateWithoutItemMetaInput
  connect: UserTrackWhereUniqueInput
}

input UserTrackCreateOneWithoutReviewsInput {
  create: UserTrackCreateWithoutReviewsInput
  connect: UserTrackWhereUniqueInput
}

input UserTrackCreateWithoutFilesInput {
  oldId: String
  user: UserCreateOneWithoutUserTracksInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: UserTrackMetaCreateManyWithoutUserTrackInput
  reviews: ReviewCreateManyWithoutUserTrackInput
}

input UserTrackCreateWithoutItemMetaInput {
  oldId: String
  user: UserCreateOneWithoutUserTracksInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  reviews: ReviewCreateManyWithoutUserTrackInput
  files: FileCreateManyWithoutUserTrackInput
}

input UserTrackCreateWithoutReviewsInput {
  oldId: String
  user: UserCreateOneWithoutUserTracksInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: UserTrackMetaCreateManyWithoutUserTrackInput
  files: FileCreateManyWithoutUserTrackInput
}

input UserTrackCreateWithoutUserInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
  itemMeta: UserTrackMetaCreateManyWithoutUserTrackInput
  reviews: ReviewCreateManyWithoutUserTrackInput
  files: FileCreateManyWithoutUserTrackInput
}

type UserTrackEdge {
  node: UserTrack!
  cursor: String!
}

type UserTrackMeta {
  id: ID!
  oldId: String
  itemOldId: String
  userTrack: UserTrack
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

type UserTrackMetaConnection {
  pageInfo: PageInfo!
  edges: [UserTrackMetaEdge]!
  aggregate: AggregateUserTrackMeta!
}

input UserTrackMetaCreateInput {
  oldId: String
  itemOldId: String
  userTrack: UserTrackCreateOneWithoutItemMetaInput
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

input UserTrackMetaCreateManyWithoutUserTrackInput {
  create: [UserTrackMetaCreateWithoutUserTrackInput!]
  connect: [UserTrackMetaWhereUniqueInput!]
}

input UserTrackMetaCreateWithoutUserTrackInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

type UserTrackMetaEdge {
  node: UserTrackMeta!
  cursor: String!
}

enum UserTrackMetaOrderByInput {
  id_ASC
  id_DESC
  oldId_ASC
  oldId_DESC
  itemOldId_ASC
  itemOldId_DESC
  metaType_ASC
  metaType_DESC
  metaName_ASC
  metaName_DESC
  metaValue_ASC
  metaValue_DESC
  metaDeleted_ASC
  metaDeleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserTrackMetaPreviousValues {
  id: ID!
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String!
  metaValue: String!
  metaDeleted: Boolean
}

input UserTrackMetaScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemOldId: String
  itemOldId_not: String
  itemOldId_in: [String!]
  itemOldId_not_in: [String!]
  itemOldId_lt: String
  itemOldId_lte: String
  itemOldId_gt: String
  itemOldId_gte: String
  itemOldId_contains: String
  itemOldId_not_contains: String
  itemOldId_starts_with: String
  itemOldId_not_starts_with: String
  itemOldId_ends_with: String
  itemOldId_not_ends_with: String
  metaType: String
  metaType_not: String
  metaType_in: [String!]
  metaType_not_in: [String!]
  metaType_lt: String
  metaType_lte: String
  metaType_gt: String
  metaType_gte: String
  metaType_contains: String
  metaType_not_contains: String
  metaType_starts_with: String
  metaType_not_starts_with: String
  metaType_ends_with: String
  metaType_not_ends_with: String
  metaName: String
  metaName_not: String
  metaName_in: [String!]
  metaName_not_in: [String!]
  metaName_lt: String
  metaName_lte: String
  metaName_gt: String
  metaName_gte: String
  metaName_contains: String
  metaName_not_contains: String
  metaName_starts_with: String
  metaName_not_starts_with: String
  metaName_ends_with: String
  metaName_not_ends_with: String
  metaValue: String
  metaValue_not: String
  metaValue_in: [String!]
  metaValue_not_in: [String!]
  metaValue_lt: String
  metaValue_lte: String
  metaValue_gt: String
  metaValue_gte: String
  metaValue_contains: String
  metaValue_not_contains: String
  metaValue_starts_with: String
  metaValue_not_starts_with: String
  metaValue_ends_with: String
  metaValue_not_ends_with: String
  metaDeleted: Boolean
  metaDeleted_not: Boolean
  AND: [UserTrackMetaScalarWhereInput!]
  OR: [UserTrackMetaScalarWhereInput!]
  NOT: [UserTrackMetaScalarWhereInput!]
}

type UserTrackMetaSubscriptionPayload {
  mutation: MutationType!
  node: UserTrackMeta
  updatedFields: [String!]
  previousValues: UserTrackMetaPreviousValues
}

input UserTrackMetaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserTrackMetaWhereInput
  AND: [UserTrackMetaSubscriptionWhereInput!]
  OR: [UserTrackMetaSubscriptionWhereInput!]
  NOT: [UserTrackMetaSubscriptionWhereInput!]
}

input UserTrackMetaUpdateInput {
  oldId: String
  itemOldId: String
  userTrack: UserTrackUpdateOneWithoutItemMetaInput
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input UserTrackMetaUpdateManyDataInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input UserTrackMetaUpdateManyMutationInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input UserTrackMetaUpdateManyWithoutUserTrackInput {
  create: [UserTrackMetaCreateWithoutUserTrackInput!]
  delete: [UserTrackMetaWhereUniqueInput!]
  connect: [UserTrackMetaWhereUniqueInput!]
  disconnect: [UserTrackMetaWhereUniqueInput!]
  update: [UserTrackMetaUpdateWithWhereUniqueWithoutUserTrackInput!]
  upsert: [UserTrackMetaUpsertWithWhereUniqueWithoutUserTrackInput!]
  deleteMany: [UserTrackMetaScalarWhereInput!]
  updateMany: [UserTrackMetaUpdateManyWithWhereNestedInput!]
}

input UserTrackMetaUpdateManyWithWhereNestedInput {
  where: UserTrackMetaScalarWhereInput!
  data: UserTrackMetaUpdateManyDataInput!
}

input UserTrackMetaUpdateWithoutUserTrackDataInput {
  oldId: String
  itemOldId: String
  metaType: String
  metaName: String
  metaValue: String
  metaDeleted: Boolean
}

input UserTrackMetaUpdateWithWhereUniqueWithoutUserTrackInput {
  where: UserTrackMetaWhereUniqueInput!
  data: UserTrackMetaUpdateWithoutUserTrackDataInput!
}

input UserTrackMetaUpsertWithWhereUniqueWithoutUserTrackInput {
  where: UserTrackMetaWhereUniqueInput!
  update: UserTrackMetaUpdateWithoutUserTrackDataInput!
  create: UserTrackMetaCreateWithoutUserTrackInput!
}

input UserTrackMetaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemOldId: String
  itemOldId_not: String
  itemOldId_in: [String!]
  itemOldId_not_in: [String!]
  itemOldId_lt: String
  itemOldId_lte: String
  itemOldId_gt: String
  itemOldId_gte: String
  itemOldId_contains: String
  itemOldId_not_contains: String
  itemOldId_starts_with: String
  itemOldId_not_starts_with: String
  itemOldId_ends_with: String
  itemOldId_not_ends_with: String
  userTrack: UserTrackWhereInput
  metaType: String
  metaType_not: String
  metaType_in: [String!]
  metaType_not_in: [String!]
  metaType_lt: String
  metaType_lte: String
  metaType_gt: String
  metaType_gte: String
  metaType_contains: String
  metaType_not_contains: String
  metaType_starts_with: String
  metaType_not_starts_with: String
  metaType_ends_with: String
  metaType_not_ends_with: String
  metaName: String
  metaName_not: String
  metaName_in: [String!]
  metaName_not_in: [String!]
  metaName_lt: String
  metaName_lte: String
  metaName_gt: String
  metaName_gte: String
  metaName_contains: String
  metaName_not_contains: String
  metaName_starts_with: String
  metaName_not_starts_with: String
  metaName_ends_with: String
  metaName_not_ends_with: String
  metaValue: String
  metaValue_not: String
  metaValue_in: [String!]
  metaValue_not_in: [String!]
  metaValue_lt: String
  metaValue_lte: String
  metaValue_gt: String
  metaValue_gte: String
  metaValue_contains: String
  metaValue_not_contains: String
  metaValue_starts_with: String
  metaValue_not_starts_with: String
  metaValue_ends_with: String
  metaValue_not_ends_with: String
  metaDeleted: Boolean
  metaDeleted_not: Boolean
  AND: [UserTrackMetaWhereInput!]
  OR: [UserTrackMetaWhereInput!]
  NOT: [UserTrackMetaWhereInput!]
}

input UserTrackMetaWhereUniqueInput {
  id: ID
  oldId: String
}

enum UserTrackOrderByInput {
  id_ASC
  id_DESC
  oldId_ASC
  oldId_DESC
  itemType_ASC
  itemType_DESC
  itemStatus_ASC
  itemStatus_DESC
  itemUrlSegment_ASC
  itemUrlSegment_DESC
  itemMimeType_ASC
  itemMimeType_DESC
  itemName_ASC
  itemName_DESC
  itemContent_ASC
  itemContent_DESC
  itemDeleted_ASC
  itemDeleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserTrackPreviousValues {
  id: ID!
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String!
  itemContent: String!
  itemDeleted: Boolean
}

input UserTrackScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  itemType: String
  itemType_not: String
  itemType_in: [String!]
  itemType_not_in: [String!]
  itemType_lt: String
  itemType_lte: String
  itemType_gt: String
  itemType_gte: String
  itemType_contains: String
  itemType_not_contains: String
  itemType_starts_with: String
  itemType_not_starts_with: String
  itemType_ends_with: String
  itemType_not_ends_with: String
  itemStatus: String
  itemStatus_not: String
  itemStatus_in: [String!]
  itemStatus_not_in: [String!]
  itemStatus_lt: String
  itemStatus_lte: String
  itemStatus_gt: String
  itemStatus_gte: String
  itemStatus_contains: String
  itemStatus_not_contains: String
  itemStatus_starts_with: String
  itemStatus_not_starts_with: String
  itemStatus_ends_with: String
  itemStatus_not_ends_with: String
  itemUrlSegment: String
  itemUrlSegment_not: String
  itemUrlSegment_in: [String!]
  itemUrlSegment_not_in: [String!]
  itemUrlSegment_lt: String
  itemUrlSegment_lte: String
  itemUrlSegment_gt: String
  itemUrlSegment_gte: String
  itemUrlSegment_contains: String
  itemUrlSegment_not_contains: String
  itemUrlSegment_starts_with: String
  itemUrlSegment_not_starts_with: String
  itemUrlSegment_ends_with: String
  itemUrlSegment_not_ends_with: String
  itemMimeType: String
  itemMimeType_not: String
  itemMimeType_in: [String!]
  itemMimeType_not_in: [String!]
  itemMimeType_lt: String
  itemMimeType_lte: String
  itemMimeType_gt: String
  itemMimeType_gte: String
  itemMimeType_contains: String
  itemMimeType_not_contains: String
  itemMimeType_starts_with: String
  itemMimeType_not_starts_with: String
  itemMimeType_ends_with: String
  itemMimeType_not_ends_with: String
  itemName: String
  itemName_not: String
  itemName_in: [String!]
  itemName_not_in: [String!]
  itemName_lt: String
  itemName_lte: String
  itemName_gt: String
  itemName_gte: String
  itemName_contains: String
  itemName_not_contains: String
  itemName_starts_with: String
  itemName_not_starts_with: String
  itemName_ends_with: String
  itemName_not_ends_with: String
  itemContent: String
  itemContent_not: String
  itemContent_in: [String!]
  itemContent_not_in: [String!]
  itemContent_lt: String
  itemContent_lte: String
  itemContent_gt: String
  itemContent_gte: String
  itemContent_contains: String
  itemContent_not_contains: String
  itemContent_starts_with: String
  itemContent_not_starts_with: String
  itemContent_ends_with: String
  itemContent_not_ends_with: String
  itemDeleted: Boolean
  itemDeleted_not: Boolean
  AND: [UserTrackScalarWhereInput!]
  OR: [UserTrackScalarWhereInput!]
  NOT: [UserTrackScalarWhereInput!]
}

type UserTrackSubscriptionPayload {
  mutation: MutationType!
  node: UserTrack
  updatedFields: [String!]
  previousValues: UserTrackPreviousValues
}

input UserTrackSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserTrackWhereInput
  AND: [UserTrackSubscriptionWhereInput!]
  OR: [UserTrackSubscriptionWhereInput!]
  NOT: [UserTrackSubscriptionWhereInput!]
}

input UserTrackUpdateInput {
  oldId: String
  user: UserUpdateOneWithoutUserTracksInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: UserTrackMetaUpdateManyWithoutUserTrackInput
  reviews: ReviewUpdateManyWithoutUserTrackInput
  files: FileUpdateManyWithoutUserTrackInput
}

input UserTrackUpdateManyDataInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
}

input UserTrackUpdateManyMutationInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
}

input UserTrackUpdateManyWithoutUserInput {
  create: [UserTrackCreateWithoutUserInput!]
  delete: [UserTrackWhereUniqueInput!]
  connect: [UserTrackWhereUniqueInput!]
  disconnect: [UserTrackWhereUniqueInput!]
  update: [UserTrackUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [UserTrackUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [UserTrackScalarWhereInput!]
  updateMany: [UserTrackUpdateManyWithWhereNestedInput!]
}

input UserTrackUpdateManyWithWhereNestedInput {
  where: UserTrackScalarWhereInput!
  data: UserTrackUpdateManyDataInput!
}

input UserTrackUpdateOneWithoutFilesInput {
  create: UserTrackCreateWithoutFilesInput
  update: UserTrackUpdateWithoutFilesDataInput
  upsert: UserTrackUpsertWithoutFilesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserTrackWhereUniqueInput
}

input UserTrackUpdateOneWithoutItemMetaInput {
  create: UserTrackCreateWithoutItemMetaInput
  update: UserTrackUpdateWithoutItemMetaDataInput
  upsert: UserTrackUpsertWithoutItemMetaInput
  delete: Boolean
  disconnect: Boolean
  connect: UserTrackWhereUniqueInput
}

input UserTrackUpdateOneWithoutReviewsInput {
  create: UserTrackCreateWithoutReviewsInput
  update: UserTrackUpdateWithoutReviewsDataInput
  upsert: UserTrackUpsertWithoutReviewsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserTrackWhereUniqueInput
}

input UserTrackUpdateWithoutFilesDataInput {
  oldId: String
  user: UserUpdateOneWithoutUserTracksInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: UserTrackMetaUpdateManyWithoutUserTrackInput
  reviews: ReviewUpdateManyWithoutUserTrackInput
}

input UserTrackUpdateWithoutItemMetaDataInput {
  oldId: String
  user: UserUpdateOneWithoutUserTracksInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  reviews: ReviewUpdateManyWithoutUserTrackInput
  files: FileUpdateManyWithoutUserTrackInput
}

input UserTrackUpdateWithoutReviewsDataInput {
  oldId: String
  user: UserUpdateOneWithoutUserTracksInput
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: UserTrackMetaUpdateManyWithoutUserTrackInput
  files: FileUpdateManyWithoutUserTrackInput
}

input UserTrackUpdateWithoutUserDataInput {
  oldId: String
  itemType: String
  itemStatus: String
  itemUrlSegment: String
  itemMimeType: String
  itemName: String
  itemContent: String
  itemDeleted: Boolean
  itemMeta: UserTrackMetaUpdateManyWithoutUserTrackInput
  reviews: ReviewUpdateManyWithoutUserTrackInput
  files: FileUpdateManyWithoutUserTrackInput
}

input UserTrackUpdateWithWhereUniqueWithoutUserInput {
  where: UserTrackWhereUniqueInput!
  data: UserTrackUpdateWithoutUserDataInput!
}

input UserTrackUpsertWithoutFilesInput {
  update: UserTrackUpdateWithoutFilesDataInput!
  create: UserTrackCreateWithoutFilesInput!
}

input UserTrackUpsertWithoutItemMetaInput {
  update: UserTrackUpdateWithoutItemMetaDataInput!
  create: UserTrackCreateWithoutItemMetaInput!
}

input UserTrackUpsertWithoutReviewsInput {
  update: UserTrackUpdateWithoutReviewsDataInput!
  create: UserTrackCreateWithoutReviewsInput!
}

input UserTrackUpsertWithWhereUniqueWithoutUserInput {
  where: UserTrackWhereUniqueInput!
  update: UserTrackUpdateWithoutUserDataInput!
  create: UserTrackCreateWithoutUserInput!
}

input UserTrackWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: String
  oldId_not: String
  oldId_in: [String!]
  oldId_not_in: [String!]
  oldId_lt: String
  oldId_lte: String
  oldId_gt: String
  oldId_gte: String
  oldId_contains: String
  oldId_not_contains: String
  oldId_starts_with: String
  oldId_not_starts_with: String
  oldId_ends_with: String
  oldId_not_ends_with: String
  user: UserWhereInput
  itemType: String
  itemType_not: String
  itemType_in: [String!]
  itemType_not_in: [String!]
  itemType_lt: String
  itemType_lte: String
  itemType_gt: String
  itemType_gte: String
  itemType_contains: String
  itemType_not_contains: String
  itemType_starts_with: String
  itemType_not_starts_with: String
  itemType_ends_with: String
  itemType_not_ends_with: String
  itemStatus: String
  itemStatus_not: String
  itemStatus_in: [String!]
  itemStatus_not_in: [String!]
  itemStatus_lt: String
  itemStatus_lte: String
  itemStatus_gt: String
  itemStatus_gte: String
  itemStatus_contains: String
  itemStatus_not_contains: String
  itemStatus_starts_with: String
  itemStatus_not_starts_with: String
  itemStatus_ends_with: String
  itemStatus_not_ends_with: String
  itemUrlSegment: String
  itemUrlSegment_not: String
  itemUrlSegment_in: [String!]
  itemUrlSegment_not_in: [String!]
  itemUrlSegment_lt: String
  itemUrlSegment_lte: String
  itemUrlSegment_gt: String
  itemUrlSegment_gte: String
  itemUrlSegment_contains: String
  itemUrlSegment_not_contains: String
  itemUrlSegment_starts_with: String
  itemUrlSegment_not_starts_with: String
  itemUrlSegment_ends_with: String
  itemUrlSegment_not_ends_with: String
  itemMimeType: String
  itemMimeType_not: String
  itemMimeType_in: [String!]
  itemMimeType_not_in: [String!]
  itemMimeType_lt: String
  itemMimeType_lte: String
  itemMimeType_gt: String
  itemMimeType_gte: String
  itemMimeType_contains: String
  itemMimeType_not_contains: String
  itemMimeType_starts_with: String
  itemMimeType_not_starts_with: String
  itemMimeType_ends_with: String
  itemMimeType_not_ends_with: String
  itemName: String
  itemName_not: String
  itemName_in: [String!]
  itemName_not_in: [String!]
  itemName_lt: String
  itemName_lte: String
  itemName_gt: String
  itemName_gte: String
  itemName_contains: String
  itemName_not_contains: String
  itemName_starts_with: String
  itemName_not_starts_with: String
  itemName_ends_with: String
  itemName_not_ends_with: String
  itemContent: String
  itemContent_not: String
  itemContent_in: [String!]
  itemContent_not_in: [String!]
  itemContent_lt: String
  itemContent_lte: String
  itemContent_gt: String
  itemContent_gte: String
  itemContent_contains: String
  itemContent_not_contains: String
  itemContent_starts_with: String
  itemContent_not_starts_with: String
  itemContent_ends_with: String
  itemContent_not_ends_with: String
  itemDeleted: Boolean
  itemDeleted_not: Boolean
  itemMeta_every: UserTrackMetaWhereInput
  itemMeta_some: UserTrackMetaWhereInput
  itemMeta_none: UserTrackMetaWhereInput
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  files_every: FileWhereInput
  files_some: FileWhereInput
  files_none: FileWhereInput
  AND: [UserTrackWhereInput!]
  OR: [UserTrackWhereInput!]
  NOT: [UserTrackWhereInput!]
}

input UserTrackWhereUniqueInput {
  id: ID
  oldId: String
}

input UserUpdateInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userMeta: UserMetaUpdateManyWithoutUserInput
  userTracks: UserTrackUpdateManyWithoutUserInput
  userFeedbacks: UserFeedbackUpdateManyWithoutUserInput
  profilePages: ProfilePageUpdateManyWithoutUserInput
  blogPosts: BlogPostUpdateManyWithoutUserInput
  reviews: ReviewUpdateManyWithoutUserInput
  files: FileUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
}

input UserUpdateOneWithoutBlogPostsInput {
  create: UserCreateWithoutBlogPostsInput
  update: UserUpdateWithoutBlogPostsDataInput
  upsert: UserUpsertWithoutBlogPostsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutFilesInput {
  create: UserCreateWithoutFilesInput
  update: UserUpdateWithoutFilesDataInput
  upsert: UserUpsertWithoutFilesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutProfilePagesInput {
  create: UserCreateWithoutProfilePagesInput
  update: UserUpdateWithoutProfilePagesDataInput
  upsert: UserUpsertWithoutProfilePagesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  update: UserUpdateWithoutReviewsDataInput
  upsert: UserUpsertWithoutReviewsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutUserFeedbacksInput {
  create: UserCreateWithoutUserFeedbacksInput
  update: UserUpdateWithoutUserFeedbacksDataInput
  upsert: UserUpsertWithoutUserFeedbacksInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutUserMetaInput {
  create: UserCreateWithoutUserMetaInput
  update: UserUpdateWithoutUserMetaDataInput
  upsert: UserUpsertWithoutUserMetaInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutUserTracksInput {
  create: UserCreateWithoutUserTracksInput
  update: UserUpdateWithoutUserTracksDataInput
  upsert: UserUpsertWithoutUserTracksInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBlogPostsDataInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userMeta: UserMetaUpdateManyWithoutUserInput
  userTracks: UserTrackUpdateManyWithoutUserInput
  userFeedbacks: UserFeedbackUpdateManyWithoutUserInput
  profilePages: ProfilePageUpdateManyWithoutUserInput
  reviews: ReviewUpdateManyWithoutUserInput
  files: FileUpdateManyWithoutUserInput
}

input UserUpdateWithoutFilesDataInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userMeta: UserMetaUpdateManyWithoutUserInput
  userTracks: UserTrackUpdateManyWithoutUserInput
  userFeedbacks: UserFeedbackUpdateManyWithoutUserInput
  profilePages: ProfilePageUpdateManyWithoutUserInput
  blogPosts: BlogPostUpdateManyWithoutUserInput
  reviews: ReviewUpdateManyWithoutUserInput
}

input UserUpdateWithoutProfilePagesDataInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userMeta: UserMetaUpdateManyWithoutUserInput
  userTracks: UserTrackUpdateManyWithoutUserInput
  userFeedbacks: UserFeedbackUpdateManyWithoutUserInput
  blogPosts: BlogPostUpdateManyWithoutUserInput
  reviews: ReviewUpdateManyWithoutUserInput
  files: FileUpdateManyWithoutUserInput
}

input UserUpdateWithoutReviewsDataInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userMeta: UserMetaUpdateManyWithoutUserInput
  userTracks: UserTrackUpdateManyWithoutUserInput
  userFeedbacks: UserFeedbackUpdateManyWithoutUserInput
  profilePages: ProfilePageUpdateManyWithoutUserInput
  blogPosts: BlogPostUpdateManyWithoutUserInput
  files: FileUpdateManyWithoutUserInput
}

input UserUpdateWithoutUserFeedbacksDataInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userMeta: UserMetaUpdateManyWithoutUserInput
  userTracks: UserTrackUpdateManyWithoutUserInput
  profilePages: ProfilePageUpdateManyWithoutUserInput
  blogPosts: BlogPostUpdateManyWithoutUserInput
  reviews: ReviewUpdateManyWithoutUserInput
  files: FileUpdateManyWithoutUserInput
}

input UserUpdateWithoutUserMetaDataInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userTracks: UserTrackUpdateManyWithoutUserInput
  userFeedbacks: UserFeedbackUpdateManyWithoutUserInput
  profilePages: ProfilePageUpdateManyWithoutUserInput
  blogPosts: BlogPostUpdateManyWithoutUserInput
  reviews: ReviewUpdateManyWithoutUserInput
  files: FileUpdateManyWithoutUserInput
}

input UserUpdateWithoutUserTracksDataInput {
  oldId: ID
  userType: Int
  userEmail: String
  userPassword: String
  publicHash: String
  privateHash: String
  confirmHash: String
  forgotHash: String
  userConfirmed: Int
  userDeleted: Boolean
  userMeta: UserMetaUpdateManyWithoutUserInput
  userFeedbacks: UserFeedbackUpdateManyWithoutUserInput
  profilePages: ProfilePageUpdateManyWithoutUserInput
  blogPosts: BlogPostUpdateManyWithoutUserInput
  reviews: ReviewUpdateManyWithoutUserInput
  files: FileUpdateManyWithoutUserInput
}

input UserUpsertWithoutBlogPostsInput {
  update: UserUpdateWithoutBlogPostsDataInput!
  create: UserCreateWithoutBlogPostsInput!
}

input UserUpsertWithoutFilesInput {
  update: UserUpdateWithoutFilesDataInput!
  create: UserCreateWithoutFilesInput!
}

input UserUpsertWithoutProfilePagesInput {
  update: UserUpdateWithoutProfilePagesDataInput!
  create: UserCreateWithoutProfilePagesInput!
}

input UserUpsertWithoutReviewsInput {
  update: UserUpdateWithoutReviewsDataInput!
  create: UserCreateWithoutReviewsInput!
}

input UserUpsertWithoutUserFeedbacksInput {
  update: UserUpdateWithoutUserFeedbacksDataInput!
  create: UserCreateWithoutUserFeedbacksInput!
}

input UserUpsertWithoutUserMetaInput {
  update: UserUpdateWithoutUserMetaDataInput!
  create: UserCreateWithoutUserMetaInput!
}

input UserUpsertWithoutUserTracksInput {
  update: UserUpdateWithoutUserTracksDataInput!
  create: UserCreateWithoutUserTracksInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: ID
  oldId_not: ID
  oldId_in: [ID!]
  oldId_not_in: [ID!]
  oldId_lt: ID
  oldId_lte: ID
  oldId_gt: ID
  oldId_gte: ID
  oldId_contains: ID
  oldId_not_contains: ID
  oldId_starts_with: ID
  oldId_not_starts_with: ID
  oldId_ends_with: ID
  oldId_not_ends_with: ID
  userType: Int
  userType_not: Int
  userType_in: [Int!]
  userType_not_in: [Int!]
  userType_lt: Int
  userType_lte: Int
  userType_gt: Int
  userType_gte: Int
  userEmail: String
  userEmail_not: String
  userEmail_in: [String!]
  userEmail_not_in: [String!]
  userEmail_lt: String
  userEmail_lte: String
  userEmail_gt: String
  userEmail_gte: String
  userEmail_contains: String
  userEmail_not_contains: String
  userEmail_starts_with: String
  userEmail_not_starts_with: String
  userEmail_ends_with: String
  userEmail_not_ends_with: String
  userPassword: String
  userPassword_not: String
  userPassword_in: [String!]
  userPassword_not_in: [String!]
  userPassword_lt: String
  userPassword_lte: String
  userPassword_gt: String
  userPassword_gte: String
  userPassword_contains: String
  userPassword_not_contains: String
  userPassword_starts_with: String
  userPassword_not_starts_with: String
  userPassword_ends_with: String
  userPassword_not_ends_with: String
  publicHash: String
  publicHash_not: String
  publicHash_in: [String!]
  publicHash_not_in: [String!]
  publicHash_lt: String
  publicHash_lte: String
  publicHash_gt: String
  publicHash_gte: String
  publicHash_contains: String
  publicHash_not_contains: String
  publicHash_starts_with: String
  publicHash_not_starts_with: String
  publicHash_ends_with: String
  publicHash_not_ends_with: String
  privateHash: String
  privateHash_not: String
  privateHash_in: [String!]
  privateHash_not_in: [String!]
  privateHash_lt: String
  privateHash_lte: String
  privateHash_gt: String
  privateHash_gte: String
  privateHash_contains: String
  privateHash_not_contains: String
  privateHash_starts_with: String
  privateHash_not_starts_with: String
  privateHash_ends_with: String
  privateHash_not_ends_with: String
  confirmHash: String
  confirmHash_not: String
  confirmHash_in: [String!]
  confirmHash_not_in: [String!]
  confirmHash_lt: String
  confirmHash_lte: String
  confirmHash_gt: String
  confirmHash_gte: String
  confirmHash_contains: String
  confirmHash_not_contains: String
  confirmHash_starts_with: String
  confirmHash_not_starts_with: String
  confirmHash_ends_with: String
  confirmHash_not_ends_with: String
  forgotHash: String
  forgotHash_not: String
  forgotHash_in: [String!]
  forgotHash_not_in: [String!]
  forgotHash_lt: String
  forgotHash_lte: String
  forgotHash_gt: String
  forgotHash_gte: String
  forgotHash_contains: String
  forgotHash_not_contains: String
  forgotHash_starts_with: String
  forgotHash_not_starts_with: String
  forgotHash_ends_with: String
  forgotHash_not_ends_with: String
  userConfirmed: Int
  userConfirmed_not: Int
  userConfirmed_in: [Int!]
  userConfirmed_not_in: [Int!]
  userConfirmed_lt: Int
  userConfirmed_lte: Int
  userConfirmed_gt: Int
  userConfirmed_gte: Int
  userDeleted: Boolean
  userDeleted_not: Boolean
  userMeta_every: UserMetaWhereInput
  userMeta_some: UserMetaWhereInput
  userMeta_none: UserMetaWhereInput
  userTracks_every: UserTrackWhereInput
  userTracks_some: UserTrackWhereInput
  userTracks_none: UserTrackWhereInput
  userFeedbacks_every: UserFeedbackWhereInput
  userFeedbacks_some: UserFeedbackWhereInput
  userFeedbacks_none: UserFeedbackWhereInput
  profilePages_every: ProfilePageWhereInput
  profilePages_some: ProfilePageWhereInput
  profilePages_none: ProfilePageWhereInput
  blogPosts_every: BlogPostWhereInput
  blogPosts_some: BlogPostWhereInput
  blogPosts_none: BlogPostWhereInput
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  files_every: FileWhereInput
  files_some: FileWhereInput
  files_none: FileWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  oldId: ID
  userEmail: String
}
`