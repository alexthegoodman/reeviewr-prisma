export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime */
  DateTime: any;
};

export type Annotation = {
  __typename?: "Annotation";
  id: Scalars["ID"];
  itemContent: Scalars["String"];
  itemDeleted: Scalars["Boolean"];
  itemMeta?: Maybe<Array<AnnotationMeta>>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  post: Post;
  user: User;
};

export type AnnotationItemMetaArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type AnnotationCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<AnnotationMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  post: PostCreateOneWithoutPostInput;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type AnnotationCreateManyWithoutAnnotationsInput = {
  connect?: Maybe<Array<AnnotationWhereUniqueInput>>;
  create?: Maybe<Array<AnnotationCreateWithoutPostInput>>;
};

export type AnnotationCreateWithoutPostInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<AnnotationMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type AnnotationCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<AnnotationMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  post: PostCreateOneWithoutPostInput;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AnnotationMeta = {
  __typename?: "AnnotationMeta";
  annotation: Annotation;
  id: Scalars["ID"];
  metaDeleted: Scalars["Boolean"];
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
};

export type AnnotationMetaCreateManyWithoutItemMetaInput = {
  connect?: Maybe<Array<AnnotationMetaWhereUniqueInput>>;
  create?: Maybe<Array<AnnotationMetaCreateWithoutAnnotationInput>>;
};

export type AnnotationMetaCreateWithoutAnnotationInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AnnotationMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AnnotationMetaUpdateManyWithoutAnnotationInput = {
  connect?: Maybe<Array<AnnotationMetaWhereUniqueInput>>;
  create?: Maybe<Array<AnnotationMetaCreateWithoutAnnotationInput>>;
  delete?: Maybe<Array<AnnotationMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneAnnotationWhereInput>>;
  disconnect?: Maybe<Array<AnnotationMetaWhereUniqueInput>>;
  set?: Maybe<Array<AnnotationMetaWhereUniqueInput>>;
  update?: Maybe<
    Array<AnnotationMetaUpdateWithWhereUniqueWithoutAnnotationInput>
  >;
  updateMany?: Maybe<Array<AnnotationMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<
    Array<AnnotationMetaUpsertWithWhereUniqueWithoutAnnotationInput>
  >;
};

export type AnnotationMetaUpdateManyWithWhereNestedInput = {
  data: AnnotationMetaUpdateManyDataInput;
  where: MutationUpdateOneAnnotationWhereInput;
};

export type AnnotationMetaUpdateWithoutAnnotationDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AnnotationMetaUpdateWithWhereUniqueWithoutAnnotationInput = {
  data: AnnotationMetaUpdateWithoutAnnotationDataInput;
  where: AnnotationMetaWhereUniqueInput;
};

export type AnnotationMetaUpsertWithWhereUniqueWithoutAnnotationInput = {
  create: AnnotationMetaCreateWithoutAnnotationInput;
  update: AnnotationMetaUpdateWithoutAnnotationDataInput;
  where: AnnotationMetaWhereUniqueInput;
};

export type AnnotationMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type AnnotationUpdateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<AnnotationMetaUpdateManyWithoutAnnotationInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  post?: Maybe<PostUpdateOneRequiredWithoutAnnotationsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutAnnotationsInput>;
};

export type AnnotationUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AnnotationUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<AnnotationWhereUniqueInput>>;
  create?: Maybe<Array<AnnotationCreateWithoutPostInput>>;
  delete?: Maybe<Array<AnnotationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOnePostWhereInput>>;
  disconnect?: Maybe<Array<AnnotationWhereUniqueInput>>;
  set?: Maybe<Array<AnnotationWhereUniqueInput>>;
  update?: Maybe<Array<AnnotationUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<AnnotationUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<AnnotationUpsertWithWhereUniqueWithoutPostInput>>;
};

export type AnnotationUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<AnnotationWhereUniqueInput>>;
  create?: Maybe<Array<AnnotationCreateWithoutUserInput>>;
  delete?: Maybe<Array<AnnotationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneUserWhereInput>>;
  disconnect?: Maybe<Array<AnnotationWhereUniqueInput>>;
  set?: Maybe<Array<AnnotationWhereUniqueInput>>;
  update?: Maybe<Array<AnnotationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<AnnotationUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<AnnotationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AnnotationUpdateManyWithWhereNestedInput = {
  data: AnnotationUpdateManyDataInput;
  where: MutationUpdateOneUserWhereInput;
};

export type AnnotationUpdateWithoutPostDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<AnnotationMetaUpdateManyWithoutAnnotationInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutAnnotationsInput>;
};

export type AnnotationUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<AnnotationMetaUpdateManyWithoutAnnotationInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  post?: Maybe<PostUpdateOneRequiredWithoutAnnotationsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AnnotationUpdateWithWhereUniqueWithoutPostInput = {
  data: AnnotationUpdateWithoutPostDataInput;
  where: AnnotationWhereUniqueInput;
};

export type AnnotationUpdateWithWhereUniqueWithoutUserInput = {
  data: AnnotationUpdateWithoutUserDataInput;
  where: AnnotationWhereUniqueInput;
};

export type AnnotationUpsertWithWhereUniqueWithoutPostInput = {
  create: AnnotationCreateWithoutPostInput;
  update: AnnotationUpdateWithoutPostDataInput;
  where: AnnotationWhereUniqueInput;
};

export type AnnotationUpsertWithWhereUniqueWithoutUserInput = {
  create: AnnotationCreateWithoutUserInput;
  update: AnnotationUpdateWithoutUserDataInput;
  where: AnnotationWhereUniqueInput;
};

export type AnnotationWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type BooleanFilter = {
  equals?: Maybe<Scalars["Boolean"]>;
  not?: Maybe<Scalars["Boolean"]>;
};

export type Category = {
  __typename?: "Category";
  id: Scalars["ID"];
  itemContent: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  pods?: Maybe<Array<Pod>>;
};

export type CategoryPodsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type CategoryCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  pods?: Maybe<PodCreateManyWithoutPodsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CategoryCreateManyWithoutCategoriesInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  create?: Maybe<Array<CategoryCreateWithoutPodsInput>>;
};

export type CategoryCreateWithoutPodsInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CategoryUpdateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  pods?: Maybe<PodUpdateManyWithoutCategoriesInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CategoryUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CategoryUpdateManyWithoutPodsInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  create?: Maybe<Array<CategoryCreateWithoutPodsInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOnePodWhereInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutPodsInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutPodsInput>>;
};

export type CategoryUpdateManyWithWhereNestedInput = {
  data: CategoryUpdateManyDataInput;
  where: MutationUpdateOnePodWhereInput;
};

export type CategoryUpdateWithoutPodsDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CategoryUpdateWithWhereUniqueWithoutPodsInput = {
  data: CategoryUpdateWithoutPodsDataInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithWhereUniqueWithoutPodsInput = {
  create: CategoryCreateWithoutPodsInput;
  update: CategoryUpdateWithoutPodsDataInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Favorite = {
  __typename?: "Favorite";
  id: Scalars["ID"];
  itemContent: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  post: Post;
  user: User;
};

export type FavoriteCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  post: PostCreateOneWithoutPostInput;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type FavoriteCreateManyWithoutFavoritesInput = {
  connect?: Maybe<Array<FavoriteWhereUniqueInput>>;
  create?: Maybe<Array<FavoriteCreateWithoutUserInput>>;
};

export type FavoriteCreateWithoutPostInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type FavoriteCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  post: PostCreateOneWithoutPostInput;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type FavoriteUpdateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  post?: Maybe<PostUpdateOneRequiredWithoutFavoritesInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutFavoritesInput>;
};

export type FavoriteUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type FavoriteUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<FavoriteWhereUniqueInput>>;
  create?: Maybe<Array<FavoriteCreateWithoutPostInput>>;
  delete?: Maybe<Array<FavoriteWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOnePostWhereInput>>;
  disconnect?: Maybe<Array<FavoriteWhereUniqueInput>>;
  set?: Maybe<Array<FavoriteWhereUniqueInput>>;
  update?: Maybe<Array<FavoriteUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<FavoriteUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<FavoriteUpsertWithWhereUniqueWithoutPostInput>>;
};

export type FavoriteUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<FavoriteWhereUniqueInput>>;
  create?: Maybe<Array<FavoriteCreateWithoutUserInput>>;
  delete?: Maybe<Array<FavoriteWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneUserWhereInput>>;
  disconnect?: Maybe<Array<FavoriteWhereUniqueInput>>;
  set?: Maybe<Array<FavoriteWhereUniqueInput>>;
  update?: Maybe<Array<FavoriteUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<FavoriteUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<FavoriteUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FavoriteUpdateManyWithWhereNestedInput = {
  data: FavoriteUpdateManyDataInput;
  where: MutationUpdateOneUserWhereInput;
};

export type FavoriteUpdateWithoutPostDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutFavoritesInput>;
};

export type FavoriteUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  post?: Maybe<PostUpdateOneRequiredWithoutFavoritesInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type FavoriteUpdateWithWhereUniqueWithoutPostInput = {
  data: FavoriteUpdateWithoutPostDataInput;
  where: FavoriteWhereUniqueInput;
};

export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
  data: FavoriteUpdateWithoutUserDataInput;
  where: FavoriteWhereUniqueInput;
};

export type FavoriteUpsertWithWhereUniqueWithoutPostInput = {
  create: FavoriteCreateWithoutPostInput;
  update: FavoriteUpdateWithoutPostDataInput;
  where: FavoriteWhereUniqueInput;
};

export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
  create: FavoriteCreateWithoutUserInput;
  update: FavoriteUpdateWithoutUserDataInput;
  where: FavoriteWhereUniqueInput;
};

export type FavoriteWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type IntFilter = {
  equals?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Scalars["Int"]>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  not?: Maybe<Scalars["Int"]>;
  notIn?: Maybe<Array<Scalars["Int"]>>;
};

export type Message = {
  __typename?: "Message";
  id: Scalars["ID"];
  itemContent: Scalars["String"];
  itemDeleted: Scalars["Boolean"];
  itemMeta?: Maybe<Array<MessageMeta>>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  thread: Thread;
  user: User;
};

export type MessageItemMetaArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type MessageCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<MessageMetaCreateManyWithoutItemMetaInput>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  thread: ThreadCreateOneWithoutThreadInput;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type MessageCreateOneWithoutMessageInput = {
  connect?: Maybe<MessageWhereUniqueInput>;
  create?: Maybe<MessageCreateWithoutThreadInput>;
};

export type MessageCreateWithoutThreadInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<MessageMetaCreateManyWithoutItemMetaInput>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type MessageCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<MessageMetaCreateManyWithoutItemMetaInput>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  thread: ThreadCreateOneWithoutThreadInput;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type MessageMeta = {
  __typename?: "MessageMeta";
  id: Scalars["ID"];
  message: Message;
  metaDeleted: Scalars["Boolean"];
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
};

export type MessageMetaCreateManyWithoutItemMetaInput = {
  connect?: Maybe<Array<MessageMetaWhereUniqueInput>>;
  create?: Maybe<Array<MessageMetaCreateWithoutMessageInput>>;
};

export type MessageMetaCreateWithoutMessageInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type MessageMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type MessageMetaUpdateManyWithoutMessageInput = {
  connect?: Maybe<Array<MessageMetaWhereUniqueInput>>;
  create?: Maybe<Array<MessageMetaCreateWithoutMessageInput>>;
  delete?: Maybe<Array<MessageMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneMessageWhereInput>>;
  disconnect?: Maybe<Array<MessageMetaWhereUniqueInput>>;
  set?: Maybe<Array<MessageMetaWhereUniqueInput>>;
  update?: Maybe<Array<MessageMetaUpdateWithWhereUniqueWithoutMessageInput>>;
  updateMany?: Maybe<Array<MessageMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<MessageMetaUpsertWithWhereUniqueWithoutMessageInput>>;
};

