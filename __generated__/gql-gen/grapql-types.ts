export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: any;
};

export type AggregateBlogPost = {
  count: Scalars["Int"];
};

export type AggregateBlogPostMeta = {
  count: Scalars["Int"];
};

export type AggregateFile = {
  count: Scalars["Int"];
};

export type AggregateFileMeta = {
  count: Scalars["Int"];
};

export type AggregateProfilePage = {
  count: Scalars["Int"];
};

export type AggregateProfilePageMeta = {
  count: Scalars["Int"];
};

export type AggregateReview = {
  count: Scalars["Int"];
};

export type AggregateReviewMeta = {
  count: Scalars["Int"];
};

export type AggregateUser = {
  count: Scalars["Int"];
};

export type AggregateUserFeedback = {
  count: Scalars["Int"];
};

export type AggregateUserFeedbackMeta = {
  count: Scalars["Int"];
};

export type AggregateUserMeta = {
  count: Scalars["Int"];
};

export type AggregateUserTrack = {
  count: Scalars["Int"];
};

export type AggregateUserTrackMeta = {
  count: Scalars["Int"];
};

export type BatchPayload = {
  count: Scalars["Long"];
};

export type BlogPost = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<Array<BlogPostMeta>>;
};

export type BlogPostItemMetaArgs = {
  where?: Maybe<BlogPostMetaWhereInput>;
  orderBy?: Maybe<BlogPostMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type BlogPostConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<BlogPostEdge>>;
  aggregate: AggregateBlogPost;
};

export type BlogPostCreateInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutBlogPostsInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<BlogPostMetaCreateManyWithoutBlogPostInput>;
};

export type BlogPostCreateManyWithoutUserInput = {
  create?: Maybe<Array<BlogPostCreateWithoutUserInput>>;
  connect?: Maybe<Array<BlogPostWhereUniqueInput>>;
};

export type BlogPostCreateOneWithoutItemMetaInput = {
  create?: Maybe<BlogPostCreateWithoutItemMetaInput>;
  connect?: Maybe<BlogPostWhereUniqueInput>;
};

export type BlogPostCreateWithoutItemMetaInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutBlogPostsInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type BlogPostCreateWithoutUserInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<BlogPostMetaCreateManyWithoutBlogPostInput>;
};

export type BlogPostEdge = {
  node: BlogPost;
  cursor: Scalars["String"];
};

export type BlogPostMeta = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  blogPost?: Maybe<BlogPost>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type BlogPostMetaConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<BlogPostMetaEdge>>;
  aggregate: AggregateBlogPostMeta;
};

export type BlogPostMetaCreateInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  blogPost?: Maybe<BlogPostCreateOneWithoutItemMetaInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type BlogPostMetaCreateManyWithoutBlogPostInput = {
  create?: Maybe<Array<BlogPostMetaCreateWithoutBlogPostInput>>;
  connect?: Maybe<Array<BlogPostMetaWhereUniqueInput>>;
};

export type BlogPostMetaCreateWithoutBlogPostInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type BlogPostMetaEdge = {
  node: BlogPostMeta;
  cursor: Scalars["String"];
};

export enum BlogPostMetaOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  OldIdAsc = "oldId_ASC",
  OldIdDesc = "oldId_DESC",
  ItemOldIdAsc = "itemOldId_ASC",
  ItemOldIdDesc = "itemOldId_DESC",
  MetaTypeAsc = "metaType_ASC",
  MetaTypeDesc = "metaType_DESC",
  MetaNameAsc = "metaName_ASC",
  MetaNameDesc = "metaName_DESC",
  MetaValueAsc = "metaValue_ASC",
  MetaValueDesc = "metaValue_DESC",
  MetaDeletedAsc = "metaDeleted_ASC",
  MetaDeletedDesc = "metaDeleted_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type BlogPostMetaPreviousValues = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type BlogPostMetaScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  itemOldId_not?: Maybe<Scalars["String"]>;
  itemOldId_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_not_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_lt?: Maybe<Scalars["String"]>;
  itemOldId_lte?: Maybe<Scalars["String"]>;
  itemOldId_gt?: Maybe<Scalars["String"]>;
  itemOldId_gte?: Maybe<Scalars["String"]>;
  itemOldId_contains?: Maybe<Scalars["String"]>;
  itemOldId_not_contains?: Maybe<Scalars["String"]>;
  itemOldId_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_not_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_ends_with?: Maybe<Scalars["String"]>;
  itemOldId_not_ends_with?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaType_not?: Maybe<Scalars["String"]>;
  metaType_in?: Maybe<Array<Scalars["String"]>>;
  metaType_not_in?: Maybe<Array<Scalars["String"]>>;
  metaType_lt?: Maybe<Scalars["String"]>;
  metaType_lte?: Maybe<Scalars["String"]>;
  metaType_gt?: Maybe<Scalars["String"]>;
  metaType_gte?: Maybe<Scalars["String"]>;
  metaType_contains?: Maybe<Scalars["String"]>;
  metaType_not_contains?: Maybe<Scalars["String"]>;
  metaType_starts_with?: Maybe<Scalars["String"]>;
  metaType_not_starts_with?: Maybe<Scalars["String"]>;
  metaType_ends_with?: Maybe<Scalars["String"]>;
  metaType_not_ends_with?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaName_not?: Maybe<Scalars["String"]>;
  metaName_in?: Maybe<Array<Scalars["String"]>>;
  metaName_not_in?: Maybe<Array<Scalars["String"]>>;
  metaName_lt?: Maybe<Scalars["String"]>;
  metaName_lte?: Maybe<Scalars["String"]>;
  metaName_gt?: Maybe<Scalars["String"]>;
  metaName_gte?: Maybe<Scalars["String"]>;
  metaName_contains?: Maybe<Scalars["String"]>;
  metaName_not_contains?: Maybe<Scalars["String"]>;
  metaName_starts_with?: Maybe<Scalars["String"]>;
  metaName_not_starts_with?: Maybe<Scalars["String"]>;
  metaName_ends_with?: Maybe<Scalars["String"]>;
  metaName_not_ends_with?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaValue_not?: Maybe<Scalars["String"]>;
  metaValue_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_not_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_lt?: Maybe<Scalars["String"]>;
  metaValue_lte?: Maybe<Scalars["String"]>;
  metaValue_gt?: Maybe<Scalars["String"]>;
  metaValue_gte?: Maybe<Scalars["String"]>;
  metaValue_contains?: Maybe<Scalars["String"]>;
  metaValue_not_contains?: Maybe<Scalars["String"]>;
  metaValue_starts_with?: Maybe<Scalars["String"]>;
  metaValue_not_starts_with?: Maybe<Scalars["String"]>;
  metaValue_ends_with?: Maybe<Scalars["String"]>;
  metaValue_not_ends_with?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<BlogPostMetaScalarWhereInput>>;
  OR?: Maybe<Array<BlogPostMetaScalarWhereInput>>;
  NOT?: Maybe<Array<BlogPostMetaScalarWhereInput>>;
};

export type BlogPostMetaSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<BlogPostMeta>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<BlogPostMetaPreviousValues>;
};

export type BlogPostMetaSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<BlogPostMetaWhereInput>;
  AND?: Maybe<Array<BlogPostMetaSubscriptionWhereInput>>;
  OR?: Maybe<Array<BlogPostMetaSubscriptionWhereInput>>;
  NOT?: Maybe<Array<BlogPostMetaSubscriptionWhereInput>>;
};

export type BlogPostMetaUpdateInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  blogPost?: Maybe<BlogPostUpdateOneWithoutItemMetaInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type BlogPostMetaUpdateManyDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type BlogPostMetaUpdateManyMutationInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type BlogPostMetaUpdateManyWithoutBlogPostInput = {
  create?: Maybe<Array<BlogPostMetaCreateWithoutBlogPostInput>>;
  delete?: Maybe<Array<BlogPostMetaWhereUniqueInput>>;
  connect?: Maybe<Array<BlogPostMetaWhereUniqueInput>>;
  disconnect?: Maybe<Array<BlogPostMetaWhereUniqueInput>>;
  update?: Maybe<Array<BlogPostMetaUpdateWithWhereUniqueWithoutBlogPostInput>>;
  upsert?: Maybe<Array<BlogPostMetaUpsertWithWhereUniqueWithoutBlogPostInput>>;
  deleteMany?: Maybe<Array<BlogPostMetaScalarWhereInput>>;
  updateMany?: Maybe<Array<BlogPostMetaUpdateManyWithWhereNestedInput>>;
};

export type BlogPostMetaUpdateManyWithWhereNestedInput = {
  where: BlogPostMetaScalarWhereInput;
  data: BlogPostMetaUpdateManyDataInput;
};

export type BlogPostMetaUpdateWithoutBlogPostDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type BlogPostMetaUpdateWithWhereUniqueWithoutBlogPostInput = {
  where: BlogPostMetaWhereUniqueInput;
  data: BlogPostMetaUpdateWithoutBlogPostDataInput;
};

export type BlogPostMetaUpsertWithWhereUniqueWithoutBlogPostInput = {
  where: BlogPostMetaWhereUniqueInput;
  update: BlogPostMetaUpdateWithoutBlogPostDataInput;
  create: BlogPostMetaCreateWithoutBlogPostInput;
};

export type BlogPostMetaWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  itemOldId_not?: Maybe<Scalars["String"]>;
  itemOldId_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_not_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_lt?: Maybe<Scalars["String"]>;
  itemOldId_lte?: Maybe<Scalars["String"]>;
  itemOldId_gt?: Maybe<Scalars["String"]>;
  itemOldId_gte?: Maybe<Scalars["String"]>;
  itemOldId_contains?: Maybe<Scalars["String"]>;
  itemOldId_not_contains?: Maybe<Scalars["String"]>;
  itemOldId_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_not_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_ends_with?: Maybe<Scalars["String"]>;
  itemOldId_not_ends_with?: Maybe<Scalars["String"]>;
  blogPost?: Maybe<BlogPostWhereInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaType_not?: Maybe<Scalars["String"]>;
  metaType_in?: Maybe<Array<Scalars["String"]>>;
  metaType_not_in?: Maybe<Array<Scalars["String"]>>;
  metaType_lt?: Maybe<Scalars["String"]>;
  metaType_lte?: Maybe<Scalars["String"]>;
  metaType_gt?: Maybe<Scalars["String"]>;
  metaType_gte?: Maybe<Scalars["String"]>;
  metaType_contains?: Maybe<Scalars["String"]>;
  metaType_not_contains?: Maybe<Scalars["String"]>;
  metaType_starts_with?: Maybe<Scalars["String"]>;
  metaType_not_starts_with?: Maybe<Scalars["String"]>;
  metaType_ends_with?: Maybe<Scalars["String"]>;
  metaType_not_ends_with?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaName_not?: Maybe<Scalars["String"]>;
  metaName_in?: Maybe<Array<Scalars["String"]>>;
  metaName_not_in?: Maybe<Array<Scalars["String"]>>;
  metaName_lt?: Maybe<Scalars["String"]>;
  metaName_lte?: Maybe<Scalars["String"]>;
  metaName_gt?: Maybe<Scalars["String"]>;
  metaName_gte?: Maybe<Scalars["String"]>;
  metaName_contains?: Maybe<Scalars["String"]>;
  metaName_not_contains?: Maybe<Scalars["String"]>;
  metaName_starts_with?: Maybe<Scalars["String"]>;
  metaName_not_starts_with?: Maybe<Scalars["String"]>;
  metaName_ends_with?: Maybe<Scalars["String"]>;
  metaName_not_ends_with?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaValue_not?: Maybe<Scalars["String"]>;
  metaValue_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_not_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_lt?: Maybe<Scalars["String"]>;
  metaValue_lte?: Maybe<Scalars["String"]>;
  metaValue_gt?: Maybe<Scalars["String"]>;
  metaValue_gte?: Maybe<Scalars["String"]>;
  metaValue_contains?: Maybe<Scalars["String"]>;
  metaValue_not_contains?: Maybe<Scalars["String"]>;
  metaValue_starts_with?: Maybe<Scalars["String"]>;
  metaValue_not_starts_with?: Maybe<Scalars["String"]>;
  metaValue_ends_with?: Maybe<Scalars["String"]>;
  metaValue_not_ends_with?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<BlogPostMetaWhereInput>>;
  OR?: Maybe<Array<BlogPostMetaWhereInput>>;
  NOT?: Maybe<Array<BlogPostMetaWhereInput>>;
};

export type BlogPostMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
};

export enum BlogPostOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  OldIdAsc = "oldId_ASC",
  OldIdDesc = "oldId_DESC",
  ItemTypeAsc = "itemType_ASC",
  ItemTypeDesc = "itemType_DESC",
  ItemStatusAsc = "itemStatus_ASC",
  ItemStatusDesc = "itemStatus_DESC",
  ItemUrlSegmentAsc = "itemUrlSegment_ASC",
  ItemUrlSegmentDesc = "itemUrlSegment_DESC",
  ItemMimeTypeAsc = "itemMimeType_ASC",
  ItemMimeTypeDesc = "itemMimeType_DESC",
  ItemNameAsc = "itemName_ASC",
  ItemNameDesc = "itemName_DESC",
  ItemContentAsc = "itemContent_ASC",
  ItemContentDesc = "itemContent_DESC",
  ItemDeletedAsc = "itemDeleted_ASC",
  ItemDeletedDesc = "itemDeleted_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type BlogPostPreviousValues = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type BlogPostScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemType_not?: Maybe<Scalars["String"]>;
  itemType_in?: Maybe<Array<Scalars["String"]>>;
  itemType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemType_lt?: Maybe<Scalars["String"]>;
  itemType_lte?: Maybe<Scalars["String"]>;
  itemType_gt?: Maybe<Scalars["String"]>;
  itemType_gte?: Maybe<Scalars["String"]>;
  itemType_contains?: Maybe<Scalars["String"]>;
  itemType_not_contains?: Maybe<Scalars["String"]>;
  itemType_starts_with?: Maybe<Scalars["String"]>;
  itemType_not_starts_with?: Maybe<Scalars["String"]>;
  itemType_ends_with?: Maybe<Scalars["String"]>;
  itemType_not_ends_with?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemStatus_not?: Maybe<Scalars["String"]>;
  itemStatus_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_not_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_lt?: Maybe<Scalars["String"]>;
  itemStatus_lte?: Maybe<Scalars["String"]>;
  itemStatus_gt?: Maybe<Scalars["String"]>;
  itemStatus_gte?: Maybe<Scalars["String"]>;
  itemStatus_contains?: Maybe<Scalars["String"]>;
  itemStatus_not_contains?: Maybe<Scalars["String"]>;
  itemStatus_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_not_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_ends_with?: Maybe<Scalars["String"]>;
  itemStatus_not_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemUrlSegment_not?: Maybe<Scalars["String"]>;
  itemUrlSegment_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_not_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_lt?: Maybe<Scalars["String"]>;
  itemUrlSegment_lte?: Maybe<Scalars["String"]>;
  itemUrlSegment_gt?: Maybe<Scalars["String"]>;
  itemUrlSegment_gte?: Maybe<Scalars["String"]>;
  itemUrlSegment_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemMimeType_not?: Maybe<Scalars["String"]>;
  itemMimeType_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_lt?: Maybe<Scalars["String"]>;
  itemMimeType_lte?: Maybe<Scalars["String"]>;
  itemMimeType_gt?: Maybe<Scalars["String"]>;
  itemMimeType_gte?: Maybe<Scalars["String"]>;
  itemMimeType_contains?: Maybe<Scalars["String"]>;
  itemMimeType_not_contains?: Maybe<Scalars["String"]>;
  itemMimeType_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_ends_with?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemName_not?: Maybe<Scalars["String"]>;
  itemName_in?: Maybe<Array<Scalars["String"]>>;
  itemName_not_in?: Maybe<Array<Scalars["String"]>>;
  itemName_lt?: Maybe<Scalars["String"]>;
  itemName_lte?: Maybe<Scalars["String"]>;
  itemName_gt?: Maybe<Scalars["String"]>;
  itemName_gte?: Maybe<Scalars["String"]>;
  itemName_contains?: Maybe<Scalars["String"]>;
  itemName_not_contains?: Maybe<Scalars["String"]>;
  itemName_starts_with?: Maybe<Scalars["String"]>;
  itemName_not_starts_with?: Maybe<Scalars["String"]>;
  itemName_ends_with?: Maybe<Scalars["String"]>;
  itemName_not_ends_with?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemContent_not?: Maybe<Scalars["String"]>;
  itemContent_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_not_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_lt?: Maybe<Scalars["String"]>;
  itemContent_lte?: Maybe<Scalars["String"]>;
  itemContent_gt?: Maybe<Scalars["String"]>;
  itemContent_gte?: Maybe<Scalars["String"]>;
  itemContent_contains?: Maybe<Scalars["String"]>;
  itemContent_not_contains?: Maybe<Scalars["String"]>;
  itemContent_starts_with?: Maybe<Scalars["String"]>;
  itemContent_not_starts_with?: Maybe<Scalars["String"]>;
  itemContent_ends_with?: Maybe<Scalars["String"]>;
  itemContent_not_ends_with?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<BlogPostScalarWhereInput>>;
  OR?: Maybe<Array<BlogPostScalarWhereInput>>;
  NOT?: Maybe<Array<BlogPostScalarWhereInput>>;
};

export type BlogPostSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<BlogPost>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<BlogPostPreviousValues>;
};

export type BlogPostSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<BlogPostWhereInput>;
  AND?: Maybe<Array<BlogPostSubscriptionWhereInput>>;
  OR?: Maybe<Array<BlogPostSubscriptionWhereInput>>;
  NOT?: Maybe<Array<BlogPostSubscriptionWhereInput>>;
};

export type BlogPostUpdateInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutBlogPostsInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<BlogPostMetaUpdateManyWithoutBlogPostInput>;
};

export type BlogPostUpdateManyDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type BlogPostUpdateManyMutationInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type BlogPostUpdateManyWithoutUserInput = {
  create?: Maybe<Array<BlogPostCreateWithoutUserInput>>;
  delete?: Maybe<Array<BlogPostWhereUniqueInput>>;
  connect?: Maybe<Array<BlogPostWhereUniqueInput>>;
  disconnect?: Maybe<Array<BlogPostWhereUniqueInput>>;
  update?: Maybe<Array<BlogPostUpdateWithWhereUniqueWithoutUserInput>>;
  upsert?: Maybe<Array<BlogPostUpsertWithWhereUniqueWithoutUserInput>>;
  deleteMany?: Maybe<Array<BlogPostScalarWhereInput>>;
  updateMany?: Maybe<Array<BlogPostUpdateManyWithWhereNestedInput>>;
};

export type BlogPostUpdateManyWithWhereNestedInput = {
  where: BlogPostScalarWhereInput;
  data: BlogPostUpdateManyDataInput;
};

export type BlogPostUpdateOneWithoutItemMetaInput = {
  create?: Maybe<BlogPostCreateWithoutItemMetaInput>;
  update?: Maybe<BlogPostUpdateWithoutItemMetaDataInput>;
  upsert?: Maybe<BlogPostUpsertWithoutItemMetaInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<BlogPostWhereUniqueInput>;
};

export type BlogPostUpdateWithoutItemMetaDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutBlogPostsInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type BlogPostUpdateWithoutUserDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<BlogPostMetaUpdateManyWithoutBlogPostInput>;
};

export type BlogPostUpdateWithWhereUniqueWithoutUserInput = {
  where: BlogPostWhereUniqueInput;
  data: BlogPostUpdateWithoutUserDataInput;
};

export type BlogPostUpsertWithoutItemMetaInput = {
  update: BlogPostUpdateWithoutItemMetaDataInput;
  create: BlogPostCreateWithoutItemMetaInput;
};

export type BlogPostUpsertWithWhereUniqueWithoutUserInput = {
  where: BlogPostWhereUniqueInput;
  update: BlogPostUpdateWithoutUserDataInput;
  create: BlogPostCreateWithoutUserInput;
};

export type BlogPostWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  user?: Maybe<UserWhereInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemType_not?: Maybe<Scalars["String"]>;
  itemType_in?: Maybe<Array<Scalars["String"]>>;
  itemType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemType_lt?: Maybe<Scalars["String"]>;
  itemType_lte?: Maybe<Scalars["String"]>;
  itemType_gt?: Maybe<Scalars["String"]>;
  itemType_gte?: Maybe<Scalars["String"]>;
  itemType_contains?: Maybe<Scalars["String"]>;
  itemType_not_contains?: Maybe<Scalars["String"]>;
  itemType_starts_with?: Maybe<Scalars["String"]>;
  itemType_not_starts_with?: Maybe<Scalars["String"]>;
  itemType_ends_with?: Maybe<Scalars["String"]>;
  itemType_not_ends_with?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemStatus_not?: Maybe<Scalars["String"]>;
  itemStatus_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_not_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_lt?: Maybe<Scalars["String"]>;
  itemStatus_lte?: Maybe<Scalars["String"]>;
  itemStatus_gt?: Maybe<Scalars["String"]>;
  itemStatus_gte?: Maybe<Scalars["String"]>;
  itemStatus_contains?: Maybe<Scalars["String"]>;
  itemStatus_not_contains?: Maybe<Scalars["String"]>;
  itemStatus_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_not_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_ends_with?: Maybe<Scalars["String"]>;
  itemStatus_not_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemUrlSegment_not?: Maybe<Scalars["String"]>;
  itemUrlSegment_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_not_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_lt?: Maybe<Scalars["String"]>;
  itemUrlSegment_lte?: Maybe<Scalars["String"]>;
  itemUrlSegment_gt?: Maybe<Scalars["String"]>;
  itemUrlSegment_gte?: Maybe<Scalars["String"]>;
  itemUrlSegment_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemMimeType_not?: Maybe<Scalars["String"]>;
  itemMimeType_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_lt?: Maybe<Scalars["String"]>;
  itemMimeType_lte?: Maybe<Scalars["String"]>;
  itemMimeType_gt?: Maybe<Scalars["String"]>;
  itemMimeType_gte?: Maybe<Scalars["String"]>;
  itemMimeType_contains?: Maybe<Scalars["String"]>;
  itemMimeType_not_contains?: Maybe<Scalars["String"]>;
  itemMimeType_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_ends_with?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemName_not?: Maybe<Scalars["String"]>;
  itemName_in?: Maybe<Array<Scalars["String"]>>;
  itemName_not_in?: Maybe<Array<Scalars["String"]>>;
  itemName_lt?: Maybe<Scalars["String"]>;
  itemName_lte?: Maybe<Scalars["String"]>;
  itemName_gt?: Maybe<Scalars["String"]>;
  itemName_gte?: Maybe<Scalars["String"]>;
  itemName_contains?: Maybe<Scalars["String"]>;
  itemName_not_contains?: Maybe<Scalars["String"]>;
  itemName_starts_with?: Maybe<Scalars["String"]>;
  itemName_not_starts_with?: Maybe<Scalars["String"]>;
  itemName_ends_with?: Maybe<Scalars["String"]>;
  itemName_not_ends_with?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemContent_not?: Maybe<Scalars["String"]>;
  itemContent_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_not_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_lt?: Maybe<Scalars["String"]>;
  itemContent_lte?: Maybe<Scalars["String"]>;
  itemContent_gt?: Maybe<Scalars["String"]>;
  itemContent_gte?: Maybe<Scalars["String"]>;
  itemContent_contains?: Maybe<Scalars["String"]>;
  itemContent_not_contains?: Maybe<Scalars["String"]>;
  itemContent_starts_with?: Maybe<Scalars["String"]>;
  itemContent_not_starts_with?: Maybe<Scalars["String"]>;
  itemContent_ends_with?: Maybe<Scalars["String"]>;
  itemContent_not_ends_with?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemDeleted_not?: Maybe<Scalars["Boolean"]>;
  itemMeta_every?: Maybe<BlogPostMetaWhereInput>;
  itemMeta_some?: Maybe<BlogPostMetaWhereInput>;
  itemMeta_none?: Maybe<BlogPostMetaWhereInput>;
  AND?: Maybe<Array<BlogPostWhereInput>>;
  OR?: Maybe<Array<BlogPostWhereInput>>;
  NOT?: Maybe<Array<BlogPostWhereInput>>;
};

export type BlogPostWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
};

export type File = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<Array<FileMeta>>;
  userTrack?: Maybe<UserTrack>;
};

export type FileItemMetaArgs = {
  where?: Maybe<FileMetaWhereInput>;
  orderBy?: Maybe<FileMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type FileConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<FileEdge>>;
  aggregate: AggregateFile;
};

export type FileCreateInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutFilesInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<FileMetaCreateManyWithoutFileInput>;
  userTrack?: Maybe<UserTrackCreateOneWithoutFilesInput>;
};

export type FileCreateManyWithoutUserInput = {
  create?: Maybe<Array<FileCreateWithoutUserInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type FileCreateManyWithoutUserTrackInput = {
  create?: Maybe<Array<FileCreateWithoutUserTrackInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type FileCreateOneWithoutItemMetaInput = {
  create?: Maybe<FileCreateWithoutItemMetaInput>;
  connect?: Maybe<FileWhereUniqueInput>;
};

export type FileCreateWithoutItemMetaInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutFilesInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  userTrack?: Maybe<UserTrackCreateOneWithoutFilesInput>;
};

export type FileCreateWithoutUserInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<FileMetaCreateManyWithoutFileInput>;
  userTrack?: Maybe<UserTrackCreateOneWithoutFilesInput>;
};

export type FileCreateWithoutUserTrackInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutFilesInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<FileMetaCreateManyWithoutFileInput>;
};

export type FileEdge = {
  node: File;
  cursor: Scalars["String"];
};

export type FileMeta = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  file?: Maybe<File>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type FileMetaConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<FileMetaEdge>>;
  aggregate: AggregateFileMeta;
};

