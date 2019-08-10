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

export type AnnotationMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type AnnotationWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
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

export type FavoriteWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
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

export type MessageMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
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

export type NotificationMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
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
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateOneWithoutUserInput;
};

export type PodCreateManyWithoutPodsInput = {
  connect?: Maybe<Array<PodWhereUniqueInput>>;
  create?: Maybe<Array<PodCreateWithoutUserInput>>;
};

export type PodCreateOneWithoutPodInput = {
  connect?: Maybe<PodWhereUniqueInput>;
  create?: Maybe<PodCreateWithoutPostsInput>;
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

export type PodMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
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

export type PostMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
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

export type QuestionMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
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

export type ReviewMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type ReviewWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
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

export type ThreadMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
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
  notifications?: Maybe<Array<Notification>>;
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

export type UserNotificationsArgs = {
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

export type UserCreateOneWithoutUserInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutPodsInput>;
};

export type UserCreateWithoutFollowersInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  confirmHash: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
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

export type UserCreateWithoutFollowingInput = {
  annotations?: Maybe<AnnotationCreateManyWithoutAnnotationsInput>;
  confirmHash: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  favorites?: Maybe<FavoriteCreateManyWithoutFavoritesInput>;
  followers?: Maybe<UserCreateManyWithoutFollowersInput>;
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

export type UserCreateWithoutPodsInput = {
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

export type UserMetaWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type UserWhereUniqueInput = {
  confirmHash?: Maybe<Scalars["String"]>;
  forgotHash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  privateHash?: Maybe<Scalars["String"]>;
  publicHash?: Maybe<Scalars["String"]>;
  userEmail?: Maybe<Scalars["String"]>;
};
export type AllCategoriesQueryVariables = {};

export type AllCategoriesQuery = { __typename?: "Query" } & {
  findManyCategory: Maybe<
    Array<{ __typename?: "Category" } & Pick<Category, "id" | "itemName">>
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