export type MessageMetaUpdateManyWithWhereNestedInput = {
  data: MessageMetaUpdateManyDataInput;
  where: MutationUpdateOneMessageWhereInput;
};

export type MessageMetaUpdateWithoutMessageDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type MessageMetaUpdateWithWhereUniqueWithoutMessageInput = {
  data: MessageMetaUpdateWithoutMessageDataInput;
  where: MessageMetaWhereUniqueInput;
};

export type MessageMetaUpsertWithWhereUniqueWithoutMessageInput = {
  create: MessageMetaCreateWithoutMessageInput;
  update: MessageMetaUpdateWithoutMessageDataInput;
  where: MessageMetaWhereUniqueInput;
};

export type MessageMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type MessageUpdateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<MessageMetaUpdateManyWithoutMessageInput>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  thread?: Maybe<ThreadUpdateOneRequiredWithoutMessageInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutMessageInput>;
};

export type MessageUpdateOneWithoutThreadInput = {
  connect?: Maybe<MessageWhereUniqueInput>;
  create?: Maybe<MessageCreateWithoutThreadInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  update?: Maybe<MessageUpdateWithoutThreadDataInput>;
  upsert?: Maybe<MessageUpsertWithoutThreadInput>;
};

export type MessageUpdateOneWithoutUserInput = {
  connect?: Maybe<MessageWhereUniqueInput>;
  create?: Maybe<MessageCreateWithoutUserInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  update?: Maybe<MessageUpdateWithoutUserDataInput>;
  upsert?: Maybe<MessageUpsertWithoutUserInput>;
};

export type MessageUpdateWithoutThreadDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<MessageMetaUpdateManyWithoutMessageInput>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutMessageInput>;
};

export type MessageUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<MessageMetaUpdateManyWithoutMessageInput>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  thread?: Maybe<ThreadUpdateOneRequiredWithoutMessageInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type MessageUpsertWithoutThreadInput = {
  create: MessageCreateWithoutThreadInput;
  update: MessageUpdateWithoutThreadDataInput;
};

export type MessageUpsertWithoutUserInput = {
  create: MessageCreateWithoutUserInput;
  update: MessageUpdateWithoutUserDataInput;
};

export type MessageWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createOneAnnotation: Annotation;
  createOneCategory: Category;
  createOneFavorite: Favorite;
  createOneMessage: Message;
  createOneNotification: Notification;
  createOnePod: Pod;
  createOnePost: Post;
  createOneQuestion: Question;
  createOneReview: Review;
  createOneTag: Tag;
  createOneThread: Thread;
  createOneUser: User;
  updateOneAnnotation?: Maybe<Annotation>;
  updateOneCategory?: Maybe<Category>;
  updateOneFavorite?: Maybe<Favorite>;
  updateOneMessage?: Maybe<Message>;
  updateOneNotification?: Maybe<Notification>;
  updateOnePod?: Maybe<Pod>;
  updateOnePost?: Maybe<Post>;
  updateOneQuestion?: Maybe<Question>;
  updateOneReview?: Maybe<Review>;
  updateOneTag?: Maybe<Tag>;
  updateOneThread?: Maybe<Thread>;
  updateOneUser?: Maybe<User>;
};

export type MutationCreateOneAnnotationArgs = {
  data: AnnotationCreateInput;
};

export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};

export type MutationCreateOneFavoriteArgs = {
  data: FavoriteCreateInput;
};

export type MutationCreateOneMessageArgs = {
  data: MessageCreateInput;
};

export type MutationCreateOneNotificationArgs = {
  data: NotificationCreateInput;
};

export type MutationCreateOnePodArgs = {
  data: PodCreateInput;
};

export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};

export type MutationCreateOneQuestionArgs = {
  data: QuestionCreateInput;
};

export type MutationCreateOneReviewArgs = {
  data: ReviewCreateInput;
};

export type MutationCreateOneTagArgs = {
  data: TagCreateInput;
};

export type MutationCreateOneThreadArgs = {
  data: ThreadCreateInput;
};

export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};

export type MutationUpdateOneAnnotationArgs = {
  data: AnnotationUpdateInput;
  where: AnnotationWhereUniqueInput;
};

export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type MutationUpdateOneFavoriteArgs = {
  data: FavoriteUpdateInput;
  where: FavoriteWhereUniqueInput;
};

export type MutationUpdateOneMessageArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};

export type MutationUpdateOneNotificationArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};

export type MutationUpdateOnePodArgs = {
  data: PodUpdateInput;
  where: PodWhereUniqueInput;
};

export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type MutationUpdateOneQuestionArgs = {
  data: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};

export type MutationUpdateOneReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};

export type MutationUpdateOneTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type MutationUpdateOneThreadArgs = {
  data: ThreadUpdateInput;
  where: ThreadWhereUniqueInput;
};

export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateOneAnnotationFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<Scalars["DateTime"]>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type MutationUpdateOneAnnotationWhereInput = {
  AND?: Maybe<Array<MutationUpdateOneAnnotationWhereInput>>;
  createdAt?: Maybe<MutationUpdateOneAnnotationFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<MutationUpdateOneAnnotationWhereInput>>;
  OR?: Maybe<Array<MutationUpdateOneAnnotationWhereInput>>;
  updatedAt?: Maybe<MutationUpdateOneAnnotationFilter>;
};

export type MutationUpdateOneCategoryFilter = {
  every?: Maybe<MutationUpdateOneCategoryWhereInput>;
  none?: Maybe<MutationUpdateOneCategoryWhereInput>;
  some?: Maybe<MutationUpdateOneCategoryWhereInput>;
};

export type MutationUpdateOneCategoryWhereInput = {
  AND?: Maybe<Array<MutationUpdateOneCategoryWhereInput>>;
  categories?: Maybe<MutationUpdateOneCategoryFilter>;
  createdAt?: Maybe<MutationUpdateOneCategoryFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<MutationUpdateOneCategoryFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  itemUrlSegment?: Maybe<StringFilter>;
  members?: Maybe<MutationUpdateOneCategoryFilter>;
  NOT?: Maybe<Array<MutationUpdateOneCategoryWhereInput>>;
  OR?: Maybe<Array<MutationUpdateOneCategoryWhereInput>>;
  posts?: Maybe<MutationUpdateOneCategoryFilter>;
  updatedAt?: Maybe<MutationUpdateOneCategoryFilter>;
};

export type MutationUpdateOneMessageFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<Scalars["DateTime"]>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type MutationUpdateOneMessageWhereInput = {
  AND?: Maybe<Array<MutationUpdateOneMessageWhereInput>>;
  createdAt?: Maybe<MutationUpdateOneMessageFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<MutationUpdateOneMessageWhereInput>>;
  OR?: Maybe<Array<MutationUpdateOneMessageWhereInput>>;
  updatedAt?: Maybe<MutationUpdateOneMessageFilter>;
};

export type MutationUpdateOneNotificationFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<Scalars["DateTime"]>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type MutationUpdateOneNotificationWhereInput = {
  AND?: Maybe<Array<MutationUpdateOneNotificationWhereInput>>;
  createdAt?: Maybe<MutationUpdateOneNotificationFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<MutationUpdateOneNotificationWhereInput>>;
  OR?: Maybe<Array<MutationUpdateOneNotificationWhereInput>>;
  updatedAt?: Maybe<MutationUpdateOneNotificationFilter>;
};

export type MutationUpdateOnePodFilter = {
  every?: Maybe<MutationUpdateOnePodWhereInput>;
  none?: Maybe<MutationUpdateOnePodWhereInput>;
  some?: Maybe<MutationUpdateOnePodWhereInput>;
};

export type MutationUpdateOnePodWhereInput = {
  AND?: Maybe<Array<MutationUpdateOnePodWhereInput>>;
  annotations?: Maybe<MutationUpdateOnePodFilter>;
  confirmHash?: Maybe<StringFilter>;
  createdAt?: Maybe<MutationUpdateOnePodFilter>;
  favorites?: Maybe<MutationUpdateOnePodFilter>;
  followers?: Maybe<MutationUpdateOnePodFilter>;
  following?: Maybe<MutationUpdateOnePodFilter>;
  forgotHash?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  memberOf?: Maybe<MutationUpdateOnePodFilter>;
  NOT?: Maybe<Array<MutationUpdateOnePodWhereInput>>;
  notifications?: Maybe<MutationUpdateOnePodFilter>;
  OR?: Maybe<Array<MutationUpdateOnePodWhereInput>>;
  pods?: Maybe<MutationUpdateOnePodFilter>;
  posts?: Maybe<MutationUpdateOnePodFilter>;
  privateHash?: Maybe<StringFilter>;
  publicHash?: Maybe<StringFilter>;
  questions?: Maybe<MutationUpdateOnePodFilter>;
  reviews?: Maybe<MutationUpdateOnePodFilter>;
  threads?: Maybe<MutationUpdateOnePodFilter>;
  updatedAt?: Maybe<MutationUpdateOnePodFilter>;
  userConfirmed?: Maybe<IntFilter>;
  userDeleted?: Maybe<BooleanFilter>;
  userEmail?: Maybe<StringFilter>;
  userMeta?: Maybe<MutationUpdateOnePodFilter>;
  userPassword?: Maybe<StringFilter>;
  userType?: Maybe<IntFilter>;
};

export type MutationUpdateOnePostFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<Scalars["DateTime"]>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type MutationUpdateOnePostWhereInput = {
  AND?: Maybe<Array<MutationUpdateOnePostWhereInput>>;
  createdAt?: Maybe<MutationUpdateOnePostFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<MutationUpdateOnePostWhereInput>>;
  OR?: Maybe<Array<MutationUpdateOnePostWhereInput>>;
  updatedAt?: Maybe<MutationUpdateOnePostFilter>;
};

export type MutationUpdateOneQuestionFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<Scalars["DateTime"]>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type MutationUpdateOneQuestionWhereInput = {
  AND?: Maybe<Array<MutationUpdateOneQuestionWhereInput>>;
  createdAt?: Maybe<MutationUpdateOneQuestionFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<MutationUpdateOneQuestionWhereInput>>;
  OR?: Maybe<Array<MutationUpdateOneQuestionWhereInput>>;
  updatedAt?: Maybe<MutationUpdateOneQuestionFilter>;
};

export type MutationUpdateOneReviewFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<Scalars["DateTime"]>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type MutationUpdateOneReviewWhereInput = {
  AND?: Maybe<Array<MutationUpdateOneReviewWhereInput>>;
  createdAt?: Maybe<MutationUpdateOneReviewFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<MutationUpdateOneReviewWhereInput>>;
  OR?: Maybe<Array<MutationUpdateOneReviewWhereInput>>;
  updatedAt?: Maybe<MutationUpdateOneReviewFilter>;
};

export type MutationUpdateOneTagFilter = {
  every?: Maybe<MutationUpdateOneTagWhereInput>;
  none?: Maybe<MutationUpdateOneTagWhereInput>;
  some?: Maybe<MutationUpdateOneTagWhereInput>;
};

