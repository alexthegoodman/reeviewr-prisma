export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Annotation = {
   __typename?: 'Annotation';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  itemContent: Scalars['String'];
  itemDeleted: Scalars['Boolean'];
  itemMeta: Array<AnnotationMeta>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  post: Post;
  updatedAt: Scalars['DateTime'];
  user: User;
};


export type AnnotationItemMetaArgs = {
  after?: Maybe<AnnotationMetaWhereUniqueInput>;
  before?: Maybe<AnnotationMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type AnnotationCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<AnnotationMetaCreateManyWithoutAnnotationInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  post: PostCreateOneWithoutAnnotationsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutAnnotationsInput;
};

export type AnnotationCreateManyWithoutPostInput = {
  connect?: Maybe<Array<AnnotationWhereUniqueInput>>;
  create?: Maybe<Array<AnnotationCreateWithoutPostInput>>;
};

export type AnnotationCreateManyWithoutUserInput = {
  connect?: Maybe<Array<AnnotationWhereUniqueInput>>;
  create?: Maybe<Array<AnnotationCreateWithoutUserInput>>;
};

export type AnnotationCreateWithoutPostInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<AnnotationMetaCreateManyWithoutAnnotationInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutAnnotationsInput;
};

export type AnnotationCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<AnnotationMetaCreateManyWithoutAnnotationInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  post: PostCreateOneWithoutAnnotationsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AnnotationFilter = {
  every?: Maybe<AnnotationWhereInput>;
  none?: Maybe<AnnotationWhereInput>;
  some?: Maybe<AnnotationWhereInput>;
};

export type AnnotationMeta = {
   __typename?: 'AnnotationMeta';
  annotation: Annotation;
  id: Scalars['String'];
  metaDeleted: Scalars['Boolean'];
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
};

export type AnnotationMetaCreateManyWithoutAnnotationInput = {
  connect?: Maybe<Array<AnnotationMetaWhereUniqueInput>>;
  create?: Maybe<Array<AnnotationMetaCreateWithoutAnnotationInput>>;
};

export type AnnotationMetaCreateWithoutAnnotationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AnnotationMetaFilter = {
  every?: Maybe<AnnotationMetaWhereInput>;
  none?: Maybe<AnnotationMetaWhereInput>;
  some?: Maybe<AnnotationMetaWhereInput>;
};

export type AnnotationMetaOrderByInput = {
  annotationId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  metaDeleted?: Maybe<OrderByArg>;
  metaName?: Maybe<OrderByArg>;
  metaType?: Maybe<OrderByArg>;
  metaValue?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type AnnotationMetaScalarWhereInput = {
  AND?: Maybe<Array<AnnotationMetaScalarWhereInput>>;
  annotationId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<AnnotationMetaScalarWhereInput>>;
  OR?: Maybe<Array<AnnotationMetaScalarWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type AnnotationMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AnnotationMetaUpdateManyWithoutAnnotationInput = {
  connect?: Maybe<Array<AnnotationMetaWhereUniqueInput>>;
  create?: Maybe<Array<AnnotationMetaCreateWithoutAnnotationInput>>;
  delete?: Maybe<Array<AnnotationMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AnnotationMetaScalarWhereInput>>;
  disconnect?: Maybe<Array<AnnotationMetaWhereUniqueInput>>;
  set?: Maybe<Array<AnnotationMetaWhereUniqueInput>>;
  update?: Maybe<Array<AnnotationMetaUpdateWithWhereUniqueWithoutAnnotationInput>>;
  updateMany?: Maybe<Array<AnnotationMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<AnnotationMetaUpsertWithWhereUniqueWithoutAnnotationInput>>;
};

export type AnnotationMetaUpdateManyWithWhereNestedInput = {
  data: AnnotationMetaUpdateManyDataInput;
  where: AnnotationMetaScalarWhereInput;
};

export type AnnotationMetaUpdateWithoutAnnotationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type AnnotationMetaWhereInput = {
  AND?: Maybe<Array<AnnotationMetaWhereInput>>;
  annotation?: Maybe<AnnotationWhereInput>;
  annotationId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<AnnotationMetaWhereInput>>;
  OR?: Maybe<Array<AnnotationMetaWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type AnnotationMetaWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AnnotationOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  itemContent?: Maybe<OrderByArg>;
  itemDeleted?: Maybe<OrderByArg>;
  itemMimeType?: Maybe<OrderByArg>;
  itemName?: Maybe<OrderByArg>;
  itemStatus?: Maybe<OrderByArg>;
  itemType?: Maybe<OrderByArg>;
  itemUrlSegment?: Maybe<OrderByArg>;
  postId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
};

export type AnnotationScalarWhereInput = {
  AND?: Maybe<Array<AnnotationScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<AnnotationMetaFilter>;
  itemMimeType?: Maybe<StringFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  itemUrlSegment?: Maybe<StringFilter>;
  NOT?: Maybe<Array<AnnotationScalarWhereInput>>;
  OR?: Maybe<Array<AnnotationScalarWhereInput>>;
  postId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type AnnotationUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<AnnotationMetaUpdateManyWithoutAnnotationInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneRequiredWithoutAnnotationsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutAnnotationsInput>;
};

export type AnnotationUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AnnotationUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<AnnotationWhereUniqueInput>>;
  create?: Maybe<Array<AnnotationCreateWithoutPostInput>>;
  delete?: Maybe<Array<AnnotationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AnnotationScalarWhereInput>>;
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
  deleteMany?: Maybe<Array<AnnotationScalarWhereInput>>;
  disconnect?: Maybe<Array<AnnotationWhereUniqueInput>>;
  set?: Maybe<Array<AnnotationWhereUniqueInput>>;
  update?: Maybe<Array<AnnotationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<AnnotationUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<AnnotationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AnnotationUpdateManyWithWhereNestedInput = {
  data: AnnotationUpdateManyDataInput;
  where: AnnotationScalarWhereInput;
};

export type AnnotationUpdateWithoutPostDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<AnnotationMetaUpdateManyWithoutAnnotationInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutAnnotationsInput>;
};

export type AnnotationUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<AnnotationMetaUpdateManyWithoutAnnotationInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneRequiredWithoutAnnotationsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type AnnotationWhereInput = {
  AND?: Maybe<Array<AnnotationWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<AnnotationMetaFilter>;
  itemMimeType?: Maybe<StringFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  itemUrlSegment?: Maybe<StringFilter>;
  NOT?: Maybe<Array<AnnotationWhereInput>>;
  OR?: Maybe<Array<AnnotationWhereInput>>;
  post?: Maybe<PostWhereInput>;
  postId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type AnnotationWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
};

export type Category = {
   __typename?: 'Category';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  itemContent: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  spaces: Array<Space>;
  updatedAt: Scalars['DateTime'];
};


export type CategorySpacesArgs = {
  after?: Maybe<SpaceWhereUniqueInput>;
  before?: Maybe<SpaceWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type CategoryCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  spaces?: Maybe<SpaceCreateManyWithoutCategoriesInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryCreateManyWithoutSpacesInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  create?: Maybe<Array<CategoryCreateWithoutSpacesInput>>;
};

export type CategoryCreateWithoutSpacesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryFilter = {
  every?: Maybe<CategoryWhereInput>;
  none?: Maybe<CategoryWhereInput>;
  some?: Maybe<CategoryWhereInput>;
};

export type CategoryOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  itemContent?: Maybe<OrderByArg>;
  itemName?: Maybe<OrderByArg>;
  itemStatus?: Maybe<OrderByArg>;
  itemType?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type CategoryScalarWhereInput = {
  AND?: Maybe<Array<CategoryScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CategoryScalarWhereInput>>;
  OR?: Maybe<Array<CategoryScalarWhereInput>>;
  spaces?: Maybe<SpaceFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CategoryUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  spaces?: Maybe<SpaceUpdateManyWithoutCategoriesInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryUpdateManyWithoutSpacesInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  create?: Maybe<Array<CategoryCreateWithoutSpacesInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutSpacesInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutSpacesInput>>;
};

export type CategoryUpdateManyWithWhereNestedInput = {
  data: CategoryUpdateManyDataInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateWithoutSpacesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryUpdateWithWhereUniqueWithoutSpacesInput = {
  data: CategoryUpdateWithoutSpacesDataInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithWhereUniqueWithoutSpacesInput = {
  create: CategoryCreateWithoutSpacesInput;
  update: CategoryUpdateWithoutSpacesDataInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<CategoryWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  spaces?: Maybe<SpaceFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type Favorite = {
   __typename?: 'Favorite';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  itemContent: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  post: Post;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type FavoriteCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  post: PostCreateOneWithoutFavoritesInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutFavoritesInput;
};

export type FavoriteCreateManyWithoutPostInput = {
  connect?: Maybe<Array<FavoriteWhereUniqueInput>>;
  create?: Maybe<Array<FavoriteCreateWithoutPostInput>>;
};

export type FavoriteCreateManyWithoutUserInput = {
  connect?: Maybe<Array<FavoriteWhereUniqueInput>>;
  create?: Maybe<Array<FavoriteCreateWithoutUserInput>>;
};

export type FavoriteCreateWithoutPostInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutFavoritesInput;
};

export type FavoriteCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  post: PostCreateOneWithoutFavoritesInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FavoriteFilter = {
  every?: Maybe<FavoriteWhereInput>;
  none?: Maybe<FavoriteWhereInput>;
  some?: Maybe<FavoriteWhereInput>;
};

export type FavoriteOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  itemContent?: Maybe<OrderByArg>;
  itemName?: Maybe<OrderByArg>;
  itemStatus?: Maybe<OrderByArg>;
  itemType?: Maybe<OrderByArg>;
  postId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
};

export type FavoriteScalarWhereInput = {
  AND?: Maybe<Array<FavoriteScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  NOT?: Maybe<Array<FavoriteScalarWhereInput>>;
  OR?: Maybe<Array<FavoriteScalarWhereInput>>;
  postId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type FavoriteUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneRequiredWithoutFavoritesInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutFavoritesInput>;
};

export type FavoriteUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FavoriteUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<FavoriteWhereUniqueInput>>;
  create?: Maybe<Array<FavoriteCreateWithoutPostInput>>;
  delete?: Maybe<Array<FavoriteWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FavoriteScalarWhereInput>>;
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
  deleteMany?: Maybe<Array<FavoriteScalarWhereInput>>;
  disconnect?: Maybe<Array<FavoriteWhereUniqueInput>>;
  set?: Maybe<Array<FavoriteWhereUniqueInput>>;
  update?: Maybe<Array<FavoriteUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<FavoriteUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<FavoriteUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FavoriteUpdateManyWithWhereNestedInput = {
  data: FavoriteUpdateManyDataInput;
  where: FavoriteScalarWhereInput;
};

export type FavoriteUpdateWithoutPostDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutFavoritesInput>;
};

export type FavoriteUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneRequiredWithoutFavoritesInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type FavoriteWhereInput = {
  AND?: Maybe<Array<FavoriteWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  NOT?: Maybe<Array<FavoriteWhereInput>>;
  OR?: Maybe<Array<FavoriteWhereInput>>;
  post?: Maybe<PostWhereInput>;
  postId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type FavoriteWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Message = {
   __typename?: 'Message';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  itemContent: Scalars['String'];
  itemDeleted: Scalars['Boolean'];
  itemMeta: Array<MessageMeta>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  thread: Thread;
  updatedAt: Scalars['DateTime'];
  user: User;
};


export type MessageItemMetaArgs = {
  after?: Maybe<MessageMetaWhereUniqueInput>;
  before?: Maybe<MessageMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type MessageCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<MessageMetaCreateManyWithoutMessageInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  thread: ThreadCreateOneWithoutMessagesInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutMessageInput;
};

export type MessageCreateManyWithoutThreadInput = {
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
  create?: Maybe<Array<MessageCreateWithoutThreadInput>>;
};

export type MessageCreateManyWithoutUserInput = {
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
  create?: Maybe<Array<MessageCreateWithoutUserInput>>;
};

export type MessageCreateWithoutThreadInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<MessageMetaCreateManyWithoutMessageInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutMessageInput;
};

export type MessageCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<MessageMetaCreateManyWithoutMessageInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  thread: ThreadCreateOneWithoutMessagesInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MessageFilter = {
  every?: Maybe<MessageWhereInput>;
  none?: Maybe<MessageWhereInput>;
  some?: Maybe<MessageWhereInput>;
};

export type MessageMeta = {
   __typename?: 'MessageMeta';
  id: Scalars['String'];
  message: Message;
  metaDeleted: Scalars['Boolean'];
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
};

export type MessageMetaCreateManyWithoutMessageInput = {
  connect?: Maybe<Array<MessageMetaWhereUniqueInput>>;
  create?: Maybe<Array<MessageMetaCreateWithoutMessageInput>>;
};

export type MessageMetaCreateWithoutMessageInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MessageMetaFilter = {
  every?: Maybe<MessageMetaWhereInput>;
  none?: Maybe<MessageMetaWhereInput>;
  some?: Maybe<MessageMetaWhereInput>;
};

export type MessageMetaOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  messageId?: Maybe<OrderByArg>;
  metaDeleted?: Maybe<OrderByArg>;
  metaName?: Maybe<OrderByArg>;
  metaType?: Maybe<OrderByArg>;
  metaValue?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type MessageMetaScalarWhereInput = {
  AND?: Maybe<Array<MessageMetaScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  messageId?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<MessageMetaScalarWhereInput>>;
  OR?: Maybe<Array<MessageMetaScalarWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type MessageMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MessageMetaUpdateManyWithoutMessageInput = {
  connect?: Maybe<Array<MessageMetaWhereUniqueInput>>;
  create?: Maybe<Array<MessageMetaCreateWithoutMessageInput>>;
  delete?: Maybe<Array<MessageMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MessageMetaScalarWhereInput>>;
  disconnect?: Maybe<Array<MessageMetaWhereUniqueInput>>;
  set?: Maybe<Array<MessageMetaWhereUniqueInput>>;
  update?: Maybe<Array<MessageMetaUpdateWithWhereUniqueWithoutMessageInput>>;
  updateMany?: Maybe<Array<MessageMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<MessageMetaUpsertWithWhereUniqueWithoutMessageInput>>;
};

export type MessageMetaUpdateManyWithWhereNestedInput = {
  data: MessageMetaUpdateManyDataInput;
  where: MessageMetaScalarWhereInput;
};

export type MessageMetaUpdateWithoutMessageDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type MessageMetaWhereInput = {
  AND?: Maybe<Array<MessageMetaWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  message?: Maybe<MessageWhereInput>;
  messageId?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<MessageMetaWhereInput>>;
  OR?: Maybe<Array<MessageMetaWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type MessageMetaWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type MessageOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  itemContent?: Maybe<OrderByArg>;
  itemDeleted?: Maybe<OrderByArg>;
  itemName?: Maybe<OrderByArg>;
  itemStatus?: Maybe<OrderByArg>;
  itemType?: Maybe<OrderByArg>;
  threadId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
};

export type MessageScalarWhereInput = {
  AND?: Maybe<Array<MessageScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<MessageMetaFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  NOT?: Maybe<Array<MessageScalarWhereInput>>;
  OR?: Maybe<Array<MessageScalarWhereInput>>;
  threadId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type MessageUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<MessageMetaUpdateManyWithoutMessageInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  thread?: Maybe<ThreadUpdateOneRequiredWithoutMessagesInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutMessageInput>;
};

export type MessageUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MessageUpdateManyWithoutThreadInput = {
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
  create?: Maybe<Array<MessageCreateWithoutThreadInput>>;
  delete?: Maybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MessageScalarWhereInput>>;
  disconnect?: Maybe<Array<MessageWhereUniqueInput>>;
  set?: Maybe<Array<MessageWhereUniqueInput>>;
  update?: Maybe<Array<MessageUpdateWithWhereUniqueWithoutThreadInput>>;
  updateMany?: Maybe<Array<MessageUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<MessageUpsertWithWhereUniqueWithoutThreadInput>>;
};

export type MessageUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
  create?: Maybe<Array<MessageCreateWithoutUserInput>>;
  delete?: Maybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MessageScalarWhereInput>>;
  disconnect?: Maybe<Array<MessageWhereUniqueInput>>;
  set?: Maybe<Array<MessageWhereUniqueInput>>;
  update?: Maybe<Array<MessageUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<MessageUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<MessageUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MessageUpdateManyWithWhereNestedInput = {
  data: MessageUpdateManyDataInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateWithoutThreadDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<MessageMetaUpdateManyWithoutMessageInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutMessageInput>;
};

export type MessageUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<MessageMetaUpdateManyWithoutMessageInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  thread?: Maybe<ThreadUpdateOneRequiredWithoutMessagesInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MessageUpdateWithWhereUniqueWithoutThreadInput = {
  data: MessageUpdateWithoutThreadDataInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithWhereUniqueWithoutUserInput = {
  data: MessageUpdateWithoutUserDataInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpsertWithWhereUniqueWithoutThreadInput = {
  create: MessageCreateWithoutThreadInput;
  update: MessageUpdateWithoutThreadDataInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpsertWithWhereUniqueWithoutUserInput = {
  create: MessageCreateWithoutUserInput;
  update: MessageUpdateWithoutUserDataInput;
  where: MessageWhereUniqueInput;
};

export type MessageWhereInput = {
  AND?: Maybe<Array<MessageWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<MessageMetaFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  NOT?: Maybe<Array<MessageWhereInput>>;
  OR?: Maybe<Array<MessageWhereInput>>;
  thread?: Maybe<ThreadWhereInput>;
  threadId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type MessageWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  createOneAnnotation: Annotation;
  createOneCategory: Category;
  createOneFavorite: Favorite;
  createOneMessage: Message;
  createOneNotification: Notification;
  createOnePost: Post;
  createOneQuestion: Question;
  createOneReview: Review;
  createOneSpace: Space;
  createOneTag: Tag;
  createOneThread: Thread;
  createOneUser: User;
  deleteOneAnnotation?: Maybe<Scalars['Boolean']>;
  deleteOneMessage?: Maybe<Scalars['Boolean']>;
  deleteOnePost?: Maybe<Scalars['Boolean']>;
  deleteOneQuestion?: Maybe<Scalars['Boolean']>;
  deleteOneReview?: Maybe<Scalars['Boolean']>;
  deleteOneSpace?: Maybe<Scalars['Boolean']>;
  deleteOneThread?: Maybe<Scalars['Boolean']>;
  deleteOneUser?: Maybe<Scalars['Boolean']>;
  updateOneAnnotation?: Maybe<Annotation>;
  updateOneCategory?: Maybe<Category>;
  updateOneFavorite?: Maybe<Favorite>;
  updateOneMessage?: Maybe<Message>;
  updateOneNotification?: Maybe<Notification>;
  updateOnePost?: Maybe<Post>;
  updateOneQuestion?: Maybe<Question>;
  updateOneReview?: Maybe<Review>;
  updateOneSpace?: Maybe<Space>;
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


export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateOneQuestionArgs = {
  data: QuestionCreateInput;
};


export type MutationCreateOneReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationCreateOneSpaceArgs = {
  data: SpaceCreateInput;
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


export type MutationDeleteOneAnnotationArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationDeleteOneMessageArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationDeleteOnePostArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationDeleteOneQuestionArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationDeleteOneReviewArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationDeleteOneSpaceArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationDeleteOneThreadArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationDeleteOneUserArgs = {
  id?: Maybe<Scalars['ID']>;
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


export type MutationUpdateOneSpaceArgs = {
  data: SpaceUpdateInput;
  where: SpaceWhereUniqueInput;
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

export type Notification = {
   __typename?: 'Notification';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  itemContent: Scalars['String'];
  itemDeleted: Scalars['Boolean'];
  itemMeta: Array<NotificationMeta>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  post: Post;
  receiver: User;
  sender: User;
  space: Space;
  updatedAt: Scalars['DateTime'];
};


export type NotificationItemMetaArgs = {
  after?: Maybe<NotificationMetaWhereUniqueInput>;
  before?: Maybe<NotificationMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type NotificationCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<NotificationMetaCreateManyWithoutNotificationInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  post: PostCreateOneWithoutNotificationInput;
  receiver: UserCreateOneWithoutRecievedNotificationsInput;
  sender: UserCreateOneWithoutSentNotificationsInput;
  space: SpaceCreateOneWithoutNotificationInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserCreateOneWithoutNotificationsInput>;
};

export type NotificationCreateManyWithoutPostInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  create?: Maybe<Array<NotificationCreateWithoutPostInput>>;
};

export type NotificationCreateManyWithoutReceiverInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  create?: Maybe<Array<NotificationCreateWithoutReceiverInput>>;
};

export type NotificationCreateManyWithoutSenderInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  create?: Maybe<Array<NotificationCreateWithoutSenderInput>>;
};

export type NotificationCreateManyWithoutSpaceInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  create?: Maybe<Array<NotificationCreateWithoutSpaceInput>>;
};

export type NotificationCreateManyWithoutUserInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  create?: Maybe<Array<NotificationCreateWithoutUserInput>>;
};

export type NotificationCreateWithoutPostInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<NotificationMetaCreateManyWithoutNotificationInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  receiver: UserCreateOneWithoutRecievedNotificationsInput;
  sender: UserCreateOneWithoutSentNotificationsInput;
  space: SpaceCreateOneWithoutNotificationInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserCreateOneWithoutNotificationsInput>;
};

export type NotificationCreateWithoutReceiverInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<NotificationMetaCreateManyWithoutNotificationInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  post: PostCreateOneWithoutNotificationInput;
  sender: UserCreateOneWithoutSentNotificationsInput;
  space: SpaceCreateOneWithoutNotificationInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserCreateOneWithoutNotificationsInput>;
};

export type NotificationCreateWithoutSenderInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<NotificationMetaCreateManyWithoutNotificationInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  post: PostCreateOneWithoutNotificationInput;
  receiver: UserCreateOneWithoutRecievedNotificationsInput;
  space: SpaceCreateOneWithoutNotificationInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserCreateOneWithoutNotificationsInput>;
};

export type NotificationCreateWithoutSpaceInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<NotificationMetaCreateManyWithoutNotificationInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  post: PostCreateOneWithoutNotificationInput;
  receiver: UserCreateOneWithoutRecievedNotificationsInput;
  sender: UserCreateOneWithoutSentNotificationsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserCreateOneWithoutNotificationsInput>;
};