export type FileMetaCreateInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  file?: Maybe<FileCreateOneWithoutItemMetaInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type FileMetaCreateManyWithoutFileInput = {
  create?: Maybe<Array<FileMetaCreateWithoutFileInput>>;
  connect?: Maybe<Array<FileMetaWhereUniqueInput>>;
};

export type FileMetaCreateWithoutFileInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type FileMetaEdge = {
  node: FileMeta;
  cursor: Scalars["String"];
};

export enum FileMetaOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  OldIdAsc = "oldId_ASC",
  OldIdDesc = "oldId_DESC",
  ItemOldIdAsc = "itemOldId_ASC",
  ItemOldIdDesc = "itemOldId_DESC",
  MetaTypeAsc = "metaType_ASC",
  MetaTypeDesc = "metaType_DESC",
  MetaNameAsc = "metaName_ASC",
  MetaNameDesc = "metaName_DESC",
  MetaValueAsc = "metaValue_ASC",
  MetaValueDesc = "metaValue_DESC",
  MetaDeletedAsc = "metaDeleted_ASC",
  MetaDeletedDesc = "metaDeleted_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type FileMetaPreviousValues = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type FileMetaScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  itemOldId_not?: Maybe<Scalars["String"]>;
  itemOldId_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_not_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_lt?: Maybe<Scalars["String"]>;
  itemOldId_lte?: Maybe<Scalars["String"]>;
  itemOldId_gt?: Maybe<Scalars["String"]>;
  itemOldId_gte?: Maybe<Scalars["String"]>;
  itemOldId_contains?: Maybe<Scalars["String"]>;
  itemOldId_not_contains?: Maybe<Scalars["String"]>;
  itemOldId_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_not_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_ends_with?: Maybe<Scalars["String"]>;
  itemOldId_not_ends_with?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaType_not?: Maybe<Scalars["String"]>;
  metaType_in?: Maybe<Array<Scalars["String"]>>;
  metaType_not_in?: Maybe<Array<Scalars["String"]>>;
  metaType_lt?: Maybe<Scalars["String"]>;
  metaType_lte?: Maybe<Scalars["String"]>;
  metaType_gt?: Maybe<Scalars["String"]>;
  metaType_gte?: Maybe<Scalars["String"]>;
  metaType_contains?: Maybe<Scalars["String"]>;
  metaType_not_contains?: Maybe<Scalars["String"]>;
  metaType_starts_with?: Maybe<Scalars["String"]>;
  metaType_not_starts_with?: Maybe<Scalars["String"]>;
  metaType_ends_with?: Maybe<Scalars["String"]>;
  metaType_not_ends_with?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaName_not?: Maybe<Scalars["String"]>;
  metaName_in?: Maybe<Array<Scalars["String"]>>;
  metaName_not_in?: Maybe<Array<Scalars["String"]>>;
  metaName_lt?: Maybe<Scalars["String"]>;
  metaName_lte?: Maybe<Scalars["String"]>;
  metaName_gt?: Maybe<Scalars["String"]>;
  metaName_gte?: Maybe<Scalars["String"]>;
  metaName_contains?: Maybe<Scalars["String"]>;
  metaName_not_contains?: Maybe<Scalars["String"]>;
  metaName_starts_with?: Maybe<Scalars["String"]>;
  metaName_not_starts_with?: Maybe<Scalars["String"]>;
  metaName_ends_with?: Maybe<Scalars["String"]>;
  metaName_not_ends_with?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaValue_not?: Maybe<Scalars["String"]>;
  metaValue_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_not_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_lt?: Maybe<Scalars["String"]>;
  metaValue_lte?: Maybe<Scalars["String"]>;
  metaValue_gt?: Maybe<Scalars["String"]>;
  metaValue_gte?: Maybe<Scalars["String"]>;
  metaValue_contains?: Maybe<Scalars["String"]>;
  metaValue_not_contains?: Maybe<Scalars["String"]>;
  metaValue_starts_with?: Maybe<Scalars["String"]>;
  metaValue_not_starts_with?: Maybe<Scalars["String"]>;
  metaValue_ends_with?: Maybe<Scalars["String"]>;
  metaValue_not_ends_with?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<FileMetaScalarWhereInput>>;
  OR?: Maybe<Array<FileMetaScalarWhereInput>>;
  NOT?: Maybe<Array<FileMetaScalarWhereInput>>;
};

export type FileMetaSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<FileMeta>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<FileMetaPreviousValues>;
};

export type FileMetaSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<FileMetaWhereInput>;
  AND?: Maybe<Array<FileMetaSubscriptionWhereInput>>;
  OR?: Maybe<Array<FileMetaSubscriptionWhereInput>>;
  NOT?: Maybe<Array<FileMetaSubscriptionWhereInput>>;
};

export type FileMetaUpdateInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  file?: Maybe<FileUpdateOneWithoutItemMetaInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type FileMetaUpdateManyDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type FileMetaUpdateManyMutationInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type FileMetaUpdateManyWithoutFileInput = {
  create?: Maybe<Array<FileMetaCreateWithoutFileInput>>;
  delete?: Maybe<Array<FileMetaWhereUniqueInput>>;
  connect?: Maybe<Array<FileMetaWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileMetaWhereUniqueInput>>;
  update?: Maybe<Array<FileMetaUpdateWithWhereUniqueWithoutFileInput>>;
  upsert?: Maybe<Array<FileMetaUpsertWithWhereUniqueWithoutFileInput>>;
  deleteMany?: Maybe<Array<FileMetaScalarWhereInput>>;
  updateMany?: Maybe<Array<FileMetaUpdateManyWithWhereNestedInput>>;
};

export type FileMetaUpdateManyWithWhereNestedInput = {
  where: FileMetaScalarWhereInput;
  data: FileMetaUpdateManyDataInput;
};

export type FileMetaUpdateWithoutFileDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type FileMetaUpdateWithWhereUniqueWithoutFileInput = {
  where: FileMetaWhereUniqueInput;
  data: FileMetaUpdateWithoutFileDataInput;
};

export type FileMetaUpsertWithWhereUniqueWithoutFileInput = {
  where: FileMetaWhereUniqueInput;
  update: FileMetaUpdateWithoutFileDataInput;
  create: FileMetaCreateWithoutFileInput;
};

export type FileMetaWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  itemOldId_not?: Maybe<Scalars["String"]>;
  itemOldId_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_not_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_lt?: Maybe<Scalars["String"]>;
  itemOldId_lte?: Maybe<Scalars["String"]>;
  itemOldId_gt?: Maybe<Scalars["String"]>;
  itemOldId_gte?: Maybe<Scalars["String"]>;
  itemOldId_contains?: Maybe<Scalars["String"]>;
  itemOldId_not_contains?: Maybe<Scalars["String"]>;
  itemOldId_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_not_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_ends_with?: Maybe<Scalars["String"]>;
  itemOldId_not_ends_with?: Maybe<Scalars["String"]>;
  file?: Maybe<FileWhereInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaType_not?: Maybe<Scalars["String"]>;
  metaType_in?: Maybe<Array<Scalars["String"]>>;
  metaType_not_in?: Maybe<Array<Scalars["String"]>>;
  metaType_lt?: Maybe<Scalars["String"]>;
  metaType_lte?: Maybe<Scalars["String"]>;
  metaType_gt?: Maybe<Scalars["String"]>;
  metaType_gte?: Maybe<Scalars["String"]>;
  metaType_contains?: Maybe<Scalars["String"]>;
  metaType_not_contains?: Maybe<Scalars["String"]>;
  metaType_starts_with?: Maybe<Scalars["String"]>;
  metaType_not_starts_with?: Maybe<Scalars["String"]>;
  metaType_ends_with?: Maybe<Scalars["String"]>;
  metaType_not_ends_with?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaName_not?: Maybe<Scalars["String"]>;
  metaName_in?: Maybe<Array<Scalars["String"]>>;
  metaName_not_in?: Maybe<Array<Scalars["String"]>>;
  metaName_lt?: Maybe<Scalars["String"]>;
  metaName_lte?: Maybe<Scalars["String"]>;
  metaName_gt?: Maybe<Scalars["String"]>;
  metaName_gte?: Maybe<Scalars["String"]>;
  metaName_contains?: Maybe<Scalars["String"]>;
  metaName_not_contains?: Maybe<Scalars["String"]>;
  metaName_starts_with?: Maybe<Scalars["String"]>;
  metaName_not_starts_with?: Maybe<Scalars["String"]>;
  metaName_ends_with?: Maybe<Scalars["String"]>;
  metaName_not_ends_with?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaValue_not?: Maybe<Scalars["String"]>;
  metaValue_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_not_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_lt?: Maybe<Scalars["String"]>;
  metaValue_lte?: Maybe<Scalars["String"]>;
  metaValue_gt?: Maybe<Scalars["String"]>;
  metaValue_gte?: Maybe<Scalars["String"]>;
  metaValue_contains?: Maybe<Scalars["String"]>;
  metaValue_not_contains?: Maybe<Scalars["String"]>;
  metaValue_starts_with?: Maybe<Scalars["String"]>;
  metaValue_not_starts_with?: Maybe<Scalars["String"]>;
  metaValue_ends_with?: Maybe<Scalars["String"]>;
  metaValue_not_ends_with?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<FileMetaWhereInput>>;
  OR?: Maybe<Array<FileMetaWhereInput>>;
  NOT?: Maybe<Array<FileMetaWhereInput>>;
};

export type FileMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
};

export enum FileOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  OldIdAsc = "oldId_ASC",
  OldIdDesc = "oldId_DESC",
  ItemTypeAsc = "itemType_ASC",
  ItemTypeDesc = "itemType_DESC",
  ItemStatusAsc = "itemStatus_ASC",
  ItemStatusDesc = "itemStatus_DESC",
  ItemUrlSegmentAsc = "itemUrlSegment_ASC",
  ItemUrlSegmentDesc = "itemUrlSegment_DESC",
  ItemMimeTypeAsc = "itemMimeType_ASC",
  ItemMimeTypeDesc = "itemMimeType_DESC",
  ItemNameAsc = "itemName_ASC",
  ItemNameDesc = "itemName_DESC",
  ItemContentAsc = "itemContent_ASC",
  ItemContentDesc = "itemContent_DESC",
  ItemDeletedAsc = "itemDeleted_ASC",
  ItemDeletedDesc = "itemDeleted_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type FilePreviousValues = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type FileScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemType_not?: Maybe<Scalars["String"]>;
  itemType_in?: Maybe<Array<Scalars["String"]>>;
  itemType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemType_lt?: Maybe<Scalars["String"]>;
  itemType_lte?: Maybe<Scalars["String"]>;
  itemType_gt?: Maybe<Scalars["String"]>;
  itemType_gte?: Maybe<Scalars["String"]>;
  itemType_contains?: Maybe<Scalars["String"]>;
  itemType_not_contains?: Maybe<Scalars["String"]>;
  itemType_starts_with?: Maybe<Scalars["String"]>;
  itemType_not_starts_with?: Maybe<Scalars["String"]>;
  itemType_ends_with?: Maybe<Scalars["String"]>;
  itemType_not_ends_with?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemStatus_not?: Maybe<Scalars["String"]>;
  itemStatus_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_not_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_lt?: Maybe<Scalars["String"]>;
  itemStatus_lte?: Maybe<Scalars["String"]>;
  itemStatus_gt?: Maybe<Scalars["String"]>;
  itemStatus_gte?: Maybe<Scalars["String"]>;
  itemStatus_contains?: Maybe<Scalars["String"]>;
  itemStatus_not_contains?: Maybe<Scalars["String"]>;
  itemStatus_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_not_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_ends_with?: Maybe<Scalars["String"]>;
  itemStatus_not_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemUrlSegment_not?: Maybe<Scalars["String"]>;
  itemUrlSegment_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_not_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_lt?: Maybe<Scalars["String"]>;
  itemUrlSegment_lte?: Maybe<Scalars["String"]>;
  itemUrlSegment_gt?: Maybe<Scalars["String"]>;
  itemUrlSegment_gte?: Maybe<Scalars["String"]>;
  itemUrlSegment_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemMimeType_not?: Maybe<Scalars["String"]>;
  itemMimeType_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_lt?: Maybe<Scalars["String"]>;
  itemMimeType_lte?: Maybe<Scalars["String"]>;
  itemMimeType_gt?: Maybe<Scalars["String"]>;
  itemMimeType_gte?: Maybe<Scalars["String"]>;
  itemMimeType_contains?: Maybe<Scalars["String"]>;
  itemMimeType_not_contains?: Maybe<Scalars["String"]>;
  itemMimeType_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_ends_with?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemName_not?: Maybe<Scalars["String"]>;
  itemName_in?: Maybe<Array<Scalars["String"]>>;
  itemName_not_in?: Maybe<Array<Scalars["String"]>>;
  itemName_lt?: Maybe<Scalars["String"]>;
  itemName_lte?: Maybe<Scalars["String"]>;
  itemName_gt?: Maybe<Scalars["String"]>;
  itemName_gte?: Maybe<Scalars["String"]>;
  itemName_contains?: Maybe<Scalars["String"]>;
  itemName_not_contains?: Maybe<Scalars["String"]>;
  itemName_starts_with?: Maybe<Scalars["String"]>;
  itemName_not_starts_with?: Maybe<Scalars["String"]>;
  itemName_ends_with?: Maybe<Scalars["String"]>;
  itemName_not_ends_with?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemContent_not?: Maybe<Scalars["String"]>;
  itemContent_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_not_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_lt?: Maybe<Scalars["String"]>;
  itemContent_lte?: Maybe<Scalars["String"]>;
  itemContent_gt?: Maybe<Scalars["String"]>;
  itemContent_gte?: Maybe<Scalars["String"]>;
  itemContent_contains?: Maybe<Scalars["String"]>;
  itemContent_not_contains?: Maybe<Scalars["String"]>;
  itemContent_starts_with?: Maybe<Scalars["String"]>;
  itemContent_not_starts_with?: Maybe<Scalars["String"]>;
  itemContent_ends_with?: Maybe<Scalars["String"]>;
  itemContent_not_ends_with?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<FileScalarWhereInput>>;
  OR?: Maybe<Array<FileScalarWhereInput>>;
  NOT?: Maybe<Array<FileScalarWhereInput>>;
};

export type FileSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<File>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<FilePreviousValues>;
};

export type FileSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<FileWhereInput>;
  AND?: Maybe<Array<FileSubscriptionWhereInput>>;
  OR?: Maybe<Array<FileSubscriptionWhereInput>>;
  NOT?: Maybe<Array<FileSubscriptionWhereInput>>;
};

export type FileUpdateInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutFilesInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<FileMetaUpdateManyWithoutFileInput>;
  userTrack?: Maybe<UserTrackUpdateOneWithoutFilesInput>;
};

export type FileUpdateManyDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type FileUpdateManyMutationInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type FileUpdateManyWithoutUserInput = {
  create?: Maybe<Array<FileCreateWithoutUserInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutUserInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutUserInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
};

export type FileUpdateManyWithoutUserTrackInput = {
  create?: Maybe<Array<FileCreateWithoutUserTrackInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutUserTrackInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutUserTrackInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
};

export type FileUpdateManyWithWhereNestedInput = {
  where: FileScalarWhereInput;
  data: FileUpdateManyDataInput;
};

export type FileUpdateOneWithoutItemMetaInput = {
  create?: Maybe<FileCreateWithoutItemMetaInput>;
  update?: Maybe<FileUpdateWithoutItemMetaDataInput>;
  upsert?: Maybe<FileUpsertWithoutItemMetaInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<FileWhereUniqueInput>;
};

export type FileUpdateWithoutItemMetaDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutFilesInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  userTrack?: Maybe<UserTrackUpdateOneWithoutFilesInput>;
};

export type FileUpdateWithoutUserDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<FileMetaUpdateManyWithoutFileInput>;
  userTrack?: Maybe<UserTrackUpdateOneWithoutFilesInput>;
};

export type FileUpdateWithoutUserTrackDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutFilesInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<FileMetaUpdateManyWithoutFileInput>;
};

export type FileUpdateWithWhereUniqueWithoutUserInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutUserDataInput;
};

export type FileUpdateWithWhereUniqueWithoutUserTrackInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutUserTrackDataInput;
};

export type FileUpsertWithoutItemMetaInput = {
  update: FileUpdateWithoutItemMetaDataInput;
  create: FileCreateWithoutItemMetaInput;
};

export type FileUpsertWithWhereUniqueWithoutUserInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutUserDataInput;
  create: FileCreateWithoutUserInput;
};

export type FileUpsertWithWhereUniqueWithoutUserTrackInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutUserTrackDataInput;
  create: FileCreateWithoutUserTrackInput;
};

export type FileWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  user?: Maybe<UserWhereInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemType_not?: Maybe<Scalars["String"]>;
  itemType_in?: Maybe<Array<Scalars["String"]>>;
  itemType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemType_lt?: Maybe<Scalars["String"]>;
  itemType_lte?: Maybe<Scalars["String"]>;
  itemType_gt?: Maybe<Scalars["String"]>;
  itemType_gte?: Maybe<Scalars["String"]>;
  itemType_contains?: Maybe<Scalars["String"]>;
  itemType_not_contains?: Maybe<Scalars["String"]>;
  itemType_starts_with?: Maybe<Scalars["String"]>;
  itemType_not_starts_with?: Maybe<Scalars["String"]>;
  itemType_ends_with?: Maybe<Scalars["String"]>;
  itemType_not_ends_with?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemStatus_not?: Maybe<Scalars["String"]>;
  itemStatus_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_not_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_lt?: Maybe<Scalars["String"]>;
  itemStatus_lte?: Maybe<Scalars["String"]>;
  itemStatus_gt?: Maybe<Scalars["String"]>;
  itemStatus_gte?: Maybe<Scalars["String"]>;
  itemStatus_contains?: Maybe<Scalars["String"]>;
  itemStatus_not_contains?: Maybe<Scalars["String"]>;
  itemStatus_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_not_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_ends_with?: Maybe<Scalars["String"]>;
  itemStatus_not_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemUrlSegment_not?: Maybe<Scalars["String"]>;
  itemUrlSegment_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_not_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_lt?: Maybe<Scalars["String"]>;
  itemUrlSegment_lte?: Maybe<Scalars["String"]>;
  itemUrlSegment_gt?: Maybe<Scalars["String"]>;
  itemUrlSegment_gte?: Maybe<Scalars["String"]>;
  itemUrlSegment_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemMimeType_not?: Maybe<Scalars["String"]>;
  itemMimeType_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_lt?: Maybe<Scalars["String"]>;
  itemMimeType_lte?: Maybe<Scalars["String"]>;
  itemMimeType_gt?: Maybe<Scalars["String"]>;
  itemMimeType_gte?: Maybe<Scalars["String"]>;
  itemMimeType_contains?: Maybe<Scalars["String"]>;
  itemMimeType_not_contains?: Maybe<Scalars["String"]>;
  itemMimeType_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_ends_with?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemName_not?: Maybe<Scalars["String"]>;
  itemName_in?: Maybe<Array<Scalars["String"]>>;
  itemName_not_in?: Maybe<Array<Scalars["String"]>>;
  itemName_lt?: Maybe<Scalars["String"]>;
  itemName_lte?: Maybe<Scalars["String"]>;
  itemName_gt?: Maybe<Scalars["String"]>;
  itemName_gte?: Maybe<Scalars["String"]>;
  itemName_contains?: Maybe<Scalars["String"]>;
  itemName_not_contains?: Maybe<Scalars["String"]>;
  itemName_starts_with?: Maybe<Scalars["String"]>;
  itemName_not_starts_with?: Maybe<Scalars["String"]>;
  itemName_ends_with?: Maybe<Scalars["String"]>;
  itemName_not_ends_with?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemContent_not?: Maybe<Scalars["String"]>;
  itemContent_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_not_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_lt?: Maybe<Scalars["String"]>;
  itemContent_lte?: Maybe<Scalars["String"]>;
  itemContent_gt?: Maybe<Scalars["String"]>;
  itemContent_gte?: Maybe<Scalars["String"]>;
  itemContent_contains?: Maybe<Scalars["String"]>;
  itemContent_not_contains?: Maybe<Scalars["String"]>;
  itemContent_starts_with?: Maybe<Scalars["String"]>;
  itemContent_not_starts_with?: Maybe<Scalars["String"]>;
  itemContent_ends_with?: Maybe<Scalars["String"]>;
  itemContent_not_ends_with?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemDeleted_not?: Maybe<Scalars["Boolean"]>;
  itemMeta_every?: Maybe<FileMetaWhereInput>;
  itemMeta_some?: Maybe<FileMetaWhereInput>;
  itemMeta_none?: Maybe<FileMetaWhereInput>;
  userTrack?: Maybe<UserTrackWhereInput>;
  AND?: Maybe<Array<FileWhereInput>>;
  OR?: Maybe<Array<FileWhereInput>>;
  NOT?: Maybe<Array<FileWhereInput>>;
};

export type FileWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  createBlogPost: BlogPost;
  updateBlogPost?: Maybe<BlogPost>;
  updateManyBlogPosts: BatchPayload;
  upsertBlogPost: BlogPost;
  deleteBlogPost?: Maybe<BlogPost>;
  deleteManyBlogPosts: BatchPayload;
  createBlogPostMeta: BlogPostMeta;
  updateBlogPostMeta?: Maybe<BlogPostMeta>;
  updateManyBlogPostMetas: BatchPayload;
  upsertBlogPostMeta: BlogPostMeta;
  deleteBlogPostMeta?: Maybe<BlogPostMeta>;
  deleteManyBlogPostMetas: BatchPayload;
  createFile: File;
  updateFile?: Maybe<File>;
  updateManyFiles: BatchPayload;
  upsertFile: File;
  deleteFile?: Maybe<File>;
  deleteManyFiles: BatchPayload;
  createFileMeta: FileMeta;
  updateFileMeta?: Maybe<FileMeta>;
  updateManyFileMetas: BatchPayload;
  upsertFileMeta: FileMeta;
  deleteFileMeta?: Maybe<FileMeta>;
  deleteManyFileMetas: BatchPayload;
  createProfilePage: ProfilePage;
  updateProfilePage?: Maybe<ProfilePage>;
  updateManyProfilePages: BatchPayload;
  upsertProfilePage: ProfilePage;
  deleteProfilePage?: Maybe<ProfilePage>;
  deleteManyProfilePages: BatchPayload;
  createProfilePageMeta: ProfilePageMeta;
  updateProfilePageMeta?: Maybe<ProfilePageMeta>;
  updateManyProfilePageMetas: BatchPayload;
  upsertProfilePageMeta: ProfilePageMeta;
  deleteProfilePageMeta?: Maybe<ProfilePageMeta>;
  deleteManyProfilePageMetas: BatchPayload;
  createReview: Review;
  updateReview?: Maybe<Review>;
  updateManyReviews: BatchPayload;
  upsertReview: Review;
  deleteReview?: Maybe<Review>;
  deleteManyReviews: BatchPayload;
  createReviewMeta: ReviewMeta;
  updateReviewMeta?: Maybe<ReviewMeta>;
  updateManyReviewMetas: BatchPayload;
  upsertReviewMeta: ReviewMeta;
  deleteReviewMeta?: Maybe<ReviewMeta>;
  deleteManyReviewMetas: BatchPayload;
  createUser: User;
  updateUser?: Maybe<User>;
  updateManyUsers: BatchPayload;
  upsertUser: User;
  deleteUser?: Maybe<User>;
  deleteManyUsers: BatchPayload;
  createUserFeedback: UserFeedback;
  updateUserFeedback?: Maybe<UserFeedback>;
  updateManyUserFeedbacks: BatchPayload;
  upsertUserFeedback: UserFeedback;
  deleteUserFeedback?: Maybe<UserFeedback>;
  deleteManyUserFeedbacks: BatchPayload;
  createUserFeedbackMeta: UserFeedbackMeta;
  updateUserFeedbackMeta?: Maybe<UserFeedbackMeta>;
  updateManyUserFeedbackMetas: BatchPayload;
  upsertUserFeedbackMeta: UserFeedbackMeta;
  deleteUserFeedbackMeta?: Maybe<UserFeedbackMeta>;
  deleteManyUserFeedbackMetas: BatchPayload;
  createUserMeta: UserMeta;
  updateUserMeta?: Maybe<UserMeta>;
  updateManyUserMetas: BatchPayload;
  upsertUserMeta: UserMeta;
  deleteUserMeta?: Maybe<UserMeta>;
  deleteManyUserMetas: BatchPayload;
  createUserTrack: UserTrack;
  updateUserTrack?: Maybe<UserTrack>;
  updateManyUserTracks: BatchPayload;
  upsertUserTrack: UserTrack;
  deleteUserTrack?: Maybe<UserTrack>;
  deleteManyUserTracks: BatchPayload;
  createUserTrackMeta: UserTrackMeta;
  updateUserTrackMeta?: Maybe<UserTrackMeta>;
  updateManyUserTrackMetas: BatchPayload;
  upsertUserTrackMeta: UserTrackMeta;
  deleteUserTrackMeta?: Maybe<UserTrackMeta>;
  deleteManyUserTrackMetas: BatchPayload;
};

export type MutationCreateBlogPostArgs = {
  data: BlogPostCreateInput;
};

export type MutationUpdateBlogPostArgs = {
  data: BlogPostUpdateInput;
  where: BlogPostWhereUniqueInput;
};

export type MutationUpdateManyBlogPostsArgs = {
  data: BlogPostUpdateManyMutationInput;
  where?: Maybe<BlogPostWhereInput>;
};

export type MutationUpsertBlogPostArgs = {
  where: BlogPostWhereUniqueInput;
  create: BlogPostCreateInput;
  update: BlogPostUpdateInput;
};

export type MutationDeleteBlogPostArgs = {
  where: BlogPostWhereUniqueInput;
};

export type MutationDeleteManyBlogPostsArgs = {
  where?: Maybe<BlogPostWhereInput>;
};

export type MutationCreateBlogPostMetaArgs = {
  data: BlogPostMetaCreateInput;
};