export type MutationUpdateOneTagWhereInput = {
  AND?: Maybe<Array<MutationUpdateOneTagWhereInput>>;
  annotations?: Maybe<MutationUpdateOneTagFilter>;
  createdAt?: Maybe<MutationUpdateOneTagFilter>;
  favorites?: Maybe<MutationUpdateOneTagFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<MutationUpdateOneTagFilter>;
  itemMimeType?: Maybe<StringFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  itemUrlSegment?: Maybe<StringFilter>;
  NOT?: Maybe<Array<MutationUpdateOneTagWhereInput>>;
  OR?: Maybe<Array<MutationUpdateOneTagWhereInput>>;
  questions?: Maybe<MutationUpdateOneTagFilter>;
  reviews?: Maybe<MutationUpdateOneTagFilter>;
  tags?: Maybe<MutationUpdateOneTagFilter>;
  updatedAt?: Maybe<MutationUpdateOneTagFilter>;
};

export type MutationUpdateOneThreadFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<Scalars["DateTime"]>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type MutationUpdateOneThreadWhereInput = {
  AND?: Maybe<Array<MutationUpdateOneThreadWhereInput>>;
  createdAt?: Maybe<MutationUpdateOneThreadFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<MutationUpdateOneThreadWhereInput>>;
  OR?: Maybe<Array<MutationUpdateOneThreadWhereInput>>;
  updatedAt?: Maybe<MutationUpdateOneThreadFilter>;
};

export type MutationUpdateOneUserFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<Scalars["DateTime"]>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type MutationUpdateOneUserWhereInput = {
  AND?: Maybe<Array<MutationUpdateOneUserWhereInput>>;
  createdAt?: Maybe<MutationUpdateOneUserFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<MutationUpdateOneUserWhereInput>>;
  OR?: Maybe<Array<MutationUpdateOneUserWhereInput>>;
  updatedAt?: Maybe<MutationUpdateOneUserFilter>;
};

export type Notification = {
  __typename?: "Notification";
  id: Scalars["ID"];
  itemContent: Scalars["String"];
  itemDeleted: Scalars["Boolean"];
  itemMeta?: Maybe<Array<NotificationMeta>>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  thread: Thread;
  user: User;
};

export type NotificationItemMetaArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type NotificationCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<NotificationMetaCreateManyWithoutItemMetaInput>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  thread: ThreadCreateOneWithoutThreadInput;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type NotificationCreateManyWithoutNotificationsInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  create?: Maybe<Array<NotificationCreateWithoutUserInput>>;
};

export type NotificationCreateOneWithoutNotificationInput = {
  connect?: Maybe<NotificationWhereUniqueInput>;
  create?: Maybe<NotificationCreateWithoutThreadInput>;
};

export type NotificationCreateWithoutThreadInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<NotificationMetaCreateManyWithoutItemMetaInput>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type NotificationCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<NotificationMetaCreateManyWithoutItemMetaInput>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  thread: ThreadCreateOneWithoutThreadInput;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type NotificationMeta = {
  __typename?: "NotificationMeta";
  id: Scalars["ID"];
  metaDeleted: Scalars["Boolean"];
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  notification: Notification;
};

export type NotificationMetaCreateManyWithoutItemMetaInput = {
  connect?: Maybe<Array<NotificationMetaWhereUniqueInput>>;
  create?: Maybe<Array<NotificationMetaCreateWithoutNotificationInput>>;
};

export type NotificationMetaCreateWithoutNotificationInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type NotificationMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type NotificationMetaUpdateManyWithoutNotificationInput = {
  connect?: Maybe<Array<NotificationMetaWhereUniqueInput>>;
  create?: Maybe<Array<NotificationMetaCreateWithoutNotificationInput>>;
  delete?: Maybe<Array<NotificationMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneNotificationWhereInput>>;
  disconnect?: Maybe<Array<NotificationMetaWhereUniqueInput>>;
  set?: Maybe<Array<NotificationMetaWhereUniqueInput>>;
  update?: Maybe<
    Array<NotificationMetaUpdateWithWhereUniqueWithoutNotificationInput>
  >;
  updateMany?: Maybe<Array<NotificationMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<
    Array<NotificationMetaUpsertWithWhereUniqueWithoutNotificationInput>
  >;
};

export type NotificationMetaUpdateManyWithWhereNestedInput = {
  data: NotificationMetaUpdateManyDataInput;
  where: MutationUpdateOneNotificationWhereInput;
};

export type NotificationMetaUpdateWithoutNotificationDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type NotificationMetaUpdateWithWhereUniqueWithoutNotificationInput = {
  data: NotificationMetaUpdateWithoutNotificationDataInput;
  where: NotificationMetaWhereUniqueInput;
};

export type NotificationMetaUpsertWithWhereUniqueWithoutNotificationInput = {
  create: NotificationMetaCreateWithoutNotificationInput;
  update: NotificationMetaUpdateWithoutNotificationDataInput;
  where: NotificationMetaWhereUniqueInput;
};

export type NotificationMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type NotificationUpdateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<NotificationMetaUpdateManyWithoutNotificationInput>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  thread?: Maybe<ThreadUpdateOneRequiredWithoutNotificationInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutNotificationsInput>;
};

export type NotificationUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type NotificationUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  create?: Maybe<Array<NotificationCreateWithoutUserInput>>;
  delete?: Maybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneUserWhereInput>>;
  disconnect?: Maybe<Array<NotificationWhereUniqueInput>>;
  set?: Maybe<Array<NotificationWhereUniqueInput>>;
  update?: Maybe<Array<NotificationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<NotificationUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<NotificationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type NotificationUpdateManyWithWhereNestedInput = {
  data: NotificationUpdateManyDataInput;
  where: MutationUpdateOneUserWhereInput;
};

export type NotificationUpdateOneWithoutThreadInput = {
  connect?: Maybe<NotificationWhereUniqueInput>;
  create?: Maybe<NotificationCreateWithoutThreadInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  update?: Maybe<NotificationUpdateWithoutThreadDataInput>;
  upsert?: Maybe<NotificationUpsertWithoutThreadInput>;
};

export type NotificationUpdateWithoutThreadDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<NotificationMetaUpdateManyWithoutNotificationInput>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutNotificationsInput>;
};

export type NotificationUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<NotificationMetaUpdateManyWithoutNotificationInput>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  thread?: Maybe<ThreadUpdateOneRequiredWithoutNotificationInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
  data: NotificationUpdateWithoutUserDataInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpsertWithoutThreadInput = {
  create: NotificationCreateWithoutThreadInput;
  update: NotificationUpdateWithoutThreadDataInput;
};

export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  update: NotificationUpdateWithoutUserDataInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Pod = {
  __typename?: "Pod";
  categories?: Maybe<Array<Category>>;
  id: Scalars["ID"];
  itemContent: Scalars["String"];
  itemDeleted: Scalars["Boolean"];
  itemMeta?: Maybe<Array<PodMeta>>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  members?: Maybe<Array<User>>;
  posts?: Maybe<Array<Post>>;
  user: User;
};