export type NotificationCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<NotificationMetaCreateManyWithoutNotificationInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  post: PostCreateOneWithoutNotificationInput;
  receiver: UserCreateOneWithoutRecievedNotificationsInput;
  sender: UserCreateOneWithoutSentNotificationsInput;
  space: SpaceCreateOneWithoutNotificationInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NotificationFilter = {
  every?: Maybe<NotificationWhereInput>;
  none?: Maybe<NotificationWhereInput>;
  some?: Maybe<NotificationWhereInput>;
};

export type NotificationMeta = {
   __typename?: 'NotificationMeta';
  id: Scalars['String'];
  metaDeleted: Scalars['Boolean'];
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  notification: Notification;
};

export type NotificationMetaCreateManyWithoutNotificationInput = {
  connect?: Maybe<Array<NotificationMetaWhereUniqueInput>>;
  create?: Maybe<Array<NotificationMetaCreateWithoutNotificationInput>>;
};

export type NotificationMetaCreateWithoutNotificationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NotificationMetaFilter = {
  every?: Maybe<NotificationMetaWhereInput>;
  none?: Maybe<NotificationMetaWhereInput>;
  some?: Maybe<NotificationMetaWhereInput>;
};

export type NotificationMetaOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  metaDeleted?: Maybe<OrderByArg>;
  metaName?: Maybe<OrderByArg>;
  metaType?: Maybe<OrderByArg>;
  metaValue?: Maybe<OrderByArg>;
  notificationId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type NotificationMetaScalarWhereInput = {
  AND?: Maybe<Array<NotificationMetaScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<NotificationMetaScalarWhereInput>>;
  notificationId?: Maybe<StringFilter>;
  OR?: Maybe<Array<NotificationMetaScalarWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type NotificationMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NotificationMetaUpdateManyWithoutNotificationInput = {
  connect?: Maybe<Array<NotificationMetaWhereUniqueInput>>;
  create?: Maybe<Array<NotificationMetaCreateWithoutNotificationInput>>;
  delete?: Maybe<Array<NotificationMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<NotificationMetaScalarWhereInput>>;
  disconnect?: Maybe<Array<NotificationMetaWhereUniqueInput>>;
  set?: Maybe<Array<NotificationMetaWhereUniqueInput>>;
  update?: Maybe<Array<NotificationMetaUpdateWithWhereUniqueWithoutNotificationInput>>;
  updateMany?: Maybe<Array<NotificationMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<NotificationMetaUpsertWithWhereUniqueWithoutNotificationInput>>;
};

export type NotificationMetaUpdateManyWithWhereNestedInput = {
  data: NotificationMetaUpdateManyDataInput;
  where: NotificationMetaScalarWhereInput;
};

export type NotificationMetaUpdateWithoutNotificationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type NotificationMetaWhereInput = {
  AND?: Maybe<Array<NotificationMetaWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<NotificationMetaWhereInput>>;
  notification?: Maybe<NotificationWhereInput>;
  notificationId?: Maybe<StringFilter>;
  OR?: Maybe<Array<NotificationMetaWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type NotificationMetaWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type NotificationOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  itemContent?: Maybe<OrderByArg>;
  itemDeleted?: Maybe<OrderByArg>;
  itemName?: Maybe<OrderByArg>;
  itemStatus?: Maybe<OrderByArg>;
  itemType?: Maybe<OrderByArg>;
  postId?: Maybe<OrderByArg>;
  receiverId?: Maybe<OrderByArg>;
  senderId?: Maybe<OrderByArg>;
  spaceId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
};

export type NotificationScalarWhereInput = {
  AND?: Maybe<Array<NotificationScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<NotificationMetaFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  NOT?: Maybe<Array<NotificationScalarWhereInput>>;
  OR?: Maybe<Array<NotificationScalarWhereInput>>;
  postId?: Maybe<StringFilter>;
  receiverId?: Maybe<StringFilter>;
  senderId?: Maybe<StringFilter>;
  spaceId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<NullableStringFilter>;
};

export type NotificationUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<NotificationMetaUpdateManyWithoutNotificationInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneRequiredWithoutNotificationInput>;
  receiver?: Maybe<UserUpdateOneRequiredWithoutRecievedNotificationsInput>;
  sender?: Maybe<UserUpdateOneRequiredWithoutSentNotificationsInput>;
  space?: Maybe<SpaceUpdateOneRequiredWithoutNotificationInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneWithoutNotificationsInput>;
};

export type NotificationUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NotificationUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  create?: Maybe<Array<NotificationCreateWithoutPostInput>>;
  delete?: Maybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<NotificationScalarWhereInput>>;
  disconnect?: Maybe<Array<NotificationWhereUniqueInput>>;
  set?: Maybe<Array<NotificationWhereUniqueInput>>;
  update?: Maybe<Array<NotificationUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<NotificationUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<NotificationUpsertWithWhereUniqueWithoutPostInput>>;
};

export type NotificationUpdateManyWithoutReceiverInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  create?: Maybe<Array<NotificationCreateWithoutReceiverInput>>;
  delete?: Maybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<NotificationScalarWhereInput>>;
  disconnect?: Maybe<Array<NotificationWhereUniqueInput>>;
  set?: Maybe<Array<NotificationWhereUniqueInput>>;
  update?: Maybe<Array<NotificationUpdateWithWhereUniqueWithoutReceiverInput>>;
  updateMany?: Maybe<Array<NotificationUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<NotificationUpsertWithWhereUniqueWithoutReceiverInput>>;
};

export type NotificationUpdateManyWithoutSenderInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  create?: Maybe<Array<NotificationCreateWithoutSenderInput>>;
  delete?: Maybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<NotificationScalarWhereInput>>;
  disconnect?: Maybe<Array<NotificationWhereUniqueInput>>;
  set?: Maybe<Array<NotificationWhereUniqueInput>>;
  update?: Maybe<Array<NotificationUpdateWithWhereUniqueWithoutSenderInput>>;
  updateMany?: Maybe<Array<NotificationUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<NotificationUpsertWithWhereUniqueWithoutSenderInput>>;
};

export type NotificationUpdateManyWithoutSpaceInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  create?: Maybe<Array<NotificationCreateWithoutSpaceInput>>;
  delete?: Maybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<NotificationScalarWhereInput>>;
  disconnect?: Maybe<Array<NotificationWhereUniqueInput>>;
  set?: Maybe<Array<NotificationWhereUniqueInput>>;
  update?: Maybe<Array<NotificationUpdateWithWhereUniqueWithoutSpaceInput>>;
  updateMany?: Maybe<Array<NotificationUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<NotificationUpsertWithWhereUniqueWithoutSpaceInput>>;
};

export type NotificationUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  create?: Maybe<Array<NotificationCreateWithoutUserInput>>;
  delete?: Maybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<NotificationScalarWhereInput>>;
  disconnect?: Maybe<Array<NotificationWhereUniqueInput>>;
  set?: Maybe<Array<NotificationWhereUniqueInput>>;
  update?: Maybe<Array<NotificationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<NotificationUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<NotificationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type NotificationUpdateManyWithWhereNestedInput = {
  data: NotificationUpdateManyDataInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateWithoutPostDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<NotificationMetaUpdateManyWithoutNotificationInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  receiver?: Maybe<UserUpdateOneRequiredWithoutRecievedNotificationsInput>;
  sender?: Maybe<UserUpdateOneRequiredWithoutSentNotificationsInput>;
  space?: Maybe<SpaceUpdateOneRequiredWithoutNotificationInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneWithoutNotificationsInput>;
};

export type NotificationUpdateWithoutReceiverDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<NotificationMetaUpdateManyWithoutNotificationInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneRequiredWithoutNotificationInput>;
  sender?: Maybe<UserUpdateOneRequiredWithoutSentNotificationsInput>;
  space?: Maybe<SpaceUpdateOneRequiredWithoutNotificationInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneWithoutNotificationsInput>;
};

export type NotificationUpdateWithoutSenderDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<NotificationMetaUpdateManyWithoutNotificationInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneRequiredWithoutNotificationInput>;
  receiver?: Maybe<UserUpdateOneRequiredWithoutRecievedNotificationsInput>;
  space?: Maybe<SpaceUpdateOneRequiredWithoutNotificationInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneWithoutNotificationsInput>;
};

export type NotificationUpdateWithoutSpaceDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<NotificationMetaUpdateManyWithoutNotificationInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneRequiredWithoutNotificationInput>;
  receiver?: Maybe<UserUpdateOneRequiredWithoutRecievedNotificationsInput>;
  sender?: Maybe<UserUpdateOneRequiredWithoutSentNotificationsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneWithoutNotificationsInput>;
};

export type NotificationUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<NotificationMetaUpdateManyWithoutNotificationInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneRequiredWithoutNotificationInput>;
  receiver?: Maybe<UserUpdateOneRequiredWithoutRecievedNotificationsInput>;
  sender?: Maybe<UserUpdateOneRequiredWithoutSentNotificationsInput>;
  space?: Maybe<SpaceUpdateOneRequiredWithoutNotificationInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NotificationUpdateWithWhereUniqueWithoutPostInput = {
  data: NotificationUpdateWithoutPostDataInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithWhereUniqueWithoutReceiverInput = {
  data: NotificationUpdateWithoutReceiverDataInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithWhereUniqueWithoutSenderInput = {
  data: NotificationUpdateWithoutSenderDataInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithWhereUniqueWithoutSpaceInput = {
  data: NotificationUpdateWithoutSpaceDataInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
  data: NotificationUpdateWithoutUserDataInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpsertWithWhereUniqueWithoutPostInput = {
  create: NotificationCreateWithoutPostInput;
  update: NotificationUpdateWithoutPostDataInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpsertWithWhereUniqueWithoutReceiverInput = {
  create: NotificationCreateWithoutReceiverInput;
  update: NotificationUpdateWithoutReceiverDataInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpsertWithWhereUniqueWithoutSenderInput = {
  create: NotificationCreateWithoutSenderInput;
  update: NotificationUpdateWithoutSenderDataInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpsertWithWhereUniqueWithoutSpaceInput = {
  create: NotificationCreateWithoutSpaceInput;
  update: NotificationUpdateWithoutSpaceDataInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  update: NotificationUpdateWithoutUserDataInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationWhereInput = {
  AND?: Maybe<Array<NotificationWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<NotificationMetaFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  NOT?: Maybe<Array<NotificationWhereInput>>;
  OR?: Maybe<Array<NotificationWhereInput>>;
  post?: Maybe<PostWhereInput>;
  postId?: Maybe<StringFilter>;
  receiver?: Maybe<UserWhereInput>;
  receiverId?: Maybe<StringFilter>;
  sender?: Maybe<UserWhereInput>;
  senderId?: Maybe<StringFilter>;
  space?: Maybe<SpaceWhereInput>;
  spaceId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  User?: Maybe<UserWhereInput>;
  userId?: Maybe<NullableStringFilter>;
};

export type NotificationWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type NullableStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type Post = {
   __typename?: 'Post';
  annotations: Array<Annotation>;
  createdAt: Scalars['DateTime'];
  favorites: Array<Favorite>;
  id: Scalars['String'];
  itemContent: Scalars['String'];
  itemDeleted: Scalars['Boolean'];
  itemMeta: Array<PostMeta>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  questions: Array<Question>;
  reviews: Array<Review>;
  space: Space;
  tags: Array<Tag>;
  updatedAt: Scalars['DateTime'];
  user: User;
};


export type PostAnnotationsArgs = {
  after?: Maybe<AnnotationWhereUniqueInput>;
  before?: Maybe<AnnotationWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type PostFavoritesArgs = {
  after?: Maybe<FavoriteWhereUniqueInput>;
  before?: Maybe<FavoriteWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type PostItemMetaArgs = {
  after?: Maybe<PostMetaWhereUniqueInput>;
  before?: Maybe<PostMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type PostQuestionsArgs = {
  after?: Maybe<QuestionWhereUniqueInput>;
  before?: Maybe<QuestionWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type PostReviewsArgs = {
  after?: Maybe<ReviewWhereUniqueInput>;
  before?: Maybe<ReviewWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type PostTagsArgs = {
  after?: Maybe<TagWhereUniqueInput>;
  before?: Maybe<TagWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type PostCreateInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutPostInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  Notification?: Maybe<NotificationCreateManyWithoutPostInput>;
  questions?: Maybe<QuestionCreateManyWithoutPostInput>;
  reviews?: Maybe<ReviewCreateManyWithoutPostInput>;
  space: SpaceCreateOneWithoutPostsInput;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutPostsInput;
};

export type PostCreateManyWithoutSpaceInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  create?: Maybe<Array<PostCreateWithoutSpaceInput>>;
};

export type PostCreateManyWithoutTagsInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  create?: Maybe<Array<PostCreateWithoutTagsInput>>;
};

export type PostCreateManyWithoutUserInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  create?: Maybe<Array<PostCreateWithoutUserInput>>;
};

export type PostCreateOneWithoutAnnotationsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  create?: Maybe<PostCreateWithoutAnnotationsInput>;
};

export type PostCreateOneWithoutFavoritesInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  create?: Maybe<PostCreateWithoutFavoritesInput>;
};

export type PostCreateOneWithoutNotificationInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  create?: Maybe<PostCreateWithoutNotificationInput>;
};

export type PostCreateOneWithoutQuestionsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  create?: Maybe<PostCreateWithoutQuestionsInput>;
};

export type PostCreateOneWithoutReviewsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  create?: Maybe<PostCreateWithoutReviewsInput>;
};

export type PostCreateWithoutAnnotationsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutPostInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  Notification?: Maybe<NotificationCreateManyWithoutPostInput>;
  questions?: Maybe<QuestionCreateManyWithoutPostInput>;
  reviews?: Maybe<ReviewCreateManyWithoutPostInput>;
  space: SpaceCreateOneWithoutPostsInput;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutPostsInput;
};

export type PostCreateWithoutFavoritesInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutPostInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  Notification?: Maybe<NotificationCreateManyWithoutPostInput>;
  questions?: Maybe<QuestionCreateManyWithoutPostInput>;
  reviews?: Maybe<ReviewCreateManyWithoutPostInput>;
  space: SpaceCreateOneWithoutPostsInput;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutPostsInput;
};

export type PostCreateWithoutNotificationInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutPostInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  questions?: Maybe<QuestionCreateManyWithoutPostInput>;
  reviews?: Maybe<ReviewCreateManyWithoutPostInput>;
  space: SpaceCreateOneWithoutPostsInput;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutPostsInput;
};

export type PostCreateWithoutQuestionsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutPostInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  Notification?: Maybe<NotificationCreateManyWithoutPostInput>;
  reviews?: Maybe<ReviewCreateManyWithoutPostInput>;
  space: SpaceCreateOneWithoutPostsInput;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutPostsInput;
};

export type PostCreateWithoutReviewsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutPostInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  Notification?: Maybe<NotificationCreateManyWithoutPostInput>;
  questions?: Maybe<QuestionCreateManyWithoutPostInput>;
  space: SpaceCreateOneWithoutPostsInput;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutPostsInput;
};

export type PostCreateWithoutSpaceInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutPostInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  Notification?: Maybe<NotificationCreateManyWithoutPostInput>;
  questions?: Maybe<QuestionCreateManyWithoutPostInput>;
  reviews?: Maybe<ReviewCreateManyWithoutPostInput>;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutPostsInput;
};

export type PostCreateWithoutTagsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutPostInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  Notification?: Maybe<NotificationCreateManyWithoutPostInput>;
  questions?: Maybe<QuestionCreateManyWithoutPostInput>;
  reviews?: Maybe<ReviewCreateManyWithoutPostInput>;
  space: SpaceCreateOneWithoutPostsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutPostsInput;
};

export type PostCreateWithoutUserInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaCreateManyWithoutPostInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  Notification?: Maybe<NotificationCreateManyWithoutPostInput>;
  questions?: Maybe<QuestionCreateManyWithoutPostInput>;
  reviews?: Maybe<ReviewCreateManyWithoutPostInput>;
  space: SpaceCreateOneWithoutPostsInput;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostFilter = {
  every?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
};

export type PostMeta = {
   __typename?: 'PostMeta';
  id: Scalars['String'];
  metaDeleted: Scalars['Boolean'];
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  post: Post;
};

export type PostMetaCreateManyWithoutPostInput = {
  connect?: Maybe<Array<PostMetaWhereUniqueInput>>;
  create?: Maybe<Array<PostMetaCreateWithoutPostInput>>;
};

export type PostMetaCreateWithoutPostInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostMetaFilter = {
  every?: Maybe<PostMetaWhereInput>;
  none?: Maybe<PostMetaWhereInput>;
  some?: Maybe<PostMetaWhereInput>;
};

export type PostMetaOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  metaDeleted?: Maybe<OrderByArg>;
  metaName?: Maybe<OrderByArg>;
  metaType?: Maybe<OrderByArg>;
  metaValue?: Maybe<OrderByArg>;
  postId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type PostMetaScalarWhereInput = {
  AND?: Maybe<Array<PostMetaScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<PostMetaScalarWhereInput>>;
  OR?: Maybe<Array<PostMetaScalarWhereInput>>;
  postId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type PostMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostMetaUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<PostMetaWhereUniqueInput>>;
  create?: Maybe<Array<PostMetaCreateWithoutPostInput>>;
  delete?: Maybe<Array<PostMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PostMetaScalarWhereInput>>;
  disconnect?: Maybe<Array<PostMetaWhereUniqueInput>>;
  set?: Maybe<Array<PostMetaWhereUniqueInput>>;
  update?: Maybe<Array<PostMetaUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<PostMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PostMetaUpsertWithWhereUniqueWithoutPostInput>>;
};

export type PostMetaUpdateManyWithWhereNestedInput = {
  data: PostMetaUpdateManyDataInput;
  where: PostMetaScalarWhereInput;
};

export type PostMetaUpdateWithoutPostDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type PostMetaWhereInput = {
  AND?: Maybe<Array<PostMetaWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<PostMetaWhereInput>>;
  OR?: Maybe<Array<PostMetaWhereInput>>;
  post?: Maybe<PostWhereInput>;
  postId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type PostMetaWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type PostOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  itemContent?: Maybe<OrderByArg>;
  itemDeleted?: Maybe<OrderByArg>;
  itemMimeType?: Maybe<OrderByArg>;
  itemName?: Maybe<OrderByArg>;
  itemStatus?: Maybe<OrderByArg>;
  itemType?: Maybe<OrderByArg>;
  itemUrlSegment?: Maybe<OrderByArg>;
  spaceId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
};

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  annotations?: Maybe<AnnotationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  favorites?: Maybe<FavoriteFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<PostMetaFilter>;
  itemMimeType?: Maybe<StringFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  itemUrlSegment?: Maybe<StringFilter>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  Notification?: Maybe<NotificationFilter>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  questions?: Maybe<QuestionFilter>;
  reviews?: Maybe<ReviewFilter>;
  spaceId?: Maybe<StringFilter>;
  tags?: Maybe<TagFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type PostUpdateInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  Notification?: Maybe<NotificationUpdateManyWithoutPostInput>;
  questions?: Maybe<QuestionUpdateManyWithoutPostInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostInput>;
  space?: Maybe<SpaceUpdateOneRequiredWithoutPostsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostUpdateManyWithoutSpaceInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  create?: Maybe<Array<PostCreateWithoutSpaceInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutSpaceInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutSpaceInput>>;
};

export type PostUpdateManyWithoutTagsInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  create?: Maybe<Array<PostCreateWithoutTagsInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
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
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PostUpdateManyWithWhereNestedInput = {
  data: PostUpdateManyDataInput;
  where: PostScalarWhereInput;
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

export type PostUpdateOneRequiredWithoutNotificationInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  create?: Maybe<PostCreateWithoutNotificationInput>;
  update?: Maybe<PostUpdateWithoutNotificationDataInput>;
  upsert?: Maybe<PostUpsertWithoutNotificationInput>;
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
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  Notification?: Maybe<NotificationUpdateManyWithoutPostInput>;
  questions?: Maybe<QuestionUpdateManyWithoutPostInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostInput>;
  space?: Maybe<SpaceUpdateOneRequiredWithoutPostsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateWithoutFavoritesDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  Notification?: Maybe<NotificationUpdateManyWithoutPostInput>;
  questions?: Maybe<QuestionUpdateManyWithoutPostInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostInput>;
  space?: Maybe<SpaceUpdateOneRequiredWithoutPostsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateWithoutNotificationDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionUpdateManyWithoutPostInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostInput>;
  space?: Maybe<SpaceUpdateOneRequiredWithoutPostsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateWithoutQuestionsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  Notification?: Maybe<NotificationUpdateManyWithoutPostInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostInput>;
  space?: Maybe<SpaceUpdateOneRequiredWithoutPostsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateWithoutReviewsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  Notification?: Maybe<NotificationUpdateManyWithoutPostInput>;
  questions?: Maybe<QuestionUpdateManyWithoutPostInput>;
  space?: Maybe<SpaceUpdateOneRequiredWithoutPostsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateWithoutSpaceDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  Notification?: Maybe<NotificationUpdateManyWithoutPostInput>;
  questions?: Maybe<QuestionUpdateManyWithoutPostInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateWithoutTagsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  Notification?: Maybe<NotificationUpdateManyWithoutPostInput>;
  questions?: Maybe<QuestionUpdateManyWithoutPostInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostInput>;
  space?: Maybe<SpaceUpdateOneRequiredWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateWithoutUserDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutPostInput>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<PostMetaUpdateManyWithoutPostInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  Notification?: Maybe<NotificationUpdateManyWithoutPostInput>;
  questions?: Maybe<QuestionUpdateManyWithoutPostInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostInput>;
  space?: Maybe<SpaceUpdateOneRequiredWithoutPostsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostUpdateWithWhereUniqueWithoutSpaceInput = {
  data: PostUpdateWithoutSpaceDataInput;
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

export type PostUpsertWithoutNotificationInput = {
  create: PostCreateWithoutNotificationInput;
  update: PostUpdateWithoutNotificationDataInput;
};

export type PostUpsertWithoutQuestionsInput = {
  create: PostCreateWithoutQuestionsInput;
  update: PostUpdateWithoutQuestionsDataInput;
};

export type PostUpsertWithoutReviewsInput = {
  create: PostCreateWithoutReviewsInput;
  update: PostUpdateWithoutReviewsDataInput;
};

export type PostUpsertWithWhereUniqueWithoutSpaceInput = {
  create: PostCreateWithoutSpaceInput;
  update: PostUpdateWithoutSpaceDataInput;
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

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  annotations?: Maybe<AnnotationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  favorites?: Maybe<FavoriteFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<PostMetaFilter>;
  itemMimeType?: Maybe<StringFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  itemUrlSegment?: Maybe<StringFilter>;
  NOT?: Maybe<Array<PostWhereInput>>;
  Notification?: Maybe<NotificationFilter>;
  OR?: Maybe<Array<PostWhereInput>>;
  questions?: Maybe<QuestionFilter>;
  reviews?: Maybe<ReviewFilter>;
  space?: Maybe<SpaceWhereInput>;
  spaceId?: Maybe<StringFilter>;
  tags?: Maybe<TagFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  annotation?: Maybe<Annotation>;
  annotationMetas: Array<AnnotationMeta>;
  annotations: Array<Annotation>;
  categories: Array<Category>;
  category?: Maybe<Category>;
  favorite?: Maybe<Favorite>;
  favorites: Array<Favorite>;
  message?: Maybe<Message>;
  messageMetas: Array<MessageMeta>;
  messages: Array<Message>;
  notification?: Maybe<Notification>;
  notificationMetas: Array<NotificationMeta>;
  notifications: Array<Notification>;
  post?: Maybe<Post>;
  postMetas: Array<PostMeta>;
  posts: Array<Post>;
  question?: Maybe<Question>;
  questionMetas: Array<QuestionMeta>;
  questions: Array<Question>;
  review?: Maybe<Review>;
  reviewMetas: Array<ReviewMeta>;
  reviews: Array<Review>;
  space?: Maybe<Space>;
  spaceMetas: Array<SpaceMeta>;
  spaces: Array<Space>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  thread?: Maybe<Thread>;
  threadMetas: Array<ThreadMeta>;
  threads: Array<Thread>;
  user?: Maybe<User>;
  userMetas: Array<UserMeta>;
  users: Array<User>;
};


export type QueryAnnotationArgs = {
  where: AnnotationWhereUniqueInput;
};


export type QueryAnnotationMetasArgs = {
  after?: Maybe<AnnotationMetaWhereUniqueInput>;
  before?: Maybe<AnnotationMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AnnotationMetaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AnnotationMetaWhereInput>;
};


export type QueryAnnotationsArgs = {
  after?: Maybe<AnnotationWhereUniqueInput>;
  before?: Maybe<AnnotationWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AnnotationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AnnotationWhereInput>;
};


export type QueryCategoriesArgs = {
  after?: Maybe<CategoryWhereUniqueInput>;
  before?: Maybe<CategoryWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryFavoriteArgs = {
  where: FavoriteWhereUniqueInput;
};


export type QueryFavoritesArgs = {
  after?: Maybe<FavoriteWhereUniqueInput>;
  before?: Maybe<FavoriteWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FavoriteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<FavoriteWhereInput>;
};


export type QueryMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type QueryMessageMetasArgs = {
  after?: Maybe<MessageMetaWhereUniqueInput>;
  before?: Maybe<MessageMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MessageMetaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MessageMetaWhereInput>;
};


export type QueryMessagesArgs = {
  after?: Maybe<MessageWhereUniqueInput>;
  before?: Maybe<MessageWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MessageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MessageWhereInput>;
};


export type QueryNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type QueryNotificationMetasArgs = {
  after?: Maybe<NotificationMetaWhereUniqueInput>;
  before?: Maybe<NotificationMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NotificationMetaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NotificationMetaWhereInput>;
};


export type QueryNotificationsArgs = {
  after?: Maybe<NotificationWhereUniqueInput>;
  before?: Maybe<NotificationWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NotificationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NotificationWhereInput>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostMetasArgs = {
  after?: Maybe<PostMetaWhereUniqueInput>;
  before?: Maybe<PostMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PostMetaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PostMetaWhereInput>;
};


export type QueryPostsArgs = {
  after?: Maybe<PostWhereUniqueInput>;
  before?: Maybe<PostWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type QueryQuestionMetasArgs = {
  after?: Maybe<QuestionMetaWhereUniqueInput>;
  before?: Maybe<QuestionMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QuestionMetaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<QuestionMetaWhereInput>;
};


export type QueryQuestionsArgs = {
  after?: Maybe<QuestionWhereUniqueInput>;
  before?: Maybe<QuestionWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QuestionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<QuestionWhereInput>;
};


export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type QueryReviewMetasArgs = {
  after?: Maybe<ReviewMetaWhereUniqueInput>;
  before?: Maybe<ReviewMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReviewMetaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReviewMetaWhereInput>;
};


export type QueryReviewsArgs = {
  after?: Maybe<ReviewWhereUniqueInput>;
  before?: Maybe<ReviewWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReviewOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ReviewWhereInput>;
};


export type QuerySpaceArgs = {
  where: SpaceWhereUniqueInput;
};


export type QuerySpaceMetasArgs = {
  after?: Maybe<SpaceMetaWhereUniqueInput>;
  before?: Maybe<SpaceMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SpaceMetaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SpaceMetaWhereInput>;
};


export type QuerySpacesArgs = {
  after?: Maybe<SpaceWhereUniqueInput>;
  before?: Maybe<SpaceWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SpaceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SpaceWhereInput>;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  after?: Maybe<TagWhereUniqueInput>;
  before?: Maybe<TagWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
};


export type QueryThreadArgs = {
  where: ThreadWhereUniqueInput;
};


export type QueryThreadMetasArgs = {
  after?: Maybe<ThreadMetaWhereUniqueInput>;
  before?: Maybe<ThreadMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ThreadMetaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ThreadMetaWhereInput>;
};


export type QueryThreadsArgs = {
  after?: Maybe<ThreadWhereUniqueInput>;
  before?: Maybe<ThreadWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ThreadOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ThreadWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserMetasArgs = {
  after?: Maybe<UserMetaWhereUniqueInput>;
  before?: Maybe<UserMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserMetaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<UserMetaWhereInput>;
};


export type QueryUsersArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type Question = {
   __typename?: 'Question';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  itemContent: Scalars['String'];
  itemDeleted: Scalars['Boolean'];
  itemMeta: Array<QuestionMeta>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  post: Post;
  updatedAt: Scalars['DateTime'];
  user: User;
};


export type QuestionItemMetaArgs = {
  after?: Maybe<QuestionMetaWhereUniqueInput>;
  before?: Maybe<QuestionMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QuestionCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<QuestionMetaCreateManyWithoutQuestionInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  post: PostCreateOneWithoutQuestionsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutQuestionsInput;
};

export type QuestionCreateManyWithoutPostInput = {
  connect?: Maybe<Array<QuestionWhereUniqueInput>>;
  create?: Maybe<Array<QuestionCreateWithoutPostInput>>;
};

export type QuestionCreateManyWithoutUserInput = {
  connect?: Maybe<Array<QuestionWhereUniqueInput>>;
  create?: Maybe<Array<QuestionCreateWithoutUserInput>>;
};

export type QuestionCreateWithoutPostInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<QuestionMetaCreateManyWithoutQuestionInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutQuestionsInput;
};

export type QuestionCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<QuestionMetaCreateManyWithoutQuestionInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  post: PostCreateOneWithoutQuestionsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionFilter = {
  every?: Maybe<QuestionWhereInput>;
  none?: Maybe<QuestionWhereInput>;
  some?: Maybe<QuestionWhereInput>;
};

export type QuestionMeta = {
   __typename?: 'QuestionMeta';
  id: Scalars['String'];
  metaDeleted: Scalars['Boolean'];
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  question: Question;
};

export type QuestionMetaCreateManyWithoutQuestionInput = {
  connect?: Maybe<Array<QuestionMetaWhereUniqueInput>>;
  create?: Maybe<Array<QuestionMetaCreateWithoutQuestionInput>>;
};

export type QuestionMetaCreateWithoutQuestionInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionMetaFilter = {
  every?: Maybe<QuestionMetaWhereInput>;
  none?: Maybe<QuestionMetaWhereInput>;
  some?: Maybe<QuestionMetaWhereInput>;
};

export type QuestionMetaOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  metaDeleted?: Maybe<OrderByArg>;
  metaName?: Maybe<OrderByArg>;
  metaType?: Maybe<OrderByArg>;
  metaValue?: Maybe<OrderByArg>;
  questionId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type QuestionMetaScalarWhereInput = {
  AND?: Maybe<Array<QuestionMetaScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<QuestionMetaScalarWhereInput>>;
  OR?: Maybe<Array<QuestionMetaScalarWhereInput>>;
  questionId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type QuestionMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionMetaUpdateManyWithoutQuestionInput = {
  connect?: Maybe<Array<QuestionMetaWhereUniqueInput>>;
  create?: Maybe<Array<QuestionMetaCreateWithoutQuestionInput>>;
  delete?: Maybe<Array<QuestionMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<QuestionMetaScalarWhereInput>>;
  disconnect?: Maybe<Array<QuestionMetaWhereUniqueInput>>;
  set?: Maybe<Array<QuestionMetaWhereUniqueInput>>;
  update?: Maybe<Array<QuestionMetaUpdateWithWhereUniqueWithoutQuestionInput>>;
  updateMany?: Maybe<Array<QuestionMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<QuestionMetaUpsertWithWhereUniqueWithoutQuestionInput>>;
};

export type QuestionMetaUpdateManyWithWhereNestedInput = {
  data: QuestionMetaUpdateManyDataInput;
  where: QuestionMetaScalarWhereInput;
};

export type QuestionMetaUpdateWithoutQuestionDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type QuestionMetaWhereInput = {
  AND?: Maybe<Array<QuestionMetaWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<QuestionMetaWhereInput>>;
  OR?: Maybe<Array<QuestionMetaWhereInput>>;
  question?: Maybe<QuestionWhereInput>;
  questionId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type QuestionMetaWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type QuestionOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  itemContent?: Maybe<OrderByArg>;
  itemDeleted?: Maybe<OrderByArg>;
  itemMimeType?: Maybe<OrderByArg>;
  itemName?: Maybe<OrderByArg>;
  itemStatus?: Maybe<OrderByArg>;
  itemType?: Maybe<OrderByArg>;
  itemUrlSegment?: Maybe<OrderByArg>;
  postId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
};

export type QuestionScalarWhereInput = {
  AND?: Maybe<Array<QuestionScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<QuestionMetaFilter>;
  itemMimeType?: Maybe<StringFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  itemUrlSegment?: Maybe<StringFilter>;
  NOT?: Maybe<Array<QuestionScalarWhereInput>>;
  OR?: Maybe<Array<QuestionScalarWhereInput>>;
  postId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type QuestionUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<QuestionMetaUpdateManyWithoutQuestionInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneRequiredWithoutQuestionsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutQuestionsInput>;
};

export type QuestionUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<QuestionWhereUniqueInput>>;
  create?: Maybe<Array<QuestionCreateWithoutPostInput>>;
  delete?: Maybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<QuestionScalarWhereInput>>;
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
  deleteMany?: Maybe<Array<QuestionScalarWhereInput>>;
  disconnect?: Maybe<Array<QuestionWhereUniqueInput>>;
  set?: Maybe<Array<QuestionWhereUniqueInput>>;
  update?: Maybe<Array<QuestionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<QuestionUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<QuestionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type QuestionUpdateManyWithWhereNestedInput = {
  data: QuestionUpdateManyDataInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateWithoutPostDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<QuestionMetaUpdateManyWithoutQuestionInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutQuestionsInput>;
};

export type QuestionUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<QuestionMetaUpdateManyWithoutQuestionInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneRequiredWithoutQuestionsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type QuestionWhereInput = {
  AND?: Maybe<Array<QuestionWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<QuestionMetaFilter>;
  itemMimeType?: Maybe<StringFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  itemUrlSegment?: Maybe<StringFilter>;
  NOT?: Maybe<Array<QuestionWhereInput>>;
  OR?: Maybe<Array<QuestionWhereInput>>;
  post?: Maybe<PostWhereInput>;
  postId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type QuestionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Review = {
   __typename?: 'Review';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  itemContent: Scalars['String'];
  itemDeleted: Scalars['Boolean'];
  itemMeta: Array<ReviewMeta>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  post: Post;
  updatedAt: Scalars['DateTime'];
  user: User;
};


export type ReviewItemMetaArgs = {
  after?: Maybe<ReviewMetaWhereUniqueInput>;
  before?: Maybe<ReviewMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ReviewCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<ReviewMetaCreateManyWithoutReviewInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  post: PostCreateOneWithoutReviewsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutReviewsInput;
};

export type ReviewCreateManyWithoutPostInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  create?: Maybe<Array<ReviewCreateWithoutPostInput>>;
};

export type ReviewCreateManyWithoutUserInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  create?: Maybe<Array<ReviewCreateWithoutUserInput>>;
};

export type ReviewCreateWithoutPostInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<ReviewMetaCreateManyWithoutReviewInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutReviewsInput;
};

export type ReviewCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<ReviewMetaCreateManyWithoutReviewInput>;
  itemMimeType: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  post: PostCreateOneWithoutReviewsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReviewFilter = {
  every?: Maybe<ReviewWhereInput>;
  none?: Maybe<ReviewWhereInput>;
  some?: Maybe<ReviewWhereInput>;
};

export type ReviewMeta = {
   __typename?: 'ReviewMeta';
  id: Scalars['String'];
  metaDeleted: Scalars['Boolean'];
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  review: Review;
};

export type ReviewMetaCreateManyWithoutReviewInput = {
  connect?: Maybe<Array<ReviewMetaWhereUniqueInput>>;
  create?: Maybe<Array<ReviewMetaCreateWithoutReviewInput>>;
};

export type ReviewMetaCreateWithoutReviewInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReviewMetaFilter = {
  every?: Maybe<ReviewMetaWhereInput>;
  none?: Maybe<ReviewMetaWhereInput>;
  some?: Maybe<ReviewMetaWhereInput>;
};

export type ReviewMetaOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  metaDeleted?: Maybe<OrderByArg>;
  metaName?: Maybe<OrderByArg>;
  metaType?: Maybe<OrderByArg>;
  metaValue?: Maybe<OrderByArg>;
  reviewId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type ReviewMetaScalarWhereInput = {
  AND?: Maybe<Array<ReviewMetaScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ReviewMetaScalarWhereInput>>;
  OR?: Maybe<Array<ReviewMetaScalarWhereInput>>;
  reviewId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ReviewMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReviewMetaUpdateManyWithoutReviewInput = {
  connect?: Maybe<Array<ReviewMetaWhereUniqueInput>>;
  create?: Maybe<Array<ReviewMetaCreateWithoutReviewInput>>;
  delete?: Maybe<Array<ReviewMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ReviewMetaScalarWhereInput>>;
  disconnect?: Maybe<Array<ReviewMetaWhereUniqueInput>>;
  set?: Maybe<Array<ReviewMetaWhereUniqueInput>>;
  update?: Maybe<Array<ReviewMetaUpdateWithWhereUniqueWithoutReviewInput>>;
  updateMany?: Maybe<Array<ReviewMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ReviewMetaUpsertWithWhereUniqueWithoutReviewInput>>;
};

export type ReviewMetaUpdateManyWithWhereNestedInput = {
  data: ReviewMetaUpdateManyDataInput;
  where: ReviewMetaScalarWhereInput;
};

export type ReviewMetaUpdateWithoutReviewDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type ReviewMetaWhereInput = {
  AND?: Maybe<Array<ReviewMetaWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ReviewMetaWhereInput>>;
  OR?: Maybe<Array<ReviewMetaWhereInput>>;
  review?: Maybe<ReviewWhereInput>;
  reviewId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ReviewMetaWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ReviewOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  itemContent?: Maybe<OrderByArg>;
  itemDeleted?: Maybe<OrderByArg>;
  itemMimeType?: Maybe<OrderByArg>;
  itemName?: Maybe<OrderByArg>;
  itemStatus?: Maybe<OrderByArg>;
  itemType?: Maybe<OrderByArg>;
  itemUrlSegment?: Maybe<OrderByArg>;
  postId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
};

export type ReviewScalarWhereInput = {
  AND?: Maybe<Array<ReviewScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<ReviewMetaFilter>;
  itemMimeType?: Maybe<StringFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  itemUrlSegment?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ReviewScalarWhereInput>>;
  OR?: Maybe<Array<ReviewScalarWhereInput>>;
  postId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type ReviewUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<ReviewMetaUpdateManyWithoutReviewInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneRequiredWithoutReviewsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutReviewsInput>;
};

export type ReviewUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReviewUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  create?: Maybe<Array<ReviewCreateWithoutPostInput>>;
  delete?: Maybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ReviewScalarWhereInput>>;
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
  deleteMany?: Maybe<Array<ReviewScalarWhereInput>>;
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>;
  set?: Maybe<Array<ReviewWhereUniqueInput>>;
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ReviewUpdateManyWithWhereNestedInput = {
  data: ReviewUpdateManyDataInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateWithoutPostDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<ReviewMetaUpdateManyWithoutReviewInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutReviewsInput>;
};

export type ReviewUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<ReviewMetaUpdateManyWithoutReviewInput>;
  itemMimeType?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneRequiredWithoutReviewsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type ReviewWhereInput = {
  AND?: Maybe<Array<ReviewWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<ReviewMetaFilter>;
  itemMimeType?: Maybe<StringFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  itemUrlSegment?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ReviewWhereInput>>;
  OR?: Maybe<Array<ReviewWhereInput>>;
  post?: Maybe<PostWhereInput>;
  postId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type ReviewWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Space = {
   __typename?: 'Space';
  categories: Array<Category>;
  id: Scalars['String'];
  itemContent: Scalars['String'];
  itemDeleted: Scalars['Boolean'];
  itemMeta: Array<SpaceMeta>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  members: Array<User>;
  posts: Array<Post>;
  user: User;
};


export type SpaceCategoriesArgs = {
  after?: Maybe<CategoryWhereUniqueInput>;
  before?: Maybe<CategoryWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SpaceItemMetaArgs = {
  after?: Maybe<SpaceMetaWhereUniqueInput>;
  before?: Maybe<SpaceMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SpaceMembersArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SpacePostsArgs = {
  after?: Maybe<PostWhereUniqueInput>;
  before?: Maybe<PostWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};

export type SpaceCreateInput = {
  categories?: Maybe<CategoryCreateManyWithoutSpacesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<SpaceMetaCreateManyWithoutSpaceInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  members?: Maybe<UserCreateManyWithoutMemberOfInput>;
  Notification?: Maybe<NotificationCreateManyWithoutSpaceInput>;
  posts?: Maybe<PostCreateManyWithoutSpaceInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutSpacesInput;
};

export type SpaceCreateManyWithoutCategoriesInput = {
  connect?: Maybe<Array<SpaceWhereUniqueInput>>;
  create?: Maybe<Array<SpaceCreateWithoutCategoriesInput>>;
};

export type SpaceCreateManyWithoutMembersInput = {
  connect?: Maybe<Array<SpaceWhereUniqueInput>>;
  create?: Maybe<Array<SpaceCreateWithoutMembersInput>>;
};

export type SpaceCreateManyWithoutUserInput = {
  connect?: Maybe<Array<SpaceWhereUniqueInput>>;
  create?: Maybe<Array<SpaceCreateWithoutUserInput>>;
};

export type SpaceCreateOneWithoutNotificationInput = {
  connect?: Maybe<SpaceWhereUniqueInput>;
  create?: Maybe<SpaceCreateWithoutNotificationInput>;
};

export type SpaceCreateOneWithoutPostsInput = {
  connect?: Maybe<SpaceWhereUniqueInput>;
  create?: Maybe<SpaceCreateWithoutPostsInput>;
};

export type SpaceCreateWithoutCategoriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<SpaceMetaCreateManyWithoutSpaceInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  members?: Maybe<UserCreateManyWithoutMemberOfInput>;
  Notification?: Maybe<NotificationCreateManyWithoutSpaceInput>;
  posts?: Maybe<PostCreateManyWithoutSpaceInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutSpacesInput;
};

export type SpaceCreateWithoutMembersInput = {
  categories?: Maybe<CategoryCreateManyWithoutSpacesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<SpaceMetaCreateManyWithoutSpaceInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  Notification?: Maybe<NotificationCreateManyWithoutSpaceInput>;
  posts?: Maybe<PostCreateManyWithoutSpaceInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutSpacesInput;
};

export type SpaceCreateWithoutNotificationInput = {
  categories?: Maybe<CategoryCreateManyWithoutSpacesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<SpaceMetaCreateManyWithoutSpaceInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  members?: Maybe<UserCreateManyWithoutMemberOfInput>;
  posts?: Maybe<PostCreateManyWithoutSpaceInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutSpacesInput;
};

export type SpaceCreateWithoutPostsInput = {
  categories?: Maybe<CategoryCreateManyWithoutSpacesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<SpaceMetaCreateManyWithoutSpaceInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  members?: Maybe<UserCreateManyWithoutMemberOfInput>;
  Notification?: Maybe<NotificationCreateManyWithoutSpaceInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutSpacesInput;
};

export type SpaceCreateWithoutUserInput = {
  categories?: Maybe<CategoryCreateManyWithoutSpacesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<SpaceMetaCreateManyWithoutSpaceInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  itemUrlSegment: Scalars['String'];
  members?: Maybe<UserCreateManyWithoutMemberOfInput>;
  Notification?: Maybe<NotificationCreateManyWithoutSpaceInput>;
  posts?: Maybe<PostCreateManyWithoutSpaceInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SpaceFilter = {
  every?: Maybe<SpaceWhereInput>;
  none?: Maybe<SpaceWhereInput>;
  some?: Maybe<SpaceWhereInput>;
};

export type SpaceMeta = {
   __typename?: 'SpaceMeta';
  id: Scalars['String'];
  metaDeleted: Scalars['Boolean'];
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  space: Space;
};

export type SpaceMetaCreateManyWithoutSpaceInput = {
  connect?: Maybe<Array<SpaceMetaWhereUniqueInput>>;
  create?: Maybe<Array<SpaceMetaCreateWithoutSpaceInput>>;
};

export type SpaceMetaCreateWithoutSpaceInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SpaceMetaFilter = {
  every?: Maybe<SpaceMetaWhereInput>;
  none?: Maybe<SpaceMetaWhereInput>;
  some?: Maybe<SpaceMetaWhereInput>;
};

export type SpaceMetaOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  metaDeleted?: Maybe<OrderByArg>;
  metaName?: Maybe<OrderByArg>;
  metaType?: Maybe<OrderByArg>;
  metaValue?: Maybe<OrderByArg>;
  spaceId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type SpaceMetaScalarWhereInput = {
  AND?: Maybe<Array<SpaceMetaScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<SpaceMetaScalarWhereInput>>;
  OR?: Maybe<Array<SpaceMetaScalarWhereInput>>;
  spaceId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SpaceMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SpaceMetaUpdateManyWithoutSpaceInput = {
  connect?: Maybe<Array<SpaceMetaWhereUniqueInput>>;
  create?: Maybe<Array<SpaceMetaCreateWithoutSpaceInput>>;
  delete?: Maybe<Array<SpaceMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SpaceMetaScalarWhereInput>>;
  disconnect?: Maybe<Array<SpaceMetaWhereUniqueInput>>;
  set?: Maybe<Array<SpaceMetaWhereUniqueInput>>;
  update?: Maybe<Array<SpaceMetaUpdateWithWhereUniqueWithoutSpaceInput>>;
  updateMany?: Maybe<Array<SpaceMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<SpaceMetaUpsertWithWhereUniqueWithoutSpaceInput>>;
};

export type SpaceMetaUpdateManyWithWhereNestedInput = {
  data: SpaceMetaUpdateManyDataInput;
  where: SpaceMetaScalarWhereInput;
};

export type SpaceMetaUpdateWithoutSpaceDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SpaceMetaUpdateWithWhereUniqueWithoutSpaceInput = {
  data: SpaceMetaUpdateWithoutSpaceDataInput;
  where: SpaceMetaWhereUniqueInput;
};

export type SpaceMetaUpsertWithWhereUniqueWithoutSpaceInput = {
  create: SpaceMetaCreateWithoutSpaceInput;
  update: SpaceMetaUpdateWithoutSpaceDataInput;
  where: SpaceMetaWhereUniqueInput;
};

export type SpaceMetaWhereInput = {
  AND?: Maybe<Array<SpaceMetaWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<SpaceMetaWhereInput>>;
  OR?: Maybe<Array<SpaceMetaWhereInput>>;
  space?: Maybe<SpaceWhereInput>;
  spaceId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SpaceMetaWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type SpaceOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  itemContent?: Maybe<OrderByArg>;
  itemDeleted?: Maybe<OrderByArg>;
  itemName?: Maybe<OrderByArg>;
  itemStatus?: Maybe<OrderByArg>;
  itemType?: Maybe<OrderByArg>;
  itemUrlSegment?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
};

export type SpaceScalarWhereInput = {
  AND?: Maybe<Array<SpaceScalarWhereInput>>;
  categories?: Maybe<CategoryFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<SpaceMetaFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  itemUrlSegment?: Maybe<StringFilter>;
  members?: Maybe<UserFilter>;
  NOT?: Maybe<Array<SpaceScalarWhereInput>>;
  Notification?: Maybe<NotificationFilter>;
  OR?: Maybe<Array<SpaceScalarWhereInput>>;
  posts?: Maybe<PostFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type SpaceUpdateInput = {
  categories?: Maybe<CategoryUpdateManyWithoutSpacesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<SpaceMetaUpdateManyWithoutSpaceInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  members?: Maybe<UserUpdateManyWithoutMemberOfInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutSpaceInput>;
  posts?: Maybe<PostUpdateManyWithoutSpaceInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutSpacesInput>;
};

export type SpaceUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SpaceUpdateManyWithoutCategoriesInput = {
  connect?: Maybe<Array<SpaceWhereUniqueInput>>;
  create?: Maybe<Array<SpaceCreateWithoutCategoriesInput>>;
  delete?: Maybe<Array<SpaceWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SpaceScalarWhereInput>>;
  disconnect?: Maybe<Array<SpaceWhereUniqueInput>>;
  set?: Maybe<Array<SpaceWhereUniqueInput>>;
  update?: Maybe<Array<SpaceUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: Maybe<Array<SpaceUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<SpaceUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type SpaceUpdateManyWithoutMembersInput = {
  connect?: Maybe<Array<SpaceWhereUniqueInput>>;
  create?: Maybe<Array<SpaceCreateWithoutMembersInput>>;
  delete?: Maybe<Array<SpaceWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SpaceScalarWhereInput>>;
  disconnect?: Maybe<Array<SpaceWhereUniqueInput>>;
  set?: Maybe<Array<SpaceWhereUniqueInput>>;
  update?: Maybe<Array<SpaceUpdateWithWhereUniqueWithoutMembersInput>>;
  updateMany?: Maybe<Array<SpaceUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<SpaceUpsertWithWhereUniqueWithoutMembersInput>>;
};

export type SpaceUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<SpaceWhereUniqueInput>>;
  create?: Maybe<Array<SpaceCreateWithoutUserInput>>;
  delete?: Maybe<Array<SpaceWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SpaceScalarWhereInput>>;
  disconnect?: Maybe<Array<SpaceWhereUniqueInput>>;
  set?: Maybe<Array<SpaceWhereUniqueInput>>;
  update?: Maybe<Array<SpaceUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<SpaceUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<SpaceUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SpaceUpdateManyWithWhereNestedInput = {
  data: SpaceUpdateManyDataInput;
  where: SpaceScalarWhereInput;
};

export type SpaceUpdateOneRequiredWithoutNotificationInput = {
  connect?: Maybe<SpaceWhereUniqueInput>;
  create?: Maybe<SpaceCreateWithoutNotificationInput>;
  update?: Maybe<SpaceUpdateWithoutNotificationDataInput>;
  upsert?: Maybe<SpaceUpsertWithoutNotificationInput>;
};

export type SpaceUpdateOneRequiredWithoutPostsInput = {
  connect?: Maybe<SpaceWhereUniqueInput>;
  create?: Maybe<SpaceCreateWithoutPostsInput>;
  update?: Maybe<SpaceUpdateWithoutPostsDataInput>;
  upsert?: Maybe<SpaceUpsertWithoutPostsInput>;
};

export type SpaceUpdateWithoutCategoriesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<SpaceMetaUpdateManyWithoutSpaceInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  members?: Maybe<UserUpdateManyWithoutMemberOfInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutSpaceInput>;
  posts?: Maybe<PostUpdateManyWithoutSpaceInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutSpacesInput>;
};

export type SpaceUpdateWithoutMembersDataInput = {
  categories?: Maybe<CategoryUpdateManyWithoutSpacesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<SpaceMetaUpdateManyWithoutSpaceInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  Notification?: Maybe<NotificationUpdateManyWithoutSpaceInput>;
  posts?: Maybe<PostUpdateManyWithoutSpaceInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutSpacesInput>;
};

export type SpaceUpdateWithoutNotificationDataInput = {
  categories?: Maybe<CategoryUpdateManyWithoutSpacesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<SpaceMetaUpdateManyWithoutSpaceInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  members?: Maybe<UserUpdateManyWithoutMemberOfInput>;
  posts?: Maybe<PostUpdateManyWithoutSpaceInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutSpacesInput>;
};

export type SpaceUpdateWithoutPostsDataInput = {
  categories?: Maybe<CategoryUpdateManyWithoutSpacesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<SpaceMetaUpdateManyWithoutSpaceInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  members?: Maybe<UserUpdateManyWithoutMemberOfInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutSpaceInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutSpacesInput>;
};

export type SpaceUpdateWithoutUserDataInput = {
  categories?: Maybe<CategoryUpdateManyWithoutSpacesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<SpaceMetaUpdateManyWithoutSpaceInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  itemUrlSegment?: Maybe<Scalars['String']>;
  members?: Maybe<UserUpdateManyWithoutMemberOfInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutSpaceInput>;
  posts?: Maybe<PostUpdateManyWithoutSpaceInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SpaceUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: SpaceUpdateWithoutCategoriesDataInput;
  where: SpaceWhereUniqueInput;
};

export type SpaceUpdateWithWhereUniqueWithoutMembersInput = {
  data: SpaceUpdateWithoutMembersDataInput;
  where: SpaceWhereUniqueInput;
};

export type SpaceUpdateWithWhereUniqueWithoutUserInput = {
  data: SpaceUpdateWithoutUserDataInput;
  where: SpaceWhereUniqueInput;
};

export type SpaceUpsertWithoutNotificationInput = {
  create: SpaceCreateWithoutNotificationInput;
  update: SpaceUpdateWithoutNotificationDataInput;
};

export type SpaceUpsertWithoutPostsInput = {
  create: SpaceCreateWithoutPostsInput;
  update: SpaceUpdateWithoutPostsDataInput;
};

export type SpaceUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: SpaceCreateWithoutCategoriesInput;
  update: SpaceUpdateWithoutCategoriesDataInput;
  where: SpaceWhereUniqueInput;
};

export type SpaceUpsertWithWhereUniqueWithoutMembersInput = {
  create: SpaceCreateWithoutMembersInput;
  update: SpaceUpdateWithoutMembersDataInput;
  where: SpaceWhereUniqueInput;
};

export type SpaceUpsertWithWhereUniqueWithoutUserInput = {
  create: SpaceCreateWithoutUserInput;
  update: SpaceUpdateWithoutUserDataInput;
  where: SpaceWhereUniqueInput;
};

export type SpaceWhereInput = {
  AND?: Maybe<Array<SpaceWhereInput>>;
  categories?: Maybe<CategoryFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<SpaceMetaFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  itemUrlSegment?: Maybe<StringFilter>;
  members?: Maybe<UserFilter>;
  NOT?: Maybe<Array<SpaceWhereInput>>;
  Notification?: Maybe<NotificationFilter>;
  OR?: Maybe<Array<SpaceWhereInput>>;
  posts?: Maybe<PostFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type SpaceWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Tag = {
   __typename?: 'Tag';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  itemContent: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  posts: Array<Post>;
  updatedAt: Scalars['DateTime'];
};


export type TagPostsArgs = {
  after?: Maybe<PostWhereUniqueInput>;
  before?: Maybe<PostWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type TagCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutTagsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagCreateManyWithoutPostsInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  create?: Maybe<Array<TagCreateWithoutPostsInput>>;
};

export type TagCreateWithoutPostsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagFilter = {
  every?: Maybe<TagWhereInput>;
  none?: Maybe<TagWhereInput>;
  some?: Maybe<TagWhereInput>;
};

export type TagOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  itemContent?: Maybe<OrderByArg>;
  itemName?: Maybe<OrderByArg>;
  itemStatus?: Maybe<OrderByArg>;
  itemType?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type TagScalarWhereInput = {
  AND?: Maybe<Array<TagScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TagScalarWhereInput>>;
  OR?: Maybe<Array<TagScalarWhereInput>>;
  posts?: Maybe<PostFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TagUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutTagsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagUpdateManyWithoutPostsInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  create?: Maybe<Array<TagCreateWithoutPostsInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutPostsInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutPostsInput>>;
};

export type TagUpdateManyWithWhereNestedInput = {
  data: TagUpdateManyDataInput;
  where: TagScalarWhereInput;
};

export type TagUpdateWithoutPostsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type TagWhereInput = {
  AND?: Maybe<Array<TagWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  posts?: Maybe<PostFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Thread = {
   __typename?: 'Thread';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  itemContent: Scalars['String'];
  itemDeleted: Scalars['Boolean'];
  itemMeta: Array<ThreadMeta>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  messages: Array<Message>;
  participants: Array<User>;
  updatedAt: Scalars['DateTime'];
};


export type ThreadItemMetaArgs = {
  after?: Maybe<ThreadMetaWhereUniqueInput>;
  before?: Maybe<ThreadMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type ThreadMessagesArgs = {
  after?: Maybe<MessageWhereUniqueInput>;
  before?: Maybe<MessageWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type ThreadParticipantsArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ThreadCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<ThreadMetaCreateManyWithoutThreadInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  messages?: Maybe<MessageCreateManyWithoutThreadInput>;
  participants?: Maybe<UserCreateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ThreadCreateManyWithoutParticipantsInput = {
  connect?: Maybe<Array<ThreadWhereUniqueInput>>;
  create?: Maybe<Array<ThreadCreateWithoutParticipantsInput>>;
};

export type ThreadCreateOneWithoutMessagesInput = {
  connect?: Maybe<ThreadWhereUniqueInput>;
  create?: Maybe<ThreadCreateWithoutMessagesInput>;
};

export type ThreadCreateWithoutMessagesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<ThreadMetaCreateManyWithoutThreadInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  participants?: Maybe<UserCreateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ThreadCreateWithoutParticipantsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent: Scalars['String'];
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<ThreadMetaCreateManyWithoutThreadInput>;
  itemName: Scalars['String'];
  itemStatus: Scalars['String'];
  itemType: Scalars['String'];
  messages?: Maybe<MessageCreateManyWithoutThreadInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ThreadFilter = {
  every?: Maybe<ThreadWhereInput>;
  none?: Maybe<ThreadWhereInput>;
  some?: Maybe<ThreadWhereInput>;
};

export type ThreadMeta = {
   __typename?: 'ThreadMeta';
  id: Scalars['String'];
  metaDeleted: Scalars['Boolean'];
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  thread: Thread;
};

export type ThreadMetaCreateManyWithoutThreadInput = {
  connect?: Maybe<Array<ThreadMetaWhereUniqueInput>>;
  create?: Maybe<Array<ThreadMetaCreateWithoutThreadInput>>;
};

export type ThreadMetaCreateWithoutThreadInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ThreadMetaFilter = {
  every?: Maybe<ThreadMetaWhereInput>;
  none?: Maybe<ThreadMetaWhereInput>;
  some?: Maybe<ThreadMetaWhereInput>;
};

export type ThreadMetaOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  metaDeleted?: Maybe<OrderByArg>;
  metaName?: Maybe<OrderByArg>;
  metaType?: Maybe<OrderByArg>;
  metaValue?: Maybe<OrderByArg>;
  threadId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type ThreadMetaScalarWhereInput = {
  AND?: Maybe<Array<ThreadMetaScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ThreadMetaScalarWhereInput>>;
  OR?: Maybe<Array<ThreadMetaScalarWhereInput>>;
  threadId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ThreadMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ThreadMetaUpdateManyWithoutThreadInput = {
  connect?: Maybe<Array<ThreadMetaWhereUniqueInput>>;
  create?: Maybe<Array<ThreadMetaCreateWithoutThreadInput>>;
  delete?: Maybe<Array<ThreadMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ThreadMetaScalarWhereInput>>;
  disconnect?: Maybe<Array<ThreadMetaWhereUniqueInput>>;
  set?: Maybe<Array<ThreadMetaWhereUniqueInput>>;
  update?: Maybe<Array<ThreadMetaUpdateWithWhereUniqueWithoutThreadInput>>;
  updateMany?: Maybe<Array<ThreadMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ThreadMetaUpsertWithWhereUniqueWithoutThreadInput>>;
};

export type ThreadMetaUpdateManyWithWhereNestedInput = {
  data: ThreadMetaUpdateManyDataInput;
  where: ThreadMetaScalarWhereInput;
};

export type ThreadMetaUpdateWithoutThreadDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type ThreadMetaWhereInput = {
  AND?: Maybe<Array<ThreadMetaWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ThreadMetaWhereInput>>;
  OR?: Maybe<Array<ThreadMetaWhereInput>>;
  thread?: Maybe<ThreadWhereInput>;
  threadId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ThreadMetaWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ThreadOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  itemContent?: Maybe<OrderByArg>;
  itemDeleted?: Maybe<OrderByArg>;
  itemName?: Maybe<OrderByArg>;
  itemStatus?: Maybe<OrderByArg>;
  itemType?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type ThreadScalarWhereInput = {
  AND?: Maybe<Array<ThreadScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<ThreadMetaFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  messages?: Maybe<MessageFilter>;
  NOT?: Maybe<Array<ThreadScalarWhereInput>>;
  OR?: Maybe<Array<ThreadScalarWhereInput>>;
  participants?: Maybe<UserFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ThreadUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<ThreadMetaUpdateManyWithoutThreadInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  messages?: Maybe<MessageUpdateManyWithoutThreadInput>;
  participants?: Maybe<UserUpdateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ThreadUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ThreadUpdateManyWithoutParticipantsInput = {
  connect?: Maybe<Array<ThreadWhereUniqueInput>>;
  create?: Maybe<Array<ThreadCreateWithoutParticipantsInput>>;
  delete?: Maybe<Array<ThreadWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ThreadScalarWhereInput>>;
  disconnect?: Maybe<Array<ThreadWhereUniqueInput>>;
  set?: Maybe<Array<ThreadWhereUniqueInput>>;
  update?: Maybe<Array<ThreadUpdateWithWhereUniqueWithoutParticipantsInput>>;
  updateMany?: Maybe<Array<ThreadUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ThreadUpsertWithWhereUniqueWithoutParticipantsInput>>;
};

export type ThreadUpdateManyWithWhereNestedInput = {
  data: ThreadUpdateManyDataInput;
  where: ThreadScalarWhereInput;
};

export type ThreadUpdateOneRequiredWithoutMessagesInput = {
  connect?: Maybe<ThreadWhereUniqueInput>;
  create?: Maybe<ThreadCreateWithoutMessagesInput>;
  update?: Maybe<ThreadUpdateWithoutMessagesDataInput>;
  upsert?: Maybe<ThreadUpsertWithoutMessagesInput>;
};

export type ThreadUpdateWithoutMessagesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<ThreadMetaUpdateManyWithoutThreadInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  participants?: Maybe<UserUpdateManyWithoutThreadsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ThreadUpdateWithoutParticipantsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemContent?: Maybe<Scalars['String']>;
  itemDeleted?: Maybe<Scalars['Boolean']>;
  itemMeta?: Maybe<ThreadMetaUpdateManyWithoutThreadInput>;
  itemName?: Maybe<Scalars['String']>;
  itemStatus?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  messages?: Maybe<MessageUpdateManyWithoutThreadInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ThreadUpdateWithWhereUniqueWithoutParticipantsInput = {
  data: ThreadUpdateWithoutParticipantsDataInput;
  where: ThreadWhereUniqueInput;
};

export type ThreadUpsertWithoutMessagesInput = {
  create: ThreadCreateWithoutMessagesInput;
  update: ThreadUpdateWithoutMessagesDataInput;
};

export type ThreadUpsertWithWhereUniqueWithoutParticipantsInput = {
  create: ThreadCreateWithoutParticipantsInput;
  update: ThreadUpdateWithoutParticipantsDataInput;
  where: ThreadWhereUniqueInput;
};

export type ThreadWhereInput = {
  AND?: Maybe<Array<ThreadWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  itemContent?: Maybe<StringFilter>;
  itemDeleted?: Maybe<BooleanFilter>;
  itemMeta?: Maybe<ThreadMetaFilter>;
  itemName?: Maybe<StringFilter>;
  itemStatus?: Maybe<StringFilter>;
  itemType?: Maybe<StringFilter>;
  messages?: Maybe<MessageFilter>;
  NOT?: Maybe<Array<ThreadWhereInput>>;
  OR?: Maybe<Array<ThreadWhereInput>>;
  participants?: Maybe<UserFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ThreadWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type User = {
   __typename?: 'User';
  annotations: Array<Annotation>;
  confirmHash: Scalars['String'];
  createdAt: Scalars['DateTime'];
  favorites: Array<Favorite>;
  followers: Array<User>;
  following: Array<User>;
  forgotHash: Scalars['String'];
  id: Scalars['String'];
  memberOf: Array<Space>;
  memberOfPosts?: Maybe<Array<Post>>;
  notifications: Array<Notification>;
  posts: Array<Post>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  questions: Array<Question>;
  recievedNotifications: Array<Notification>;
  reviews: Array<Review>;
  sentNotifications: Array<Notification>;
  spaces: Array<Space>;
  threads: Array<Thread>;
  updatedAt: Scalars['DateTime'];
  userConfirmed: Scalars['Int'];
  userDeleted: Scalars['Boolean'];
  userEmail: Scalars['String'];
  userMeta: Array<UserMeta>;
  userType: Scalars['Int'];
};


export type UserAnnotationsArgs = {
  after?: Maybe<AnnotationWhereUniqueInput>;
  before?: Maybe<AnnotationWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserFavoritesArgs = {
  after?: Maybe<FavoriteWhereUniqueInput>;
  before?: Maybe<FavoriteWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserFollowersArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserFollowingArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserMemberOfArgs = {
  after?: Maybe<SpaceWhereUniqueInput>;
  before?: Maybe<SpaceWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserMemberOfPostsArgs = {
  postId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};


export type UserNotificationsArgs = {
  after?: Maybe<NotificationWhereUniqueInput>;
  before?: Maybe<NotificationWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserPostsArgs = {
  after?: Maybe<PostWhereUniqueInput>;
  before?: Maybe<PostWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type UserQuestionsArgs = {
  after?: Maybe<QuestionWhereUniqueInput>;
  before?: Maybe<QuestionWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserRecievedNotificationsArgs = {
  after?: Maybe<NotificationWhereUniqueInput>;
  before?: Maybe<NotificationWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserReviewsArgs = {
  after?: Maybe<ReviewWhereUniqueInput>;
  before?: Maybe<ReviewWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserSentNotificationsArgs = {
  after?: Maybe<NotificationWhereUniqueInput>;
  before?: Maybe<NotificationWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserSpacesArgs = {
  after?: Maybe<SpaceWhereUniqueInput>;
  before?: Maybe<SpaceWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SpaceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SpaceWhereInput>;
};


export type UserThreadsArgs = {
  after?: Maybe<ThreadWhereUniqueInput>;
  before?: Maybe<ThreadWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type UserUserMetaArgs = {
  after?: Maybe<UserMetaWhereUniqueInput>;
  before?: Maybe<UserMetaWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutUserInput>;
  confirmHash: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutUserInput>;
  followers?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowersInput>;
  forgotHash: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceCreateManyWithoutMembersInput>;
  Message?: Maybe<MessageCreateManyWithoutUserInput>;
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;
  posts?: Maybe<PostCreateManyWithoutUserInput>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  questions?: Maybe<QuestionCreateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationCreateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationCreateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceCreateManyWithoutUserInput>;
  threads?: Maybe<ThreadCreateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed: Scalars['Int'];
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userPassword: Scalars['String'];
  userType: Scalars['Int'];
};

export type UserCreateManyWithoutFollowersInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowersInput>>;
};

export type UserCreateManyWithoutFollowingInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
};

export type UserCreateManyWithoutMemberOfInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutMemberOfInput>>;
};

export type UserCreateManyWithoutThreadsInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutThreadsInput>>;
};

export type UserCreateOneWithoutAnnotationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutAnnotationsInput>;
};

export type UserCreateOneWithoutFavoritesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutFavoritesInput>;
};

export type UserCreateOneWithoutMessageInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutMessageInput>;
};

export type UserCreateOneWithoutNotificationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutNotificationsInput>;
};

export type UserCreateOneWithoutPostsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutPostsInput>;
};

export type UserCreateOneWithoutQuestionsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutQuestionsInput>;
};

export type UserCreateOneWithoutRecievedNotificationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutRecievedNotificationsInput>;
};

export type UserCreateOneWithoutReviewsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutReviewsInput>;
};

export type UserCreateOneWithoutSentNotificationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutSentNotificationsInput>;
};

export type UserCreateOneWithoutSpacesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutSpacesInput>;
};

export type UserCreateWithoutAnnotationsInput = {
  confirmHash: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutUserInput>;
  followers?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowersInput>;
  forgotHash: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceCreateManyWithoutMembersInput>;
  Message?: Maybe<MessageCreateManyWithoutUserInput>;
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;
  posts?: Maybe<PostCreateManyWithoutUserInput>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  questions?: Maybe<QuestionCreateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationCreateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationCreateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceCreateManyWithoutUserInput>;
  threads?: Maybe<ThreadCreateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed: Scalars['Int'];
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userPassword: Scalars['String'];
  userType: Scalars['Int'];
};

export type UserCreateWithoutFavoritesInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutUserInput>;
  confirmHash: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  followers?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowersInput>;
  forgotHash: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceCreateManyWithoutMembersInput>;
  Message?: Maybe<MessageCreateManyWithoutUserInput>;
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;
  posts?: Maybe<PostCreateManyWithoutUserInput>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  questions?: Maybe<QuestionCreateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationCreateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationCreateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceCreateManyWithoutUserInput>;
  threads?: Maybe<ThreadCreateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed: Scalars['Int'];
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userPassword: Scalars['String'];
  userType: Scalars['Int'];
};

export type UserCreateWithoutFollowersInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutUserInput>;
  confirmHash: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutUserInput>;
  following?: Maybe<UserCreateManyWithoutFollowersInput>;
  forgotHash: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceCreateManyWithoutMembersInput>;
  Message?: Maybe<MessageCreateManyWithoutUserInput>;
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;
  posts?: Maybe<PostCreateManyWithoutUserInput>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  questions?: Maybe<QuestionCreateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationCreateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationCreateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceCreateManyWithoutUserInput>;
  threads?: Maybe<ThreadCreateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed: Scalars['Int'];
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userPassword: Scalars['String'];
  userType: Scalars['Int'];
};

export type UserCreateWithoutFollowingInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutUserInput>;
  confirmHash: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutUserInput>;
  followers?: Maybe<UserCreateManyWithoutFollowingInput>;
  forgotHash: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceCreateManyWithoutMembersInput>;
  Message?: Maybe<MessageCreateManyWithoutUserInput>;
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;
  posts?: Maybe<PostCreateManyWithoutUserInput>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  questions?: Maybe<QuestionCreateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationCreateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationCreateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceCreateManyWithoutUserInput>;
  threads?: Maybe<ThreadCreateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed: Scalars['Int'];
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userPassword: Scalars['String'];
  userType: Scalars['Int'];
};

export type UserCreateWithoutMemberOfInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutUserInput>;
  confirmHash: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutUserInput>;
  followers?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowersInput>;
  forgotHash: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  Message?: Maybe<MessageCreateManyWithoutUserInput>;
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;
  posts?: Maybe<PostCreateManyWithoutUserInput>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  questions?: Maybe<QuestionCreateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationCreateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationCreateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceCreateManyWithoutUserInput>;
  threads?: Maybe<ThreadCreateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed: Scalars['Int'];
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userPassword: Scalars['String'];
  userType: Scalars['Int'];
};

export type UserCreateWithoutMessageInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutUserInput>;
  confirmHash: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutUserInput>;
  followers?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowersInput>;
  forgotHash: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceCreateManyWithoutMembersInput>;
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;
  posts?: Maybe<PostCreateManyWithoutUserInput>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  questions?: Maybe<QuestionCreateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationCreateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationCreateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceCreateManyWithoutUserInput>;
  threads?: Maybe<ThreadCreateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed: Scalars['Int'];
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userPassword: Scalars['String'];
  userType: Scalars['Int'];
};

export type UserCreateWithoutNotificationsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutUserInput>;
  confirmHash: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutUserInput>;
  followers?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowersInput>;
  forgotHash: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceCreateManyWithoutMembersInput>;
  Message?: Maybe<MessageCreateManyWithoutUserInput>;
  posts?: Maybe<PostCreateManyWithoutUserInput>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  questions?: Maybe<QuestionCreateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationCreateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationCreateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceCreateManyWithoutUserInput>;
  threads?: Maybe<ThreadCreateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed: Scalars['Int'];
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userPassword: Scalars['String'];
  userType: Scalars['Int'];
};

export type UserCreateWithoutPostsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutUserInput>;
  confirmHash: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutUserInput>;
  followers?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowersInput>;
  forgotHash: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceCreateManyWithoutMembersInput>;
  Message?: Maybe<MessageCreateManyWithoutUserInput>;
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  questions?: Maybe<QuestionCreateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationCreateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationCreateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceCreateManyWithoutUserInput>;
  threads?: Maybe<ThreadCreateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed: Scalars['Int'];
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userPassword: Scalars['String'];
  userType: Scalars['Int'];
};

export type UserCreateWithoutQuestionsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutUserInput>;
  confirmHash: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutUserInput>;
  followers?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowersInput>;
  forgotHash: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceCreateManyWithoutMembersInput>;
  Message?: Maybe<MessageCreateManyWithoutUserInput>;
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;
  posts?: Maybe<PostCreateManyWithoutUserInput>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  recievedNotifications?: Maybe<NotificationCreateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationCreateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceCreateManyWithoutUserInput>;
  threads?: Maybe<ThreadCreateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed: Scalars['Int'];
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userPassword: Scalars['String'];
  userType: Scalars['Int'];
};

export type UserCreateWithoutRecievedNotificationsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutUserInput>;
  confirmHash: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutUserInput>;
  followers?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowersInput>;
  forgotHash: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceCreateManyWithoutMembersInput>;
  Message?: Maybe<MessageCreateManyWithoutUserInput>;
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;
  posts?: Maybe<PostCreateManyWithoutUserInput>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  questions?: Maybe<QuestionCreateManyWithoutUserInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationCreateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceCreateManyWithoutUserInput>;
  threads?: Maybe<ThreadCreateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed: Scalars['Int'];
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userPassword: Scalars['String'];
  userType: Scalars['Int'];
};

export type UserCreateWithoutReviewsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutUserInput>;
  confirmHash: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutUserInput>;
  followers?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowersInput>;
  forgotHash: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceCreateManyWithoutMembersInput>;
  Message?: Maybe<MessageCreateManyWithoutUserInput>;
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;
  posts?: Maybe<PostCreateManyWithoutUserInput>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  questions?: Maybe<QuestionCreateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationCreateManyWithoutReceiverInput>;
  sentNotifications?: Maybe<NotificationCreateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceCreateManyWithoutUserInput>;
  threads?: Maybe<ThreadCreateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed: Scalars['Int'];
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userPassword: Scalars['String'];
  userType: Scalars['Int'];
};

export type UserCreateWithoutSentNotificationsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutUserInput>;
  confirmHash: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutUserInput>;
  followers?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowersInput>;
  forgotHash: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceCreateManyWithoutMembersInput>;
  Message?: Maybe<MessageCreateManyWithoutUserInput>;
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;
  posts?: Maybe<PostCreateManyWithoutUserInput>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  questions?: Maybe<QuestionCreateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationCreateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  spaces?: Maybe<SpaceCreateManyWithoutUserInput>;
  threads?: Maybe<ThreadCreateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed: Scalars['Int'];
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userPassword: Scalars['String'];
  userType: Scalars['Int'];
};

export type UserCreateWithoutSpacesInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutUserInput>;
  confirmHash: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutUserInput>;
  followers?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowersInput>;
  forgotHash: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceCreateManyWithoutMembersInput>;
  Message?: Maybe<MessageCreateManyWithoutUserInput>;
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;
  posts?: Maybe<PostCreateManyWithoutUserInput>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  questions?: Maybe<QuestionCreateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationCreateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationCreateManyWithoutSenderInput>;
  threads?: Maybe<ThreadCreateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed: Scalars['Int'];
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userPassword: Scalars['String'];
  userType: Scalars['Int'];
};

export type UserCreateWithoutThreadsInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutUserInput>;
  confirmHash: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteCreateManyWithoutUserInput>;
  followers?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowersInput>;
  forgotHash: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceCreateManyWithoutMembersInput>;
  Message?: Maybe<MessageCreateManyWithoutUserInput>;
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;
  posts?: Maybe<PostCreateManyWithoutUserInput>;
  privateHash: Scalars['String'];
  publicHash: Scalars['String'];
  questions?: Maybe<QuestionCreateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationCreateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewCreateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationCreateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceCreateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed: Scalars['Int'];
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
  userMeta?: Maybe<UserMetaCreateManyWithoutUserInput>;
  userPassword: Scalars['String'];
  userType: Scalars['Int'];
};