export type MutationUpdateBlogPostMetaArgs = {
  data: BlogPostMetaUpdateInput;
  where: BlogPostMetaWhereUniqueInput;
};

export type MutationUpdateManyBlogPostMetasArgs = {
  data: BlogPostMetaUpdateManyMutationInput;
  where?: Maybe<BlogPostMetaWhereInput>;
};

export type MutationUpsertBlogPostMetaArgs = {
  where: BlogPostMetaWhereUniqueInput;
  create: BlogPostMetaCreateInput;
  update: BlogPostMetaUpdateInput;
};

export type MutationDeleteBlogPostMetaArgs = {
  where: BlogPostMetaWhereUniqueInput;
};

export type MutationDeleteManyBlogPostMetasArgs = {
  where?: Maybe<BlogPostMetaWhereInput>;
};

export type MutationCreateFileArgs = {
  data: FileCreateInput;
};

export type MutationUpdateFileArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};

export type MutationUpdateManyFilesArgs = {
  data: FileUpdateManyMutationInput;
  where?: Maybe<FileWhereInput>;
};

export type MutationUpsertFileArgs = {
  where: FileWhereUniqueInput;
  create: FileCreateInput;
  update: FileUpdateInput;
};

export type MutationDeleteFileArgs = {
  where: FileWhereUniqueInput;
};

export type MutationDeleteManyFilesArgs = {
  where?: Maybe<FileWhereInput>;
};

export type MutationCreateFileMetaArgs = {
  data: FileMetaCreateInput;
};

export type MutationUpdateFileMetaArgs = {
  data: FileMetaUpdateInput;
  where: FileMetaWhereUniqueInput;
};

export type MutationUpdateManyFileMetasArgs = {
  data: FileMetaUpdateManyMutationInput;
  where?: Maybe<FileMetaWhereInput>;
};

export type MutationUpsertFileMetaArgs = {
  where: FileMetaWhereUniqueInput;
  create: FileMetaCreateInput;
  update: FileMetaUpdateInput;
};

export type MutationDeleteFileMetaArgs = {
  where: FileMetaWhereUniqueInput;
};

export type MutationDeleteManyFileMetasArgs = {
  where?: Maybe<FileMetaWhereInput>;
};

export type MutationCreateProfilePageArgs = {
  data: ProfilePageCreateInput;
};

export type MutationUpdateProfilePageArgs = {
  data: ProfilePageUpdateInput;
  where: ProfilePageWhereUniqueInput;
};

export type MutationUpdateManyProfilePagesArgs = {
  data: ProfilePageUpdateManyMutationInput;
  where?: Maybe<ProfilePageWhereInput>;
};

export type MutationUpsertProfilePageArgs = {
  where: ProfilePageWhereUniqueInput;
  create: ProfilePageCreateInput;
  update: ProfilePageUpdateInput;
};

export type MutationDeleteProfilePageArgs = {
  where: ProfilePageWhereUniqueInput;
};

export type MutationDeleteManyProfilePagesArgs = {
  where?: Maybe<ProfilePageWhereInput>;
};

export type MutationCreateProfilePageMetaArgs = {
  data: ProfilePageMetaCreateInput;
};

export type MutationUpdateProfilePageMetaArgs = {
  data: ProfilePageMetaUpdateInput;
  where: ProfilePageMetaWhereUniqueInput;
};

export type MutationUpdateManyProfilePageMetasArgs = {
  data: ProfilePageMetaUpdateManyMutationInput;
  where?: Maybe<ProfilePageMetaWhereInput>;
};

export type MutationUpsertProfilePageMetaArgs = {
  where: ProfilePageMetaWhereUniqueInput;
  create: ProfilePageMetaCreateInput;
  update: ProfilePageMetaUpdateInput;
};

export type MutationDeleteProfilePageMetaArgs = {
  where: ProfilePageMetaWhereUniqueInput;
};

export type MutationDeleteManyProfilePageMetasArgs = {
  where?: Maybe<ProfilePageMetaWhereInput>;
};

export type MutationCreateReviewArgs = {
  data: ReviewCreateInput;
};

export type MutationUpdateReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};

export type MutationUpdateManyReviewsArgs = {
  data: ReviewUpdateManyMutationInput;
  where?: Maybe<ReviewWhereInput>;
};

export type MutationUpsertReviewArgs = {
  where: ReviewWhereUniqueInput;
  create: ReviewCreateInput;
  update: ReviewUpdateInput;
};

export type MutationDeleteReviewArgs = {
  where: ReviewWhereUniqueInput;
};

export type MutationDeleteManyReviewsArgs = {
  where?: Maybe<ReviewWhereInput>;
};

export type MutationCreateReviewMetaArgs = {
  data: ReviewMetaCreateInput;
};

export type MutationUpdateReviewMetaArgs = {
  data: ReviewMetaUpdateInput;
  where: ReviewMetaWhereUniqueInput;
};

export type MutationUpdateManyReviewMetasArgs = {
  data: ReviewMetaUpdateManyMutationInput;
  where?: Maybe<ReviewMetaWhereInput>;
};

export type MutationUpsertReviewMetaArgs = {
  where: ReviewMetaWhereUniqueInput;
  create: ReviewMetaCreateInput;
  update: ReviewMetaUpdateInput;
};

export type MutationDeleteReviewMetaArgs = {
  where: ReviewMetaWhereUniqueInput;
};

export type MutationDeleteManyReviewMetasArgs = {
  where?: Maybe<ReviewMetaWhereInput>;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};

export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>;
};

export type MutationCreateUserFeedbackArgs = {
  data: UserFeedbackCreateInput;
};

export type MutationUpdateUserFeedbackArgs = {
  data: UserFeedbackUpdateInput;
  where: UserFeedbackWhereUniqueInput;
};

export type MutationUpdateManyUserFeedbacksArgs = {
  data: UserFeedbackUpdateManyMutationInput;
  where?: Maybe<UserFeedbackWhereInput>;
};

export type MutationUpsertUserFeedbackArgs = {
  where: UserFeedbackWhereUniqueInput;
  create: UserFeedbackCreateInput;
  update: UserFeedbackUpdateInput;
};

export type MutationDeleteUserFeedbackArgs = {
  where: UserFeedbackWhereUniqueInput;
};

export type MutationDeleteManyUserFeedbacksArgs = {
  where?: Maybe<UserFeedbackWhereInput>;
};

export type MutationCreateUserFeedbackMetaArgs = {
  data: UserFeedbackMetaCreateInput;
};

export type MutationUpdateUserFeedbackMetaArgs = {
  data: UserFeedbackMetaUpdateInput;
  where: UserFeedbackMetaWhereUniqueInput;
};

export type MutationUpdateManyUserFeedbackMetasArgs = {
  data: UserFeedbackMetaUpdateManyMutationInput;
  where?: Maybe<UserFeedbackMetaWhereInput>;
};

export type MutationUpsertUserFeedbackMetaArgs = {
  where: UserFeedbackMetaWhereUniqueInput;
  create: UserFeedbackMetaCreateInput;
  update: UserFeedbackMetaUpdateInput;
};

export type MutationDeleteUserFeedbackMetaArgs = {
  where: UserFeedbackMetaWhereUniqueInput;
};

export type MutationDeleteManyUserFeedbackMetasArgs = {
  where?: Maybe<UserFeedbackMetaWhereInput>;
};

export type MutationCreateUserMetaArgs = {
  data: UserMetaCreateInput;
};

export type MutationUpdateUserMetaArgs = {
  data: UserMetaUpdateInput;
  where: UserMetaWhereUniqueInput;
};

export type MutationUpdateManyUserMetasArgs = {
  data: UserMetaUpdateManyMutationInput;
  where?: Maybe<UserMetaWhereInput>;
};

export type MutationUpsertUserMetaArgs = {
  where: UserMetaWhereUniqueInput;
  create: UserMetaCreateInput;
  update: UserMetaUpdateInput;
};

export type MutationDeleteUserMetaArgs = {
  where: UserMetaWhereUniqueInput;
};

export type MutationDeleteManyUserMetasArgs = {
  where?: Maybe<UserMetaWhereInput>;
};

export type MutationCreateUserTrackArgs = {
  data: UserTrackCreateInput;
};

export type MutationUpdateUserTrackArgs = {
  data: UserTrackUpdateInput;
  where: UserTrackWhereUniqueInput;
};

export type MutationUpdateManyUserTracksArgs = {
  data: UserTrackUpdateManyMutationInput;
  where?: Maybe<UserTrackWhereInput>;
};

export type MutationUpsertUserTrackArgs = {
  where: UserTrackWhereUniqueInput;
  create: UserTrackCreateInput;
  update: UserTrackUpdateInput;
};

export type MutationDeleteUserTrackArgs = {
  where: UserTrackWhereUniqueInput;
};

export type MutationDeleteManyUserTracksArgs = {
  where?: Maybe<UserTrackWhereInput>;
};

export type MutationCreateUserTrackMetaArgs = {
  data: UserTrackMetaCreateInput;
};

export type MutationUpdateUserTrackMetaArgs = {
  data: UserTrackMetaUpdateInput;
  where: UserTrackMetaWhereUniqueInput;
};

export type MutationUpdateManyUserTrackMetasArgs = {
  data: UserTrackMetaUpdateManyMutationInput;
  where?: Maybe<UserTrackMetaWhereInput>;
};

export type MutationUpsertUserTrackMetaArgs = {
  where: UserTrackMetaWhereUniqueInput;
  create: UserTrackMetaCreateInput;
  update: UserTrackMetaUpdateInput;
};

export type MutationDeleteUserTrackMetaArgs = {
  where: UserTrackMetaWhereUniqueInput;
};

export type MutationDeleteManyUserTrackMetasArgs = {
  where?: Maybe<UserTrackMetaWhereInput>;
};

export enum MutationType {
  Created = "CREATED",
  Updated = "UPDATED",
  Deleted = "DELETED",
}

export type Node = {
  id: Scalars["ID"];
};

export type PageInfo = {
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type ProfilePage = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<Array<ProfilePageMeta>>;
};

export type ProfilePageItemMetaArgs = {
  where?: Maybe<ProfilePageMetaWhereInput>;
  orderBy?: Maybe<ProfilePageMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type ProfilePageConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<ProfilePageEdge>>;
  aggregate: AggregateProfilePage;
};

export type ProfilePageCreateInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutProfilePagesInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ProfilePageMetaCreateManyWithoutProfilePageInput>;
};

export type ProfilePageCreateManyWithoutUserInput = {
  create?: Maybe<Array<ProfilePageCreateWithoutUserInput>>;
  connect?: Maybe<Array<ProfilePageWhereUniqueInput>>;
};

export type ProfilePageCreateOneWithoutItemMetaInput = {
  create?: Maybe<ProfilePageCreateWithoutItemMetaInput>;
  connect?: Maybe<ProfilePageWhereUniqueInput>;
};

export type ProfilePageCreateWithoutItemMetaInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutProfilePagesInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ProfilePageCreateWithoutUserInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ProfilePageMetaCreateManyWithoutProfilePageInput>;
};

export type ProfilePageEdge = {
  node: ProfilePage;
  cursor: Scalars["String"];
};

export type ProfilePageMeta = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  profilePage?: Maybe<ProfilePage>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ProfilePageMetaConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<ProfilePageMetaEdge>>;
  aggregate: AggregateProfilePageMeta;
};

export type ProfilePageMetaCreateInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  profilePage?: Maybe<ProfilePageCreateOneWithoutItemMetaInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ProfilePageMetaCreateManyWithoutProfilePageInput = {
  create?: Maybe<Array<ProfilePageMetaCreateWithoutProfilePageInput>>;
  connect?: Maybe<Array<ProfilePageMetaWhereUniqueInput>>;
};

export type ProfilePageMetaCreateWithoutProfilePageInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ProfilePageMetaEdge = {
  node: ProfilePageMeta;
  cursor: Scalars["String"];
};

export enum ProfilePageMetaOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  OldIdAsc = "oldId_ASC",
  OldIdDesc = "oldId_DESC",
  ItemOldIdAsc = "itemOldId_ASC",
  ItemOldIdDesc = "itemOldId_DESC",
  MetaTypeAsc = "metaType_ASC",
  MetaTypeDesc = "metaType_DESC",
  MetaNameAsc = "metaName_ASC",
  MetaNameDesc = "metaName_DESC",
  MetaValueAsc = "metaValue_ASC",
  MetaValueDesc = "metaValue_DESC",
  MetaDeletedAsc = "metaDeleted_ASC",
  MetaDeletedDesc = "metaDeleted_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ProfilePageMetaPreviousValues = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ProfilePageMetaScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  itemOldId_not?: Maybe<Scalars["String"]>;
  itemOldId_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_not_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_lt?: Maybe<Scalars["String"]>;
  itemOldId_lte?: Maybe<Scalars["String"]>;
  itemOldId_gt?: Maybe<Scalars["String"]>;
  itemOldId_gte?: Maybe<Scalars["String"]>;
  itemOldId_contains?: Maybe<Scalars["String"]>;
  itemOldId_not_contains?: Maybe<Scalars["String"]>;
  itemOldId_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_not_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_ends_with?: Maybe<Scalars["String"]>;
  itemOldId_not_ends_with?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaType_not?: Maybe<Scalars["String"]>;
  metaType_in?: Maybe<Array<Scalars["String"]>>;
  metaType_not_in?: Maybe<Array<Scalars["String"]>>;
  metaType_lt?: Maybe<Scalars["String"]>;
  metaType_lte?: Maybe<Scalars["String"]>;
  metaType_gt?: Maybe<Scalars["String"]>;
  metaType_gte?: Maybe<Scalars["String"]>;
  metaType_contains?: Maybe<Scalars["String"]>;
  metaType_not_contains?: Maybe<Scalars["String"]>;
  metaType_starts_with?: Maybe<Scalars["String"]>;
  metaType_not_starts_with?: Maybe<Scalars["String"]>;
  metaType_ends_with?: Maybe<Scalars["String"]>;
  metaType_not_ends_with?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaName_not?: Maybe<Scalars["String"]>;
  metaName_in?: Maybe<Array<Scalars["String"]>>;
  metaName_not_in?: Maybe<Array<Scalars["String"]>>;
  metaName_lt?: Maybe<Scalars["String"]>;
  metaName_lte?: Maybe<Scalars["String"]>;
  metaName_gt?: Maybe<Scalars["String"]>;
  metaName_gte?: Maybe<Scalars["String"]>;
  metaName_contains?: Maybe<Scalars["String"]>;
  metaName_not_contains?: Maybe<Scalars["String"]>;
  metaName_starts_with?: Maybe<Scalars["String"]>;
  metaName_not_starts_with?: Maybe<Scalars["String"]>;
  metaName_ends_with?: Maybe<Scalars["String"]>;
  metaName_not_ends_with?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaValue_not?: Maybe<Scalars["String"]>;
  metaValue_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_not_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_lt?: Maybe<Scalars["String"]>;
  metaValue_lte?: Maybe<Scalars["String"]>;
  metaValue_gt?: Maybe<Scalars["String"]>;
  metaValue_gte?: Maybe<Scalars["String"]>;
  metaValue_contains?: Maybe<Scalars["String"]>;
  metaValue_not_contains?: Maybe<Scalars["String"]>;
  metaValue_starts_with?: Maybe<Scalars["String"]>;
  metaValue_not_starts_with?: Maybe<Scalars["String"]>;
  metaValue_ends_with?: Maybe<Scalars["String"]>;
  metaValue_not_ends_with?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<ProfilePageMetaScalarWhereInput>>;
  OR?: Maybe<Array<ProfilePageMetaScalarWhereInput>>;
  NOT?: Maybe<Array<ProfilePageMetaScalarWhereInput>>;
};

export type ProfilePageMetaSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<ProfilePageMeta>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<ProfilePageMetaPreviousValues>;
};

export type ProfilePageMetaSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<ProfilePageMetaWhereInput>;
  AND?: Maybe<Array<ProfilePageMetaSubscriptionWhereInput>>;
  OR?: Maybe<Array<ProfilePageMetaSubscriptionWhereInput>>;
  NOT?: Maybe<Array<ProfilePageMetaSubscriptionWhereInput>>;
};

export type ProfilePageMetaUpdateInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  profilePage?: Maybe<ProfilePageUpdateOneWithoutItemMetaInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ProfilePageMetaUpdateManyDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ProfilePageMetaUpdateManyMutationInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ProfilePageMetaUpdateManyWithoutProfilePageInput = {
  create?: Maybe<Array<ProfilePageMetaCreateWithoutProfilePageInput>>;
  delete?: Maybe<Array<ProfilePageMetaWhereUniqueInput>>;
  connect?: Maybe<Array<ProfilePageMetaWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProfilePageMetaWhereUniqueInput>>;
  update?: Maybe<
    Array<ProfilePageMetaUpdateWithWhereUniqueWithoutProfilePageInput>
  >;
  upsert?: Maybe<
    Array<ProfilePageMetaUpsertWithWhereUniqueWithoutProfilePageInput>
  >;
  deleteMany?: Maybe<Array<ProfilePageMetaScalarWhereInput>>;
  updateMany?: Maybe<Array<ProfilePageMetaUpdateManyWithWhereNestedInput>>;
};

export type ProfilePageMetaUpdateManyWithWhereNestedInput = {
  where: ProfilePageMetaScalarWhereInput;
  data: ProfilePageMetaUpdateManyDataInput;
};

export type ProfilePageMetaUpdateWithoutProfilePageDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ProfilePageMetaUpdateWithWhereUniqueWithoutProfilePageInput = {
  where: ProfilePageMetaWhereUniqueInput;
  data: ProfilePageMetaUpdateWithoutProfilePageDataInput;
};

export type ProfilePageMetaUpsertWithWhereUniqueWithoutProfilePageInput = {
  where: ProfilePageMetaWhereUniqueInput;
  update: ProfilePageMetaUpdateWithoutProfilePageDataInput;
  create: ProfilePageMetaCreateWithoutProfilePageInput;
};

export type ProfilePageMetaWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  itemOldId_not?: Maybe<Scalars["String"]>;
  itemOldId_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_not_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_lt?: Maybe<Scalars["String"]>;
  itemOldId_lte?: Maybe<Scalars["String"]>;
  itemOldId_gt?: Maybe<Scalars["String"]>;
  itemOldId_gte?: Maybe<Scalars["String"]>;
  itemOldId_contains?: Maybe<Scalars["String"]>;
  itemOldId_not_contains?: Maybe<Scalars["String"]>;
  itemOldId_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_not_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_ends_with?: Maybe<Scalars["String"]>;
  itemOldId_not_ends_with?: Maybe<Scalars["String"]>;
  profilePage?: Maybe<ProfilePageWhereInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaType_not?: Maybe<Scalars["String"]>;
  metaType_in?: Maybe<Array<Scalars["String"]>>;
  metaType_not_in?: Maybe<Array<Scalars["String"]>>;
  metaType_lt?: Maybe<Scalars["String"]>;
  metaType_lte?: Maybe<Scalars["String"]>;
  metaType_gt?: Maybe<Scalars["String"]>;
  metaType_gte?: Maybe<Scalars["String"]>;
  metaType_contains?: Maybe<Scalars["String"]>;
  metaType_not_contains?: Maybe<Scalars["String"]>;
  metaType_starts_with?: Maybe<Scalars["String"]>;
  metaType_not_starts_with?: Maybe<Scalars["String"]>;
  metaType_ends_with?: Maybe<Scalars["String"]>;
  metaType_not_ends_with?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaName_not?: Maybe<Scalars["String"]>;
  metaName_in?: Maybe<Array<Scalars["String"]>>;
  metaName_not_in?: Maybe<Array<Scalars["String"]>>;
  metaName_lt?: Maybe<Scalars["String"]>;
  metaName_lte?: Maybe<Scalars["String"]>;
  metaName_gt?: Maybe<Scalars["String"]>;
  metaName_gte?: Maybe<Scalars["String"]>;
  metaName_contains?: Maybe<Scalars["String"]>;
  metaName_not_contains?: Maybe<Scalars["String"]>;
  metaName_starts_with?: Maybe<Scalars["String"]>;
  metaName_not_starts_with?: Maybe<Scalars["String"]>;
  metaName_ends_with?: Maybe<Scalars["String"]>;
  metaName_not_ends_with?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaValue_not?: Maybe<Scalars["String"]>;
  metaValue_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_not_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_lt?: Maybe<Scalars["String"]>;
  metaValue_lte?: Maybe<Scalars["String"]>;
  metaValue_gt?: Maybe<Scalars["String"]>;
  metaValue_gte?: Maybe<Scalars["String"]>;
  metaValue_contains?: Maybe<Scalars["String"]>;
  metaValue_not_contains?: Maybe<Scalars["String"]>;
  metaValue_starts_with?: Maybe<Scalars["String"]>;
  metaValue_not_starts_with?: Maybe<Scalars["String"]>;
  metaValue_ends_with?: Maybe<Scalars["String"]>;
  metaValue_not_ends_with?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<ProfilePageMetaWhereInput>>;
  OR?: Maybe<Array<ProfilePageMetaWhereInput>>;
  NOT?: Maybe<Array<ProfilePageMetaWhereInput>>;
};

export type ProfilePageMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
};

export enum ProfilePageOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  OldIdAsc = "oldId_ASC",
  OldIdDesc = "oldId_DESC",
  ItemTypeAsc = "itemType_ASC",
  ItemTypeDesc = "itemType_DESC",
  ItemStatusAsc = "itemStatus_ASC",
  ItemStatusDesc = "itemStatus_DESC",
  ItemUrlSegmentAsc = "itemUrlSegment_ASC",
  ItemUrlSegmentDesc = "itemUrlSegment_DESC",
  ItemMimeTypeAsc = "itemMimeType_ASC",
  ItemMimeTypeDesc = "itemMimeType_DESC",
  ItemNameAsc = "itemName_ASC",
  ItemNameDesc = "itemName_DESC",
  ItemContentAsc = "itemContent_ASC",
  ItemContentDesc = "itemContent_DESC",
  ItemDeletedAsc = "itemDeleted_ASC",
  ItemDeletedDesc = "itemDeleted_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ProfilePagePreviousValues = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ProfilePageScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemType_not?: Maybe<Scalars["String"]>;
  itemType_in?: Maybe<Array<Scalars["String"]>>;
  itemType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemType_lt?: Maybe<Scalars["String"]>;
  itemType_lte?: Maybe<Scalars["String"]>;
  itemType_gt?: Maybe<Scalars["String"]>;
  itemType_gte?: Maybe<Scalars["String"]>;
  itemType_contains?: Maybe<Scalars["String"]>;
  itemType_not_contains?: Maybe<Scalars["String"]>;
  itemType_starts_with?: Maybe<Scalars["String"]>;
  itemType_not_starts_with?: Maybe<Scalars["String"]>;
  itemType_ends_with?: Maybe<Scalars["String"]>;
  itemType_not_ends_with?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemStatus_not?: Maybe<Scalars["String"]>;
  itemStatus_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_not_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_lt?: Maybe<Scalars["String"]>;
  itemStatus_lte?: Maybe<Scalars["String"]>;
  itemStatus_gt?: Maybe<Scalars["String"]>;
  itemStatus_gte?: Maybe<Scalars["String"]>;
  itemStatus_contains?: Maybe<Scalars["String"]>;
  itemStatus_not_contains?: Maybe<Scalars["String"]>;
  itemStatus_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_not_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_ends_with?: Maybe<Scalars["String"]>;
  itemStatus_not_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemUrlSegment_not?: Maybe<Scalars["String"]>;
  itemUrlSegment_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_not_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_lt?: Maybe<Scalars["String"]>;
  itemUrlSegment_lte?: Maybe<Scalars["String"]>;
  itemUrlSegment_gt?: Maybe<Scalars["String"]>;
  itemUrlSegment_gte?: Maybe<Scalars["String"]>;
  itemUrlSegment_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemMimeType_not?: Maybe<Scalars["String"]>;
  itemMimeType_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_lt?: Maybe<Scalars["String"]>;
  itemMimeType_lte?: Maybe<Scalars["String"]>;
  itemMimeType_gt?: Maybe<Scalars["String"]>;
  itemMimeType_gte?: Maybe<Scalars["String"]>;
  itemMimeType_contains?: Maybe<Scalars["String"]>;
  itemMimeType_not_contains?: Maybe<Scalars["String"]>;
  itemMimeType_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_ends_with?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemName_not?: Maybe<Scalars["String"]>;
  itemName_in?: Maybe<Array<Scalars["String"]>>;
  itemName_not_in?: Maybe<Array<Scalars["String"]>>;
  itemName_lt?: Maybe<Scalars["String"]>;
  itemName_lte?: Maybe<Scalars["String"]>;
  itemName_gt?: Maybe<Scalars["String"]>;
  itemName_gte?: Maybe<Scalars["String"]>;
  itemName_contains?: Maybe<Scalars["String"]>;
  itemName_not_contains?: Maybe<Scalars["String"]>;
  itemName_starts_with?: Maybe<Scalars["String"]>;
  itemName_not_starts_with?: Maybe<Scalars["String"]>;
  itemName_ends_with?: Maybe<Scalars["String"]>;
  itemName_not_ends_with?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemContent_not?: Maybe<Scalars["String"]>;
  itemContent_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_not_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_lt?: Maybe<Scalars["String"]>;
  itemContent_lte?: Maybe<Scalars["String"]>;
  itemContent_gt?: Maybe<Scalars["String"]>;
  itemContent_gte?: Maybe<Scalars["String"]>;
  itemContent_contains?: Maybe<Scalars["String"]>;
  itemContent_not_contains?: Maybe<Scalars["String"]>;
  itemContent_starts_with?: Maybe<Scalars["String"]>;
  itemContent_not_starts_with?: Maybe<Scalars["String"]>;
  itemContent_ends_with?: Maybe<Scalars["String"]>;
  itemContent_not_ends_with?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<ProfilePageScalarWhereInput>>;
  OR?: Maybe<Array<ProfilePageScalarWhereInput>>;
  NOT?: Maybe<Array<ProfilePageScalarWhereInput>>;
};