export type PodCategoriesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type PodItemMetaArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type PodMembersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type PodPostsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type PodCreateInput = {
  categories?: Maybe<CategoryCreateManyWithoutCategoriesInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PodMetaCreateManyWithoutItemMetaInput>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  members?: Maybe<UserCreateManyWithoutMembersInput>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type PodCreateManyWithoutMemberOfInput = {
  connect?: Maybe<Array<PodWhereUniqueInput>>;
  create?: Maybe<Array<PodCreateWithoutMembersInput>>;
};

export type PodCreateManyWithoutPodsInput = {
  connect?: Maybe<Array<PodWhereUniqueInput>>;
  create?: Maybe<Array<PodCreateWithoutUserInput>>;
};

export type PodCreateOneWithoutPodInput = {
  connect?: Maybe<PodWhereUniqueInput>;
  create?: Maybe<PodCreateWithoutPostsInput>;
};

export type PodCreateWithoutCategoriesInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PodMetaCreateManyWithoutItemMetaInput>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  members?: Maybe<UserCreateManyWithoutMembersInput>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type PodCreateWithoutMembersInput = {
  categories?: Maybe<CategoryCreateManyWithoutCategoriesInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PodMetaCreateManyWithoutItemMetaInput>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type PodCreateWithoutPostsInput = {
  categories?: Maybe<CategoryCreateManyWithoutCategoriesInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PodMetaCreateManyWithoutItemMetaInput>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  members?: Maybe<UserCreateManyWithoutMembersInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type PodCreateWithoutUserInput = {
  categories?: Maybe<CategoryCreateManyWithoutCategoriesInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PodMetaCreateManyWithoutItemMetaInput>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  members?: Maybe<UserCreateManyWithoutMembersInput>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PodMeta = {
  __typename?: "PodMeta";
  id: Scalars["ID"];
  metaDeleted: Scalars["Boolean"];
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  pod: Pod;
};

export type PodMetaCreateManyWithoutItemMetaInput = {
  connect?: Maybe<Array<PodMetaWhereUniqueInput>>;
  create?: Maybe<Array<PodMetaCreateWithoutPodInput>>;
};

export type PodMetaCreateWithoutPodInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PodMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PodMetaUpdateManyWithoutPodInput = {
  connect?: Maybe<Array<PodMetaWhereUniqueInput>>;
  create?: Maybe<Array<PodMetaCreateWithoutPodInput>>;
  delete?: Maybe<Array<PodMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOnePodWhereInput>>;
  disconnect?: Maybe<Array<PodMetaWhereUniqueInput>>;
  set?: Maybe<Array<PodMetaWhereUniqueInput>>;
  update?: Maybe<Array<PodMetaUpdateWithWhereUniqueWithoutPodInput>>;
  updateMany?: Maybe<Array<PodMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PodMetaUpsertWithWhereUniqueWithoutPodInput>>;
};

export type PodMetaUpdateManyWithWhereNestedInput = {
  data: PodMetaUpdateManyDataInput;
  where: MutationUpdateOnePodWhereInput;
};

export type PodMetaUpdateWithoutPodDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PodMetaUpdateWithWhereUniqueWithoutPodInput = {
  data: PodMetaUpdateWithoutPodDataInput;
  where: PodMetaWhereUniqueInput;
};

export type PodMetaUpsertWithWhereUniqueWithoutPodInput = {
  create: PodMetaCreateWithoutPodInput;
  update: PodMetaUpdateWithoutPodDataInput;
  where: PodMetaWhereUniqueInput;
};

export type PodMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type PodUpdateInput = {
  categories?: Maybe<CategoryUpdateManyWithoutPodsInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PodMetaUpdateManyWithoutPodInput>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  members?: Maybe<UserUpdateManyWithoutMemberOfInput>;
  posts?: Maybe<PostUpdateManyWithoutPodInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutPodsInput>;
};

export type PodUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PodUpdateManyWithoutCategoriesInput = {
  connect?: Maybe<Array<PodWhereUniqueInput>>;
  create?: Maybe<Array<PodCreateWithoutCategoriesInput>>;
  delete?: Maybe<Array<PodWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneCategoryWhereInput>>;
  disconnect?: Maybe<Array<PodWhereUniqueInput>>;
  set?: Maybe<Array<PodWhereUniqueInput>>;
  update?: Maybe<Array<PodUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: Maybe<Array<PodUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PodUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type PodUpdateManyWithoutMembersInput = {
  connect?: Maybe<Array<PodWhereUniqueInput>>;
  create?: Maybe<Array<PodCreateWithoutMembersInput>>;
  delete?: Maybe<Array<PodWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneUserWhereInput>>;
  disconnect?: Maybe<Array<PodWhereUniqueInput>>;
  set?: Maybe<Array<PodWhereUniqueInput>>;
  update?: Maybe<Array<PodUpdateWithWhereUniqueWithoutMembersInput>>;
  updateMany?: Maybe<Array<PodUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PodUpsertWithWhereUniqueWithoutMembersInput>>;
};

export type PodUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<PodWhereUniqueInput>>;
  create?: Maybe<Array<PodCreateWithoutUserInput>>;
  delete?: Maybe<Array<PodWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneUserWhereInput>>;
  disconnect?: Maybe<Array<PodWhereUniqueInput>>;
  set?: Maybe<Array<PodWhereUniqueInput>>;
  update?: Maybe<Array<PodUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<PodUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PodUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PodUpdateManyWithWhereNestedInput = {
  data: PodUpdateManyDataInput;
  where: MutationUpdateOneUserWhereInput;
};

export type PodUpdateOneRequiredWithoutPostsInput = {
  connect?: Maybe<PodWhereUniqueInput>;
  create?: Maybe<PodCreateWithoutPostsInput>;
  update?: Maybe<PodUpdateWithoutPostsDataInput>;
  upsert?: Maybe<PodUpsertWithoutPostsInput>;
};

export type PodUpdateWithoutCategoriesDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PodMetaUpdateManyWithoutPodInput>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  members?: Maybe<UserUpdateManyWithoutMemberOfInput>;
  posts?: Maybe<PostUpdateManyWithoutPodInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutPodsInput>;
};

export type PodUpdateWithoutMembersDataInput = {
  categories?: Maybe<CategoryUpdateManyWithoutPodsInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PodMetaUpdateManyWithoutPodInput>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  posts?: Maybe<PostUpdateManyWithoutPodInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutPodsInput>;
};

export type PodUpdateWithoutPostsDataInput = {
  categories?: Maybe<CategoryUpdateManyWithoutPodsInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PodMetaUpdateManyWithoutPodInput>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  members?: Maybe<UserUpdateManyWithoutMemberOfInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutPodsInput>;
};

export type PodUpdateWithoutUserDataInput = {
  categories?: Maybe<CategoryUpdateManyWithoutPodsInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PodMetaUpdateManyWithoutPodInput>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  members?: Maybe<UserUpdateManyWithoutMemberOfInput>;
  posts?: Maybe<PostUpdateManyWithoutPodInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PodUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: PodUpdateWithoutCategoriesDataInput;
  where: PodWhereUniqueInput;
};

export type PodUpdateWithWhereUniqueWithoutMembersInput = {
  data: PodUpdateWithoutMembersDataInput;
  where: PodWhereUniqueInput;
};

export type PodUpdateWithWhereUniqueWithoutUserInput = {
  data: PodUpdateWithoutUserDataInput;
  where: PodWhereUniqueInput;
};

export type PodUpsertWithoutPostsInput = {
  create: PodCreateWithoutPostsInput;
  update: PodUpdateWithoutPostsDataInput;
};

export type PodUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: PodCreateWithoutCategoriesInput;
  update: PodUpdateWithoutCategoriesDataInput;
  where: PodWhereUniqueInput;
};

export type PodUpsertWithWhereUniqueWithoutMembersInput = {
  create: PodCreateWithoutMembersInput;
  update: PodUpdateWithoutMembersDataInput;
  where: PodWhereUniqueInput;
};

export type PodUpsertWithWhereUniqueWithoutUserInput = {
  create: PodCreateWithoutUserInput;
  update: PodUpdateWithoutUserDataInput;
  where: PodWhereUniqueInput;
};

export type PodWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Post = {
  __typename?: "Post";
  annotations?: Maybe<Array<Annotation>>;
  favorites?: Maybe<Array<Favorite>>;
  id: Scalars["ID"];
  itemContent: Scalars["String"];
  itemDeleted: Scalars["Boolean"];
  itemMeta?: Maybe<Array<PostMeta>>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  pod: Pod;
  questions?: Maybe<Array<Question>>;
  reviews?: Maybe<Array<Review>>;
  tags?: Maybe<Array<Tag>>;
  user: User;
};

export type PostAnnotationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type PostFavoritesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type PostItemMetaArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type PostQuestionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type PostReviewsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type PostTagsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type PostCreateInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  pod: PodCreateOneWithoutPodInput;
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  tags?: Maybe<TagCreateManyWithoutTagsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type PostCreateManyWithoutPostsInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  create?: Maybe<Array<PostCreateWithoutUserInput>>;
};

export type PostCreateOneWithoutPostInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  create?: Maybe<PostCreateWithoutFavoritesInput>;
};

export type PostCreateWithoutAnnotationsInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  pod: PodCreateOneWithoutPodInput;
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  tags?: Maybe<TagCreateManyWithoutTagsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type PostCreateWithoutFavoritesInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  pod: PodCreateOneWithoutPodInput;
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  tags?: Maybe<TagCreateManyWithoutTagsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type PostCreateWithoutPodInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  tags?: Maybe<TagCreateManyWithoutTagsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type PostCreateWithoutQuestionsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  pod: PodCreateOneWithoutPodInput;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  tags?: Maybe<TagCreateManyWithoutTagsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type PostCreateWithoutReviewsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  pod: PodCreateOneWithoutPodInput;
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  tags?: Maybe<TagCreateManyWithoutTagsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type PostCreateWithoutTagsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  pod: PodCreateOneWithoutPodInput;
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type PostCreateWithoutUserInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  pod: PodCreateOneWithoutPodInput;
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  tags?: Maybe<TagCreateManyWithoutTagsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PostMeta = {
  __typename?: "PostMeta";
  id: Scalars["ID"];
  metaDeleted: Scalars["Boolean"];
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  post: Post;
};

export type PostMetaCreateManyWithoutItemMetaInput = {
  connect?: Maybe<Array<PostMetaWhereUniqueInput>>;
  create?: Maybe<Array<PostMetaCreateWithoutPostInput>>;
};

export type PostMetaCreateWithoutPostInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PostMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PostMetaUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<PostMetaWhereUniqueInput>>;
  create?: Maybe<Array<PostMetaCreateWithoutPostInput>>;
  delete?: Maybe<Array<PostMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOnePostWhereInput>>;
  disconnect?: Maybe<Array<PostMetaWhereUniqueInput>>;
  set?: Maybe<Array<PostMetaWhereUniqueInput>>;
  update?: Maybe<Array<PostMetaUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<PostMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PostMetaUpsertWithWhereUniqueWithoutPostInput>>;
};

export type PostMetaUpdateManyWithWhereNestedInput = {
  data: PostMetaUpdateManyDataInput;
  where: MutationUpdateOnePostWhereInput;
};

export type PostMetaUpdateWithoutPostDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PostMetaUpdateWithWhereUniqueWithoutPostInput = {
  data: PostMetaUpdateWithoutPostDataInput;
  where: PostMetaWhereUniqueInput;
};

export type PostMetaUpsertWithWhereUniqueWithoutPostInput = {
  create: PostMetaCreateWithoutPostInput;
  update: PostMetaUpdateWithoutPostDataInput;
  where: PostMetaWhereUniqueInput;
};

export type PostMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type PostUpdateInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutPostInput>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  pod?: Maybe<PodUpdateOneRequiredWithoutPostsInput>;
  questions?: Maybe<QuestionUpdateManyWithoutPostInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PostUpdateManyWithoutPodInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  create?: Maybe<Array<PostCreateWithoutPodInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOnePodWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutPodInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutPodInput>>;
};

export type PostUpdateManyWithoutTagsInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  create?: Maybe<Array<PostCreateWithoutTagsInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneTagWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutTagsInput>>;
};

export type PostUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  create?: Maybe<Array<PostCreateWithoutUserInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneUserWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PostUpdateManyWithWhereNestedInput = {
  data: PostUpdateManyDataInput;
  where: MutationUpdateOneUserWhereInput;
};

export type PostUpdateOneRequiredWithoutAnnotationsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  create?: Maybe<PostCreateWithoutAnnotationsInput>;
  update?: Maybe<PostUpdateWithoutAnnotationsDataInput>;
  upsert?: Maybe<PostUpsertWithoutAnnotationsInput>;
};

export type PostUpdateOneRequiredWithoutFavoritesInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  create?: Maybe<PostCreateWithoutFavoritesInput>;
  update?: Maybe<PostUpdateWithoutFavoritesDataInput>;
  upsert?: Maybe<PostUpsertWithoutFavoritesInput>;
};

export type PostUpdateOneRequiredWithoutQuestionsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  create?: Maybe<PostCreateWithoutQuestionsInput>;
  update?: Maybe<PostUpdateWithoutQuestionsDataInput>;
  upsert?: Maybe<PostUpsertWithoutQuestionsInput>;
};

export type PostUpdateOneRequiredWithoutReviewsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  create?: Maybe<PostCreateWithoutReviewsInput>;
  update?: Maybe<PostUpdateWithoutReviewsDataInput>;
  upsert?: Maybe<PostUpsertWithoutReviewsInput>;
};

export type PostUpdateWithoutAnnotationsDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutPostInput>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  pod?: Maybe<PodUpdateOneRequiredWithoutPostsInput>;
  questions?: Maybe<QuestionUpdateManyWithoutPostInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateWithoutFavoritesDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  pod?: Maybe<PodUpdateOneRequiredWithoutPostsInput>;
  questions?: Maybe<QuestionUpdateManyWithoutPostInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateWithoutPodDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutPostInput>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  questions?: Maybe<QuestionUpdateManyWithoutPostInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateWithoutQuestionsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutPostInput>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  pod?: Maybe<PodUpdateOneRequiredWithoutPostsInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateWithoutReviewsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutPostInput>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  pod?: Maybe<PodUpdateOneRequiredWithoutPostsInput>;
  questions?: Maybe<QuestionUpdateManyWithoutPostInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateWithoutTagsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutPostInput>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  pod?: Maybe<PodUpdateOneRequiredWithoutPostsInput>;
  questions?: Maybe<QuestionUpdateManyWithoutPostInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateWithoutUserDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutPostInput>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  pod?: Maybe<PodUpdateOneRequiredWithoutPostsInput>;
  questions?: Maybe<QuestionUpdateManyWithoutPostInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PostUpdateWithWhereUniqueWithoutPodInput = {
  data: PostUpdateWithoutPodDataInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutTagsInput = {
  data: PostUpdateWithoutTagsDataInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutUserInput = {
  data: PostUpdateWithoutUserDataInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutAnnotationsInput = {
  create: PostCreateWithoutAnnotationsInput;
  update: PostUpdateWithoutAnnotationsDataInput;
};

export type PostUpsertWithoutFavoritesInput = {
  create: PostCreateWithoutFavoritesInput;
  update: PostUpdateWithoutFavoritesDataInput;
};

export type PostUpsertWithoutQuestionsInput = {
  create: PostCreateWithoutQuestionsInput;
  update: PostUpdateWithoutQuestionsDataInput;
};

export type PostUpsertWithoutReviewsInput = {
  create: PostCreateWithoutReviewsInput;
  update: PostUpdateWithoutReviewsDataInput;
};

export type PostUpsertWithWhereUniqueWithoutPodInput = {
  create: PostCreateWithoutPodInput;
  update: PostUpdateWithoutPodDataInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutTagsInput = {
  create: PostCreateWithoutTagsInput;
  update: PostUpdateWithoutTagsDataInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutUserInput = {
  create: PostCreateWithoutUserInput;
  update: PostUpdateWithoutUserDataInput;
  where: PostWhereUniqueInput;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Query = {
  __typename?: "Query";
  findManyAnnotation?: Maybe<Array<Annotation>>;
  findManyCategory?: Maybe<Array<Category>>;
  findManyFavorite?: Maybe<Array<Favorite>>;
  findManyMessage?: Maybe<Array<Message>>;
  findManyNotification?: Maybe<Array<Notification>>;
  findManyPod?: Maybe<Array<Pod>>;
  findManyPost?: Maybe<Array<Post>>;
  findManyQuestion?: Maybe<Array<Question>>;
  findManyReview?: Maybe<Array<Review>>;
  findManyTag?: Maybe<Array<Tag>>;
  findManyThread?: Maybe<Array<Thread>>;
  findManyUser?: Maybe<Array<User>>;
  findOneAnnotation?: Maybe<Annotation>;
  findOneCategory?: Maybe<Category>;
  findOneFavorite?: Maybe<Favorite>;
  findOneMessage?: Maybe<Message>;
  findOneNotification?: Maybe<Notification>;
  findOnePod?: Maybe<Pod>;
  findOnePost?: Maybe<Post>;
  findOneQuestion?: Maybe<Question>;
  findOneReview?: Maybe<Review>;
  findOneTag?: Maybe<Tag>;
  findOneThread?: Maybe<Thread>;
  findOneUser?: Maybe<User>;
};

export type QueryFindManyAnnotationArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryFindManyCategoryArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryFindManyFavoriteArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryFindManyMessageArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryFindManyNotificationArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryFindManyPodArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryFindManyPostArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryFindManyQuestionArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryFindManyReviewArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryFindManyTagArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryFindManyThreadArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryFindManyUserArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryFindOneAnnotationArgs = {
  where: AnnotationWhereUniqueInput;
};

export type QueryFindOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};

export type QueryFindOneFavoriteArgs = {
  where: FavoriteWhereUniqueInput;
};

export type QueryFindOneMessageArgs = {
  where: MessageWhereUniqueInput;
};

export type QueryFindOneNotificationArgs = {
  where: NotificationWhereUniqueInput;
};

export type QueryFindOnePodArgs = {
  where: PodWhereUniqueInput;
};

export type QueryFindOnePostArgs = {
  where: PostWhereUniqueInput;
};

export type QueryFindOneQuestionArgs = {
  where: QuestionWhereUniqueInput;
};

export type QueryFindOneReviewArgs = {
  where: ReviewWhereUniqueInput;
};

export type QueryFindOneTagArgs = {
  where: TagWhereUniqueInput;
};

export type QueryFindOneThreadArgs = {
  where: ThreadWhereUniqueInput;
};

export type QueryFindOneUserArgs = {
  where: UserWhereUniqueInput;
};

export type Question = {
  __typename?: "Question";
  id: Scalars["ID"];
  itemContent: Scalars["String"];
  itemDeleted: Scalars["Boolean"];
  itemMeta?: Maybe<Array<QuestionMeta>>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  post: Post;
  user: User;
};

export type QuestionItemMetaArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QuestionCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<QuestionMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  post: PostCreateOneWithoutPostInput;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type QuestionCreateManyWithoutQuestionsInput = {
  connect?: Maybe<Array<QuestionWhereUniqueInput>>;
  create?: Maybe<Array<QuestionCreateWithoutPostInput>>;
};

export type QuestionCreateWithoutPostInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<QuestionMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type QuestionCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<QuestionMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  post: PostCreateOneWithoutPostInput;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type QuestionMeta = {
  __typename?: "QuestionMeta";
  id: Scalars["ID"];
  metaDeleted: Scalars["Boolean"];
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  question: Question;
};

export type QuestionMetaCreateManyWithoutItemMetaInput = {
  connect?: Maybe<Array<QuestionMetaWhereUniqueInput>>;
  create?: Maybe<Array<QuestionMetaCreateWithoutQuestionInput>>;
};

export type QuestionMetaCreateWithoutQuestionInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type QuestionMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type QuestionMetaUpdateManyWithoutQuestionInput = {
  connect?: Maybe<Array<QuestionMetaWhereUniqueInput>>;
  create?: Maybe<Array<QuestionMetaCreateWithoutQuestionInput>>;
  delete?: Maybe<Array<QuestionMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneQuestionWhereInput>>;
  disconnect?: Maybe<Array<QuestionMetaWhereUniqueInput>>;
  set?: Maybe<Array<QuestionMetaWhereUniqueInput>>;
  update?: Maybe<Array<QuestionMetaUpdateWithWhereUniqueWithoutQuestionInput>>;
  updateMany?: Maybe<Array<QuestionMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<QuestionMetaUpsertWithWhereUniqueWithoutQuestionInput>>;
};

export type QuestionMetaUpdateManyWithWhereNestedInput = {
  data: QuestionMetaUpdateManyDataInput;
  where: MutationUpdateOneQuestionWhereInput;
};

export type QuestionMetaUpdateWithoutQuestionDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type QuestionMetaUpdateWithWhereUniqueWithoutQuestionInput = {
  data: QuestionMetaUpdateWithoutQuestionDataInput;
  where: QuestionMetaWhereUniqueInput;
};

export type QuestionMetaUpsertWithWhereUniqueWithoutQuestionInput = {
  create: QuestionMetaCreateWithoutQuestionInput;
  update: QuestionMetaUpdateWithoutQuestionDataInput;
  where: QuestionMetaWhereUniqueInput;
};

export type QuestionMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type QuestionUpdateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<QuestionMetaUpdateManyWithoutQuestionInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  post?: Maybe<PostUpdateOneRequiredWithoutQuestionsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutQuestionsInput>;
};

export type QuestionUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type QuestionUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<QuestionWhereUniqueInput>>;
  create?: Maybe<Array<QuestionCreateWithoutPostInput>>;
  delete?: Maybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOnePostWhereInput>>;
  disconnect?: Maybe<Array<QuestionWhereUniqueInput>>;
  set?: Maybe<Array<QuestionWhereUniqueInput>>;
  update?: Maybe<Array<QuestionUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<QuestionUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<QuestionUpsertWithWhereUniqueWithoutPostInput>>;
};

export type QuestionUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<QuestionWhereUniqueInput>>;
  create?: Maybe<Array<QuestionCreateWithoutUserInput>>;
  delete?: Maybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneUserWhereInput>>;
  disconnect?: Maybe<Array<QuestionWhereUniqueInput>>;
  set?: Maybe<Array<QuestionWhereUniqueInput>>;
  update?: Maybe<Array<QuestionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<QuestionUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<QuestionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type QuestionUpdateManyWithWhereNestedInput = {
  data: QuestionUpdateManyDataInput;
  where: MutationUpdateOneUserWhereInput;
};

export type QuestionUpdateWithoutPostDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<QuestionMetaUpdateManyWithoutQuestionInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutQuestionsInput>;
};

export type QuestionUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<QuestionMetaUpdateManyWithoutQuestionInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  post?: Maybe<PostUpdateOneRequiredWithoutQuestionsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type QuestionUpdateWithWhereUniqueWithoutPostInput = {
  data: QuestionUpdateWithoutPostDataInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithWhereUniqueWithoutUserInput = {
  data: QuestionUpdateWithoutUserDataInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithWhereUniqueWithoutPostInput = {
  create: QuestionCreateWithoutPostInput;
  update: QuestionUpdateWithoutPostDataInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithWhereUniqueWithoutUserInput = {
  create: QuestionCreateWithoutUserInput;
  update: QuestionUpdateWithoutUserDataInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Review = {
  __typename?: "Review";
  id: Scalars["ID"];
  itemContent: Scalars["String"];
  itemDeleted: Scalars["Boolean"];
  itemMeta?: Maybe<Array<ReviewMeta>>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  post: Post;
  user: User;
};

export type ReviewItemMetaArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type ReviewCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ReviewMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  post: PostCreateOneWithoutPostInput;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type ReviewCreateManyWithoutReviewsInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  create?: Maybe<Array<ReviewCreateWithoutPostInput>>;
};

export type ReviewCreateWithoutPostInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ReviewMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type ReviewCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ReviewMetaCreateManyWithoutItemMetaInput>;
  itemMimeType: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  itemUrlSegment: Scalars["String"];
  post: PostCreateOneWithoutPostInput;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ReviewMeta = {
  __typename?: "ReviewMeta";
  id: Scalars["ID"];
  metaDeleted: Scalars["Boolean"];
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  review: Review;
};

export type ReviewMetaCreateManyWithoutItemMetaInput = {
  connect?: Maybe<Array<ReviewMetaWhereUniqueInput>>;
  create?: Maybe<Array<ReviewMetaCreateWithoutReviewInput>>;
};

export type ReviewMetaCreateWithoutReviewInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ReviewMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ReviewMetaUpdateManyWithoutReviewInput = {
  connect?: Maybe<Array<ReviewMetaWhereUniqueInput>>;
  create?: Maybe<Array<ReviewMetaCreateWithoutReviewInput>>;
  delete?: Maybe<Array<ReviewMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneReviewWhereInput>>;
  disconnect?: Maybe<Array<ReviewMetaWhereUniqueInput>>;
  set?: Maybe<Array<ReviewMetaWhereUniqueInput>>;
  update?: Maybe<Array<ReviewMetaUpdateWithWhereUniqueWithoutReviewInput>>;
  updateMany?: Maybe<Array<ReviewMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ReviewMetaUpsertWithWhereUniqueWithoutReviewInput>>;
};

export type ReviewMetaUpdateManyWithWhereNestedInput = {
  data: ReviewMetaUpdateManyDataInput;
  where: MutationUpdateOneReviewWhereInput;
};

export type ReviewMetaUpdateWithoutReviewDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ReviewMetaUpdateWithWhereUniqueWithoutReviewInput = {
  data: ReviewMetaUpdateWithoutReviewDataInput;
  where: ReviewMetaWhereUniqueInput;
};

export type ReviewMetaUpsertWithWhereUniqueWithoutReviewInput = {
  create: ReviewMetaCreateWithoutReviewInput;
  update: ReviewMetaUpdateWithoutReviewDataInput;
  where: ReviewMetaWhereUniqueInput;
};

export type ReviewMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type ReviewUpdateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ReviewMetaUpdateManyWithoutReviewInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  post?: Maybe<PostUpdateOneRequiredWithoutReviewsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutReviewsInput>;
};

export type ReviewUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ReviewUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  create?: Maybe<Array<ReviewCreateWithoutPostInput>>;
  delete?: Maybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOnePostWhereInput>>;
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>;
  set?: Maybe<Array<ReviewWhereUniqueInput>>;
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueWithoutPostInput>>;
};

export type ReviewUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  create?: Maybe<Array<ReviewCreateWithoutUserInput>>;
  delete?: Maybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneUserWhereInput>>;
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>;
  set?: Maybe<Array<ReviewWhereUniqueInput>>;
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ReviewUpdateManyWithWhereNestedInput = {
  data: ReviewUpdateManyDataInput;
  where: MutationUpdateOneUserWhereInput;
};

export type ReviewUpdateWithoutPostDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ReviewMetaUpdateManyWithoutReviewInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutReviewsInput>;
};

export type ReviewUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ReviewMetaUpdateManyWithoutReviewInput>;
  itemMimeType?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  itemUrlSegment?: Maybe<Scalars["String"]>;
  post?: Maybe<PostUpdateOneRequiredWithoutReviewsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ReviewUpdateWithWhereUniqueWithoutPostInput = {
  data: ReviewUpdateWithoutPostDataInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: ReviewUpdateWithoutUserDataInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutPostInput = {
  create: ReviewCreateWithoutPostInput;
  update: ReviewUpdateWithoutPostDataInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  update: ReviewUpdateWithoutUserDataInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type StringFilter = {
  contains?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  equals?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  not?: Maybe<Scalars["String"]>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  startsWith?: Maybe<Scalars["String"]>;
};

export type Tag = {
  __typename?: "Tag";
  id: Scalars["ID"];
  itemContent: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  posts?: Maybe<Array<Post>>;
};

export type TagPostsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type TagCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type TagCreateManyWithoutTagsInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  create?: Maybe<Array<TagCreateWithoutPostsInput>>;
};

export type TagCreateWithoutPostsInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type TagUpdateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  posts?: Maybe<PostUpdateManyWithoutTagsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type TagUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type TagUpdateManyWithoutPostsInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  create?: Maybe<Array<TagCreateWithoutPostsInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOnePostWhereInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutPostsInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutPostsInput>>;
};

export type TagUpdateManyWithWhereNestedInput = {
  data: TagUpdateManyDataInput;
  where: MutationUpdateOnePostWhereInput;
};

export type TagUpdateWithoutPostsDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type TagUpdateWithWhereUniqueWithoutPostsInput = {
  data: TagUpdateWithoutPostsDataInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithWhereUniqueWithoutPostsInput = {
  create: TagCreateWithoutPostsInput;
  update: TagUpdateWithoutPostsDataInput;
  where: TagWhereUniqueInput;
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Thread = {
  __typename?: "Thread";
  id: Scalars["ID"];
  itemContent: Scalars["String"];
  itemDeleted: Scalars["Boolean"];
  itemMeta?: Maybe<Array<ThreadMeta>>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  user: User;
};

export type ThreadItemMetaArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type ThreadCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ThreadMetaCreateManyWithoutItemMetaInput>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  message?: Maybe<MessageCreateOneWithoutMessageInput>;
  notification?: Maybe<NotificationCreateOneWithoutNotificationInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type ThreadCreateManyWithoutThreadsInput = {
  connect?: Maybe<Array<ThreadWhereUniqueInput>>;
  create?: Maybe<Array<ThreadCreateWithoutUserInput>>;
};

export type ThreadCreateOneWithoutThreadInput = {
  connect?: Maybe<ThreadWhereUniqueInput>;
  create?: Maybe<ThreadCreateWithoutNotificationInput>;
};

export type ThreadCreateWithoutMessageInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ThreadMetaCreateManyWithoutItemMetaInput>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  notification?: Maybe<NotificationCreateOneWithoutNotificationInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type ThreadCreateWithoutNotificationInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ThreadMetaCreateManyWithoutItemMetaInput>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  message?: Maybe<MessageCreateOneWithoutMessageInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type ThreadCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent: Scalars["String"];
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ThreadMetaCreateManyWithoutItemMetaInput>;
  itemName: Scalars["String"];
  itemStatus: Scalars["String"];
  itemType: Scalars["String"];
  message?: Maybe<MessageCreateOneWithoutMessageInput>;
  notification?: Maybe<NotificationCreateOneWithoutNotificationInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ThreadMeta = {
  __typename?: "ThreadMeta";
  id: Scalars["ID"];
  metaDeleted: Scalars["Boolean"];
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  thread: Thread;
};

export type ThreadMetaCreateManyWithoutItemMetaInput = {
  connect?: Maybe<Array<ThreadMetaWhereUniqueInput>>;
  create?: Maybe<Array<ThreadMetaCreateWithoutThreadInput>>;
};

export type ThreadMetaCreateWithoutThreadInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ThreadMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ThreadMetaUpdateManyWithoutThreadInput = {
  connect?: Maybe<Array<ThreadMetaWhereUniqueInput>>;
  create?: Maybe<Array<ThreadMetaCreateWithoutThreadInput>>;
  delete?: Maybe<Array<ThreadMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneThreadWhereInput>>;
  disconnect?: Maybe<Array<ThreadMetaWhereUniqueInput>>;
  set?: Maybe<Array<ThreadMetaWhereUniqueInput>>;
  update?: Maybe<Array<ThreadMetaUpdateWithWhereUniqueWithoutThreadInput>>;
  updateMany?: Maybe<Array<ThreadMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ThreadMetaUpsertWithWhereUniqueWithoutThreadInput>>;
};

export type ThreadMetaUpdateManyWithWhereNestedInput = {
  data: ThreadMetaUpdateManyDataInput;
  where: MutationUpdateOneThreadWhereInput;
};

export type ThreadMetaUpdateWithoutThreadDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ThreadMetaUpdateWithWhereUniqueWithoutThreadInput = {
  data: ThreadMetaUpdateWithoutThreadDataInput;
  where: ThreadMetaWhereUniqueInput;
};

export type ThreadMetaUpsertWithWhereUniqueWithoutThreadInput = {
  create: ThreadMetaCreateWithoutThreadInput;
  update: ThreadMetaUpdateWithoutThreadDataInput;
  where: ThreadMetaWhereUniqueInput;
};

export type ThreadMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type ThreadUpdateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ThreadMetaUpdateManyWithoutThreadInput>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  message?: Maybe<MessageUpdateOneWithoutThreadInput>;
  notification?: Maybe<NotificationUpdateOneWithoutThreadInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutThreadsInput>;
};

export type ThreadUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ThreadUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<ThreadWhereUniqueInput>>;
  create?: Maybe<Array<ThreadCreateWithoutUserInput>>;
  delete?: Maybe<Array<ThreadWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneUserWhereInput>>;
  disconnect?: Maybe<Array<ThreadWhereUniqueInput>>;
  set?: Maybe<Array<ThreadWhereUniqueInput>>;
  update?: Maybe<Array<ThreadUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<ThreadUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ThreadUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ThreadUpdateManyWithWhereNestedInput = {
  data: ThreadUpdateManyDataInput;
  where: MutationUpdateOneUserWhereInput;
};

export type ThreadUpdateOneRequiredWithoutMessageInput = {
  connect?: Maybe<ThreadWhereUniqueInput>;
  create?: Maybe<ThreadCreateWithoutMessageInput>;
  update?: Maybe<ThreadUpdateWithoutMessageDataInput>;
  upsert?: Maybe<ThreadUpsertWithoutMessageInput>;
};

export type ThreadUpdateOneRequiredWithoutNotificationInput = {
  connect?: Maybe<ThreadWhereUniqueInput>;
  create?: Maybe<ThreadCreateWithoutNotificationInput>;
  update?: Maybe<ThreadUpdateWithoutNotificationDataInput>;
  upsert?: Maybe<ThreadUpsertWithoutNotificationInput>;
};

export type ThreadUpdateWithoutMessageDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ThreadMetaUpdateManyWithoutThreadInput>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  notification?: Maybe<NotificationUpdateOneWithoutThreadInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutThreadsInput>;
};

export type ThreadUpdateWithoutNotificationDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ThreadMetaUpdateManyWithoutThreadInput>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  message?: Maybe<MessageUpdateOneWithoutThreadInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UserUpdateOneRequiredWithoutThreadsInput>;
};

export type ThreadUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  itemContent?: Maybe<Scalars["String"]>;
  itemDeleted?: Maybe<Scalars["Boolean"]>;
  itemMeta?: Maybe<ThreadMetaUpdateManyWithoutThreadInput>;
  itemName?: Maybe<Scalars["String"]>;
  itemStatus?: Maybe<Scalars["String"]>;
  itemType?: Maybe<Scalars["String"]>;
  message?: Maybe<MessageUpdateOneWithoutThreadInput>;
  notification?: Maybe<NotificationUpdateOneWithoutThreadInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ThreadUpdateWithWhereUniqueWithoutUserInput = {
  data: ThreadUpdateWithoutUserDataInput;
  where: ThreadWhereUniqueInput;
};

export type ThreadUpsertWithoutMessageInput = {
  create: ThreadCreateWithoutMessageInput;
  update: ThreadUpdateWithoutMessageDataInput;
};

export type ThreadUpsertWithoutNotificationInput = {
  create: ThreadCreateWithoutNotificationInput;
  update: ThreadUpdateWithoutNotificationDataInput;
};

export type ThreadUpsertWithWhereUniqueWithoutUserInput = {
  create: ThreadCreateWithoutUserInput;
  update: ThreadUpdateWithoutUserDataInput;
  where: ThreadWhereUniqueInput;
};

export type ThreadWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type User = {
  __typename?: "User";
  annotations?: Maybe<Array<Annotation>>;
  confirmHash: Scalars["String"];
  favorites?: Maybe<Array<Favorite>>;
  followers?: Maybe<Array<User>>;
  following?: Maybe<Array<User>>;
  forgotHash: Scalars["String"];
  id: Scalars["ID"];
  memberOf?: Maybe<Array<Pod>>;
  memberOfPosts?: Maybe<Array<Post>>;
  notifications?: Maybe<Array<Notification>>;
  pods?: Maybe<Array<Pod>>;
  posts?: Maybe<Array<Post>>;
  privateHash: Scalars["String"];
  publicHash: Scalars["String"];
  questions?: Maybe<Array<Question>>;
  reviews?: Maybe<Array<Review>>;
  threads?: Maybe<Array<Thread>>;
  userConfirmed: Scalars["Int"];
  userDeleted: Scalars["Boolean"];
  userEmail: Scalars["String"];
  userMeta?: Maybe<Array<UserMeta>>;
  userType: Scalars["Int"];
};

export type UserAnnotationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type UserFavoritesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type UserFollowersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type UserFollowingArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type UserMemberOfArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type UserMemberOfPostsArgs = {
  privateHash?: Maybe<Scalars["String"]>;
};

export type UserNotificationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type UserPodsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type UserPostsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type UserQuestionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type UserReviewsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type UserThreadsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type UserUserMetaArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type UserCreateInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  confirmHash: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  followers?: Maybe<UserCreateManyWithoutFollowersInput>;
  following?: Maybe<UserCreateManyWithoutFollowingInput>;
  forgotHash: Scalars["String"];
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodCreateManyWithoutMemberOfInput>;
  message?: Maybe<MessageCreateOneWithoutMessageInput>;
  notifications?: Maybe<NotificationCreateManyWithoutNotificationsInput>;
  pods?: Maybe<PodCreateManyWithoutPodsInput>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  privateHash: Scalars["String"];
  publicHash: Scalars["String"];
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  threads?: Maybe<ThreadCreateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed: Scalars["Int"];
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail: Scalars["String"];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserMetaInput>;
  userPassword: Scalars["String"];
  userType: Scalars["Int"];
};

export type UserCreateManyWithoutFollowersInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
};

export type UserCreateManyWithoutFollowingInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowersInput>>;
};

export type UserCreateManyWithoutMembersInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutMemberOfInput>>;
};

export type UserCreateOneWithoutUserInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutPodsInput>;
};

export type UserCreateWithoutAnnotationsInput = {
  confirmHash: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  followers?: Maybe<UserCreateManyWithoutFollowersInput>;
  following?: Maybe<UserCreateManyWithoutFollowingInput>;
  forgotHash: Scalars["String"];
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodCreateManyWithoutMemberOfInput>;
  message?: Maybe<MessageCreateOneWithoutMessageInput>;
  notifications?: Maybe<NotificationCreateManyWithoutNotificationsInput>;
  pods?: Maybe<PodCreateManyWithoutPodsInput>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  privateHash: Scalars["String"];
  publicHash: Scalars["String"];
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  threads?: Maybe<ThreadCreateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed: Scalars["Int"];
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail: Scalars["String"];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserMetaInput>;
  userPassword: Scalars["String"];
  userType: Scalars["Int"];
};

export type UserCreateWithoutFavoritesInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  confirmHash: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  followers?: Maybe<UserCreateManyWithoutFollowersInput>;
  following?: Maybe<UserCreateManyWithoutFollowingInput>;
  forgotHash: Scalars["String"];
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodCreateManyWithoutMemberOfInput>;
  message?: Maybe<MessageCreateOneWithoutMessageInput>;
  notifications?: Maybe<NotificationCreateManyWithoutNotificationsInput>;
  pods?: Maybe<PodCreateManyWithoutPodsInput>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  privateHash: Scalars["String"];
  publicHash: Scalars["String"];
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  threads?: Maybe<ThreadCreateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed: Scalars["Int"];
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail: Scalars["String"];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserMetaInput>;
  userPassword: Scalars["String"];
  userType: Scalars["Int"];
};

export type UserCreateWithoutFollowersInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  confirmHash: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  following?: Maybe<UserCreateManyWithoutFollowingInput>;
  forgotHash: Scalars["String"];
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodCreateManyWithoutMemberOfInput>;
  message?: Maybe<MessageCreateOneWithoutMessageInput>;
  notifications?: Maybe<NotificationCreateManyWithoutNotificationsInput>;
  pods?: Maybe<PodCreateManyWithoutPodsInput>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  privateHash: Scalars["String"];
  publicHash: Scalars["String"];
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  threads?: Maybe<ThreadCreateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed: Scalars["Int"];
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail: Scalars["String"];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserMetaInput>;
  userPassword: Scalars["String"];
  userType: Scalars["Int"];
};

export type UserCreateWithoutFollowingInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  confirmHash: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  followers?: Maybe<UserCreateManyWithoutFollowersInput>;
  forgotHash: Scalars["String"];
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodCreateManyWithoutMemberOfInput>;
  message?: Maybe<MessageCreateOneWithoutMessageInput>;
  notifications?: Maybe<NotificationCreateManyWithoutNotificationsInput>;
  pods?: Maybe<PodCreateManyWithoutPodsInput>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  privateHash: Scalars["String"];
  publicHash: Scalars["String"];
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  threads?: Maybe<ThreadCreateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed: Scalars["Int"];
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail: Scalars["String"];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserMetaInput>;
  userPassword: Scalars["String"];
  userType: Scalars["Int"];
};

export type UserCreateWithoutMemberOfInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  confirmHash: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  followers?: Maybe<UserCreateManyWithoutFollowersInput>;
  following?: Maybe<UserCreateManyWithoutFollowingInput>;
  forgotHash: Scalars["String"];
  id?: Maybe<Scalars["ID"]>;
  message?: Maybe<MessageCreateOneWithoutMessageInput>;
  notifications?: Maybe<NotificationCreateManyWithoutNotificationsInput>;
  pods?: Maybe<PodCreateManyWithoutPodsInput>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  privateHash: Scalars["String"];
  publicHash: Scalars["String"];
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  threads?: Maybe<ThreadCreateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed: Scalars["Int"];
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail: Scalars["String"];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserMetaInput>;
  userPassword: Scalars["String"];
  userType: Scalars["Int"];
};

export type UserCreateWithoutMessageInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  confirmHash: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  followers?: Maybe<UserCreateManyWithoutFollowersInput>;
  following?: Maybe<UserCreateManyWithoutFollowingInput>;
  forgotHash: Scalars["String"];
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodCreateManyWithoutMemberOfInput>;
  notifications?: Maybe<NotificationCreateManyWithoutNotificationsInput>;
  pods?: Maybe<PodCreateManyWithoutPodsInput>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  privateHash: Scalars["String"];
  publicHash: Scalars["String"];
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  threads?: Maybe<ThreadCreateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed: Scalars["Int"];
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail: Scalars["String"];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserMetaInput>;
  userPassword: Scalars["String"];
  userType: Scalars["Int"];
};

export type UserCreateWithoutNotificationsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  confirmHash: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  followers?: Maybe<UserCreateManyWithoutFollowersInput>;
  following?: Maybe<UserCreateManyWithoutFollowingInput>;
  forgotHash: Scalars["String"];
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodCreateManyWithoutMemberOfInput>;
  message?: Maybe<MessageCreateOneWithoutMessageInput>;
  pods?: Maybe<PodCreateManyWithoutPodsInput>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  privateHash: Scalars["String"];
  publicHash: Scalars["String"];
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  threads?: Maybe<ThreadCreateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed: Scalars["Int"];
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail: Scalars["String"];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserMetaInput>;
  userPassword: Scalars["String"];
  userType: Scalars["Int"];
};

export type UserCreateWithoutPodsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  confirmHash: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  followers?: Maybe<UserCreateManyWithoutFollowersInput>;
  following?: Maybe<UserCreateManyWithoutFollowingInput>;
  forgotHash: Scalars["String"];
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodCreateManyWithoutMemberOfInput>;
  message?: Maybe<MessageCreateOneWithoutMessageInput>;
  notifications?: Maybe<NotificationCreateManyWithoutNotificationsInput>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  privateHash: Scalars["String"];
  publicHash: Scalars["String"];
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  threads?: Maybe<ThreadCreateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed: Scalars["Int"];
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail: Scalars["String"];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserMetaInput>;
  userPassword: Scalars["String"];
  userType: Scalars["Int"];
};

export type UserCreateWithoutPostsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  confirmHash: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  followers?: Maybe<UserCreateManyWithoutFollowersInput>;
  following?: Maybe<UserCreateManyWithoutFollowingInput>;
  forgotHash: Scalars["String"];
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodCreateManyWithoutMemberOfInput>;
  message?: Maybe<MessageCreateOneWithoutMessageInput>;
  notifications?: Maybe<NotificationCreateManyWithoutNotificationsInput>;
  pods?: Maybe<PodCreateManyWithoutPodsInput>;
  privateHash: Scalars["String"];
  publicHash: Scalars["String"];
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  threads?: Maybe<ThreadCreateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed: Scalars["Int"];
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail: Scalars["String"];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserMetaInput>;
  userPassword: Scalars["String"];
  userType: Scalars["Int"];
};

export type UserCreateWithoutQuestionsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  confirmHash: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  followers?: Maybe<UserCreateManyWithoutFollowersInput>;
  following?: Maybe<UserCreateManyWithoutFollowingInput>;
  forgotHash: Scalars["String"];
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodCreateManyWithoutMemberOfInput>;
  message?: Maybe<MessageCreateOneWithoutMessageInput>;
  notifications?: Maybe<NotificationCreateManyWithoutNotificationsInput>;
  pods?: Maybe<PodCreateManyWithoutPodsInput>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  privateHash: Scalars["String"];
  publicHash: Scalars["String"];
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  threads?: Maybe<ThreadCreateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed: Scalars["Int"];
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail: Scalars["String"];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserMetaInput>;
  userPassword: Scalars["String"];
  userType: Scalars["Int"];
};

export type UserCreateWithoutReviewsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  confirmHash: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  followers?: Maybe<UserCreateManyWithoutFollowersInput>;
  following?: Maybe<UserCreateManyWithoutFollowingInput>;
  forgotHash: Scalars["String"];
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodCreateManyWithoutMemberOfInput>;
  message?: Maybe<MessageCreateOneWithoutMessageInput>;
  notifications?: Maybe<NotificationCreateManyWithoutNotificationsInput>;
  pods?: Maybe<PodCreateManyWithoutPodsInput>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  privateHash: Scalars["String"];
  publicHash: Scalars["String"];
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  threads?: Maybe<ThreadCreateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed: Scalars["Int"];
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail: Scalars["String"];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserMetaInput>;
  userPassword: Scalars["String"];
  userType: Scalars["Int"];
};

export type UserCreateWithoutThreadsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  confirmHash: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  followers?: Maybe<UserCreateManyWithoutFollowersInput>;
  following?: Maybe<UserCreateManyWithoutFollowingInput>;
  forgotHash: Scalars["String"];
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodCreateManyWithoutMemberOfInput>;
  message?: Maybe<MessageCreateOneWithoutMessageInput>;
  notifications?: Maybe<NotificationCreateManyWithoutNotificationsInput>;
  pods?: Maybe<PodCreateManyWithoutPodsInput>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  privateHash: Scalars["String"];
  publicHash: Scalars["String"];
  questions?: Maybe<QuestionCreateManyWithoutQuestionsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutReviewsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed: Scalars["Int"];
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail: Scalars["String"];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserMetaInput>;
  userPassword: Scalars["String"];
  userType: Scalars["Int"];
};

export type UserMeta = {
  __typename?: "UserMeta";
  id: Scalars["ID"];
  metaDeleted: Scalars["Boolean"];
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  user: User;
};

export type UserMetaCreateManyWithoutUserMetaInput = {
  connect?: Maybe<Array<UserMetaWhereUniqueInput>>;
  create?: Maybe<Array<UserMetaCreateWithoutUserInput>>;
};

export type UserMetaCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName: Scalars["String"];
  metaType: Scalars["String"];
  metaValue: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UserMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UserMetaUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<UserMetaWhereUniqueInput>>;
  create?: Maybe<Array<UserMetaCreateWithoutUserInput>>;
  delete?: Maybe<Array<UserMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneUserWhereInput>>;
  disconnect?: Maybe<Array<UserMetaWhereUniqueInput>>;
  set?: Maybe<Array<UserMetaWhereUniqueInput>>;
  update?: Maybe<Array<UserMetaUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<UserMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UserMetaUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserMetaUpdateManyWithWhereNestedInput = {
  data: UserMetaUpdateManyDataInput;
  where: MutationUpdateOneUserWhereInput;
};

export type UserMetaUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  metaDeleted?: Maybe<Scalars["Boolean"]>;
  metaName?: Maybe<Scalars["String"]>;
  metaType?: Maybe<Scalars["String"]>;
  metaValue?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UserMetaUpdateWithWhereUniqueWithoutUserInput = {
  data: UserMetaUpdateWithoutUserDataInput;
  where: UserMetaWhereUniqueInput;
};

export type UserMetaUpsertWithWhereUniqueWithoutUserInput = {
  create: UserMetaCreateWithoutUserInput;
  update: UserMetaUpdateWithoutUserDataInput;
  where: UserMetaWhereUniqueInput;
};

export type UserMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type UserUpdateInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodUpdateManyWithoutMembersInput>;
  message?: Maybe<MessageUpdateOneWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  pods?: Maybe<PodUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars["String"]>;
  userType?: Maybe<Scalars["Int"]>;
};

export type UserUpdateManyDataInput = {
  confirmHash?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userPassword?: Maybe<Scalars["String"]>;
  userType?: Maybe<Scalars["Int"]>;
};

export type UserUpdateManyWithoutFollowersInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowersInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneUserWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowersInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowersInput>>;
};

export type UserUpdateManyWithoutFollowingInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOneUserWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowingInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowingInput>>;
};

export type UserUpdateManyWithoutMemberOfInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutMemberOfInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MutationUpdateOnePodWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutMemberOfInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutMemberOfInput>>;
};

export type UserUpdateManyWithWhereNestedInput = {
  data: UserUpdateManyDataInput;
  where: MutationUpdateOneUserWhereInput;
};

export type UserUpdateOneRequiredWithoutAnnotationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutAnnotationsInput>;
  update?: Maybe<UserUpdateWithoutAnnotationsDataInput>;
  upsert?: Maybe<UserUpsertWithoutAnnotationsInput>;
};

export type UserUpdateOneRequiredWithoutFavoritesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutFavoritesInput>;
  update?: Maybe<UserUpdateWithoutFavoritesDataInput>;
  upsert?: Maybe<UserUpsertWithoutFavoritesInput>;
};