export type UserFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserMeta = {
   __typename?: 'UserMeta';
  id: Scalars['String'];
  metaDeleted: Scalars['Boolean'];
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  user: User;
};

export type UserMetaCreateManyWithoutUserInput = {
  connect?: Maybe<Array<UserMetaWhereUniqueInput>>;
  create?: Maybe<Array<UserMetaCreateWithoutUserInput>>;
};

export type UserMetaCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName: Scalars['String'];
  metaType: Scalars['String'];
  metaValue: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMetaFilter = {
  every?: Maybe<UserMetaWhereInput>;
  none?: Maybe<UserMetaWhereInput>;
  some?: Maybe<UserMetaWhereInput>;
};

export type UserMetaOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  metaDeleted?: Maybe<OrderByArg>;
  metaName?: Maybe<OrderByArg>;
  metaType?: Maybe<OrderByArg>;
  metaValue?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
};

export type UserMetaScalarWhereInput = {
  AND?: Maybe<Array<UserMetaScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<UserMetaScalarWhereInput>>;
  OR?: Maybe<Array<UserMetaScalarWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type UserMetaUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMetaUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<UserMetaWhereUniqueInput>>;
  create?: Maybe<Array<UserMetaCreateWithoutUserInput>>;
  delete?: Maybe<Array<UserMetaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserMetaScalarWhereInput>>;
  disconnect?: Maybe<Array<UserMetaWhereUniqueInput>>;
  set?: Maybe<Array<UserMetaWhereUniqueInput>>;
  update?: Maybe<Array<UserMetaUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<UserMetaUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UserMetaUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserMetaUpdateManyWithWhereNestedInput = {
  data: UserMetaUpdateManyDataInput;
  where: UserMetaScalarWhereInput;
};

export type UserMetaUpdateWithoutUserDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDeleted?: Maybe<Scalars['Boolean']>;
  metaName?: Maybe<Scalars['String']>;
  metaType?: Maybe<Scalars['String']>;
  metaValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type UserMetaWhereInput = {
  AND?: Maybe<Array<UserMetaWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  metaDeleted?: Maybe<BooleanFilter>;
  metaName?: Maybe<StringFilter>;
  metaType?: Maybe<StringFilter>;
  metaValue?: Maybe<StringFilter>;
  NOT?: Maybe<Array<UserMetaWhereInput>>;
  OR?: Maybe<Array<UserMetaWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type UserMetaWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  confirmHash?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  forgotHash?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  privateHash?: Maybe<OrderByArg>;
  publicHash?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  userConfirmed?: Maybe<OrderByArg>;
  userDeleted?: Maybe<OrderByArg>;
  userEmail?: Maybe<OrderByArg>;
  userPassword?: Maybe<OrderByArg>;
  userType?: Maybe<OrderByArg>;
};

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  annotations?: Maybe<AnnotationFilter>;
  confirmHash?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  favorites?: Maybe<FavoriteFilter>;
  followers?: Maybe<UserFilter>;
  following?: Maybe<UserFilter>;
  forgotHash?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  memberOf?: Maybe<SpaceFilter>;
  Message?: Maybe<MessageFilter>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  notifications?: Maybe<NotificationFilter>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  posts?: Maybe<PostFilter>;
  privateHash?: Maybe<StringFilter>;
  publicHash?: Maybe<StringFilter>;
  questions?: Maybe<QuestionFilter>;
  recievedNotifications?: Maybe<NotificationFilter>;
  reviews?: Maybe<ReviewFilter>;
  sentNotifications?: Maybe<NotificationFilter>;
  spaces?: Maybe<SpaceFilter>;
  threads?: Maybe<ThreadFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userConfirmed?: Maybe<IntFilter>;
  userDeleted?: Maybe<BooleanFilter>;
  userEmail?: Maybe<StringFilter>;
  userMeta?: Maybe<UserMetaFilter>;
  userPassword?: Maybe<StringFilter>;
  userType?: Maybe<IntFilter>;
};