export type ProfilePageSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<ProfilePage>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<ProfilePagePreviousValues>;
};

export type ProfilePageSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<ProfilePageWhereInput>;
  AND?: Maybe<Array<ProfilePageSubscriptionWhereInput>>;
  OR?: Maybe<Array<ProfilePageSubscriptionWhereInput>>;
  NOT?: Maybe<Array<ProfilePageSubscriptionWhereInput>>;
};

export type ProfilePageUpdateInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutProfilePagesInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ProfilePageMetaUpdateManyWithoutProfilePageInput>;
};

export type ProfilePageUpdateManyDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ProfilePageUpdateManyMutationInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ProfilePageUpdateManyWithoutUserInput = {
  create?: Maybe<Array<ProfilePageCreateWithoutUserInput>>;
  delete?: Maybe<Array<ProfilePageWhereUniqueInput>>;
  connect?: Maybe<Array<ProfilePageWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProfilePageWhereUniqueInput>>;
  update?: Maybe<Array<ProfilePageUpdateWithWhereUniqueWithoutUserInput>>;
  upsert?: Maybe<Array<ProfilePageUpsertWithWhereUniqueWithoutUserInput>>;
  deleteMany?: Maybe<Array<ProfilePageScalarWhereInput>>;
  updateMany?: Maybe<Array<ProfilePageUpdateManyWithWhereNestedInput>>;
};

export type ProfilePageUpdateManyWithWhereNestedInput = {
  where: ProfilePageScalarWhereInput;
  data: ProfilePageUpdateManyDataInput;
};

export type ProfilePageUpdateOneWithoutItemMetaInput = {
  create?: Maybe<ProfilePageCreateWithoutItemMetaInput>;
  update?: Maybe<ProfilePageUpdateWithoutItemMetaDataInput>;
  upsert?: Maybe<ProfilePageUpsertWithoutItemMetaInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<ProfilePageWhereUniqueInput>;
};

export type ProfilePageUpdateWithoutItemMetaDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutProfilePagesInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ProfilePageUpdateWithoutUserDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ProfilePageMetaUpdateManyWithoutProfilePageInput>;
};

export type ProfilePageUpdateWithWhereUniqueWithoutUserInput = {
  where: ProfilePageWhereUniqueInput;
  data: ProfilePageUpdateWithoutUserDataInput;
};

export type ProfilePageUpsertWithoutItemMetaInput = {
  update: ProfilePageUpdateWithoutItemMetaDataInput;
  create: ProfilePageCreateWithoutItemMetaInput;
};

export type ProfilePageUpsertWithWhereUniqueWithoutUserInput = {
  where: ProfilePageWhereUniqueInput;
  update: ProfilePageUpdateWithoutUserDataInput;
  create: ProfilePageCreateWithoutUserInput;
};

export type ProfilePageWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  user?: Maybe<UserWhereInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemType_not?: Maybe<Scalars["String"]>;
  itemType_in?: Maybe<Array<Scalars["String"]>>;
  itemType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemType_lt?: Maybe<Scalars["String"]>;
  itemType_lte?: Maybe<Scalars["String"]>;
  itemType_gt?: Maybe<Scalars["String"]>;
  itemType_gte?: Maybe<Scalars["String"]>;
  itemType_contains?: Maybe<Scalars["String"]>;
  itemType_not_contains?: Maybe<Scalars["String"]>;
  itemType_starts_with?: Maybe<Scalars["String"]>;
  itemType_not_starts_with?: Maybe<Scalars["String"]>;
  itemType_ends_with?: Maybe<Scalars["String"]>;
  itemType_not_ends_with?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemStatus_not?: Maybe<Scalars["String"]>;
  itemStatus_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_not_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_lt?: Maybe<Scalars["String"]>;
  itemStatus_lte?: Maybe<Scalars["String"]>;
  itemStatus_gt?: Maybe<Scalars["String"]>;
  itemStatus_gte?: Maybe<Scalars["String"]>;
  itemStatus_contains?: Maybe<Scalars["String"]>;
  itemStatus_not_contains?: Maybe<Scalars["String"]>;
  itemStatus_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_not_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_ends_with?: Maybe<Scalars["String"]>;
  itemStatus_not_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemUrlSegment_not?: Maybe<Scalars["String"]>;
  itemUrlSegment_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_not_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_lt?: Maybe<Scalars["String"]>;
  itemUrlSegment_lte?: Maybe<Scalars["String"]>;
  itemUrlSegment_gt?: Maybe<Scalars["String"]>;
  itemUrlSegment_gte?: Maybe<Scalars["String"]>;
  itemUrlSegment_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemMimeType_not?: Maybe<Scalars["String"]>;
  itemMimeType_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_lt?: Maybe<Scalars["String"]>;
  itemMimeType_lte?: Maybe<Scalars["String"]>;
  itemMimeType_gt?: Maybe<Scalars["String"]>;
  itemMimeType_gte?: Maybe<Scalars["String"]>;
  itemMimeType_contains?: Maybe<Scalars["String"]>;
  itemMimeType_not_contains?: Maybe<Scalars["String"]>;
  itemMimeType_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_ends_with?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemName_not?: Maybe<Scalars["String"]>;
  itemName_in?: Maybe<Array<Scalars["String"]>>;
  itemName_not_in?: Maybe<Array<Scalars["String"]>>;
  itemName_lt?: Maybe<Scalars["String"]>;
  itemName_lte?: Maybe<Scalars["String"]>;
  itemName_gt?: Maybe<Scalars["String"]>;
  itemName_gte?: Maybe<Scalars["String"]>;
  itemName_contains?: Maybe<Scalars["String"]>;
  itemName_not_contains?: Maybe<Scalars["String"]>;
  itemName_starts_with?: Maybe<Scalars["String"]>;
  itemName_not_starts_with?: Maybe<Scalars["String"]>;
  itemName_ends_with?: Maybe<Scalars["String"]>;
  itemName_not_ends_with?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemContent_not?: Maybe<Scalars["String"]>;
  itemContent_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_not_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_lt?: Maybe<Scalars["String"]>;
  itemContent_lte?: Maybe<Scalars["String"]>;
  itemContent_gt?: Maybe<Scalars["String"]>;
  itemContent_gte?: Maybe<Scalars["String"]>;
  itemContent_contains?: Maybe<Scalars["String"]>;
  itemContent_not_contains?: Maybe<Scalars["String"]>;
  itemContent_starts_with?: Maybe<Scalars["String"]>;
  itemContent_not_starts_with?: Maybe<Scalars["String"]>;
  itemContent_ends_with?: Maybe<Scalars["String"]>;
  itemContent_not_ends_with?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemDeleted_not?: Maybe<Scalars["Boolean"]>;
  itemMeta_every?: Maybe<ProfilePageMetaWhereInput>;
  itemMeta_some?: Maybe<ProfilePageMetaWhereInput>;
  itemMeta_none?: Maybe<ProfilePageMetaWhereInput>;
  AND?: Maybe<Array<ProfilePageWhereInput>>;
  OR?: Maybe<Array<ProfilePageWhereInput>>;
  NOT?: Maybe<Array<ProfilePageWhereInput>>;
};

export type ProfilePageWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
};

export type Query = {
  blogPost?: Maybe<BlogPost>;
  blogPosts: Array<Maybe<BlogPost>>;
  blogPostsConnection: BlogPostConnection;
  blogPostMeta?: Maybe<BlogPostMeta>;
  blogPostMetas: Array<Maybe<BlogPostMeta>>;
  blogPostMetasConnection: BlogPostMetaConnection;
  file?: Maybe<File>;
  files: Array<Maybe<File>>;
  filesConnection: FileConnection;
  fileMeta?: Maybe<FileMeta>;
  fileMetas: Array<Maybe<FileMeta>>;
  fileMetasConnection: FileMetaConnection;
  profilePage?: Maybe<ProfilePage>;
  profilePages: Array<Maybe<ProfilePage>>;
  profilePagesConnection: ProfilePageConnection;
  profilePageMeta?: Maybe<ProfilePageMeta>;
  profilePageMetas: Array<Maybe<ProfilePageMeta>>;
  profilePageMetasConnection: ProfilePageMetaConnection;
  review?: Maybe<Review>;
  reviews: Array<Maybe<Review>>;
  reviewsConnection: ReviewConnection;
  reviewMeta?: Maybe<ReviewMeta>;
  reviewMetas: Array<Maybe<ReviewMeta>>;
  reviewMetasConnection: ReviewMetaConnection;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
  usersConnection: UserConnection;
  userFeedback?: Maybe<UserFeedback>;
  userFeedbacks: Array<Maybe<UserFeedback>>;
  userFeedbacksConnection: UserFeedbackConnection;
  userFeedbackMeta?: Maybe<UserFeedbackMeta>;
  userFeedbackMetas: Array<Maybe<UserFeedbackMeta>>;
  userFeedbackMetasConnection: UserFeedbackMetaConnection;
  userMeta?: Maybe<UserMeta>;
  userMetas: Array<Maybe<UserMeta>>;
  userMetasConnection: UserMetaConnection;
  userTrack?: Maybe<UserTrack>;
  userTracks: Array<Maybe<UserTrack>>;
  userTracksConnection: UserTrackConnection;
  userTrackMeta?: Maybe<UserTrackMeta>;
  userTrackMetas: Array<Maybe<UserTrackMeta>>;
  userTrackMetasConnection: UserTrackMetaConnection;
  node?: Maybe<Node>;
};

export type QueryBlogPostArgs = {
  where: BlogPostWhereUniqueInput;
};

export type QueryBlogPostsArgs = {
  where?: Maybe<BlogPostWhereInput>;
  orderBy?: Maybe<BlogPostOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryBlogPostsConnectionArgs = {
  where?: Maybe<BlogPostWhereInput>;
  orderBy?: Maybe<BlogPostOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryBlogPostMetaArgs = {
  where: BlogPostMetaWhereUniqueInput;
};

export type QueryBlogPostMetasArgs = {
  where?: Maybe<BlogPostMetaWhereInput>;
  orderBy?: Maybe<BlogPostMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryBlogPostMetasConnectionArgs = {
  where?: Maybe<BlogPostMetaWhereInput>;
  orderBy?: Maybe<BlogPostMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryFileArgs = {
  where: FileWhereUniqueInput;
};

export type QueryFilesArgs = {
  where?: Maybe<FileWhereInput>;
  orderBy?: Maybe<FileOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryFilesConnectionArgs = {
  where?: Maybe<FileWhereInput>;
  orderBy?: Maybe<FileOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryFileMetaArgs = {
  where: FileMetaWhereUniqueInput;
};

export type QueryFileMetasArgs = {
  where?: Maybe<FileMetaWhereInput>;
  orderBy?: Maybe<FileMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryFileMetasConnectionArgs = {
  where?: Maybe<FileMetaWhereInput>;
  orderBy?: Maybe<FileMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryProfilePageArgs = {
  where: ProfilePageWhereUniqueInput;
};

export type QueryProfilePagesArgs = {
  where?: Maybe<ProfilePageWhereInput>;
  orderBy?: Maybe<ProfilePageOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryProfilePagesConnectionArgs = {
  where?: Maybe<ProfilePageWhereInput>;
  orderBy?: Maybe<ProfilePageOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryProfilePageMetaArgs = {
  where: ProfilePageMetaWhereUniqueInput;
};

export type QueryProfilePageMetasArgs = {
  where?: Maybe<ProfilePageMetaWhereInput>;
  orderBy?: Maybe<ProfilePageMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryProfilePageMetasConnectionArgs = {
  where?: Maybe<ProfilePageMetaWhereInput>;
  orderBy?: Maybe<ProfilePageMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput;
};

export type QueryReviewsArgs = {
  where?: Maybe<ReviewWhereInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryReviewsConnectionArgs = {
  where?: Maybe<ReviewWhereInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryReviewMetaArgs = {
  where: ReviewMetaWhereUniqueInput;
};

export type QueryReviewMetasArgs = {
  where?: Maybe<ReviewMetaWhereInput>;
  orderBy?: Maybe<ReviewMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryReviewMetasConnectionArgs = {
  where?: Maybe<ReviewMetaWhereInput>;
  orderBy?: Maybe<ReviewMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserFeedbackArgs = {
  where: UserFeedbackWhereUniqueInput;
};

export type QueryUserFeedbacksArgs = {
  where?: Maybe<UserFeedbackWhereInput>;
  orderBy?: Maybe<UserFeedbackOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserFeedbacksConnectionArgs = {
  where?: Maybe<UserFeedbackWhereInput>;
  orderBy?: Maybe<UserFeedbackOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserFeedbackMetaArgs = {
  where: UserFeedbackMetaWhereUniqueInput;
};

export type QueryUserFeedbackMetasArgs = {
  where?: Maybe<UserFeedbackMetaWhereInput>;
  orderBy?: Maybe<UserFeedbackMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserFeedbackMetasConnectionArgs = {
  where?: Maybe<UserFeedbackMetaWhereInput>;
  orderBy?: Maybe<UserFeedbackMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserMetaArgs = {
  where: UserMetaWhereUniqueInput;
};

export type QueryUserMetasArgs = {
  where?: Maybe<UserMetaWhereInput>;
  orderBy?: Maybe<UserMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserMetasConnectionArgs = {
  where?: Maybe<UserMetaWhereInput>;
  orderBy?: Maybe<UserMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserTrackArgs = {
  where: UserTrackWhereUniqueInput;
};

export type QueryUserTracksArgs = {
  where?: Maybe<UserTrackWhereInput>;
  orderBy?: Maybe<UserTrackOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserTracksConnectionArgs = {
  where?: Maybe<UserTrackWhereInput>;
  orderBy?: Maybe<UserTrackOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserTrackMetaArgs = {
  where: UserTrackMetaWhereUniqueInput;
};

export type QueryUserTrackMetasArgs = {
  where?: Maybe<UserTrackMetaWhereInput>;
  orderBy?: Maybe<UserTrackMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserTrackMetasConnectionArgs = {
  where?: Maybe<UserTrackMetaWhereInput>;
  orderBy?: Maybe<UserTrackMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
};

export type Review = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<Array<ReviewMeta>>;
  userTrack?: Maybe<UserTrack>;
};

export type ReviewItemMetaArgs = {
  where?: Maybe<ReviewMetaWhereInput>;
  orderBy?: Maybe<ReviewMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type ReviewConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<ReviewEdge>>;
  aggregate: AggregateReview;
};

export type ReviewCreateInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutReviewsInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ReviewMetaCreateManyWithoutReviewInput>;
  userTrack?: Maybe<UserTrackCreateOneWithoutReviewsInput>;
};

export type ReviewCreateManyWithoutUserInput = {
  create?: Maybe<Array<ReviewCreateWithoutUserInput>>;
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
};

export type ReviewCreateManyWithoutUserTrackInput = {
  create?: Maybe<Array<ReviewCreateWithoutUserTrackInput>>;
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
};

export type ReviewCreateOneWithoutItemMetaInput = {
  create?: Maybe<ReviewCreateWithoutItemMetaInput>;
  connect?: Maybe<ReviewWhereUniqueInput>;
};

export type ReviewCreateWithoutItemMetaInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutReviewsInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  userTrack?: Maybe<UserTrackCreateOneWithoutReviewsInput>;
};

export type ReviewCreateWithoutUserInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ReviewMetaCreateManyWithoutReviewInput>;
  userTrack?: Maybe<UserTrackCreateOneWithoutReviewsInput>;
};

export type ReviewCreateWithoutUserTrackInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutReviewsInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ReviewMetaCreateManyWithoutReviewInput>;
};

export type ReviewEdge = {
  node: Review;
  cursor: Scalars["String"];
};

export type ReviewMeta = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  review?: Maybe<Review>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ReviewMetaConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<ReviewMetaEdge>>;
  aggregate: AggregateReviewMeta;
};

export type ReviewMetaCreateInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  review?: Maybe<ReviewCreateOneWithoutItemMetaInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ReviewMetaCreateManyWithoutReviewInput = {
  create?: Maybe<Array<ReviewMetaCreateWithoutReviewInput>>;
  connect?: Maybe<Array<ReviewMetaWhereUniqueInput>>;
};

export type ReviewMetaCreateWithoutReviewInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ReviewMetaEdge = {
  node: ReviewMeta;
  cursor: Scalars["String"];
};

export enum ReviewMetaOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  OldIdAsc = "oldId_ASC",
  OldIdDesc = "oldId_DESC",
  ItemOldIdAsc = "itemOldId_ASC",
  ItemOldIdDesc = "itemOldId_DESC",
  MetaTypeAsc = "metaType_ASC",
  MetaTypeDesc = "metaType_DESC",
  MetaNameAsc = "metaName_ASC",
  MetaNameDesc = "metaName_DESC",
  MetaValueAsc = "metaValue_ASC",
  MetaValueDesc = "metaValue_DESC",
  MetaDeletedAsc = "metaDeleted_ASC",
  MetaDeletedDesc = "metaDeleted_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ReviewMetaPreviousValues = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ReviewMetaScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  itemOldId_not?: Maybe<Scalars["String"]>;
  itemOldId_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_not_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_lt?: Maybe<Scalars["String"]>;
  itemOldId_lte?: Maybe<Scalars["String"]>;
  itemOldId_gt?: Maybe<Scalars["String"]>;
  itemOldId_gte?: Maybe<Scalars["String"]>;
  itemOldId_contains?: Maybe<Scalars["String"]>;
  itemOldId_not_contains?: Maybe<Scalars["String"]>;
  itemOldId_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_not_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_ends_with?: Maybe<Scalars["String"]>;
  itemOldId_not_ends_with?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaType_not?: Maybe<Scalars["String"]>;
  metaType_in?: Maybe<Array<Scalars["String"]>>;
  metaType_not_in?: Maybe<Array<Scalars["String"]>>;
  metaType_lt?: Maybe<Scalars["String"]>;
  metaType_lte?: Maybe<Scalars["String"]>;
  metaType_gt?: Maybe<Scalars["String"]>;
  metaType_gte?: Maybe<Scalars["String"]>;
  metaType_contains?: Maybe<Scalars["String"]>;
  metaType_not_contains?: Maybe<Scalars["String"]>;
  metaType_starts_with?: Maybe<Scalars["String"]>;
  metaType_not_starts_with?: Maybe<Scalars["String"]>;
  metaType_ends_with?: Maybe<Scalars["String"]>;
  metaType_not_ends_with?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaName_not?: Maybe<Scalars["String"]>;
  metaName_in?: Maybe<Array<Scalars["String"]>>;
  metaName_not_in?: Maybe<Array<Scalars["String"]>>;
  metaName_lt?: Maybe<Scalars["String"]>;
  metaName_lte?: Maybe<Scalars["String"]>;
  metaName_gt?: Maybe<Scalars["String"]>;
  metaName_gte?: Maybe<Scalars["String"]>;
  metaName_contains?: Maybe<Scalars["String"]>;
  metaName_not_contains?: Maybe<Scalars["String"]>;
  metaName_starts_with?: Maybe<Scalars["String"]>;
  metaName_not_starts_with?: Maybe<Scalars["String"]>;
  metaName_ends_with?: Maybe<Scalars["String"]>;
  metaName_not_ends_with?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaValue_not?: Maybe<Scalars["String"]>;
  metaValue_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_not_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_lt?: Maybe<Scalars["String"]>;
  metaValue_lte?: Maybe<Scalars["String"]>;
  metaValue_gt?: Maybe<Scalars["String"]>;
  metaValue_gte?: Maybe<Scalars["String"]>;
  metaValue_contains?: Maybe<Scalars["String"]>;
  metaValue_not_contains?: Maybe<Scalars["String"]>;
  metaValue_starts_with?: Maybe<Scalars["String"]>;
  metaValue_not_starts_with?: Maybe<Scalars["String"]>;
  metaValue_ends_with?: Maybe<Scalars["String"]>;
  metaValue_not_ends_with?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<ReviewMetaScalarWhereInput>>;
  OR?: Maybe<Array<ReviewMetaScalarWhereInput>>;
  NOT?: Maybe<Array<ReviewMetaScalarWhereInput>>;
};

export type ReviewMetaSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<ReviewMeta>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<ReviewMetaPreviousValues>;
};

export type ReviewMetaSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<ReviewMetaWhereInput>;
  AND?: Maybe<Array<ReviewMetaSubscriptionWhereInput>>;
  OR?: Maybe<Array<ReviewMetaSubscriptionWhereInput>>;
  NOT?: Maybe<Array<ReviewMetaSubscriptionWhereInput>>;
};

export type ReviewMetaUpdateInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  review?: Maybe<ReviewUpdateOneWithoutItemMetaInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ReviewMetaUpdateManyDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ReviewMetaUpdateManyMutationInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ReviewMetaUpdateManyWithoutReviewInput = {
  create?: Maybe<Array<ReviewMetaCreateWithoutReviewInput>>;
  delete?: Maybe<Array<ReviewMetaWhereUniqueInput>>;
  connect?: Maybe<Array<ReviewMetaWhereUniqueInput>>;
  disconnect?: Maybe<Array<ReviewMetaWhereUniqueInput>>;
  update?: Maybe<Array<ReviewMetaUpdateWithWhereUniqueWithoutReviewInput>>;
  upsert?: Maybe<Array<ReviewMetaUpsertWithWhereUniqueWithoutReviewInput>>;
  deleteMany?: Maybe<Array<ReviewMetaScalarWhereInput>>;
  updateMany?: Maybe<Array<ReviewMetaUpdateManyWithWhereNestedInput>>;
};

export type ReviewMetaUpdateManyWithWhereNestedInput = {
  where: ReviewMetaScalarWhereInput;
  data: ReviewMetaUpdateManyDataInput;
};

export type ReviewMetaUpdateWithoutReviewDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ReviewMetaUpdateWithWhereUniqueWithoutReviewInput = {
  where: ReviewMetaWhereUniqueInput;
  data: ReviewMetaUpdateWithoutReviewDataInput;
};

export type ReviewMetaUpsertWithWhereUniqueWithoutReviewInput = {
  where: ReviewMetaWhereUniqueInput;
  update: ReviewMetaUpdateWithoutReviewDataInput;
  create: ReviewMetaCreateWithoutReviewInput;
};

export type ReviewMetaWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  itemOldId_not?: Maybe<Scalars["String"]>;
  itemOldId_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_not_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_lt?: Maybe<Scalars["String"]>;
  itemOldId_lte?: Maybe<Scalars["String"]>;
  itemOldId_gt?: Maybe<Scalars["String"]>;
  itemOldId_gte?: Maybe<Scalars["String"]>;
  itemOldId_contains?: Maybe<Scalars["String"]>;
  itemOldId_not_contains?: Maybe<Scalars["String"]>;
  itemOldId_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_not_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_ends_with?: Maybe<Scalars["String"]>;
  itemOldId_not_ends_with?: Maybe<Scalars["String"]>;
  review?: Maybe<ReviewWhereInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaType_not?: Maybe<Scalars["String"]>;
  metaType_in?: Maybe<Array<Scalars["String"]>>;
  metaType_not_in?: Maybe<Array<Scalars["String"]>>;
  metaType_lt?: Maybe<Scalars["String"]>;
  metaType_lte?: Maybe<Scalars["String"]>;
  metaType_gt?: Maybe<Scalars["String"]>;
  metaType_gte?: Maybe<Scalars["String"]>;
  metaType_contains?: Maybe<Scalars["String"]>;
  metaType_not_contains?: Maybe<Scalars["String"]>;
  metaType_starts_with?: Maybe<Scalars["String"]>;
  metaType_not_starts_with?: Maybe<Scalars["String"]>;
  metaType_ends_with?: Maybe<Scalars["String"]>;
  metaType_not_ends_with?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaName_not?: Maybe<Scalars["String"]>;
  metaName_in?: Maybe<Array<Scalars["String"]>>;
  metaName_not_in?: Maybe<Array<Scalars["String"]>>;
  metaName_lt?: Maybe<Scalars["String"]>;
  metaName_lte?: Maybe<Scalars["String"]>;
  metaName_gt?: Maybe<Scalars["String"]>;
  metaName_gte?: Maybe<Scalars["String"]>;
  metaName_contains?: Maybe<Scalars["String"]>;
  metaName_not_contains?: Maybe<Scalars["String"]>;
  metaName_starts_with?: Maybe<Scalars["String"]>;
  metaName_not_starts_with?: Maybe<Scalars["String"]>;
  metaName_ends_with?: Maybe<Scalars["String"]>;
  metaName_not_ends_with?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaValue_not?: Maybe<Scalars["String"]>;
  metaValue_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_not_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_lt?: Maybe<Scalars["String"]>;
  metaValue_lte?: Maybe<Scalars["String"]>;
  metaValue_gt?: Maybe<Scalars["String"]>;
  metaValue_gte?: Maybe<Scalars["String"]>;
  metaValue_contains?: Maybe<Scalars["String"]>;
  metaValue_not_contains?: Maybe<Scalars["String"]>;
  metaValue_starts_with?: Maybe<Scalars["String"]>;
  metaValue_not_starts_with?: Maybe<Scalars["String"]>;
  metaValue_ends_with?: Maybe<Scalars["String"]>;
  metaValue_not_ends_with?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<ReviewMetaWhereInput>>;
  OR?: Maybe<Array<ReviewMetaWhereInput>>;
  NOT?: Maybe<Array<ReviewMetaWhereInput>>;
};

export type ReviewMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
};

export enum ReviewOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  OldIdAsc = "oldId_ASC",
  OldIdDesc = "oldId_DESC",
  ItemTypeAsc = "itemType_ASC",
  ItemTypeDesc = "itemType_DESC",
  ItemStatusAsc = "itemStatus_ASC",
  ItemStatusDesc = "itemStatus_DESC",
  ItemUrlSegmentAsc = "itemUrlSegment_ASC",
  ItemUrlSegmentDesc = "itemUrlSegment_DESC",
  ItemMimeTypeAsc = "itemMimeType_ASC",
  ItemMimeTypeDesc = "itemMimeType_DESC",
  ItemNameAsc = "itemName_ASC",
  ItemNameDesc = "itemName_DESC",
  ItemContentAsc = "itemContent_ASC",
  ItemContentDesc = "itemContent_DESC",
  ItemDeletedAsc = "itemDeleted_ASC",
  ItemDeletedDesc = "itemDeleted_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ReviewPreviousValues = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ReviewScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemType_not?: Maybe<Scalars["String"]>;
  itemType_in?: Maybe<Array<Scalars["String"]>>;
  itemType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemType_lt?: Maybe<Scalars["String"]>;
  itemType_lte?: Maybe<Scalars["String"]>;
  itemType_gt?: Maybe<Scalars["String"]>;
  itemType_gte?: Maybe<Scalars["String"]>;
  itemType_contains?: Maybe<Scalars["String"]>;
  itemType_not_contains?: Maybe<Scalars["String"]>;
  itemType_starts_with?: Maybe<Scalars["String"]>;
  itemType_not_starts_with?: Maybe<Scalars["String"]>;
  itemType_ends_with?: Maybe<Scalars["String"]>;
  itemType_not_ends_with?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemStatus_not?: Maybe<Scalars["String"]>;
  itemStatus_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_not_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_lt?: Maybe<Scalars["String"]>;
  itemStatus_lte?: Maybe<Scalars["String"]>;
  itemStatus_gt?: Maybe<Scalars["String"]>;
  itemStatus_gte?: Maybe<Scalars["String"]>;
  itemStatus_contains?: Maybe<Scalars["String"]>;
  itemStatus_not_contains?: Maybe<Scalars["String"]>;
  itemStatus_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_not_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_ends_with?: Maybe<Scalars["String"]>;
  itemStatus_not_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemUrlSegment_not?: Maybe<Scalars["String"]>;
  itemUrlSegment_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_not_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_lt?: Maybe<Scalars["String"]>;
  itemUrlSegment_lte?: Maybe<Scalars["String"]>;
  itemUrlSegment_gt?: Maybe<Scalars["String"]>;
  itemUrlSegment_gte?: Maybe<Scalars["String"]>;
  itemUrlSegment_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemMimeType_not?: Maybe<Scalars["String"]>;
  itemMimeType_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_lt?: Maybe<Scalars["String"]>;
  itemMimeType_lte?: Maybe<Scalars["String"]>;
  itemMimeType_gt?: Maybe<Scalars["String"]>;
  itemMimeType_gte?: Maybe<Scalars["String"]>;
  itemMimeType_contains?: Maybe<Scalars["String"]>;
  itemMimeType_not_contains?: Maybe<Scalars["String"]>;
  itemMimeType_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_ends_with?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemName_not?: Maybe<Scalars["String"]>;
  itemName_in?: Maybe<Array<Scalars["String"]>>;
  itemName_not_in?: Maybe<Array<Scalars["String"]>>;
  itemName_lt?: Maybe<Scalars["String"]>;
  itemName_lte?: Maybe<Scalars["String"]>;
  itemName_gt?: Maybe<Scalars["String"]>;
  itemName_gte?: Maybe<Scalars["String"]>;
  itemName_contains?: Maybe<Scalars["String"]>;
  itemName_not_contains?: Maybe<Scalars["String"]>;
  itemName_starts_with?: Maybe<Scalars["String"]>;
  itemName_not_starts_with?: Maybe<Scalars["String"]>;
  itemName_ends_with?: Maybe<Scalars["String"]>;
  itemName_not_ends_with?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemContent_not?: Maybe<Scalars["String"]>;
  itemContent_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_not_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_lt?: Maybe<Scalars["String"]>;
  itemContent_lte?: Maybe<Scalars["String"]>;
  itemContent_gt?: Maybe<Scalars["String"]>;
  itemContent_gte?: Maybe<Scalars["String"]>;
  itemContent_contains?: Maybe<Scalars["String"]>;
  itemContent_not_contains?: Maybe<Scalars["String"]>;
  itemContent_starts_with?: Maybe<Scalars["String"]>;
  itemContent_not_starts_with?: Maybe<Scalars["String"]>;
  itemContent_ends_with?: Maybe<Scalars["String"]>;
  itemContent_not_ends_with?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<ReviewScalarWhereInput>>;
  OR?: Maybe<Array<ReviewScalarWhereInput>>;
  NOT?: Maybe<Array<ReviewScalarWhereInput>>;
};

export type ReviewSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<Review>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<ReviewPreviousValues>;
};

export type ReviewSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<ReviewWhereInput>;
  AND?: Maybe<Array<ReviewSubscriptionWhereInput>>;
  OR?: Maybe<Array<ReviewSubscriptionWhereInput>>;
  NOT?: Maybe<Array<ReviewSubscriptionWhereInput>>;
};

export type ReviewUpdateInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutReviewsInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ReviewMetaUpdateManyWithoutReviewInput>;
  userTrack?: Maybe<UserTrackUpdateOneWithoutReviewsInput>;
};

export type ReviewUpdateManyDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ReviewUpdateManyMutationInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type ReviewUpdateManyWithoutUserInput = {
  create?: Maybe<Array<ReviewCreateWithoutUserInput>>;
  delete?: Maybe<Array<ReviewWhereUniqueInput>>;
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>;
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueWithoutUserInput>>;
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueWithoutUserInput>>;
  deleteMany?: Maybe<Array<ReviewScalarWhereInput>>;
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereNestedInput>>;
};

export type ReviewUpdateManyWithoutUserTrackInput = {
  create?: Maybe<Array<ReviewCreateWithoutUserTrackInput>>;
  delete?: Maybe<Array<ReviewWhereUniqueInput>>;
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>;
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueWithoutUserTrackInput>>;
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueWithoutUserTrackInput>>;
  deleteMany?: Maybe<Array<ReviewScalarWhereInput>>;
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereNestedInput>>;
};

export type ReviewUpdateManyWithWhereNestedInput = {
  where: ReviewScalarWhereInput;
  data: ReviewUpdateManyDataInput;
};

export type ReviewUpdateOneWithoutItemMetaInput = {
  create?: Maybe<ReviewCreateWithoutItemMetaInput>;
  update?: Maybe<ReviewUpdateWithoutItemMetaDataInput>;
  upsert?: Maybe<ReviewUpsertWithoutItemMetaInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<ReviewWhereUniqueInput>;
};

export type ReviewUpdateWithoutItemMetaDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutReviewsInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  userTrack?: Maybe<UserTrackUpdateOneWithoutReviewsInput>;
};

export type ReviewUpdateWithoutUserDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ReviewMetaUpdateManyWithoutReviewInput>;
  userTrack?: Maybe<UserTrackUpdateOneWithoutReviewsInput>;
};

export type ReviewUpdateWithoutUserTrackDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutReviewsInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ReviewMetaUpdateManyWithoutReviewInput>;
};

export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateWithoutUserDataInput;
};

export type ReviewUpdateWithWhereUniqueWithoutUserTrackInput = {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateWithoutUserTrackDataInput;
};

export type ReviewUpsertWithoutItemMetaInput = {
  update: ReviewUpdateWithoutItemMetaDataInput;
  create: ReviewCreateWithoutItemMetaInput;
};

export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateWithoutUserDataInput;
  create: ReviewCreateWithoutUserInput;
};

export type ReviewUpsertWithWhereUniqueWithoutUserTrackInput = {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateWithoutUserTrackDataInput;
  create: ReviewCreateWithoutUserTrackInput;
};

export type ReviewWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  user?: Maybe<UserWhereInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemType_not?: Maybe<Scalars["String"]>;
  itemType_in?: Maybe<Array<Scalars["String"]>>;
  itemType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemType_lt?: Maybe<Scalars["String"]>;
  itemType_lte?: Maybe<Scalars["String"]>;
  itemType_gt?: Maybe<Scalars["String"]>;
  itemType_gte?: Maybe<Scalars["String"]>;
  itemType_contains?: Maybe<Scalars["String"]>;
  itemType_not_contains?: Maybe<Scalars["String"]>;
  itemType_starts_with?: Maybe<Scalars["String"]>;
  itemType_not_starts_with?: Maybe<Scalars["String"]>;
  itemType_ends_with?: Maybe<Scalars["String"]>;
  itemType_not_ends_with?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemStatus_not?: Maybe<Scalars["String"]>;
  itemStatus_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_not_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_lt?: Maybe<Scalars["String"]>;
  itemStatus_lte?: Maybe<Scalars["String"]>;
  itemStatus_gt?: Maybe<Scalars["String"]>;
  itemStatus_gte?: Maybe<Scalars["String"]>;
  itemStatus_contains?: Maybe<Scalars["String"]>;
  itemStatus_not_contains?: Maybe<Scalars["String"]>;
  itemStatus_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_not_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_ends_with?: Maybe<Scalars["String"]>;
  itemStatus_not_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemUrlSegment_not?: Maybe<Scalars["String"]>;
  itemUrlSegment_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_not_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_lt?: Maybe<Scalars["String"]>;
  itemUrlSegment_lte?: Maybe<Scalars["String"]>;
  itemUrlSegment_gt?: Maybe<Scalars["String"]>;
  itemUrlSegment_gte?: Maybe<Scalars["String"]>;
  itemUrlSegment_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemMimeType_not?: Maybe<Scalars["String"]>;
  itemMimeType_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_lt?: Maybe<Scalars["String"]>;
  itemMimeType_lte?: Maybe<Scalars["String"]>;
  itemMimeType_gt?: Maybe<Scalars["String"]>;
  itemMimeType_gte?: Maybe<Scalars["String"]>;
  itemMimeType_contains?: Maybe<Scalars["String"]>;
  itemMimeType_not_contains?: Maybe<Scalars["String"]>;
  itemMimeType_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_ends_with?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemName_not?: Maybe<Scalars["String"]>;
  itemName_in?: Maybe<Array<Scalars["String"]>>;
  itemName_not_in?: Maybe<Array<Scalars["String"]>>;
  itemName_lt?: Maybe<Scalars["String"]>;
  itemName_lte?: Maybe<Scalars["String"]>;
  itemName_gt?: Maybe<Scalars["String"]>;
  itemName_gte?: Maybe<Scalars["String"]>;
  itemName_contains?: Maybe<Scalars["String"]>;
  itemName_not_contains?: Maybe<Scalars["String"]>;
  itemName_starts_with?: Maybe<Scalars["String"]>;
  itemName_not_starts_with?: Maybe<Scalars["String"]>;
  itemName_ends_with?: Maybe<Scalars["String"]>;
  itemName_not_ends_with?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemContent_not?: Maybe<Scalars["String"]>;
  itemContent_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_not_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_lt?: Maybe<Scalars["String"]>;
  itemContent_lte?: Maybe<Scalars["String"]>;
  itemContent_gt?: Maybe<Scalars["String"]>;
  itemContent_gte?: Maybe<Scalars["String"]>;
  itemContent_contains?: Maybe<Scalars["String"]>;
  itemContent_not_contains?: Maybe<Scalars["String"]>;
  itemContent_starts_with?: Maybe<Scalars["String"]>;
  itemContent_not_starts_with?: Maybe<Scalars["String"]>;
  itemContent_ends_with?: Maybe<Scalars["String"]>;
  itemContent_not_ends_with?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemDeleted_not?: Maybe<Scalars["Boolean"]>;
  itemMeta_every?: Maybe<ReviewMetaWhereInput>;
  itemMeta_some?: Maybe<ReviewMetaWhereInput>;
  itemMeta_none?: Maybe<ReviewMetaWhereInput>;
  userTrack?: Maybe<UserTrackWhereInput>;
  AND?: Maybe<Array<ReviewWhereInput>>;
  OR?: Maybe<Array<ReviewWhereInput>>;
  NOT?: Maybe<Array<ReviewWhereInput>>;
};

export type ReviewWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
};

export type Subscription = {
  blogPost?: Maybe<BlogPostSubscriptionPayload>;
  blogPostMeta?: Maybe<BlogPostMetaSubscriptionPayload>;
  file?: Maybe<FileSubscriptionPayload>;
  fileMeta?: Maybe<FileMetaSubscriptionPayload>;
  profilePage?: Maybe<ProfilePageSubscriptionPayload>;
  profilePageMeta?: Maybe<ProfilePageMetaSubscriptionPayload>;
  review?: Maybe<ReviewSubscriptionPayload>;
  reviewMeta?: Maybe<ReviewMetaSubscriptionPayload>;
  user?: Maybe<UserSubscriptionPayload>;
  userFeedback?: Maybe<UserFeedbackSubscriptionPayload>;
  userFeedbackMeta?: Maybe<UserFeedbackMetaSubscriptionPayload>;
  userMeta?: Maybe<UserMetaSubscriptionPayload>;
  userTrack?: Maybe<UserTrackSubscriptionPayload>;
  userTrackMeta?: Maybe<UserTrackMetaSubscriptionPayload>;
};

export type SubscriptionBlogPostArgs = {
  where?: Maybe<BlogPostSubscriptionWhereInput>;
};

export type SubscriptionBlogPostMetaArgs = {
  where?: Maybe<BlogPostMetaSubscriptionWhereInput>;
};

export type SubscriptionFileArgs = {
  where?: Maybe<FileSubscriptionWhereInput>;
};

export type SubscriptionFileMetaArgs = {
  where?: Maybe<FileMetaSubscriptionWhereInput>;
};

export type SubscriptionProfilePageArgs = {
  where?: Maybe<ProfilePageSubscriptionWhereInput>;
};

export type SubscriptionProfilePageMetaArgs = {
  where?: Maybe<ProfilePageMetaSubscriptionWhereInput>;
};

export type SubscriptionReviewArgs = {
  where?: Maybe<ReviewSubscriptionWhereInput>;
};

export type SubscriptionReviewMetaArgs = {
  where?: Maybe<ReviewMetaSubscriptionWhereInput>;
};

export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>;
};

export type SubscriptionUserFeedbackArgs = {
  where?: Maybe<UserFeedbackSubscriptionWhereInput>;
};

export type SubscriptionUserFeedbackMetaArgs = {
  where?: Maybe<UserFeedbackMetaSubscriptionWhereInput>;
};

export type SubscriptionUserMetaArgs = {
  where?: Maybe<UserMetaSubscriptionWhereInput>;
};

export type SubscriptionUserTrackArgs = {
  where?: Maybe<UserTrackSubscriptionWhereInput>;
};

export type SubscriptionUserTrackMetaArgs = {
  where?: Maybe<UserTrackMetaSubscriptionWhereInput>;
};

export type User = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userMeta?: Maybe<Array<UserMeta>>;
  userTracks?: Maybe<Array<UserTrack>>;
  userFeedbacks?: Maybe<Array<UserFeedback>>;
  profilePages?: Maybe<Array<ProfilePage>>;
  blogPosts?: Maybe<Array<BlogPost>>;
  reviews?: Maybe<Array<Review>>;
  files?: Maybe<Array<File>>;
};

