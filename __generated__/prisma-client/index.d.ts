import {
  DMMF,
  DMMFClass,
  Engine,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
} from './runtime';

export { PrismaClientKnownRequestError }
export { PrismaClientUnknownRequestError }
export { PrismaClientRustPanicError }
export { PrismaClientInitializationError }
export { PrismaClientValidationError }

/**
 * Query Engine version: 2accb9c7eacdc984874eaeb63377fe705dfd3203
 * Prisma Client JS version: 2.0.0-beta.1
 */
export declare type PrismaVersion = {
  client: string
}

export declare const prismaVersion: PrismaVersion 

/**
 * Utility Types
 */

declare type SelectAndInclude = {
  select: any
  include: any
}

declare type HasSelect = {
  select: any
}

declare type HasInclude = {
  include: any
}


declare type CheckSelect<T, S, U> = T extends SelectAndInclude
  ? 'Please either choose `select` or `include`'
  : T extends HasSelect
  ? U
  : T extends HasInclude
  ? U
  : S

/**
 * Get the type of the value, that the Promise holds.
 */
export declare type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

/**
 * Get the return type of a function which returns a Promise.
 */
export declare type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>


export declare type Enumerable<T> = T | Array<T>;

export declare type TrueKeys<T> = {
  [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export declare type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};
declare class PrismaClientFetcher {
  private readonly prisma;
  private readonly debug;
  private readonly hooks?;
  constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
  request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string, collectTimestamps?: any): Promise<T>;
  sanitizeMessage(message: string): string;
  protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
}


/**
 * Client
**/


export type Datasources = {
  db?: string
}

export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

export interface PrismaClientOptions {
  datasources?: Datasources

  /**
   * @default "pretty"
   */
  errorFormat?: ErrorFormat

  log?: Array<LogLevel | LogDefinition>

  /**
   * You probably don't want to use this. `__internal` is used by internal tooling.
   */
  __internal?: {
    debug?: boolean
    hooks?: Hooks
    engine?: {
      cwd?: string
      binaryPath?: string
    }
    measurePerformance?: boolean
  }

  /**
   * Useful for pgbouncer
   */
  forceTransactions?: boolean
}

export type Hooks = {
  beforeRequest?: (options: {query: string, path: string[], rootField?: string, typeName?: string, document: any}) => any
}

/* Types for Logging */
export type LogLevel = 'info' | 'query' | 'warn'
export type LogDefinition = {
  level: LogLevel
  emit: 'stdout' | 'event'
}

export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
export type GetEvents<T extends Array<LogLevel | LogDefinition>> = GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]>

export type QueryEvent = {
  timestamp: Date
  query: string
  params: string
  duration: number
  target: string
}

export type LogEvent = {
  timestamp: Date
  message: string
  target: string
}
/* End Types for Logging */

// tested in getLogLevel.test.ts
export declare function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md).
 */
export declare class PrismaClient<T extends PrismaClientOptions = {}, U = keyof T extends 'log' ? T['log'] extends Array<LogLevel | LogDefinition> ? GetEvents<T['log']> : never : never> {
  /**
   * @private
   */
  private fetcher;
  /**
   * @private
   */
  private readonly dmmf;
  /**
   * @private
   */
  private connectionPromise?;
  /**
   * @private
   */
  private disconnectionPromise?;
  /**
   * @private
   */
  private readonly engineConfig;
  /**
   * @private
   */
  private readonly measurePerformance;
  /**
   * @private
   */
  private engine: Engine;
  /**
   * @private
   */
  private errorFormat: ErrorFormat;

  /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md).
   */
  constructor(optionsArg?: T);
  on<V extends U>(eventType: V, callback: V extends never ? never : (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * Connect with the database
   */
  connect(): Promise<void>;
  /**
   * @private
   */
  private runDisconnect;
  /**
   * Disconnect from the database
   */
  disconnect(): Promise<any>;
  /**
   * Makes a raw query
   * @example
   * ```
   * // Fetch all entries from the `User` table
   * const result = await prisma.raw`SELECT * FROM User;`
   * // Or
   * const result = await prisma.raw('SELECT * FROM User;')
   * 
   * // With parameters use prisma.raw``, values will be escaped automatically
   * const userId = '1'
   * const result = await prisma.raw`SELECT * FROM User WHERE id = ${userId};`
  * ```
  * 
  * Read more in our [docs](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md#raw-database-access).
  */
  raw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<T>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): UserDelegate;

  /**
   * `prisma.userMeta`: Exposes CRUD operations for the **UserMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMetas
    * const userMetas = await prisma.userMeta.findMany()
    * ```
    */
  get userMeta(): UserMetaDelegate;

  /**
   * `prisma.pod`: Exposes CRUD operations for the **Pod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pods
    * const pods = await prisma.pod.findMany()
    * ```
    */
  get pod(): PodDelegate;

  /**
   * `prisma.podMeta`: Exposes CRUD operations for the **PodMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PodMetas
    * const podMetas = await prisma.podMeta.findMany()
    * ```
    */
  get podMeta(): PodMetaDelegate;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): PostDelegate;

  /**
   * `prisma.postMeta`: Exposes CRUD operations for the **PostMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostMetas
    * const postMetas = await prisma.postMeta.findMany()
    * ```
    */
  get postMeta(): PostMetaDelegate;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): ReviewDelegate;

  /**
   * `prisma.reviewMeta`: Exposes CRUD operations for the **ReviewMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewMetas
    * const reviewMetas = await prisma.reviewMeta.findMany()
    * ```
    */
  get reviewMeta(): ReviewMetaDelegate;

  /**
   * `prisma.annotation`: Exposes CRUD operations for the **Annotation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Annotations
    * const annotations = await prisma.annotation.findMany()
    * ```
    */
  get annotation(): AnnotationDelegate;

  /**
   * `prisma.annotationMeta`: Exposes CRUD operations for the **AnnotationMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnnotationMetas
    * const annotationMetas = await prisma.annotationMeta.findMany()
    * ```
    */
  get annotationMeta(): AnnotationMetaDelegate;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): QuestionDelegate;

  /**
   * `prisma.questionMeta`: Exposes CRUD operations for the **QuestionMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionMetas
    * const questionMetas = await prisma.questionMeta.findMany()
    * ```
    */
  get questionMeta(): QuestionMetaDelegate;

  /**
   * `prisma.thread`: Exposes CRUD operations for the **Thread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Threads
    * const threads = await prisma.thread.findMany()
    * ```
    */
  get thread(): ThreadDelegate;

  /**
   * `prisma.threadMeta`: Exposes CRUD operations for the **ThreadMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ThreadMetas
    * const threadMetas = await prisma.threadMeta.findMany()
    * ```
    */
  get threadMeta(): ThreadMetaDelegate;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): MessageDelegate;

  /**
   * `prisma.messageMeta`: Exposes CRUD operations for the **MessageMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageMetas
    * const messageMetas = await prisma.messageMeta.findMany()
    * ```
    */
  get messageMeta(): MessageMetaDelegate;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): NotificationDelegate;

  /**
   * `prisma.notificationMeta`: Exposes CRUD operations for the **NotificationMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationMetas
    * const notificationMetas = await prisma.notificationMeta.findMany()
    * ```
    */
  get notificationMeta(): NotificationMetaDelegate;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): FavoriteDelegate;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): TagDelegate;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): CategoryDelegate;
}



/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export declare const OrderByArg: {
  asc: 'asc',
  desc: 'desc'
};

export declare type OrderByArg = (typeof OrderByArg)[keyof typeof OrderByArg]



/**
 * Model User
 */

export type User = {
  id: string
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type UserSelect = {
  id?: boolean
  userType?: boolean
  userEmail?: boolean
  userPassword?: boolean
  publicHash?: boolean
  privateHash?: boolean
  confirmHash?: boolean
  forgotHash?: boolean
  userConfirmed?: boolean
  userDeleted?: boolean
  userMeta?: boolean | FindManyUserMetaArgs
  posts?: boolean | FindManyPostArgs
  pods?: boolean | FindManyPodArgs
  memberOf?: boolean | FindManyPodArgs
  favorites?: boolean | FindManyFavoriteArgs
  reviews?: boolean | FindManyReviewArgs
  annotations?: boolean | FindManyAnnotationArgs
  questions?: boolean | FindManyQuestionArgs
  threads?: boolean | FindManyThreadArgs
  notifications?: boolean | FindManyNotificationArgs
  following?: boolean | FindManyUserArgs
  followers?: boolean | FindManyUserArgs
  sentNotifications?: boolean | NotificationArgs
  recievedNotifications?: boolean | NotificationArgs
  createdAt?: boolean
  updatedAt?: boolean
  messages?: boolean | FindManyMessageArgs
}

export type UserInclude = {
  userMeta?: boolean | FindManyUserMetaArgs
  posts?: boolean | FindManyPostArgs
  pods?: boolean | FindManyPodArgs
  memberOf?: boolean | FindManyPodArgs
  favorites?: boolean | FindManyFavoriteArgs
  reviews?: boolean | FindManyReviewArgs
  annotations?: boolean | FindManyAnnotationArgs
  questions?: boolean | FindManyQuestionArgs
  threads?: boolean | FindManyThreadArgs
  notifications?: boolean | FindManyNotificationArgs
  following?: boolean | FindManyUserArgs
  followers?: boolean | FindManyUserArgs
  sentNotifications?: boolean | NotificationArgs
  recievedNotifications?: boolean | NotificationArgs
  messages?: boolean | FindManyMessageArgs
}

export type UserGetPayload<
  S extends boolean | null | undefined | UserArgs,
  U = keyof S
> = S extends true
  ? User
  : S extends undefined
  ? never
  : S extends UserArgs
  ? 'include' extends U
    ? User  & {
      [P in TrueKeys<S['include']>]:
      P extends 'userMeta'
      ? Array<UserMetaGetPayload<S['include'][P]>> :
      P extends 'posts'
      ? Array<PostGetPayload<S['include'][P]>> :
      P extends 'pods'
      ? Array<PodGetPayload<S['include'][P]>> :
      P extends 'memberOf'
      ? Array<PodGetPayload<S['include'][P]>> :
      P extends 'favorites'
      ? Array<FavoriteGetPayload<S['include'][P]>> :
      P extends 'reviews'
      ? Array<ReviewGetPayload<S['include'][P]>> :
      P extends 'annotations'
      ? Array<AnnotationGetPayload<S['include'][P]>> :
      P extends 'questions'
      ? Array<QuestionGetPayload<S['include'][P]>> :
      P extends 'threads'
      ? Array<ThreadGetPayload<S['include'][P]>> :
      P extends 'notifications'
      ? Array<NotificationGetPayload<S['include'][P]>> :
      P extends 'following'
      ? Array<UserGetPayload<S['include'][P]>> :
      P extends 'followers'
      ? Array<UserGetPayload<S['include'][P]>> :
      P extends 'sentNotifications'
      ? NotificationGetPayload<S['include'][P]> | null :
      P extends 'recievedNotifications'
      ? NotificationGetPayload<S['include'][P]> | null :
      P extends 'messages'
      ? Array<MessageGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof User ? User[P]
: 
      P extends 'userMeta'
      ? Array<UserMetaGetPayload<S['select'][P]>> :
      P extends 'posts'
      ? Array<PostGetPayload<S['select'][P]>> :
      P extends 'pods'
      ? Array<PodGetPayload<S['select'][P]>> :
      P extends 'memberOf'
      ? Array<PodGetPayload<S['select'][P]>> :
      P extends 'favorites'
      ? Array<FavoriteGetPayload<S['select'][P]>> :
      P extends 'reviews'
      ? Array<ReviewGetPayload<S['select'][P]>> :
      P extends 'annotations'
      ? Array<AnnotationGetPayload<S['select'][P]>> :
      P extends 'questions'
      ? Array<QuestionGetPayload<S['select'][P]>> :
      P extends 'threads'
      ? Array<ThreadGetPayload<S['select'][P]>> :
      P extends 'notifications'
      ? Array<NotificationGetPayload<S['select'][P]>> :
      P extends 'following'
      ? Array<UserGetPayload<S['select'][P]>> :
      P extends 'followers'
      ? Array<UserGetPayload<S['select'][P]>> :
      P extends 'sentNotifications'
      ? NotificationGetPayload<S['select'][P]> | null :
      P extends 'recievedNotifications'
      ? NotificationGetPayload<S['select'][P]> | null :
      P extends 'messages'
      ? Array<MessageGetPayload<S['select'][P]>> : never
    }
  : User
: User


export interface UserDelegate {
  /**
   * Find zero or one User.
   * @param {FindOneUserArgs} args - Arguments to find a User
   * @example
   * // Get one User
   * const user = await prisma.user.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneUserArgs>(
    args: Subset<T, FindOneUserArgs>
  ): CheckSelect<T, UserClient<User | null>, UserClient<UserGetPayload<T> | null>>
  /**
   * Find zero or more Users.
   * @param {FindManyUserArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Users
   * const users = await prisma.user.findMany()
   * 
   * // Get first 10 Users
   * const users = await prisma.user.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyUserArgs>(
    args?: Subset<T, FindManyUserArgs>
  ): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>
  /**
   * Create a User.
   * @param {UserCreateArgs} args - Arguments to create a User.
   * @example
   * // Create one User
   * const user = await prisma.user.create({
   *   data: {
   *     // ... data to create a User
   *   }
   * })
   * 
  **/
  create<T extends UserCreateArgs>(
    args: Subset<T, UserCreateArgs>
  ): CheckSelect<T, UserClient<User>, UserClient<UserGetPayload<T>>>
  /**
   * Delete a User.
   * @param {UserDeleteArgs} args - Arguments to delete one User.
   * @example
   * // Delete one User
   * const user = await prisma.user.delete({
   *   where: {
   *     // ... filter to delete one User
   *   }
   * })
   * 
  **/
  delete<T extends UserDeleteArgs>(
    args: Subset<T, UserDeleteArgs>
  ): CheckSelect<T, UserClient<User>, UserClient<UserGetPayload<T>>>
  /**
   * Update one User.
   * @param {UserUpdateArgs} args - Arguments to update one User.
   * @example
   * // Update one User
   * const user = await prisma.user.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends UserUpdateArgs>(
    args: Subset<T, UserUpdateArgs>
  ): CheckSelect<T, UserClient<User>, UserClient<UserGetPayload<T>>>
  /**
   * Delete zero or more Users.
   * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
   * @example
   * // Delete a few Users
   * const { count } = await prisma.user.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends UserDeleteManyArgs>(
    args: Subset<T, UserDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Users.
   * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Users
   * const user = await prisma.user.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends UserUpdateManyArgs>(
    args: Subset<T, UserUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one User.
   * @param {UserUpsertArgs} args - Arguments to update or create a User.
   * @example
   * // Update or create a User
   * const user = await prisma.user.upsert({
   *   create: {
   *     // ... data to create a User
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the User we want to update
   *   }
   * })
  **/
  upsert<T extends UserUpsertArgs>(
    args: Subset<T, UserUpsertArgs>
  ): CheckSelect<T, UserClient<User>, UserClient<UserGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class UserClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  userMeta<T extends FindManyUserMetaArgs = {}>(args?: Subset<T, FindManyUserMetaArgs>): CheckSelect<T, Promise<Array<UserMeta>>, Promise<Array<UserMetaGetPayload<T>>>>;

  posts<T extends FindManyPostArgs = {}>(args?: Subset<T, FindManyPostArgs>): CheckSelect<T, Promise<Array<Post>>, Promise<Array<PostGetPayload<T>>>>;

  pods<T extends FindManyPodArgs = {}>(args?: Subset<T, FindManyPodArgs>): CheckSelect<T, Promise<Array<Pod>>, Promise<Array<PodGetPayload<T>>>>;

  memberOf<T extends FindManyPodArgs = {}>(args?: Subset<T, FindManyPodArgs>): CheckSelect<T, Promise<Array<Pod>>, Promise<Array<PodGetPayload<T>>>>;

  favorites<T extends FindManyFavoriteArgs = {}>(args?: Subset<T, FindManyFavoriteArgs>): CheckSelect<T, Promise<Array<Favorite>>, Promise<Array<FavoriteGetPayload<T>>>>;

  reviews<T extends FindManyReviewArgs = {}>(args?: Subset<T, FindManyReviewArgs>): CheckSelect<T, Promise<Array<Review>>, Promise<Array<ReviewGetPayload<T>>>>;

  annotations<T extends FindManyAnnotationArgs = {}>(args?: Subset<T, FindManyAnnotationArgs>): CheckSelect<T, Promise<Array<Annotation>>, Promise<Array<AnnotationGetPayload<T>>>>;

  questions<T extends FindManyQuestionArgs = {}>(args?: Subset<T, FindManyQuestionArgs>): CheckSelect<T, Promise<Array<Question>>, Promise<Array<QuestionGetPayload<T>>>>;

  threads<T extends FindManyThreadArgs = {}>(args?: Subset<T, FindManyThreadArgs>): CheckSelect<T, Promise<Array<Thread>>, Promise<Array<ThreadGetPayload<T>>>>;

  notifications<T extends FindManyNotificationArgs = {}>(args?: Subset<T, FindManyNotificationArgs>): CheckSelect<T, Promise<Array<Notification>>, Promise<Array<NotificationGetPayload<T>>>>;

  following<T extends FindManyUserArgs = {}>(args?: Subset<T, FindManyUserArgs>): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>;

  followers<T extends FindManyUserArgs = {}>(args?: Subset<T, FindManyUserArgs>): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>;

  sentNotifications<T extends NotificationArgs = {}>(args?: Subset<T, NotificationArgs>): CheckSelect<T, NotificationClient<Notification | null>, NotificationClient<NotificationGetPayload<T> | null>>;

  recievedNotifications<T extends NotificationArgs = {}>(args?: Subset<T, NotificationArgs>): CheckSelect<T, NotificationClient<Notification | null>, NotificationClient<NotificationGetPayload<T> | null>>;

  messages<T extends FindManyMessageArgs = {}>(args?: Subset<T, FindManyMessageArgs>): CheckSelect<T, Promise<Array<Message>>, Promise<Array<MessageGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * User findOne
 */
export type FindOneUserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * Filter, which User to fetch.
  **/
  where: UserWhereUniqueInput
}


/**
 * User findMany
 */
export type FindManyUserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * Filter, which Users to fetch.
  **/
  where?: UserWhereInput | null
  /**
   * Determine the order of the Users to fetch.
  **/
  orderBy?: UserOrderByInput | null
  /**
   * Skip the first `n` Users.
  **/
  skip?: number | null
  /**
   * Get all Users that come after the User you provide with the current order.
  **/
  after?: UserWhereUniqueInput | null
  /**
   * Get all Users that come before the User you provide with the current order.
  **/
  before?: UserWhereUniqueInput | null
  /**
   * Get the first `n` Users.
  **/
  first?: number | null
  /**
   * Get the last `n` Users.
  **/
  last?: number | null
}


/**
 * User create
 */
export type UserCreateArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * The data needed to create a User.
  **/
  data: UserCreateInput
}


/**
 * User update
 */
export type UserUpdateArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * The data needed to update a User.
  **/
  data: UserUpdateInput
  /**
   * Choose, which User to update.
  **/
  where: UserWhereUniqueInput
}


/**
 * User updateMany
 */
export type UserUpdateManyArgs = {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput | null
}


/**
 * User upsert
 */
export type UserUpsertArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * The filter to search for the User to update in case it exists.
  **/
  where: UserWhereUniqueInput
  /**
   * In case the User found by the `where` argument doesn't exist, create a new User with this data.
  **/
  create: UserCreateInput
  /**
   * In case the User was found with the provided `where` argument, update it with this data.
  **/
  update: UserUpdateInput
}


/**
 * User delete
 */
export type UserDeleteArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * Filter which User to delete.
  **/
  where: UserWhereUniqueInput
}


/**
 * User deleteMany
 */
export type UserDeleteManyArgs = {
  where?: UserWhereInput | null
}


/**
 * User without action
 */
export type UserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
}



/**
 * Model UserMeta
 */

export type UserMeta = {
  id: string
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type UserMetaSelect = {
  id?: boolean
  user?: boolean | UserArgs
  metaType?: boolean
  metaName?: boolean
  metaValue?: boolean
  metaDeleted?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type UserMetaInclude = {
  user?: boolean | UserArgs
}

export type UserMetaGetPayload<
  S extends boolean | null | undefined | UserMetaArgs,
  U = keyof S
> = S extends true
  ? UserMeta
  : S extends undefined
  ? never
  : S extends UserMetaArgs
  ? 'include' extends U
    ? UserMeta  & {
      [P in TrueKeys<S['include']>]:
      P extends 'user'
      ? UserGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof UserMeta ? UserMeta[P]
: 
      P extends 'user'
      ? UserGetPayload<S['select'][P]> : never
    }
  : UserMeta
: UserMeta


export interface UserMetaDelegate {
  /**
   * Find zero or one UserMeta.
   * @param {FindOneUserMetaArgs} args - Arguments to find a UserMeta
   * @example
   * // Get one UserMeta
   * const userMeta = await prisma.userMeta.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneUserMetaArgs>(
    args: Subset<T, FindOneUserMetaArgs>
  ): CheckSelect<T, UserMetaClient<UserMeta | null>, UserMetaClient<UserMetaGetPayload<T> | null>>
  /**
   * Find zero or more UserMetas.
   * @param {FindManyUserMetaArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all UserMetas
   * const userMetas = await prisma.userMeta.findMany()
   * 
   * // Get first 10 UserMetas
   * const userMetas = await prisma.userMeta.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const userMetaWithIdOnly = await prisma.userMeta.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyUserMetaArgs>(
    args?: Subset<T, FindManyUserMetaArgs>
  ): CheckSelect<T, Promise<Array<UserMeta>>, Promise<Array<UserMetaGetPayload<T>>>>
  /**
   * Create a UserMeta.
   * @param {UserMetaCreateArgs} args - Arguments to create a UserMeta.
   * @example
   * // Create one UserMeta
   * const user = await prisma.userMeta.create({
   *   data: {
   *     // ... data to create a UserMeta
   *   }
   * })
   * 
  **/
  create<T extends UserMetaCreateArgs>(
    args: Subset<T, UserMetaCreateArgs>
  ): CheckSelect<T, UserMetaClient<UserMeta>, UserMetaClient<UserMetaGetPayload<T>>>
  /**
   * Delete a UserMeta.
   * @param {UserMetaDeleteArgs} args - Arguments to delete one UserMeta.
   * @example
   * // Delete one UserMeta
   * const user = await prisma.userMeta.delete({
   *   where: {
   *     // ... filter to delete one UserMeta
   *   }
   * })
   * 
  **/
  delete<T extends UserMetaDeleteArgs>(
    args: Subset<T, UserMetaDeleteArgs>
  ): CheckSelect<T, UserMetaClient<UserMeta>, UserMetaClient<UserMetaGetPayload<T>>>
  /**
   * Update one UserMeta.
   * @param {UserMetaUpdateArgs} args - Arguments to update one UserMeta.
   * @example
   * // Update one UserMeta
   * const userMeta = await prisma.userMeta.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends UserMetaUpdateArgs>(
    args: Subset<T, UserMetaUpdateArgs>
  ): CheckSelect<T, UserMetaClient<UserMeta>, UserMetaClient<UserMetaGetPayload<T>>>
  /**
   * Delete zero or more UserMetas.
   * @param {UserMetaDeleteManyArgs} args - Arguments to filter UserMetas to delete.
   * @example
   * // Delete a few UserMetas
   * const { count } = await prisma.userMeta.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends UserMetaDeleteManyArgs>(
    args: Subset<T, UserMetaDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more UserMetas.
   * @param {UserMetaUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many UserMetas
   * const userMeta = await prisma.userMeta.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends UserMetaUpdateManyArgs>(
    args: Subset<T, UserMetaUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one UserMeta.
   * @param {UserMetaUpsertArgs} args - Arguments to update or create a UserMeta.
   * @example
   * // Update or create a UserMeta
   * const userMeta = await prisma.userMeta.upsert({
   *   create: {
   *     // ... data to create a UserMeta
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the UserMeta we want to update
   *   }
   * })
  **/
  upsert<T extends UserMetaUpsertArgs>(
    args: Subset<T, UserMetaUpsertArgs>
  ): CheckSelect<T, UserMetaClient<UserMeta>, UserMetaClient<UserMetaGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class UserMetaClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, UserClient<User | null>, UserClient<UserGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * UserMeta findOne
 */
export type FindOneUserMetaArgs = {
  /**
   * Select specific fields to fetch from the UserMeta
  **/
  select?: UserMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserMetaInclude | null
  /**
   * Filter, which UserMeta to fetch.
  **/
  where: UserMetaWhereUniqueInput
}


/**
 * UserMeta findMany
 */
export type FindManyUserMetaArgs = {
  /**
   * Select specific fields to fetch from the UserMeta
  **/
  select?: UserMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserMetaInclude | null
  /**
   * Filter, which UserMetas to fetch.
  **/
  where?: UserMetaWhereInput | null
  /**
   * Determine the order of the UserMetas to fetch.
  **/
  orderBy?: UserMetaOrderByInput | null
  /**
   * Skip the first `n` UserMetas.
  **/
  skip?: number | null
  /**
   * Get all UserMetas that come after the UserMeta you provide with the current order.
  **/
  after?: UserMetaWhereUniqueInput | null
  /**
   * Get all UserMetas that come before the UserMeta you provide with the current order.
  **/
  before?: UserMetaWhereUniqueInput | null
  /**
   * Get the first `n` UserMetas.
  **/
  first?: number | null
  /**
   * Get the last `n` UserMetas.
  **/
  last?: number | null
}


/**
 * UserMeta create
 */
export type UserMetaCreateArgs = {
  /**
   * Select specific fields to fetch from the UserMeta
  **/
  select?: UserMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserMetaInclude | null
  /**
   * The data needed to create a UserMeta.
  **/
  data: UserMetaCreateInput
}


/**
 * UserMeta update
 */
export type UserMetaUpdateArgs = {
  /**
   * Select specific fields to fetch from the UserMeta
  **/
  select?: UserMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserMetaInclude | null
  /**
   * The data needed to update a UserMeta.
  **/
  data: UserMetaUpdateInput
  /**
   * Choose, which UserMeta to update.
  **/
  where: UserMetaWhereUniqueInput
}


/**
 * UserMeta updateMany
 */
export type UserMetaUpdateManyArgs = {
  data: UserMetaUpdateManyMutationInput
  where?: UserMetaWhereInput | null
}


/**
 * UserMeta upsert
 */
export type UserMetaUpsertArgs = {
  /**
   * Select specific fields to fetch from the UserMeta
  **/
  select?: UserMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserMetaInclude | null
  /**
   * The filter to search for the UserMeta to update in case it exists.
  **/
  where: UserMetaWhereUniqueInput
  /**
   * In case the UserMeta found by the `where` argument doesn't exist, create a new UserMeta with this data.
  **/
  create: UserMetaCreateInput
  /**
   * In case the UserMeta was found with the provided `where` argument, update it with this data.
  **/
  update: UserMetaUpdateInput
}


/**
 * UserMeta delete
 */
export type UserMetaDeleteArgs = {
  /**
   * Select specific fields to fetch from the UserMeta
  **/
  select?: UserMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserMetaInclude | null
  /**
   * Filter which UserMeta to delete.
  **/
  where: UserMetaWhereUniqueInput
}


/**
 * UserMeta deleteMany
 */
export type UserMetaDeleteManyArgs = {
  where?: UserMetaWhereInput | null
}


/**
 * UserMeta without action
 */
export type UserMetaArgs = {
  /**
   * Select specific fields to fetch from the UserMeta
  **/
  select?: UserMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserMetaInclude | null
}



/**
 * Model Pod
 */

export type Pod = {
  id: string
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemName: string
  itemContent: string
  itemDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type PodSelect = {
  id?: boolean
  user?: boolean | UserArgs
  members?: boolean | FindManyUserArgs
  itemType?: boolean
  itemStatus?: boolean
  itemUrlSegment?: boolean
  itemName?: boolean
  itemContent?: boolean
  itemDeleted?: boolean
  itemMeta?: boolean | FindManyPodMetaArgs
  posts?: boolean | FindManyPostArgs
  categories?: boolean | FindManyCategoryArgs
  createdAt?: boolean
  updatedAt?: boolean
  notifications?: boolean | FindManyNotificationArgs
}

export type PodInclude = {
  user?: boolean | UserArgs
  members?: boolean | FindManyUserArgs
  itemMeta?: boolean | FindManyPodMetaArgs
  posts?: boolean | FindManyPostArgs
  categories?: boolean | FindManyCategoryArgs
  notifications?: boolean | FindManyNotificationArgs
}

export type PodGetPayload<
  S extends boolean | null | undefined | PodArgs,
  U = keyof S
> = S extends true
  ? Pod
  : S extends undefined
  ? never
  : S extends PodArgs
  ? 'include' extends U
    ? Pod  & {
      [P in TrueKeys<S['include']>]:
      P extends 'user'
      ? UserGetPayload<S['include'][P]> :
      P extends 'members'
      ? Array<UserGetPayload<S['include'][P]>> :
      P extends 'itemMeta'
      ? Array<PodMetaGetPayload<S['include'][P]>> :
      P extends 'posts'
      ? Array<PostGetPayload<S['include'][P]>> :
      P extends 'categories'
      ? Array<CategoryGetPayload<S['include'][P]>> :
      P extends 'notifications'
      ? Array<NotificationGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Pod ? Pod[P]
: 
      P extends 'user'
      ? UserGetPayload<S['select'][P]> :
      P extends 'members'
      ? Array<UserGetPayload<S['select'][P]>> :
      P extends 'itemMeta'
      ? Array<PodMetaGetPayload<S['select'][P]>> :
      P extends 'posts'
      ? Array<PostGetPayload<S['select'][P]>> :
      P extends 'categories'
      ? Array<CategoryGetPayload<S['select'][P]>> :
      P extends 'notifications'
      ? Array<NotificationGetPayload<S['select'][P]>> : never
    }
  : Pod
: Pod


export interface PodDelegate {
  /**
   * Find zero or one Pod.
   * @param {FindOnePodArgs} args - Arguments to find a Pod
   * @example
   * // Get one Pod
   * const pod = await prisma.pod.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOnePodArgs>(
    args: Subset<T, FindOnePodArgs>
  ): CheckSelect<T, PodClient<Pod | null>, PodClient<PodGetPayload<T> | null>>
  /**
   * Find zero or more Pods.
   * @param {FindManyPodArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Pods
   * const pods = await prisma.pod.findMany()
   * 
   * // Get first 10 Pods
   * const pods = await prisma.pod.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const podWithIdOnly = await prisma.pod.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyPodArgs>(
    args?: Subset<T, FindManyPodArgs>
  ): CheckSelect<T, Promise<Array<Pod>>, Promise<Array<PodGetPayload<T>>>>
  /**
   * Create a Pod.
   * @param {PodCreateArgs} args - Arguments to create a Pod.
   * @example
   * // Create one Pod
   * const user = await prisma.pod.create({
   *   data: {
   *     // ... data to create a Pod
   *   }
   * })
   * 
  **/
  create<T extends PodCreateArgs>(
    args: Subset<T, PodCreateArgs>
  ): CheckSelect<T, PodClient<Pod>, PodClient<PodGetPayload<T>>>
  /**
   * Delete a Pod.
   * @param {PodDeleteArgs} args - Arguments to delete one Pod.
   * @example
   * // Delete one Pod
   * const user = await prisma.pod.delete({
   *   where: {
   *     // ... filter to delete one Pod
   *   }
   * })
   * 
  **/
  delete<T extends PodDeleteArgs>(
    args: Subset<T, PodDeleteArgs>
  ): CheckSelect<T, PodClient<Pod>, PodClient<PodGetPayload<T>>>
  /**
   * Update one Pod.
   * @param {PodUpdateArgs} args - Arguments to update one Pod.
   * @example
   * // Update one Pod
   * const pod = await prisma.pod.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends PodUpdateArgs>(
    args: Subset<T, PodUpdateArgs>
  ): CheckSelect<T, PodClient<Pod>, PodClient<PodGetPayload<T>>>
  /**
   * Delete zero or more Pods.
   * @param {PodDeleteManyArgs} args - Arguments to filter Pods to delete.
   * @example
   * // Delete a few Pods
   * const { count } = await prisma.pod.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends PodDeleteManyArgs>(
    args: Subset<T, PodDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Pods.
   * @param {PodUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Pods
   * const pod = await prisma.pod.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends PodUpdateManyArgs>(
    args: Subset<T, PodUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Pod.
   * @param {PodUpsertArgs} args - Arguments to update or create a Pod.
   * @example
   * // Update or create a Pod
   * const pod = await prisma.pod.upsert({
   *   create: {
   *     // ... data to create a Pod
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Pod we want to update
   *   }
   * })
  **/
  upsert<T extends PodUpsertArgs>(
    args: Subset<T, PodUpsertArgs>
  ): CheckSelect<T, PodClient<Pod>, PodClient<PodGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class PodClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, UserClient<User | null>, UserClient<UserGetPayload<T> | null>>;

  members<T extends FindManyUserArgs = {}>(args?: Subset<T, FindManyUserArgs>): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>;

  itemMeta<T extends FindManyPodMetaArgs = {}>(args?: Subset<T, FindManyPodMetaArgs>): CheckSelect<T, Promise<Array<PodMeta>>, Promise<Array<PodMetaGetPayload<T>>>>;

  posts<T extends FindManyPostArgs = {}>(args?: Subset<T, FindManyPostArgs>): CheckSelect<T, Promise<Array<Post>>, Promise<Array<PostGetPayload<T>>>>;

  categories<T extends FindManyCategoryArgs = {}>(args?: Subset<T, FindManyCategoryArgs>): CheckSelect<T, Promise<Array<Category>>, Promise<Array<CategoryGetPayload<T>>>>;

  notifications<T extends FindManyNotificationArgs = {}>(args?: Subset<T, FindManyNotificationArgs>): CheckSelect<T, Promise<Array<Notification>>, Promise<Array<NotificationGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Pod findOne
 */
export type FindOnePodArgs = {
  /**
   * Select specific fields to fetch from the Pod
  **/
  select?: PodSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PodInclude | null
  /**
   * Filter, which Pod to fetch.
  **/
  where: PodWhereUniqueInput
}


/**
 * Pod findMany
 */
export type FindManyPodArgs = {
  /**
   * Select specific fields to fetch from the Pod
  **/
  select?: PodSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PodInclude | null
  /**
   * Filter, which Pods to fetch.
  **/
  where?: PodWhereInput | null
  /**
   * Determine the order of the Pods to fetch.
  **/
  orderBy?: PodOrderByInput | null
  /**
   * Skip the first `n` Pods.
  **/
  skip?: number | null
  /**
   * Get all Pods that come after the Pod you provide with the current order.
  **/
  after?: PodWhereUniqueInput | null
  /**
   * Get all Pods that come before the Pod you provide with the current order.
  **/
  before?: PodWhereUniqueInput | null
  /**
   * Get the first `n` Pods.
  **/
  first?: number | null
  /**
   * Get the last `n` Pods.
  **/
  last?: number | null
}


/**
 * Pod create
 */
export type PodCreateArgs = {
  /**
   * Select specific fields to fetch from the Pod
  **/
  select?: PodSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PodInclude | null
  /**
   * The data needed to create a Pod.
  **/
  data: PodCreateInput
}


/**
 * Pod update
 */
export type PodUpdateArgs = {
  /**
   * Select specific fields to fetch from the Pod
  **/
  select?: PodSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PodInclude | null
  /**
   * The data needed to update a Pod.
  **/
  data: PodUpdateInput
  /**
   * Choose, which Pod to update.
  **/
  where: PodWhereUniqueInput
}


/**
 * Pod updateMany
 */
export type PodUpdateManyArgs = {
  data: PodUpdateManyMutationInput
  where?: PodWhereInput | null
}


/**
 * Pod upsert
 */
export type PodUpsertArgs = {
  /**
   * Select specific fields to fetch from the Pod
  **/
  select?: PodSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PodInclude | null
  /**
   * The filter to search for the Pod to update in case it exists.
  **/
  where: PodWhereUniqueInput
  /**
   * In case the Pod found by the `where` argument doesn't exist, create a new Pod with this data.
  **/
  create: PodCreateInput
  /**
   * In case the Pod was found with the provided `where` argument, update it with this data.
  **/
  update: PodUpdateInput
}


/**
 * Pod delete
 */
export type PodDeleteArgs = {
  /**
   * Select specific fields to fetch from the Pod
  **/
  select?: PodSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PodInclude | null
  /**
   * Filter which Pod to delete.
  **/
  where: PodWhereUniqueInput
}


/**
 * Pod deleteMany
 */
export type PodDeleteManyArgs = {
  where?: PodWhereInput | null
}


/**
 * Pod without action
 */
export type PodArgs = {
  /**
   * Select specific fields to fetch from the Pod
  **/
  select?: PodSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PodInclude | null
}



/**
 * Model PodMeta
 */

export type PodMeta = {
  id: string
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type PodMetaSelect = {
  id?: boolean
  pod?: boolean | PodArgs
  metaType?: boolean
  metaName?: boolean
  metaValue?: boolean
  metaDeleted?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type PodMetaInclude = {
  pod?: boolean | PodArgs
}

export type PodMetaGetPayload<
  S extends boolean | null | undefined | PodMetaArgs,
  U = keyof S
> = S extends true
  ? PodMeta
  : S extends undefined
  ? never
  : S extends PodMetaArgs
  ? 'include' extends U
    ? PodMeta  & {
      [P in TrueKeys<S['include']>]:
      P extends 'pod'
      ? PodGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof PodMeta ? PodMeta[P]
: 
      P extends 'pod'
      ? PodGetPayload<S['select'][P]> : never
    }
  : PodMeta
: PodMeta


export interface PodMetaDelegate {
  /**
   * Find zero or one PodMeta.
   * @param {FindOnePodMetaArgs} args - Arguments to find a PodMeta
   * @example
   * // Get one PodMeta
   * const podMeta = await prisma.podMeta.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOnePodMetaArgs>(
    args: Subset<T, FindOnePodMetaArgs>
  ): CheckSelect<T, PodMetaClient<PodMeta | null>, PodMetaClient<PodMetaGetPayload<T> | null>>
  /**
   * Find zero or more PodMetas.
   * @param {FindManyPodMetaArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all PodMetas
   * const podMetas = await prisma.podMeta.findMany()
   * 
   * // Get first 10 PodMetas
   * const podMetas = await prisma.podMeta.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const podMetaWithIdOnly = await prisma.podMeta.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyPodMetaArgs>(
    args?: Subset<T, FindManyPodMetaArgs>
  ): CheckSelect<T, Promise<Array<PodMeta>>, Promise<Array<PodMetaGetPayload<T>>>>
  /**
   * Create a PodMeta.
   * @param {PodMetaCreateArgs} args - Arguments to create a PodMeta.
   * @example
   * // Create one PodMeta
   * const user = await prisma.podMeta.create({
   *   data: {
   *     // ... data to create a PodMeta
   *   }
   * })
   * 
  **/
  create<T extends PodMetaCreateArgs>(
    args: Subset<T, PodMetaCreateArgs>
  ): CheckSelect<T, PodMetaClient<PodMeta>, PodMetaClient<PodMetaGetPayload<T>>>
  /**
   * Delete a PodMeta.
   * @param {PodMetaDeleteArgs} args - Arguments to delete one PodMeta.
   * @example
   * // Delete one PodMeta
   * const user = await prisma.podMeta.delete({
   *   where: {
   *     // ... filter to delete one PodMeta
   *   }
   * })
   * 
  **/
  delete<T extends PodMetaDeleteArgs>(
    args: Subset<T, PodMetaDeleteArgs>
  ): CheckSelect<T, PodMetaClient<PodMeta>, PodMetaClient<PodMetaGetPayload<T>>>
  /**
   * Update one PodMeta.
   * @param {PodMetaUpdateArgs} args - Arguments to update one PodMeta.
   * @example
   * // Update one PodMeta
   * const podMeta = await prisma.podMeta.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends PodMetaUpdateArgs>(
    args: Subset<T, PodMetaUpdateArgs>
  ): CheckSelect<T, PodMetaClient<PodMeta>, PodMetaClient<PodMetaGetPayload<T>>>
  /**
   * Delete zero or more PodMetas.
   * @param {PodMetaDeleteManyArgs} args - Arguments to filter PodMetas to delete.
   * @example
   * // Delete a few PodMetas
   * const { count } = await prisma.podMeta.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends PodMetaDeleteManyArgs>(
    args: Subset<T, PodMetaDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more PodMetas.
   * @param {PodMetaUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many PodMetas
   * const podMeta = await prisma.podMeta.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends PodMetaUpdateManyArgs>(
    args: Subset<T, PodMetaUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one PodMeta.
   * @param {PodMetaUpsertArgs} args - Arguments to update or create a PodMeta.
   * @example
   * // Update or create a PodMeta
   * const podMeta = await prisma.podMeta.upsert({
   *   create: {
   *     // ... data to create a PodMeta
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the PodMeta we want to update
   *   }
   * })
  **/
  upsert<T extends PodMetaUpsertArgs>(
    args: Subset<T, PodMetaUpsertArgs>
  ): CheckSelect<T, PodMetaClient<PodMeta>, PodMetaClient<PodMetaGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class PodMetaClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  pod<T extends PodArgs = {}>(args?: Subset<T, PodArgs>): CheckSelect<T, PodClient<Pod | null>, PodClient<PodGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * PodMeta findOne
 */
export type FindOnePodMetaArgs = {
  /**
   * Select specific fields to fetch from the PodMeta
  **/
  select?: PodMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PodMetaInclude | null
  /**
   * Filter, which PodMeta to fetch.
  **/
  where: PodMetaWhereUniqueInput
}


/**
 * PodMeta findMany
 */
export type FindManyPodMetaArgs = {
  /**
   * Select specific fields to fetch from the PodMeta
  **/
  select?: PodMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PodMetaInclude | null
  /**
   * Filter, which PodMetas to fetch.
  **/
  where?: PodMetaWhereInput | null
  /**
   * Determine the order of the PodMetas to fetch.
  **/
  orderBy?: PodMetaOrderByInput | null
  /**
   * Skip the first `n` PodMetas.
  **/
  skip?: number | null
  /**
   * Get all PodMetas that come after the PodMeta you provide with the current order.
  **/
  after?: PodMetaWhereUniqueInput | null
  /**
   * Get all PodMetas that come before the PodMeta you provide with the current order.
  **/
  before?: PodMetaWhereUniqueInput | null
  /**
   * Get the first `n` PodMetas.
  **/
  first?: number | null
  /**
   * Get the last `n` PodMetas.
  **/
  last?: number | null
}


/**
 * PodMeta create
 */
export type PodMetaCreateArgs = {
  /**
   * Select specific fields to fetch from the PodMeta
  **/
  select?: PodMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PodMetaInclude | null
  /**
   * The data needed to create a PodMeta.
  **/
  data: PodMetaCreateInput
}


/**
 * PodMeta update
 */
export type PodMetaUpdateArgs = {
  /**
   * Select specific fields to fetch from the PodMeta
  **/
  select?: PodMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PodMetaInclude | null
  /**
   * The data needed to update a PodMeta.
  **/
  data: PodMetaUpdateInput
  /**
   * Choose, which PodMeta to update.
  **/
  where: PodMetaWhereUniqueInput
}


/**
 * PodMeta updateMany
 */
export type PodMetaUpdateManyArgs = {
  data: PodMetaUpdateManyMutationInput
  where?: PodMetaWhereInput | null
}


/**
 * PodMeta upsert
 */
export type PodMetaUpsertArgs = {
  /**
   * Select specific fields to fetch from the PodMeta
  **/
  select?: PodMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PodMetaInclude | null
  /**
   * The filter to search for the PodMeta to update in case it exists.
  **/
  where: PodMetaWhereUniqueInput
  /**
   * In case the PodMeta found by the `where` argument doesn't exist, create a new PodMeta with this data.
  **/
  create: PodMetaCreateInput
  /**
   * In case the PodMeta was found with the provided `where` argument, update it with this data.
  **/
  update: PodMetaUpdateInput
}


/**
 * PodMeta delete
 */
export type PodMetaDeleteArgs = {
  /**
   * Select specific fields to fetch from the PodMeta
  **/
  select?: PodMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PodMetaInclude | null
  /**
   * Filter which PodMeta to delete.
  **/
  where: PodMetaWhereUniqueInput
}


/**
 * PodMeta deleteMany
 */
export type PodMetaDeleteManyArgs = {
  where?: PodMetaWhereInput | null
}


/**
 * PodMeta without action
 */
export type PodMetaArgs = {
  /**
   * Select specific fields to fetch from the PodMeta
  **/
  select?: PodMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PodMetaInclude | null
}



/**
 * Model Post
 */

export type Post = {
  id: string
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type PostSelect = {
  id?: boolean
  user?: boolean | UserArgs
  pod?: boolean | PodArgs
  itemType?: boolean
  itemStatus?: boolean
  itemUrlSegment?: boolean
  itemMimeType?: boolean
  itemName?: boolean
  itemContent?: boolean
  itemDeleted?: boolean
  itemMeta?: boolean | FindManyPostMetaArgs
  tags?: boolean | FindManyTagArgs
  favorites?: boolean | FindManyFavoriteArgs
  reviews?: boolean | FindManyReviewArgs
  annotations?: boolean | FindManyAnnotationArgs
  questions?: boolean | FindManyQuestionArgs
  createdAt?: boolean
  updatedAt?: boolean
  notifications?: boolean | FindManyNotificationArgs
}

export type PostInclude = {
  user?: boolean | UserArgs
  pod?: boolean | PodArgs
  itemMeta?: boolean | FindManyPostMetaArgs
  tags?: boolean | FindManyTagArgs
  favorites?: boolean | FindManyFavoriteArgs
  reviews?: boolean | FindManyReviewArgs
  annotations?: boolean | FindManyAnnotationArgs
  questions?: boolean | FindManyQuestionArgs
  notifications?: boolean | FindManyNotificationArgs
}

export type PostGetPayload<
  S extends boolean | null | undefined | PostArgs,
  U = keyof S
> = S extends true
  ? Post
  : S extends undefined
  ? never
  : S extends PostArgs
  ? 'include' extends U
    ? Post  & {
      [P in TrueKeys<S['include']>]:
      P extends 'user'
      ? UserGetPayload<S['include'][P]> :
      P extends 'pod'
      ? PodGetPayload<S['include'][P]> :
      P extends 'itemMeta'
      ? Array<PostMetaGetPayload<S['include'][P]>> :
      P extends 'tags'
      ? Array<TagGetPayload<S['include'][P]>> :
      P extends 'favorites'
      ? Array<FavoriteGetPayload<S['include'][P]>> :
      P extends 'reviews'
      ? Array<ReviewGetPayload<S['include'][P]>> :
      P extends 'annotations'
      ? Array<AnnotationGetPayload<S['include'][P]>> :
      P extends 'questions'
      ? Array<QuestionGetPayload<S['include'][P]>> :
      P extends 'notifications'
      ? Array<NotificationGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Post ? Post[P]
: 
      P extends 'user'
      ? UserGetPayload<S['select'][P]> :
      P extends 'pod'
      ? PodGetPayload<S['select'][P]> :
      P extends 'itemMeta'
      ? Array<PostMetaGetPayload<S['select'][P]>> :
      P extends 'tags'
      ? Array<TagGetPayload<S['select'][P]>> :
      P extends 'favorites'
      ? Array<FavoriteGetPayload<S['select'][P]>> :
      P extends 'reviews'
      ? Array<ReviewGetPayload<S['select'][P]>> :
      P extends 'annotations'
      ? Array<AnnotationGetPayload<S['select'][P]>> :
      P extends 'questions'
      ? Array<QuestionGetPayload<S['select'][P]>> :
      P extends 'notifications'
      ? Array<NotificationGetPayload<S['select'][P]>> : never
    }
  : Post
: Post


export interface PostDelegate {
  /**
   * Find zero or one Post.
   * @param {FindOnePostArgs} args - Arguments to find a Post
   * @example
   * // Get one Post
   * const post = await prisma.post.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOnePostArgs>(
    args: Subset<T, FindOnePostArgs>
  ): CheckSelect<T, PostClient<Post | null>, PostClient<PostGetPayload<T> | null>>
  /**
   * Find zero or more Posts.
   * @param {FindManyPostArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Posts
   * const posts = await prisma.post.findMany()
   * 
   * // Get first 10 Posts
   * const posts = await prisma.post.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyPostArgs>(
    args?: Subset<T, FindManyPostArgs>
  ): CheckSelect<T, Promise<Array<Post>>, Promise<Array<PostGetPayload<T>>>>
  /**
   * Create a Post.
   * @param {PostCreateArgs} args - Arguments to create a Post.
   * @example
   * // Create one Post
   * const user = await prisma.post.create({
   *   data: {
   *     // ... data to create a Post
   *   }
   * })
   * 
  **/
  create<T extends PostCreateArgs>(
    args: Subset<T, PostCreateArgs>
  ): CheckSelect<T, PostClient<Post>, PostClient<PostGetPayload<T>>>
  /**
   * Delete a Post.
   * @param {PostDeleteArgs} args - Arguments to delete one Post.
   * @example
   * // Delete one Post
   * const user = await prisma.post.delete({
   *   where: {
   *     // ... filter to delete one Post
   *   }
   * })
   * 
  **/
  delete<T extends PostDeleteArgs>(
    args: Subset<T, PostDeleteArgs>
  ): CheckSelect<T, PostClient<Post>, PostClient<PostGetPayload<T>>>
  /**
   * Update one Post.
   * @param {PostUpdateArgs} args - Arguments to update one Post.
   * @example
   * // Update one Post
   * const post = await prisma.post.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends PostUpdateArgs>(
    args: Subset<T, PostUpdateArgs>
  ): CheckSelect<T, PostClient<Post>, PostClient<PostGetPayload<T>>>
  /**
   * Delete zero or more Posts.
   * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
   * @example
   * // Delete a few Posts
   * const { count } = await prisma.post.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends PostDeleteManyArgs>(
    args: Subset<T, PostDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Posts.
   * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Posts
   * const post = await prisma.post.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends PostUpdateManyArgs>(
    args: Subset<T, PostUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Post.
   * @param {PostUpsertArgs} args - Arguments to update or create a Post.
   * @example
   * // Update or create a Post
   * const post = await prisma.post.upsert({
   *   create: {
   *     // ... data to create a Post
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Post we want to update
   *   }
   * })
  **/
  upsert<T extends PostUpsertArgs>(
    args: Subset<T, PostUpsertArgs>
  ): CheckSelect<T, PostClient<Post>, PostClient<PostGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class PostClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, UserClient<User | null>, UserClient<UserGetPayload<T> | null>>;

  pod<T extends PodArgs = {}>(args?: Subset<T, PodArgs>): CheckSelect<T, PodClient<Pod | null>, PodClient<PodGetPayload<T> | null>>;

  itemMeta<T extends FindManyPostMetaArgs = {}>(args?: Subset<T, FindManyPostMetaArgs>): CheckSelect<T, Promise<Array<PostMeta>>, Promise<Array<PostMetaGetPayload<T>>>>;

  tags<T extends FindManyTagArgs = {}>(args?: Subset<T, FindManyTagArgs>): CheckSelect<T, Promise<Array<Tag>>, Promise<Array<TagGetPayload<T>>>>;

  favorites<T extends FindManyFavoriteArgs = {}>(args?: Subset<T, FindManyFavoriteArgs>): CheckSelect<T, Promise<Array<Favorite>>, Promise<Array<FavoriteGetPayload<T>>>>;

  reviews<T extends FindManyReviewArgs = {}>(args?: Subset<T, FindManyReviewArgs>): CheckSelect<T, Promise<Array<Review>>, Promise<Array<ReviewGetPayload<T>>>>;

  annotations<T extends FindManyAnnotationArgs = {}>(args?: Subset<T, FindManyAnnotationArgs>): CheckSelect<T, Promise<Array<Annotation>>, Promise<Array<AnnotationGetPayload<T>>>>;

  questions<T extends FindManyQuestionArgs = {}>(args?: Subset<T, FindManyQuestionArgs>): CheckSelect<T, Promise<Array<Question>>, Promise<Array<QuestionGetPayload<T>>>>;

  notifications<T extends FindManyNotificationArgs = {}>(args?: Subset<T, FindManyNotificationArgs>): CheckSelect<T, Promise<Array<Notification>>, Promise<Array<NotificationGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Post findOne
 */
export type FindOnePostArgs = {
  /**
   * Select specific fields to fetch from the Post
  **/
  select?: PostSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PostInclude | null
  /**
   * Filter, which Post to fetch.
  **/
  where: PostWhereUniqueInput
}


/**
 * Post findMany
 */
export type FindManyPostArgs = {
  /**
   * Select specific fields to fetch from the Post
  **/
  select?: PostSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PostInclude | null
  /**
   * Filter, which Posts to fetch.
  **/
  where?: PostWhereInput | null
  /**
   * Determine the order of the Posts to fetch.
  **/
  orderBy?: PostOrderByInput | null
  /**
   * Skip the first `n` Posts.
  **/
  skip?: number | null
  /**
   * Get all Posts that come after the Post you provide with the current order.
  **/
  after?: PostWhereUniqueInput | null
  /**
   * Get all Posts that come before the Post you provide with the current order.
  **/
  before?: PostWhereUniqueInput | null
  /**
   * Get the first `n` Posts.
  **/
  first?: number | null
  /**
   * Get the last `n` Posts.
  **/
  last?: number | null
}


/**
 * Post create
 */
export type PostCreateArgs = {
  /**
   * Select specific fields to fetch from the Post
  **/
  select?: PostSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PostInclude | null
  /**
   * The data needed to create a Post.
  **/
  data: PostCreateInput
}


/**
 * Post update
 */
export type PostUpdateArgs = {
  /**
   * Select specific fields to fetch from the Post
  **/
  select?: PostSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PostInclude | null
  /**
   * The data needed to update a Post.
  **/
  data: PostUpdateInput
  /**
   * Choose, which Post to update.
  **/
  where: PostWhereUniqueInput
}


/**
 * Post updateMany
 */
export type PostUpdateManyArgs = {
  data: PostUpdateManyMutationInput
  where?: PostWhereInput | null
}


/**
 * Post upsert
 */
export type PostUpsertArgs = {
  /**
   * Select specific fields to fetch from the Post
  **/
  select?: PostSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PostInclude | null
  /**
   * The filter to search for the Post to update in case it exists.
  **/
  where: PostWhereUniqueInput
  /**
   * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
  **/
  create: PostCreateInput
  /**
   * In case the Post was found with the provided `where` argument, update it with this data.
  **/
  update: PostUpdateInput
}


/**
 * Post delete
 */
export type PostDeleteArgs = {
  /**
   * Select specific fields to fetch from the Post
  **/
  select?: PostSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PostInclude | null
  /**
   * Filter which Post to delete.
  **/
  where: PostWhereUniqueInput
}


/**
 * Post deleteMany
 */
export type PostDeleteManyArgs = {
  where?: PostWhereInput | null
}


/**
 * Post without action
 */
export type PostArgs = {
  /**
   * Select specific fields to fetch from the Post
  **/
  select?: PostSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PostInclude | null
}



/**
 * Model PostMeta
 */

export type PostMeta = {
  id: string
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type PostMetaSelect = {
  id?: boolean
  post?: boolean | PostArgs
  metaType?: boolean
  metaName?: boolean
  metaValue?: boolean
  metaDeleted?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type PostMetaInclude = {
  post?: boolean | PostArgs
}

export type PostMetaGetPayload<
  S extends boolean | null | undefined | PostMetaArgs,
  U = keyof S
> = S extends true
  ? PostMeta
  : S extends undefined
  ? never
  : S extends PostMetaArgs
  ? 'include' extends U
    ? PostMeta  & {
      [P in TrueKeys<S['include']>]:
      P extends 'post'
      ? PostGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof PostMeta ? PostMeta[P]
: 
      P extends 'post'
      ? PostGetPayload<S['select'][P]> : never
    }
  : PostMeta
: PostMeta


export interface PostMetaDelegate {
  /**
   * Find zero or one PostMeta.
   * @param {FindOnePostMetaArgs} args - Arguments to find a PostMeta
   * @example
   * // Get one PostMeta
   * const postMeta = await prisma.postMeta.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOnePostMetaArgs>(
    args: Subset<T, FindOnePostMetaArgs>
  ): CheckSelect<T, PostMetaClient<PostMeta | null>, PostMetaClient<PostMetaGetPayload<T> | null>>
  /**
   * Find zero or more PostMetas.
   * @param {FindManyPostMetaArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all PostMetas
   * const postMetas = await prisma.postMeta.findMany()
   * 
   * // Get first 10 PostMetas
   * const postMetas = await prisma.postMeta.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const postMetaWithIdOnly = await prisma.postMeta.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyPostMetaArgs>(
    args?: Subset<T, FindManyPostMetaArgs>
  ): CheckSelect<T, Promise<Array<PostMeta>>, Promise<Array<PostMetaGetPayload<T>>>>
  /**
   * Create a PostMeta.
   * @param {PostMetaCreateArgs} args - Arguments to create a PostMeta.
   * @example
   * // Create one PostMeta
   * const user = await prisma.postMeta.create({
   *   data: {
   *     // ... data to create a PostMeta
   *   }
   * })
   * 
  **/
  create<T extends PostMetaCreateArgs>(
    args: Subset<T, PostMetaCreateArgs>
  ): CheckSelect<T, PostMetaClient<PostMeta>, PostMetaClient<PostMetaGetPayload<T>>>
  /**
   * Delete a PostMeta.
   * @param {PostMetaDeleteArgs} args - Arguments to delete one PostMeta.
   * @example
   * // Delete one PostMeta
   * const user = await prisma.postMeta.delete({
   *   where: {
   *     // ... filter to delete one PostMeta
   *   }
   * })
   * 
  **/
  delete<T extends PostMetaDeleteArgs>(
    args: Subset<T, PostMetaDeleteArgs>
  ): CheckSelect<T, PostMetaClient<PostMeta>, PostMetaClient<PostMetaGetPayload<T>>>
  /**
   * Update one PostMeta.
   * @param {PostMetaUpdateArgs} args - Arguments to update one PostMeta.
   * @example
   * // Update one PostMeta
   * const postMeta = await prisma.postMeta.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends PostMetaUpdateArgs>(
    args: Subset<T, PostMetaUpdateArgs>
  ): CheckSelect<T, PostMetaClient<PostMeta>, PostMetaClient<PostMetaGetPayload<T>>>
  /**
   * Delete zero or more PostMetas.
   * @param {PostMetaDeleteManyArgs} args - Arguments to filter PostMetas to delete.
   * @example
   * // Delete a few PostMetas
   * const { count } = await prisma.postMeta.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends PostMetaDeleteManyArgs>(
    args: Subset<T, PostMetaDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more PostMetas.
   * @param {PostMetaUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many PostMetas
   * const postMeta = await prisma.postMeta.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends PostMetaUpdateManyArgs>(
    args: Subset<T, PostMetaUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one PostMeta.
   * @param {PostMetaUpsertArgs} args - Arguments to update or create a PostMeta.
   * @example
   * // Update or create a PostMeta
   * const postMeta = await prisma.postMeta.upsert({
   *   create: {
   *     // ... data to create a PostMeta
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the PostMeta we want to update
   *   }
   * })
  **/
  upsert<T extends PostMetaUpsertArgs>(
    args: Subset<T, PostMetaUpsertArgs>
  ): CheckSelect<T, PostMetaClient<PostMeta>, PostMetaClient<PostMetaGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class PostMetaClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, PostClient<Post | null>, PostClient<PostGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * PostMeta findOne
 */
export type FindOnePostMetaArgs = {
  /**
   * Select specific fields to fetch from the PostMeta
  **/
  select?: PostMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PostMetaInclude | null
  /**
   * Filter, which PostMeta to fetch.
  **/
  where: PostMetaWhereUniqueInput
}


/**
 * PostMeta findMany
 */
export type FindManyPostMetaArgs = {
  /**
   * Select specific fields to fetch from the PostMeta
  **/
  select?: PostMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PostMetaInclude | null
  /**
   * Filter, which PostMetas to fetch.
  **/
  where?: PostMetaWhereInput | null
  /**
   * Determine the order of the PostMetas to fetch.
  **/
  orderBy?: PostMetaOrderByInput | null
  /**
   * Skip the first `n` PostMetas.
  **/
  skip?: number | null
  /**
   * Get all PostMetas that come after the PostMeta you provide with the current order.
  **/
  after?: PostMetaWhereUniqueInput | null
  /**
   * Get all PostMetas that come before the PostMeta you provide with the current order.
  **/
  before?: PostMetaWhereUniqueInput | null
  /**
   * Get the first `n` PostMetas.
  **/
  first?: number | null
  /**
   * Get the last `n` PostMetas.
  **/
  last?: number | null
}


/**
 * PostMeta create
 */
export type PostMetaCreateArgs = {
  /**
   * Select specific fields to fetch from the PostMeta
  **/
  select?: PostMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PostMetaInclude | null
  /**
   * The data needed to create a PostMeta.
  **/
  data: PostMetaCreateInput
}


/**
 * PostMeta update
 */
export type PostMetaUpdateArgs = {
  /**
   * Select specific fields to fetch from the PostMeta
  **/
  select?: PostMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PostMetaInclude | null
  /**
   * The data needed to update a PostMeta.
  **/
  data: PostMetaUpdateInput
  /**
   * Choose, which PostMeta to update.
  **/
  where: PostMetaWhereUniqueInput
}


/**
 * PostMeta updateMany
 */
export type PostMetaUpdateManyArgs = {
  data: PostMetaUpdateManyMutationInput
  where?: PostMetaWhereInput | null
}


/**
 * PostMeta upsert
 */
export type PostMetaUpsertArgs = {
  /**
   * Select specific fields to fetch from the PostMeta
  **/
  select?: PostMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PostMetaInclude | null
  /**
   * The filter to search for the PostMeta to update in case it exists.
  **/
  where: PostMetaWhereUniqueInput
  /**
   * In case the PostMeta found by the `where` argument doesn't exist, create a new PostMeta with this data.
  **/
  create: PostMetaCreateInput
  /**
   * In case the PostMeta was found with the provided `where` argument, update it with this data.
  **/
  update: PostMetaUpdateInput
}


/**
 * PostMeta delete
 */
export type PostMetaDeleteArgs = {
  /**
   * Select specific fields to fetch from the PostMeta
  **/
  select?: PostMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PostMetaInclude | null
  /**
   * Filter which PostMeta to delete.
  **/
  where: PostMetaWhereUniqueInput
}


/**
 * PostMeta deleteMany
 */
export type PostMetaDeleteManyArgs = {
  where?: PostMetaWhereInput | null
}


/**
 * PostMeta without action
 */
export type PostMetaArgs = {
  /**
   * Select specific fields to fetch from the PostMeta
  **/
  select?: PostMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: PostMetaInclude | null
}



/**
 * Model Review
 */

export type Review = {
  id: string
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type ReviewSelect = {
  id?: boolean
  user?: boolean | UserArgs
  itemType?: boolean
  itemStatus?: boolean
  itemUrlSegment?: boolean
  itemMimeType?: boolean
  itemName?: boolean
  itemContent?: boolean
  itemDeleted?: boolean
  itemMeta?: boolean | FindManyReviewMetaArgs
  post?: boolean | PostArgs
  createdAt?: boolean
  updatedAt?: boolean
}

export type ReviewInclude = {
  user?: boolean | UserArgs
  itemMeta?: boolean | FindManyReviewMetaArgs
  post?: boolean | PostArgs
}

export type ReviewGetPayload<
  S extends boolean | null | undefined | ReviewArgs,
  U = keyof S
> = S extends true
  ? Review
  : S extends undefined
  ? never
  : S extends ReviewArgs
  ? 'include' extends U
    ? Review  & {
      [P in TrueKeys<S['include']>]:
      P extends 'user'
      ? UserGetPayload<S['include'][P]> :
      P extends 'itemMeta'
      ? Array<ReviewMetaGetPayload<S['include'][P]>> :
      P extends 'post'
      ? PostGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Review ? Review[P]
: 
      P extends 'user'
      ? UserGetPayload<S['select'][P]> :
      P extends 'itemMeta'
      ? Array<ReviewMetaGetPayload<S['select'][P]>> :
      P extends 'post'
      ? PostGetPayload<S['select'][P]> : never
    }
  : Review
: Review


export interface ReviewDelegate {
  /**
   * Find zero or one Review.
   * @param {FindOneReviewArgs} args - Arguments to find a Review
   * @example
   * // Get one Review
   * const review = await prisma.review.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneReviewArgs>(
    args: Subset<T, FindOneReviewArgs>
  ): CheckSelect<T, ReviewClient<Review | null>, ReviewClient<ReviewGetPayload<T> | null>>
  /**
   * Find zero or more Reviews.
   * @param {FindManyReviewArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Reviews
   * const reviews = await prisma.review.findMany()
   * 
   * // Get first 10 Reviews
   * const reviews = await prisma.review.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyReviewArgs>(
    args?: Subset<T, FindManyReviewArgs>
  ): CheckSelect<T, Promise<Array<Review>>, Promise<Array<ReviewGetPayload<T>>>>
  /**
   * Create a Review.
   * @param {ReviewCreateArgs} args - Arguments to create a Review.
   * @example
   * // Create one Review
   * const user = await prisma.review.create({
   *   data: {
   *     // ... data to create a Review
   *   }
   * })
   * 
  **/
  create<T extends ReviewCreateArgs>(
    args: Subset<T, ReviewCreateArgs>
  ): CheckSelect<T, ReviewClient<Review>, ReviewClient<ReviewGetPayload<T>>>
  /**
   * Delete a Review.
   * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
   * @example
   * // Delete one Review
   * const user = await prisma.review.delete({
   *   where: {
   *     // ... filter to delete one Review
   *   }
   * })
   * 
  **/
  delete<T extends ReviewDeleteArgs>(
    args: Subset<T, ReviewDeleteArgs>
  ): CheckSelect<T, ReviewClient<Review>, ReviewClient<ReviewGetPayload<T>>>
  /**
   * Update one Review.
   * @param {ReviewUpdateArgs} args - Arguments to update one Review.
   * @example
   * // Update one Review
   * const review = await prisma.review.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends ReviewUpdateArgs>(
    args: Subset<T, ReviewUpdateArgs>
  ): CheckSelect<T, ReviewClient<Review>, ReviewClient<ReviewGetPayload<T>>>
  /**
   * Delete zero or more Reviews.
   * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
   * @example
   * // Delete a few Reviews
   * const { count } = await prisma.review.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends ReviewDeleteManyArgs>(
    args: Subset<T, ReviewDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Reviews.
   * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Reviews
   * const review = await prisma.review.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends ReviewUpdateManyArgs>(
    args: Subset<T, ReviewUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Review.
   * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
   * @example
   * // Update or create a Review
   * const review = await prisma.review.upsert({
   *   create: {
   *     // ... data to create a Review
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Review we want to update
   *   }
   * })
  **/
  upsert<T extends ReviewUpsertArgs>(
    args: Subset<T, ReviewUpsertArgs>
  ): CheckSelect<T, ReviewClient<Review>, ReviewClient<ReviewGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class ReviewClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, UserClient<User | null>, UserClient<UserGetPayload<T> | null>>;

  itemMeta<T extends FindManyReviewMetaArgs = {}>(args?: Subset<T, FindManyReviewMetaArgs>): CheckSelect<T, Promise<Array<ReviewMeta>>, Promise<Array<ReviewMetaGetPayload<T>>>>;

  post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, PostClient<Post | null>, PostClient<PostGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Review findOne
 */
export type FindOneReviewArgs = {
  /**
   * Select specific fields to fetch from the Review
  **/
  select?: ReviewSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ReviewInclude | null
  /**
   * Filter, which Review to fetch.
  **/
  where: ReviewWhereUniqueInput
}


/**
 * Review findMany
 */
export type FindManyReviewArgs = {
  /**
   * Select specific fields to fetch from the Review
  **/
  select?: ReviewSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ReviewInclude | null
  /**
   * Filter, which Reviews to fetch.
  **/
  where?: ReviewWhereInput | null
  /**
   * Determine the order of the Reviews to fetch.
  **/
  orderBy?: ReviewOrderByInput | null
  /**
   * Skip the first `n` Reviews.
  **/
  skip?: number | null
  /**
   * Get all Reviews that come after the Review you provide with the current order.
  **/
  after?: ReviewWhereUniqueInput | null
  /**
   * Get all Reviews that come before the Review you provide with the current order.
  **/
  before?: ReviewWhereUniqueInput | null
  /**
   * Get the first `n` Reviews.
  **/
  first?: number | null
  /**
   * Get the last `n` Reviews.
  **/
  last?: number | null
}


/**
 * Review create
 */
export type ReviewCreateArgs = {
  /**
   * Select specific fields to fetch from the Review
  **/
  select?: ReviewSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ReviewInclude | null
  /**
   * The data needed to create a Review.
  **/
  data: ReviewCreateInput
}


/**
 * Review update
 */
export type ReviewUpdateArgs = {
  /**
   * Select specific fields to fetch from the Review
  **/
  select?: ReviewSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ReviewInclude | null
  /**
   * The data needed to update a Review.
  **/
  data: ReviewUpdateInput
  /**
   * Choose, which Review to update.
  **/
  where: ReviewWhereUniqueInput
}


/**
 * Review updateMany
 */
export type ReviewUpdateManyArgs = {
  data: ReviewUpdateManyMutationInput
  where?: ReviewWhereInput | null
}


/**
 * Review upsert
 */
export type ReviewUpsertArgs = {
  /**
   * Select specific fields to fetch from the Review
  **/
  select?: ReviewSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ReviewInclude | null
  /**
   * The filter to search for the Review to update in case it exists.
  **/
  where: ReviewWhereUniqueInput
  /**
   * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
  **/
  create: ReviewCreateInput
  /**
   * In case the Review was found with the provided `where` argument, update it with this data.
  **/
  update: ReviewUpdateInput
}


/**
 * Review delete
 */
export type ReviewDeleteArgs = {
  /**
   * Select specific fields to fetch from the Review
  **/
  select?: ReviewSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ReviewInclude | null
  /**
   * Filter which Review to delete.
  **/
  where: ReviewWhereUniqueInput
}


/**
 * Review deleteMany
 */
export type ReviewDeleteManyArgs = {
  where?: ReviewWhereInput | null
}


/**
 * Review without action
 */
export type ReviewArgs = {
  /**
   * Select specific fields to fetch from the Review
  **/
  select?: ReviewSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ReviewInclude | null
}



/**
 * Model ReviewMeta
 */

export type ReviewMeta = {
  id: string
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type ReviewMetaSelect = {
  id?: boolean
  review?: boolean | ReviewArgs
  metaType?: boolean
  metaName?: boolean
  metaValue?: boolean
  metaDeleted?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type ReviewMetaInclude = {
  review?: boolean | ReviewArgs
}

export type ReviewMetaGetPayload<
  S extends boolean | null | undefined | ReviewMetaArgs,
  U = keyof S
> = S extends true
  ? ReviewMeta
  : S extends undefined
  ? never
  : S extends ReviewMetaArgs
  ? 'include' extends U
    ? ReviewMeta  & {
      [P in TrueKeys<S['include']>]:
      P extends 'review'
      ? ReviewGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof ReviewMeta ? ReviewMeta[P]
: 
      P extends 'review'
      ? ReviewGetPayload<S['select'][P]> : never
    }
  : ReviewMeta
: ReviewMeta


export interface ReviewMetaDelegate {
  /**
   * Find zero or one ReviewMeta.
   * @param {FindOneReviewMetaArgs} args - Arguments to find a ReviewMeta
   * @example
   * // Get one ReviewMeta
   * const reviewMeta = await prisma.reviewMeta.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneReviewMetaArgs>(
    args: Subset<T, FindOneReviewMetaArgs>
  ): CheckSelect<T, ReviewMetaClient<ReviewMeta | null>, ReviewMetaClient<ReviewMetaGetPayload<T> | null>>
  /**
   * Find zero or more ReviewMetas.
   * @param {FindManyReviewMetaArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all ReviewMetas
   * const reviewMetas = await prisma.reviewMeta.findMany()
   * 
   * // Get first 10 ReviewMetas
   * const reviewMetas = await prisma.reviewMeta.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const reviewMetaWithIdOnly = await prisma.reviewMeta.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyReviewMetaArgs>(
    args?: Subset<T, FindManyReviewMetaArgs>
  ): CheckSelect<T, Promise<Array<ReviewMeta>>, Promise<Array<ReviewMetaGetPayload<T>>>>
  /**
   * Create a ReviewMeta.
   * @param {ReviewMetaCreateArgs} args - Arguments to create a ReviewMeta.
   * @example
   * // Create one ReviewMeta
   * const user = await prisma.reviewMeta.create({
   *   data: {
   *     // ... data to create a ReviewMeta
   *   }
   * })
   * 
  **/
  create<T extends ReviewMetaCreateArgs>(
    args: Subset<T, ReviewMetaCreateArgs>
  ): CheckSelect<T, ReviewMetaClient<ReviewMeta>, ReviewMetaClient<ReviewMetaGetPayload<T>>>
  /**
   * Delete a ReviewMeta.
   * @param {ReviewMetaDeleteArgs} args - Arguments to delete one ReviewMeta.
   * @example
   * // Delete one ReviewMeta
   * const user = await prisma.reviewMeta.delete({
   *   where: {
   *     // ... filter to delete one ReviewMeta
   *   }
   * })
   * 
  **/
  delete<T extends ReviewMetaDeleteArgs>(
    args: Subset<T, ReviewMetaDeleteArgs>
  ): CheckSelect<T, ReviewMetaClient<ReviewMeta>, ReviewMetaClient<ReviewMetaGetPayload<T>>>
  /**
   * Update one ReviewMeta.
   * @param {ReviewMetaUpdateArgs} args - Arguments to update one ReviewMeta.
   * @example
   * // Update one ReviewMeta
   * const reviewMeta = await prisma.reviewMeta.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends ReviewMetaUpdateArgs>(
    args: Subset<T, ReviewMetaUpdateArgs>
  ): CheckSelect<T, ReviewMetaClient<ReviewMeta>, ReviewMetaClient<ReviewMetaGetPayload<T>>>
  /**
   * Delete zero or more ReviewMetas.
   * @param {ReviewMetaDeleteManyArgs} args - Arguments to filter ReviewMetas to delete.
   * @example
   * // Delete a few ReviewMetas
   * const { count } = await prisma.reviewMeta.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends ReviewMetaDeleteManyArgs>(
    args: Subset<T, ReviewMetaDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more ReviewMetas.
   * @param {ReviewMetaUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many ReviewMetas
   * const reviewMeta = await prisma.reviewMeta.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends ReviewMetaUpdateManyArgs>(
    args: Subset<T, ReviewMetaUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one ReviewMeta.
   * @param {ReviewMetaUpsertArgs} args - Arguments to update or create a ReviewMeta.
   * @example
   * // Update or create a ReviewMeta
   * const reviewMeta = await prisma.reviewMeta.upsert({
   *   create: {
   *     // ... data to create a ReviewMeta
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the ReviewMeta we want to update
   *   }
   * })
  **/
  upsert<T extends ReviewMetaUpsertArgs>(
    args: Subset<T, ReviewMetaUpsertArgs>
  ): CheckSelect<T, ReviewMetaClient<ReviewMeta>, ReviewMetaClient<ReviewMetaGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class ReviewMetaClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  review<T extends ReviewArgs = {}>(args?: Subset<T, ReviewArgs>): CheckSelect<T, ReviewClient<Review | null>, ReviewClient<ReviewGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * ReviewMeta findOne
 */
export type FindOneReviewMetaArgs = {
  /**
   * Select specific fields to fetch from the ReviewMeta
  **/
  select?: ReviewMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ReviewMetaInclude | null
  /**
   * Filter, which ReviewMeta to fetch.
  **/
  where: ReviewMetaWhereUniqueInput
}


/**
 * ReviewMeta findMany
 */
export type FindManyReviewMetaArgs = {
  /**
   * Select specific fields to fetch from the ReviewMeta
  **/
  select?: ReviewMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ReviewMetaInclude | null
  /**
   * Filter, which ReviewMetas to fetch.
  **/
  where?: ReviewMetaWhereInput | null
  /**
   * Determine the order of the ReviewMetas to fetch.
  **/
  orderBy?: ReviewMetaOrderByInput | null
  /**
   * Skip the first `n` ReviewMetas.
  **/
  skip?: number | null
  /**
   * Get all ReviewMetas that come after the ReviewMeta you provide with the current order.
  **/
  after?: ReviewMetaWhereUniqueInput | null
  /**
   * Get all ReviewMetas that come before the ReviewMeta you provide with the current order.
  **/
  before?: ReviewMetaWhereUniqueInput | null
  /**
   * Get the first `n` ReviewMetas.
  **/
  first?: number | null
  /**
   * Get the last `n` ReviewMetas.
  **/
  last?: number | null
}


/**
 * ReviewMeta create
 */
export type ReviewMetaCreateArgs = {
  /**
   * Select specific fields to fetch from the ReviewMeta
  **/
  select?: ReviewMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ReviewMetaInclude | null
  /**
   * The data needed to create a ReviewMeta.
  **/
  data: ReviewMetaCreateInput
}


/**
 * ReviewMeta update
 */
export type ReviewMetaUpdateArgs = {
  /**
   * Select specific fields to fetch from the ReviewMeta
  **/
  select?: ReviewMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ReviewMetaInclude | null
  /**
   * The data needed to update a ReviewMeta.
  **/
  data: ReviewMetaUpdateInput
  /**
   * Choose, which ReviewMeta to update.
  **/
  where: ReviewMetaWhereUniqueInput
}


/**
 * ReviewMeta updateMany
 */
export type ReviewMetaUpdateManyArgs = {
  data: ReviewMetaUpdateManyMutationInput
  where?: ReviewMetaWhereInput | null
}


/**
 * ReviewMeta upsert
 */
export type ReviewMetaUpsertArgs = {
  /**
   * Select specific fields to fetch from the ReviewMeta
  **/
  select?: ReviewMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ReviewMetaInclude | null
  /**
   * The filter to search for the ReviewMeta to update in case it exists.
  **/
  where: ReviewMetaWhereUniqueInput
  /**
   * In case the ReviewMeta found by the `where` argument doesn't exist, create a new ReviewMeta with this data.
  **/
  create: ReviewMetaCreateInput
  /**
   * In case the ReviewMeta was found with the provided `where` argument, update it with this data.
  **/
  update: ReviewMetaUpdateInput
}


/**
 * ReviewMeta delete
 */
export type ReviewMetaDeleteArgs = {
  /**
   * Select specific fields to fetch from the ReviewMeta
  **/
  select?: ReviewMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ReviewMetaInclude | null
  /**
   * Filter which ReviewMeta to delete.
  **/
  where: ReviewMetaWhereUniqueInput
}


/**
 * ReviewMeta deleteMany
 */
export type ReviewMetaDeleteManyArgs = {
  where?: ReviewMetaWhereInput | null
}


/**
 * ReviewMeta without action
 */
export type ReviewMetaArgs = {
  /**
   * Select specific fields to fetch from the ReviewMeta
  **/
  select?: ReviewMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ReviewMetaInclude | null
}



/**
 * Model Annotation
 */

export type Annotation = {
  id: string
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type AnnotationSelect = {
  id?: boolean
  user?: boolean | UserArgs
  itemType?: boolean
  itemStatus?: boolean
  itemUrlSegment?: boolean
  itemMimeType?: boolean
  itemName?: boolean
  itemContent?: boolean
  itemDeleted?: boolean
  itemMeta?: boolean | FindManyAnnotationMetaArgs
  post?: boolean | PostArgs
  createdAt?: boolean
  updatedAt?: boolean
}

export type AnnotationInclude = {
  user?: boolean | UserArgs
  itemMeta?: boolean | FindManyAnnotationMetaArgs
  post?: boolean | PostArgs
}

export type AnnotationGetPayload<
  S extends boolean | null | undefined | AnnotationArgs,
  U = keyof S
> = S extends true
  ? Annotation
  : S extends undefined
  ? never
  : S extends AnnotationArgs
  ? 'include' extends U
    ? Annotation  & {
      [P in TrueKeys<S['include']>]:
      P extends 'user'
      ? UserGetPayload<S['include'][P]> :
      P extends 'itemMeta'
      ? Array<AnnotationMetaGetPayload<S['include'][P]>> :
      P extends 'post'
      ? PostGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Annotation ? Annotation[P]
: 
      P extends 'user'
      ? UserGetPayload<S['select'][P]> :
      P extends 'itemMeta'
      ? Array<AnnotationMetaGetPayload<S['select'][P]>> :
      P extends 'post'
      ? PostGetPayload<S['select'][P]> : never
    }
  : Annotation
: Annotation


export interface AnnotationDelegate {
  /**
   * Find zero or one Annotation.
   * @param {FindOneAnnotationArgs} args - Arguments to find a Annotation
   * @example
   * // Get one Annotation
   * const annotation = await prisma.annotation.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneAnnotationArgs>(
    args: Subset<T, FindOneAnnotationArgs>
  ): CheckSelect<T, AnnotationClient<Annotation | null>, AnnotationClient<AnnotationGetPayload<T> | null>>
  /**
   * Find zero or more Annotations.
   * @param {FindManyAnnotationArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Annotations
   * const annotations = await prisma.annotation.findMany()
   * 
   * // Get first 10 Annotations
   * const annotations = await prisma.annotation.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const annotationWithIdOnly = await prisma.annotation.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyAnnotationArgs>(
    args?: Subset<T, FindManyAnnotationArgs>
  ): CheckSelect<T, Promise<Array<Annotation>>, Promise<Array<AnnotationGetPayload<T>>>>
  /**
   * Create a Annotation.
   * @param {AnnotationCreateArgs} args - Arguments to create a Annotation.
   * @example
   * // Create one Annotation
   * const user = await prisma.annotation.create({
   *   data: {
   *     // ... data to create a Annotation
   *   }
   * })
   * 
  **/
  create<T extends AnnotationCreateArgs>(
    args: Subset<T, AnnotationCreateArgs>
  ): CheckSelect<T, AnnotationClient<Annotation>, AnnotationClient<AnnotationGetPayload<T>>>
  /**
   * Delete a Annotation.
   * @param {AnnotationDeleteArgs} args - Arguments to delete one Annotation.
   * @example
   * // Delete one Annotation
   * const user = await prisma.annotation.delete({
   *   where: {
   *     // ... filter to delete one Annotation
   *   }
   * })
   * 
  **/
  delete<T extends AnnotationDeleteArgs>(
    args: Subset<T, AnnotationDeleteArgs>
  ): CheckSelect<T, AnnotationClient<Annotation>, AnnotationClient<AnnotationGetPayload<T>>>
  /**
   * Update one Annotation.
   * @param {AnnotationUpdateArgs} args - Arguments to update one Annotation.
   * @example
   * // Update one Annotation
   * const annotation = await prisma.annotation.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends AnnotationUpdateArgs>(
    args: Subset<T, AnnotationUpdateArgs>
  ): CheckSelect<T, AnnotationClient<Annotation>, AnnotationClient<AnnotationGetPayload<T>>>
  /**
   * Delete zero or more Annotations.
   * @param {AnnotationDeleteManyArgs} args - Arguments to filter Annotations to delete.
   * @example
   * // Delete a few Annotations
   * const { count } = await prisma.annotation.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends AnnotationDeleteManyArgs>(
    args: Subset<T, AnnotationDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Annotations.
   * @param {AnnotationUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Annotations
   * const annotation = await prisma.annotation.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends AnnotationUpdateManyArgs>(
    args: Subset<T, AnnotationUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Annotation.
   * @param {AnnotationUpsertArgs} args - Arguments to update or create a Annotation.
   * @example
   * // Update or create a Annotation
   * const annotation = await prisma.annotation.upsert({
   *   create: {
   *     // ... data to create a Annotation
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Annotation we want to update
   *   }
   * })
  **/
  upsert<T extends AnnotationUpsertArgs>(
    args: Subset<T, AnnotationUpsertArgs>
  ): CheckSelect<T, AnnotationClient<Annotation>, AnnotationClient<AnnotationGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class AnnotationClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, UserClient<User | null>, UserClient<UserGetPayload<T> | null>>;

  itemMeta<T extends FindManyAnnotationMetaArgs = {}>(args?: Subset<T, FindManyAnnotationMetaArgs>): CheckSelect<T, Promise<Array<AnnotationMeta>>, Promise<Array<AnnotationMetaGetPayload<T>>>>;

  post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, PostClient<Post | null>, PostClient<PostGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Annotation findOne
 */
export type FindOneAnnotationArgs = {
  /**
   * Select specific fields to fetch from the Annotation
  **/
  select?: AnnotationSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: AnnotationInclude | null
  /**
   * Filter, which Annotation to fetch.
  **/
  where: AnnotationWhereUniqueInput
}


/**
 * Annotation findMany
 */
export type FindManyAnnotationArgs = {
  /**
   * Select specific fields to fetch from the Annotation
  **/
  select?: AnnotationSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: AnnotationInclude | null
  /**
   * Filter, which Annotations to fetch.
  **/
  where?: AnnotationWhereInput | null
  /**
   * Determine the order of the Annotations to fetch.
  **/
  orderBy?: AnnotationOrderByInput | null
  /**
   * Skip the first `n` Annotations.
  **/
  skip?: number | null
  /**
   * Get all Annotations that come after the Annotation you provide with the current order.
  **/
  after?: AnnotationWhereUniqueInput | null
  /**
   * Get all Annotations that come before the Annotation you provide with the current order.
  **/
  before?: AnnotationWhereUniqueInput | null
  /**
   * Get the first `n` Annotations.
  **/
  first?: number | null
  /**
   * Get the last `n` Annotations.
  **/
  last?: number | null
}


/**
 * Annotation create
 */
export type AnnotationCreateArgs = {
  /**
   * Select specific fields to fetch from the Annotation
  **/
  select?: AnnotationSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: AnnotationInclude | null
  /**
   * The data needed to create a Annotation.
  **/
  data: AnnotationCreateInput
}


/**
 * Annotation update
 */
export type AnnotationUpdateArgs = {
  /**
   * Select specific fields to fetch from the Annotation
  **/
  select?: AnnotationSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: AnnotationInclude | null
  /**
   * The data needed to update a Annotation.
  **/
  data: AnnotationUpdateInput
  /**
   * Choose, which Annotation to update.
  **/
  where: AnnotationWhereUniqueInput
}


/**
 * Annotation updateMany
 */
export type AnnotationUpdateManyArgs = {
  data: AnnotationUpdateManyMutationInput
  where?: AnnotationWhereInput | null
}


/**
 * Annotation upsert
 */
export type AnnotationUpsertArgs = {
  /**
   * Select specific fields to fetch from the Annotation
  **/
  select?: AnnotationSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: AnnotationInclude | null
  /**
   * The filter to search for the Annotation to update in case it exists.
  **/
  where: AnnotationWhereUniqueInput
  /**
   * In case the Annotation found by the `where` argument doesn't exist, create a new Annotation with this data.
  **/
  create: AnnotationCreateInput
  /**
   * In case the Annotation was found with the provided `where` argument, update it with this data.
  **/
  update: AnnotationUpdateInput
}


/**
 * Annotation delete
 */
export type AnnotationDeleteArgs = {
  /**
   * Select specific fields to fetch from the Annotation
  **/
  select?: AnnotationSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: AnnotationInclude | null
  /**
   * Filter which Annotation to delete.
  **/
  where: AnnotationWhereUniqueInput
}


/**
 * Annotation deleteMany
 */
export type AnnotationDeleteManyArgs = {
  where?: AnnotationWhereInput | null
}


/**
 * Annotation without action
 */
export type AnnotationArgs = {
  /**
   * Select specific fields to fetch from the Annotation
  **/
  select?: AnnotationSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: AnnotationInclude | null
}



/**
 * Model AnnotationMeta
 */

export type AnnotationMeta = {
  id: string
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type AnnotationMetaSelect = {
  id?: boolean
  annotation?: boolean | AnnotationArgs
  metaType?: boolean
  metaName?: boolean
  metaValue?: boolean
  metaDeleted?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type AnnotationMetaInclude = {
  annotation?: boolean | AnnotationArgs
}

export type AnnotationMetaGetPayload<
  S extends boolean | null | undefined | AnnotationMetaArgs,
  U = keyof S
> = S extends true
  ? AnnotationMeta
  : S extends undefined
  ? never
  : S extends AnnotationMetaArgs
  ? 'include' extends U
    ? AnnotationMeta  & {
      [P in TrueKeys<S['include']>]:
      P extends 'annotation'
      ? AnnotationGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof AnnotationMeta ? AnnotationMeta[P]
: 
      P extends 'annotation'
      ? AnnotationGetPayload<S['select'][P]> : never
    }
  : AnnotationMeta
: AnnotationMeta


export interface AnnotationMetaDelegate {
  /**
   * Find zero or one AnnotationMeta.
   * @param {FindOneAnnotationMetaArgs} args - Arguments to find a AnnotationMeta
   * @example
   * // Get one AnnotationMeta
   * const annotationMeta = await prisma.annotationMeta.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneAnnotationMetaArgs>(
    args: Subset<T, FindOneAnnotationMetaArgs>
  ): CheckSelect<T, AnnotationMetaClient<AnnotationMeta | null>, AnnotationMetaClient<AnnotationMetaGetPayload<T> | null>>
  /**
   * Find zero or more AnnotationMetas.
   * @param {FindManyAnnotationMetaArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all AnnotationMetas
   * const annotationMetas = await prisma.annotationMeta.findMany()
   * 
   * // Get first 10 AnnotationMetas
   * const annotationMetas = await prisma.annotationMeta.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const annotationMetaWithIdOnly = await prisma.annotationMeta.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyAnnotationMetaArgs>(
    args?: Subset<T, FindManyAnnotationMetaArgs>
  ): CheckSelect<T, Promise<Array<AnnotationMeta>>, Promise<Array<AnnotationMetaGetPayload<T>>>>
  /**
   * Create a AnnotationMeta.
   * @param {AnnotationMetaCreateArgs} args - Arguments to create a AnnotationMeta.
   * @example
   * // Create one AnnotationMeta
   * const user = await prisma.annotationMeta.create({
   *   data: {
   *     // ... data to create a AnnotationMeta
   *   }
   * })
   * 
  **/
  create<T extends AnnotationMetaCreateArgs>(
    args: Subset<T, AnnotationMetaCreateArgs>
  ): CheckSelect<T, AnnotationMetaClient<AnnotationMeta>, AnnotationMetaClient<AnnotationMetaGetPayload<T>>>
  /**
   * Delete a AnnotationMeta.
   * @param {AnnotationMetaDeleteArgs} args - Arguments to delete one AnnotationMeta.
   * @example
   * // Delete one AnnotationMeta
   * const user = await prisma.annotationMeta.delete({
   *   where: {
   *     // ... filter to delete one AnnotationMeta
   *   }
   * })
   * 
  **/
  delete<T extends AnnotationMetaDeleteArgs>(
    args: Subset<T, AnnotationMetaDeleteArgs>
  ): CheckSelect<T, AnnotationMetaClient<AnnotationMeta>, AnnotationMetaClient<AnnotationMetaGetPayload<T>>>
  /**
   * Update one AnnotationMeta.
   * @param {AnnotationMetaUpdateArgs} args - Arguments to update one AnnotationMeta.
   * @example
   * // Update one AnnotationMeta
   * const annotationMeta = await prisma.annotationMeta.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends AnnotationMetaUpdateArgs>(
    args: Subset<T, AnnotationMetaUpdateArgs>
  ): CheckSelect<T, AnnotationMetaClient<AnnotationMeta>, AnnotationMetaClient<AnnotationMetaGetPayload<T>>>
  /**
   * Delete zero or more AnnotationMetas.
   * @param {AnnotationMetaDeleteManyArgs} args - Arguments to filter AnnotationMetas to delete.
   * @example
   * // Delete a few AnnotationMetas
   * const { count } = await prisma.annotationMeta.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends AnnotationMetaDeleteManyArgs>(
    args: Subset<T, AnnotationMetaDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more AnnotationMetas.
   * @param {AnnotationMetaUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many AnnotationMetas
   * const annotationMeta = await prisma.annotationMeta.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends AnnotationMetaUpdateManyArgs>(
    args: Subset<T, AnnotationMetaUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one AnnotationMeta.
   * @param {AnnotationMetaUpsertArgs} args - Arguments to update or create a AnnotationMeta.
   * @example
   * // Update or create a AnnotationMeta
   * const annotationMeta = await prisma.annotationMeta.upsert({
   *   create: {
   *     // ... data to create a AnnotationMeta
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the AnnotationMeta we want to update
   *   }
   * })
  **/
  upsert<T extends AnnotationMetaUpsertArgs>(
    args: Subset<T, AnnotationMetaUpsertArgs>
  ): CheckSelect<T, AnnotationMetaClient<AnnotationMeta>, AnnotationMetaClient<AnnotationMetaGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class AnnotationMetaClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  annotation<T extends AnnotationArgs = {}>(args?: Subset<T, AnnotationArgs>): CheckSelect<T, AnnotationClient<Annotation | null>, AnnotationClient<AnnotationGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * AnnotationMeta findOne
 */
export type FindOneAnnotationMetaArgs = {
  /**
   * Select specific fields to fetch from the AnnotationMeta
  **/
  select?: AnnotationMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: AnnotationMetaInclude | null
  /**
   * Filter, which AnnotationMeta to fetch.
  **/
  where: AnnotationMetaWhereUniqueInput
}


/**
 * AnnotationMeta findMany
 */
export type FindManyAnnotationMetaArgs = {
  /**
   * Select specific fields to fetch from the AnnotationMeta
  **/
  select?: AnnotationMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: AnnotationMetaInclude | null
  /**
   * Filter, which AnnotationMetas to fetch.
  **/
  where?: AnnotationMetaWhereInput | null
  /**
   * Determine the order of the AnnotationMetas to fetch.
  **/
  orderBy?: AnnotationMetaOrderByInput | null
  /**
   * Skip the first `n` AnnotationMetas.
  **/
  skip?: number | null
  /**
   * Get all AnnotationMetas that come after the AnnotationMeta you provide with the current order.
  **/
  after?: AnnotationMetaWhereUniqueInput | null
  /**
   * Get all AnnotationMetas that come before the AnnotationMeta you provide with the current order.
  **/
  before?: AnnotationMetaWhereUniqueInput | null
  /**
   * Get the first `n` AnnotationMetas.
  **/
  first?: number | null
  /**
   * Get the last `n` AnnotationMetas.
  **/
  last?: number | null
}


/**
 * AnnotationMeta create
 */
export type AnnotationMetaCreateArgs = {
  /**
   * Select specific fields to fetch from the AnnotationMeta
  **/
  select?: AnnotationMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: AnnotationMetaInclude | null
  /**
   * The data needed to create a AnnotationMeta.
  **/
  data: AnnotationMetaCreateInput
}


/**
 * AnnotationMeta update
 */
export type AnnotationMetaUpdateArgs = {
  /**
   * Select specific fields to fetch from the AnnotationMeta
  **/
  select?: AnnotationMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: AnnotationMetaInclude | null
  /**
   * The data needed to update a AnnotationMeta.
  **/
  data: AnnotationMetaUpdateInput
  /**
   * Choose, which AnnotationMeta to update.
  **/
  where: AnnotationMetaWhereUniqueInput
}


/**
 * AnnotationMeta updateMany
 */
export type AnnotationMetaUpdateManyArgs = {
  data: AnnotationMetaUpdateManyMutationInput
  where?: AnnotationMetaWhereInput | null
}


/**
 * AnnotationMeta upsert
 */
export type AnnotationMetaUpsertArgs = {
  /**
   * Select specific fields to fetch from the AnnotationMeta
  **/
  select?: AnnotationMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: AnnotationMetaInclude | null
  /**
   * The filter to search for the AnnotationMeta to update in case it exists.
  **/
  where: AnnotationMetaWhereUniqueInput
  /**
   * In case the AnnotationMeta found by the `where` argument doesn't exist, create a new AnnotationMeta with this data.
  **/
  create: AnnotationMetaCreateInput
  /**
   * In case the AnnotationMeta was found with the provided `where` argument, update it with this data.
  **/
  update: AnnotationMetaUpdateInput
}


/**
 * AnnotationMeta delete
 */
export type AnnotationMetaDeleteArgs = {
  /**
   * Select specific fields to fetch from the AnnotationMeta
  **/
  select?: AnnotationMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: AnnotationMetaInclude | null
  /**
   * Filter which AnnotationMeta to delete.
  **/
  where: AnnotationMetaWhereUniqueInput
}


/**
 * AnnotationMeta deleteMany
 */
export type AnnotationMetaDeleteManyArgs = {
  where?: AnnotationMetaWhereInput | null
}


/**
 * AnnotationMeta without action
 */
export type AnnotationMetaArgs = {
  /**
   * Select specific fields to fetch from the AnnotationMeta
  **/
  select?: AnnotationMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: AnnotationMetaInclude | null
}



/**
 * Model Question
 */

export type Question = {
  id: string
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type QuestionSelect = {
  id?: boolean
  user?: boolean | UserArgs
  itemType?: boolean
  itemStatus?: boolean
  itemUrlSegment?: boolean
  itemMimeType?: boolean
  itemName?: boolean
  itemContent?: boolean
  itemDeleted?: boolean
  itemMeta?: boolean | FindManyQuestionMetaArgs
  post?: boolean | PostArgs
  createdAt?: boolean
  updatedAt?: boolean
}

export type QuestionInclude = {
  user?: boolean | UserArgs
  itemMeta?: boolean | FindManyQuestionMetaArgs
  post?: boolean | PostArgs
}

export type QuestionGetPayload<
  S extends boolean | null | undefined | QuestionArgs,
  U = keyof S
> = S extends true
  ? Question
  : S extends undefined
  ? never
  : S extends QuestionArgs
  ? 'include' extends U
    ? Question  & {
      [P in TrueKeys<S['include']>]:
      P extends 'user'
      ? UserGetPayload<S['include'][P]> :
      P extends 'itemMeta'
      ? Array<QuestionMetaGetPayload<S['include'][P]>> :
      P extends 'post'
      ? PostGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Question ? Question[P]
: 
      P extends 'user'
      ? UserGetPayload<S['select'][P]> :
      P extends 'itemMeta'
      ? Array<QuestionMetaGetPayload<S['select'][P]>> :
      P extends 'post'
      ? PostGetPayload<S['select'][P]> : never
    }
  : Question
: Question


export interface QuestionDelegate {
  /**
   * Find zero or one Question.
   * @param {FindOneQuestionArgs} args - Arguments to find a Question
   * @example
   * // Get one Question
   * const question = await prisma.question.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneQuestionArgs>(
    args: Subset<T, FindOneQuestionArgs>
  ): CheckSelect<T, QuestionClient<Question | null>, QuestionClient<QuestionGetPayload<T> | null>>
  /**
   * Find zero or more Questions.
   * @param {FindManyQuestionArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Questions
   * const questions = await prisma.question.findMany()
   * 
   * // Get first 10 Questions
   * const questions = await prisma.question.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyQuestionArgs>(
    args?: Subset<T, FindManyQuestionArgs>
  ): CheckSelect<T, Promise<Array<Question>>, Promise<Array<QuestionGetPayload<T>>>>
  /**
   * Create a Question.
   * @param {QuestionCreateArgs} args - Arguments to create a Question.
   * @example
   * // Create one Question
   * const user = await prisma.question.create({
   *   data: {
   *     // ... data to create a Question
   *   }
   * })
   * 
  **/
  create<T extends QuestionCreateArgs>(
    args: Subset<T, QuestionCreateArgs>
  ): CheckSelect<T, QuestionClient<Question>, QuestionClient<QuestionGetPayload<T>>>
  /**
   * Delete a Question.
   * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
   * @example
   * // Delete one Question
   * const user = await prisma.question.delete({
   *   where: {
   *     // ... filter to delete one Question
   *   }
   * })
   * 
  **/
  delete<T extends QuestionDeleteArgs>(
    args: Subset<T, QuestionDeleteArgs>
  ): CheckSelect<T, QuestionClient<Question>, QuestionClient<QuestionGetPayload<T>>>
  /**
   * Update one Question.
   * @param {QuestionUpdateArgs} args - Arguments to update one Question.
   * @example
   * // Update one Question
   * const question = await prisma.question.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends QuestionUpdateArgs>(
    args: Subset<T, QuestionUpdateArgs>
  ): CheckSelect<T, QuestionClient<Question>, QuestionClient<QuestionGetPayload<T>>>
  /**
   * Delete zero or more Questions.
   * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
   * @example
   * // Delete a few Questions
   * const { count } = await prisma.question.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends QuestionDeleteManyArgs>(
    args: Subset<T, QuestionDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Questions.
   * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Questions
   * const question = await prisma.question.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends QuestionUpdateManyArgs>(
    args: Subset<T, QuestionUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Question.
   * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
   * @example
   * // Update or create a Question
   * const question = await prisma.question.upsert({
   *   create: {
   *     // ... data to create a Question
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Question we want to update
   *   }
   * })
  **/
  upsert<T extends QuestionUpsertArgs>(
    args: Subset<T, QuestionUpsertArgs>
  ): CheckSelect<T, QuestionClient<Question>, QuestionClient<QuestionGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class QuestionClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, UserClient<User | null>, UserClient<UserGetPayload<T> | null>>;

  itemMeta<T extends FindManyQuestionMetaArgs = {}>(args?: Subset<T, FindManyQuestionMetaArgs>): CheckSelect<T, Promise<Array<QuestionMeta>>, Promise<Array<QuestionMetaGetPayload<T>>>>;

  post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, PostClient<Post | null>, PostClient<PostGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Question findOne
 */
export type FindOneQuestionArgs = {
  /**
   * Select specific fields to fetch from the Question
  **/
  select?: QuestionSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: QuestionInclude | null
  /**
   * Filter, which Question to fetch.
  **/
  where: QuestionWhereUniqueInput
}


/**
 * Question findMany
 */
export type FindManyQuestionArgs = {
  /**
   * Select specific fields to fetch from the Question
  **/
  select?: QuestionSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: QuestionInclude | null
  /**
   * Filter, which Questions to fetch.
  **/
  where?: QuestionWhereInput | null
  /**
   * Determine the order of the Questions to fetch.
  **/
  orderBy?: QuestionOrderByInput | null
  /**
   * Skip the first `n` Questions.
  **/
  skip?: number | null
  /**
   * Get all Questions that come after the Question you provide with the current order.
  **/
  after?: QuestionWhereUniqueInput | null
  /**
   * Get all Questions that come before the Question you provide with the current order.
  **/
  before?: QuestionWhereUniqueInput | null
  /**
   * Get the first `n` Questions.
  **/
  first?: number | null
  /**
   * Get the last `n` Questions.
  **/
  last?: number | null
}


/**
 * Question create
 */
export type QuestionCreateArgs = {
  /**
   * Select specific fields to fetch from the Question
  **/
  select?: QuestionSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: QuestionInclude | null
  /**
   * The data needed to create a Question.
  **/
  data: QuestionCreateInput
}


/**
 * Question update
 */
export type QuestionUpdateArgs = {
  /**
   * Select specific fields to fetch from the Question
  **/
  select?: QuestionSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: QuestionInclude | null
  /**
   * The data needed to update a Question.
  **/
  data: QuestionUpdateInput
  /**
   * Choose, which Question to update.
  **/
  where: QuestionWhereUniqueInput
}


/**
 * Question updateMany
 */
export type QuestionUpdateManyArgs = {
  data: QuestionUpdateManyMutationInput
  where?: QuestionWhereInput | null
}


/**
 * Question upsert
 */
export type QuestionUpsertArgs = {
  /**
   * Select specific fields to fetch from the Question
  **/
  select?: QuestionSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: QuestionInclude | null
  /**
   * The filter to search for the Question to update in case it exists.
  **/
  where: QuestionWhereUniqueInput
  /**
   * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
  **/
  create: QuestionCreateInput
  /**
   * In case the Question was found with the provided `where` argument, update it with this data.
  **/
  update: QuestionUpdateInput
}


/**
 * Question delete
 */
export type QuestionDeleteArgs = {
  /**
   * Select specific fields to fetch from the Question
  **/
  select?: QuestionSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: QuestionInclude | null
  /**
   * Filter which Question to delete.
  **/
  where: QuestionWhereUniqueInput
}


/**
 * Question deleteMany
 */
export type QuestionDeleteManyArgs = {
  where?: QuestionWhereInput | null
}


/**
 * Question without action
 */
export type QuestionArgs = {
  /**
   * Select specific fields to fetch from the Question
  **/
  select?: QuestionSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: QuestionInclude | null
}



/**
 * Model QuestionMeta
 */

export type QuestionMeta = {
  id: string
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type QuestionMetaSelect = {
  id?: boolean
  question?: boolean | QuestionArgs
  metaType?: boolean
  metaName?: boolean
  metaValue?: boolean
  metaDeleted?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type QuestionMetaInclude = {
  question?: boolean | QuestionArgs
}

export type QuestionMetaGetPayload<
  S extends boolean | null | undefined | QuestionMetaArgs,
  U = keyof S
> = S extends true
  ? QuestionMeta
  : S extends undefined
  ? never
  : S extends QuestionMetaArgs
  ? 'include' extends U
    ? QuestionMeta  & {
      [P in TrueKeys<S['include']>]:
      P extends 'question'
      ? QuestionGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof QuestionMeta ? QuestionMeta[P]
: 
      P extends 'question'
      ? QuestionGetPayload<S['select'][P]> : never
    }
  : QuestionMeta
: QuestionMeta


export interface QuestionMetaDelegate {
  /**
   * Find zero or one QuestionMeta.
   * @param {FindOneQuestionMetaArgs} args - Arguments to find a QuestionMeta
   * @example
   * // Get one QuestionMeta
   * const questionMeta = await prisma.questionMeta.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneQuestionMetaArgs>(
    args: Subset<T, FindOneQuestionMetaArgs>
  ): CheckSelect<T, QuestionMetaClient<QuestionMeta | null>, QuestionMetaClient<QuestionMetaGetPayload<T> | null>>
  /**
   * Find zero or more QuestionMetas.
   * @param {FindManyQuestionMetaArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all QuestionMetas
   * const questionMetas = await prisma.questionMeta.findMany()
   * 
   * // Get first 10 QuestionMetas
   * const questionMetas = await prisma.questionMeta.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const questionMetaWithIdOnly = await prisma.questionMeta.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyQuestionMetaArgs>(
    args?: Subset<T, FindManyQuestionMetaArgs>
  ): CheckSelect<T, Promise<Array<QuestionMeta>>, Promise<Array<QuestionMetaGetPayload<T>>>>
  /**
   * Create a QuestionMeta.
   * @param {QuestionMetaCreateArgs} args - Arguments to create a QuestionMeta.
   * @example
   * // Create one QuestionMeta
   * const user = await prisma.questionMeta.create({
   *   data: {
   *     // ... data to create a QuestionMeta
   *   }
   * })
   * 
  **/
  create<T extends QuestionMetaCreateArgs>(
    args: Subset<T, QuestionMetaCreateArgs>
  ): CheckSelect<T, QuestionMetaClient<QuestionMeta>, QuestionMetaClient<QuestionMetaGetPayload<T>>>
  /**
   * Delete a QuestionMeta.
   * @param {QuestionMetaDeleteArgs} args - Arguments to delete one QuestionMeta.
   * @example
   * // Delete one QuestionMeta
   * const user = await prisma.questionMeta.delete({
   *   where: {
   *     // ... filter to delete one QuestionMeta
   *   }
   * })
   * 
  **/
  delete<T extends QuestionMetaDeleteArgs>(
    args: Subset<T, QuestionMetaDeleteArgs>
  ): CheckSelect<T, QuestionMetaClient<QuestionMeta>, QuestionMetaClient<QuestionMetaGetPayload<T>>>
  /**
   * Update one QuestionMeta.
   * @param {QuestionMetaUpdateArgs} args - Arguments to update one QuestionMeta.
   * @example
   * // Update one QuestionMeta
   * const questionMeta = await prisma.questionMeta.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends QuestionMetaUpdateArgs>(
    args: Subset<T, QuestionMetaUpdateArgs>
  ): CheckSelect<T, QuestionMetaClient<QuestionMeta>, QuestionMetaClient<QuestionMetaGetPayload<T>>>
  /**
   * Delete zero or more QuestionMetas.
   * @param {QuestionMetaDeleteManyArgs} args - Arguments to filter QuestionMetas to delete.
   * @example
   * // Delete a few QuestionMetas
   * const { count } = await prisma.questionMeta.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends QuestionMetaDeleteManyArgs>(
    args: Subset<T, QuestionMetaDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more QuestionMetas.
   * @param {QuestionMetaUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many QuestionMetas
   * const questionMeta = await prisma.questionMeta.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends QuestionMetaUpdateManyArgs>(
    args: Subset<T, QuestionMetaUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one QuestionMeta.
   * @param {QuestionMetaUpsertArgs} args - Arguments to update or create a QuestionMeta.
   * @example
   * // Update or create a QuestionMeta
   * const questionMeta = await prisma.questionMeta.upsert({
   *   create: {
   *     // ... data to create a QuestionMeta
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the QuestionMeta we want to update
   *   }
   * })
  **/
  upsert<T extends QuestionMetaUpsertArgs>(
    args: Subset<T, QuestionMetaUpsertArgs>
  ): CheckSelect<T, QuestionMetaClient<QuestionMeta>, QuestionMetaClient<QuestionMetaGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class QuestionMetaClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  question<T extends QuestionArgs = {}>(args?: Subset<T, QuestionArgs>): CheckSelect<T, QuestionClient<Question | null>, QuestionClient<QuestionGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * QuestionMeta findOne
 */
export type FindOneQuestionMetaArgs = {
  /**
   * Select specific fields to fetch from the QuestionMeta
  **/
  select?: QuestionMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: QuestionMetaInclude | null
  /**
   * Filter, which QuestionMeta to fetch.
  **/
  where: QuestionMetaWhereUniqueInput
}


/**
 * QuestionMeta findMany
 */
export type FindManyQuestionMetaArgs = {
  /**
   * Select specific fields to fetch from the QuestionMeta
  **/
  select?: QuestionMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: QuestionMetaInclude | null
  /**
   * Filter, which QuestionMetas to fetch.
  **/
  where?: QuestionMetaWhereInput | null
  /**
   * Determine the order of the QuestionMetas to fetch.
  **/
  orderBy?: QuestionMetaOrderByInput | null
  /**
   * Skip the first `n` QuestionMetas.
  **/
  skip?: number | null
  /**
   * Get all QuestionMetas that come after the QuestionMeta you provide with the current order.
  **/
  after?: QuestionMetaWhereUniqueInput | null
  /**
   * Get all QuestionMetas that come before the QuestionMeta you provide with the current order.
  **/
  before?: QuestionMetaWhereUniqueInput | null
  /**
   * Get the first `n` QuestionMetas.
  **/
  first?: number | null
  /**
   * Get the last `n` QuestionMetas.
  **/
  last?: number | null
}


/**
 * QuestionMeta create
 */
export type QuestionMetaCreateArgs = {
  /**
   * Select specific fields to fetch from the QuestionMeta
  **/
  select?: QuestionMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: QuestionMetaInclude | null
  /**
   * The data needed to create a QuestionMeta.
  **/
  data: QuestionMetaCreateInput
}


/**
 * QuestionMeta update
 */
export type QuestionMetaUpdateArgs = {
  /**
   * Select specific fields to fetch from the QuestionMeta
  **/
  select?: QuestionMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: QuestionMetaInclude | null
  /**
   * The data needed to update a QuestionMeta.
  **/
  data: QuestionMetaUpdateInput
  /**
   * Choose, which QuestionMeta to update.
  **/
  where: QuestionMetaWhereUniqueInput
}


/**
 * QuestionMeta updateMany
 */
export type QuestionMetaUpdateManyArgs = {
  data: QuestionMetaUpdateManyMutationInput
  where?: QuestionMetaWhereInput | null
}


/**
 * QuestionMeta upsert
 */
export type QuestionMetaUpsertArgs = {
  /**
   * Select specific fields to fetch from the QuestionMeta
  **/
  select?: QuestionMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: QuestionMetaInclude | null
  /**
   * The filter to search for the QuestionMeta to update in case it exists.
  **/
  where: QuestionMetaWhereUniqueInput
  /**
   * In case the QuestionMeta found by the `where` argument doesn't exist, create a new QuestionMeta with this data.
  **/
  create: QuestionMetaCreateInput
  /**
   * In case the QuestionMeta was found with the provided `where` argument, update it with this data.
  **/
  update: QuestionMetaUpdateInput
}


/**
 * QuestionMeta delete
 */
export type QuestionMetaDeleteArgs = {
  /**
   * Select specific fields to fetch from the QuestionMeta
  **/
  select?: QuestionMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: QuestionMetaInclude | null
  /**
   * Filter which QuestionMeta to delete.
  **/
  where: QuestionMetaWhereUniqueInput
}


/**
 * QuestionMeta deleteMany
 */
export type QuestionMetaDeleteManyArgs = {
  where?: QuestionMetaWhereInput | null
}


/**
 * QuestionMeta without action
 */
export type QuestionMetaArgs = {
  /**
   * Select specific fields to fetch from the QuestionMeta
  **/
  select?: QuestionMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: QuestionMetaInclude | null
}



/**
 * Model Thread
 */

export type Thread = {
  id: string
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type ThreadSelect = {
  id?: boolean
  itemType?: boolean
  itemStatus?: boolean
  itemName?: boolean
  itemContent?: boolean
  itemDeleted?: boolean
  itemMeta?: boolean | FindManyThreadMetaArgs
  messages?: boolean | FindManyMessageArgs
  participants?: boolean | FindManyUserArgs
  createdAt?: boolean
  updatedAt?: boolean
}

export type ThreadInclude = {
  itemMeta?: boolean | FindManyThreadMetaArgs
  messages?: boolean | FindManyMessageArgs
  participants?: boolean | FindManyUserArgs
}

export type ThreadGetPayload<
  S extends boolean | null | undefined | ThreadArgs,
  U = keyof S
> = S extends true
  ? Thread
  : S extends undefined
  ? never
  : S extends ThreadArgs
  ? 'include' extends U
    ? Thread  & {
      [P in TrueKeys<S['include']>]:
      P extends 'itemMeta'
      ? Array<ThreadMetaGetPayload<S['include'][P]>> :
      P extends 'messages'
      ? Array<MessageGetPayload<S['include'][P]>> :
      P extends 'participants'
      ? Array<UserGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Thread ? Thread[P]
: 
      P extends 'itemMeta'
      ? Array<ThreadMetaGetPayload<S['select'][P]>> :
      P extends 'messages'
      ? Array<MessageGetPayload<S['select'][P]>> :
      P extends 'participants'
      ? Array<UserGetPayload<S['select'][P]>> : never
    }
  : Thread
: Thread


export interface ThreadDelegate {
  /**
   * Find zero or one Thread.
   * @param {FindOneThreadArgs} args - Arguments to find a Thread
   * @example
   * // Get one Thread
   * const thread = await prisma.thread.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneThreadArgs>(
    args: Subset<T, FindOneThreadArgs>
  ): CheckSelect<T, ThreadClient<Thread | null>, ThreadClient<ThreadGetPayload<T> | null>>
  /**
   * Find zero or more Threads.
   * @param {FindManyThreadArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Threads
   * const threads = await prisma.thread.findMany()
   * 
   * // Get first 10 Threads
   * const threads = await prisma.thread.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const threadWithIdOnly = await prisma.thread.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyThreadArgs>(
    args?: Subset<T, FindManyThreadArgs>
  ): CheckSelect<T, Promise<Array<Thread>>, Promise<Array<ThreadGetPayload<T>>>>
  /**
   * Create a Thread.
   * @param {ThreadCreateArgs} args - Arguments to create a Thread.
   * @example
   * // Create one Thread
   * const user = await prisma.thread.create({
   *   data: {
   *     // ... data to create a Thread
   *   }
   * })
   * 
  **/
  create<T extends ThreadCreateArgs>(
    args: Subset<T, ThreadCreateArgs>
  ): CheckSelect<T, ThreadClient<Thread>, ThreadClient<ThreadGetPayload<T>>>
  /**
   * Delete a Thread.
   * @param {ThreadDeleteArgs} args - Arguments to delete one Thread.
   * @example
   * // Delete one Thread
   * const user = await prisma.thread.delete({
   *   where: {
   *     // ... filter to delete one Thread
   *   }
   * })
   * 
  **/
  delete<T extends ThreadDeleteArgs>(
    args: Subset<T, ThreadDeleteArgs>
  ): CheckSelect<T, ThreadClient<Thread>, ThreadClient<ThreadGetPayload<T>>>
  /**
   * Update one Thread.
   * @param {ThreadUpdateArgs} args - Arguments to update one Thread.
   * @example
   * // Update one Thread
   * const thread = await prisma.thread.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends ThreadUpdateArgs>(
    args: Subset<T, ThreadUpdateArgs>
  ): CheckSelect<T, ThreadClient<Thread>, ThreadClient<ThreadGetPayload<T>>>
  /**
   * Delete zero or more Threads.
   * @param {ThreadDeleteManyArgs} args - Arguments to filter Threads to delete.
   * @example
   * // Delete a few Threads
   * const { count } = await prisma.thread.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends ThreadDeleteManyArgs>(
    args: Subset<T, ThreadDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Threads.
   * @param {ThreadUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Threads
   * const thread = await prisma.thread.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends ThreadUpdateManyArgs>(
    args: Subset<T, ThreadUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Thread.
   * @param {ThreadUpsertArgs} args - Arguments to update or create a Thread.
   * @example
   * // Update or create a Thread
   * const thread = await prisma.thread.upsert({
   *   create: {
   *     // ... data to create a Thread
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Thread we want to update
   *   }
   * })
  **/
  upsert<T extends ThreadUpsertArgs>(
    args: Subset<T, ThreadUpsertArgs>
  ): CheckSelect<T, ThreadClient<Thread>, ThreadClient<ThreadGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class ThreadClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  itemMeta<T extends FindManyThreadMetaArgs = {}>(args?: Subset<T, FindManyThreadMetaArgs>): CheckSelect<T, Promise<Array<ThreadMeta>>, Promise<Array<ThreadMetaGetPayload<T>>>>;

  messages<T extends FindManyMessageArgs = {}>(args?: Subset<T, FindManyMessageArgs>): CheckSelect<T, Promise<Array<Message>>, Promise<Array<MessageGetPayload<T>>>>;

  participants<T extends FindManyUserArgs = {}>(args?: Subset<T, FindManyUserArgs>): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Thread findOne
 */
export type FindOneThreadArgs = {
  /**
   * Select specific fields to fetch from the Thread
  **/
  select?: ThreadSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ThreadInclude | null
  /**
   * Filter, which Thread to fetch.
  **/
  where: ThreadWhereUniqueInput
}


/**
 * Thread findMany
 */
export type FindManyThreadArgs = {
  /**
   * Select specific fields to fetch from the Thread
  **/
  select?: ThreadSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ThreadInclude | null
  /**
   * Filter, which Threads to fetch.
  **/
  where?: ThreadWhereInput | null
  /**
   * Determine the order of the Threads to fetch.
  **/
  orderBy?: ThreadOrderByInput | null
  /**
   * Skip the first `n` Threads.
  **/
  skip?: number | null
  /**
   * Get all Threads that come after the Thread you provide with the current order.
  **/
  after?: ThreadWhereUniqueInput | null
  /**
   * Get all Threads that come before the Thread you provide with the current order.
  **/
  before?: ThreadWhereUniqueInput | null
  /**
   * Get the first `n` Threads.
  **/
  first?: number | null
  /**
   * Get the last `n` Threads.
  **/
  last?: number | null
}


/**
 * Thread create
 */
export type ThreadCreateArgs = {
  /**
   * Select specific fields to fetch from the Thread
  **/
  select?: ThreadSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ThreadInclude | null
  /**
   * The data needed to create a Thread.
  **/
  data: ThreadCreateInput
}


/**
 * Thread update
 */
export type ThreadUpdateArgs = {
  /**
   * Select specific fields to fetch from the Thread
  **/
  select?: ThreadSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ThreadInclude | null
  /**
   * The data needed to update a Thread.
  **/
  data: ThreadUpdateInput
  /**
   * Choose, which Thread to update.
  **/
  where: ThreadWhereUniqueInput
}


/**
 * Thread updateMany
 */
export type ThreadUpdateManyArgs = {
  data: ThreadUpdateManyMutationInput
  where?: ThreadWhereInput | null
}


/**
 * Thread upsert
 */
export type ThreadUpsertArgs = {
  /**
   * Select specific fields to fetch from the Thread
  **/
  select?: ThreadSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ThreadInclude | null
  /**
   * The filter to search for the Thread to update in case it exists.
  **/
  where: ThreadWhereUniqueInput
  /**
   * In case the Thread found by the `where` argument doesn't exist, create a new Thread with this data.
  **/
  create: ThreadCreateInput
  /**
   * In case the Thread was found with the provided `where` argument, update it with this data.
  **/
  update: ThreadUpdateInput
}


/**
 * Thread delete
 */
export type ThreadDeleteArgs = {
  /**
   * Select specific fields to fetch from the Thread
  **/
  select?: ThreadSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ThreadInclude | null
  /**
   * Filter which Thread to delete.
  **/
  where: ThreadWhereUniqueInput
}


/**
 * Thread deleteMany
 */
export type ThreadDeleteManyArgs = {
  where?: ThreadWhereInput | null
}


/**
 * Thread without action
 */
export type ThreadArgs = {
  /**
   * Select specific fields to fetch from the Thread
  **/
  select?: ThreadSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ThreadInclude | null
}



/**
 * Model ThreadMeta
 */

export type ThreadMeta = {
  id: string
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type ThreadMetaSelect = {
  id?: boolean
  thread?: boolean | ThreadArgs
  metaType?: boolean
  metaName?: boolean
  metaValue?: boolean
  metaDeleted?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type ThreadMetaInclude = {
  thread?: boolean | ThreadArgs
}

export type ThreadMetaGetPayload<
  S extends boolean | null | undefined | ThreadMetaArgs,
  U = keyof S
> = S extends true
  ? ThreadMeta
  : S extends undefined
  ? never
  : S extends ThreadMetaArgs
  ? 'include' extends U
    ? ThreadMeta  & {
      [P in TrueKeys<S['include']>]:
      P extends 'thread'
      ? ThreadGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof ThreadMeta ? ThreadMeta[P]
: 
      P extends 'thread'
      ? ThreadGetPayload<S['select'][P]> : never
    }
  : ThreadMeta
: ThreadMeta


export interface ThreadMetaDelegate {
  /**
   * Find zero or one ThreadMeta.
   * @param {FindOneThreadMetaArgs} args - Arguments to find a ThreadMeta
   * @example
   * // Get one ThreadMeta
   * const threadMeta = await prisma.threadMeta.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneThreadMetaArgs>(
    args: Subset<T, FindOneThreadMetaArgs>
  ): CheckSelect<T, ThreadMetaClient<ThreadMeta | null>, ThreadMetaClient<ThreadMetaGetPayload<T> | null>>
  /**
   * Find zero or more ThreadMetas.
   * @param {FindManyThreadMetaArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all ThreadMetas
   * const threadMetas = await prisma.threadMeta.findMany()
   * 
   * // Get first 10 ThreadMetas
   * const threadMetas = await prisma.threadMeta.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const threadMetaWithIdOnly = await prisma.threadMeta.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyThreadMetaArgs>(
    args?: Subset<T, FindManyThreadMetaArgs>
  ): CheckSelect<T, Promise<Array<ThreadMeta>>, Promise<Array<ThreadMetaGetPayload<T>>>>
  /**
   * Create a ThreadMeta.
   * @param {ThreadMetaCreateArgs} args - Arguments to create a ThreadMeta.
   * @example
   * // Create one ThreadMeta
   * const user = await prisma.threadMeta.create({
   *   data: {
   *     // ... data to create a ThreadMeta
   *   }
   * })
   * 
  **/
  create<T extends ThreadMetaCreateArgs>(
    args: Subset<T, ThreadMetaCreateArgs>
  ): CheckSelect<T, ThreadMetaClient<ThreadMeta>, ThreadMetaClient<ThreadMetaGetPayload<T>>>
  /**
   * Delete a ThreadMeta.
   * @param {ThreadMetaDeleteArgs} args - Arguments to delete one ThreadMeta.
   * @example
   * // Delete one ThreadMeta
   * const user = await prisma.threadMeta.delete({
   *   where: {
   *     // ... filter to delete one ThreadMeta
   *   }
   * })
   * 
  **/
  delete<T extends ThreadMetaDeleteArgs>(
    args: Subset<T, ThreadMetaDeleteArgs>
  ): CheckSelect<T, ThreadMetaClient<ThreadMeta>, ThreadMetaClient<ThreadMetaGetPayload<T>>>
  /**
   * Update one ThreadMeta.
   * @param {ThreadMetaUpdateArgs} args - Arguments to update one ThreadMeta.
   * @example
   * // Update one ThreadMeta
   * const threadMeta = await prisma.threadMeta.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends ThreadMetaUpdateArgs>(
    args: Subset<T, ThreadMetaUpdateArgs>
  ): CheckSelect<T, ThreadMetaClient<ThreadMeta>, ThreadMetaClient<ThreadMetaGetPayload<T>>>
  /**
   * Delete zero or more ThreadMetas.
   * @param {ThreadMetaDeleteManyArgs} args - Arguments to filter ThreadMetas to delete.
   * @example
   * // Delete a few ThreadMetas
   * const { count } = await prisma.threadMeta.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends ThreadMetaDeleteManyArgs>(
    args: Subset<T, ThreadMetaDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more ThreadMetas.
   * @param {ThreadMetaUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many ThreadMetas
   * const threadMeta = await prisma.threadMeta.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends ThreadMetaUpdateManyArgs>(
    args: Subset<T, ThreadMetaUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one ThreadMeta.
   * @param {ThreadMetaUpsertArgs} args - Arguments to update or create a ThreadMeta.
   * @example
   * // Update or create a ThreadMeta
   * const threadMeta = await prisma.threadMeta.upsert({
   *   create: {
   *     // ... data to create a ThreadMeta
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the ThreadMeta we want to update
   *   }
   * })
  **/
  upsert<T extends ThreadMetaUpsertArgs>(
    args: Subset<T, ThreadMetaUpsertArgs>
  ): CheckSelect<T, ThreadMetaClient<ThreadMeta>, ThreadMetaClient<ThreadMetaGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class ThreadMetaClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  thread<T extends ThreadArgs = {}>(args?: Subset<T, ThreadArgs>): CheckSelect<T, ThreadClient<Thread | null>, ThreadClient<ThreadGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * ThreadMeta findOne
 */
export type FindOneThreadMetaArgs = {
  /**
   * Select specific fields to fetch from the ThreadMeta
  **/
  select?: ThreadMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ThreadMetaInclude | null
  /**
   * Filter, which ThreadMeta to fetch.
  **/
  where: ThreadMetaWhereUniqueInput
}


/**
 * ThreadMeta findMany
 */
export type FindManyThreadMetaArgs = {
  /**
   * Select specific fields to fetch from the ThreadMeta
  **/
  select?: ThreadMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ThreadMetaInclude | null
  /**
   * Filter, which ThreadMetas to fetch.
  **/
  where?: ThreadMetaWhereInput | null
  /**
   * Determine the order of the ThreadMetas to fetch.
  **/
  orderBy?: ThreadMetaOrderByInput | null
  /**
   * Skip the first `n` ThreadMetas.
  **/
  skip?: number | null
  /**
   * Get all ThreadMetas that come after the ThreadMeta you provide with the current order.
  **/
  after?: ThreadMetaWhereUniqueInput | null
  /**
   * Get all ThreadMetas that come before the ThreadMeta you provide with the current order.
  **/
  before?: ThreadMetaWhereUniqueInput | null
  /**
   * Get the first `n` ThreadMetas.
  **/
  first?: number | null
  /**
   * Get the last `n` ThreadMetas.
  **/
  last?: number | null
}


/**
 * ThreadMeta create
 */
export type ThreadMetaCreateArgs = {
  /**
   * Select specific fields to fetch from the ThreadMeta
  **/
  select?: ThreadMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ThreadMetaInclude | null
  /**
   * The data needed to create a ThreadMeta.
  **/
  data: ThreadMetaCreateInput
}


/**
 * ThreadMeta update
 */
export type ThreadMetaUpdateArgs = {
  /**
   * Select specific fields to fetch from the ThreadMeta
  **/
  select?: ThreadMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ThreadMetaInclude | null
  /**
   * The data needed to update a ThreadMeta.
  **/
  data: ThreadMetaUpdateInput
  /**
   * Choose, which ThreadMeta to update.
  **/
  where: ThreadMetaWhereUniqueInput
}


/**
 * ThreadMeta updateMany
 */
export type ThreadMetaUpdateManyArgs = {
  data: ThreadMetaUpdateManyMutationInput
  where?: ThreadMetaWhereInput | null
}


/**
 * ThreadMeta upsert
 */
export type ThreadMetaUpsertArgs = {
  /**
   * Select specific fields to fetch from the ThreadMeta
  **/
  select?: ThreadMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ThreadMetaInclude | null
  /**
   * The filter to search for the ThreadMeta to update in case it exists.
  **/
  where: ThreadMetaWhereUniqueInput
  /**
   * In case the ThreadMeta found by the `where` argument doesn't exist, create a new ThreadMeta with this data.
  **/
  create: ThreadMetaCreateInput
  /**
   * In case the ThreadMeta was found with the provided `where` argument, update it with this data.
  **/
  update: ThreadMetaUpdateInput
}


/**
 * ThreadMeta delete
 */
export type ThreadMetaDeleteArgs = {
  /**
   * Select specific fields to fetch from the ThreadMeta
  **/
  select?: ThreadMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ThreadMetaInclude | null
  /**
   * Filter which ThreadMeta to delete.
  **/
  where: ThreadMetaWhereUniqueInput
}


/**
 * ThreadMeta deleteMany
 */
export type ThreadMetaDeleteManyArgs = {
  where?: ThreadMetaWhereInput | null
}


/**
 * ThreadMeta without action
 */
export type ThreadMetaArgs = {
  /**
   * Select specific fields to fetch from the ThreadMeta
  **/
  select?: ThreadMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ThreadMetaInclude | null
}



/**
 * Model Message
 */

export type Message = {
  id: string
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type MessageSelect = {
  id?: boolean
  user?: boolean | UserArgs
  itemType?: boolean
  itemStatus?: boolean
  itemName?: boolean
  itemContent?: boolean
  itemDeleted?: boolean
  itemMeta?: boolean | FindManyMessageMetaArgs
  thread?: boolean | ThreadArgs
  createdAt?: boolean
  updatedAt?: boolean
}

export type MessageInclude = {
  user?: boolean | UserArgs
  itemMeta?: boolean | FindManyMessageMetaArgs
  thread?: boolean | ThreadArgs
}

export type MessageGetPayload<
  S extends boolean | null | undefined | MessageArgs,
  U = keyof S
> = S extends true
  ? Message
  : S extends undefined
  ? never
  : S extends MessageArgs
  ? 'include' extends U
    ? Message  & {
      [P in TrueKeys<S['include']>]:
      P extends 'user'
      ? UserGetPayload<S['include'][P]> :
      P extends 'itemMeta'
      ? Array<MessageMetaGetPayload<S['include'][P]>> :
      P extends 'thread'
      ? ThreadGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Message ? Message[P]
: 
      P extends 'user'
      ? UserGetPayload<S['select'][P]> :
      P extends 'itemMeta'
      ? Array<MessageMetaGetPayload<S['select'][P]>> :
      P extends 'thread'
      ? ThreadGetPayload<S['select'][P]> : never
    }
  : Message
: Message


export interface MessageDelegate {
  /**
   * Find zero or one Message.
   * @param {FindOneMessageArgs} args - Arguments to find a Message
   * @example
   * // Get one Message
   * const message = await prisma.message.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneMessageArgs>(
    args: Subset<T, FindOneMessageArgs>
  ): CheckSelect<T, MessageClient<Message | null>, MessageClient<MessageGetPayload<T> | null>>
  /**
   * Find zero or more Messages.
   * @param {FindManyMessageArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Messages
   * const messages = await prisma.message.findMany()
   * 
   * // Get first 10 Messages
   * const messages = await prisma.message.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyMessageArgs>(
    args?: Subset<T, FindManyMessageArgs>
  ): CheckSelect<T, Promise<Array<Message>>, Promise<Array<MessageGetPayload<T>>>>
  /**
   * Create a Message.
   * @param {MessageCreateArgs} args - Arguments to create a Message.
   * @example
   * // Create one Message
   * const user = await prisma.message.create({
   *   data: {
   *     // ... data to create a Message
   *   }
   * })
   * 
  **/
  create<T extends MessageCreateArgs>(
    args: Subset<T, MessageCreateArgs>
  ): CheckSelect<T, MessageClient<Message>, MessageClient<MessageGetPayload<T>>>
  /**
   * Delete a Message.
   * @param {MessageDeleteArgs} args - Arguments to delete one Message.
   * @example
   * // Delete one Message
   * const user = await prisma.message.delete({
   *   where: {
   *     // ... filter to delete one Message
   *   }
   * })
   * 
  **/
  delete<T extends MessageDeleteArgs>(
    args: Subset<T, MessageDeleteArgs>
  ): CheckSelect<T, MessageClient<Message>, MessageClient<MessageGetPayload<T>>>
  /**
   * Update one Message.
   * @param {MessageUpdateArgs} args - Arguments to update one Message.
   * @example
   * // Update one Message
   * const message = await prisma.message.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends MessageUpdateArgs>(
    args: Subset<T, MessageUpdateArgs>
  ): CheckSelect<T, MessageClient<Message>, MessageClient<MessageGetPayload<T>>>
  /**
   * Delete zero or more Messages.
   * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
   * @example
   * // Delete a few Messages
   * const { count } = await prisma.message.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends MessageDeleteManyArgs>(
    args: Subset<T, MessageDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Messages.
   * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Messages
   * const message = await prisma.message.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends MessageUpdateManyArgs>(
    args: Subset<T, MessageUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Message.
   * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
   * @example
   * // Update or create a Message
   * const message = await prisma.message.upsert({
   *   create: {
   *     // ... data to create a Message
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Message we want to update
   *   }
   * })
  **/
  upsert<T extends MessageUpsertArgs>(
    args: Subset<T, MessageUpsertArgs>
  ): CheckSelect<T, MessageClient<Message>, MessageClient<MessageGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class MessageClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, UserClient<User | null>, UserClient<UserGetPayload<T> | null>>;

  itemMeta<T extends FindManyMessageMetaArgs = {}>(args?: Subset<T, FindManyMessageMetaArgs>): CheckSelect<T, Promise<Array<MessageMeta>>, Promise<Array<MessageMetaGetPayload<T>>>>;

  thread<T extends ThreadArgs = {}>(args?: Subset<T, ThreadArgs>): CheckSelect<T, ThreadClient<Thread | null>, ThreadClient<ThreadGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Message findOne
 */
export type FindOneMessageArgs = {
  /**
   * Select specific fields to fetch from the Message
  **/
  select?: MessageSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: MessageInclude | null
  /**
   * Filter, which Message to fetch.
  **/
  where: MessageWhereUniqueInput
}


/**
 * Message findMany
 */
export type FindManyMessageArgs = {
  /**
   * Select specific fields to fetch from the Message
  **/
  select?: MessageSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: MessageInclude | null
  /**
   * Filter, which Messages to fetch.
  **/
  where?: MessageWhereInput | null
  /**
   * Determine the order of the Messages to fetch.
  **/
  orderBy?: MessageOrderByInput | null
  /**
   * Skip the first `n` Messages.
  **/
  skip?: number | null
  /**
   * Get all Messages that come after the Message you provide with the current order.
  **/
  after?: MessageWhereUniqueInput | null
  /**
   * Get all Messages that come before the Message you provide with the current order.
  **/
  before?: MessageWhereUniqueInput | null
  /**
   * Get the first `n` Messages.
  **/
  first?: number | null
  /**
   * Get the last `n` Messages.
  **/
  last?: number | null
}


/**
 * Message create
 */
export type MessageCreateArgs = {
  /**
   * Select specific fields to fetch from the Message
  **/
  select?: MessageSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: MessageInclude | null
  /**
   * The data needed to create a Message.
  **/
  data: MessageCreateInput
}


/**
 * Message update
 */
export type MessageUpdateArgs = {
  /**
   * Select specific fields to fetch from the Message
  **/
  select?: MessageSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: MessageInclude | null
  /**
   * The data needed to update a Message.
  **/
  data: MessageUpdateInput
  /**
   * Choose, which Message to update.
  **/
  where: MessageWhereUniqueInput
}


/**
 * Message updateMany
 */
export type MessageUpdateManyArgs = {
  data: MessageUpdateManyMutationInput
  where?: MessageWhereInput | null
}


/**
 * Message upsert
 */
export type MessageUpsertArgs = {
  /**
   * Select specific fields to fetch from the Message
  **/
  select?: MessageSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: MessageInclude | null
  /**
   * The filter to search for the Message to update in case it exists.
  **/
  where: MessageWhereUniqueInput
  /**
   * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
  **/
  create: MessageCreateInput
  /**
   * In case the Message was found with the provided `where` argument, update it with this data.
  **/
  update: MessageUpdateInput
}


/**
 * Message delete
 */
export type MessageDeleteArgs = {
  /**
   * Select specific fields to fetch from the Message
  **/
  select?: MessageSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: MessageInclude | null
  /**
   * Filter which Message to delete.
  **/
  where: MessageWhereUniqueInput
}


/**
 * Message deleteMany
 */
export type MessageDeleteManyArgs = {
  where?: MessageWhereInput | null
}


/**
 * Message without action
 */
export type MessageArgs = {
  /**
   * Select specific fields to fetch from the Message
  **/
  select?: MessageSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: MessageInclude | null
}



/**
 * Model MessageMeta
 */

export type MessageMeta = {
  id: string
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type MessageMetaSelect = {
  id?: boolean
  message?: boolean | MessageArgs
  metaType?: boolean
  metaName?: boolean
  metaValue?: boolean
  metaDeleted?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type MessageMetaInclude = {
  message?: boolean | MessageArgs
}

export type MessageMetaGetPayload<
  S extends boolean | null | undefined | MessageMetaArgs,
  U = keyof S
> = S extends true
  ? MessageMeta
  : S extends undefined
  ? never
  : S extends MessageMetaArgs
  ? 'include' extends U
    ? MessageMeta  & {
      [P in TrueKeys<S['include']>]:
      P extends 'message'
      ? MessageGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof MessageMeta ? MessageMeta[P]
: 
      P extends 'message'
      ? MessageGetPayload<S['select'][P]> : never
    }
  : MessageMeta
: MessageMeta


export interface MessageMetaDelegate {
  /**
   * Find zero or one MessageMeta.
   * @param {FindOneMessageMetaArgs} args - Arguments to find a MessageMeta
   * @example
   * // Get one MessageMeta
   * const messageMeta = await prisma.messageMeta.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneMessageMetaArgs>(
    args: Subset<T, FindOneMessageMetaArgs>
  ): CheckSelect<T, MessageMetaClient<MessageMeta | null>, MessageMetaClient<MessageMetaGetPayload<T> | null>>
  /**
   * Find zero or more MessageMetas.
   * @param {FindManyMessageMetaArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all MessageMetas
   * const messageMetas = await prisma.messageMeta.findMany()
   * 
   * // Get first 10 MessageMetas
   * const messageMetas = await prisma.messageMeta.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const messageMetaWithIdOnly = await prisma.messageMeta.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyMessageMetaArgs>(
    args?: Subset<T, FindManyMessageMetaArgs>
  ): CheckSelect<T, Promise<Array<MessageMeta>>, Promise<Array<MessageMetaGetPayload<T>>>>
  /**
   * Create a MessageMeta.
   * @param {MessageMetaCreateArgs} args - Arguments to create a MessageMeta.
   * @example
   * // Create one MessageMeta
   * const user = await prisma.messageMeta.create({
   *   data: {
   *     // ... data to create a MessageMeta
   *   }
   * })
   * 
  **/
  create<T extends MessageMetaCreateArgs>(
    args: Subset<T, MessageMetaCreateArgs>
  ): CheckSelect<T, MessageMetaClient<MessageMeta>, MessageMetaClient<MessageMetaGetPayload<T>>>
  /**
   * Delete a MessageMeta.
   * @param {MessageMetaDeleteArgs} args - Arguments to delete one MessageMeta.
   * @example
   * // Delete one MessageMeta
   * const user = await prisma.messageMeta.delete({
   *   where: {
   *     // ... filter to delete one MessageMeta
   *   }
   * })
   * 
  **/
  delete<T extends MessageMetaDeleteArgs>(
    args: Subset<T, MessageMetaDeleteArgs>
  ): CheckSelect<T, MessageMetaClient<MessageMeta>, MessageMetaClient<MessageMetaGetPayload<T>>>
  /**
   * Update one MessageMeta.
   * @param {MessageMetaUpdateArgs} args - Arguments to update one MessageMeta.
   * @example
   * // Update one MessageMeta
   * const messageMeta = await prisma.messageMeta.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends MessageMetaUpdateArgs>(
    args: Subset<T, MessageMetaUpdateArgs>
  ): CheckSelect<T, MessageMetaClient<MessageMeta>, MessageMetaClient<MessageMetaGetPayload<T>>>
  /**
   * Delete zero or more MessageMetas.
   * @param {MessageMetaDeleteManyArgs} args - Arguments to filter MessageMetas to delete.
   * @example
   * // Delete a few MessageMetas
   * const { count } = await prisma.messageMeta.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends MessageMetaDeleteManyArgs>(
    args: Subset<T, MessageMetaDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more MessageMetas.
   * @param {MessageMetaUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many MessageMetas
   * const messageMeta = await prisma.messageMeta.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends MessageMetaUpdateManyArgs>(
    args: Subset<T, MessageMetaUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one MessageMeta.
   * @param {MessageMetaUpsertArgs} args - Arguments to update or create a MessageMeta.
   * @example
   * // Update or create a MessageMeta
   * const messageMeta = await prisma.messageMeta.upsert({
   *   create: {
   *     // ... data to create a MessageMeta
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the MessageMeta we want to update
   *   }
   * })
  **/
  upsert<T extends MessageMetaUpsertArgs>(
    args: Subset<T, MessageMetaUpsertArgs>
  ): CheckSelect<T, MessageMetaClient<MessageMeta>, MessageMetaClient<MessageMetaGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class MessageMetaClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  message<T extends MessageArgs = {}>(args?: Subset<T, MessageArgs>): CheckSelect<T, MessageClient<Message | null>, MessageClient<MessageGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * MessageMeta findOne
 */
export type FindOneMessageMetaArgs = {
  /**
   * Select specific fields to fetch from the MessageMeta
  **/
  select?: MessageMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: MessageMetaInclude | null
  /**
   * Filter, which MessageMeta to fetch.
  **/
  where: MessageMetaWhereUniqueInput
}


/**
 * MessageMeta findMany
 */
export type FindManyMessageMetaArgs = {
  /**
   * Select specific fields to fetch from the MessageMeta
  **/
  select?: MessageMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: MessageMetaInclude | null
  /**
   * Filter, which MessageMetas to fetch.
  **/
  where?: MessageMetaWhereInput | null
  /**
   * Determine the order of the MessageMetas to fetch.
  **/
  orderBy?: MessageMetaOrderByInput | null
  /**
   * Skip the first `n` MessageMetas.
  **/
  skip?: number | null
  /**
   * Get all MessageMetas that come after the MessageMeta you provide with the current order.
  **/
  after?: MessageMetaWhereUniqueInput | null
  /**
   * Get all MessageMetas that come before the MessageMeta you provide with the current order.
  **/
  before?: MessageMetaWhereUniqueInput | null
  /**
   * Get the first `n` MessageMetas.
  **/
  first?: number | null
  /**
   * Get the last `n` MessageMetas.
  **/
  last?: number | null
}


/**
 * MessageMeta create
 */
export type MessageMetaCreateArgs = {
  /**
   * Select specific fields to fetch from the MessageMeta
  **/
  select?: MessageMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: MessageMetaInclude | null
  /**
   * The data needed to create a MessageMeta.
  **/
  data: MessageMetaCreateInput
}


/**
 * MessageMeta update
 */
export type MessageMetaUpdateArgs = {
  /**
   * Select specific fields to fetch from the MessageMeta
  **/
  select?: MessageMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: MessageMetaInclude | null
  /**
   * The data needed to update a MessageMeta.
  **/
  data: MessageMetaUpdateInput
  /**
   * Choose, which MessageMeta to update.
  **/
  where: MessageMetaWhereUniqueInput
}


/**
 * MessageMeta updateMany
 */
export type MessageMetaUpdateManyArgs = {
  data: MessageMetaUpdateManyMutationInput
  where?: MessageMetaWhereInput | null
}


/**
 * MessageMeta upsert
 */
export type MessageMetaUpsertArgs = {
  /**
   * Select specific fields to fetch from the MessageMeta
  **/
  select?: MessageMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: MessageMetaInclude | null
  /**
   * The filter to search for the MessageMeta to update in case it exists.
  **/
  where: MessageMetaWhereUniqueInput
  /**
   * In case the MessageMeta found by the `where` argument doesn't exist, create a new MessageMeta with this data.
  **/
  create: MessageMetaCreateInput
  /**
   * In case the MessageMeta was found with the provided `where` argument, update it with this data.
  **/
  update: MessageMetaUpdateInput
}


/**
 * MessageMeta delete
 */
export type MessageMetaDeleteArgs = {
  /**
   * Select specific fields to fetch from the MessageMeta
  **/
  select?: MessageMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: MessageMetaInclude | null
  /**
   * Filter which MessageMeta to delete.
  **/
  where: MessageMetaWhereUniqueInput
}


/**
 * MessageMeta deleteMany
 */
export type MessageMetaDeleteManyArgs = {
  where?: MessageMetaWhereInput | null
}


/**
 * MessageMeta without action
 */
export type MessageMetaArgs = {
  /**
   * Select specific fields to fetch from the MessageMeta
  **/
  select?: MessageMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: MessageMetaInclude | null
}



/**
 * Model Notification
 */

export type Notification = {
  id: string
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type NotificationSelect = {
  id?: boolean
  itemType?: boolean
  itemStatus?: boolean
  itemName?: boolean
  itemContent?: boolean
  itemDeleted?: boolean
  itemMeta?: boolean | FindManyNotificationMetaArgs
  sender?: boolean | UserArgs
  receiver?: boolean | UserArgs
  pod?: boolean | PodArgs
  post?: boolean | PostArgs
  createdAt?: boolean
  updatedAt?: boolean
  user?: boolean | UserArgs
}

export type NotificationInclude = {
  itemMeta?: boolean | FindManyNotificationMetaArgs
  sender?: boolean | UserArgs
  receiver?: boolean | UserArgs
  pod?: boolean | PodArgs
  post?: boolean | PostArgs
  user?: boolean | UserArgs
}

export type NotificationGetPayload<
  S extends boolean | null | undefined | NotificationArgs,
  U = keyof S
> = S extends true
  ? Notification
  : S extends undefined
  ? never
  : S extends NotificationArgs
  ? 'include' extends U
    ? Notification  & {
      [P in TrueKeys<S['include']>]:
      P extends 'itemMeta'
      ? Array<NotificationMetaGetPayload<S['include'][P]>> :
      P extends 'sender'
      ? UserGetPayload<S['include'][P]> :
      P extends 'receiver'
      ? UserGetPayload<S['include'][P]> :
      P extends 'pod'
      ? PodGetPayload<S['include'][P]> | null :
      P extends 'post'
      ? PostGetPayload<S['include'][P]> | null :
      P extends 'user'
      ? UserGetPayload<S['include'][P]> | null : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Notification ? Notification[P]
: 
      P extends 'itemMeta'
      ? Array<NotificationMetaGetPayload<S['select'][P]>> :
      P extends 'sender'
      ? UserGetPayload<S['select'][P]> :
      P extends 'receiver'
      ? UserGetPayload<S['select'][P]> :
      P extends 'pod'
      ? PodGetPayload<S['select'][P]> | null :
      P extends 'post'
      ? PostGetPayload<S['select'][P]> | null :
      P extends 'user'
      ? UserGetPayload<S['select'][P]> | null : never
    }
  : Notification
: Notification


export interface NotificationDelegate {
  /**
   * Find zero or one Notification.
   * @param {FindOneNotificationArgs} args - Arguments to find a Notification
   * @example
   * // Get one Notification
   * const notification = await prisma.notification.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneNotificationArgs>(
    args: Subset<T, FindOneNotificationArgs>
  ): CheckSelect<T, NotificationClient<Notification | null>, NotificationClient<NotificationGetPayload<T> | null>>
  /**
   * Find zero or more Notifications.
   * @param {FindManyNotificationArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Notifications
   * const notifications = await prisma.notification.findMany()
   * 
   * // Get first 10 Notifications
   * const notifications = await prisma.notification.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyNotificationArgs>(
    args?: Subset<T, FindManyNotificationArgs>
  ): CheckSelect<T, Promise<Array<Notification>>, Promise<Array<NotificationGetPayload<T>>>>
  /**
   * Create a Notification.
   * @param {NotificationCreateArgs} args - Arguments to create a Notification.
   * @example
   * // Create one Notification
   * const user = await prisma.notification.create({
   *   data: {
   *     // ... data to create a Notification
   *   }
   * })
   * 
  **/
  create<T extends NotificationCreateArgs>(
    args: Subset<T, NotificationCreateArgs>
  ): CheckSelect<T, NotificationClient<Notification>, NotificationClient<NotificationGetPayload<T>>>
  /**
   * Delete a Notification.
   * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
   * @example
   * // Delete one Notification
   * const user = await prisma.notification.delete({
   *   where: {
   *     // ... filter to delete one Notification
   *   }
   * })
   * 
  **/
  delete<T extends NotificationDeleteArgs>(
    args: Subset<T, NotificationDeleteArgs>
  ): CheckSelect<T, NotificationClient<Notification>, NotificationClient<NotificationGetPayload<T>>>
  /**
   * Update one Notification.
   * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
   * @example
   * // Update one Notification
   * const notification = await prisma.notification.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends NotificationUpdateArgs>(
    args: Subset<T, NotificationUpdateArgs>
  ): CheckSelect<T, NotificationClient<Notification>, NotificationClient<NotificationGetPayload<T>>>
  /**
   * Delete zero or more Notifications.
   * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
   * @example
   * // Delete a few Notifications
   * const { count } = await prisma.notification.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends NotificationDeleteManyArgs>(
    args: Subset<T, NotificationDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Notifications.
   * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Notifications
   * const notification = await prisma.notification.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends NotificationUpdateManyArgs>(
    args: Subset<T, NotificationUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Notification.
   * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
   * @example
   * // Update or create a Notification
   * const notification = await prisma.notification.upsert({
   *   create: {
   *     // ... data to create a Notification
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Notification we want to update
   *   }
   * })
  **/
  upsert<T extends NotificationUpsertArgs>(
    args: Subset<T, NotificationUpsertArgs>
  ): CheckSelect<T, NotificationClient<Notification>, NotificationClient<NotificationGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class NotificationClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  itemMeta<T extends FindManyNotificationMetaArgs = {}>(args?: Subset<T, FindManyNotificationMetaArgs>): CheckSelect<T, Promise<Array<NotificationMeta>>, Promise<Array<NotificationMetaGetPayload<T>>>>;

  sender<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, UserClient<User | null>, UserClient<UserGetPayload<T> | null>>;

  receiver<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, UserClient<User | null>, UserClient<UserGetPayload<T> | null>>;

  pod<T extends PodArgs = {}>(args?: Subset<T, PodArgs>): CheckSelect<T, PodClient<Pod | null>, PodClient<PodGetPayload<T> | null>>;

  post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, PostClient<Post | null>, PostClient<PostGetPayload<T> | null>>;

  user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, UserClient<User | null>, UserClient<UserGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Notification findOne
 */
export type FindOneNotificationArgs = {
  /**
   * Select specific fields to fetch from the Notification
  **/
  select?: NotificationSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NotificationInclude | null
  /**
   * Filter, which Notification to fetch.
  **/
  where: NotificationWhereUniqueInput
}


/**
 * Notification findMany
 */
export type FindManyNotificationArgs = {
  /**
   * Select specific fields to fetch from the Notification
  **/
  select?: NotificationSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NotificationInclude | null
  /**
   * Filter, which Notifications to fetch.
  **/
  where?: NotificationWhereInput | null
  /**
   * Determine the order of the Notifications to fetch.
  **/
  orderBy?: NotificationOrderByInput | null
  /**
   * Skip the first `n` Notifications.
  **/
  skip?: number | null
  /**
   * Get all Notifications that come after the Notification you provide with the current order.
  **/
  after?: NotificationWhereUniqueInput | null
  /**
   * Get all Notifications that come before the Notification you provide with the current order.
  **/
  before?: NotificationWhereUniqueInput | null
  /**
   * Get the first `n` Notifications.
  **/
  first?: number | null
  /**
   * Get the last `n` Notifications.
  **/
  last?: number | null
}


/**
 * Notification create
 */
export type NotificationCreateArgs = {
  /**
   * Select specific fields to fetch from the Notification
  **/
  select?: NotificationSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NotificationInclude | null
  /**
   * The data needed to create a Notification.
  **/
  data: NotificationCreateInput
}


/**
 * Notification update
 */
export type NotificationUpdateArgs = {
  /**
   * Select specific fields to fetch from the Notification
  **/
  select?: NotificationSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NotificationInclude | null
  /**
   * The data needed to update a Notification.
  **/
  data: NotificationUpdateInput
  /**
   * Choose, which Notification to update.
  **/
  where: NotificationWhereUniqueInput
}


/**
 * Notification updateMany
 */
export type NotificationUpdateManyArgs = {
  data: NotificationUpdateManyMutationInput
  where?: NotificationWhereInput | null
}


/**
 * Notification upsert
 */
export type NotificationUpsertArgs = {
  /**
   * Select specific fields to fetch from the Notification
  **/
  select?: NotificationSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NotificationInclude | null
  /**
   * The filter to search for the Notification to update in case it exists.
  **/
  where: NotificationWhereUniqueInput
  /**
   * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
  **/
  create: NotificationCreateInput
  /**
   * In case the Notification was found with the provided `where` argument, update it with this data.
  **/
  update: NotificationUpdateInput
}


/**
 * Notification delete
 */
export type NotificationDeleteArgs = {
  /**
   * Select specific fields to fetch from the Notification
  **/
  select?: NotificationSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NotificationInclude | null
  /**
   * Filter which Notification to delete.
  **/
  where: NotificationWhereUniqueInput
}


/**
 * Notification deleteMany
 */
export type NotificationDeleteManyArgs = {
  where?: NotificationWhereInput | null
}


/**
 * Notification without action
 */
export type NotificationArgs = {
  /**
   * Select specific fields to fetch from the Notification
  **/
  select?: NotificationSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NotificationInclude | null
}



/**
 * Model NotificationMeta
 */

export type NotificationMeta = {
  id: string
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type NotificationMetaSelect = {
  id?: boolean
  notification?: boolean | NotificationArgs
  metaType?: boolean
  metaName?: boolean
  metaValue?: boolean
  metaDeleted?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type NotificationMetaInclude = {
  notification?: boolean | NotificationArgs
}

export type NotificationMetaGetPayload<
  S extends boolean | null | undefined | NotificationMetaArgs,
  U = keyof S
> = S extends true
  ? NotificationMeta
  : S extends undefined
  ? never
  : S extends NotificationMetaArgs
  ? 'include' extends U
    ? NotificationMeta  & {
      [P in TrueKeys<S['include']>]:
      P extends 'notification'
      ? NotificationGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof NotificationMeta ? NotificationMeta[P]
: 
      P extends 'notification'
      ? NotificationGetPayload<S['select'][P]> : never
    }
  : NotificationMeta
: NotificationMeta


export interface NotificationMetaDelegate {
  /**
   * Find zero or one NotificationMeta.
   * @param {FindOneNotificationMetaArgs} args - Arguments to find a NotificationMeta
   * @example
   * // Get one NotificationMeta
   * const notificationMeta = await prisma.notificationMeta.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneNotificationMetaArgs>(
    args: Subset<T, FindOneNotificationMetaArgs>
  ): CheckSelect<T, NotificationMetaClient<NotificationMeta | null>, NotificationMetaClient<NotificationMetaGetPayload<T> | null>>
  /**
   * Find zero or more NotificationMetas.
   * @param {FindManyNotificationMetaArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all NotificationMetas
   * const notificationMetas = await prisma.notificationMeta.findMany()
   * 
   * // Get first 10 NotificationMetas
   * const notificationMetas = await prisma.notificationMeta.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const notificationMetaWithIdOnly = await prisma.notificationMeta.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyNotificationMetaArgs>(
    args?: Subset<T, FindManyNotificationMetaArgs>
  ): CheckSelect<T, Promise<Array<NotificationMeta>>, Promise<Array<NotificationMetaGetPayload<T>>>>
  /**
   * Create a NotificationMeta.
   * @param {NotificationMetaCreateArgs} args - Arguments to create a NotificationMeta.
   * @example
   * // Create one NotificationMeta
   * const user = await prisma.notificationMeta.create({
   *   data: {
   *     // ... data to create a NotificationMeta
   *   }
   * })
   * 
  **/
  create<T extends NotificationMetaCreateArgs>(
    args: Subset<T, NotificationMetaCreateArgs>
  ): CheckSelect<T, NotificationMetaClient<NotificationMeta>, NotificationMetaClient<NotificationMetaGetPayload<T>>>
  /**
   * Delete a NotificationMeta.
   * @param {NotificationMetaDeleteArgs} args - Arguments to delete one NotificationMeta.
   * @example
   * // Delete one NotificationMeta
   * const user = await prisma.notificationMeta.delete({
   *   where: {
   *     // ... filter to delete one NotificationMeta
   *   }
   * })
   * 
  **/
  delete<T extends NotificationMetaDeleteArgs>(
    args: Subset<T, NotificationMetaDeleteArgs>
  ): CheckSelect<T, NotificationMetaClient<NotificationMeta>, NotificationMetaClient<NotificationMetaGetPayload<T>>>
  /**
   * Update one NotificationMeta.
   * @param {NotificationMetaUpdateArgs} args - Arguments to update one NotificationMeta.
   * @example
   * // Update one NotificationMeta
   * const notificationMeta = await prisma.notificationMeta.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends NotificationMetaUpdateArgs>(
    args: Subset<T, NotificationMetaUpdateArgs>
  ): CheckSelect<T, NotificationMetaClient<NotificationMeta>, NotificationMetaClient<NotificationMetaGetPayload<T>>>
  /**
   * Delete zero or more NotificationMetas.
   * @param {NotificationMetaDeleteManyArgs} args - Arguments to filter NotificationMetas to delete.
   * @example
   * // Delete a few NotificationMetas
   * const { count } = await prisma.notificationMeta.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends NotificationMetaDeleteManyArgs>(
    args: Subset<T, NotificationMetaDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more NotificationMetas.
   * @param {NotificationMetaUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many NotificationMetas
   * const notificationMeta = await prisma.notificationMeta.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends NotificationMetaUpdateManyArgs>(
    args: Subset<T, NotificationMetaUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one NotificationMeta.
   * @param {NotificationMetaUpsertArgs} args - Arguments to update or create a NotificationMeta.
   * @example
   * // Update or create a NotificationMeta
   * const notificationMeta = await prisma.notificationMeta.upsert({
   *   create: {
   *     // ... data to create a NotificationMeta
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the NotificationMeta we want to update
   *   }
   * })
  **/
  upsert<T extends NotificationMetaUpsertArgs>(
    args: Subset<T, NotificationMetaUpsertArgs>
  ): CheckSelect<T, NotificationMetaClient<NotificationMeta>, NotificationMetaClient<NotificationMetaGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class NotificationMetaClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  notification<T extends NotificationArgs = {}>(args?: Subset<T, NotificationArgs>): CheckSelect<T, NotificationClient<Notification | null>, NotificationClient<NotificationGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * NotificationMeta findOne
 */
export type FindOneNotificationMetaArgs = {
  /**
   * Select specific fields to fetch from the NotificationMeta
  **/
  select?: NotificationMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NotificationMetaInclude | null
  /**
   * Filter, which NotificationMeta to fetch.
  **/
  where: NotificationMetaWhereUniqueInput
}


/**
 * NotificationMeta findMany
 */
export type FindManyNotificationMetaArgs = {
  /**
   * Select specific fields to fetch from the NotificationMeta
  **/
  select?: NotificationMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NotificationMetaInclude | null
  /**
   * Filter, which NotificationMetas to fetch.
  **/
  where?: NotificationMetaWhereInput | null
  /**
   * Determine the order of the NotificationMetas to fetch.
  **/
  orderBy?: NotificationMetaOrderByInput | null
  /**
   * Skip the first `n` NotificationMetas.
  **/
  skip?: number | null
  /**
   * Get all NotificationMetas that come after the NotificationMeta you provide with the current order.
  **/
  after?: NotificationMetaWhereUniqueInput | null
  /**
   * Get all NotificationMetas that come before the NotificationMeta you provide with the current order.
  **/
  before?: NotificationMetaWhereUniqueInput | null
  /**
   * Get the first `n` NotificationMetas.
  **/
  first?: number | null
  /**
   * Get the last `n` NotificationMetas.
  **/
  last?: number | null
}


/**
 * NotificationMeta create
 */
export type NotificationMetaCreateArgs = {
  /**
   * Select specific fields to fetch from the NotificationMeta
  **/
  select?: NotificationMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NotificationMetaInclude | null
  /**
   * The data needed to create a NotificationMeta.
  **/
  data: NotificationMetaCreateInput
}


/**
 * NotificationMeta update
 */
export type NotificationMetaUpdateArgs = {
  /**
   * Select specific fields to fetch from the NotificationMeta
  **/
  select?: NotificationMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NotificationMetaInclude | null
  /**
   * The data needed to update a NotificationMeta.
  **/
  data: NotificationMetaUpdateInput
  /**
   * Choose, which NotificationMeta to update.
  **/
  where: NotificationMetaWhereUniqueInput
}


/**
 * NotificationMeta updateMany
 */
export type NotificationMetaUpdateManyArgs = {
  data: NotificationMetaUpdateManyMutationInput
  where?: NotificationMetaWhereInput | null
}


/**
 * NotificationMeta upsert
 */
export type NotificationMetaUpsertArgs = {
  /**
   * Select specific fields to fetch from the NotificationMeta
  **/
  select?: NotificationMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NotificationMetaInclude | null
  /**
   * The filter to search for the NotificationMeta to update in case it exists.
  **/
  where: NotificationMetaWhereUniqueInput
  /**
   * In case the NotificationMeta found by the `where` argument doesn't exist, create a new NotificationMeta with this data.
  **/
  create: NotificationMetaCreateInput
  /**
   * In case the NotificationMeta was found with the provided `where` argument, update it with this data.
  **/
  update: NotificationMetaUpdateInput
}


/**
 * NotificationMeta delete
 */
export type NotificationMetaDeleteArgs = {
  /**
   * Select specific fields to fetch from the NotificationMeta
  **/
  select?: NotificationMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NotificationMetaInclude | null
  /**
   * Filter which NotificationMeta to delete.
  **/
  where: NotificationMetaWhereUniqueInput
}


/**
 * NotificationMeta deleteMany
 */
export type NotificationMetaDeleteManyArgs = {
  where?: NotificationMetaWhereInput | null
}


/**
 * NotificationMeta without action
 */
export type NotificationMetaArgs = {
  /**
   * Select specific fields to fetch from the NotificationMeta
  **/
  select?: NotificationMetaSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NotificationMetaInclude | null
}



/**
 * Model Favorite
 */

export type Favorite = {
  id: string
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  createdAt: Date
  updatedAt: Date
}

export type FavoriteSelect = {
  id?: boolean
  user?: boolean | UserArgs
  itemType?: boolean
  itemStatus?: boolean
  itemName?: boolean
  itemContent?: boolean
  post?: boolean | PostArgs
  createdAt?: boolean
  updatedAt?: boolean
}

export type FavoriteInclude = {
  user?: boolean | UserArgs
  post?: boolean | PostArgs
}

export type FavoriteGetPayload<
  S extends boolean | null | undefined | FavoriteArgs,
  U = keyof S
> = S extends true
  ? Favorite
  : S extends undefined
  ? never
  : S extends FavoriteArgs
  ? 'include' extends U
    ? Favorite  & {
      [P in TrueKeys<S['include']>]:
      P extends 'user'
      ? UserGetPayload<S['include'][P]> :
      P extends 'post'
      ? PostGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Favorite ? Favorite[P]
: 
      P extends 'user'
      ? UserGetPayload<S['select'][P]> :
      P extends 'post'
      ? PostGetPayload<S['select'][P]> : never
    }
  : Favorite
: Favorite


export interface FavoriteDelegate {
  /**
   * Find zero or one Favorite.
   * @param {FindOneFavoriteArgs} args - Arguments to find a Favorite
   * @example
   * // Get one Favorite
   * const favorite = await prisma.favorite.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneFavoriteArgs>(
    args: Subset<T, FindOneFavoriteArgs>
  ): CheckSelect<T, FavoriteClient<Favorite | null>, FavoriteClient<FavoriteGetPayload<T> | null>>
  /**
   * Find zero or more Favorites.
   * @param {FindManyFavoriteArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Favorites
   * const favorites = await prisma.favorite.findMany()
   * 
   * // Get first 10 Favorites
   * const favorites = await prisma.favorite.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyFavoriteArgs>(
    args?: Subset<T, FindManyFavoriteArgs>
  ): CheckSelect<T, Promise<Array<Favorite>>, Promise<Array<FavoriteGetPayload<T>>>>
  /**
   * Create a Favorite.
   * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
   * @example
   * // Create one Favorite
   * const user = await prisma.favorite.create({
   *   data: {
   *     // ... data to create a Favorite
   *   }
   * })
   * 
  **/
  create<T extends FavoriteCreateArgs>(
    args: Subset<T, FavoriteCreateArgs>
  ): CheckSelect<T, FavoriteClient<Favorite>, FavoriteClient<FavoriteGetPayload<T>>>
  /**
   * Delete a Favorite.
   * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
   * @example
   * // Delete one Favorite
   * const user = await prisma.favorite.delete({
   *   where: {
   *     // ... filter to delete one Favorite
   *   }
   * })
   * 
  **/
  delete<T extends FavoriteDeleteArgs>(
    args: Subset<T, FavoriteDeleteArgs>
  ): CheckSelect<T, FavoriteClient<Favorite>, FavoriteClient<FavoriteGetPayload<T>>>
  /**
   * Update one Favorite.
   * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
   * @example
   * // Update one Favorite
   * const favorite = await prisma.favorite.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends FavoriteUpdateArgs>(
    args: Subset<T, FavoriteUpdateArgs>
  ): CheckSelect<T, FavoriteClient<Favorite>, FavoriteClient<FavoriteGetPayload<T>>>
  /**
   * Delete zero or more Favorites.
   * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
   * @example
   * // Delete a few Favorites
   * const { count } = await prisma.favorite.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends FavoriteDeleteManyArgs>(
    args: Subset<T, FavoriteDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Favorites.
   * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Favorites
   * const favorite = await prisma.favorite.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends FavoriteUpdateManyArgs>(
    args: Subset<T, FavoriteUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Favorite.
   * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
   * @example
   * // Update or create a Favorite
   * const favorite = await prisma.favorite.upsert({
   *   create: {
   *     // ... data to create a Favorite
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Favorite we want to update
   *   }
   * })
  **/
  upsert<T extends FavoriteUpsertArgs>(
    args: Subset<T, FavoriteUpsertArgs>
  ): CheckSelect<T, FavoriteClient<Favorite>, FavoriteClient<FavoriteGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class FavoriteClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, UserClient<User | null>, UserClient<UserGetPayload<T> | null>>;

  post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, PostClient<Post | null>, PostClient<PostGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Favorite findOne
 */
export type FindOneFavoriteArgs = {
  /**
   * Select specific fields to fetch from the Favorite
  **/
  select?: FavoriteSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: FavoriteInclude | null
  /**
   * Filter, which Favorite to fetch.
  **/
  where: FavoriteWhereUniqueInput
}


/**
 * Favorite findMany
 */
export type FindManyFavoriteArgs = {
  /**
   * Select specific fields to fetch from the Favorite
  **/
  select?: FavoriteSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: FavoriteInclude | null
  /**
   * Filter, which Favorites to fetch.
  **/
  where?: FavoriteWhereInput | null
  /**
   * Determine the order of the Favorites to fetch.
  **/
  orderBy?: FavoriteOrderByInput | null
  /**
   * Skip the first `n` Favorites.
  **/
  skip?: number | null
  /**
   * Get all Favorites that come after the Favorite you provide with the current order.
  **/
  after?: FavoriteWhereUniqueInput | null
  /**
   * Get all Favorites that come before the Favorite you provide with the current order.
  **/
  before?: FavoriteWhereUniqueInput | null
  /**
   * Get the first `n` Favorites.
  **/
  first?: number | null
  /**
   * Get the last `n` Favorites.
  **/
  last?: number | null
}


/**
 * Favorite create
 */
export type FavoriteCreateArgs = {
  /**
   * Select specific fields to fetch from the Favorite
  **/
  select?: FavoriteSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: FavoriteInclude | null
  /**
   * The data needed to create a Favorite.
  **/
  data: FavoriteCreateInput
}


/**
 * Favorite update
 */
export type FavoriteUpdateArgs = {
  /**
   * Select specific fields to fetch from the Favorite
  **/
  select?: FavoriteSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: FavoriteInclude | null
  /**
   * The data needed to update a Favorite.
  **/
  data: FavoriteUpdateInput
  /**
   * Choose, which Favorite to update.
  **/
  where: FavoriteWhereUniqueInput
}


/**
 * Favorite updateMany
 */
export type FavoriteUpdateManyArgs = {
  data: FavoriteUpdateManyMutationInput
  where?: FavoriteWhereInput | null
}


/**
 * Favorite upsert
 */
export type FavoriteUpsertArgs = {
  /**
   * Select specific fields to fetch from the Favorite
  **/
  select?: FavoriteSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: FavoriteInclude | null
  /**
   * The filter to search for the Favorite to update in case it exists.
  **/
  where: FavoriteWhereUniqueInput
  /**
   * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
  **/
  create: FavoriteCreateInput
  /**
   * In case the Favorite was found with the provided `where` argument, update it with this data.
  **/
  update: FavoriteUpdateInput
}


/**
 * Favorite delete
 */
export type FavoriteDeleteArgs = {
  /**
   * Select specific fields to fetch from the Favorite
  **/
  select?: FavoriteSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: FavoriteInclude | null
  /**
   * Filter which Favorite to delete.
  **/
  where: FavoriteWhereUniqueInput
}


/**
 * Favorite deleteMany
 */
export type FavoriteDeleteManyArgs = {
  where?: FavoriteWhereInput | null
}


/**
 * Favorite without action
 */
export type FavoriteArgs = {
  /**
   * Select specific fields to fetch from the Favorite
  **/
  select?: FavoriteSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: FavoriteInclude | null
}



/**
 * Model Tag
 */

export type Tag = {
  id: string
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  createdAt: Date
  updatedAt: Date
}

export type TagSelect = {
  id?: boolean
  itemType?: boolean
  itemStatus?: boolean
  itemName?: boolean
  itemContent?: boolean
  posts?: boolean | FindManyPostArgs
  createdAt?: boolean
  updatedAt?: boolean
}

export type TagInclude = {
  posts?: boolean | FindManyPostArgs
}

export type TagGetPayload<
  S extends boolean | null | undefined | TagArgs,
  U = keyof S
> = S extends true
  ? Tag
  : S extends undefined
  ? never
  : S extends TagArgs
  ? 'include' extends U
    ? Tag  & {
      [P in TrueKeys<S['include']>]:
      P extends 'posts'
      ? Array<PostGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Tag ? Tag[P]
: 
      P extends 'posts'
      ? Array<PostGetPayload<S['select'][P]>> : never
    }
  : Tag
: Tag


export interface TagDelegate {
  /**
   * Find zero or one Tag.
   * @param {FindOneTagArgs} args - Arguments to find a Tag
   * @example
   * // Get one Tag
   * const tag = await prisma.tag.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneTagArgs>(
    args: Subset<T, FindOneTagArgs>
  ): CheckSelect<T, TagClient<Tag | null>, TagClient<TagGetPayload<T> | null>>
  /**
   * Find zero or more Tags.
   * @param {FindManyTagArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Tags
   * const tags = await prisma.tag.findMany()
   * 
   * // Get first 10 Tags
   * const tags = await prisma.tag.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyTagArgs>(
    args?: Subset<T, FindManyTagArgs>
  ): CheckSelect<T, Promise<Array<Tag>>, Promise<Array<TagGetPayload<T>>>>
  /**
   * Create a Tag.
   * @param {TagCreateArgs} args - Arguments to create a Tag.
   * @example
   * // Create one Tag
   * const user = await prisma.tag.create({
   *   data: {
   *     // ... data to create a Tag
   *   }
   * })
   * 
  **/
  create<T extends TagCreateArgs>(
    args: Subset<T, TagCreateArgs>
  ): CheckSelect<T, TagClient<Tag>, TagClient<TagGetPayload<T>>>
  /**
   * Delete a Tag.
   * @param {TagDeleteArgs} args - Arguments to delete one Tag.
   * @example
   * // Delete one Tag
   * const user = await prisma.tag.delete({
   *   where: {
   *     // ... filter to delete one Tag
   *   }
   * })
   * 
  **/
  delete<T extends TagDeleteArgs>(
    args: Subset<T, TagDeleteArgs>
  ): CheckSelect<T, TagClient<Tag>, TagClient<TagGetPayload<T>>>
  /**
   * Update one Tag.
   * @param {TagUpdateArgs} args - Arguments to update one Tag.
   * @example
   * // Update one Tag
   * const tag = await prisma.tag.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends TagUpdateArgs>(
    args: Subset<T, TagUpdateArgs>
  ): CheckSelect<T, TagClient<Tag>, TagClient<TagGetPayload<T>>>
  /**
   * Delete zero or more Tags.
   * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
   * @example
   * // Delete a few Tags
   * const { count } = await prisma.tag.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends TagDeleteManyArgs>(
    args: Subset<T, TagDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Tags.
   * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Tags
   * const tag = await prisma.tag.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends TagUpdateManyArgs>(
    args: Subset<T, TagUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Tag.
   * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
   * @example
   * // Update or create a Tag
   * const tag = await prisma.tag.upsert({
   *   create: {
   *     // ... data to create a Tag
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Tag we want to update
   *   }
   * })
  **/
  upsert<T extends TagUpsertArgs>(
    args: Subset<T, TagUpsertArgs>
  ): CheckSelect<T, TagClient<Tag>, TagClient<TagGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class TagClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  posts<T extends FindManyPostArgs = {}>(args?: Subset<T, FindManyPostArgs>): CheckSelect<T, Promise<Array<Post>>, Promise<Array<PostGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Tag findOne
 */
export type FindOneTagArgs = {
  /**
   * Select specific fields to fetch from the Tag
  **/
  select?: TagSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: TagInclude | null
  /**
   * Filter, which Tag to fetch.
  **/
  where: TagWhereUniqueInput
}


/**
 * Tag findMany
 */
export type FindManyTagArgs = {
  /**
   * Select specific fields to fetch from the Tag
  **/
  select?: TagSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: TagInclude | null
  /**
   * Filter, which Tags to fetch.
  **/
  where?: TagWhereInput | null
  /**
   * Determine the order of the Tags to fetch.
  **/
  orderBy?: TagOrderByInput | null
  /**
   * Skip the first `n` Tags.
  **/
  skip?: number | null
  /**
   * Get all Tags that come after the Tag you provide with the current order.
  **/
  after?: TagWhereUniqueInput | null
  /**
   * Get all Tags that come before the Tag you provide with the current order.
  **/
  before?: TagWhereUniqueInput | null
  /**
   * Get the first `n` Tags.
  **/
  first?: number | null
  /**
   * Get the last `n` Tags.
  **/
  last?: number | null
}


/**
 * Tag create
 */
export type TagCreateArgs = {
  /**
   * Select specific fields to fetch from the Tag
  **/
  select?: TagSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: TagInclude | null
  /**
   * The data needed to create a Tag.
  **/
  data: TagCreateInput
}


/**
 * Tag update
 */
export type TagUpdateArgs = {
  /**
   * Select specific fields to fetch from the Tag
  **/
  select?: TagSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: TagInclude | null
  /**
   * The data needed to update a Tag.
  **/
  data: TagUpdateInput
  /**
   * Choose, which Tag to update.
  **/
  where: TagWhereUniqueInput
}


/**
 * Tag updateMany
 */
export type TagUpdateManyArgs = {
  data: TagUpdateManyMutationInput
  where?: TagWhereInput | null
}


/**
 * Tag upsert
 */
export type TagUpsertArgs = {
  /**
   * Select specific fields to fetch from the Tag
  **/
  select?: TagSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: TagInclude | null
  /**
   * The filter to search for the Tag to update in case it exists.
  **/
  where: TagWhereUniqueInput
  /**
   * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
  **/
  create: TagCreateInput
  /**
   * In case the Tag was found with the provided `where` argument, update it with this data.
  **/
  update: TagUpdateInput
}


/**
 * Tag delete
 */
export type TagDeleteArgs = {
  /**
   * Select specific fields to fetch from the Tag
  **/
  select?: TagSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: TagInclude | null
  /**
   * Filter which Tag to delete.
  **/
  where: TagWhereUniqueInput
}


/**
 * Tag deleteMany
 */
export type TagDeleteManyArgs = {
  where?: TagWhereInput | null
}


/**
 * Tag without action
 */
export type TagArgs = {
  /**
   * Select specific fields to fetch from the Tag
  **/
  select?: TagSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: TagInclude | null
}



/**
 * Model Category
 */

export type Category = {
  id: string
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  createdAt: Date
  updatedAt: Date
}

export type CategorySelect = {
  id?: boolean
  itemType?: boolean
  itemStatus?: boolean
  itemName?: boolean
  itemContent?: boolean
  pods?: boolean | FindManyPodArgs
  createdAt?: boolean
  updatedAt?: boolean
}

export type CategoryInclude = {
  pods?: boolean | FindManyPodArgs
}

export type CategoryGetPayload<
  S extends boolean | null | undefined | CategoryArgs,
  U = keyof S
> = S extends true
  ? Category
  : S extends undefined
  ? never
  : S extends CategoryArgs
  ? 'include' extends U
    ? Category  & {
      [P in TrueKeys<S['include']>]:
      P extends 'pods'
      ? Array<PodGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Category ? Category[P]
: 
      P extends 'pods'
      ? Array<PodGetPayload<S['select'][P]>> : never
    }
  : Category
: Category


export interface CategoryDelegate {
  /**
   * Find zero or one Category.
   * @param {FindOneCategoryArgs} args - Arguments to find a Category
   * @example
   * // Get one Category
   * const category = await prisma.category.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneCategoryArgs>(
    args: Subset<T, FindOneCategoryArgs>
  ): CheckSelect<T, CategoryClient<Category | null>, CategoryClient<CategoryGetPayload<T> | null>>
  /**
   * Find zero or more Categories.
   * @param {FindManyCategoryArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Categories
   * const categories = await prisma.category.findMany()
   * 
   * // Get first 10 Categories
   * const categories = await prisma.category.findMany({ first: 10 })
   * 
   * // Only select the `id`
   * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyCategoryArgs>(
    args?: Subset<T, FindManyCategoryArgs>
  ): CheckSelect<T, Promise<Array<Category>>, Promise<Array<CategoryGetPayload<T>>>>
  /**
   * Create a Category.
   * @param {CategoryCreateArgs} args - Arguments to create a Category.
   * @example
   * // Create one Category
   * const user = await prisma.category.create({
   *   data: {
   *     // ... data to create a Category
   *   }
   * })
   * 
  **/
  create<T extends CategoryCreateArgs>(
    args: Subset<T, CategoryCreateArgs>
  ): CheckSelect<T, CategoryClient<Category>, CategoryClient<CategoryGetPayload<T>>>
  /**
   * Delete a Category.
   * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
   * @example
   * // Delete one Category
   * const user = await prisma.category.delete({
   *   where: {
   *     // ... filter to delete one Category
   *   }
   * })
   * 
  **/
  delete<T extends CategoryDeleteArgs>(
    args: Subset<T, CategoryDeleteArgs>
  ): CheckSelect<T, CategoryClient<Category>, CategoryClient<CategoryGetPayload<T>>>
  /**
   * Update one Category.
   * @param {CategoryUpdateArgs} args - Arguments to update one Category.
   * @example
   * // Update one Category
   * const category = await prisma.category.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  update<T extends CategoryUpdateArgs>(
    args: Subset<T, CategoryUpdateArgs>
  ): CheckSelect<T, CategoryClient<Category>, CategoryClient<CategoryGetPayload<T>>>
  /**
   * Delete zero or more Categories.
   * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
   * @example
   * // Delete a few Categories
   * const { count } = await prisma.category.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends CategoryDeleteManyArgs>(
    args: Subset<T, CategoryDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Categories.
   * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Categories
   * const category = await prisma.category.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provider data here
   *   }
   * })
   * 
  **/
  updateMany<T extends CategoryUpdateManyArgs>(
    args: Subset<T, CategoryUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Category.
   * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
   * @example
   * // Update or create a Category
   * const category = await prisma.category.upsert({
   *   create: {
   *     // ... data to create a Category
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Category we want to update
   *   }
   * })
  **/
  upsert<T extends CategoryUpsertArgs>(
    args: Subset<T, CategoryUpsertArgs>
  ): CheckSelect<T, CategoryClient<Category>, CategoryClient<CategoryGetPayload<T>>>
  /**
   * 
   */
  count(): Promise<number>
}

export declare class CategoryClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  pods<T extends FindManyPodArgs = {}>(args?: Subset<T, FindManyPodArgs>): CheckSelect<T, Promise<Array<Pod>>, Promise<Array<PodGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Category findOne
 */
export type FindOneCategoryArgs = {
  /**
   * Select specific fields to fetch from the Category
  **/
  select?: CategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CategoryInclude | null
  /**
   * Filter, which Category to fetch.
  **/
  where: CategoryWhereUniqueInput
}


/**
 * Category findMany
 */
export type FindManyCategoryArgs = {
  /**
   * Select specific fields to fetch from the Category
  **/
  select?: CategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CategoryInclude | null
  /**
   * Filter, which Categories to fetch.
  **/
  where?: CategoryWhereInput | null
  /**
   * Determine the order of the Categories to fetch.
  **/
  orderBy?: CategoryOrderByInput | null
  /**
   * Skip the first `n` Categories.
  **/
  skip?: number | null
  /**
   * Get all Categories that come after the Category you provide with the current order.
  **/
  after?: CategoryWhereUniqueInput | null
  /**
   * Get all Categories that come before the Category you provide with the current order.
  **/
  before?: CategoryWhereUniqueInput | null
  /**
   * Get the first `n` Categories.
  **/
  first?: number | null
  /**
   * Get the last `n` Categories.
  **/
  last?: number | null
}


/**
 * Category create
 */
export type CategoryCreateArgs = {
  /**
   * Select specific fields to fetch from the Category
  **/
  select?: CategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CategoryInclude | null
  /**
   * The data needed to create a Category.
  **/
  data: CategoryCreateInput
}


/**
 * Category update
 */
export type CategoryUpdateArgs = {
  /**
   * Select specific fields to fetch from the Category
  **/
  select?: CategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CategoryInclude | null
  /**
   * The data needed to update a Category.
  **/
  data: CategoryUpdateInput
  /**
   * Choose, which Category to update.
  **/
  where: CategoryWhereUniqueInput
}


/**
 * Category updateMany
 */
export type CategoryUpdateManyArgs = {
  data: CategoryUpdateManyMutationInput
  where?: CategoryWhereInput | null
}


/**
 * Category upsert
 */
export type CategoryUpsertArgs = {
  /**
   * Select specific fields to fetch from the Category
  **/
  select?: CategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CategoryInclude | null
  /**
   * The filter to search for the Category to update in case it exists.
  **/
  where: CategoryWhereUniqueInput
  /**
   * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
  **/
  create: CategoryCreateInput
  /**
   * In case the Category was found with the provided `where` argument, update it with this data.
  **/
  update: CategoryUpdateInput
}


/**
 * Category delete
 */
export type CategoryDeleteArgs = {
  /**
   * Select specific fields to fetch from the Category
  **/
  select?: CategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CategoryInclude | null
  /**
   * Filter which Category to delete.
  **/
  where: CategoryWhereUniqueInput
}


/**
 * Category deleteMany
 */
export type CategoryDeleteManyArgs = {
  where?: CategoryWhereInput | null
}


/**
 * Category without action
 */
export type CategoryArgs = {
  /**
   * Select specific fields to fetch from the Category
  **/
  select?: CategorySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CategoryInclude | null
}



/**
 * Deep Input Types
 */


export type UserMetaWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<UserMetaWhereInput> | null
  OR?: Enumerable<UserMetaWhereInput> | null
  NOT?: Enumerable<UserMetaWhereInput> | null
  user?: UserWhereInput | null
}

export type PodMetaWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<PodMetaWhereInput> | null
  OR?: Enumerable<PodMetaWhereInput> | null
  NOT?: Enumerable<PodMetaWhereInput> | null
  pod?: PodWhereInput | null
}

export type CategoryWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  pods?: PodFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<CategoryWhereInput> | null
  OR?: Enumerable<CategoryWhereInput> | null
  NOT?: Enumerable<CategoryWhereInput> | null
}

export type NotificationMetaWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<NotificationMetaWhereInput> | null
  OR?: Enumerable<NotificationMetaWhereInput> | null
  NOT?: Enumerable<NotificationMetaWhereInput> | null
  notification?: NotificationWhereInput | null
}

export type NotificationWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: NotificationMetaFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<NotificationWhereInput> | null
  OR?: Enumerable<NotificationWhereInput> | null
  NOT?: Enumerable<NotificationWhereInput> | null
  sender?: UserWhereInput | null
  receiver?: UserWhereInput | null
  pod?: PodWhereInput | null
  post?: PostWhereInput | null
  user?: UserWhereInput | null
}

export type PodWhereInput = {
  id?: string | StringFilter | null
  members?: UserFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemUrlSegment?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: PodMetaFilter | null
  posts?: PostFilter | null
  categories?: CategoryFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  notifications?: NotificationFilter | null
  AND?: Enumerable<PodWhereInput> | null
  OR?: Enumerable<PodWhereInput> | null
  NOT?: Enumerable<PodWhereInput> | null
  user?: UserWhereInput | null
}

export type PostMetaWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<PostMetaWhereInput> | null
  OR?: Enumerable<PostMetaWhereInput> | null
  NOT?: Enumerable<PostMetaWhereInput> | null
  post?: PostWhereInput | null
}

export type TagWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  posts?: PostFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<TagWhereInput> | null
  OR?: Enumerable<TagWhereInput> | null
  NOT?: Enumerable<TagWhereInput> | null
}

export type FavoriteWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<FavoriteWhereInput> | null
  OR?: Enumerable<FavoriteWhereInput> | null
  NOT?: Enumerable<FavoriteWhereInput> | null
  user?: UserWhereInput | null
  post?: PostWhereInput | null
}

export type ReviewMetaWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<ReviewMetaWhereInput> | null
  OR?: Enumerable<ReviewMetaWhereInput> | null
  NOT?: Enumerable<ReviewMetaWhereInput> | null
  review?: ReviewWhereInput | null
}

export type ReviewWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemUrlSegment?: string | StringFilter | null
  itemMimeType?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: ReviewMetaFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<ReviewWhereInput> | null
  OR?: Enumerable<ReviewWhereInput> | null
  NOT?: Enumerable<ReviewWhereInput> | null
  user?: UserWhereInput | null
  post?: PostWhereInput | null
}

export type AnnotationMetaWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<AnnotationMetaWhereInput> | null
  OR?: Enumerable<AnnotationMetaWhereInput> | null
  NOT?: Enumerable<AnnotationMetaWhereInput> | null
  annotation?: AnnotationWhereInput | null
}

export type AnnotationWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemUrlSegment?: string | StringFilter | null
  itemMimeType?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: AnnotationMetaFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<AnnotationWhereInput> | null
  OR?: Enumerable<AnnotationWhereInput> | null
  NOT?: Enumerable<AnnotationWhereInput> | null
  user?: UserWhereInput | null
  post?: PostWhereInput | null
}

export type QuestionMetaWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<QuestionMetaWhereInput> | null
  OR?: Enumerable<QuestionMetaWhereInput> | null
  NOT?: Enumerable<QuestionMetaWhereInput> | null
  question?: QuestionWhereInput | null
}

export type QuestionWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemUrlSegment?: string | StringFilter | null
  itemMimeType?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: QuestionMetaFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<QuestionWhereInput> | null
  OR?: Enumerable<QuestionWhereInput> | null
  NOT?: Enumerable<QuestionWhereInput> | null
  user?: UserWhereInput | null
  post?: PostWhereInput | null
}

export type PostWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemUrlSegment?: string | StringFilter | null
  itemMimeType?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: PostMetaFilter | null
  tags?: TagFilter | null
  favorites?: FavoriteFilter | null
  reviews?: ReviewFilter | null
  annotations?: AnnotationFilter | null
  questions?: QuestionFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  notifications?: NotificationFilter | null
  AND?: Enumerable<PostWhereInput> | null
  OR?: Enumerable<PostWhereInput> | null
  NOT?: Enumerable<PostWhereInput> | null
  user?: UserWhereInput | null
  pod?: PodWhereInput | null
}

export type ThreadMetaWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<ThreadMetaWhereInput> | null
  OR?: Enumerable<ThreadMetaWhereInput> | null
  NOT?: Enumerable<ThreadMetaWhereInput> | null
  thread?: ThreadWhereInput | null
}

export type MessageMetaWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<MessageMetaWhereInput> | null
  OR?: Enumerable<MessageMetaWhereInput> | null
  NOT?: Enumerable<MessageMetaWhereInput> | null
  message?: MessageWhereInput | null
}

export type MessageWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: MessageMetaFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<MessageWhereInput> | null
  OR?: Enumerable<MessageWhereInput> | null
  NOT?: Enumerable<MessageWhereInput> | null
  user?: UserWhereInput | null
  thread?: ThreadWhereInput | null
}

export type ThreadWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: ThreadMetaFilter | null
  messages?: MessageFilter | null
  participants?: UserFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<ThreadWhereInput> | null
  OR?: Enumerable<ThreadWhereInput> | null
  NOT?: Enumerable<ThreadWhereInput> | null
}

export type UserWhereInput = {
  id?: string | StringFilter | null
  userType?: number | IntFilter | null
  userEmail?: string | StringFilter | null
  userPassword?: string | StringFilter | null
  publicHash?: string | StringFilter | null
  privateHash?: string | StringFilter | null
  confirmHash?: string | StringFilter | null
  forgotHash?: string | StringFilter | null
  userConfirmed?: number | IntFilter | null
  userDeleted?: boolean | BooleanFilter | null
  userMeta?: UserMetaFilter | null
  posts?: PostFilter | null
  pods?: PodFilter | null
  memberOf?: PodFilter | null
  favorites?: FavoriteFilter | null
  reviews?: ReviewFilter | null
  annotations?: AnnotationFilter | null
  questions?: QuestionFilter | null
  threads?: ThreadFilter | null
  notifications?: NotificationFilter | null
  following?: UserFilter | null
  followers?: UserFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  messages?: MessageFilter | null
  AND?: Enumerable<UserWhereInput> | null
  OR?: Enumerable<UserWhereInput> | null
  NOT?: Enumerable<UserWhereInput> | null
  sentNotifications?: NotificationWhereInput | null
  recievedNotifications?: NotificationWhereInput | null
}

export type UserWhereUniqueInput = {
  id?: string | null
  userEmail?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
}

export type UserMetaWhereUniqueInput = {
  id?: string | null
}

export type PostWhereUniqueInput = {
  id?: string | null
}

export type PodMetaWhereUniqueInput = {
  id?: string | null
}

export type CategoryWhereUniqueInput = {
  id?: string | null
}

export type PodWhereUniqueInput = {
  id?: string | null
}

export type NotificationWhereUniqueInput = {
  id?: string | null
}

export type NotificationMetaWhereUniqueInput = {
  id?: string | null
}

export type PostMetaWhereUniqueInput = {
  id?: string | null
}

export type TagWhereUniqueInput = {
  id?: string | null
}

export type FavoriteWhereUniqueInput = {
  id?: string | null
}

export type ReviewWhereUniqueInput = {
  id?: string | null
}

export type ReviewMetaWhereUniqueInput = {
  id?: string | null
}

export type AnnotationWhereUniqueInput = {
  id?: string | null
}

export type AnnotationMetaWhereUniqueInput = {
  id?: string | null
}

export type QuestionWhereUniqueInput = {
  id?: string | null
}

export type QuestionMetaWhereUniqueInput = {
  id?: string | null
}

export type ThreadWhereUniqueInput = {
  id?: string | null
}

export type ThreadMetaWhereUniqueInput = {
  id?: string | null
}

export type MessageWhereUniqueInput = {
  id?: string | null
}

export type MessageMetaWhereUniqueInput = {
  id?: string | null
}

export type UserMetaCreateWithoutUserInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type UserMetaCreateManyWithoutUserInput = {
  create?: Enumerable<UserMetaCreateWithoutUserInput> | null
  connect?: Enumerable<UserMetaWhereUniqueInput> | null
}

export type PodMetaCreateWithoutPodInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type PodMetaCreateManyWithoutPodInput = {
  create?: Enumerable<PodMetaCreateWithoutPodInput> | null
  connect?: Enumerable<PodMetaWhereUniqueInput> | null
}

export type PostMetaCreateWithoutPostInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type PostMetaCreateManyWithoutPostInput = {
  create?: Enumerable<PostMetaCreateWithoutPostInput> | null
  connect?: Enumerable<PostMetaWhereUniqueInput> | null
}

export type TagCreateWithoutPostsInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type TagCreateManyWithoutPostsInput = {
  create?: Enumerable<TagCreateWithoutPostsInput> | null
  connect?: Enumerable<TagWhereUniqueInput> | null
}

export type AnnotationMetaCreateWithoutAnnotationInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type AnnotationMetaCreateManyWithoutAnnotationInput = {
  create?: Enumerable<AnnotationMetaCreateWithoutAnnotationInput> | null
  connect?: Enumerable<AnnotationMetaWhereUniqueInput> | null
}

export type ReviewMetaCreateWithoutReviewInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type ReviewMetaCreateManyWithoutReviewInput = {
  create?: Enumerable<ReviewMetaCreateWithoutReviewInput> | null
  connect?: Enumerable<ReviewMetaWhereUniqueInput> | null
}

export type QuestionMetaCreateWithoutQuestionInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type QuestionMetaCreateManyWithoutQuestionInput = {
  create?: Enumerable<QuestionMetaCreateWithoutQuestionInput> | null
  connect?: Enumerable<QuestionMetaWhereUniqueInput> | null
}

export type NotificationMetaCreateWithoutNotificationInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type NotificationMetaCreateManyWithoutNotificationInput = {
  create?: Enumerable<NotificationMetaCreateWithoutNotificationInput> | null
  connect?: Enumerable<NotificationMetaWhereUniqueInput> | null
}

export type ThreadMetaCreateWithoutThreadInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type ThreadMetaCreateManyWithoutThreadInput = {
  create?: Enumerable<ThreadMetaCreateWithoutThreadInput> | null
  connect?: Enumerable<ThreadMetaWhereUniqueInput> | null
}

export type CategoryCreateWithoutPodsInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type CategoryCreateManyWithoutPodsInput = {
  create?: Enumerable<CategoryCreateWithoutPodsInput> | null
  connect?: Enumerable<CategoryWhereUniqueInput> | null
}

export type PodCreateWithoutNotificationsInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutPodsInput
  members?: UserCreateManyWithoutMemberOfInput | null
  itemMeta?: PodMetaCreateManyWithoutPodInput | null
  posts?: PostCreateManyWithoutPodInput | null
  categories?: CategoryCreateManyWithoutPodsInput | null
}

export type PodCreateOneWithoutNotificationsInput = {
  create?: PodCreateWithoutNotificationsInput | null
  connect?: PodWhereUniqueInput | null
}

export type MessageMetaCreateWithoutMessageInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type MessageMetaCreateManyWithoutMessageInput = {
  create?: Enumerable<MessageMetaCreateWithoutMessageInput> | null
  connect?: Enumerable<MessageMetaWhereUniqueInput> | null
}

export type UserCreateWithoutThreadsInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaCreateManyWithoutUserInput | null
  posts?: PostCreateManyWithoutUserInput | null
  pods?: PodCreateManyWithoutUserInput | null
  memberOf?: PodCreateManyWithoutMembersInput | null
  favorites?: FavoriteCreateManyWithoutUserInput | null
  reviews?: ReviewCreateManyWithoutUserInput | null
  annotations?: AnnotationCreateManyWithoutUserInput | null
  questions?: QuestionCreateManyWithoutUserInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  sentNotifications?: NotificationCreateOneWithoutSenderInput | null
  recievedNotifications?: NotificationCreateOneWithoutReceiverInput | null
  messages?: MessageCreateManyWithoutUserInput | null
}

export type UserCreateManyWithoutThreadsInput = {
  create?: Enumerable<UserCreateWithoutThreadsInput> | null
  connect?: Enumerable<UserWhereUniqueInput> | null
}

export type ThreadCreateWithoutMessagesInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: ThreadMetaCreateManyWithoutThreadInput | null
  participants?: UserCreateManyWithoutThreadsInput | null
}

export type ThreadCreateOneWithoutMessagesInput = {
  create?: ThreadCreateWithoutMessagesInput | null
  connect?: ThreadWhereUniqueInput | null
}

export type MessageCreateWithoutUserInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: MessageMetaCreateManyWithoutMessageInput | null
  thread: ThreadCreateOneWithoutMessagesInput
}

export type MessageCreateManyWithoutUserInput = {
  create?: Enumerable<MessageCreateWithoutUserInput> | null
  connect?: Enumerable<MessageWhereUniqueInput> | null
}

export type UserCreateWithoutNotificationsInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaCreateManyWithoutUserInput | null
  posts?: PostCreateManyWithoutUserInput | null
  pods?: PodCreateManyWithoutUserInput | null
  memberOf?: PodCreateManyWithoutMembersInput | null
  favorites?: FavoriteCreateManyWithoutUserInput | null
  reviews?: ReviewCreateManyWithoutUserInput | null
  annotations?: AnnotationCreateManyWithoutUserInput | null
  questions?: QuestionCreateManyWithoutUserInput | null
  threads?: ThreadCreateManyWithoutParticipantsInput | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  sentNotifications?: NotificationCreateOneWithoutSenderInput | null
  recievedNotifications?: NotificationCreateOneWithoutReceiverInput | null
  messages?: MessageCreateManyWithoutUserInput | null
}

export type UserCreateOneWithoutNotificationsInput = {
  create?: UserCreateWithoutNotificationsInput | null
  connect?: UserWhereUniqueInput | null
}

export type NotificationCreateWithoutReceiverInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: NotificationMetaCreateManyWithoutNotificationInput | null
  sender: UserCreateOneWithoutSentNotificationsInput
  pod?: PodCreateOneWithoutNotificationsInput | null
  post?: PostCreateOneWithoutNotificationsInput | null
  user?: UserCreateOneWithoutNotificationsInput | null
}

export type NotificationCreateOneWithoutReceiverInput = {
  create?: NotificationCreateWithoutReceiverInput | null
  connect?: NotificationWhereUniqueInput | null
}

export type UserCreateWithoutFollowingInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaCreateManyWithoutUserInput | null
  posts?: PostCreateManyWithoutUserInput | null
  pods?: PodCreateManyWithoutUserInput | null
  memberOf?: PodCreateManyWithoutMembersInput | null
  favorites?: FavoriteCreateManyWithoutUserInput | null
  reviews?: ReviewCreateManyWithoutUserInput | null
  annotations?: AnnotationCreateManyWithoutUserInput | null
  questions?: QuestionCreateManyWithoutUserInput | null
  threads?: ThreadCreateManyWithoutParticipantsInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  sentNotifications?: NotificationCreateOneWithoutSenderInput | null
  recievedNotifications?: NotificationCreateOneWithoutReceiverInput | null
  messages?: MessageCreateManyWithoutUserInput | null
}

export type UserCreateManyWithoutFollowingInput = {
  create?: Enumerable<UserCreateWithoutFollowingInput> | null
  connect?: Enumerable<UserWhereUniqueInput> | null
}

export type UserCreateWithoutQuestionsInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaCreateManyWithoutUserInput | null
  posts?: PostCreateManyWithoutUserInput | null
  pods?: PodCreateManyWithoutUserInput | null
  memberOf?: PodCreateManyWithoutMembersInput | null
  favorites?: FavoriteCreateManyWithoutUserInput | null
  reviews?: ReviewCreateManyWithoutUserInput | null
  annotations?: AnnotationCreateManyWithoutUserInput | null
  threads?: ThreadCreateManyWithoutParticipantsInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  sentNotifications?: NotificationCreateOneWithoutSenderInput | null
  recievedNotifications?: NotificationCreateOneWithoutReceiverInput | null
  messages?: MessageCreateManyWithoutUserInput | null
}

export type UserCreateOneWithoutQuestionsInput = {
  create?: UserCreateWithoutQuestionsInput | null
  connect?: UserWhereUniqueInput | null
}

export type QuestionCreateWithoutPostInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutQuestionsInput
  itemMeta?: QuestionMetaCreateManyWithoutQuestionInput | null
}

export type QuestionCreateManyWithoutPostInput = {
  create?: Enumerable<QuestionCreateWithoutPostInput> | null
  connect?: Enumerable<QuestionWhereUniqueInput> | null
}

export type PostCreateWithoutNotificationsInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutPostsInput
  pod: PodCreateOneWithoutPostsInput
  itemMeta?: PostMetaCreateManyWithoutPostInput | null
  tags?: TagCreateManyWithoutPostsInput | null
  favorites?: FavoriteCreateManyWithoutPostInput | null
  reviews?: ReviewCreateManyWithoutPostInput | null
  annotations?: AnnotationCreateManyWithoutPostInput | null
  questions?: QuestionCreateManyWithoutPostInput | null
}

export type PostCreateOneWithoutNotificationsInput = {
  create?: PostCreateWithoutNotificationsInput | null
  connect?: PostWhereUniqueInput | null
}

export type NotificationCreateWithoutSenderInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: NotificationMetaCreateManyWithoutNotificationInput | null
  receiver: UserCreateOneWithoutRecievedNotificationsInput
  pod?: PodCreateOneWithoutNotificationsInput | null
  post?: PostCreateOneWithoutNotificationsInput | null
  user?: UserCreateOneWithoutNotificationsInput | null
}

export type NotificationCreateOneWithoutSenderInput = {
  create?: NotificationCreateWithoutSenderInput | null
  connect?: NotificationWhereUniqueInput | null
}

export type UserCreateWithoutFollowersInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaCreateManyWithoutUserInput | null
  posts?: PostCreateManyWithoutUserInput | null
  pods?: PodCreateManyWithoutUserInput | null
  memberOf?: PodCreateManyWithoutMembersInput | null
  favorites?: FavoriteCreateManyWithoutUserInput | null
  reviews?: ReviewCreateManyWithoutUserInput | null
  annotations?: AnnotationCreateManyWithoutUserInput | null
  questions?: QuestionCreateManyWithoutUserInput | null
  threads?: ThreadCreateManyWithoutParticipantsInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  following?: UserCreateManyWithoutFollowersInput | null
  sentNotifications?: NotificationCreateOneWithoutSenderInput | null
  recievedNotifications?: NotificationCreateOneWithoutReceiverInput | null
  messages?: MessageCreateManyWithoutUserInput | null
}

export type UserCreateManyWithoutFollowersInput = {
  create?: Enumerable<UserCreateWithoutFollowersInput> | null
  connect?: Enumerable<UserWhereUniqueInput> | null
}

export type UserCreateWithoutRecievedNotificationsInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaCreateManyWithoutUserInput | null
  posts?: PostCreateManyWithoutUserInput | null
  pods?: PodCreateManyWithoutUserInput | null
  memberOf?: PodCreateManyWithoutMembersInput | null
  favorites?: FavoriteCreateManyWithoutUserInput | null
  reviews?: ReviewCreateManyWithoutUserInput | null
  annotations?: AnnotationCreateManyWithoutUserInput | null
  questions?: QuestionCreateManyWithoutUserInput | null
  threads?: ThreadCreateManyWithoutParticipantsInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  sentNotifications?: NotificationCreateOneWithoutSenderInput | null
  messages?: MessageCreateManyWithoutUserInput | null
}

export type UserCreateOneWithoutRecievedNotificationsInput = {
  create?: UserCreateWithoutRecievedNotificationsInput | null
  connect?: UserWhereUniqueInput | null
}

export type NotificationCreateWithoutUserInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: NotificationMetaCreateManyWithoutNotificationInput | null
  sender: UserCreateOneWithoutSentNotificationsInput
  receiver: UserCreateOneWithoutRecievedNotificationsInput
  pod?: PodCreateOneWithoutNotificationsInput | null
  post?: PostCreateOneWithoutNotificationsInput | null
}

export type NotificationCreateManyWithoutUserInput = {
  create?: Enumerable<NotificationCreateWithoutUserInput> | null
  connect?: Enumerable<NotificationWhereUniqueInput> | null
}

export type UserCreateWithoutMessagesInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaCreateManyWithoutUserInput | null
  posts?: PostCreateManyWithoutUserInput | null
  pods?: PodCreateManyWithoutUserInput | null
  memberOf?: PodCreateManyWithoutMembersInput | null
  favorites?: FavoriteCreateManyWithoutUserInput | null
  reviews?: ReviewCreateManyWithoutUserInput | null
  annotations?: AnnotationCreateManyWithoutUserInput | null
  questions?: QuestionCreateManyWithoutUserInput | null
  threads?: ThreadCreateManyWithoutParticipantsInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  sentNotifications?: NotificationCreateOneWithoutSenderInput | null
  recievedNotifications?: NotificationCreateOneWithoutReceiverInput | null
}

export type UserCreateOneWithoutMessagesInput = {
  create?: UserCreateWithoutMessagesInput | null
  connect?: UserWhereUniqueInput | null
}

export type MessageCreateWithoutThreadInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutMessagesInput
  itemMeta?: MessageMetaCreateManyWithoutMessageInput | null
}

export type MessageCreateManyWithoutThreadInput = {
  create?: Enumerable<MessageCreateWithoutThreadInput> | null
  connect?: Enumerable<MessageWhereUniqueInput> | null
}

export type ThreadCreateWithoutParticipantsInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: ThreadMetaCreateManyWithoutThreadInput | null
  messages?: MessageCreateManyWithoutThreadInput | null
}

export type ThreadCreateManyWithoutParticipantsInput = {
  create?: Enumerable<ThreadCreateWithoutParticipantsInput> | null
  connect?: Enumerable<ThreadWhereUniqueInput> | null
}

export type UserCreateWithoutSentNotificationsInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaCreateManyWithoutUserInput | null
  posts?: PostCreateManyWithoutUserInput | null
  pods?: PodCreateManyWithoutUserInput | null
  memberOf?: PodCreateManyWithoutMembersInput | null
  favorites?: FavoriteCreateManyWithoutUserInput | null
  reviews?: ReviewCreateManyWithoutUserInput | null
  annotations?: AnnotationCreateManyWithoutUserInput | null
  questions?: QuestionCreateManyWithoutUserInput | null
  threads?: ThreadCreateManyWithoutParticipantsInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  recievedNotifications?: NotificationCreateOneWithoutReceiverInput | null
  messages?: MessageCreateManyWithoutUserInput | null
}

export type UserCreateOneWithoutSentNotificationsInput = {
  create?: UserCreateWithoutSentNotificationsInput | null
  connect?: UserWhereUniqueInput | null
}

export type NotificationCreateWithoutPostInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: NotificationMetaCreateManyWithoutNotificationInput | null
  sender: UserCreateOneWithoutSentNotificationsInput
  receiver: UserCreateOneWithoutRecievedNotificationsInput
  pod?: PodCreateOneWithoutNotificationsInput | null
  user?: UserCreateOneWithoutNotificationsInput | null
}

export type NotificationCreateManyWithoutPostInput = {
  create?: Enumerable<NotificationCreateWithoutPostInput> | null
  connect?: Enumerable<NotificationWhereUniqueInput> | null
}

export type PostCreateWithoutQuestionsInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutPostsInput
  pod: PodCreateOneWithoutPostsInput
  itemMeta?: PostMetaCreateManyWithoutPostInput | null
  tags?: TagCreateManyWithoutPostsInput | null
  favorites?: FavoriteCreateManyWithoutPostInput | null
  reviews?: ReviewCreateManyWithoutPostInput | null
  annotations?: AnnotationCreateManyWithoutPostInput | null
  notifications?: NotificationCreateManyWithoutPostInput | null
}

export type PostCreateOneWithoutQuestionsInput = {
  create?: PostCreateWithoutQuestionsInput | null
  connect?: PostWhereUniqueInput | null
}

export type QuestionCreateWithoutUserInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: QuestionMetaCreateManyWithoutQuestionInput | null
  post: PostCreateOneWithoutQuestionsInput
}

export type QuestionCreateManyWithoutUserInput = {
  create?: Enumerable<QuestionCreateWithoutUserInput> | null
  connect?: Enumerable<QuestionWhereUniqueInput> | null
}

export type UserCreateWithoutAnnotationsInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaCreateManyWithoutUserInput | null
  posts?: PostCreateManyWithoutUserInput | null
  pods?: PodCreateManyWithoutUserInput | null
  memberOf?: PodCreateManyWithoutMembersInput | null
  favorites?: FavoriteCreateManyWithoutUserInput | null
  reviews?: ReviewCreateManyWithoutUserInput | null
  questions?: QuestionCreateManyWithoutUserInput | null
  threads?: ThreadCreateManyWithoutParticipantsInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  sentNotifications?: NotificationCreateOneWithoutSenderInput | null
  recievedNotifications?: NotificationCreateOneWithoutReceiverInput | null
  messages?: MessageCreateManyWithoutUserInput | null
}

export type UserCreateOneWithoutAnnotationsInput = {
  create?: UserCreateWithoutAnnotationsInput | null
  connect?: UserWhereUniqueInput | null
}

export type AnnotationCreateWithoutPostInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutAnnotationsInput
  itemMeta?: AnnotationMetaCreateManyWithoutAnnotationInput | null
}

export type AnnotationCreateManyWithoutPostInput = {
  create?: Enumerable<AnnotationCreateWithoutPostInput> | null
  connect?: Enumerable<AnnotationWhereUniqueInput> | null
}

export type PostCreateWithoutReviewsInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutPostsInput
  pod: PodCreateOneWithoutPostsInput
  itemMeta?: PostMetaCreateManyWithoutPostInput | null
  tags?: TagCreateManyWithoutPostsInput | null
  favorites?: FavoriteCreateManyWithoutPostInput | null
  annotations?: AnnotationCreateManyWithoutPostInput | null
  questions?: QuestionCreateManyWithoutPostInput | null
  notifications?: NotificationCreateManyWithoutPostInput | null
}

export type PostCreateOneWithoutReviewsInput = {
  create?: PostCreateWithoutReviewsInput | null
  connect?: PostWhereUniqueInput | null
}

export type ReviewCreateWithoutUserInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: ReviewMetaCreateManyWithoutReviewInput | null
  post: PostCreateOneWithoutReviewsInput
}

export type ReviewCreateManyWithoutUserInput = {
  create?: Enumerable<ReviewCreateWithoutUserInput> | null
  connect?: Enumerable<ReviewWhereUniqueInput> | null
}

export type UserCreateWithoutFavoritesInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaCreateManyWithoutUserInput | null
  posts?: PostCreateManyWithoutUserInput | null
  pods?: PodCreateManyWithoutUserInput | null
  memberOf?: PodCreateManyWithoutMembersInput | null
  reviews?: ReviewCreateManyWithoutUserInput | null
  annotations?: AnnotationCreateManyWithoutUserInput | null
  questions?: QuestionCreateManyWithoutUserInput | null
  threads?: ThreadCreateManyWithoutParticipantsInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  sentNotifications?: NotificationCreateOneWithoutSenderInput | null
  recievedNotifications?: NotificationCreateOneWithoutReceiverInput | null
  messages?: MessageCreateManyWithoutUserInput | null
}

export type UserCreateOneWithoutFavoritesInput = {
  create?: UserCreateWithoutFavoritesInput | null
  connect?: UserWhereUniqueInput | null
}

export type FavoriteCreateWithoutPostInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutFavoritesInput
}

export type FavoriteCreateManyWithoutPostInput = {
  create?: Enumerable<FavoriteCreateWithoutPostInput> | null
  connect?: Enumerable<FavoriteWhereUniqueInput> | null
}

export type PostCreateWithoutAnnotationsInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutPostsInput
  pod: PodCreateOneWithoutPostsInput
  itemMeta?: PostMetaCreateManyWithoutPostInput | null
  tags?: TagCreateManyWithoutPostsInput | null
  favorites?: FavoriteCreateManyWithoutPostInput | null
  reviews?: ReviewCreateManyWithoutPostInput | null
  questions?: QuestionCreateManyWithoutPostInput | null
  notifications?: NotificationCreateManyWithoutPostInput | null
}

export type PostCreateOneWithoutAnnotationsInput = {
  create?: PostCreateWithoutAnnotationsInput | null
  connect?: PostWhereUniqueInput | null
}

export type AnnotationCreateWithoutUserInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: AnnotationMetaCreateManyWithoutAnnotationInput | null
  post: PostCreateOneWithoutAnnotationsInput
}

export type AnnotationCreateManyWithoutUserInput = {
  create?: Enumerable<AnnotationCreateWithoutUserInput> | null
  connect?: Enumerable<AnnotationWhereUniqueInput> | null
}

export type UserCreateWithoutReviewsInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaCreateManyWithoutUserInput | null
  posts?: PostCreateManyWithoutUserInput | null
  pods?: PodCreateManyWithoutUserInput | null
  memberOf?: PodCreateManyWithoutMembersInput | null
  favorites?: FavoriteCreateManyWithoutUserInput | null
  annotations?: AnnotationCreateManyWithoutUserInput | null
  questions?: QuestionCreateManyWithoutUserInput | null
  threads?: ThreadCreateManyWithoutParticipantsInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  sentNotifications?: NotificationCreateOneWithoutSenderInput | null
  recievedNotifications?: NotificationCreateOneWithoutReceiverInput | null
  messages?: MessageCreateManyWithoutUserInput | null
}

export type UserCreateOneWithoutReviewsInput = {
  create?: UserCreateWithoutReviewsInput | null
  connect?: UserWhereUniqueInput | null
}

export type ReviewCreateWithoutPostInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutReviewsInput
  itemMeta?: ReviewMetaCreateManyWithoutReviewInput | null
}

export type ReviewCreateManyWithoutPostInput = {
  create?: Enumerable<ReviewCreateWithoutPostInput> | null
  connect?: Enumerable<ReviewWhereUniqueInput> | null
}

export type PostCreateWithoutFavoritesInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutPostsInput
  pod: PodCreateOneWithoutPostsInput
  itemMeta?: PostMetaCreateManyWithoutPostInput | null
  tags?: TagCreateManyWithoutPostsInput | null
  reviews?: ReviewCreateManyWithoutPostInput | null
  annotations?: AnnotationCreateManyWithoutPostInput | null
  questions?: QuestionCreateManyWithoutPostInput | null
  notifications?: NotificationCreateManyWithoutPostInput | null
}

export type PostCreateOneWithoutFavoritesInput = {
  create?: PostCreateWithoutFavoritesInput | null
  connect?: PostWhereUniqueInput | null
}

export type FavoriteCreateWithoutUserInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  post: PostCreateOneWithoutFavoritesInput
}

export type FavoriteCreateManyWithoutUserInput = {
  create?: Enumerable<FavoriteCreateWithoutUserInput> | null
  connect?: Enumerable<FavoriteWhereUniqueInput> | null
}

export type UserCreateWithoutMemberOfInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaCreateManyWithoutUserInput | null
  posts?: PostCreateManyWithoutUserInput | null
  pods?: PodCreateManyWithoutUserInput | null
  favorites?: FavoriteCreateManyWithoutUserInput | null
  reviews?: ReviewCreateManyWithoutUserInput | null
  annotations?: AnnotationCreateManyWithoutUserInput | null
  questions?: QuestionCreateManyWithoutUserInput | null
  threads?: ThreadCreateManyWithoutParticipantsInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  sentNotifications?: NotificationCreateOneWithoutSenderInput | null
  recievedNotifications?: NotificationCreateOneWithoutReceiverInput | null
  messages?: MessageCreateManyWithoutUserInput | null
}

export type UserCreateManyWithoutMemberOfInput = {
  create?: Enumerable<UserCreateWithoutMemberOfInput> | null
  connect?: Enumerable<UserWhereUniqueInput> | null
}

export type NotificationCreateWithoutPodInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: NotificationMetaCreateManyWithoutNotificationInput | null
  sender: UserCreateOneWithoutSentNotificationsInput
  receiver: UserCreateOneWithoutRecievedNotificationsInput
  post?: PostCreateOneWithoutNotificationsInput | null
  user?: UserCreateOneWithoutNotificationsInput | null
}

export type NotificationCreateManyWithoutPodInput = {
  create?: Enumerable<NotificationCreateWithoutPodInput> | null
  connect?: Enumerable<NotificationWhereUniqueInput> | null
}

export type PodCreateWithoutUserInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  members?: UserCreateManyWithoutMemberOfInput | null
  itemMeta?: PodMetaCreateManyWithoutPodInput | null
  posts?: PostCreateManyWithoutPodInput | null
  categories?: CategoryCreateManyWithoutPodsInput | null
  notifications?: NotificationCreateManyWithoutPodInput | null
}

export type PodCreateManyWithoutUserInput = {
  create?: Enumerable<PodCreateWithoutUserInput> | null
  connect?: Enumerable<PodWhereUniqueInput> | null
}

export type UserCreateWithoutPostsInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaCreateManyWithoutUserInput | null
  pods?: PodCreateManyWithoutUserInput | null
  memberOf?: PodCreateManyWithoutMembersInput | null
  favorites?: FavoriteCreateManyWithoutUserInput | null
  reviews?: ReviewCreateManyWithoutUserInput | null
  annotations?: AnnotationCreateManyWithoutUserInput | null
  questions?: QuestionCreateManyWithoutUserInput | null
  threads?: ThreadCreateManyWithoutParticipantsInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  sentNotifications?: NotificationCreateOneWithoutSenderInput | null
  recievedNotifications?: NotificationCreateOneWithoutReceiverInput | null
  messages?: MessageCreateManyWithoutUserInput | null
}

export type UserCreateOneWithoutPostsInput = {
  create?: UserCreateWithoutPostsInput | null
  connect?: UserWhereUniqueInput | null
}

export type PostCreateWithoutPodInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutPostsInput
  itemMeta?: PostMetaCreateManyWithoutPostInput | null
  tags?: TagCreateManyWithoutPostsInput | null
  favorites?: FavoriteCreateManyWithoutPostInput | null
  reviews?: ReviewCreateManyWithoutPostInput | null
  annotations?: AnnotationCreateManyWithoutPostInput | null
  questions?: QuestionCreateManyWithoutPostInput | null
  notifications?: NotificationCreateManyWithoutPostInput | null
}

export type PostCreateManyWithoutPodInput = {
  create?: Enumerable<PostCreateWithoutPodInput> | null
  connect?: Enumerable<PostWhereUniqueInput> | null
}

export type PodCreateWithoutMembersInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutPodsInput
  itemMeta?: PodMetaCreateManyWithoutPodInput | null
  posts?: PostCreateManyWithoutPodInput | null
  categories?: CategoryCreateManyWithoutPodsInput | null
  notifications?: NotificationCreateManyWithoutPodInput | null
}

export type PodCreateManyWithoutMembersInput = {
  create?: Enumerable<PodCreateWithoutMembersInput> | null
  connect?: Enumerable<PodWhereUniqueInput> | null
}

export type UserCreateWithoutPodsInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaCreateManyWithoutUserInput | null
  posts?: PostCreateManyWithoutUserInput | null
  memberOf?: PodCreateManyWithoutMembersInput | null
  favorites?: FavoriteCreateManyWithoutUserInput | null
  reviews?: ReviewCreateManyWithoutUserInput | null
  annotations?: AnnotationCreateManyWithoutUserInput | null
  questions?: QuestionCreateManyWithoutUserInput | null
  threads?: ThreadCreateManyWithoutParticipantsInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  sentNotifications?: NotificationCreateOneWithoutSenderInput | null
  recievedNotifications?: NotificationCreateOneWithoutReceiverInput | null
  messages?: MessageCreateManyWithoutUserInput | null
}

export type UserCreateOneWithoutPodsInput = {
  create?: UserCreateWithoutPodsInput | null
  connect?: UserWhereUniqueInput | null
}

export type PodCreateWithoutPostsInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutPodsInput
  members?: UserCreateManyWithoutMemberOfInput | null
  itemMeta?: PodMetaCreateManyWithoutPodInput | null
  categories?: CategoryCreateManyWithoutPodsInput | null
  notifications?: NotificationCreateManyWithoutPodInput | null
}

export type PodCreateOneWithoutPostsInput = {
  create?: PodCreateWithoutPostsInput | null
  connect?: PodWhereUniqueInput | null
}

export type PostCreateWithoutUserInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  pod: PodCreateOneWithoutPostsInput
  itemMeta?: PostMetaCreateManyWithoutPostInput | null
  tags?: TagCreateManyWithoutPostsInput | null
  favorites?: FavoriteCreateManyWithoutPostInput | null
  reviews?: ReviewCreateManyWithoutPostInput | null
  annotations?: AnnotationCreateManyWithoutPostInput | null
  questions?: QuestionCreateManyWithoutPostInput | null
  notifications?: NotificationCreateManyWithoutPostInput | null
}

export type PostCreateManyWithoutUserInput = {
  create?: Enumerable<PostCreateWithoutUserInput> | null
  connect?: Enumerable<PostWhereUniqueInput> | null
}

export type UserCreateInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaCreateManyWithoutUserInput | null
  posts?: PostCreateManyWithoutUserInput | null
  pods?: PodCreateManyWithoutUserInput | null
  memberOf?: PodCreateManyWithoutMembersInput | null
  favorites?: FavoriteCreateManyWithoutUserInput | null
  reviews?: ReviewCreateManyWithoutUserInput | null
  annotations?: AnnotationCreateManyWithoutUserInput | null
  questions?: QuestionCreateManyWithoutUserInput | null
  threads?: ThreadCreateManyWithoutParticipantsInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  sentNotifications?: NotificationCreateOneWithoutSenderInput | null
  recievedNotifications?: NotificationCreateOneWithoutReceiverInput | null
  messages?: MessageCreateManyWithoutUserInput | null
}

export type UserMetaUpdateWithoutUserDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type UserMetaUpdateWithWhereUniqueWithoutUserInput = {
  where: UserMetaWhereUniqueInput
  data: UserMetaUpdateWithoutUserDataInput
}

export type UserMetaScalarWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<UserMetaScalarWhereInput> | null
  OR?: Enumerable<UserMetaScalarWhereInput> | null
  NOT?: Enumerable<UserMetaScalarWhereInput> | null
}

export type UserMetaUpdateManyDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type UserMetaUpdateManyWithWhereNestedInput = {
  where: UserMetaScalarWhereInput
  data: UserMetaUpdateManyDataInput
}

export type UserMetaUpsertWithWhereUniqueWithoutUserInput = {
  where: UserMetaWhereUniqueInput
  update: UserMetaUpdateWithoutUserDataInput
  create: UserMetaCreateWithoutUserInput
}

export type UserMetaUpdateManyWithoutUserInput = {
  create?: Enumerable<UserMetaCreateWithoutUserInput> | null
  connect?: Enumerable<UserMetaWhereUniqueInput> | null
  set?: Enumerable<UserMetaWhereUniqueInput> | null
  disconnect?: Enumerable<UserMetaWhereUniqueInput> | null
  delete?: Enumerable<UserMetaWhereUniqueInput> | null
  update?: Enumerable<UserMetaUpdateWithWhereUniqueWithoutUserInput> | null
  updateMany?: Enumerable<UserMetaUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<UserMetaScalarWhereInput> | null
  upsert?: Enumerable<UserMetaUpsertWithWhereUniqueWithoutUserInput> | null
}

export type PodMetaUpdateWithoutPodDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type PodMetaUpdateWithWhereUniqueWithoutPodInput = {
  where: PodMetaWhereUniqueInput
  data: PodMetaUpdateWithoutPodDataInput
}

export type PodMetaScalarWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<PodMetaScalarWhereInput> | null
  OR?: Enumerable<PodMetaScalarWhereInput> | null
  NOT?: Enumerable<PodMetaScalarWhereInput> | null
}

export type PodMetaUpdateManyDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type PodMetaUpdateManyWithWhereNestedInput = {
  where: PodMetaScalarWhereInput
  data: PodMetaUpdateManyDataInput
}

export type PodMetaUpsertWithWhereUniqueWithoutPodInput = {
  where: PodMetaWhereUniqueInput
  update: PodMetaUpdateWithoutPodDataInput
  create: PodMetaCreateWithoutPodInput
}

export type PodMetaUpdateManyWithoutPodInput = {
  create?: Enumerable<PodMetaCreateWithoutPodInput> | null
  connect?: Enumerable<PodMetaWhereUniqueInput> | null
  set?: Enumerable<PodMetaWhereUniqueInput> | null
  disconnect?: Enumerable<PodMetaWhereUniqueInput> | null
  delete?: Enumerable<PodMetaWhereUniqueInput> | null
  update?: Enumerable<PodMetaUpdateWithWhereUniqueWithoutPodInput> | null
  updateMany?: Enumerable<PodMetaUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<PodMetaScalarWhereInput> | null
  upsert?: Enumerable<PodMetaUpsertWithWhereUniqueWithoutPodInput> | null
}

export type PostMetaUpdateWithoutPostDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type PostMetaUpdateWithWhereUniqueWithoutPostInput = {
  where: PostMetaWhereUniqueInput
  data: PostMetaUpdateWithoutPostDataInput
}

export type PostMetaScalarWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<PostMetaScalarWhereInput> | null
  OR?: Enumerable<PostMetaScalarWhereInput> | null
  NOT?: Enumerable<PostMetaScalarWhereInput> | null
}

export type PostMetaUpdateManyDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type PostMetaUpdateManyWithWhereNestedInput = {
  where: PostMetaScalarWhereInput
  data: PostMetaUpdateManyDataInput
}

export type PostMetaUpsertWithWhereUniqueWithoutPostInput = {
  where: PostMetaWhereUniqueInput
  update: PostMetaUpdateWithoutPostDataInput
  create: PostMetaCreateWithoutPostInput
}

export type PostMetaUpdateManyWithoutPostInput = {
  create?: Enumerable<PostMetaCreateWithoutPostInput> | null
  connect?: Enumerable<PostMetaWhereUniqueInput> | null
  set?: Enumerable<PostMetaWhereUniqueInput> | null
  disconnect?: Enumerable<PostMetaWhereUniqueInput> | null
  delete?: Enumerable<PostMetaWhereUniqueInput> | null
  update?: Enumerable<PostMetaUpdateWithWhereUniqueWithoutPostInput> | null
  updateMany?: Enumerable<PostMetaUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<PostMetaScalarWhereInput> | null
  upsert?: Enumerable<PostMetaUpsertWithWhereUniqueWithoutPostInput> | null
}

export type TagUpdateWithoutPostsDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type TagUpdateWithWhereUniqueWithoutPostsInput = {
  where: TagWhereUniqueInput
  data: TagUpdateWithoutPostsDataInput
}

export type TagScalarWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  posts?: PostFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<TagScalarWhereInput> | null
  OR?: Enumerable<TagScalarWhereInput> | null
  NOT?: Enumerable<TagScalarWhereInput> | null
}

export type TagUpdateManyDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type TagUpdateManyWithWhereNestedInput = {
  where: TagScalarWhereInput
  data: TagUpdateManyDataInput
}

export type TagUpsertWithWhereUniqueWithoutPostsInput = {
  where: TagWhereUniqueInput
  update: TagUpdateWithoutPostsDataInput
  create: TagCreateWithoutPostsInput
}

export type TagUpdateManyWithoutPostsInput = {
  create?: Enumerable<TagCreateWithoutPostsInput> | null
  connect?: Enumerable<TagWhereUniqueInput> | null
  set?: Enumerable<TagWhereUniqueInput> | null
  disconnect?: Enumerable<TagWhereUniqueInput> | null
  delete?: Enumerable<TagWhereUniqueInput> | null
  update?: Enumerable<TagUpdateWithWhereUniqueWithoutPostsInput> | null
  updateMany?: Enumerable<TagUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<TagScalarWhereInput> | null
  upsert?: Enumerable<TagUpsertWithWhereUniqueWithoutPostsInput> | null
}

export type AnnotationMetaUpdateWithoutAnnotationDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type AnnotationMetaUpdateWithWhereUniqueWithoutAnnotationInput = {
  where: AnnotationMetaWhereUniqueInput
  data: AnnotationMetaUpdateWithoutAnnotationDataInput
}

export type AnnotationMetaScalarWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<AnnotationMetaScalarWhereInput> | null
  OR?: Enumerable<AnnotationMetaScalarWhereInput> | null
  NOT?: Enumerable<AnnotationMetaScalarWhereInput> | null
}

export type AnnotationMetaUpdateManyDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type AnnotationMetaUpdateManyWithWhereNestedInput = {
  where: AnnotationMetaScalarWhereInput
  data: AnnotationMetaUpdateManyDataInput
}

export type AnnotationMetaUpsertWithWhereUniqueWithoutAnnotationInput = {
  where: AnnotationMetaWhereUniqueInput
  update: AnnotationMetaUpdateWithoutAnnotationDataInput
  create: AnnotationMetaCreateWithoutAnnotationInput
}

export type AnnotationMetaUpdateManyWithoutAnnotationInput = {
  create?: Enumerable<AnnotationMetaCreateWithoutAnnotationInput> | null
  connect?: Enumerable<AnnotationMetaWhereUniqueInput> | null
  set?: Enumerable<AnnotationMetaWhereUniqueInput> | null
  disconnect?: Enumerable<AnnotationMetaWhereUniqueInput> | null
  delete?: Enumerable<AnnotationMetaWhereUniqueInput> | null
  update?: Enumerable<AnnotationMetaUpdateWithWhereUniqueWithoutAnnotationInput> | null
  updateMany?: Enumerable<AnnotationMetaUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<AnnotationMetaScalarWhereInput> | null
  upsert?: Enumerable<AnnotationMetaUpsertWithWhereUniqueWithoutAnnotationInput> | null
}

export type ReviewMetaUpdateWithoutReviewDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type ReviewMetaUpdateWithWhereUniqueWithoutReviewInput = {
  where: ReviewMetaWhereUniqueInput
  data: ReviewMetaUpdateWithoutReviewDataInput
}

export type ReviewMetaScalarWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<ReviewMetaScalarWhereInput> | null
  OR?: Enumerable<ReviewMetaScalarWhereInput> | null
  NOT?: Enumerable<ReviewMetaScalarWhereInput> | null
}

export type ReviewMetaUpdateManyDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type ReviewMetaUpdateManyWithWhereNestedInput = {
  where: ReviewMetaScalarWhereInput
  data: ReviewMetaUpdateManyDataInput
}

export type ReviewMetaUpsertWithWhereUniqueWithoutReviewInput = {
  where: ReviewMetaWhereUniqueInput
  update: ReviewMetaUpdateWithoutReviewDataInput
  create: ReviewMetaCreateWithoutReviewInput
}

export type ReviewMetaUpdateManyWithoutReviewInput = {
  create?: Enumerable<ReviewMetaCreateWithoutReviewInput> | null
  connect?: Enumerable<ReviewMetaWhereUniqueInput> | null
  set?: Enumerable<ReviewMetaWhereUniqueInput> | null
  disconnect?: Enumerable<ReviewMetaWhereUniqueInput> | null
  delete?: Enumerable<ReviewMetaWhereUniqueInput> | null
  update?: Enumerable<ReviewMetaUpdateWithWhereUniqueWithoutReviewInput> | null
  updateMany?: Enumerable<ReviewMetaUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<ReviewMetaScalarWhereInput> | null
  upsert?: Enumerable<ReviewMetaUpsertWithWhereUniqueWithoutReviewInput> | null
}

export type QuestionMetaUpdateWithoutQuestionDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type QuestionMetaUpdateWithWhereUniqueWithoutQuestionInput = {
  where: QuestionMetaWhereUniqueInput
  data: QuestionMetaUpdateWithoutQuestionDataInput
}

export type QuestionMetaScalarWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<QuestionMetaScalarWhereInput> | null
  OR?: Enumerable<QuestionMetaScalarWhereInput> | null
  NOT?: Enumerable<QuestionMetaScalarWhereInput> | null
}

export type QuestionMetaUpdateManyDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type QuestionMetaUpdateManyWithWhereNestedInput = {
  where: QuestionMetaScalarWhereInput
  data: QuestionMetaUpdateManyDataInput
}

export type QuestionMetaUpsertWithWhereUniqueWithoutQuestionInput = {
  where: QuestionMetaWhereUniqueInput
  update: QuestionMetaUpdateWithoutQuestionDataInput
  create: QuestionMetaCreateWithoutQuestionInput
}

export type QuestionMetaUpdateManyWithoutQuestionInput = {
  create?: Enumerable<QuestionMetaCreateWithoutQuestionInput> | null
  connect?: Enumerable<QuestionMetaWhereUniqueInput> | null
  set?: Enumerable<QuestionMetaWhereUniqueInput> | null
  disconnect?: Enumerable<QuestionMetaWhereUniqueInput> | null
  delete?: Enumerable<QuestionMetaWhereUniqueInput> | null
  update?: Enumerable<QuestionMetaUpdateWithWhereUniqueWithoutQuestionInput> | null
  updateMany?: Enumerable<QuestionMetaUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<QuestionMetaScalarWhereInput> | null
  upsert?: Enumerable<QuestionMetaUpsertWithWhereUniqueWithoutQuestionInput> | null
}

export type NotificationMetaUpdateWithoutNotificationDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type NotificationMetaUpdateWithWhereUniqueWithoutNotificationInput = {
  where: NotificationMetaWhereUniqueInput
  data: NotificationMetaUpdateWithoutNotificationDataInput
}

export type NotificationMetaScalarWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<NotificationMetaScalarWhereInput> | null
  OR?: Enumerable<NotificationMetaScalarWhereInput> | null
  NOT?: Enumerable<NotificationMetaScalarWhereInput> | null
}

export type NotificationMetaUpdateManyDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type NotificationMetaUpdateManyWithWhereNestedInput = {
  where: NotificationMetaScalarWhereInput
  data: NotificationMetaUpdateManyDataInput
}

export type NotificationMetaUpsertWithWhereUniqueWithoutNotificationInput = {
  where: NotificationMetaWhereUniqueInput
  update: NotificationMetaUpdateWithoutNotificationDataInput
  create: NotificationMetaCreateWithoutNotificationInput
}

export type NotificationMetaUpdateManyWithoutNotificationInput = {
  create?: Enumerable<NotificationMetaCreateWithoutNotificationInput> | null
  connect?: Enumerable<NotificationMetaWhereUniqueInput> | null
  set?: Enumerable<NotificationMetaWhereUniqueInput> | null
  disconnect?: Enumerable<NotificationMetaWhereUniqueInput> | null
  delete?: Enumerable<NotificationMetaWhereUniqueInput> | null
  update?: Enumerable<NotificationMetaUpdateWithWhereUniqueWithoutNotificationInput> | null
  updateMany?: Enumerable<NotificationMetaUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<NotificationMetaScalarWhereInput> | null
  upsert?: Enumerable<NotificationMetaUpsertWithWhereUniqueWithoutNotificationInput> | null
}

export type ThreadMetaUpdateWithoutThreadDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type ThreadMetaUpdateWithWhereUniqueWithoutThreadInput = {
  where: ThreadMetaWhereUniqueInput
  data: ThreadMetaUpdateWithoutThreadDataInput
}

export type ThreadMetaScalarWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<ThreadMetaScalarWhereInput> | null
  OR?: Enumerable<ThreadMetaScalarWhereInput> | null
  NOT?: Enumerable<ThreadMetaScalarWhereInput> | null
}

export type ThreadMetaUpdateManyDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type ThreadMetaUpdateManyWithWhereNestedInput = {
  where: ThreadMetaScalarWhereInput
  data: ThreadMetaUpdateManyDataInput
}

export type ThreadMetaUpsertWithWhereUniqueWithoutThreadInput = {
  where: ThreadMetaWhereUniqueInput
  update: ThreadMetaUpdateWithoutThreadDataInput
  create: ThreadMetaCreateWithoutThreadInput
}

export type ThreadMetaUpdateManyWithoutThreadInput = {
  create?: Enumerable<ThreadMetaCreateWithoutThreadInput> | null
  connect?: Enumerable<ThreadMetaWhereUniqueInput> | null
  set?: Enumerable<ThreadMetaWhereUniqueInput> | null
  disconnect?: Enumerable<ThreadMetaWhereUniqueInput> | null
  delete?: Enumerable<ThreadMetaWhereUniqueInput> | null
  update?: Enumerable<ThreadMetaUpdateWithWhereUniqueWithoutThreadInput> | null
  updateMany?: Enumerable<ThreadMetaUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<ThreadMetaScalarWhereInput> | null
  upsert?: Enumerable<ThreadMetaUpsertWithWhereUniqueWithoutThreadInput> | null
}

export type CategoryUpdateWithoutPodsDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type CategoryUpdateWithWhereUniqueWithoutPodsInput = {
  where: CategoryWhereUniqueInput
  data: CategoryUpdateWithoutPodsDataInput
}

export type CategoryScalarWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  pods?: PodFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<CategoryScalarWhereInput> | null
  OR?: Enumerable<CategoryScalarWhereInput> | null
  NOT?: Enumerable<CategoryScalarWhereInput> | null
}

export type CategoryUpdateManyDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type CategoryUpdateManyWithWhereNestedInput = {
  where: CategoryScalarWhereInput
  data: CategoryUpdateManyDataInput
}

export type CategoryUpsertWithWhereUniqueWithoutPodsInput = {
  where: CategoryWhereUniqueInput
  update: CategoryUpdateWithoutPodsDataInput
  create: CategoryCreateWithoutPodsInput
}

export type CategoryUpdateManyWithoutPodsInput = {
  create?: Enumerable<CategoryCreateWithoutPodsInput> | null
  connect?: Enumerable<CategoryWhereUniqueInput> | null
  set?: Enumerable<CategoryWhereUniqueInput> | null
  disconnect?: Enumerable<CategoryWhereUniqueInput> | null
  delete?: Enumerable<CategoryWhereUniqueInput> | null
  update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutPodsInput> | null
  updateMany?: Enumerable<CategoryUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<CategoryScalarWhereInput> | null
  upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutPodsInput> | null
}

export type PodUpdateWithoutNotificationsDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutPodsInput | null
  members?: UserUpdateManyWithoutMemberOfInput | null
  itemMeta?: PodMetaUpdateManyWithoutPodInput | null
  posts?: PostUpdateManyWithoutPodInput | null
  categories?: CategoryUpdateManyWithoutPodsInput | null
}

export type PodUpsertWithoutNotificationsInput = {
  update: PodUpdateWithoutNotificationsDataInput
  create: PodCreateWithoutNotificationsInput
}

export type PodUpdateOneWithoutNotificationsInput = {
  create?: PodCreateWithoutNotificationsInput | null
  connect?: PodWhereUniqueInput | null
  disconnect?: boolean | null
  delete?: boolean | null
  update?: PodUpdateWithoutNotificationsDataInput | null
  upsert?: PodUpsertWithoutNotificationsInput | null
}

export type MessageMetaUpdateWithoutMessageDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type MessageMetaUpdateWithWhereUniqueWithoutMessageInput = {
  where: MessageMetaWhereUniqueInput
  data: MessageMetaUpdateWithoutMessageDataInput
}

export type MessageMetaScalarWhereInput = {
  id?: string | StringFilter | null
  metaType?: string | StringFilter | null
  metaName?: string | StringFilter | null
  metaValue?: string | StringFilter | null
  metaDeleted?: boolean | BooleanFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<MessageMetaScalarWhereInput> | null
  OR?: Enumerable<MessageMetaScalarWhereInput> | null
  NOT?: Enumerable<MessageMetaScalarWhereInput> | null
}

export type MessageMetaUpdateManyDataInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type MessageMetaUpdateManyWithWhereNestedInput = {
  where: MessageMetaScalarWhereInput
  data: MessageMetaUpdateManyDataInput
}

export type MessageMetaUpsertWithWhereUniqueWithoutMessageInput = {
  where: MessageMetaWhereUniqueInput
  update: MessageMetaUpdateWithoutMessageDataInput
  create: MessageMetaCreateWithoutMessageInput
}

export type MessageMetaUpdateManyWithoutMessageInput = {
  create?: Enumerable<MessageMetaCreateWithoutMessageInput> | null
  connect?: Enumerable<MessageMetaWhereUniqueInput> | null
  set?: Enumerable<MessageMetaWhereUniqueInput> | null
  disconnect?: Enumerable<MessageMetaWhereUniqueInput> | null
  delete?: Enumerable<MessageMetaWhereUniqueInput> | null
  update?: Enumerable<MessageMetaUpdateWithWhereUniqueWithoutMessageInput> | null
  updateMany?: Enumerable<MessageMetaUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<MessageMetaScalarWhereInput> | null
  upsert?: Enumerable<MessageMetaUpsertWithWhereUniqueWithoutMessageInput> | null
}

export type UserUpdateWithoutThreadsDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaUpdateManyWithoutUserInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  pods?: PodUpdateManyWithoutUserInput | null
  memberOf?: PodUpdateManyWithoutMembersInput | null
  favorites?: FavoriteUpdateManyWithoutUserInput | null
  reviews?: ReviewUpdateManyWithoutUserInput | null
  annotations?: AnnotationUpdateManyWithoutUserInput | null
  questions?: QuestionUpdateManyWithoutUserInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  sentNotifications?: NotificationUpdateOneWithoutSenderInput | null
  recievedNotifications?: NotificationUpdateOneWithoutReceiverInput | null
  messages?: MessageUpdateManyWithoutUserInput | null
}

export type UserUpdateWithWhereUniqueWithoutThreadsInput = {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutThreadsDataInput
}

export type UserScalarWhereInput = {
  id?: string | StringFilter | null
  userType?: number | IntFilter | null
  userEmail?: string | StringFilter | null
  userPassword?: string | StringFilter | null
  publicHash?: string | StringFilter | null
  privateHash?: string | StringFilter | null
  confirmHash?: string | StringFilter | null
  forgotHash?: string | StringFilter | null
  userConfirmed?: number | IntFilter | null
  userDeleted?: boolean | BooleanFilter | null
  userMeta?: UserMetaFilter | null
  posts?: PostFilter | null
  pods?: PodFilter | null
  memberOf?: PodFilter | null
  favorites?: FavoriteFilter | null
  reviews?: ReviewFilter | null
  annotations?: AnnotationFilter | null
  questions?: QuestionFilter | null
  threads?: ThreadFilter | null
  notifications?: NotificationFilter | null
  following?: UserFilter | null
  followers?: UserFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  messages?: MessageFilter | null
  AND?: Enumerable<UserScalarWhereInput> | null
  OR?: Enumerable<UserScalarWhereInput> | null
  NOT?: Enumerable<UserScalarWhereInput> | null
}

export type UserUpdateManyDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type UserUpdateManyWithWhereNestedInput = {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export type UserUpsertWithWhereUniqueWithoutThreadsInput = {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutThreadsDataInput
  create: UserCreateWithoutThreadsInput
}

export type UserUpdateManyWithoutThreadsInput = {
  create?: Enumerable<UserCreateWithoutThreadsInput> | null
  connect?: Enumerable<UserWhereUniqueInput> | null
  set?: Enumerable<UserWhereUniqueInput> | null
  disconnect?: Enumerable<UserWhereUniqueInput> | null
  delete?: Enumerable<UserWhereUniqueInput> | null
  update?: Enumerable<UserUpdateWithWhereUniqueWithoutThreadsInput> | null
  updateMany?: Enumerable<UserUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<UserScalarWhereInput> | null
  upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutThreadsInput> | null
}

export type ThreadUpdateWithoutMessagesDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: ThreadMetaUpdateManyWithoutThreadInput | null
  participants?: UserUpdateManyWithoutThreadsInput | null
}

export type ThreadUpsertWithoutMessagesInput = {
  update: ThreadUpdateWithoutMessagesDataInput
  create: ThreadCreateWithoutMessagesInput
}

export type ThreadUpdateOneRequiredWithoutMessagesInput = {
  create?: ThreadCreateWithoutMessagesInput | null
  connect?: ThreadWhereUniqueInput | null
  update?: ThreadUpdateWithoutMessagesDataInput | null
  upsert?: ThreadUpsertWithoutMessagesInput | null
}

export type MessageUpdateWithoutUserDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: MessageMetaUpdateManyWithoutMessageInput | null
  thread?: ThreadUpdateOneRequiredWithoutMessagesInput | null
}

export type MessageUpdateWithWhereUniqueWithoutUserInput = {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutUserDataInput
}

export type MessageScalarWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: MessageMetaFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<MessageScalarWhereInput> | null
  OR?: Enumerable<MessageScalarWhereInput> | null
  NOT?: Enumerable<MessageScalarWhereInput> | null
}

export type MessageUpdateManyDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type MessageUpdateManyWithWhereNestedInput = {
  where: MessageScalarWhereInput
  data: MessageUpdateManyDataInput
}

export type MessageUpsertWithWhereUniqueWithoutUserInput = {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutUserDataInput
  create: MessageCreateWithoutUserInput
}

export type MessageUpdateManyWithoutUserInput = {
  create?: Enumerable<MessageCreateWithoutUserInput> | null
  connect?: Enumerable<MessageWhereUniqueInput> | null
  set?: Enumerable<MessageWhereUniqueInput> | null
  disconnect?: Enumerable<MessageWhereUniqueInput> | null
  delete?: Enumerable<MessageWhereUniqueInput> | null
  update?: Enumerable<MessageUpdateWithWhereUniqueWithoutUserInput> | null
  updateMany?: Enumerable<MessageUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<MessageScalarWhereInput> | null
  upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutUserInput> | null
}

export type UserUpdateWithoutNotificationsDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaUpdateManyWithoutUserInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  pods?: PodUpdateManyWithoutUserInput | null
  memberOf?: PodUpdateManyWithoutMembersInput | null
  favorites?: FavoriteUpdateManyWithoutUserInput | null
  reviews?: ReviewUpdateManyWithoutUserInput | null
  annotations?: AnnotationUpdateManyWithoutUserInput | null
  questions?: QuestionUpdateManyWithoutUserInput | null
  threads?: ThreadUpdateManyWithoutParticipantsInput | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  sentNotifications?: NotificationUpdateOneWithoutSenderInput | null
  recievedNotifications?: NotificationUpdateOneWithoutReceiverInput | null
  messages?: MessageUpdateManyWithoutUserInput | null
}

export type UserUpsertWithoutNotificationsInput = {
  update: UserUpdateWithoutNotificationsDataInput
  create: UserCreateWithoutNotificationsInput
}

export type UserUpdateOneWithoutNotificationsInput = {
  create?: UserCreateWithoutNotificationsInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: boolean | null
  delete?: boolean | null
  update?: UserUpdateWithoutNotificationsDataInput | null
  upsert?: UserUpsertWithoutNotificationsInput | null
}

export type NotificationUpdateWithoutReceiverDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: NotificationMetaUpdateManyWithoutNotificationInput | null
  sender?: UserUpdateOneRequiredWithoutSentNotificationsInput | null
  pod?: PodUpdateOneWithoutNotificationsInput | null
  post?: PostUpdateOneWithoutNotificationsInput | null
  user?: UserUpdateOneWithoutNotificationsInput | null
}

export type NotificationUpsertWithoutReceiverInput = {
  update: NotificationUpdateWithoutReceiverDataInput
  create: NotificationCreateWithoutReceiverInput
}

export type NotificationUpdateOneWithoutReceiverInput = {
  create?: NotificationCreateWithoutReceiverInput | null
  connect?: NotificationWhereUniqueInput | null
  disconnect?: boolean | null
  delete?: boolean | null
  update?: NotificationUpdateWithoutReceiverDataInput | null
  upsert?: NotificationUpsertWithoutReceiverInput | null
}

export type UserUpdateWithoutFollowingDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaUpdateManyWithoutUserInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  pods?: PodUpdateManyWithoutUserInput | null
  memberOf?: PodUpdateManyWithoutMembersInput | null
  favorites?: FavoriteUpdateManyWithoutUserInput | null
  reviews?: ReviewUpdateManyWithoutUserInput | null
  annotations?: AnnotationUpdateManyWithoutUserInput | null
  questions?: QuestionUpdateManyWithoutUserInput | null
  threads?: ThreadUpdateManyWithoutParticipantsInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  sentNotifications?: NotificationUpdateOneWithoutSenderInput | null
  recievedNotifications?: NotificationUpdateOneWithoutReceiverInput | null
  messages?: MessageUpdateManyWithoutUserInput | null
}

export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutFollowingDataInput
}

export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutFollowingDataInput
  create: UserCreateWithoutFollowingInput
}

export type UserUpdateManyWithoutFollowingInput = {
  create?: Enumerable<UserCreateWithoutFollowingInput> | null
  connect?: Enumerable<UserWhereUniqueInput> | null
  set?: Enumerable<UserWhereUniqueInput> | null
  disconnect?: Enumerable<UserWhereUniqueInput> | null
  delete?: Enumerable<UserWhereUniqueInput> | null
  update?: Enumerable<UserUpdateWithWhereUniqueWithoutFollowingInput> | null
  updateMany?: Enumerable<UserUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<UserScalarWhereInput> | null
  upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutFollowingInput> | null
}

export type UserUpdateWithoutQuestionsDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaUpdateManyWithoutUserInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  pods?: PodUpdateManyWithoutUserInput | null
  memberOf?: PodUpdateManyWithoutMembersInput | null
  favorites?: FavoriteUpdateManyWithoutUserInput | null
  reviews?: ReviewUpdateManyWithoutUserInput | null
  annotations?: AnnotationUpdateManyWithoutUserInput | null
  threads?: ThreadUpdateManyWithoutParticipantsInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  sentNotifications?: NotificationUpdateOneWithoutSenderInput | null
  recievedNotifications?: NotificationUpdateOneWithoutReceiverInput | null
  messages?: MessageUpdateManyWithoutUserInput | null
}

export type UserUpsertWithoutQuestionsInput = {
  update: UserUpdateWithoutQuestionsDataInput
  create: UserCreateWithoutQuestionsInput
}

export type UserUpdateOneRequiredWithoutQuestionsInput = {
  create?: UserCreateWithoutQuestionsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutQuestionsDataInput | null
  upsert?: UserUpsertWithoutQuestionsInput | null
}

export type QuestionUpdateWithoutPostDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutQuestionsInput | null
  itemMeta?: QuestionMetaUpdateManyWithoutQuestionInput | null
}

export type QuestionUpdateWithWhereUniqueWithoutPostInput = {
  where: QuestionWhereUniqueInput
  data: QuestionUpdateWithoutPostDataInput
}

export type QuestionScalarWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemUrlSegment?: string | StringFilter | null
  itemMimeType?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: QuestionMetaFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<QuestionScalarWhereInput> | null
  OR?: Enumerable<QuestionScalarWhereInput> | null
  NOT?: Enumerable<QuestionScalarWhereInput> | null
}

export type QuestionUpdateManyDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type QuestionUpdateManyWithWhereNestedInput = {
  where: QuestionScalarWhereInput
  data: QuestionUpdateManyDataInput
}

export type QuestionUpsertWithWhereUniqueWithoutPostInput = {
  where: QuestionWhereUniqueInput
  update: QuestionUpdateWithoutPostDataInput
  create: QuestionCreateWithoutPostInput
}

export type QuestionUpdateManyWithoutPostInput = {
  create?: Enumerable<QuestionCreateWithoutPostInput> | null
  connect?: Enumerable<QuestionWhereUniqueInput> | null
  set?: Enumerable<QuestionWhereUniqueInput> | null
  disconnect?: Enumerable<QuestionWhereUniqueInput> | null
  delete?: Enumerable<QuestionWhereUniqueInput> | null
  update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutPostInput> | null
  updateMany?: Enumerable<QuestionUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<QuestionScalarWhereInput> | null
  upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutPostInput> | null
}

export type PostUpdateWithoutNotificationsDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutPostsInput | null
  pod?: PodUpdateOneRequiredWithoutPostsInput | null
  itemMeta?: PostMetaUpdateManyWithoutPostInput | null
  tags?: TagUpdateManyWithoutPostsInput | null
  favorites?: FavoriteUpdateManyWithoutPostInput | null
  reviews?: ReviewUpdateManyWithoutPostInput | null
  annotations?: AnnotationUpdateManyWithoutPostInput | null
  questions?: QuestionUpdateManyWithoutPostInput | null
}

export type PostUpsertWithoutNotificationsInput = {
  update: PostUpdateWithoutNotificationsDataInput
  create: PostCreateWithoutNotificationsInput
}

export type PostUpdateOneWithoutNotificationsInput = {
  create?: PostCreateWithoutNotificationsInput | null
  connect?: PostWhereUniqueInput | null
  disconnect?: boolean | null
  delete?: boolean | null
  update?: PostUpdateWithoutNotificationsDataInput | null
  upsert?: PostUpsertWithoutNotificationsInput | null
}

export type NotificationUpdateWithoutSenderDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: NotificationMetaUpdateManyWithoutNotificationInput | null
  receiver?: UserUpdateOneRequiredWithoutRecievedNotificationsInput | null
  pod?: PodUpdateOneWithoutNotificationsInput | null
  post?: PostUpdateOneWithoutNotificationsInput | null
  user?: UserUpdateOneWithoutNotificationsInput | null
}

export type NotificationUpsertWithoutSenderInput = {
  update: NotificationUpdateWithoutSenderDataInput
  create: NotificationCreateWithoutSenderInput
}

export type NotificationUpdateOneWithoutSenderInput = {
  create?: NotificationCreateWithoutSenderInput | null
  connect?: NotificationWhereUniqueInput | null
  disconnect?: boolean | null
  delete?: boolean | null
  update?: NotificationUpdateWithoutSenderDataInput | null
  upsert?: NotificationUpsertWithoutSenderInput | null
}

export type UserUpdateWithoutFollowersDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaUpdateManyWithoutUserInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  pods?: PodUpdateManyWithoutUserInput | null
  memberOf?: PodUpdateManyWithoutMembersInput | null
  favorites?: FavoriteUpdateManyWithoutUserInput | null
  reviews?: ReviewUpdateManyWithoutUserInput | null
  annotations?: AnnotationUpdateManyWithoutUserInput | null
  questions?: QuestionUpdateManyWithoutUserInput | null
  threads?: ThreadUpdateManyWithoutParticipantsInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  following?: UserUpdateManyWithoutFollowersInput | null
  sentNotifications?: NotificationUpdateOneWithoutSenderInput | null
  recievedNotifications?: NotificationUpdateOneWithoutReceiverInput | null
  messages?: MessageUpdateManyWithoutUserInput | null
}

export type UserUpdateWithWhereUniqueWithoutFollowersInput = {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutFollowersDataInput
}

export type UserUpsertWithWhereUniqueWithoutFollowersInput = {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutFollowersDataInput
  create: UserCreateWithoutFollowersInput
}

export type UserUpdateManyWithoutFollowersInput = {
  create?: Enumerable<UserCreateWithoutFollowersInput> | null
  connect?: Enumerable<UserWhereUniqueInput> | null
  set?: Enumerable<UserWhereUniqueInput> | null
  disconnect?: Enumerable<UserWhereUniqueInput> | null
  delete?: Enumerable<UserWhereUniqueInput> | null
  update?: Enumerable<UserUpdateWithWhereUniqueWithoutFollowersInput> | null
  updateMany?: Enumerable<UserUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<UserScalarWhereInput> | null
  upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutFollowersInput> | null
}

export type UserUpdateWithoutRecievedNotificationsDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaUpdateManyWithoutUserInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  pods?: PodUpdateManyWithoutUserInput | null
  memberOf?: PodUpdateManyWithoutMembersInput | null
  favorites?: FavoriteUpdateManyWithoutUserInput | null
  reviews?: ReviewUpdateManyWithoutUserInput | null
  annotations?: AnnotationUpdateManyWithoutUserInput | null
  questions?: QuestionUpdateManyWithoutUserInput | null
  threads?: ThreadUpdateManyWithoutParticipantsInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  sentNotifications?: NotificationUpdateOneWithoutSenderInput | null
  messages?: MessageUpdateManyWithoutUserInput | null
}

export type UserUpsertWithoutRecievedNotificationsInput = {
  update: UserUpdateWithoutRecievedNotificationsDataInput
  create: UserCreateWithoutRecievedNotificationsInput
}

export type UserUpdateOneRequiredWithoutRecievedNotificationsInput = {
  create?: UserCreateWithoutRecievedNotificationsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutRecievedNotificationsDataInput | null
  upsert?: UserUpsertWithoutRecievedNotificationsInput | null
}

export type NotificationUpdateWithoutUserDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: NotificationMetaUpdateManyWithoutNotificationInput | null
  sender?: UserUpdateOneRequiredWithoutSentNotificationsInput | null
  receiver?: UserUpdateOneRequiredWithoutRecievedNotificationsInput | null
  pod?: PodUpdateOneWithoutNotificationsInput | null
  post?: PostUpdateOneWithoutNotificationsInput | null
}

export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutUserDataInput
}

export type NotificationScalarWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: NotificationMetaFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<NotificationScalarWhereInput> | null
  OR?: Enumerable<NotificationScalarWhereInput> | null
  NOT?: Enumerable<NotificationScalarWhereInput> | null
}

export type NotificationUpdateManyDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type NotificationUpdateManyWithWhereNestedInput = {
  where: NotificationScalarWhereInput
  data: NotificationUpdateManyDataInput
}

export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutUserDataInput
  create: NotificationCreateWithoutUserInput
}

export type NotificationUpdateManyWithoutUserInput = {
  create?: Enumerable<NotificationCreateWithoutUserInput> | null
  connect?: Enumerable<NotificationWhereUniqueInput> | null
  set?: Enumerable<NotificationWhereUniqueInput> | null
  disconnect?: Enumerable<NotificationWhereUniqueInput> | null
  delete?: Enumerable<NotificationWhereUniqueInput> | null
  update?: Enumerable<NotificationUpdateWithWhereUniqueWithoutUserInput> | null
  updateMany?: Enumerable<NotificationUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<NotificationScalarWhereInput> | null
  upsert?: Enumerable<NotificationUpsertWithWhereUniqueWithoutUserInput> | null
}

export type UserUpdateWithoutMessagesDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaUpdateManyWithoutUserInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  pods?: PodUpdateManyWithoutUserInput | null
  memberOf?: PodUpdateManyWithoutMembersInput | null
  favorites?: FavoriteUpdateManyWithoutUserInput | null
  reviews?: ReviewUpdateManyWithoutUserInput | null
  annotations?: AnnotationUpdateManyWithoutUserInput | null
  questions?: QuestionUpdateManyWithoutUserInput | null
  threads?: ThreadUpdateManyWithoutParticipantsInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  sentNotifications?: NotificationUpdateOneWithoutSenderInput | null
  recievedNotifications?: NotificationUpdateOneWithoutReceiverInput | null
}

export type UserUpsertWithoutMessagesInput = {
  update: UserUpdateWithoutMessagesDataInput
  create: UserCreateWithoutMessagesInput
}

export type UserUpdateOneRequiredWithoutMessagesInput = {
  create?: UserCreateWithoutMessagesInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutMessagesDataInput | null
  upsert?: UserUpsertWithoutMessagesInput | null
}

export type MessageUpdateWithoutThreadDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutMessagesInput | null
  itemMeta?: MessageMetaUpdateManyWithoutMessageInput | null
}

export type MessageUpdateWithWhereUniqueWithoutThreadInput = {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutThreadDataInput
}

export type MessageUpsertWithWhereUniqueWithoutThreadInput = {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutThreadDataInput
  create: MessageCreateWithoutThreadInput
}

export type MessageUpdateManyWithoutThreadInput = {
  create?: Enumerable<MessageCreateWithoutThreadInput> | null
  connect?: Enumerable<MessageWhereUniqueInput> | null
  set?: Enumerable<MessageWhereUniqueInput> | null
  disconnect?: Enumerable<MessageWhereUniqueInput> | null
  delete?: Enumerable<MessageWhereUniqueInput> | null
  update?: Enumerable<MessageUpdateWithWhereUniqueWithoutThreadInput> | null
  updateMany?: Enumerable<MessageUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<MessageScalarWhereInput> | null
  upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutThreadInput> | null
}

export type ThreadUpdateWithoutParticipantsDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: ThreadMetaUpdateManyWithoutThreadInput | null
  messages?: MessageUpdateManyWithoutThreadInput | null
}

export type ThreadUpdateWithWhereUniqueWithoutParticipantsInput = {
  where: ThreadWhereUniqueInput
  data: ThreadUpdateWithoutParticipantsDataInput
}

export type ThreadScalarWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: ThreadMetaFilter | null
  messages?: MessageFilter | null
  participants?: UserFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<ThreadScalarWhereInput> | null
  OR?: Enumerable<ThreadScalarWhereInput> | null
  NOT?: Enumerable<ThreadScalarWhereInput> | null
}

export type ThreadUpdateManyDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type ThreadUpdateManyWithWhereNestedInput = {
  where: ThreadScalarWhereInput
  data: ThreadUpdateManyDataInput
}

export type ThreadUpsertWithWhereUniqueWithoutParticipantsInput = {
  where: ThreadWhereUniqueInput
  update: ThreadUpdateWithoutParticipantsDataInput
  create: ThreadCreateWithoutParticipantsInput
}

export type ThreadUpdateManyWithoutParticipantsInput = {
  create?: Enumerable<ThreadCreateWithoutParticipantsInput> | null
  connect?: Enumerable<ThreadWhereUniqueInput> | null
  set?: Enumerable<ThreadWhereUniqueInput> | null
  disconnect?: Enumerable<ThreadWhereUniqueInput> | null
  delete?: Enumerable<ThreadWhereUniqueInput> | null
  update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutParticipantsInput> | null
  updateMany?: Enumerable<ThreadUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<ThreadScalarWhereInput> | null
  upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutParticipantsInput> | null
}

export type UserUpdateWithoutSentNotificationsDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaUpdateManyWithoutUserInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  pods?: PodUpdateManyWithoutUserInput | null
  memberOf?: PodUpdateManyWithoutMembersInput | null
  favorites?: FavoriteUpdateManyWithoutUserInput | null
  reviews?: ReviewUpdateManyWithoutUserInput | null
  annotations?: AnnotationUpdateManyWithoutUserInput | null
  questions?: QuestionUpdateManyWithoutUserInput | null
  threads?: ThreadUpdateManyWithoutParticipantsInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  recievedNotifications?: NotificationUpdateOneWithoutReceiverInput | null
  messages?: MessageUpdateManyWithoutUserInput | null
}

export type UserUpsertWithoutSentNotificationsInput = {
  update: UserUpdateWithoutSentNotificationsDataInput
  create: UserCreateWithoutSentNotificationsInput
}

export type UserUpdateOneRequiredWithoutSentNotificationsInput = {
  create?: UserCreateWithoutSentNotificationsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutSentNotificationsDataInput | null
  upsert?: UserUpsertWithoutSentNotificationsInput | null
}

export type NotificationUpdateWithoutPostDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: NotificationMetaUpdateManyWithoutNotificationInput | null
  sender?: UserUpdateOneRequiredWithoutSentNotificationsInput | null
  receiver?: UserUpdateOneRequiredWithoutRecievedNotificationsInput | null
  pod?: PodUpdateOneWithoutNotificationsInput | null
  user?: UserUpdateOneWithoutNotificationsInput | null
}

export type NotificationUpdateWithWhereUniqueWithoutPostInput = {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutPostDataInput
}

export type NotificationUpsertWithWhereUniqueWithoutPostInput = {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutPostDataInput
  create: NotificationCreateWithoutPostInput
}

export type NotificationUpdateManyWithoutPostInput = {
  create?: Enumerable<NotificationCreateWithoutPostInput> | null
  connect?: Enumerable<NotificationWhereUniqueInput> | null
  set?: Enumerable<NotificationWhereUniqueInput> | null
  disconnect?: Enumerable<NotificationWhereUniqueInput> | null
  delete?: Enumerable<NotificationWhereUniqueInput> | null
  update?: Enumerable<NotificationUpdateWithWhereUniqueWithoutPostInput> | null
  updateMany?: Enumerable<NotificationUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<NotificationScalarWhereInput> | null
  upsert?: Enumerable<NotificationUpsertWithWhereUniqueWithoutPostInput> | null
}

export type PostUpdateWithoutQuestionsDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutPostsInput | null
  pod?: PodUpdateOneRequiredWithoutPostsInput | null
  itemMeta?: PostMetaUpdateManyWithoutPostInput | null
  tags?: TagUpdateManyWithoutPostsInput | null
  favorites?: FavoriteUpdateManyWithoutPostInput | null
  reviews?: ReviewUpdateManyWithoutPostInput | null
  annotations?: AnnotationUpdateManyWithoutPostInput | null
  notifications?: NotificationUpdateManyWithoutPostInput | null
}

export type PostUpsertWithoutQuestionsInput = {
  update: PostUpdateWithoutQuestionsDataInput
  create: PostCreateWithoutQuestionsInput
}

export type PostUpdateOneRequiredWithoutQuestionsInput = {
  create?: PostCreateWithoutQuestionsInput | null
  connect?: PostWhereUniqueInput | null
  update?: PostUpdateWithoutQuestionsDataInput | null
  upsert?: PostUpsertWithoutQuestionsInput | null
}

export type QuestionUpdateWithoutUserDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: QuestionMetaUpdateManyWithoutQuestionInput | null
  post?: PostUpdateOneRequiredWithoutQuestionsInput | null
}

export type QuestionUpdateWithWhereUniqueWithoutUserInput = {
  where: QuestionWhereUniqueInput
  data: QuestionUpdateWithoutUserDataInput
}

export type QuestionUpsertWithWhereUniqueWithoutUserInput = {
  where: QuestionWhereUniqueInput
  update: QuestionUpdateWithoutUserDataInput
  create: QuestionCreateWithoutUserInput
}

export type QuestionUpdateManyWithoutUserInput = {
  create?: Enumerable<QuestionCreateWithoutUserInput> | null
  connect?: Enumerable<QuestionWhereUniqueInput> | null
  set?: Enumerable<QuestionWhereUniqueInput> | null
  disconnect?: Enumerable<QuestionWhereUniqueInput> | null
  delete?: Enumerable<QuestionWhereUniqueInput> | null
  update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutUserInput> | null
  updateMany?: Enumerable<QuestionUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<QuestionScalarWhereInput> | null
  upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutUserInput> | null
}

export type UserUpdateWithoutAnnotationsDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaUpdateManyWithoutUserInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  pods?: PodUpdateManyWithoutUserInput | null
  memberOf?: PodUpdateManyWithoutMembersInput | null
  favorites?: FavoriteUpdateManyWithoutUserInput | null
  reviews?: ReviewUpdateManyWithoutUserInput | null
  questions?: QuestionUpdateManyWithoutUserInput | null
  threads?: ThreadUpdateManyWithoutParticipantsInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  sentNotifications?: NotificationUpdateOneWithoutSenderInput | null
  recievedNotifications?: NotificationUpdateOneWithoutReceiverInput | null
  messages?: MessageUpdateManyWithoutUserInput | null
}

export type UserUpsertWithoutAnnotationsInput = {
  update: UserUpdateWithoutAnnotationsDataInput
  create: UserCreateWithoutAnnotationsInput
}

export type UserUpdateOneRequiredWithoutAnnotationsInput = {
  create?: UserCreateWithoutAnnotationsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutAnnotationsDataInput | null
  upsert?: UserUpsertWithoutAnnotationsInput | null
}

export type AnnotationUpdateWithoutPostDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutAnnotationsInput | null
  itemMeta?: AnnotationMetaUpdateManyWithoutAnnotationInput | null
}

export type AnnotationUpdateWithWhereUniqueWithoutPostInput = {
  where: AnnotationWhereUniqueInput
  data: AnnotationUpdateWithoutPostDataInput
}

export type AnnotationScalarWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemUrlSegment?: string | StringFilter | null
  itemMimeType?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: AnnotationMetaFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<AnnotationScalarWhereInput> | null
  OR?: Enumerable<AnnotationScalarWhereInput> | null
  NOT?: Enumerable<AnnotationScalarWhereInput> | null
}

export type AnnotationUpdateManyDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type AnnotationUpdateManyWithWhereNestedInput = {
  where: AnnotationScalarWhereInput
  data: AnnotationUpdateManyDataInput
}

export type AnnotationUpsertWithWhereUniqueWithoutPostInput = {
  where: AnnotationWhereUniqueInput
  update: AnnotationUpdateWithoutPostDataInput
  create: AnnotationCreateWithoutPostInput
}

export type AnnotationUpdateManyWithoutPostInput = {
  create?: Enumerable<AnnotationCreateWithoutPostInput> | null
  connect?: Enumerable<AnnotationWhereUniqueInput> | null
  set?: Enumerable<AnnotationWhereUniqueInput> | null
  disconnect?: Enumerable<AnnotationWhereUniqueInput> | null
  delete?: Enumerable<AnnotationWhereUniqueInput> | null
  update?: Enumerable<AnnotationUpdateWithWhereUniqueWithoutPostInput> | null
  updateMany?: Enumerable<AnnotationUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<AnnotationScalarWhereInput> | null
  upsert?: Enumerable<AnnotationUpsertWithWhereUniqueWithoutPostInput> | null
}

export type PostUpdateWithoutReviewsDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutPostsInput | null
  pod?: PodUpdateOneRequiredWithoutPostsInput | null
  itemMeta?: PostMetaUpdateManyWithoutPostInput | null
  tags?: TagUpdateManyWithoutPostsInput | null
  favorites?: FavoriteUpdateManyWithoutPostInput | null
  annotations?: AnnotationUpdateManyWithoutPostInput | null
  questions?: QuestionUpdateManyWithoutPostInput | null
  notifications?: NotificationUpdateManyWithoutPostInput | null
}

export type PostUpsertWithoutReviewsInput = {
  update: PostUpdateWithoutReviewsDataInput
  create: PostCreateWithoutReviewsInput
}

export type PostUpdateOneRequiredWithoutReviewsInput = {
  create?: PostCreateWithoutReviewsInput | null
  connect?: PostWhereUniqueInput | null
  update?: PostUpdateWithoutReviewsDataInput | null
  upsert?: PostUpsertWithoutReviewsInput | null
}

export type ReviewUpdateWithoutUserDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: ReviewMetaUpdateManyWithoutReviewInput | null
  post?: PostUpdateOneRequiredWithoutReviewsInput | null
}

export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
  where: ReviewWhereUniqueInput
  data: ReviewUpdateWithoutUserDataInput
}

export type ReviewScalarWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemUrlSegment?: string | StringFilter | null
  itemMimeType?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: ReviewMetaFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<ReviewScalarWhereInput> | null
  OR?: Enumerable<ReviewScalarWhereInput> | null
  NOT?: Enumerable<ReviewScalarWhereInput> | null
}

export type ReviewUpdateManyDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type ReviewUpdateManyWithWhereNestedInput = {
  where: ReviewScalarWhereInput
  data: ReviewUpdateManyDataInput
}

export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
  where: ReviewWhereUniqueInput
  update: ReviewUpdateWithoutUserDataInput
  create: ReviewCreateWithoutUserInput
}

export type ReviewUpdateManyWithoutUserInput = {
  create?: Enumerable<ReviewCreateWithoutUserInput> | null
  connect?: Enumerable<ReviewWhereUniqueInput> | null
  set?: Enumerable<ReviewWhereUniqueInput> | null
  disconnect?: Enumerable<ReviewWhereUniqueInput> | null
  delete?: Enumerable<ReviewWhereUniqueInput> | null
  update?: Enumerable<ReviewUpdateWithWhereUniqueWithoutUserInput> | null
  updateMany?: Enumerable<ReviewUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<ReviewScalarWhereInput> | null
  upsert?: Enumerable<ReviewUpsertWithWhereUniqueWithoutUserInput> | null
}

export type UserUpdateWithoutFavoritesDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaUpdateManyWithoutUserInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  pods?: PodUpdateManyWithoutUserInput | null
  memberOf?: PodUpdateManyWithoutMembersInput | null
  reviews?: ReviewUpdateManyWithoutUserInput | null
  annotations?: AnnotationUpdateManyWithoutUserInput | null
  questions?: QuestionUpdateManyWithoutUserInput | null
  threads?: ThreadUpdateManyWithoutParticipantsInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  sentNotifications?: NotificationUpdateOneWithoutSenderInput | null
  recievedNotifications?: NotificationUpdateOneWithoutReceiverInput | null
  messages?: MessageUpdateManyWithoutUserInput | null
}

export type UserUpsertWithoutFavoritesInput = {
  update: UserUpdateWithoutFavoritesDataInput
  create: UserCreateWithoutFavoritesInput
}

export type UserUpdateOneRequiredWithoutFavoritesInput = {
  create?: UserCreateWithoutFavoritesInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutFavoritesDataInput | null
  upsert?: UserUpsertWithoutFavoritesInput | null
}

export type FavoriteUpdateWithoutPostDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutFavoritesInput | null
}

export type FavoriteUpdateWithWhereUniqueWithoutPostInput = {
  where: FavoriteWhereUniqueInput
  data: FavoriteUpdateWithoutPostDataInput
}

export type FavoriteScalarWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  AND?: Enumerable<FavoriteScalarWhereInput> | null
  OR?: Enumerable<FavoriteScalarWhereInput> | null
  NOT?: Enumerable<FavoriteScalarWhereInput> | null
}

export type FavoriteUpdateManyDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type FavoriteUpdateManyWithWhereNestedInput = {
  where: FavoriteScalarWhereInput
  data: FavoriteUpdateManyDataInput
}

export type FavoriteUpsertWithWhereUniqueWithoutPostInput = {
  where: FavoriteWhereUniqueInput
  update: FavoriteUpdateWithoutPostDataInput
  create: FavoriteCreateWithoutPostInput
}

export type FavoriteUpdateManyWithoutPostInput = {
  create?: Enumerable<FavoriteCreateWithoutPostInput> | null
  connect?: Enumerable<FavoriteWhereUniqueInput> | null
  set?: Enumerable<FavoriteWhereUniqueInput> | null
  disconnect?: Enumerable<FavoriteWhereUniqueInput> | null
  delete?: Enumerable<FavoriteWhereUniqueInput> | null
  update?: Enumerable<FavoriteUpdateWithWhereUniqueWithoutPostInput> | null
  updateMany?: Enumerable<FavoriteUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<FavoriteScalarWhereInput> | null
  upsert?: Enumerable<FavoriteUpsertWithWhereUniqueWithoutPostInput> | null
}

export type PostUpdateWithoutAnnotationsDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutPostsInput | null
  pod?: PodUpdateOneRequiredWithoutPostsInput | null
  itemMeta?: PostMetaUpdateManyWithoutPostInput | null
  tags?: TagUpdateManyWithoutPostsInput | null
  favorites?: FavoriteUpdateManyWithoutPostInput | null
  reviews?: ReviewUpdateManyWithoutPostInput | null
  questions?: QuestionUpdateManyWithoutPostInput | null
  notifications?: NotificationUpdateManyWithoutPostInput | null
}

export type PostUpsertWithoutAnnotationsInput = {
  update: PostUpdateWithoutAnnotationsDataInput
  create: PostCreateWithoutAnnotationsInput
}

export type PostUpdateOneRequiredWithoutAnnotationsInput = {
  create?: PostCreateWithoutAnnotationsInput | null
  connect?: PostWhereUniqueInput | null
  update?: PostUpdateWithoutAnnotationsDataInput | null
  upsert?: PostUpsertWithoutAnnotationsInput | null
}

export type AnnotationUpdateWithoutUserDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: AnnotationMetaUpdateManyWithoutAnnotationInput | null
  post?: PostUpdateOneRequiredWithoutAnnotationsInput | null
}

export type AnnotationUpdateWithWhereUniqueWithoutUserInput = {
  where: AnnotationWhereUniqueInput
  data: AnnotationUpdateWithoutUserDataInput
}

export type AnnotationUpsertWithWhereUniqueWithoutUserInput = {
  where: AnnotationWhereUniqueInput
  update: AnnotationUpdateWithoutUserDataInput
  create: AnnotationCreateWithoutUserInput
}

export type AnnotationUpdateManyWithoutUserInput = {
  create?: Enumerable<AnnotationCreateWithoutUserInput> | null
  connect?: Enumerable<AnnotationWhereUniqueInput> | null
  set?: Enumerable<AnnotationWhereUniqueInput> | null
  disconnect?: Enumerable<AnnotationWhereUniqueInput> | null
  delete?: Enumerable<AnnotationWhereUniqueInput> | null
  update?: Enumerable<AnnotationUpdateWithWhereUniqueWithoutUserInput> | null
  updateMany?: Enumerable<AnnotationUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<AnnotationScalarWhereInput> | null
  upsert?: Enumerable<AnnotationUpsertWithWhereUniqueWithoutUserInput> | null
}

export type UserUpdateWithoutReviewsDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaUpdateManyWithoutUserInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  pods?: PodUpdateManyWithoutUserInput | null
  memberOf?: PodUpdateManyWithoutMembersInput | null
  favorites?: FavoriteUpdateManyWithoutUserInput | null
  annotations?: AnnotationUpdateManyWithoutUserInput | null
  questions?: QuestionUpdateManyWithoutUserInput | null
  threads?: ThreadUpdateManyWithoutParticipantsInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  sentNotifications?: NotificationUpdateOneWithoutSenderInput | null
  recievedNotifications?: NotificationUpdateOneWithoutReceiverInput | null
  messages?: MessageUpdateManyWithoutUserInput | null
}

export type UserUpsertWithoutReviewsInput = {
  update: UserUpdateWithoutReviewsDataInput
  create: UserCreateWithoutReviewsInput
}

export type UserUpdateOneRequiredWithoutReviewsInput = {
  create?: UserCreateWithoutReviewsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutReviewsDataInput | null
  upsert?: UserUpsertWithoutReviewsInput | null
}

export type ReviewUpdateWithoutPostDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutReviewsInput | null
  itemMeta?: ReviewMetaUpdateManyWithoutReviewInput | null
}

export type ReviewUpdateWithWhereUniqueWithoutPostInput = {
  where: ReviewWhereUniqueInput
  data: ReviewUpdateWithoutPostDataInput
}

export type ReviewUpsertWithWhereUniqueWithoutPostInput = {
  where: ReviewWhereUniqueInput
  update: ReviewUpdateWithoutPostDataInput
  create: ReviewCreateWithoutPostInput
}

export type ReviewUpdateManyWithoutPostInput = {
  create?: Enumerable<ReviewCreateWithoutPostInput> | null
  connect?: Enumerable<ReviewWhereUniqueInput> | null
  set?: Enumerable<ReviewWhereUniqueInput> | null
  disconnect?: Enumerable<ReviewWhereUniqueInput> | null
  delete?: Enumerable<ReviewWhereUniqueInput> | null
  update?: Enumerable<ReviewUpdateWithWhereUniqueWithoutPostInput> | null
  updateMany?: Enumerable<ReviewUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<ReviewScalarWhereInput> | null
  upsert?: Enumerable<ReviewUpsertWithWhereUniqueWithoutPostInput> | null
}

export type PostUpdateWithoutFavoritesDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutPostsInput | null
  pod?: PodUpdateOneRequiredWithoutPostsInput | null
  itemMeta?: PostMetaUpdateManyWithoutPostInput | null
  tags?: TagUpdateManyWithoutPostsInput | null
  reviews?: ReviewUpdateManyWithoutPostInput | null
  annotations?: AnnotationUpdateManyWithoutPostInput | null
  questions?: QuestionUpdateManyWithoutPostInput | null
  notifications?: NotificationUpdateManyWithoutPostInput | null
}

export type PostUpsertWithoutFavoritesInput = {
  update: PostUpdateWithoutFavoritesDataInput
  create: PostCreateWithoutFavoritesInput
}

export type PostUpdateOneRequiredWithoutFavoritesInput = {
  create?: PostCreateWithoutFavoritesInput | null
  connect?: PostWhereUniqueInput | null
  update?: PostUpdateWithoutFavoritesDataInput | null
  upsert?: PostUpsertWithoutFavoritesInput | null
}

export type FavoriteUpdateWithoutUserDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  post?: PostUpdateOneRequiredWithoutFavoritesInput | null
}

export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
  where: FavoriteWhereUniqueInput
  data: FavoriteUpdateWithoutUserDataInput
}

export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
  where: FavoriteWhereUniqueInput
  update: FavoriteUpdateWithoutUserDataInput
  create: FavoriteCreateWithoutUserInput
}

export type FavoriteUpdateManyWithoutUserInput = {
  create?: Enumerable<FavoriteCreateWithoutUserInput> | null
  connect?: Enumerable<FavoriteWhereUniqueInput> | null
  set?: Enumerable<FavoriteWhereUniqueInput> | null
  disconnect?: Enumerable<FavoriteWhereUniqueInput> | null
  delete?: Enumerable<FavoriteWhereUniqueInput> | null
  update?: Enumerable<FavoriteUpdateWithWhereUniqueWithoutUserInput> | null
  updateMany?: Enumerable<FavoriteUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<FavoriteScalarWhereInput> | null
  upsert?: Enumerable<FavoriteUpsertWithWhereUniqueWithoutUserInput> | null
}

export type UserUpdateWithoutMemberOfDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaUpdateManyWithoutUserInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  pods?: PodUpdateManyWithoutUserInput | null
  favorites?: FavoriteUpdateManyWithoutUserInput | null
  reviews?: ReviewUpdateManyWithoutUserInput | null
  annotations?: AnnotationUpdateManyWithoutUserInput | null
  questions?: QuestionUpdateManyWithoutUserInput | null
  threads?: ThreadUpdateManyWithoutParticipantsInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  sentNotifications?: NotificationUpdateOneWithoutSenderInput | null
  recievedNotifications?: NotificationUpdateOneWithoutReceiverInput | null
  messages?: MessageUpdateManyWithoutUserInput | null
}

export type UserUpdateWithWhereUniqueWithoutMemberOfInput = {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutMemberOfDataInput
}

export type UserUpsertWithWhereUniqueWithoutMemberOfInput = {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutMemberOfDataInput
  create: UserCreateWithoutMemberOfInput
}

export type UserUpdateManyWithoutMemberOfInput = {
  create?: Enumerable<UserCreateWithoutMemberOfInput> | null
  connect?: Enumerable<UserWhereUniqueInput> | null
  set?: Enumerable<UserWhereUniqueInput> | null
  disconnect?: Enumerable<UserWhereUniqueInput> | null
  delete?: Enumerable<UserWhereUniqueInput> | null
  update?: Enumerable<UserUpdateWithWhereUniqueWithoutMemberOfInput> | null
  updateMany?: Enumerable<UserUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<UserScalarWhereInput> | null
  upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutMemberOfInput> | null
}

export type NotificationUpdateWithoutPodDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: NotificationMetaUpdateManyWithoutNotificationInput | null
  sender?: UserUpdateOneRequiredWithoutSentNotificationsInput | null
  receiver?: UserUpdateOneRequiredWithoutRecievedNotificationsInput | null
  post?: PostUpdateOneWithoutNotificationsInput | null
  user?: UserUpdateOneWithoutNotificationsInput | null
}

export type NotificationUpdateWithWhereUniqueWithoutPodInput = {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutPodDataInput
}

export type NotificationUpsertWithWhereUniqueWithoutPodInput = {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutPodDataInput
  create: NotificationCreateWithoutPodInput
}

export type NotificationUpdateManyWithoutPodInput = {
  create?: Enumerable<NotificationCreateWithoutPodInput> | null
  connect?: Enumerable<NotificationWhereUniqueInput> | null
  set?: Enumerable<NotificationWhereUniqueInput> | null
  disconnect?: Enumerable<NotificationWhereUniqueInput> | null
  delete?: Enumerable<NotificationWhereUniqueInput> | null
  update?: Enumerable<NotificationUpdateWithWhereUniqueWithoutPodInput> | null
  updateMany?: Enumerable<NotificationUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<NotificationScalarWhereInput> | null
  upsert?: Enumerable<NotificationUpsertWithWhereUniqueWithoutPodInput> | null
}

export type PodUpdateWithoutUserDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  members?: UserUpdateManyWithoutMemberOfInput | null
  itemMeta?: PodMetaUpdateManyWithoutPodInput | null
  posts?: PostUpdateManyWithoutPodInput | null
  categories?: CategoryUpdateManyWithoutPodsInput | null
  notifications?: NotificationUpdateManyWithoutPodInput | null
}

export type PodUpdateWithWhereUniqueWithoutUserInput = {
  where: PodWhereUniqueInput
  data: PodUpdateWithoutUserDataInput
}

export type PodScalarWhereInput = {
  id?: string | StringFilter | null
  members?: UserFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemUrlSegment?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: PodMetaFilter | null
  posts?: PostFilter | null
  categories?: CategoryFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  notifications?: NotificationFilter | null
  AND?: Enumerable<PodScalarWhereInput> | null
  OR?: Enumerable<PodScalarWhereInput> | null
  NOT?: Enumerable<PodScalarWhereInput> | null
}

export type PodUpdateManyDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type PodUpdateManyWithWhereNestedInput = {
  where: PodScalarWhereInput
  data: PodUpdateManyDataInput
}

export type PodUpsertWithWhereUniqueWithoutUserInput = {
  where: PodWhereUniqueInput
  update: PodUpdateWithoutUserDataInput
  create: PodCreateWithoutUserInput
}

export type PodUpdateManyWithoutUserInput = {
  create?: Enumerable<PodCreateWithoutUserInput> | null
  connect?: Enumerable<PodWhereUniqueInput> | null
  set?: Enumerable<PodWhereUniqueInput> | null
  disconnect?: Enumerable<PodWhereUniqueInput> | null
  delete?: Enumerable<PodWhereUniqueInput> | null
  update?: Enumerable<PodUpdateWithWhereUniqueWithoutUserInput> | null
  updateMany?: Enumerable<PodUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<PodScalarWhereInput> | null
  upsert?: Enumerable<PodUpsertWithWhereUniqueWithoutUserInput> | null
}

export type UserUpdateWithoutPostsDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaUpdateManyWithoutUserInput | null
  pods?: PodUpdateManyWithoutUserInput | null
  memberOf?: PodUpdateManyWithoutMembersInput | null
  favorites?: FavoriteUpdateManyWithoutUserInput | null
  reviews?: ReviewUpdateManyWithoutUserInput | null
  annotations?: AnnotationUpdateManyWithoutUserInput | null
  questions?: QuestionUpdateManyWithoutUserInput | null
  threads?: ThreadUpdateManyWithoutParticipantsInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  sentNotifications?: NotificationUpdateOneWithoutSenderInput | null
  recievedNotifications?: NotificationUpdateOneWithoutReceiverInput | null
  messages?: MessageUpdateManyWithoutUserInput | null
}

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export type UserUpdateOneRequiredWithoutPostsInput = {
  create?: UserCreateWithoutPostsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutPostsDataInput | null
  upsert?: UserUpsertWithoutPostsInput | null
}

export type PostUpdateWithoutPodDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutPostsInput | null
  itemMeta?: PostMetaUpdateManyWithoutPostInput | null
  tags?: TagUpdateManyWithoutPostsInput | null
  favorites?: FavoriteUpdateManyWithoutPostInput | null
  reviews?: ReviewUpdateManyWithoutPostInput | null
  annotations?: AnnotationUpdateManyWithoutPostInput | null
  questions?: QuestionUpdateManyWithoutPostInput | null
  notifications?: NotificationUpdateManyWithoutPostInput | null
}

export type PostUpdateWithWhereUniqueWithoutPodInput = {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutPodDataInput
}

export type PostScalarWhereInput = {
  id?: string | StringFilter | null
  itemType?: string | StringFilter | null
  itemStatus?: string | StringFilter | null
  itemUrlSegment?: string | StringFilter | null
  itemMimeType?: string | StringFilter | null
  itemName?: string | StringFilter | null
  itemContent?: string | StringFilter | null
  itemDeleted?: boolean | BooleanFilter | null
  itemMeta?: PostMetaFilter | null
  tags?: TagFilter | null
  favorites?: FavoriteFilter | null
  reviews?: ReviewFilter | null
  annotations?: AnnotationFilter | null
  questions?: QuestionFilter | null
  createdAt?: Date | string | DateTimeFilter | null
  updatedAt?: Date | string | DateTimeFilter | null
  notifications?: NotificationFilter | null
  AND?: Enumerable<PostScalarWhereInput> | null
  OR?: Enumerable<PostScalarWhereInput> | null
  NOT?: Enumerable<PostScalarWhereInput> | null
}

export type PostUpdateManyDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type PostUpdateManyWithWhereNestedInput = {
  where: PostScalarWhereInput
  data: PostUpdateManyDataInput
}

export type PostUpsertWithWhereUniqueWithoutPodInput = {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutPodDataInput
  create: PostCreateWithoutPodInput
}

export type PostUpdateManyWithoutPodInput = {
  create?: Enumerable<PostCreateWithoutPodInput> | null
  connect?: Enumerable<PostWhereUniqueInput> | null
  set?: Enumerable<PostWhereUniqueInput> | null
  disconnect?: Enumerable<PostWhereUniqueInput> | null
  delete?: Enumerable<PostWhereUniqueInput> | null
  update?: Enumerable<PostUpdateWithWhereUniqueWithoutPodInput> | null
  updateMany?: Enumerable<PostUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<PostScalarWhereInput> | null
  upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutPodInput> | null
}

export type PodUpdateWithoutMembersDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutPodsInput | null
  itemMeta?: PodMetaUpdateManyWithoutPodInput | null
  posts?: PostUpdateManyWithoutPodInput | null
  categories?: CategoryUpdateManyWithoutPodsInput | null
  notifications?: NotificationUpdateManyWithoutPodInput | null
}

export type PodUpdateWithWhereUniqueWithoutMembersInput = {
  where: PodWhereUniqueInput
  data: PodUpdateWithoutMembersDataInput
}

export type PodUpsertWithWhereUniqueWithoutMembersInput = {
  where: PodWhereUniqueInput
  update: PodUpdateWithoutMembersDataInput
  create: PodCreateWithoutMembersInput
}

export type PodUpdateManyWithoutMembersInput = {
  create?: Enumerable<PodCreateWithoutMembersInput> | null
  connect?: Enumerable<PodWhereUniqueInput> | null
  set?: Enumerable<PodWhereUniqueInput> | null
  disconnect?: Enumerable<PodWhereUniqueInput> | null
  delete?: Enumerable<PodWhereUniqueInput> | null
  update?: Enumerable<PodUpdateWithWhereUniqueWithoutMembersInput> | null
  updateMany?: Enumerable<PodUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<PodScalarWhereInput> | null
  upsert?: Enumerable<PodUpsertWithWhereUniqueWithoutMembersInput> | null
}

export type UserUpdateWithoutPodsDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaUpdateManyWithoutUserInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  memberOf?: PodUpdateManyWithoutMembersInput | null
  favorites?: FavoriteUpdateManyWithoutUserInput | null
  reviews?: ReviewUpdateManyWithoutUserInput | null
  annotations?: AnnotationUpdateManyWithoutUserInput | null
  questions?: QuestionUpdateManyWithoutUserInput | null
  threads?: ThreadUpdateManyWithoutParticipantsInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  sentNotifications?: NotificationUpdateOneWithoutSenderInput | null
  recievedNotifications?: NotificationUpdateOneWithoutReceiverInput | null
  messages?: MessageUpdateManyWithoutUserInput | null
}

export type UserUpsertWithoutPodsInput = {
  update: UserUpdateWithoutPodsDataInput
  create: UserCreateWithoutPodsInput
}

export type UserUpdateOneRequiredWithoutPodsInput = {
  create?: UserCreateWithoutPodsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutPodsDataInput | null
  upsert?: UserUpsertWithoutPodsInput | null
}

export type PodUpdateWithoutPostsDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutPodsInput | null
  members?: UserUpdateManyWithoutMemberOfInput | null
  itemMeta?: PodMetaUpdateManyWithoutPodInput | null
  categories?: CategoryUpdateManyWithoutPodsInput | null
  notifications?: NotificationUpdateManyWithoutPodInput | null
}

export type PodUpsertWithoutPostsInput = {
  update: PodUpdateWithoutPostsDataInput
  create: PodCreateWithoutPostsInput
}

export type PodUpdateOneRequiredWithoutPostsInput = {
  create?: PodCreateWithoutPostsInput | null
  connect?: PodWhereUniqueInput | null
  update?: PodUpdateWithoutPostsDataInput | null
  upsert?: PodUpsertWithoutPostsInput | null
}

export type PostUpdateWithoutUserDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  pod?: PodUpdateOneRequiredWithoutPostsInput | null
  itemMeta?: PostMetaUpdateManyWithoutPostInput | null
  tags?: TagUpdateManyWithoutPostsInput | null
  favorites?: FavoriteUpdateManyWithoutPostInput | null
  reviews?: ReviewUpdateManyWithoutPostInput | null
  annotations?: AnnotationUpdateManyWithoutPostInput | null
  questions?: QuestionUpdateManyWithoutPostInput | null
  notifications?: NotificationUpdateManyWithoutPostInput | null
}

export type PostUpdateWithWhereUniqueWithoutUserInput = {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutUserDataInput
}

export type PostUpsertWithWhereUniqueWithoutUserInput = {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutUserDataInput
  create: PostCreateWithoutUserInput
}

export type PostUpdateManyWithoutUserInput = {
  create?: Enumerable<PostCreateWithoutUserInput> | null
  connect?: Enumerable<PostWhereUniqueInput> | null
  set?: Enumerable<PostWhereUniqueInput> | null
  disconnect?: Enumerable<PostWhereUniqueInput> | null
  delete?: Enumerable<PostWhereUniqueInput> | null
  update?: Enumerable<PostUpdateWithWhereUniqueWithoutUserInput> | null
  updateMany?: Enumerable<PostUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<PostScalarWhereInput> | null
  upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutUserInput> | null
}

export type UserUpdateInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  userMeta?: UserMetaUpdateManyWithoutUserInput | null
  posts?: PostUpdateManyWithoutUserInput | null
  pods?: PodUpdateManyWithoutUserInput | null
  memberOf?: PodUpdateManyWithoutMembersInput | null
  favorites?: FavoriteUpdateManyWithoutUserInput | null
  reviews?: ReviewUpdateManyWithoutUserInput | null
  annotations?: AnnotationUpdateManyWithoutUserInput | null
  questions?: QuestionUpdateManyWithoutUserInput | null
  threads?: ThreadUpdateManyWithoutParticipantsInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  sentNotifications?: NotificationUpdateOneWithoutSenderInput | null
  recievedNotifications?: NotificationUpdateOneWithoutReceiverInput | null
  messages?: MessageUpdateManyWithoutUserInput | null
}

export type UserUpdateManyMutationInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type UserCreateWithoutUserMetaInput = {
  id?: string | null
  userType: number
  userEmail: string
  userPassword: string
  publicHash: string
  privateHash: string
  confirmHash: string
  forgotHash: string
  userConfirmed: number
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  posts?: PostCreateManyWithoutUserInput | null
  pods?: PodCreateManyWithoutUserInput | null
  memberOf?: PodCreateManyWithoutMembersInput | null
  favorites?: FavoriteCreateManyWithoutUserInput | null
  reviews?: ReviewCreateManyWithoutUserInput | null
  annotations?: AnnotationCreateManyWithoutUserInput | null
  questions?: QuestionCreateManyWithoutUserInput | null
  threads?: ThreadCreateManyWithoutParticipantsInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  following?: UserCreateManyWithoutFollowersInput | null
  followers?: UserCreateManyWithoutFollowingInput | null
  sentNotifications?: NotificationCreateOneWithoutSenderInput | null
  recievedNotifications?: NotificationCreateOneWithoutReceiverInput | null
  messages?: MessageCreateManyWithoutUserInput | null
}

export type UserCreateOneWithoutUserMetaInput = {
  create?: UserCreateWithoutUserMetaInput | null
  connect?: UserWhereUniqueInput | null
}

export type UserMetaCreateInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutUserMetaInput
}

export type UserUpdateWithoutUserMetaDataInput = {
  id?: string | null
  userType?: number | null
  userEmail?: string | null
  userPassword?: string | null
  publicHash?: string | null
  privateHash?: string | null
  confirmHash?: string | null
  forgotHash?: string | null
  userConfirmed?: number | null
  userDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  posts?: PostUpdateManyWithoutUserInput | null
  pods?: PodUpdateManyWithoutUserInput | null
  memberOf?: PodUpdateManyWithoutMembersInput | null
  favorites?: FavoriteUpdateManyWithoutUserInput | null
  reviews?: ReviewUpdateManyWithoutUserInput | null
  annotations?: AnnotationUpdateManyWithoutUserInput | null
  questions?: QuestionUpdateManyWithoutUserInput | null
  threads?: ThreadUpdateManyWithoutParticipantsInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  following?: UserUpdateManyWithoutFollowersInput | null
  followers?: UserUpdateManyWithoutFollowingInput | null
  sentNotifications?: NotificationUpdateOneWithoutSenderInput | null
  recievedNotifications?: NotificationUpdateOneWithoutReceiverInput | null
  messages?: MessageUpdateManyWithoutUserInput | null
}

export type UserUpsertWithoutUserMetaInput = {
  update: UserUpdateWithoutUserMetaDataInput
  create: UserCreateWithoutUserMetaInput
}

export type UserUpdateOneRequiredWithoutUserMetaInput = {
  create?: UserCreateWithoutUserMetaInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutUserMetaDataInput | null
  upsert?: UserUpsertWithoutUserMetaInput | null
}

export type UserMetaUpdateInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutUserMetaInput | null
}

export type UserMetaUpdateManyMutationInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type PodCreateInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutPodsInput
  members?: UserCreateManyWithoutMemberOfInput | null
  itemMeta?: PodMetaCreateManyWithoutPodInput | null
  posts?: PostCreateManyWithoutPodInput | null
  categories?: CategoryCreateManyWithoutPodsInput | null
  notifications?: NotificationCreateManyWithoutPodInput | null
}

export type PodUpdateInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutPodsInput | null
  members?: UserUpdateManyWithoutMemberOfInput | null
  itemMeta?: PodMetaUpdateManyWithoutPodInput | null
  posts?: PostUpdateManyWithoutPodInput | null
  categories?: CategoryUpdateManyWithoutPodsInput | null
  notifications?: NotificationUpdateManyWithoutPodInput | null
}

export type PodUpdateManyMutationInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type PodCreateWithoutItemMetaInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutPodsInput
  members?: UserCreateManyWithoutMemberOfInput | null
  posts?: PostCreateManyWithoutPodInput | null
  categories?: CategoryCreateManyWithoutPodsInput | null
  notifications?: NotificationCreateManyWithoutPodInput | null
}

export type PodCreateOneWithoutItemMetaInput = {
  create?: PodCreateWithoutItemMetaInput | null
  connect?: PodWhereUniqueInput | null
}

export type PodMetaCreateInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  pod: PodCreateOneWithoutItemMetaInput
}

export type PodUpdateWithoutItemMetaDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutPodsInput | null
  members?: UserUpdateManyWithoutMemberOfInput | null
  posts?: PostUpdateManyWithoutPodInput | null
  categories?: CategoryUpdateManyWithoutPodsInput | null
  notifications?: NotificationUpdateManyWithoutPodInput | null
}

export type PodUpsertWithoutItemMetaInput = {
  update: PodUpdateWithoutItemMetaDataInput
  create: PodCreateWithoutItemMetaInput
}

export type PodUpdateOneRequiredWithoutItemMetaInput = {
  create?: PodCreateWithoutItemMetaInput | null
  connect?: PodWhereUniqueInput | null
  update?: PodUpdateWithoutItemMetaDataInput | null
  upsert?: PodUpsertWithoutItemMetaInput | null
}

export type PodMetaUpdateInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  pod?: PodUpdateOneRequiredWithoutItemMetaInput | null
}

export type PodMetaUpdateManyMutationInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type PostCreateInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutPostsInput
  pod: PodCreateOneWithoutPostsInput
  itemMeta?: PostMetaCreateManyWithoutPostInput | null
  tags?: TagCreateManyWithoutPostsInput | null
  favorites?: FavoriteCreateManyWithoutPostInput | null
  reviews?: ReviewCreateManyWithoutPostInput | null
  annotations?: AnnotationCreateManyWithoutPostInput | null
  questions?: QuestionCreateManyWithoutPostInput | null
  notifications?: NotificationCreateManyWithoutPostInput | null
}

export type PostUpdateInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutPostsInput | null
  pod?: PodUpdateOneRequiredWithoutPostsInput | null
  itemMeta?: PostMetaUpdateManyWithoutPostInput | null
  tags?: TagUpdateManyWithoutPostsInput | null
  favorites?: FavoriteUpdateManyWithoutPostInput | null
  reviews?: ReviewUpdateManyWithoutPostInput | null
  annotations?: AnnotationUpdateManyWithoutPostInput | null
  questions?: QuestionUpdateManyWithoutPostInput | null
  notifications?: NotificationUpdateManyWithoutPostInput | null
}

export type PostUpdateManyMutationInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type PostCreateWithoutItemMetaInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutPostsInput
  pod: PodCreateOneWithoutPostsInput
  tags?: TagCreateManyWithoutPostsInput | null
  favorites?: FavoriteCreateManyWithoutPostInput | null
  reviews?: ReviewCreateManyWithoutPostInput | null
  annotations?: AnnotationCreateManyWithoutPostInput | null
  questions?: QuestionCreateManyWithoutPostInput | null
  notifications?: NotificationCreateManyWithoutPostInput | null
}

export type PostCreateOneWithoutItemMetaInput = {
  create?: PostCreateWithoutItemMetaInput | null
  connect?: PostWhereUniqueInput | null
}

export type PostMetaCreateInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  post: PostCreateOneWithoutItemMetaInput
}

export type PostUpdateWithoutItemMetaDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutPostsInput | null
  pod?: PodUpdateOneRequiredWithoutPostsInput | null
  tags?: TagUpdateManyWithoutPostsInput | null
  favorites?: FavoriteUpdateManyWithoutPostInput | null
  reviews?: ReviewUpdateManyWithoutPostInput | null
  annotations?: AnnotationUpdateManyWithoutPostInput | null
  questions?: QuestionUpdateManyWithoutPostInput | null
  notifications?: NotificationUpdateManyWithoutPostInput | null
}

export type PostUpsertWithoutItemMetaInput = {
  update: PostUpdateWithoutItemMetaDataInput
  create: PostCreateWithoutItemMetaInput
}

export type PostUpdateOneRequiredWithoutItemMetaInput = {
  create?: PostCreateWithoutItemMetaInput | null
  connect?: PostWhereUniqueInput | null
  update?: PostUpdateWithoutItemMetaDataInput | null
  upsert?: PostUpsertWithoutItemMetaInput | null
}

export type PostMetaUpdateInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  post?: PostUpdateOneRequiredWithoutItemMetaInput | null
}

export type PostMetaUpdateManyMutationInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type ReviewCreateInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutReviewsInput
  itemMeta?: ReviewMetaCreateManyWithoutReviewInput | null
  post: PostCreateOneWithoutReviewsInput
}

export type ReviewUpdateInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutReviewsInput | null
  itemMeta?: ReviewMetaUpdateManyWithoutReviewInput | null
  post?: PostUpdateOneRequiredWithoutReviewsInput | null
}

export type ReviewUpdateManyMutationInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type ReviewCreateWithoutItemMetaInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutReviewsInput
  post: PostCreateOneWithoutReviewsInput
}

export type ReviewCreateOneWithoutItemMetaInput = {
  create?: ReviewCreateWithoutItemMetaInput | null
  connect?: ReviewWhereUniqueInput | null
}

export type ReviewMetaCreateInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  review: ReviewCreateOneWithoutItemMetaInput
}

export type ReviewUpdateWithoutItemMetaDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutReviewsInput | null
  post?: PostUpdateOneRequiredWithoutReviewsInput | null
}

export type ReviewUpsertWithoutItemMetaInput = {
  update: ReviewUpdateWithoutItemMetaDataInput
  create: ReviewCreateWithoutItemMetaInput
}

export type ReviewUpdateOneRequiredWithoutItemMetaInput = {
  create?: ReviewCreateWithoutItemMetaInput | null
  connect?: ReviewWhereUniqueInput | null
  update?: ReviewUpdateWithoutItemMetaDataInput | null
  upsert?: ReviewUpsertWithoutItemMetaInput | null
}

export type ReviewMetaUpdateInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  review?: ReviewUpdateOneRequiredWithoutItemMetaInput | null
}

export type ReviewMetaUpdateManyMutationInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type AnnotationCreateInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutAnnotationsInput
  itemMeta?: AnnotationMetaCreateManyWithoutAnnotationInput | null
  post: PostCreateOneWithoutAnnotationsInput
}

export type AnnotationUpdateInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutAnnotationsInput | null
  itemMeta?: AnnotationMetaUpdateManyWithoutAnnotationInput | null
  post?: PostUpdateOneRequiredWithoutAnnotationsInput | null
}

export type AnnotationUpdateManyMutationInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type AnnotationCreateWithoutItemMetaInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutAnnotationsInput
  post: PostCreateOneWithoutAnnotationsInput
}

export type AnnotationCreateOneWithoutItemMetaInput = {
  create?: AnnotationCreateWithoutItemMetaInput | null
  connect?: AnnotationWhereUniqueInput | null
}

export type AnnotationMetaCreateInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  annotation: AnnotationCreateOneWithoutItemMetaInput
}

export type AnnotationUpdateWithoutItemMetaDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutAnnotationsInput | null
  post?: PostUpdateOneRequiredWithoutAnnotationsInput | null
}

export type AnnotationUpsertWithoutItemMetaInput = {
  update: AnnotationUpdateWithoutItemMetaDataInput
  create: AnnotationCreateWithoutItemMetaInput
}

export type AnnotationUpdateOneRequiredWithoutItemMetaInput = {
  create?: AnnotationCreateWithoutItemMetaInput | null
  connect?: AnnotationWhereUniqueInput | null
  update?: AnnotationUpdateWithoutItemMetaDataInput | null
  upsert?: AnnotationUpsertWithoutItemMetaInput | null
}

export type AnnotationMetaUpdateInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  annotation?: AnnotationUpdateOneRequiredWithoutItemMetaInput | null
}

export type AnnotationMetaUpdateManyMutationInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type QuestionCreateInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutQuestionsInput
  itemMeta?: QuestionMetaCreateManyWithoutQuestionInput | null
  post: PostCreateOneWithoutQuestionsInput
}

export type QuestionUpdateInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutQuestionsInput | null
  itemMeta?: QuestionMetaUpdateManyWithoutQuestionInput | null
  post?: PostUpdateOneRequiredWithoutQuestionsInput | null
}

export type QuestionUpdateManyMutationInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type QuestionCreateWithoutItemMetaInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutQuestionsInput
  post: PostCreateOneWithoutQuestionsInput
}

export type QuestionCreateOneWithoutItemMetaInput = {
  create?: QuestionCreateWithoutItemMetaInput | null
  connect?: QuestionWhereUniqueInput | null
}

export type QuestionMetaCreateInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  question: QuestionCreateOneWithoutItemMetaInput
}

export type QuestionUpdateWithoutItemMetaDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutQuestionsInput | null
  post?: PostUpdateOneRequiredWithoutQuestionsInput | null
}

export type QuestionUpsertWithoutItemMetaInput = {
  update: QuestionUpdateWithoutItemMetaDataInput
  create: QuestionCreateWithoutItemMetaInput
}

export type QuestionUpdateOneRequiredWithoutItemMetaInput = {
  create?: QuestionCreateWithoutItemMetaInput | null
  connect?: QuestionWhereUniqueInput | null
  update?: QuestionUpdateWithoutItemMetaDataInput | null
  upsert?: QuestionUpsertWithoutItemMetaInput | null
}

export type QuestionMetaUpdateInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  question?: QuestionUpdateOneRequiredWithoutItemMetaInput | null
}

export type QuestionMetaUpdateManyMutationInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type ThreadCreateInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: ThreadMetaCreateManyWithoutThreadInput | null
  messages?: MessageCreateManyWithoutThreadInput | null
  participants?: UserCreateManyWithoutThreadsInput | null
}

export type ThreadUpdateInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: ThreadMetaUpdateManyWithoutThreadInput | null
  messages?: MessageUpdateManyWithoutThreadInput | null
  participants?: UserUpdateManyWithoutThreadsInput | null
}

export type ThreadUpdateManyMutationInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type ThreadCreateWithoutItemMetaInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  messages?: MessageCreateManyWithoutThreadInput | null
  participants?: UserCreateManyWithoutThreadsInput | null
}

export type ThreadCreateOneWithoutItemMetaInput = {
  create?: ThreadCreateWithoutItemMetaInput | null
  connect?: ThreadWhereUniqueInput | null
}

export type ThreadMetaCreateInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  thread: ThreadCreateOneWithoutItemMetaInput
}

export type ThreadUpdateWithoutItemMetaDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  messages?: MessageUpdateManyWithoutThreadInput | null
  participants?: UserUpdateManyWithoutThreadsInput | null
}

export type ThreadUpsertWithoutItemMetaInput = {
  update: ThreadUpdateWithoutItemMetaDataInput
  create: ThreadCreateWithoutItemMetaInput
}

export type ThreadUpdateOneRequiredWithoutItemMetaInput = {
  create?: ThreadCreateWithoutItemMetaInput | null
  connect?: ThreadWhereUniqueInput | null
  update?: ThreadUpdateWithoutItemMetaDataInput | null
  upsert?: ThreadUpsertWithoutItemMetaInput | null
}

export type ThreadMetaUpdateInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  thread?: ThreadUpdateOneRequiredWithoutItemMetaInput | null
}

export type ThreadMetaUpdateManyMutationInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type MessageCreateInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutMessagesInput
  itemMeta?: MessageMetaCreateManyWithoutMessageInput | null
  thread: ThreadCreateOneWithoutMessagesInput
}

export type MessageUpdateInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutMessagesInput | null
  itemMeta?: MessageMetaUpdateManyWithoutMessageInput | null
  thread?: ThreadUpdateOneRequiredWithoutMessagesInput | null
}

export type MessageUpdateManyMutationInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type MessageCreateWithoutItemMetaInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutMessagesInput
  thread: ThreadCreateOneWithoutMessagesInput
}

export type MessageCreateOneWithoutItemMetaInput = {
  create?: MessageCreateWithoutItemMetaInput | null
  connect?: MessageWhereUniqueInput | null
}

export type MessageMetaCreateInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  message: MessageCreateOneWithoutItemMetaInput
}

export type MessageUpdateWithoutItemMetaDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutMessagesInput | null
  thread?: ThreadUpdateOneRequiredWithoutMessagesInput | null
}

export type MessageUpsertWithoutItemMetaInput = {
  update: MessageUpdateWithoutItemMetaDataInput
  create: MessageCreateWithoutItemMetaInput
}

export type MessageUpdateOneRequiredWithoutItemMetaInput = {
  create?: MessageCreateWithoutItemMetaInput | null
  connect?: MessageWhereUniqueInput | null
  update?: MessageUpdateWithoutItemMetaDataInput | null
  upsert?: MessageUpsertWithoutItemMetaInput | null
}

export type MessageMetaUpdateInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  message?: MessageUpdateOneRequiredWithoutItemMetaInput | null
}

export type MessageMetaUpdateManyMutationInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type NotificationCreateInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: NotificationMetaCreateManyWithoutNotificationInput | null
  sender: UserCreateOneWithoutSentNotificationsInput
  receiver: UserCreateOneWithoutRecievedNotificationsInput
  pod?: PodCreateOneWithoutNotificationsInput | null
  post?: PostCreateOneWithoutNotificationsInput | null
  user?: UserCreateOneWithoutNotificationsInput | null
}

export type NotificationUpdateInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  itemMeta?: NotificationMetaUpdateManyWithoutNotificationInput | null
  sender?: UserUpdateOneRequiredWithoutSentNotificationsInput | null
  receiver?: UserUpdateOneRequiredWithoutRecievedNotificationsInput | null
  pod?: PodUpdateOneWithoutNotificationsInput | null
  post?: PostUpdateOneWithoutNotificationsInput | null
  user?: UserUpdateOneWithoutNotificationsInput | null
}

export type NotificationUpdateManyMutationInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type NotificationCreateWithoutItemMetaInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  sender: UserCreateOneWithoutSentNotificationsInput
  receiver: UserCreateOneWithoutRecievedNotificationsInput
  pod?: PodCreateOneWithoutNotificationsInput | null
  post?: PostCreateOneWithoutNotificationsInput | null
  user?: UserCreateOneWithoutNotificationsInput | null
}

export type NotificationCreateOneWithoutItemMetaInput = {
  create?: NotificationCreateWithoutItemMetaInput | null
  connect?: NotificationWhereUniqueInput | null
}

export type NotificationMetaCreateInput = {
  id?: string | null
  metaType: string
  metaName: string
  metaValue: string
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  notification: NotificationCreateOneWithoutItemMetaInput
}

export type NotificationUpdateWithoutItemMetaDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  sender?: UserUpdateOneRequiredWithoutSentNotificationsInput | null
  receiver?: UserUpdateOneRequiredWithoutRecievedNotificationsInput | null
  pod?: PodUpdateOneWithoutNotificationsInput | null
  post?: PostUpdateOneWithoutNotificationsInput | null
  user?: UserUpdateOneWithoutNotificationsInput | null
}

export type NotificationUpsertWithoutItemMetaInput = {
  update: NotificationUpdateWithoutItemMetaDataInput
  create: NotificationCreateWithoutItemMetaInput
}

export type NotificationUpdateOneRequiredWithoutItemMetaInput = {
  create?: NotificationCreateWithoutItemMetaInput | null
  connect?: NotificationWhereUniqueInput | null
  update?: NotificationUpdateWithoutItemMetaDataInput | null
  upsert?: NotificationUpsertWithoutItemMetaInput | null
}

export type NotificationMetaUpdateInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  notification?: NotificationUpdateOneRequiredWithoutItemMetaInput | null
}

export type NotificationMetaUpdateManyMutationInput = {
  id?: string | null
  metaType?: string | null
  metaName?: string | null
  metaValue?: string | null
  metaDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type FavoriteCreateInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutFavoritesInput
  post: PostCreateOneWithoutFavoritesInput
}

export type FavoriteUpdateInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutFavoritesInput | null
  post?: PostUpdateOneRequiredWithoutFavoritesInput | null
}

export type FavoriteUpdateManyMutationInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type PostCreateWithoutTagsInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemMimeType: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutPostsInput
  pod: PodCreateOneWithoutPostsInput
  itemMeta?: PostMetaCreateManyWithoutPostInput | null
  favorites?: FavoriteCreateManyWithoutPostInput | null
  reviews?: ReviewCreateManyWithoutPostInput | null
  annotations?: AnnotationCreateManyWithoutPostInput | null
  questions?: QuestionCreateManyWithoutPostInput | null
  notifications?: NotificationCreateManyWithoutPostInput | null
}

export type PostCreateManyWithoutTagsInput = {
  create?: Enumerable<PostCreateWithoutTagsInput> | null
  connect?: Enumerable<PostWhereUniqueInput> | null
}

export type TagCreateInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  posts?: PostCreateManyWithoutTagsInput | null
}

export type PostUpdateWithoutTagsDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemMimeType?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutPostsInput | null
  pod?: PodUpdateOneRequiredWithoutPostsInput | null
  itemMeta?: PostMetaUpdateManyWithoutPostInput | null
  favorites?: FavoriteUpdateManyWithoutPostInput | null
  reviews?: ReviewUpdateManyWithoutPostInput | null
  annotations?: AnnotationUpdateManyWithoutPostInput | null
  questions?: QuestionUpdateManyWithoutPostInput | null
  notifications?: NotificationUpdateManyWithoutPostInput | null
}

export type PostUpdateWithWhereUniqueWithoutTagsInput = {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutTagsDataInput
}

export type PostUpsertWithWhereUniqueWithoutTagsInput = {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutTagsDataInput
  create: PostCreateWithoutTagsInput
}

export type PostUpdateManyWithoutTagsInput = {
  create?: Enumerable<PostCreateWithoutTagsInput> | null
  connect?: Enumerable<PostWhereUniqueInput> | null
  set?: Enumerable<PostWhereUniqueInput> | null
  disconnect?: Enumerable<PostWhereUniqueInput> | null
  delete?: Enumerable<PostWhereUniqueInput> | null
  update?: Enumerable<PostUpdateWithWhereUniqueWithoutTagsInput> | null
  updateMany?: Enumerable<PostUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<PostScalarWhereInput> | null
  upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutTagsInput> | null
}

export type TagUpdateInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  posts?: PostUpdateManyWithoutTagsInput | null
}

export type TagUpdateManyMutationInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type PodCreateWithoutCategoriesInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemUrlSegment: string
  itemName: string
  itemContent: string
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user: UserCreateOneWithoutPodsInput
  members?: UserCreateManyWithoutMemberOfInput | null
  itemMeta?: PodMetaCreateManyWithoutPodInput | null
  posts?: PostCreateManyWithoutPodInput | null
  notifications?: NotificationCreateManyWithoutPodInput | null
}

export type PodCreateManyWithoutCategoriesInput = {
  create?: Enumerable<PodCreateWithoutCategoriesInput> | null
  connect?: Enumerable<PodWhereUniqueInput> | null
}

export type CategoryCreateInput = {
  id?: string | null
  itemType: string
  itemStatus: string
  itemName: string
  itemContent: string
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  pods?: PodCreateManyWithoutCategoriesInput | null
}

export type PodUpdateWithoutCategoriesDataInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemUrlSegment?: string | null
  itemName?: string | null
  itemContent?: string | null
  itemDeleted?: boolean | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutPodsInput | null
  members?: UserUpdateManyWithoutMemberOfInput | null
  itemMeta?: PodMetaUpdateManyWithoutPodInput | null
  posts?: PostUpdateManyWithoutPodInput | null
  notifications?: NotificationUpdateManyWithoutPodInput | null
}

export type PodUpdateWithWhereUniqueWithoutCategoriesInput = {
  where: PodWhereUniqueInput
  data: PodUpdateWithoutCategoriesDataInput
}

export type PodUpsertWithWhereUniqueWithoutCategoriesInput = {
  where: PodWhereUniqueInput
  update: PodUpdateWithoutCategoriesDataInput
  create: PodCreateWithoutCategoriesInput
}

export type PodUpdateManyWithoutCategoriesInput = {
  create?: Enumerable<PodCreateWithoutCategoriesInput> | null
  connect?: Enumerable<PodWhereUniqueInput> | null
  set?: Enumerable<PodWhereUniqueInput> | null
  disconnect?: Enumerable<PodWhereUniqueInput> | null
  delete?: Enumerable<PodWhereUniqueInput> | null
  update?: Enumerable<PodUpdateWithWhereUniqueWithoutCategoriesInput> | null
  updateMany?: Enumerable<PodUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<PodScalarWhereInput> | null
  upsert?: Enumerable<PodUpsertWithWhereUniqueWithoutCategoriesInput> | null
}

export type CategoryUpdateInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
  pods?: PodUpdateManyWithoutCategoriesInput | null
}

export type CategoryUpdateManyMutationInput = {
  id?: string | null
  itemType?: string | null
  itemStatus?: string | null
  itemName?: string | null
  itemContent?: string | null
  createdAt?: Date | string | null
  updatedAt?: Date | string | null
}

export type StringFilter = {
  equals?: string | null
  not?: string | StringFilter | null
  in?: Enumerable<string> | null
  notIn?: Enumerable<string> | null
  lt?: string | null
  lte?: string | null
  gt?: string | null
  gte?: string | null
  contains?: string | null
  startsWith?: string | null
  endsWith?: string | null
}

export type BooleanFilter = {
  equals?: boolean | null
  not?: boolean | BooleanFilter | null
}

export type DateTimeFilter = {
  equals?: Date | string | null
  not?: Date | string | DateTimeFilter | null
  in?: Enumerable<Date | string> | null
  notIn?: Enumerable<Date | string> | null
  lt?: Date | string | null
  lte?: Date | string | null
  gt?: Date | string | null
  gte?: Date | string | null
}

export type PodFilter = {
  every?: PodWhereInput | null
  some?: PodWhereInput | null
  none?: PodWhereInput | null
}

export type NotificationMetaFilter = {
  every?: NotificationMetaWhereInput | null
  some?: NotificationMetaWhereInput | null
  none?: NotificationMetaWhereInput | null
}

export type UserFilter = {
  every?: UserWhereInput | null
  some?: UserWhereInput | null
  none?: UserWhereInput | null
}

export type PodMetaFilter = {
  every?: PodMetaWhereInput | null
  some?: PodMetaWhereInput | null
  none?: PodMetaWhereInput | null
}

export type PostFilter = {
  every?: PostWhereInput | null
  some?: PostWhereInput | null
  none?: PostWhereInput | null
}

export type CategoryFilter = {
  every?: CategoryWhereInput | null
  some?: CategoryWhereInput | null
  none?: CategoryWhereInput | null
}

export type NotificationFilter = {
  every?: NotificationWhereInput | null
  some?: NotificationWhereInput | null
  none?: NotificationWhereInput | null
}

export type ReviewMetaFilter = {
  every?: ReviewMetaWhereInput | null
  some?: ReviewMetaWhereInput | null
  none?: ReviewMetaWhereInput | null
}

export type AnnotationMetaFilter = {
  every?: AnnotationMetaWhereInput | null
  some?: AnnotationMetaWhereInput | null
  none?: AnnotationMetaWhereInput | null
}

export type QuestionMetaFilter = {
  every?: QuestionMetaWhereInput | null
  some?: QuestionMetaWhereInput | null
  none?: QuestionMetaWhereInput | null
}

export type PostMetaFilter = {
  every?: PostMetaWhereInput | null
  some?: PostMetaWhereInput | null
  none?: PostMetaWhereInput | null
}

export type TagFilter = {
  every?: TagWhereInput | null
  some?: TagWhereInput | null
  none?: TagWhereInput | null
}

export type FavoriteFilter = {
  every?: FavoriteWhereInput | null
  some?: FavoriteWhereInput | null
  none?: FavoriteWhereInput | null
}

export type ReviewFilter = {
  every?: ReviewWhereInput | null
  some?: ReviewWhereInput | null
  none?: ReviewWhereInput | null
}

export type AnnotationFilter = {
  every?: AnnotationWhereInput | null
  some?: AnnotationWhereInput | null
  none?: AnnotationWhereInput | null
}

export type QuestionFilter = {
  every?: QuestionWhereInput | null
  some?: QuestionWhereInput | null
  none?: QuestionWhereInput | null
}

export type MessageMetaFilter = {
  every?: MessageMetaWhereInput | null
  some?: MessageMetaWhereInput | null
  none?: MessageMetaWhereInput | null
}

export type ThreadMetaFilter = {
  every?: ThreadMetaWhereInput | null
  some?: ThreadMetaWhereInput | null
  none?: ThreadMetaWhereInput | null
}

export type MessageFilter = {
  every?: MessageWhereInput | null
  some?: MessageWhereInput | null
  none?: MessageWhereInput | null
}

export type IntFilter = {
  equals?: number | null
  not?: number | IntFilter | null
  in?: Enumerable<number> | null
  notIn?: Enumerable<number> | null
  lt?: number | null
  lte?: number | null
  gt?: number | null
  gte?: number | null
}

export type UserMetaFilter = {
  every?: UserMetaWhereInput | null
  some?: UserMetaWhereInput | null
  none?: UserMetaWhereInput | null
}

export type ThreadFilter = {
  every?: ThreadWhereInput | null
  some?: ThreadWhereInput | null
  none?: ThreadWhereInput | null
}

export type UserOrderByInput = {
  id?: OrderByArg | null
  userType?: OrderByArg | null
  userEmail?: OrderByArg | null
  userPassword?: OrderByArg | null
  publicHash?: OrderByArg | null
  privateHash?: OrderByArg | null
  confirmHash?: OrderByArg | null
  forgotHash?: OrderByArg | null
  userConfirmed?: OrderByArg | null
  userDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type UserMetaOrderByInput = {
  id?: OrderByArg | null
  metaType?: OrderByArg | null
  metaName?: OrderByArg | null
  metaValue?: OrderByArg | null
  metaDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type PostOrderByInput = {
  id?: OrderByArg | null
  itemType?: OrderByArg | null
  itemStatus?: OrderByArg | null
  itemUrlSegment?: OrderByArg | null
  itemMimeType?: OrderByArg | null
  itemName?: OrderByArg | null
  itemContent?: OrderByArg | null
  itemDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type PodMetaOrderByInput = {
  id?: OrderByArg | null
  metaType?: OrderByArg | null
  metaName?: OrderByArg | null
  metaValue?: OrderByArg | null
  metaDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type CategoryOrderByInput = {
  id?: OrderByArg | null
  itemType?: OrderByArg | null
  itemStatus?: OrderByArg | null
  itemName?: OrderByArg | null
  itemContent?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type PodOrderByInput = {
  id?: OrderByArg | null
  itemType?: OrderByArg | null
  itemStatus?: OrderByArg | null
  itemUrlSegment?: OrderByArg | null
  itemName?: OrderByArg | null
  itemContent?: OrderByArg | null
  itemDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type NotificationOrderByInput = {
  id?: OrderByArg | null
  itemType?: OrderByArg | null
  itemStatus?: OrderByArg | null
  itemName?: OrderByArg | null
  itemContent?: OrderByArg | null
  itemDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type NotificationMetaOrderByInput = {
  id?: OrderByArg | null
  metaType?: OrderByArg | null
  metaName?: OrderByArg | null
  metaValue?: OrderByArg | null
  metaDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type PostMetaOrderByInput = {
  id?: OrderByArg | null
  metaType?: OrderByArg | null
  metaName?: OrderByArg | null
  metaValue?: OrderByArg | null
  metaDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type TagOrderByInput = {
  id?: OrderByArg | null
  itemType?: OrderByArg | null
  itemStatus?: OrderByArg | null
  itemName?: OrderByArg | null
  itemContent?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type FavoriteOrderByInput = {
  id?: OrderByArg | null
  itemType?: OrderByArg | null
  itemStatus?: OrderByArg | null
  itemName?: OrderByArg | null
  itemContent?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type ReviewOrderByInput = {
  id?: OrderByArg | null
  itemType?: OrderByArg | null
  itemStatus?: OrderByArg | null
  itemUrlSegment?: OrderByArg | null
  itemMimeType?: OrderByArg | null
  itemName?: OrderByArg | null
  itemContent?: OrderByArg | null
  itemDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type ReviewMetaOrderByInput = {
  id?: OrderByArg | null
  metaType?: OrderByArg | null
  metaName?: OrderByArg | null
  metaValue?: OrderByArg | null
  metaDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type AnnotationOrderByInput = {
  id?: OrderByArg | null
  itemType?: OrderByArg | null
  itemStatus?: OrderByArg | null
  itemUrlSegment?: OrderByArg | null
  itemMimeType?: OrderByArg | null
  itemName?: OrderByArg | null
  itemContent?: OrderByArg | null
  itemDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type AnnotationMetaOrderByInput = {
  id?: OrderByArg | null
  metaType?: OrderByArg | null
  metaName?: OrderByArg | null
  metaValue?: OrderByArg | null
  metaDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type QuestionOrderByInput = {
  id?: OrderByArg | null
  itemType?: OrderByArg | null
  itemStatus?: OrderByArg | null
  itemUrlSegment?: OrderByArg | null
  itemMimeType?: OrderByArg | null
  itemName?: OrderByArg | null
  itemContent?: OrderByArg | null
  itemDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type QuestionMetaOrderByInput = {
  id?: OrderByArg | null
  metaType?: OrderByArg | null
  metaName?: OrderByArg | null
  metaValue?: OrderByArg | null
  metaDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type ThreadOrderByInput = {
  id?: OrderByArg | null
  itemType?: OrderByArg | null
  itemStatus?: OrderByArg | null
  itemName?: OrderByArg | null
  itemContent?: OrderByArg | null
  itemDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type ThreadMetaOrderByInput = {
  id?: OrderByArg | null
  metaType?: OrderByArg | null
  metaName?: OrderByArg | null
  metaValue?: OrderByArg | null
  metaDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type MessageOrderByInput = {
  id?: OrderByArg | null
  itemType?: OrderByArg | null
  itemStatus?: OrderByArg | null
  itemName?: OrderByArg | null
  itemContent?: OrderByArg | null
  itemDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

export type MessageMetaOrderByInput = {
  id?: OrderByArg | null
  metaType?: OrderByArg | null
  metaName?: OrderByArg | null
  metaValue?: OrderByArg | null
  metaDeleted?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
}

/**
 * Batch Payload for updateMany & deleteMany
 */

export type BatchPayload = {
  count: number
}

/**
 * DMMF
 */
export declare const dmmf: DMMF.Document;
export {};