export type UserUpdateInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceUpdateManyWithoutMembersInput>;
  Message?: Maybe<MessageUpdateManyWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationUpdateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};

export type UserUpdateManyDataInput = {
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};

export type UserUpdateManyWithoutFollowersInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowersInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
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
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
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
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutMemberOfInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutMemberOfInput>>;
};

export type UserUpdateManyWithoutThreadsInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutThreadsInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutThreadsInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutThreadsInput>>;
};

export type UserUpdateManyWithWhereNestedInput = {
  data: UserUpdateManyDataInput;
  where: UserScalarWhereInput;
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

export type UserUpdateOneRequiredWithoutRecievedNotificationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutRecievedNotificationsInput>;
  update?: Maybe<UserUpdateWithoutRecievedNotificationsDataInput>;
  upsert?: Maybe<UserUpsertWithoutRecievedNotificationsInput>;
};

export type UserUpdateOneRequiredWithoutReviewsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutReviewsInput>;
  update?: Maybe<UserUpdateWithoutReviewsDataInput>;
  upsert?: Maybe<UserUpsertWithoutReviewsInput>;
};

export type UserUpdateOneRequiredWithoutSentNotificationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutSentNotificationsInput>;
  update?: Maybe<UserUpdateWithoutSentNotificationsDataInput>;
  upsert?: Maybe<UserUpsertWithoutSentNotificationsInput>;
};