export type UserUserMetaArgs = {
  where?: Maybe<UserMetaWhereInput>;
  orderBy?: Maybe<UserMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserUserTracksArgs = {
  where?: Maybe<UserTrackWhereInput>;
  orderBy?: Maybe<UserTrackOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserUserFeedbacksArgs = {
  where?: Maybe<UserFeedbackWhereInput>;
  orderBy?: Maybe<UserFeedbackOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserProfilePagesArgs = {
  where?: Maybe<ProfilePageWhereInput>;
  orderBy?: Maybe<ProfilePageOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserBlogPostsArgs = {
  where?: Maybe<BlogPostWhereInput>;
  orderBy?: Maybe<BlogPostOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserReviewsArgs = {
  where?: Maybe<ReviewWhereInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserFilesArgs = {
  where?: Maybe<FileWhereInput>;
  orderBy?: Maybe<FileOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<UserEdge>>;
  aggregate: AggregateUser;
};

export type UserCreateInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userTracks?: Maybe<UserTrackCreateManyWithoutUserInput>;
  userFeedbacks?: Maybe<UserFeedbackCreateManyWithoutUserInput>;
  profilePages?: Maybe<ProfilePageCreateManyWithoutUserInput>;
  blogPosts?: Maybe<BlogPostCreateManyWithoutUserInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  files?: Maybe<FileCreateManyWithoutUserInput>;
};

export type UserCreateOneWithoutBlogPostsInput = {
  create?: Maybe<UserCreateWithoutBlogPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutFilesInput = {
  create?: Maybe<UserCreateWithoutFilesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutProfilePagesInput = {
  create?: Maybe<UserCreateWithoutProfilePagesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutReviewsInput = {
  create?: Maybe<UserCreateWithoutReviewsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutUserFeedbacksInput = {
  create?: Maybe<UserCreateWithoutUserFeedbacksInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutUserMetaInput = {
  create?: Maybe<UserCreateWithoutUserMetaInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutUserTracksInput = {
  create?: Maybe<UserCreateWithoutUserTracksInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutBlogPostsInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userTracks?: Maybe<UserTrackCreateManyWithoutUserInput>;
  userFeedbacks?: Maybe<UserFeedbackCreateManyWithoutUserInput>;
  profilePages?: Maybe<ProfilePageCreateManyWithoutUserInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  files?: Maybe<FileCreateManyWithoutUserInput>;
};

export type UserCreateWithoutFilesInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userTracks?: Maybe<UserTrackCreateManyWithoutUserInput>;
  userFeedbacks?: Maybe<UserFeedbackCreateManyWithoutUserInput>;
  profilePages?: Maybe<ProfilePageCreateManyWithoutUserInput>;
  blogPosts?: Maybe<BlogPostCreateManyWithoutUserInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
};

export type UserCreateWithoutProfilePagesInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userTracks?: Maybe<UserTrackCreateManyWithoutUserInput>;
  userFeedbacks?: Maybe<UserFeedbackCreateManyWithoutUserInput>;
  blogPosts?: Maybe<BlogPostCreateManyWithoutUserInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  files?: Maybe<FileCreateManyWithoutUserInput>;
};

export type UserCreateWithoutReviewsInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userTracks?: Maybe<UserTrackCreateManyWithoutUserInput>;
  userFeedbacks?: Maybe<UserFeedbackCreateManyWithoutUserInput>;
  profilePages?: Maybe<ProfilePageCreateManyWithoutUserInput>;
  blogPosts?: Maybe<BlogPostCreateManyWithoutUserInput>;
  files?: Maybe<FileCreateManyWithoutUserInput>;
};

export type UserCreateWithoutUserFeedbacksInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userTracks?: Maybe<UserTrackCreateManyWithoutUserInput>;
  profilePages?: Maybe<ProfilePageCreateManyWithoutUserInput>;
  blogPosts?: Maybe<BlogPostCreateManyWithoutUserInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  files?: Maybe<FileCreateManyWithoutUserInput>;
};

export type UserCreateWithoutUserMetaInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userTracks?: Maybe<UserTrackCreateManyWithoutUserInput>;
  userFeedbacks?: Maybe<UserFeedbackCreateManyWithoutUserInput>;
  profilePages?: Maybe<ProfilePageCreateManyWithoutUserInput>;
  blogPosts?: Maybe<BlogPostCreateManyWithoutUserInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  files?: Maybe<FileCreateManyWithoutUserInput>;
};

export type UserCreateWithoutUserTracksInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userFeedbacks?: Maybe<UserFeedbackCreateManyWithoutUserInput>;
  profilePages?: Maybe<ProfilePageCreateManyWithoutUserInput>;
  blogPosts?: Maybe<BlogPostCreateManyWithoutUserInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  files?: Maybe<FileCreateManyWithoutUserInput>;
};

export type UserEdge = {
  node: User;
  cursor: Scalars["String"];
};

export type UserFeedback = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<Array<UserFeedbackMeta>>;
};

export type UserFeedbackItemMetaArgs = {
  where?: Maybe<UserFeedbackMetaWhereInput>;
  orderBy?: Maybe<UserFeedbackMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserFeedbackConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<UserFeedbackEdge>>;
  aggregate: AggregateUserFeedback;
};

export type UserFeedbackCreateInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutUserFeedbacksInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<UserFeedbackMetaCreateManyWithoutUserFeedbackInput>;
};

export type UserFeedbackCreateManyWithoutUserInput = {
  create?: Maybe<Array<UserFeedbackCreateWithoutUserInput>>;
  connect?: Maybe<Array<UserFeedbackWhereUniqueInput>>;
};

export type UserFeedbackCreateOneWithoutItemMetaInput = {
  create?: Maybe<UserFeedbackCreateWithoutItemMetaInput>;
  connect?: Maybe<UserFeedbackWhereUniqueInput>;
};

export type UserFeedbackCreateWithoutItemMetaInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutUserFeedbacksInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserFeedbackCreateWithoutUserInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<UserFeedbackMetaCreateManyWithoutUserFeedbackInput>;
};

export type UserFeedbackEdge = {
  node: UserFeedback;
  cursor: Scalars["String"];
};

export type UserFeedbackMeta = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  userFeedback?: Maybe<UserFeedback>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserFeedbackMetaConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<UserFeedbackMetaEdge>>;
  aggregate: AggregateUserFeedbackMeta;
};

export type UserFeedbackMetaCreateInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  userFeedback?: Maybe<UserFeedbackCreateOneWithoutItemMetaInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserFeedbackMetaCreateManyWithoutUserFeedbackInput = {
  create?: Maybe<Array<UserFeedbackMetaCreateWithoutUserFeedbackInput>>;
  connect?: Maybe<Array<UserFeedbackMetaWhereUniqueInput>>;
};

export type UserFeedbackMetaCreateWithoutUserFeedbackInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserFeedbackMetaEdge = {
  node: UserFeedbackMeta;
  cursor: Scalars["String"];
};

export enum UserFeedbackMetaOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  OldIdAsc = "oldId_ASC",
  OldIdDesc = "oldId_DESC",
  ItemOldIdAsc = "itemOldId_ASC",
  ItemOldIdDesc = "itemOldId_DESC",
  MetaTypeAsc = "metaType_ASC",
  MetaTypeDesc = "metaType_DESC",
  MetaNameAsc = "metaName_ASC",
  MetaNameDesc = "metaName_DESC",
  MetaValueAsc = "metaValue_ASC",
  MetaValueDesc = "metaValue_DESC",
  MetaDeletedAsc = "metaDeleted_ASC",
  MetaDeletedDesc = "metaDeleted_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserFeedbackMetaPreviousValues = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserFeedbackMetaScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  itemOldId_not?: Maybe<Scalars["String"]>;
  itemOldId_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_not_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_lt?: Maybe<Scalars["String"]>;
  itemOldId_lte?: Maybe<Scalars["String"]>;
  itemOldId_gt?: Maybe<Scalars["String"]>;
  itemOldId_gte?: Maybe<Scalars["String"]>;
  itemOldId_contains?: Maybe<Scalars["String"]>;
  itemOldId_not_contains?: Maybe<Scalars["String"]>;
  itemOldId_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_not_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_ends_with?: Maybe<Scalars["String"]>;
  itemOldId_not_ends_with?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaType_not?: Maybe<Scalars["String"]>;
  metaType_in?: Maybe<Array<Scalars["String"]>>;
  metaType_not_in?: Maybe<Array<Scalars["String"]>>;
  metaType_lt?: Maybe<Scalars["String"]>;
  metaType_lte?: Maybe<Scalars["String"]>;
  metaType_gt?: Maybe<Scalars["String"]>;
  metaType_gte?: Maybe<Scalars["String"]>;
  metaType_contains?: Maybe<Scalars["String"]>;
  metaType_not_contains?: Maybe<Scalars["String"]>;
  metaType_starts_with?: Maybe<Scalars["String"]>;
  metaType_not_starts_with?: Maybe<Scalars["String"]>;
  metaType_ends_with?: Maybe<Scalars["String"]>;
  metaType_not_ends_with?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaName_not?: Maybe<Scalars["String"]>;
  metaName_in?: Maybe<Array<Scalars["String"]>>;
  metaName_not_in?: Maybe<Array<Scalars["String"]>>;
  metaName_lt?: Maybe<Scalars["String"]>;
  metaName_lte?: Maybe<Scalars["String"]>;
  metaName_gt?: Maybe<Scalars["String"]>;
  metaName_gte?: Maybe<Scalars["String"]>;
  metaName_contains?: Maybe<Scalars["String"]>;
  metaName_not_contains?: Maybe<Scalars["String"]>;
  metaName_starts_with?: Maybe<Scalars["String"]>;
  metaName_not_starts_with?: Maybe<Scalars["String"]>;
  metaName_ends_with?: Maybe<Scalars["String"]>;
  metaName_not_ends_with?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaValue_not?: Maybe<Scalars["String"]>;
  metaValue_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_not_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_lt?: Maybe<Scalars["String"]>;
  metaValue_lte?: Maybe<Scalars["String"]>;
  metaValue_gt?: Maybe<Scalars["String"]>;
  metaValue_gte?: Maybe<Scalars["String"]>;
  metaValue_contains?: Maybe<Scalars["String"]>;
  metaValue_not_contains?: Maybe<Scalars["String"]>;
  metaValue_starts_with?: Maybe<Scalars["String"]>;
  metaValue_not_starts_with?: Maybe<Scalars["String"]>;
  metaValue_ends_with?: Maybe<Scalars["String"]>;
  metaValue_not_ends_with?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<UserFeedbackMetaScalarWhereInput>>;
  OR?: Maybe<Array<UserFeedbackMetaScalarWhereInput>>;
  NOT?: Maybe<Array<UserFeedbackMetaScalarWhereInput>>;
};

export type UserFeedbackMetaSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<UserFeedbackMeta>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<UserFeedbackMetaPreviousValues>;
};

export type UserFeedbackMetaSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<UserFeedbackMetaWhereInput>;
  AND?: Maybe<Array<UserFeedbackMetaSubscriptionWhereInput>>;
  OR?: Maybe<Array<UserFeedbackMetaSubscriptionWhereInput>>;
  NOT?: Maybe<Array<UserFeedbackMetaSubscriptionWhereInput>>;
};

export type UserFeedbackMetaUpdateInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  userFeedback?: Maybe<UserFeedbackUpdateOneWithoutItemMetaInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserFeedbackMetaUpdateManyDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserFeedbackMetaUpdateManyMutationInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserFeedbackMetaUpdateManyWithoutUserFeedbackInput = {
  create?: Maybe<Array<UserFeedbackMetaCreateWithoutUserFeedbackInput>>;
  delete?: Maybe<Array<UserFeedbackMetaWhereUniqueInput>>;
  connect?: Maybe<Array<UserFeedbackMetaWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserFeedbackMetaWhereUniqueInput>>;
  update?: Maybe<
    Array<UserFeedbackMetaUpdateWithWhereUniqueWithoutUserFeedbackInput>
  >;
  upsert?: Maybe<
    Array<UserFeedbackMetaUpsertWithWhereUniqueWithoutUserFeedbackInput>
  >;
  deleteMany?: Maybe<Array<UserFeedbackMetaScalarWhereInput>>;
  updateMany?: Maybe<Array<UserFeedbackMetaUpdateManyWithWhereNestedInput>>;
};

export type UserFeedbackMetaUpdateManyWithWhereNestedInput = {
  where: UserFeedbackMetaScalarWhereInput;
  data: UserFeedbackMetaUpdateManyDataInput;
};

export type UserFeedbackMetaUpdateWithoutUserFeedbackDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserFeedbackMetaUpdateWithWhereUniqueWithoutUserFeedbackInput = {
  where: UserFeedbackMetaWhereUniqueInput;
  data: UserFeedbackMetaUpdateWithoutUserFeedbackDataInput;
};

export type UserFeedbackMetaUpsertWithWhereUniqueWithoutUserFeedbackInput = {
  where: UserFeedbackMetaWhereUniqueInput;
  update: UserFeedbackMetaUpdateWithoutUserFeedbackDataInput;
  create: UserFeedbackMetaCreateWithoutUserFeedbackInput;
};

export type UserFeedbackMetaWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  itemOldId_not?: Maybe<Scalars["String"]>;
  itemOldId_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_not_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_lt?: Maybe<Scalars["String"]>;
  itemOldId_lte?: Maybe<Scalars["String"]>;
  itemOldId_gt?: Maybe<Scalars["String"]>;
  itemOldId_gte?: Maybe<Scalars["String"]>;
  itemOldId_contains?: Maybe<Scalars["String"]>;
  itemOldId_not_contains?: Maybe<Scalars["String"]>;
  itemOldId_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_not_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_ends_with?: Maybe<Scalars["String"]>;
  itemOldId_not_ends_with?: Maybe<Scalars["String"]>;
  userFeedback?: Maybe<UserFeedbackWhereInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaType_not?: Maybe<Scalars["String"]>;
  metaType_in?: Maybe<Array<Scalars["String"]>>;
  metaType_not_in?: Maybe<Array<Scalars["String"]>>;
  metaType_lt?: Maybe<Scalars["String"]>;
  metaType_lte?: Maybe<Scalars["String"]>;
  metaType_gt?: Maybe<Scalars["String"]>;
  metaType_gte?: Maybe<Scalars["String"]>;
  metaType_contains?: Maybe<Scalars["String"]>;
  metaType_not_contains?: Maybe<Scalars["String"]>;
  metaType_starts_with?: Maybe<Scalars["String"]>;
  metaType_not_starts_with?: Maybe<Scalars["String"]>;
  metaType_ends_with?: Maybe<Scalars["String"]>;
  metaType_not_ends_with?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaName_not?: Maybe<Scalars["String"]>;
  metaName_in?: Maybe<Array<Scalars["String"]>>;
  metaName_not_in?: Maybe<Array<Scalars["String"]>>;
  metaName_lt?: Maybe<Scalars["String"]>;
  metaName_lte?: Maybe<Scalars["String"]>;
  metaName_gt?: Maybe<Scalars["String"]>;
  metaName_gte?: Maybe<Scalars["String"]>;
  metaName_contains?: Maybe<Scalars["String"]>;
  metaName_not_contains?: Maybe<Scalars["String"]>;
  metaName_starts_with?: Maybe<Scalars["String"]>;
  metaName_not_starts_with?: Maybe<Scalars["String"]>;
  metaName_ends_with?: Maybe<Scalars["String"]>;
  metaName_not_ends_with?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaValue_not?: Maybe<Scalars["String"]>;
  metaValue_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_not_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_lt?: Maybe<Scalars["String"]>;
  metaValue_lte?: Maybe<Scalars["String"]>;
  metaValue_gt?: Maybe<Scalars["String"]>;
  metaValue_gte?: Maybe<Scalars["String"]>;
  metaValue_contains?: Maybe<Scalars["String"]>;
  metaValue_not_contains?: Maybe<Scalars["String"]>;
  metaValue_starts_with?: Maybe<Scalars["String"]>;
  metaValue_not_starts_with?: Maybe<Scalars["String"]>;
  metaValue_ends_with?: Maybe<Scalars["String"]>;
  metaValue_not_ends_with?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<UserFeedbackMetaWhereInput>>;
  OR?: Maybe<Array<UserFeedbackMetaWhereInput>>;
  NOT?: Maybe<Array<UserFeedbackMetaWhereInput>>;
};

export type UserFeedbackMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
};

export enum UserFeedbackOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  OldIdAsc = "oldId_ASC",
  OldIdDesc = "oldId_DESC",
  ItemTypeAsc = "itemType_ASC",
  ItemTypeDesc = "itemType_DESC",
  ItemStatusAsc = "itemStatus_ASC",
  ItemStatusDesc = "itemStatus_DESC",
  ItemUrlSegmentAsc = "itemUrlSegment_ASC",
  ItemUrlSegmentDesc = "itemUrlSegment_DESC",
  ItemMimeTypeAsc = "itemMimeType_ASC",
  ItemMimeTypeDesc = "itemMimeType_DESC",
  ItemNameAsc = "itemName_ASC",
  ItemNameDesc = "itemName_DESC",
  ItemContentAsc = "itemContent_ASC",
  ItemContentDesc = "itemContent_DESC",
  ItemDeletedAsc = "itemDeleted_ASC",
  ItemDeletedDesc = "itemDeleted_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserFeedbackPreviousValues = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserFeedbackScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemType_not?: Maybe<Scalars["String"]>;
  itemType_in?: Maybe<Array<Scalars["String"]>>;
  itemType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemType_lt?: Maybe<Scalars["String"]>;
  itemType_lte?: Maybe<Scalars["String"]>;
  itemType_gt?: Maybe<Scalars["String"]>;
  itemType_gte?: Maybe<Scalars["String"]>;
  itemType_contains?: Maybe<Scalars["String"]>;
  itemType_not_contains?: Maybe<Scalars["String"]>;
  itemType_starts_with?: Maybe<Scalars["String"]>;
  itemType_not_starts_with?: Maybe<Scalars["String"]>;
  itemType_ends_with?: Maybe<Scalars["String"]>;
  itemType_not_ends_with?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemStatus_not?: Maybe<Scalars["String"]>;
  itemStatus_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_not_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_lt?: Maybe<Scalars["String"]>;
  itemStatus_lte?: Maybe<Scalars["String"]>;
  itemStatus_gt?: Maybe<Scalars["String"]>;
  itemStatus_gte?: Maybe<Scalars["String"]>;
  itemStatus_contains?: Maybe<Scalars["String"]>;
  itemStatus_not_contains?: Maybe<Scalars["String"]>;
  itemStatus_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_not_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_ends_with?: Maybe<Scalars["String"]>;
  itemStatus_not_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemUrlSegment_not?: Maybe<Scalars["String"]>;
  itemUrlSegment_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_not_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_lt?: Maybe<Scalars["String"]>;
  itemUrlSegment_lte?: Maybe<Scalars["String"]>;
  itemUrlSegment_gt?: Maybe<Scalars["String"]>;
  itemUrlSegment_gte?: Maybe<Scalars["String"]>;
  itemUrlSegment_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemMimeType_not?: Maybe<Scalars["String"]>;
  itemMimeType_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_lt?: Maybe<Scalars["String"]>;
  itemMimeType_lte?: Maybe<Scalars["String"]>;
  itemMimeType_gt?: Maybe<Scalars["String"]>;
  itemMimeType_gte?: Maybe<Scalars["String"]>;
  itemMimeType_contains?: Maybe<Scalars["String"]>;
  itemMimeType_not_contains?: Maybe<Scalars["String"]>;
  itemMimeType_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_ends_with?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemName_not?: Maybe<Scalars["String"]>;
  itemName_in?: Maybe<Array<Scalars["String"]>>;
  itemName_not_in?: Maybe<Array<Scalars["String"]>>;
  itemName_lt?: Maybe<Scalars["String"]>;
  itemName_lte?: Maybe<Scalars["String"]>;
  itemName_gt?: Maybe<Scalars["String"]>;
  itemName_gte?: Maybe<Scalars["String"]>;
  itemName_contains?: Maybe<Scalars["String"]>;
  itemName_not_contains?: Maybe<Scalars["String"]>;
  itemName_starts_with?: Maybe<Scalars["String"]>;
  itemName_not_starts_with?: Maybe<Scalars["String"]>;
  itemName_ends_with?: Maybe<Scalars["String"]>;
  itemName_not_ends_with?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemContent_not?: Maybe<Scalars["String"]>;
  itemContent_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_not_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_lt?: Maybe<Scalars["String"]>;
  itemContent_lte?: Maybe<Scalars["String"]>;
  itemContent_gt?: Maybe<Scalars["String"]>;
  itemContent_gte?: Maybe<Scalars["String"]>;
  itemContent_contains?: Maybe<Scalars["String"]>;
  itemContent_not_contains?: Maybe<Scalars["String"]>;
  itemContent_starts_with?: Maybe<Scalars["String"]>;
  itemContent_not_starts_with?: Maybe<Scalars["String"]>;
  itemContent_ends_with?: Maybe<Scalars["String"]>;
  itemContent_not_ends_with?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<UserFeedbackScalarWhereInput>>;
  OR?: Maybe<Array<UserFeedbackScalarWhereInput>>;
  NOT?: Maybe<Array<UserFeedbackScalarWhereInput>>;
};

export type UserFeedbackSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<UserFeedback>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<UserFeedbackPreviousValues>;
};

export type UserFeedbackSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<UserFeedbackWhereInput>;
  AND?: Maybe<Array<UserFeedbackSubscriptionWhereInput>>;
  OR?: Maybe<Array<UserFeedbackSubscriptionWhereInput>>;
  NOT?: Maybe<Array<UserFeedbackSubscriptionWhereInput>>;
};

export type UserFeedbackUpdateInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutUserFeedbacksInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<UserFeedbackMetaUpdateManyWithoutUserFeedbackInput>;
};

export type UserFeedbackUpdateManyDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserFeedbackUpdateManyMutationInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserFeedbackUpdateManyWithoutUserInput = {
  create?: Maybe<Array<UserFeedbackCreateWithoutUserInput>>;
  delete?: Maybe<Array<UserFeedbackWhereUniqueInput>>;
  connect?: Maybe<Array<UserFeedbackWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserFeedbackWhereUniqueInput>>;
  update?: Maybe<Array<UserFeedbackUpdateWithWhereUniqueWithoutUserInput>>;
  upsert?: Maybe<Array<UserFeedbackUpsertWithWhereUniqueWithoutUserInput>>;
  deleteMany?: Maybe<Array<UserFeedbackScalarWhereInput>>;
  updateMany?: Maybe<Array<UserFeedbackUpdateManyWithWhereNestedInput>>;
};

export type UserFeedbackUpdateManyWithWhereNestedInput = {
  where: UserFeedbackScalarWhereInput;
  data: UserFeedbackUpdateManyDataInput;
};

export type UserFeedbackUpdateOneWithoutItemMetaInput = {
  create?: Maybe<UserFeedbackCreateWithoutItemMetaInput>;
  update?: Maybe<UserFeedbackUpdateWithoutItemMetaDataInput>;
  upsert?: Maybe<UserFeedbackUpsertWithoutItemMetaInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<UserFeedbackWhereUniqueInput>;
};

export type UserFeedbackUpdateWithoutItemMetaDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutUserFeedbacksInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserFeedbackUpdateWithoutUserDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<UserFeedbackMetaUpdateManyWithoutUserFeedbackInput>;
};

export type UserFeedbackUpdateWithWhereUniqueWithoutUserInput = {
  where: UserFeedbackWhereUniqueInput;
  data: UserFeedbackUpdateWithoutUserDataInput;
};

export type UserFeedbackUpsertWithoutItemMetaInput = {
  update: UserFeedbackUpdateWithoutItemMetaDataInput;
  create: UserFeedbackCreateWithoutItemMetaInput;
};

export type UserFeedbackUpsertWithWhereUniqueWithoutUserInput = {
  where: UserFeedbackWhereUniqueInput;
  update: UserFeedbackUpdateWithoutUserDataInput;
  create: UserFeedbackCreateWithoutUserInput;
};

export type UserFeedbackWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  user?: Maybe<UserWhereInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemType_not?: Maybe<Scalars["String"]>;
  itemType_in?: Maybe<Array<Scalars["String"]>>;
  itemType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemType_lt?: Maybe<Scalars["String"]>;
  itemType_lte?: Maybe<Scalars["String"]>;
  itemType_gt?: Maybe<Scalars["String"]>;
  itemType_gte?: Maybe<Scalars["String"]>;
  itemType_contains?: Maybe<Scalars["String"]>;
  itemType_not_contains?: Maybe<Scalars["String"]>;
  itemType_starts_with?: Maybe<Scalars["String"]>;
  itemType_not_starts_with?: Maybe<Scalars["String"]>;
  itemType_ends_with?: Maybe<Scalars["String"]>;
  itemType_not_ends_with?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemStatus_not?: Maybe<Scalars["String"]>;
  itemStatus_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_not_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_lt?: Maybe<Scalars["String"]>;
  itemStatus_lte?: Maybe<Scalars["String"]>;
  itemStatus_gt?: Maybe<Scalars["String"]>;
  itemStatus_gte?: Maybe<Scalars["String"]>;
  itemStatus_contains?: Maybe<Scalars["String"]>;
  itemStatus_not_contains?: Maybe<Scalars["String"]>;
  itemStatus_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_not_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_ends_with?: Maybe<Scalars["String"]>;
  itemStatus_not_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemUrlSegment_not?: Maybe<Scalars["String"]>;
  itemUrlSegment_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_not_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_lt?: Maybe<Scalars["String"]>;
  itemUrlSegment_lte?: Maybe<Scalars["String"]>;
  itemUrlSegment_gt?: Maybe<Scalars["String"]>;
  itemUrlSegment_gte?: Maybe<Scalars["String"]>;
  itemUrlSegment_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemMimeType_not?: Maybe<Scalars["String"]>;
  itemMimeType_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_lt?: Maybe<Scalars["String"]>;
  itemMimeType_lte?: Maybe<Scalars["String"]>;
  itemMimeType_gt?: Maybe<Scalars["String"]>;
  itemMimeType_gte?: Maybe<Scalars["String"]>;
  itemMimeType_contains?: Maybe<Scalars["String"]>;
  itemMimeType_not_contains?: Maybe<Scalars["String"]>;
  itemMimeType_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_ends_with?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemName_not?: Maybe<Scalars["String"]>;
  itemName_in?: Maybe<Array<Scalars["String"]>>;
  itemName_not_in?: Maybe<Array<Scalars["String"]>>;
  itemName_lt?: Maybe<Scalars["String"]>;
  itemName_lte?: Maybe<Scalars["String"]>;
  itemName_gt?: Maybe<Scalars["String"]>;
  itemName_gte?: Maybe<Scalars["String"]>;
  itemName_contains?: Maybe<Scalars["String"]>;
  itemName_not_contains?: Maybe<Scalars["String"]>;
  itemName_starts_with?: Maybe<Scalars["String"]>;
  itemName_not_starts_with?: Maybe<Scalars["String"]>;
  itemName_ends_with?: Maybe<Scalars["String"]>;
  itemName_not_ends_with?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemContent_not?: Maybe<Scalars["String"]>;
  itemContent_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_not_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_lt?: Maybe<Scalars["String"]>;
  itemContent_lte?: Maybe<Scalars["String"]>;
  itemContent_gt?: Maybe<Scalars["String"]>;
  itemContent_gte?: Maybe<Scalars["String"]>;
  itemContent_contains?: Maybe<Scalars["String"]>;
  itemContent_not_contains?: Maybe<Scalars["String"]>;
  itemContent_starts_with?: Maybe<Scalars["String"]>;
  itemContent_not_starts_with?: Maybe<Scalars["String"]>;
  itemContent_ends_with?: Maybe<Scalars["String"]>;
  itemContent_not_ends_with?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemDeleted_not?: Maybe<Scalars["Boolean"]>;
  itemMeta_every?: Maybe<UserFeedbackMetaWhereInput>;
  itemMeta_some?: Maybe<UserFeedbackMetaWhereInput>;
  itemMeta_none?: Maybe<UserFeedbackMetaWhereInput>;
  AND?: Maybe<Array<UserFeedbackWhereInput>>;
  OR?: Maybe<Array<UserFeedbackWhereInput>>;
  NOT?: Maybe<Array<UserFeedbackWhereInput>>;
};

export type UserFeedbackWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
};

export type UserMeta = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserMetaConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<UserMetaEdge>>;
  aggregate: AggregateUserMeta;
};

export type UserMetaCreateInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutUserMetaInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserMetaCreateManyWithoutUserInput = {
  create?: Maybe<Array<UserMetaCreateWithoutUserInput>>;
  connect?: Maybe<Array<UserMetaWhereUniqueInput>>;
};

export type UserMetaCreateWithoutUserInput = {
  oldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserMetaEdge = {
  node: UserMeta;
  cursor: Scalars["String"];
};

export enum UserMetaOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  OldIdAsc = "oldId_ASC",
  OldIdDesc = "oldId_DESC",
  MetaTypeAsc = "metaType_ASC",
  MetaTypeDesc = "metaType_DESC",
  MetaNameAsc = "metaName_ASC",
  MetaNameDesc = "metaName_DESC",
  MetaValueAsc = "metaValue_ASC",
  MetaValueDesc = "metaValue_DESC",
  MetaDeletedAsc = "metaDeleted_ASC",
  MetaDeletedDesc = "metaDeleted_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserMetaPreviousValues = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserMetaScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaType_not?: Maybe<Scalars["String"]>;
  metaType_in?: Maybe<Array<Scalars["String"]>>;
  metaType_not_in?: Maybe<Array<Scalars["String"]>>;
  metaType_lt?: Maybe<Scalars["String"]>;
  metaType_lte?: Maybe<Scalars["String"]>;
  metaType_gt?: Maybe<Scalars["String"]>;
  metaType_gte?: Maybe<Scalars["String"]>;
  metaType_contains?: Maybe<Scalars["String"]>;
  metaType_not_contains?: Maybe<Scalars["String"]>;
  metaType_starts_with?: Maybe<Scalars["String"]>;
  metaType_not_starts_with?: Maybe<Scalars["String"]>;
  metaType_ends_with?: Maybe<Scalars["String"]>;
  metaType_not_ends_with?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaName_not?: Maybe<Scalars["String"]>;
  metaName_in?: Maybe<Array<Scalars["String"]>>;
  metaName_not_in?: Maybe<Array<Scalars["String"]>>;
  metaName_lt?: Maybe<Scalars["String"]>;
  metaName_lte?: Maybe<Scalars["String"]>;
  metaName_gt?: Maybe<Scalars["String"]>;
  metaName_gte?: Maybe<Scalars["String"]>;
  metaName_contains?: Maybe<Scalars["String"]>;
  metaName_not_contains?: Maybe<Scalars["String"]>;
  metaName_starts_with?: Maybe<Scalars["String"]>;
  metaName_not_starts_with?: Maybe<Scalars["String"]>;
  metaName_ends_with?: Maybe<Scalars["String"]>;
  metaName_not_ends_with?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaValue_not?: Maybe<Scalars["String"]>;
  metaValue_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_not_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_lt?: Maybe<Scalars["String"]>;
  metaValue_lte?: Maybe<Scalars["String"]>;
  metaValue_gt?: Maybe<Scalars["String"]>;
  metaValue_gte?: Maybe<Scalars["String"]>;
  metaValue_contains?: Maybe<Scalars["String"]>;
  metaValue_not_contains?: Maybe<Scalars["String"]>;
  metaValue_starts_with?: Maybe<Scalars["String"]>;
  metaValue_not_starts_with?: Maybe<Scalars["String"]>;
  metaValue_ends_with?: Maybe<Scalars["String"]>;
  metaValue_not_ends_with?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<UserMetaScalarWhereInput>>;
  OR?: Maybe<Array<UserMetaScalarWhereInput>>;
  NOT?: Maybe<Array<UserMetaScalarWhereInput>>;
};

export type UserMetaSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<UserMeta>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<UserMetaPreviousValues>;
};

export type UserMetaSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<UserMetaWhereInput>;
  AND?: Maybe<Array<UserMetaSubscriptionWhereInput>>;
  OR?: Maybe<Array<UserMetaSubscriptionWhereInput>>;
  NOT?: Maybe<Array<UserMetaSubscriptionWhereInput>>;
};

export type UserMetaUpdateInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutUserMetaInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserMetaUpdateManyDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserMetaUpdateManyMutationInput = {
  oldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserMetaUpdateManyWithoutUserInput = {
  create?: Maybe<Array<UserMetaCreateWithoutUserInput>>;
  delete?: Maybe<Array<UserMetaWhereUniqueInput>>;
  connect?: Maybe<Array<UserMetaWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserMetaWhereUniqueInput>>;
  update?: Maybe<Array<UserMetaUpdateWithWhereUniqueWithoutUserInput>>;
  upsert?: Maybe<Array<UserMetaUpsertWithWhereUniqueWithoutUserInput>>;
  deleteMany?: Maybe<Array<UserMetaScalarWhereInput>>;
  updateMany?: Maybe<Array<UserMetaUpdateManyWithWhereNestedInput>>;
};

export type UserMetaUpdateManyWithWhereNestedInput = {
  where: UserMetaScalarWhereInput;
  data: UserMetaUpdateManyDataInput;
};

export type UserMetaUpdateWithoutUserDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserMetaUpdateWithWhereUniqueWithoutUserInput = {
  where: UserMetaWhereUniqueInput;
  data: UserMetaUpdateWithoutUserDataInput;
};

export type UserMetaUpsertWithWhereUniqueWithoutUserInput = {
  where: UserMetaWhereUniqueInput;
  update: UserMetaUpdateWithoutUserDataInput;
  create: UserMetaCreateWithoutUserInput;
};

export type UserMetaWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  user?: Maybe<UserWhereInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaType_not?: Maybe<Scalars["String"]>;
  metaType_in?: Maybe<Array<Scalars["String"]>>;
  metaType_not_in?: Maybe<Array<Scalars["String"]>>;
  metaType_lt?: Maybe<Scalars["String"]>;
  metaType_lte?: Maybe<Scalars["String"]>;
  metaType_gt?: Maybe<Scalars["String"]>;
  metaType_gte?: Maybe<Scalars["String"]>;
  metaType_contains?: Maybe<Scalars["String"]>;
  metaType_not_contains?: Maybe<Scalars["String"]>;
  metaType_starts_with?: Maybe<Scalars["String"]>;
  metaType_not_starts_with?: Maybe<Scalars["String"]>;
  metaType_ends_with?: Maybe<Scalars["String"]>;
  metaType_not_ends_with?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaName_not?: Maybe<Scalars["String"]>;
  metaName_in?: Maybe<Array<Scalars["String"]>>;
  metaName_not_in?: Maybe<Array<Scalars["String"]>>;
  metaName_lt?: Maybe<Scalars["String"]>;
  metaName_lte?: Maybe<Scalars["String"]>;
  metaName_gt?: Maybe<Scalars["String"]>;
  metaName_gte?: Maybe<Scalars["String"]>;
  metaName_contains?: Maybe<Scalars["String"]>;
  metaName_not_contains?: Maybe<Scalars["String"]>;
  metaName_starts_with?: Maybe<Scalars["String"]>;
  metaName_not_starts_with?: Maybe<Scalars["String"]>;
  metaName_ends_with?: Maybe<Scalars["String"]>;
  metaName_not_ends_with?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaValue_not?: Maybe<Scalars["String"]>;
  metaValue_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_not_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_lt?: Maybe<Scalars["String"]>;
  metaValue_lte?: Maybe<Scalars["String"]>;
  metaValue_gt?: Maybe<Scalars["String"]>;
  metaValue_gte?: Maybe<Scalars["String"]>;
  metaValue_contains?: Maybe<Scalars["String"]>;
  metaValue_not_contains?: Maybe<Scalars["String"]>;
  metaValue_starts_with?: Maybe<Scalars["String"]>;
  metaValue_not_starts_with?: Maybe<Scalars["String"]>;
  metaValue_ends_with?: Maybe<Scalars["String"]>;
  metaValue_not_ends_with?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<UserMetaWhereInput>>;
  OR?: Maybe<Array<UserMetaWhereInput>>;
  NOT?: Maybe<Array<UserMetaWhereInput>>;
};

export type UserMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
};

export enum UserOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  OldIdAsc = "oldId_ASC",
  OldIdDesc = "oldId_DESC",
  UserTypeAsc = "userType_ASC",
  UserTypeDesc = "userType_DESC",
  UserEmailAsc = "userEmail_ASC",
  UserEmailDesc = "userEmail_DESC",
  UserPasswordAsc = "userPassword_ASC",
  UserPasswordDesc = "userPassword_DESC",
  PublicHashAsc = "publicHash_ASC",
  PublicHashDesc = "publicHash_DESC",
  PrivateHashAsc = "privateHash_ASC",
  PrivateHashDesc = "privateHash_DESC",
  ConfirmHashAsc = "confirmHash_ASC",
  ConfirmHashDesc = "confirmHash_DESC",
  ForgotHashAsc = "forgotHash_ASC",
  ForgotHashDesc = "forgotHash_DESC",
  UserConfirmedAsc = "userConfirmed_ASC",
  UserConfirmedDesc = "userConfirmed_DESC",
  UserDeletedAsc = "userDeleted_ASC",
  UserDeletedDesc = "userDeleted_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserPreviousValues = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<User>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<UserPreviousValues>;
};