export type UserUpdateOneRequiredWithoutMessageInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutMessageInput>;
  update?: Maybe<UserUpdateWithoutMessageDataInput>;
  upsert?: Maybe<UserUpsertWithoutMessageInput>;
};

export type UserUpdateOneRequiredWithoutNotificationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutNotificationsInput>;
  update?: Maybe<UserUpdateWithoutNotificationsDataInput>;
  upsert?: Maybe<UserUpsertWithoutNotificationsInput>;
};

export type UserUpdateOneRequiredWithoutPodsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutPodsInput>;
  update?: Maybe<UserUpdateWithoutPodsDataInput>;
  upsert?: Maybe<UserUpsertWithoutPodsInput>;
};

export type UserUpdateOneRequiredWithoutPostsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutPostsInput>;
  update?: Maybe<UserUpdateWithoutPostsDataInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateOneRequiredWithoutQuestionsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutQuestionsInput>;
  update?: Maybe<UserUpdateWithoutQuestionsDataInput>;
  upsert?: Maybe<UserUpsertWithoutQuestionsInput>;
};

export type UserUpdateOneRequiredWithoutReviewsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutReviewsInput>;
  update?: Maybe<UserUpdateWithoutReviewsDataInput>;
  upsert?: Maybe<UserUpsertWithoutReviewsInput>;
};

export type UserUpdateOneRequiredWithoutThreadsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutThreadsInput>;
  update?: Maybe<UserUpdateWithoutThreadsDataInput>;
  upsert?: Maybe<UserUpsertWithoutThreadsInput>;
};

export type UserUpdateWithoutAnnotationsDataInput = {
  confirmHash?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodUpdateManyWithoutMembersInput>;
  message?: Maybe<MessageUpdateOneWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  pods?: Maybe<PodUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars["String"]>;
  userType?: Maybe<Scalars["Int"]>;
};

export type UserUpdateWithoutFavoritesDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodUpdateManyWithoutMembersInput>;
  message?: Maybe<MessageUpdateOneWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  pods?: Maybe<PodUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars["String"]>;
  userType?: Maybe<Scalars["Int"]>;
};

export type UserUpdateWithoutFollowersDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodUpdateManyWithoutMembersInput>;
  message?: Maybe<MessageUpdateOneWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  pods?: Maybe<PodUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars["String"]>;
  userType?: Maybe<Scalars["Int"]>;
};

export type UserUpdateWithoutFollowingDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodUpdateManyWithoutMembersInput>;
  message?: Maybe<MessageUpdateOneWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  pods?: Maybe<PodUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars["String"]>;
  userType?: Maybe<Scalars["Int"]>;
};

export type UserUpdateWithoutMemberOfDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  message?: Maybe<MessageUpdateOneWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  pods?: Maybe<PodUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars["String"]>;
  userType?: Maybe<Scalars["Int"]>;
};

export type UserUpdateWithoutMessageDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodUpdateManyWithoutMembersInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  pods?: Maybe<PodUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars["String"]>;
  userType?: Maybe<Scalars["Int"]>;
};

export type UserUpdateWithoutNotificationsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodUpdateManyWithoutMembersInput>;
  message?: Maybe<MessageUpdateOneWithoutUserInput>;
  pods?: Maybe<PodUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars["String"]>;
  userType?: Maybe<Scalars["Int"]>;
};

export type UserUpdateWithoutPodsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodUpdateManyWithoutMembersInput>;
  message?: Maybe<MessageUpdateOneWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars["String"]>;
  userType?: Maybe<Scalars["Int"]>;
};

export type UserUpdateWithoutPostsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodUpdateManyWithoutMembersInput>;
  message?: Maybe<MessageUpdateOneWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  pods?: Maybe<PodUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars["String"]>;
  userType?: Maybe<Scalars["Int"]>;
};

export type UserUpdateWithoutQuestionsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodUpdateManyWithoutMembersInput>;
  message?: Maybe<MessageUpdateOneWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  pods?: Maybe<PodUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars["String"]>;
  userType?: Maybe<Scalars["Int"]>;
};

export type UserUpdateWithoutReviewsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodUpdateManyWithoutMembersInput>;
  message?: Maybe<MessageUpdateOneWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  pods?: Maybe<PodUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars["String"]>;
  userType?: Maybe<Scalars["Int"]>;
};

export type UserUpdateWithoutThreadsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  memberOf?: Maybe<PodUpdateManyWithoutMembersInput>;
  message?: Maybe<MessageUpdateOneWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  pods?: Maybe<PodUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userConfirmed?: Maybe<Scalars["Int"]>;
  userDeleted?: Maybe<Scalars["Boolean"]>;
  userEmail?: Maybe<Scalars["String"]>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars["String"]>;
  userType?: Maybe<Scalars["Int"]>;
};

export type UserUpdateWithWhereUniqueWithoutFollowersInput = {
  data: UserUpdateWithoutFollowersDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
  data: UserUpdateWithoutFollowingDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutMemberOfInput = {
  data: UserUpdateWithoutMemberOfDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutAnnotationsInput = {
  create: UserCreateWithoutAnnotationsInput;
  update: UserUpdateWithoutAnnotationsDataInput;
};

export type UserUpsertWithoutFavoritesInput = {
  create: UserCreateWithoutFavoritesInput;
  update: UserUpdateWithoutFavoritesDataInput;
};

export type UserUpsertWithoutMessageInput = {
  create: UserCreateWithoutMessageInput;
  update: UserUpdateWithoutMessageDataInput;
};

export type UserUpsertWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  update: UserUpdateWithoutNotificationsDataInput;
};

export type UserUpsertWithoutPodsInput = {
  create: UserCreateWithoutPodsInput;
  update: UserUpdateWithoutPodsDataInput;
};

export type UserUpsertWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  update: UserUpdateWithoutPostsDataInput;
};

export type UserUpsertWithoutQuestionsInput = {
  create: UserCreateWithoutQuestionsInput;
  update: UserUpdateWithoutQuestionsDataInput;
};

export type UserUpsertWithoutReviewsInput = {
  create: UserCreateWithoutReviewsInput;
  update: UserUpdateWithoutReviewsDataInput;
};

export type UserUpsertWithoutThreadsInput = {
  create: UserCreateWithoutThreadsInput;
  update: UserUpdateWithoutThreadsDataInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowersInput = {
  create: UserCreateWithoutFollowersInput;
  update: UserUpdateWithoutFollowersDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
  create: UserCreateWithoutFollowingInput;
  update: UserUpdateWithoutFollowingDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutMemberOfInput = {
  create: UserCreateWithoutMemberOfInput;
  update: UserUpdateWithoutMemberOfDataInput;
  where: UserWhereUniqueInput;
};

export type UserWhereUniqueInput = {
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  userEmail?: Maybe<Scalars["String"]>;
};
export type JoinPodMutationVariables = {
  userId?: Maybe<Scalars["ID"]>;
  podId?: Maybe<Scalars["ID"]>;
};

export type JoinPodMutation = { __typename?: "Mutation" } & {
  updateOneUser: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
};

export type LeavePodMutationVariables = {
  userId?: Maybe<Scalars["ID"]>;
  podId?: Maybe<Scalars["ID"]>;
};

export type LeavePodMutation = { __typename?: "Mutation" } & {
  updateOneUser: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
};

export type AllCategoriesQueryVariables = {};

export type AllCategoriesQuery = { __typename?: "Query" } & {
  findManyCategory: Maybe<
    Array<{ __typename?: "Category" } & Pick<Category, "id" | "itemName">>
  >;
};

export type CategoriesPodsPostsQueryVariables = {};

export type CategoriesPodsPostsQuery = { __typename?: "Query" } & {
  findManyCategory: Maybe<
    Array<
      { __typename?: "Category" } & Pick<Category, "id" | "itemName"> & {
          pods: Maybe<
            Array<
              { __typename?: "Pod" } & Pick<Pod, "id" | "itemName"> & {
                  itemMeta: Maybe<
                    Array<
                      { __typename?: "PodMeta" } & Pick<
                        PodMeta,
                        "id" | "metaName" | "metaValue"
                      >
                    >
                  >;
                  members: Maybe<
                    Array<
                      { __typename?: "User" } & Pick<User, "id" | "userEmail">
                    >
                  >;
                  posts: Maybe<
                    Array<
                      { __typename?: "Post" } & Pick<
                        Post,
                        "id" | "itemName"
                      > & {
                          itemMeta: Maybe<
                            Array<
                              { __typename?: "PostMeta" } & Pick<
                                PostMeta,
                                "id" | "metaName" | "metaValue"
                              >
                            >
                          >;
                        }
                    >
                  >;
                }
            >
          >;
        }
    >
  >;
};

export type AllPodsQueryVariables = {};

export type AllPodsQuery = { __typename?: "Query" } & {
  findManyPod: Maybe<
    Array<
      { __typename?: "Pod" } & Pick<Pod, "id" | "itemName" | "itemContent"> & {
          itemMeta: Maybe<
            Array<
              { __typename?: "PodMeta" } & Pick<
                PodMeta,
                "metaName" | "metaValue"
              >
            >
          >;
        }
    >
  >;
};

export type AllTagsQueryVariables = {};

export type AllTagsQuery = { __typename?: "Query" } & {
  findManyTag: Maybe<
    Array<{ __typename?: "Tag" } & Pick<Tag, "id" | "itemName">>
  >;
};

export type UserFragmentFragment = { __typename?: "User" } & Pick<
  User,
  "id" | "userEmail" | "userType"
>;

export type FindUserQueryVariables = {
  id?: Maybe<Scalars["ID"]>;
};

export type FindUserQuery = { __typename?: "Query" } & {
  findOneUser: Maybe<{ __typename?: "User" } & UserFragmentFragment>;
};

export type PrivateUserQueryVariables = {
  privateHash?: Maybe<Scalars["String"]>;
};

export type PrivateUserQuery = { __typename?: "Query" } & {
  findOneUser: Maybe<{ __typename?: "User" } & UserFragmentFragment>;
};

export type UserJoinedPodsQueryVariables = {
  privateHash?: Maybe<Scalars["String"]>;
};

export type UserJoinedPodsQuery = { __typename?: "Query" } & {
  findOneUser: Maybe<
    { __typename?: "User" } & {
      memberOf: Maybe<
        Array<
          { __typename?: "Pod" } & Pick<Pod, "id" | "itemName"> & {
              itemMeta: Maybe<
                Array<
                  { __typename?: "PodMeta" } & Pick<
                    PodMeta,
                    "id" | "metaName" | "metaValue"
                  >
                >
              >;
              members: Maybe<
                Array<{ __typename?: "User" } & Pick<User, "id" | "userEmail">>
              >;
              posts: Maybe<
                Array<
                  { __typename?: "Post" } & Pick<Post, "id" | "itemName"> & {
                      itemMeta: Maybe<
                        Array<
                          { __typename?: "PostMeta" } & Pick<
                            PostMeta,
                            "id" | "metaName" | "metaValue"
                          >
                        >
                      >;
                    }
                >
              >;
            }
        >
      >;
    } & UserFragmentFragment
  >;
};

export type JoinedPodsPostsQueryVariables = {
  privateHash?: Maybe<Scalars["String"]>;
};

export type JoinedPodsPostsQuery = { __typename?: "Query" } & {
  findOneUser: Maybe<
    { __typename?: "User" } & {
      memberOfPosts: Maybe<
        Array<
          { __typename?: "Post" } & Pick<Post, "id" | "itemName"> & {
              itemMeta: Maybe<
                Array<
                  { __typename?: "PostMeta" } & Pick<
                    PostMeta,
                    "id" | "metaName" | "metaValue"
                  >
                >
              >;
            }
        >
      >;
    }
  >;
};