export type UserUpdateOneRequiredWithoutSpacesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutSpacesInput>;
  update?: Maybe<UserUpdateWithoutSpacesDataInput>;
  upsert?: Maybe<UserUpsertWithoutSpacesInput>;
};

export type UserUpdateOneWithoutNotificationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutNotificationsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutNotificationsDataInput>;
  upsert?: Maybe<UserUpsertWithoutNotificationsInput>;
};

export type UserUpdateWithoutAnnotationsDataInput = {
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceUpdateManyWithoutMembersInput>;
  Message?: Maybe<MessageUpdateManyWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationUpdateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};

export type UserUpdateWithoutFavoritesDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceUpdateManyWithoutMembersInput>;
  Message?: Maybe<MessageUpdateManyWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationUpdateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};

export type UserUpdateWithoutFollowersDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceUpdateManyWithoutMembersInput>;
  Message?: Maybe<MessageUpdateManyWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationUpdateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};

export type UserUpdateWithoutFollowingDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceUpdateManyWithoutMembersInput>;
  Message?: Maybe<MessageUpdateManyWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationUpdateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};

export type UserUpdateWithoutMemberOfDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  Message?: Maybe<MessageUpdateManyWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationUpdateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};

export type UserUpdateWithoutMessageDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceUpdateManyWithoutMembersInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationUpdateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};

export type UserUpdateWithoutNotificationsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceUpdateManyWithoutMembersInput>;
  Message?: Maybe<MessageUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationUpdateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};

export type UserUpdateWithoutPostsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceUpdateManyWithoutMembersInput>;
  Message?: Maybe<MessageUpdateManyWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationUpdateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};

export type UserUpdateWithoutQuestionsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceUpdateManyWithoutMembersInput>;
  Message?: Maybe<MessageUpdateManyWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  recievedNotifications?: Maybe<NotificationUpdateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};

export type UserUpdateWithoutRecievedNotificationsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceUpdateManyWithoutMembersInput>;
  Message?: Maybe<MessageUpdateManyWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};

export type UserUpdateWithoutReviewsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceUpdateManyWithoutMembersInput>;
  Message?: Maybe<MessageUpdateManyWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationUpdateManyWithoutReceiverInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};

export type UserUpdateWithoutSentNotificationsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceUpdateManyWithoutMembersInput>;
  Message?: Maybe<MessageUpdateManyWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationUpdateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  spaces?: Maybe<SpaceUpdateManyWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};

export type UserUpdateWithoutSpacesDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceUpdateManyWithoutMembersInput>;
  Message?: Maybe<MessageUpdateManyWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationUpdateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutSenderInput>;
  threads?: Maybe<ThreadUpdateManyWithoutParticipantsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
};

export type UserUpdateWithoutThreadsDataInput = {
  annotations?: Maybe<AnnotationUpdateManyWithoutUserInput>;
  confirmHash?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowersInput>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  memberOf?: Maybe<SpaceUpdateManyWithoutMembersInput>;
  Message?: Maybe<MessageUpdateManyWithoutUserInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionUpdateManyWithoutUserInput>;
  recievedNotifications?: Maybe<NotificationUpdateManyWithoutReceiverInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutUserInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutSenderInput>;
  spaces?: Maybe<SpaceUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userConfirmed?: Maybe<Scalars['Int']>;
  userDeleted?: Maybe<Scalars['Boolean']>;
  userEmail?: Maybe<Scalars['String']>;
  userMeta?: Maybe<UserMetaUpdateManyWithoutUserInput>;
  userPassword?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['Int']>;
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

export type UserUpdateWithWhereUniqueWithoutThreadsInput = {
  data: UserUpdateWithoutThreadsDataInput;
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

export type UserUpsertWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  update: UserUpdateWithoutPostsDataInput;
};

export type UserUpsertWithoutQuestionsInput = {
  create: UserCreateWithoutQuestionsInput;
  update: UserUpdateWithoutQuestionsDataInput;
};

export type UserUpsertWithoutRecievedNotificationsInput = {
  create: UserCreateWithoutRecievedNotificationsInput;
  update: UserUpdateWithoutRecievedNotificationsDataInput;
};

export type UserUpsertWithoutReviewsInput = {
  create: UserCreateWithoutReviewsInput;
  update: UserUpdateWithoutReviewsDataInput;
};

export type UserUpsertWithoutSentNotificationsInput = {
  create: UserCreateWithoutSentNotificationsInput;
  update: UserUpdateWithoutSentNotificationsDataInput;
};

export type UserUpsertWithoutSpacesInput = {
  create: UserCreateWithoutSpacesInput;
  update: UserUpdateWithoutSpacesDataInput;
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

export type UserUpsertWithWhereUniqueWithoutThreadsInput = {
  create: UserCreateWithoutThreadsInput;
  update: UserUpdateWithoutThreadsDataInput;
  where: UserWhereUniqueInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  annotations?: Maybe<AnnotationFilter>;
  confirmHash?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  favorites?: Maybe<FavoriteFilter>;
  followers?: Maybe<UserFilter>;
  following?: Maybe<UserFilter>;
  forgotHash?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  memberOf?: Maybe<SpaceFilter>;
  Message?: Maybe<MessageFilter>;
  NOT?: Maybe<Array<UserWhereInput>>;
  notifications?: Maybe<NotificationFilter>;
  OR?: Maybe<Array<UserWhereInput>>;
  posts?: Maybe<PostFilter>;
  privateHash?: Maybe<StringFilter>;
  publicHash?: Maybe<StringFilter>;
  questions?: Maybe<QuestionFilter>;
  recievedNotifications?: Maybe<NotificationFilter>;
  reviews?: Maybe<ReviewFilter>;
  sentNotifications?: Maybe<NotificationFilter>;
  spaces?: Maybe<SpaceFilter>;
  threads?: Maybe<ThreadFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userConfirmed?: Maybe<IntFilter>;
  userDeleted?: Maybe<BooleanFilter>;
  userEmail?: Maybe<StringFilter>;
  userMeta?: Maybe<UserMetaFilter>;
  userPassword?: Maybe<StringFilter>;
  userType?: Maybe<IntFilter>;
};

export type UserWhereUniqueInput = {
  confirmHash?: Maybe<Scalars['String']>;
  forgotHash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  privateHash?: Maybe<Scalars['String']>;
  publicHash?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
};

export type DeletePostMutationVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type DeletePostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteOnePost'>
);

export type DeleteSpaceMutationVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type DeleteSpaceMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteOneSpace'>
);

export type DeleteTheadMutationVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type DeleteTheadMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteOneThread'>
);

export type JoinSpaceMutationVariables = {
  userId?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
};


export type JoinSpaceMutation = (
  { __typename?: 'Mutation' }
  & { updateOneUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type LeaveSpaceMutationVariables = {
  userId?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
};


export type LeaveSpaceMutation = (
  { __typename?: 'Mutation' }
  & { updateOneUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type DeleteUserMutationVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteOneUser'>
);

export type AllCategoriesQueryVariables = {};


export type AllCategoriesQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'itemName'>
  )> }
);

export type CategoriesSpacesPostsQueryVariables = {};


export type CategoriesSpacesPostsQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'itemName'>
    & { spaces: Array<(
      { __typename?: 'Space' }
      & Pick<Space, 'id' | 'itemName'>
      & { itemMeta: Array<(
        { __typename?: 'SpaceMeta' }
        & Pick<SpaceMeta, 'id' | 'metaName' | 'metaValue'>
      )>, members: Array<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'userEmail'>
      )>, posts: Array<(
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'itemName' | 'itemUrlSegment'>
        & { itemMeta: Array<(
          { __typename?: 'PostMeta' }
          & Pick<PostMeta, 'id' | 'metaName' | 'metaValue'>
        )> }
      )> }
    )> }
  )> }
);

export type NotificationsQueryVariables = {
  id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


export type NotificationsQuery = (
  { __typename?: 'Query' }
  & { notifications: Array<(
    { __typename?: 'Notification' }
    & Pick<Notification, 'id' | 'itemName' | 'itemContent'>
    & { sender: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'userEmail'>
      & { userMeta: Array<(
        { __typename?: 'UserMeta' }
        & Pick<UserMeta, 'id' | 'metaName' | 'metaValue'>
      )> }
    ), receiver: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'userEmail'>
      & { userMeta: Array<(
        { __typename?: 'UserMeta' }
        & Pick<UserMeta, 'id' | 'metaName' | 'metaValue'>
      )> }
    ), space: (
      { __typename?: 'Space' }
      & Pick<Space, 'id' | 'itemName'>
      & { itemMeta: Array<(
        { __typename?: 'SpaceMeta' }
        & Pick<SpaceMeta, 'id' | 'metaName' | 'metaValue'>
      )> }
    ), post: (
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'itemName' | 'itemUrlSegment'>
      & { itemMeta: Array<(
        { __typename?: 'PostMeta' }
        & Pick<PostMeta, 'id' | 'metaName' | 'metaValue'>
      )> }
    ), itemMeta: Array<(
      { __typename?: 'NotificationMeta' }
      & Pick<NotificationMeta, 'id' | 'metaName' | 'metaValue'>
    )> }
  )> }
);

export type PostFragmentFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'itemType' | 'itemStatus' | 'itemUrlSegment' | 'itemMimeType' | 'itemName' | 'itemContent' | 'itemDeleted' | 'createdAt' | 'updatedAt'>
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'userEmail'>
  ), space: (
    { __typename?: 'Space' }
    & Pick<Space, 'id' | 'itemName'>
  ), itemMeta: Array<(
    { __typename?: 'PostMeta' }
    & Pick<PostMeta, 'id' | 'metaName' | 'metaValue'>
  )>, tags: Array<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'itemName'>
  )>, favorites: Array<(
    { __typename?: 'Favorite' }
    & Pick<Favorite, 'id' | 'itemName'>
  )>, reviews: Array<(
    { __typename?: 'Review' }
    & Pick<Review, 'id' | 'itemName'>
  )>, annotations: Array<(
    { __typename?: 'Annotation' }
    & Pick<Annotation, 'id' | 'itemName'>
  )>, questions: Array<(
    { __typename?: 'Question' }
    & Pick<Question, 'id' | 'itemName'>
  )> }
);

export type PostsQueryVariables = {
  search?: Maybe<Scalars['String']>;
};


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & PostFragmentFragment
  )> }
);

export type PostQueryVariables = {
  postId?: Maybe<Scalars['String']>;
};


export type PostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & PostFragmentFragment
  )> }
);

export type SpaceFragmentFragment = (
  { __typename?: 'Space' }
  & Pick<Space, 'id' | 'itemName' | 'itemContent'>
  & { itemMeta: Array<(
    { __typename?: 'SpaceMeta' }
    & Pick<SpaceMeta, 'id' | 'metaName' | 'metaValue'>
  )>, posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'itemName' | 'itemUrlSegment'>
    & { itemMeta: Array<(
      { __typename?: 'PostMeta' }
      & Pick<PostMeta, 'id' | 'metaName' | 'metaValue'>
    )> }
  )>, members: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'userEmail'>
  )> }
);

export type AllSpacesQueryVariables = {};


export type AllSpacesQuery = (
  { __typename?: 'Query' }
  & { spaces: Array<(
    { __typename?: 'Space' }
    & SpaceFragmentFragment
  )> }
);

export type SpacesQueryVariables = {
  search?: Maybe<Scalars['String']>;
};


export type SpacesQuery = (
  { __typename?: 'Query' }
  & { spaces: Array<(
    { __typename?: 'Space' }
    & SpaceFragmentFragment
  )> }
);

export type AllTagsQueryVariables = {};


export type AllTagsQuery = (
  { __typename?: 'Query' }
  & { tags: Array<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'itemName'>
  )> }
);

export type ThreadsQueryVariables = {};


export type ThreadsQuery = (
  { __typename?: 'Query' }
  & { threads: Array<(
    { __typename?: 'Thread' }
    & Pick<Thread, 'id' | 'itemName' | 'itemContent'>
    & { participants: Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'userEmail'>
    )>, itemMeta: Array<(
      { __typename?: 'ThreadMeta' }
      & Pick<ThreadMeta, 'id' | 'metaName' | 'metaValue'>
    )>, messages: Array<(
      { __typename?: 'Message' }
      & Pick<Message, 'id' | 'itemName' | 'itemContent'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'userEmail'>
      ), itemMeta: Array<(
        { __typename?: 'MessageMeta' }
        & Pick<MessageMeta, 'id' | 'metaName' | 'metaValue'>
      )> }
    )> }
  )> }
);

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'userType' | 'userEmail' | 'userConfirmed' | 'createdAt' | 'updatedAt'>
  & { userMeta: Array<(
    { __typename?: 'UserMeta' }
    & Pick<UserMeta, 'id' | 'metaName' | 'metaValue'>
  )>, posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'itemName' | 'itemContent'>
  )>, spaces: Array<(
    { __typename?: 'Space' }
    & Pick<Space, 'id' | 'itemName' | 'itemContent'>
  )>, favorites: Array<(
    { __typename?: 'Favorite' }
    & Pick<Favorite, 'id' | 'itemName' | 'itemContent'>
  )>, reviews: Array<(
    { __typename?: 'Review' }
    & Pick<Review, 'id' | 'itemName' | 'itemContent'>
  )>, annotations: Array<(
    { __typename?: 'Annotation' }
    & Pick<Annotation, 'id' | 'itemName' | 'itemContent'>
  )>, questions: Array<(
    { __typename?: 'Question' }
    & Pick<Question, 'id' | 'itemName' | 'itemContent'>
  )>, threads: Array<(
    { __typename?: 'Thread' }
    & Pick<Thread, 'id' | 'itemName' | 'itemContent'>
  )>, notifications: Array<(
    { __typename?: 'Notification' }
    & Pick<Notification, 'id' | 'itemName' | 'itemContent'>
  )>, following: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'userEmail'>
  )>, followers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'userEmail'>
  )>, sentNotifications: Array<(
    { __typename?: 'Notification' }
    & Pick<Notification, 'id' | 'itemName' | 'itemContent'>
  )>, recievedNotifications: Array<(
    { __typename?: 'Notification' }
    & Pick<Notification, 'id' | 'itemName' | 'itemContent'>
  )> }
);

export type FindUserQueryVariables = {
  id?: Maybe<Scalars['String']>;
};


export type FindUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

export type PrivateUserQueryVariables = {
  id?: Maybe<Scalars['String']>;
};


export type PrivateUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

export type UserJoinedSpacesQueryVariables = {
  id?: Maybe<Scalars['String']>;
};


export type UserJoinedSpacesQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & { memberOf: Array<(
      { __typename?: 'Space' }
      & Pick<Space, 'id' | 'itemName'>
      & { itemMeta: Array<(
        { __typename?: 'SpaceMeta' }
        & Pick<SpaceMeta, 'id' | 'metaName' | 'metaValue'>
      )>, members: Array<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'userEmail'>
      )>, posts: Array<(
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'itemName' | 'itemUrlSegment'>
        & { itemMeta: Array<(
          { __typename?: 'PostMeta' }
          & Pick<PostMeta, 'id' | 'metaName' | 'metaValue'>
        )> }
      )> }
    )> }
    & UserFragmentFragment
  )> }
);

export type JoinedSpacesPostsQueryVariables = {
  userId?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['String']>;
};


export type JoinedSpacesPostsQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & { memberOfPosts?: Maybe<Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'itemName'>
      & { itemMeta: Array<(
        { __typename?: 'PostMeta' }
        & Pick<PostMeta, 'id' | 'metaName' | 'metaValue'>
      )> }
    )>> }
    & UserFragmentFragment
  )> }
);

export type SearchUserMetaQueryVariables = {};


export type SearchUserMetaQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'userEmail'>
  )> }
);