export type UserSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<Array<UserSubscriptionWhereInput>>;
  OR?: Maybe<Array<UserSubscriptionWhereInput>>;
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>;
};

export type UserTrack = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<Array<UserTrackMeta>>;
  reviews?: Maybe<Array<Review>>;
  files?: Maybe<Array<File>>;
};

export type UserTrackItemMetaArgs = {
  where?: Maybe<UserTrackMetaWhereInput>;
  orderBy?: Maybe<UserTrackMetaOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserTrackReviewsArgs = {
  where?: Maybe<ReviewWhereInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserTrackFilesArgs = {
  where?: Maybe<FileWhereInput>;
  orderBy?: Maybe<FileOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserTrackConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<UserTrackEdge>>;
  aggregate: AggregateUserTrack;
};

export type UserTrackCreateInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutUserTracksInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<UserTrackMetaCreateManyWithoutUserTrackInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserTrackInput>;
  files?: Maybe<FileCreateManyWithoutUserTrackInput>;
};

export type UserTrackCreateManyWithoutUserInput = {
  create?: Maybe<Array<UserTrackCreateWithoutUserInput>>;
  connect?: Maybe<Array<UserTrackWhereUniqueInput>>;
};

export type UserTrackCreateOneWithoutFilesInput = {
  create?: Maybe<UserTrackCreateWithoutFilesInput>;
  connect?: Maybe<UserTrackWhereUniqueInput>;
};

export type UserTrackCreateOneWithoutItemMetaInput = {
  create?: Maybe<UserTrackCreateWithoutItemMetaInput>;
  connect?: Maybe<UserTrackWhereUniqueInput>;
};

export type UserTrackCreateOneWithoutReviewsInput = {
  create?: Maybe<UserTrackCreateWithoutReviewsInput>;
  connect?: Maybe<UserTrackWhereUniqueInput>;
};

export type UserTrackCreateWithoutFilesInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutUserTracksInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<UserTrackMetaCreateManyWithoutUserTrackInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserTrackInput>;
};

export type UserTrackCreateWithoutItemMetaInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutUserTracksInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  reviews?: Maybe<ReviewCreateManyWithoutUserTrackInput>;
  files?: Maybe<FileCreateManyWithoutUserTrackInput>;
};

export type UserTrackCreateWithoutReviewsInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserCreateOneWithoutUserTracksInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<UserTrackMetaCreateManyWithoutUserTrackInput>;
  files?: Maybe<FileCreateManyWithoutUserTrackInput>;
};

export type UserTrackCreateWithoutUserInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<UserTrackMetaCreateManyWithoutUserTrackInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserTrackInput>;
  files?: Maybe<FileCreateManyWithoutUserTrackInput>;
};

export type UserTrackEdge = {
  node: UserTrack;
  cursor: Scalars["String"];
};

export type UserTrackMeta = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  userTrack?: Maybe<UserTrack>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserTrackMetaConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<UserTrackMetaEdge>>;
  aggregate: AggregateUserTrackMeta;
};

export type UserTrackMetaCreateInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  userTrack?: Maybe<UserTrackCreateOneWithoutItemMetaInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserTrackMetaCreateManyWithoutUserTrackInput = {
  create?: Maybe<Array<UserTrackMetaCreateWithoutUserTrackInput>>;
  connect?: Maybe<Array<UserTrackMetaWhereUniqueInput>>;
};

export type UserTrackMetaCreateWithoutUserTrackInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserTrackMetaEdge = {
  node: UserTrackMeta;
  cursor: Scalars["String"];
};

export enum UserTrackMetaOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  OldIdAsc = "oldId_ASC",
  OldIdDesc = "oldId_DESC",
  ItemOldIdAsc = "itemOldId_ASC",
  ItemOldIdDesc = "itemOldId_DESC",
  MetaTypeAsc = "metaType_ASC",
  MetaTypeDesc = "metaType_DESC",
  MetaNameAsc = "metaName_ASC",
  MetaNameDesc = "metaName_DESC",
  MetaValueAsc = "metaValue_ASC",
  MetaValueDesc = "metaValue_DESC",
  MetaDeletedAsc = "metaDeleted_ASC",
  MetaDeletedDesc = "metaDeleted_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserTrackMetaPreviousValues = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName: Scalars["String"];
  metaValue: Scalars["String"];
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserTrackMetaScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  itemOldId_not?: Maybe<Scalars["String"]>;
  itemOldId_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_not_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_lt?: Maybe<Scalars["String"]>;
  itemOldId_lte?: Maybe<Scalars["String"]>;
  itemOldId_gt?: Maybe<Scalars["String"]>;
  itemOldId_gte?: Maybe<Scalars["String"]>;
  itemOldId_contains?: Maybe<Scalars["String"]>;
  itemOldId_not_contains?: Maybe<Scalars["String"]>;
  itemOldId_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_not_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_ends_with?: Maybe<Scalars["String"]>;
  itemOldId_not_ends_with?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaType_not?: Maybe<Scalars["String"]>;
  metaType_in?: Maybe<Array<Scalars["String"]>>;
  metaType_not_in?: Maybe<Array<Scalars["String"]>>;
  metaType_lt?: Maybe<Scalars["String"]>;
  metaType_lte?: Maybe<Scalars["String"]>;
  metaType_gt?: Maybe<Scalars["String"]>;
  metaType_gte?: Maybe<Scalars["String"]>;
  metaType_contains?: Maybe<Scalars["String"]>;
  metaType_not_contains?: Maybe<Scalars["String"]>;
  metaType_starts_with?: Maybe<Scalars["String"]>;
  metaType_not_starts_with?: Maybe<Scalars["String"]>;
  metaType_ends_with?: Maybe<Scalars["String"]>;
  metaType_not_ends_with?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaName_not?: Maybe<Scalars["String"]>;
  metaName_in?: Maybe<Array<Scalars["String"]>>;
  metaName_not_in?: Maybe<Array<Scalars["String"]>>;
  metaName_lt?: Maybe<Scalars["String"]>;
  metaName_lte?: Maybe<Scalars["String"]>;
  metaName_gt?: Maybe<Scalars["String"]>;
  metaName_gte?: Maybe<Scalars["String"]>;
  metaName_contains?: Maybe<Scalars["String"]>;
  metaName_not_contains?: Maybe<Scalars["String"]>;
  metaName_starts_with?: Maybe<Scalars["String"]>;
  metaName_not_starts_with?: Maybe<Scalars["String"]>;
  metaName_ends_with?: Maybe<Scalars["String"]>;
  metaName_not_ends_with?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaValue_not?: Maybe<Scalars["String"]>;
  metaValue_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_not_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_lt?: Maybe<Scalars["String"]>;
  metaValue_lte?: Maybe<Scalars["String"]>;
  metaValue_gt?: Maybe<Scalars["String"]>;
  metaValue_gte?: Maybe<Scalars["String"]>;
  metaValue_contains?: Maybe<Scalars["String"]>;
  metaValue_not_contains?: Maybe<Scalars["String"]>;
  metaValue_starts_with?: Maybe<Scalars["String"]>;
  metaValue_not_starts_with?: Maybe<Scalars["String"]>;
  metaValue_ends_with?: Maybe<Scalars["String"]>;
  metaValue_not_ends_with?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<UserTrackMetaScalarWhereInput>>;
  OR?: Maybe<Array<UserTrackMetaScalarWhereInput>>;
  NOT?: Maybe<Array<UserTrackMetaScalarWhereInput>>;
};

export type UserTrackMetaSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<UserTrackMeta>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<UserTrackMetaPreviousValues>;
};

export type UserTrackMetaSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<UserTrackMetaWhereInput>;
  AND?: Maybe<Array<UserTrackMetaSubscriptionWhereInput>>;
  OR?: Maybe<Array<UserTrackMetaSubscriptionWhereInput>>;
  NOT?: Maybe<Array<UserTrackMetaSubscriptionWhereInput>>;
};

export type UserTrackMetaUpdateInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  userTrack?: Maybe<UserTrackUpdateOneWithoutItemMetaInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserTrackMetaUpdateManyDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserTrackMetaUpdateManyMutationInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserTrackMetaUpdateManyWithoutUserTrackInput = {
  create?: Maybe<Array<UserTrackMetaCreateWithoutUserTrackInput>>;
  delete?: Maybe<Array<UserTrackMetaWhereUniqueInput>>;
  connect?: Maybe<Array<UserTrackMetaWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserTrackMetaWhereUniqueInput>>;
  update?: Maybe<
    Array<UserTrackMetaUpdateWithWhereUniqueWithoutUserTrackInput>
  >;
  upsert?: Maybe<
    Array<UserTrackMetaUpsertWithWhereUniqueWithoutUserTrackInput>
  >;
  deleteMany?: Maybe<Array<UserTrackMetaScalarWhereInput>>;
  updateMany?: Maybe<Array<UserTrackMetaUpdateManyWithWhereNestedInput>>;
};

export type UserTrackMetaUpdateManyWithWhereNestedInput = {
  where: UserTrackMetaScalarWhereInput;
  data: UserTrackMetaUpdateManyDataInput;
};

export type UserTrackMetaUpdateWithoutUserTrackDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserTrackMetaUpdateWithWhereUniqueWithoutUserTrackInput = {
  where: UserTrackMetaWhereUniqueInput;
  data: UserTrackMetaUpdateWithoutUserTrackDataInput;
};

export type UserTrackMetaUpsertWithWhereUniqueWithoutUserTrackInput = {
  where: UserTrackMetaWhereUniqueInput;
  update: UserTrackMetaUpdateWithoutUserTrackDataInput;
  create: UserTrackMetaCreateWithoutUserTrackInput;
};

export type UserTrackMetaWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemOldId?: Maybe<Scalars["String"]>;
  itemOldId_not?: Maybe<Scalars["String"]>;
  itemOldId_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_not_in?: Maybe<Array<Scalars["String"]>>;
  itemOldId_lt?: Maybe<Scalars["String"]>;
  itemOldId_lte?: Maybe<Scalars["String"]>;
  itemOldId_gt?: Maybe<Scalars["String"]>;
  itemOldId_gte?: Maybe<Scalars["String"]>;
  itemOldId_contains?: Maybe<Scalars["String"]>;
  itemOldId_not_contains?: Maybe<Scalars["String"]>;
  itemOldId_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_not_starts_with?: Maybe<Scalars["String"]>;
  itemOldId_ends_with?: Maybe<Scalars["String"]>;
  itemOldId_not_ends_with?: Maybe<Scalars["String"]>;
  userTrack?: Maybe<UserTrackWhereInput>;
  metaType?: Maybe<Scalars["String"]>;
  metaType_not?: Maybe<Scalars["String"]>;
  metaType_in?: Maybe<Array<Scalars["String"]>>;
  metaType_not_in?: Maybe<Array<Scalars["String"]>>;
  metaType_lt?: Maybe<Scalars["String"]>;
  metaType_lte?: Maybe<Scalars["String"]>;
  metaType_gt?: Maybe<Scalars["String"]>;
  metaType_gte?: Maybe<Scalars["String"]>;
  metaType_contains?: Maybe<Scalars["String"]>;
  metaType_not_contains?: Maybe<Scalars["String"]>;
  metaType_starts_with?: Maybe<Scalars["String"]>;
  metaType_not_starts_with?: Maybe<Scalars["String"]>;
  metaType_ends_with?: Maybe<Scalars["String"]>;
  metaType_not_ends_with?: Maybe<Scalars["String"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaName_not?: Maybe<Scalars["String"]>;
  metaName_in?: Maybe<Array<Scalars["String"]>>;
  metaName_not_in?: Maybe<Array<Scalars["String"]>>;
  metaName_lt?: Maybe<Scalars["String"]>;
  metaName_lte?: Maybe<Scalars["String"]>;
  metaName_gt?: Maybe<Scalars["String"]>;
  metaName_gte?: Maybe<Scalars["String"]>;
  metaName_contains?: Maybe<Scalars["String"]>;
  metaName_not_contains?: Maybe<Scalars["String"]>;
  metaName_starts_with?: Maybe<Scalars["String"]>;
  metaName_not_starts_with?: Maybe<Scalars["String"]>;
  metaName_ends_with?: Maybe<Scalars["String"]>;
  metaName_not_ends_with?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  metaValue_not?: Maybe<Scalars["String"]>;
  metaValue_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_not_in?: Maybe<Array<Scalars["String"]>>;
  metaValue_lt?: Maybe<Scalars["String"]>;
  metaValue_lte?: Maybe<Scalars["String"]>;
  metaValue_gt?: Maybe<Scalars["String"]>;
  metaValue_gte?: Maybe<Scalars["String"]>;
  metaValue_contains?: Maybe<Scalars["String"]>;
  metaValue_not_contains?: Maybe<Scalars["String"]>;
  metaValue_starts_with?: Maybe<Scalars["String"]>;
  metaValue_not_starts_with?: Maybe<Scalars["String"]>;
  metaValue_ends_with?: Maybe<Scalars["String"]>;
  metaValue_not_ends_with?: Maybe<Scalars["String"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<UserTrackMetaWhereInput>>;
  OR?: Maybe<Array<UserTrackMetaWhereInput>>;
  NOT?: Maybe<Array<UserTrackMetaWhereInput>>;
};

export type UserTrackMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
};

export enum UserTrackOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  OldIdAsc = "oldId_ASC",
  OldIdDesc = "oldId_DESC",
  ItemTypeAsc = "itemType_ASC",
  ItemTypeDesc = "itemType_DESC",
  ItemStatusAsc = "itemStatus_ASC",
  ItemStatusDesc = "itemStatus_DESC",
  ItemUrlSegmentAsc = "itemUrlSegment_ASC",
  ItemUrlSegmentDesc = "itemUrlSegment_DESC",
  ItemMimeTypeAsc = "itemMimeType_ASC",
  ItemMimeTypeDesc = "itemMimeType_DESC",
  ItemNameAsc = "itemName_ASC",
  ItemNameDesc = "itemName_DESC",
  ItemContentAsc = "itemContent_ASC",
  ItemContentDesc = "itemContent_DESC",
  ItemDeletedAsc = "itemDeleted_ASC",
  ItemDeletedDesc = "itemDeleted_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserTrackPreviousValues = {
  id: Scalars["ID"];
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName: Scalars["String"];
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserTrackScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemType_not?: Maybe<Scalars["String"]>;
  itemType_in?: Maybe<Array<Scalars["String"]>>;
  itemType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemType_lt?: Maybe<Scalars["String"]>;
  itemType_lte?: Maybe<Scalars["String"]>;
  itemType_gt?: Maybe<Scalars["String"]>;
  itemType_gte?: Maybe<Scalars["String"]>;
  itemType_contains?: Maybe<Scalars["String"]>;
  itemType_not_contains?: Maybe<Scalars["String"]>;
  itemType_starts_with?: Maybe<Scalars["String"]>;
  itemType_not_starts_with?: Maybe<Scalars["String"]>;
  itemType_ends_with?: Maybe<Scalars["String"]>;
  itemType_not_ends_with?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemStatus_not?: Maybe<Scalars["String"]>;
  itemStatus_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_not_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_lt?: Maybe<Scalars["String"]>;
  itemStatus_lte?: Maybe<Scalars["String"]>;
  itemStatus_gt?: Maybe<Scalars["String"]>;
  itemStatus_gte?: Maybe<Scalars["String"]>;
  itemStatus_contains?: Maybe<Scalars["String"]>;
  itemStatus_not_contains?: Maybe<Scalars["String"]>;
  itemStatus_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_not_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_ends_with?: Maybe<Scalars["String"]>;
  itemStatus_not_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemUrlSegment_not?: Maybe<Scalars["String"]>;
  itemUrlSegment_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_not_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_lt?: Maybe<Scalars["String"]>;
  itemUrlSegment_lte?: Maybe<Scalars["String"]>;
  itemUrlSegment_gt?: Maybe<Scalars["String"]>;
  itemUrlSegment_gte?: Maybe<Scalars["String"]>;
  itemUrlSegment_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemMimeType_not?: Maybe<Scalars["String"]>;
  itemMimeType_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_lt?: Maybe<Scalars["String"]>;
  itemMimeType_lte?: Maybe<Scalars["String"]>;
  itemMimeType_gt?: Maybe<Scalars["String"]>;
  itemMimeType_gte?: Maybe<Scalars["String"]>;
  itemMimeType_contains?: Maybe<Scalars["String"]>;
  itemMimeType_not_contains?: Maybe<Scalars["String"]>;
  itemMimeType_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_ends_with?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemName_not?: Maybe<Scalars["String"]>;
  itemName_in?: Maybe<Array<Scalars["String"]>>;
  itemName_not_in?: Maybe<Array<Scalars["String"]>>;
  itemName_lt?: Maybe<Scalars["String"]>;
  itemName_lte?: Maybe<Scalars["String"]>;
  itemName_gt?: Maybe<Scalars["String"]>;
  itemName_gte?: Maybe<Scalars["String"]>;
  itemName_contains?: Maybe<Scalars["String"]>;
  itemName_not_contains?: Maybe<Scalars["String"]>;
  itemName_starts_with?: Maybe<Scalars["String"]>;
  itemName_not_starts_with?: Maybe<Scalars["String"]>;
  itemName_ends_with?: Maybe<Scalars["String"]>;
  itemName_not_ends_with?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemContent_not?: Maybe<Scalars["String"]>;
  itemContent_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_not_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_lt?: Maybe<Scalars["String"]>;
  itemContent_lte?: Maybe<Scalars["String"]>;
  itemContent_gt?: Maybe<Scalars["String"]>;
  itemContent_gte?: Maybe<Scalars["String"]>;
  itemContent_contains?: Maybe<Scalars["String"]>;
  itemContent_not_contains?: Maybe<Scalars["String"]>;
  itemContent_starts_with?: Maybe<Scalars["String"]>;
  itemContent_not_starts_with?: Maybe<Scalars["String"]>;
  itemContent_ends_with?: Maybe<Scalars["String"]>;
  itemContent_not_ends_with?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemDeleted_not?: Maybe<Scalars["Boolean"]>;
  AND?: Maybe<Array<UserTrackScalarWhereInput>>;
  OR?: Maybe<Array<UserTrackScalarWhereInput>>;
  NOT?: Maybe<Array<UserTrackScalarWhereInput>>;
};

export type UserTrackSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<UserTrack>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<UserTrackPreviousValues>;
};

export type UserTrackSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<UserTrackWhereInput>;
  AND?: Maybe<Array<UserTrackSubscriptionWhereInput>>;
  OR?: Maybe<Array<UserTrackSubscriptionWhereInput>>;
  NOT?: Maybe<Array<UserTrackSubscriptionWhereInput>>;
};

export type UserTrackUpdateInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutUserTracksInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<UserTrackMetaUpdateManyWithoutUserTrackInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserTrackInput>;
  files?: Maybe<FileUpdateManyWithoutUserTrackInput>;
};

export type UserTrackUpdateManyDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserTrackUpdateManyMutationInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserTrackUpdateManyWithoutUserInput = {
  create?: Maybe<Array<UserTrackCreateWithoutUserInput>>;
  delete?: Maybe<Array<UserTrackWhereUniqueInput>>;
  connect?: Maybe<Array<UserTrackWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserTrackWhereUniqueInput>>;
  update?: Maybe<Array<UserTrackUpdateWithWhereUniqueWithoutUserInput>>;
  upsert?: Maybe<Array<UserTrackUpsertWithWhereUniqueWithoutUserInput>>;
  deleteMany?: Maybe<Array<UserTrackScalarWhereInput>>;
  updateMany?: Maybe<Array<UserTrackUpdateManyWithWhereNestedInput>>;
};

export type UserTrackUpdateManyWithWhereNestedInput = {
  where: UserTrackScalarWhereInput;
  data: UserTrackUpdateManyDataInput;
};

export type UserTrackUpdateOneWithoutFilesInput = {
  create?: Maybe<UserTrackCreateWithoutFilesInput>;
  update?: Maybe<UserTrackUpdateWithoutFilesDataInput>;
  upsert?: Maybe<UserTrackUpsertWithoutFilesInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<UserTrackWhereUniqueInput>;
};

export type UserTrackUpdateOneWithoutItemMetaInput = {
  create?: Maybe<UserTrackCreateWithoutItemMetaInput>;
  update?: Maybe<UserTrackUpdateWithoutItemMetaDataInput>;
  upsert?: Maybe<UserTrackUpsertWithoutItemMetaInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<UserTrackWhereUniqueInput>;
};

export type UserTrackUpdateOneWithoutReviewsInput = {
  create?: Maybe<UserTrackCreateWithoutReviewsInput>;
  update?: Maybe<UserTrackUpdateWithoutReviewsDataInput>;
  upsert?: Maybe<UserTrackUpsertWithoutReviewsInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<UserTrackWhereUniqueInput>;
};

export type UserTrackUpdateWithoutFilesDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutUserTracksInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<UserTrackMetaUpdateManyWithoutUserTrackInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserTrackInput>;
};

export type UserTrackUpdateWithoutItemMetaDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutUserTracksInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserTrackInput>;
  files?: Maybe<FileUpdateManyWithoutUserTrackInput>;
};

export type UserTrackUpdateWithoutReviewsDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  user?: Maybe<UserUpdateOneWithoutUserTracksInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<UserTrackMetaUpdateManyWithoutUserTrackInput>;
  files?: Maybe<FileUpdateManyWithoutUserTrackInput>;
};

export type UserTrackUpdateWithoutUserDataInput = {
  oldId?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<UserTrackMetaUpdateManyWithoutUserTrackInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserTrackInput>;
  files?: Maybe<FileUpdateManyWithoutUserTrackInput>;
};

export type UserTrackUpdateWithWhereUniqueWithoutUserInput = {
  where: UserTrackWhereUniqueInput;
  data: UserTrackUpdateWithoutUserDataInput;
};

export type UserTrackUpsertWithoutFilesInput = {
  update: UserTrackUpdateWithoutFilesDataInput;
  create: UserTrackCreateWithoutFilesInput;
};

export type UserTrackUpsertWithoutItemMetaInput = {
  update: UserTrackUpdateWithoutItemMetaDataInput;
  create: UserTrackCreateWithoutItemMetaInput;
};

export type UserTrackUpsertWithoutReviewsInput = {
  update: UserTrackUpdateWithoutReviewsDataInput;
  create: UserTrackCreateWithoutReviewsInput;
};

export type UserTrackUpsertWithWhereUniqueWithoutUserInput = {
  where: UserTrackWhereUniqueInput;
  update: UserTrackUpdateWithoutUserDataInput;
  create: UserTrackCreateWithoutUserInput;
};

export type UserTrackWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
  oldId_not?: Maybe<Scalars["String"]>;
  oldId_in?: Maybe<Array<Scalars["String"]>>;
  oldId_not_in?: Maybe<Array<Scalars["String"]>>;
  oldId_lt?: Maybe<Scalars["String"]>;
  oldId_lte?: Maybe<Scalars["String"]>;
  oldId_gt?: Maybe<Scalars["String"]>;
  oldId_gte?: Maybe<Scalars["String"]>;
  oldId_contains?: Maybe<Scalars["String"]>;
  oldId_not_contains?: Maybe<Scalars["String"]>;
  oldId_starts_with?: Maybe<Scalars["String"]>;
  oldId_not_starts_with?: Maybe<Scalars["String"]>;
  oldId_ends_with?: Maybe<Scalars["String"]>;
  oldId_not_ends_with?: Maybe<Scalars["String"]>;
  user?: Maybe<UserWhereInput>;
  itemType?: Maybe<Scalars["String"]>;
  itemType_not?: Maybe<Scalars["String"]>;
  itemType_in?: Maybe<Array<Scalars["String"]>>;
  itemType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemType_lt?: Maybe<Scalars["String"]>;
  itemType_lte?: Maybe<Scalars["String"]>;
  itemType_gt?: Maybe<Scalars["String"]>;
  itemType_gte?: Maybe<Scalars["String"]>;
  itemType_contains?: Maybe<Scalars["String"]>;
  itemType_not_contains?: Maybe<Scalars["String"]>;
  itemType_starts_with?: Maybe<Scalars["String"]>;
  itemType_not_starts_with?: Maybe<Scalars["String"]>;
  itemType_ends_with?: Maybe<Scalars["String"]>;
  itemType_not_ends_with?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemStatus_not?: Maybe<Scalars["String"]>;
  itemStatus_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_not_in?: Maybe<Array<Scalars["String"]>>;
  itemStatus_lt?: Maybe<Scalars["String"]>;
  itemStatus_lte?: Maybe<Scalars["String"]>;
  itemStatus_gt?: Maybe<Scalars["String"]>;
  itemStatus_gte?: Maybe<Scalars["String"]>;
  itemStatus_contains?: Maybe<Scalars["String"]>;
  itemStatus_not_contains?: Maybe<Scalars["String"]>;
  itemStatus_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_not_starts_with?: Maybe<Scalars["String"]>;
  itemStatus_ends_with?: Maybe<Scalars["String"]>;
  itemStatus_not_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  itemUrlSegment_not?: Maybe<Scalars["String"]>;
  itemUrlSegment_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_not_in?: Maybe<Array<Scalars["String"]>>;
  itemUrlSegment_lt?: Maybe<Scalars["String"]>;
  itemUrlSegment_lte?: Maybe<Scalars["String"]>;
  itemUrlSegment_gt?: Maybe<Scalars["String"]>;
  itemUrlSegment_gte?: Maybe<Scalars["String"]>;
  itemUrlSegment_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_contains?: Maybe<Scalars["String"]>;
  itemUrlSegment_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_starts_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_ends_with?: Maybe<Scalars["String"]>;
  itemUrlSegment_not_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemMimeType_not?: Maybe<Scalars["String"]>;
  itemMimeType_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  itemMimeType_lt?: Maybe<Scalars["String"]>;
  itemMimeType_lte?: Maybe<Scalars["String"]>;
  itemMimeType_gt?: Maybe<Scalars["String"]>;
  itemMimeType_gte?: Maybe<Scalars["String"]>;
  itemMimeType_contains?: Maybe<Scalars["String"]>;
  itemMimeType_not_contains?: Maybe<Scalars["String"]>;
  itemMimeType_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_starts_with?: Maybe<Scalars["String"]>;
  itemMimeType_ends_with?: Maybe<Scalars["String"]>;
  itemMimeType_not_ends_with?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemName_not?: Maybe<Scalars["String"]>;
  itemName_in?: Maybe<Array<Scalars["String"]>>;
  itemName_not_in?: Maybe<Array<Scalars["String"]>>;
  itemName_lt?: Maybe<Scalars["String"]>;
  itemName_lte?: Maybe<Scalars["String"]>;
  itemName_gt?: Maybe<Scalars["String"]>;
  itemName_gte?: Maybe<Scalars["String"]>;
  itemName_contains?: Maybe<Scalars["String"]>;
  itemName_not_contains?: Maybe<Scalars["String"]>;
  itemName_starts_with?: Maybe<Scalars["String"]>;
  itemName_not_starts_with?: Maybe<Scalars["String"]>;
  itemName_ends_with?: Maybe<Scalars["String"]>;
  itemName_not_ends_with?: Maybe<Scalars["String"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemContent_not?: Maybe<Scalars["String"]>;
  itemContent_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_not_in?: Maybe<Array<Scalars["String"]>>;
  itemContent_lt?: Maybe<Scalars["String"]>;
  itemContent_lte?: Maybe<Scalars["String"]>;
  itemContent_gt?: Maybe<Scalars["String"]>;
  itemContent_gte?: Maybe<Scalars["String"]>;
  itemContent_contains?: Maybe<Scalars["String"]>;
  itemContent_not_contains?: Maybe<Scalars["String"]>;
  itemContent_starts_with?: Maybe<Scalars["String"]>;
  itemContent_not_starts_with?: Maybe<Scalars["String"]>;
  itemContent_ends_with?: Maybe<Scalars["String"]>;
  itemContent_not_ends_with?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemDeleted_not?: Maybe<Scalars["Boolean"]>;
  itemMeta_every?: Maybe<UserTrackMetaWhereInput>;
  itemMeta_some?: Maybe<UserTrackMetaWhereInput>;
  itemMeta_none?: Maybe<UserTrackMetaWhereInput>;
  reviews_every?: Maybe<ReviewWhereInput>;
  reviews_some?: Maybe<ReviewWhereInput>;
  reviews_none?: Maybe<ReviewWhereInput>;
  files_every?: Maybe<FileWhereInput>;
  files_some?: Maybe<FileWhereInput>;
  files_none?: Maybe<FileWhereInput>;
  AND?: Maybe<Array<UserTrackWhereInput>>;
  OR?: Maybe<Array<UserTrackWhereInput>>;
  NOT?: Maybe<Array<UserTrackWhereInput>>;
};

export type UserTrackWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["String"]>;
};

export type UserUpdateInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userTracks?: Maybe<UserTrackUpdateManyWithoutUserInput>;
  userFeedbacks?: Maybe<UserFeedbackUpdateManyWithoutUserInput>;
  profilePages?: Maybe<ProfilePageUpdateManyWithoutUserInput>;
  blogPosts?: Maybe<BlogPostUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  files?: Maybe<FileUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
};

export type UserUpdateOneWithoutBlogPostsInput = {
  create?: Maybe<UserCreateWithoutBlogPostsInput>;
  update?: Maybe<UserUpdateWithoutBlogPostsDataInput>;
  upsert?: Maybe<UserUpsertWithoutBlogPostsInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateOneWithoutFilesInput = {
  create?: Maybe<UserCreateWithoutFilesInput>;
  update?: Maybe<UserUpdateWithoutFilesDataInput>;
  upsert?: Maybe<UserUpsertWithoutFilesInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateOneWithoutProfilePagesInput = {
  create?: Maybe<UserCreateWithoutProfilePagesInput>;
  update?: Maybe<UserUpdateWithoutProfilePagesDataInput>;
  upsert?: Maybe<UserUpsertWithoutProfilePagesInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateOneWithoutReviewsInput = {
  create?: Maybe<UserCreateWithoutReviewsInput>;
  update?: Maybe<UserUpdateWithoutReviewsDataInput>;
  upsert?: Maybe<UserUpsertWithoutReviewsInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateOneWithoutUserFeedbacksInput = {
  create?: Maybe<UserCreateWithoutUserFeedbacksInput>;
  update?: Maybe<UserUpdateWithoutUserFeedbacksDataInput>;
  upsert?: Maybe<UserUpsertWithoutUserFeedbacksInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateOneWithoutUserMetaInput = {
  create?: Maybe<UserCreateWithoutUserMetaInput>;
  update?: Maybe<UserUpdateWithoutUserMetaDataInput>;
  upsert?: Maybe<UserUpsertWithoutUserMetaInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateOneWithoutUserTracksInput = {
  create?: Maybe<UserCreateWithoutUserTracksInput>;
  update?: Maybe<UserUpdateWithoutUserTracksDataInput>;
  upsert?: Maybe<UserUpsertWithoutUserTracksInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateWithoutBlogPostsDataInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userTracks?: Maybe<UserTrackUpdateManyWithoutUserInput>;
  userFeedbacks?: Maybe<UserFeedbackUpdateManyWithoutUserInput>;
  profilePages?: Maybe<ProfilePageUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  files?: Maybe<FileUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutFilesDataInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userTracks?: Maybe<UserTrackUpdateManyWithoutUserInput>;
  userFeedbacks?: Maybe<UserFeedbackUpdateManyWithoutUserInput>;
  profilePages?: Maybe<ProfilePageUpdateManyWithoutUserInput>;
  blogPosts?: Maybe<BlogPostUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutProfilePagesDataInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userTracks?: Maybe<UserTrackUpdateManyWithoutUserInput>;
  userFeedbacks?: Maybe<UserFeedbackUpdateManyWithoutUserInput>;
  blogPosts?: Maybe<BlogPostUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  files?: Maybe<FileUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutReviewsDataInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userTracks?: Maybe<UserTrackUpdateManyWithoutUserInput>;
  userFeedbacks?: Maybe<UserFeedbackUpdateManyWithoutUserInput>;
  profilePages?: Maybe<ProfilePageUpdateManyWithoutUserInput>;
  blogPosts?: Maybe<BlogPostUpdateManyWithoutUserInput>;
  files?: Maybe<FileUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutUserFeedbacksDataInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userTracks?: Maybe<UserTrackUpdateManyWithoutUserInput>;
  profilePages?: Maybe<ProfilePageUpdateManyWithoutUserInput>;
  blogPosts?: Maybe<BlogPostUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  files?: Maybe<FileUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutUserMetaDataInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userTracks?: Maybe<UserTrackUpdateManyWithoutUserInput>;
  userFeedbacks?: Maybe<UserFeedbackUpdateManyWithoutUserInput>;
  profilePages?: Maybe<ProfilePageUpdateManyWithoutUserInput>;
  blogPosts?: Maybe<BlogPostUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  files?: Maybe<FileUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutUserTracksDataInput = {
  oldId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userFeedbacks?: Maybe<UserFeedbackUpdateManyWithoutUserInput>;
  profilePages?: Maybe<ProfilePageUpdateManyWithoutUserInput>;
  blogPosts?: Maybe<BlogPostUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  files?: Maybe<FileUpdateManyWithoutUserInput>;
};

export type UserUpsertWithoutBlogPostsInput = {
  update: UserUpdateWithoutBlogPostsDataInput;
  create: UserCreateWithoutBlogPostsInput;
};

export type UserUpsertWithoutFilesInput = {
  update: UserUpdateWithoutFilesDataInput;
  create: UserCreateWithoutFilesInput;
};

export type UserUpsertWithoutProfilePagesInput = {
  update: UserUpdateWithoutProfilePagesDataInput;
  create: UserCreateWithoutProfilePagesInput;
};

export type UserUpsertWithoutReviewsInput = {
  update: UserUpdateWithoutReviewsDataInput;
  create: UserCreateWithoutReviewsInput;
};

export type UserUpsertWithoutUserFeedbacksInput = {
  update: UserUpdateWithoutUserFeedbacksDataInput;
  create: UserCreateWithoutUserFeedbacksInput;
};

export type UserUpsertWithoutUserMetaInput = {
  update: UserUpdateWithoutUserMetaDataInput;
  create: UserCreateWithoutUserMetaInput;
};

export type UserUpsertWithoutUserTracksInput = {
  update: UserUpdateWithoutUserTracksDataInput;
  create: UserCreateWithoutUserTracksInput;
};

export type UserWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["ID"]>;
  oldId_not?: Maybe<Scalars["ID"]>;
  oldId_in?: Maybe<Array<Scalars["ID"]>>;
  oldId_not_in?: Maybe<Array<Scalars["ID"]>>;
  oldId_lt?: Maybe<Scalars["ID"]>;
  oldId_lte?: Maybe<Scalars["ID"]>;
  oldId_gt?: Maybe<Scalars["ID"]>;
  oldId_gte?: Maybe<Scalars["ID"]>;
  oldId_contains?: Maybe<Scalars["ID"]>;
  oldId_not_contains?: Maybe<Scalars["ID"]>;
  oldId_starts_with?: Maybe<Scalars["ID"]>;
  oldId_not_starts_with?: Maybe<Scalars["ID"]>;
  oldId_ends_with?: Maybe<Scalars["ID"]>;
  oldId_not_ends_with?: Maybe<Scalars["ID"]>;
  userType?: Maybe<Scalars["Int"]>;
  userType_not?: Maybe<Scalars["Int"]>;
  userType_in?: Maybe<Array<Scalars["Int"]>>;
  userType_not_in?: Maybe<Array<Scalars["Int"]>>;
  userType_lt?: Maybe<Scalars["Int"]>;
  userType_lte?: Maybe<Scalars["Int"]>;
  userType_gt?: Maybe<Scalars["Int"]>;
  userType_gte?: Maybe<Scalars["Int"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userEmail_not?: Maybe<Scalars["String"]>;
  userEmail_in?: Maybe<Array<Scalars["String"]>>;
  userEmail_not_in?: Maybe<Array<Scalars["String"]>>;
  userEmail_lt?: Maybe<Scalars["String"]>;
  userEmail_lte?: Maybe<Scalars["String"]>;
  userEmail_gt?: Maybe<Scalars["String"]>;
  userEmail_gte?: Maybe<Scalars["String"]>;
  userEmail_contains?: Maybe<Scalars["String"]>;
  userEmail_not_contains?: Maybe<Scalars["String"]>;
  userEmail_starts_with?: Maybe<Scalars["String"]>;
  userEmail_not_starts_with?: Maybe<Scalars["String"]>;
  userEmail_ends_with?: Maybe<Scalars["String"]>;
  userEmail_not_ends_with?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  userPassword_not?: Maybe<Scalars["String"]>;
  userPassword_in?: Maybe<Array<Scalars["String"]>>;
  userPassword_not_in?: Maybe<Array<Scalars["String"]>>;
  userPassword_lt?: Maybe<Scalars["String"]>;
  userPassword_lte?: Maybe<Scalars["String"]>;
  userPassword_gt?: Maybe<Scalars["String"]>;
  userPassword_gte?: Maybe<Scalars["String"]>;
  userPassword_contains?: Maybe<Scalars["String"]>;
  userPassword_not_contains?: Maybe<Scalars["String"]>;
  userPassword_starts_with?: Maybe<Scalars["String"]>;
  userPassword_not_starts_with?: Maybe<Scalars["String"]>;
  userPassword_ends_with?: Maybe<Scalars["String"]>;
  userPassword_not_ends_with?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  publicHash_not?: Maybe<Scalars["String"]>;
  publicHash_in?: Maybe<Array<Scalars["String"]>>;
  publicHash_not_in?: Maybe<Array<Scalars["String"]>>;
  publicHash_lt?: Maybe<Scalars["String"]>;
  publicHash_lte?: Maybe<Scalars["String"]>;
  publicHash_gt?: Maybe<Scalars["String"]>;
  publicHash_gte?: Maybe<Scalars["String"]>;
  publicHash_contains?: Maybe<Scalars["String"]>;
  publicHash_not_contains?: Maybe<Scalars["String"]>;
  publicHash_starts_with?: Maybe<Scalars["String"]>;
  publicHash_not_starts_with?: Maybe<Scalars["String"]>;
  publicHash_ends_with?: Maybe<Scalars["String"]>;
  publicHash_not_ends_with?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  privateHash_not?: Maybe<Scalars["String"]>;
  privateHash_in?: Maybe<Array<Scalars["String"]>>;
  privateHash_not_in?: Maybe<Array<Scalars["String"]>>;
  privateHash_lt?: Maybe<Scalars["String"]>;
  privateHash_lte?: Maybe<Scalars["String"]>;
  privateHash_gt?: Maybe<Scalars["String"]>;
  privateHash_gte?: Maybe<Scalars["String"]>;
  privateHash_contains?: Maybe<Scalars["String"]>;
  privateHash_not_contains?: Maybe<Scalars["String"]>;
  privateHash_starts_with?: Maybe<Scalars["String"]>;
  privateHash_not_starts_with?: Maybe<Scalars["String"]>;
  privateHash_ends_with?: Maybe<Scalars["String"]>;
  privateHash_not_ends_with?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  confirmHash_not?: Maybe<Scalars["String"]>;
  confirmHash_in?: Maybe<Array<Scalars["String"]>>;
  confirmHash_not_in?: Maybe<Array<Scalars["String"]>>;
  confirmHash_lt?: Maybe<Scalars["String"]>;
  confirmHash_lte?: Maybe<Scalars["String"]>;
  confirmHash_gt?: Maybe<Scalars["String"]>;
  confirmHash_gte?: Maybe<Scalars["String"]>;
  confirmHash_contains?: Maybe<Scalars["String"]>;
  confirmHash_not_contains?: Maybe<Scalars["String"]>;
  confirmHash_starts_with?: Maybe<Scalars["String"]>;
  confirmHash_not_starts_with?: Maybe<Scalars["String"]>;
  confirmHash_ends_with?: Maybe<Scalars["String"]>;
  confirmHash_not_ends_with?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  forgotHash_not?: Maybe<Scalars["String"]>;
  forgotHash_in?: Maybe<Array<Scalars["String"]>>;
  forgotHash_not_in?: Maybe<Array<Scalars["String"]>>;
  forgotHash_lt?: Maybe<Scalars["String"]>;
  forgotHash_lte?: Maybe<Scalars["String"]>;
  forgotHash_gt?: Maybe<Scalars["String"]>;
  forgotHash_gte?: Maybe<Scalars["String"]>;
  forgotHash_contains?: Maybe<Scalars["String"]>;
  forgotHash_not_contains?: Maybe<Scalars["String"]>;
  forgotHash_starts_with?: Maybe<Scalars["String"]>;
  forgotHash_not_starts_with?: Maybe<Scalars["String"]>;
  forgotHash_ends_with?: Maybe<Scalars["String"]>;
  forgotHash_not_ends_with?: Maybe<Scalars["String"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userConfirmed_not?: Maybe<Scalars["Int"]>;
  userConfirmed_in?: Maybe<Array<Scalars["Int"]>>;
  userConfirmed_not_in?: Maybe<Array<Scalars["Int"]>>;
  userConfirmed_lt?: Maybe<Scalars["Int"]>;
  userConfirmed_lte?: Maybe<Scalars["Int"]>;
  userConfirmed_gt?: Maybe<Scalars["Int"]>;
  userConfirmed_gte?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userDeleted_not?: Maybe<Scalars["Boolean"]>;
  userMeta_every?: Maybe<UserMetaWhereInput>;
  userMeta_some?: Maybe<UserMetaWhereInput>;
  userMeta_none?: Maybe<UserMetaWhereInput>;
  userTracks_every?: Maybe<UserTrackWhereInput>;
  userTracks_some?: Maybe<UserTrackWhereInput>;
  userTracks_none?: Maybe<UserTrackWhereInput>;
  userFeedbacks_every?: Maybe<UserFeedbackWhereInput>;
  userFeedbacks_some?: Maybe<UserFeedbackWhereInput>;
  userFeedbacks_none?: Maybe<UserFeedbackWhereInput>;
  profilePages_every?: Maybe<ProfilePageWhereInput>;
  profilePages_some?: Maybe<ProfilePageWhereInput>;
  profilePages_none?: Maybe<ProfilePageWhereInput>;
  blogPosts_every?: Maybe<BlogPostWhereInput>;
  blogPosts_some?: Maybe<BlogPostWhereInput>;
  blogPosts_none?: Maybe<BlogPostWhereInput>;
  reviews_every?: Maybe<ReviewWhereInput>;
  reviews_some?: Maybe<ReviewWhereInput>;
  reviews_none?: Maybe<ReviewWhereInput>;
  files_every?: Maybe<FileWhereInput>;
  files_some?: Maybe<FileWhereInput>;
  files_none?: Maybe<FileWhereInput>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  oldId?: Maybe<Scalars["ID"]>;
  userEmail?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  privateHash?: Maybe<Scalars["String"]>;
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
};
export type AllReviewsQueryVariables = {};

export type AllReviewsQuery = { __typename?: "Query" } & {
  reviews: Array<
    Maybe<
      { __typename?: "Review" } & Pick<
        Review,
        "id" | "itemName" | "itemContent"
      > & {
          itemMeta: Maybe<
            Array<
              { __typename?: "ReviewMeta" } & Pick<
                ReviewMeta,
                "id" | "metaName" | "metaValue"
              >
            >
          >;
          userTrack: Maybe<
            { __typename?: "UserTrack" } & Pick<
              UserTrack,
              "id" | "itemName"
            > & {
                user: Maybe<
                  { __typename?: "User" } & Pick<User, "id"> & {
                      userMeta: Maybe<
                        Array<
                          { __typename?: "UserMeta" } & Pick<
                            UserMeta,
                            "id" | "metaName" | "metaValue"
                          >
                        >
                      >;
                    }
                >;
                itemMeta: Maybe<
                  Array<
                    { __typename?: "UserTrackMeta" } & Pick<
                      UserTrackMeta,
                      "id" | "metaName" | "metaValue"
                    >
                  >
                >;
                files: Maybe<
                  Array<
                    { __typename?: "File" } & Pick<File, "id" | "itemName"> & {
                        itemMeta: Maybe<
                          Array<
                            { __typename?: "FileMeta" } & Pick<
                              FileMeta,
                              "metaName" | "metaValue"
                            >
                          >
                        >;
                      }
                  >
                >;
              }
          >;
          user: Maybe<
            { __typename?: "User" } & Pick<
              User,
              "id" | "oldId" | "userEmail"
            > & {
                files: Maybe<
                  Array<
                    { __typename?: "File" } & Pick<File, "id" | "itemName"> & {
                        itemMeta: Maybe<
                          Array<
                            { __typename?: "FileMeta" } & Pick<
                              FileMeta,
                              "metaName" | "metaValue"
                            >
                          >
                        >;
                      }
                  >
                >;
                profilePages: Maybe<
                  Array<
                    { __typename?: "ProfilePage" } & Pick<
                      ProfilePage,
                      "id" | "itemName" | "itemContent"
                    > & {
                        itemMeta: Maybe<
                          Array<
                            { __typename?: "ProfilePageMeta" } & Pick<
                              ProfilePageMeta,
                              "id" | "metaName" | "metaValue"
                            >
                          >
                        >;
                      }
                  >
                >;
                userMeta: Maybe<
                  Array<
                    { __typename?: "UserMeta" } & Pick<
                      UserMeta,
                      "id" | "metaName" | "metaValue"
                    >
                  >
                >;
              }
          >;
        }
    >
  >;
};

export type UserFragmentFragment = { __typename?: "User" } & Pick<
  User,
  "id" | "userEmail"
> & {
    files: Maybe<
      Array<
        { __typename?: "File" } & Pick<
          File,
          "id" | "itemName" | "itemContent"
        > & {
            itemMeta: Maybe<
              Array<
                { __typename?: "FileMeta" } & Pick<
                  FileMeta,
                  "metaName" | "metaValue"
                >
              >
            >;
          }
      >
    >;
    profilePages: Maybe<
      Array<
        { __typename?: "ProfilePage" } & Pick<
          ProfilePage,
          "id" | "itemName" | "itemContent"
        > & {
            itemMeta: Maybe<
              Array<
                { __typename?: "ProfilePageMeta" } & Pick<
                  ProfilePageMeta,
                  "id" | "metaName" | "metaValue"
                >
              >
            >;
          }
      >
    >;
    reviews: Maybe<Array<{ __typename?: "Review" } & Pick<Review, "id">>>;
    userTracks: Maybe<
      Array<{ __typename?: "UserTrack" } & Pick<UserTrack, "id">>
    >;
    userMeta: Maybe<
      Array<
        { __typename?: "UserMeta" } & Pick<UserMeta, "metaName" | "metaValue">
      >
    >;
  };

export type UsersQueryVariables = {};

export type UsersQuery = { __typename?: "Query" } & {
  users: Array<Maybe<{ __typename?: "User" } & UserFragmentFragment>>;
};

export type UserQueryVariables = {
  id?: Maybe<Scalars["ID"]>;
  privateHash?: Maybe<Scalars["String"]>;
};

export type UserQuery = { __typename?: "Query" } & {
  user: Maybe<{ __typename?: "User" } & UserFragmentFragment>;
};

export type UserTrackFragmentFragment = { __typename?: "UserTrack" } & Pick<
  UserTrack,
  "id" | "itemName" | "itemContent" | "itemUrlSegment"
> & {
    user: Maybe<
      { __typename?: "User" } & Pick<User, "id"> & {
          userMeta: Maybe<
            Array<
              { __typename?: "UserMeta" } & Pick<
                UserMeta,
                "id" | "metaName" | "metaValue"
              >
            >
          >;
        }
    >;
    itemMeta: Maybe<
      Array<
        { __typename?: "UserTrackMeta" } & Pick<
          UserTrackMeta,
          "id" | "metaName" | "metaValue"
        >
      >
    >;
    files: Maybe<
      Array<
        { __typename?: "File" } & Pick<
          File,
          "id" | "itemName" | "itemContent"
        > & {
            itemMeta: Maybe<
              Array<
                { __typename?: "FileMeta" } & Pick<
                  FileMeta,
                  "metaName" | "metaValue"
                >
              >
            >;
          }
      >
    >;
    reviews: Maybe<
      Array<
        { __typename?: "Review" } & Pick<
          Review,
          "id" | "itemName" | "itemContent"
        > & {
            itemMeta: Maybe<
              Array<
                { __typename?: "ReviewMeta" } & Pick<
                  ReviewMeta,
                  "id" | "metaName" | "metaValue"
                >
              >
            >;
            user: Maybe<
              { __typename?: "User" } & Pick<
                User,
                "id" | "oldId" | "userEmail"
              > & {
                  files: Maybe<
                    Array<
                      { __typename?: "File" } & Pick<
                        File,
                        "id" | "itemName" | "itemContent"
                      > & {
                          itemMeta: Maybe<
                            Array<
                              { __typename?: "FileMeta" } & Pick<
                                FileMeta,
                                "metaName" | "metaValue"
                              >
                            >
                          >;
                        }
                    >
                  >;
                  profilePages: Maybe<
                    Array<
                      { __typename?: "ProfilePage" } & Pick<
                        ProfilePage,
                        "id" | "itemName" | "itemContent"
                      > & {
                          itemMeta: Maybe<
                            Array<
                              { __typename?: "ProfilePageMeta" } & Pick<
                                ProfilePageMeta,
                                "id" | "metaName" | "metaValue"
                              >
                            >
                          >;
                        }
                    >
                  >;
                  userMeta: Maybe<
                    Array<
                      { __typename?: "UserMeta" } & Pick<
                        UserMeta,
                        "id" | "metaName" | "metaValue"
                      >
                    >
                  >;
                }
            >;
          }
      >
    >;
  };

export type UserTracksQueryVariables = {};

export type UserTracksQuery = { __typename?: "Query" } & {
  userTracks: Array<
    Maybe<{ __typename?: "UserTrack" } & UserTrackFragmentFragment>
  >;
};

export type UserTracksGenreQueryVariables = {
  genre?: Maybe<Scalars["String"]>;
};

export type UserTracksGenreQuery = { __typename?: "Query" } & {
  userTracks: Array<
    Maybe<{ __typename?: "UserTrack" } & UserTrackFragmentFragment>
  >;
};

export type UserTrackQueryVariables = {
  id: Scalars["ID"];
};

export type UserTrackQuery = { __typename?: "Query" } & {
  userTrack: Maybe<{ __typename?: "UserTrack" } & UserTrackFragmentFragment>;
};

export type ArtistTracksQueryVariables = {
  artistId: Scalars["ID"];
};

export type ArtistTracksQuery = { __typename?: "Query" } & {
  userTracks: Array<
    Maybe<{ __typename?: "UserTrack" } & UserTrackFragmentFragment>
  >;
};

export type FileQueryVariables = {
  oldId?: Maybe<Scalars["String"]>;
};

export type FileQuery = { __typename?: "Query" } & {
  file: Maybe<
    { __typename?: "File" } & Pick<File, "id" | "itemName" | "itemContent"> & {
        itemMeta: Maybe<
          Array<
            { __typename?: "FileMeta" } & Pick<
              FileMeta,
              "id" | "metaName" | "metaValue"
            >
          >
        >;
      }
  >;
};
