/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as photon from "@generated/photon"
import { core } from "nexus"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PostCreateManyWithoutPostsInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    create?: NexusGenInputs['PostCreateWithoutUserInput'][] | null; // [PostCreateWithoutUserInput!]
  }
  PostCreateWithoutUserInput: { // input type
    itemContent: string; // String!
    itemDeleted?: boolean | null; // Boolean
    itemMeta?: NexusGenInputs['PostMetaCreateManyWithoutItemMetaInput'] | null; // PostMetaCreateManyWithoutItemMetaInput
    itemMimeType: string; // String!
    itemName: string; // String!
    itemStatus: string; // String!
    itemType: string; // String!
    itemUrlSegment: string; // String!
    reviews?: NexusGenInputs['ReviewCreateManyWithoutReviewsInput'] | null; // ReviewCreateManyWithoutReviewsInput
  }
  PostMetaCreateManyWithoutItemMetaInput: { // input type
    connect?: NexusGenInputs['PostMetaWhereUniqueInput'][] | null; // [PostMetaWhereUniqueInput!]
    create?: NexusGenInputs['PostMetaCreateWithoutPostInput'][] | null; // [PostMetaCreateWithoutPostInput!]
  }
  PostMetaCreateWithoutPostInput: { // input type
    metaDeleted?: boolean | null; // Boolean
    metaName: string; // String!
    metaType: string; // String!
    metaValue: string; // String!
  }
  PostMetaWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  PostWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  ReviewCreateManyWithoutReviewsInput: { // input type
    connect?: NexusGenInputs['ReviewWhereUniqueInput'][] | null; // [ReviewWhereUniqueInput!]
    create?: NexusGenInputs['ReviewCreateWithoutPostInput'][] | null; // [ReviewCreateWithoutPostInput!]
  }
  ReviewCreateWithoutPostInput: { // input type
    itemContent: string; // String!
    itemDeleted?: boolean | null; // Boolean
    itemMeta?: NexusGenInputs['ReviewMetaCreateManyWithoutItemMetaInput'] | null; // ReviewMetaCreateManyWithoutItemMetaInput
    itemMimeType: string; // String!
    itemName: string; // String!
    itemStatus: string; // String!
    itemType: string; // String!
    itemUrlSegment: string; // String!
    user: NexusGenInputs['UserCreateOneWithoutUserInput']; // UserCreateOneWithoutUserInput!
  }
  ReviewMetaCreateManyWithoutItemMetaInput: { // input type
    connect?: NexusGenInputs['ReviewMetaWhereUniqueInput'][] | null; // [ReviewMetaWhereUniqueInput!]
    create?: NexusGenInputs['ReviewMetaCreateWithoutReviewInput'][] | null; // [ReviewMetaCreateWithoutReviewInput!]
  }
  ReviewMetaCreateWithoutReviewInput: { // input type
    metaDeleted?: boolean | null; // Boolean
    metaName: string; // String!
    metaType: string; // String!
    metaValue: string; // String!
  }
  ReviewMetaWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  ReviewWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  UserCreateInput: { // input type
    confirmHash: string; // String!
    forgotHash: string; // String!
    posts?: NexusGenInputs['PostCreateManyWithoutPostsInput'] | null; // PostCreateManyWithoutPostsInput
    privateHash: string; // String!
    publicHash: string; // String!
    reviews?: NexusGenInputs['ReviewCreateManyWithoutReviewsInput'] | null; // ReviewCreateManyWithoutReviewsInput
    userConfirmed: number; // Int!
    userDeleted?: boolean | null; // Boolean
    userEmail: string; // String!
    userMeta?: NexusGenInputs['UserMetaCreateManyWithoutUserMetaInput'] | null; // UserMetaCreateManyWithoutUserMetaInput
    userPassword: string; // String!
    userType: number; // Int!
  }
  UserCreateOneWithoutUserInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutReviewsInput'] | null; // UserCreateWithoutReviewsInput
  }
  UserCreateWithoutReviewsInput: { // input type
    confirmHash: string; // String!
    forgotHash: string; // String!
    posts?: NexusGenInputs['PostCreateManyWithoutPostsInput'] | null; // PostCreateManyWithoutPostsInput
    privateHash: string; // String!
    publicHash: string; // String!
    userConfirmed: number; // Int!
    userDeleted?: boolean | null; // Boolean
    userEmail: string; // String!
    userMeta?: NexusGenInputs['UserMetaCreateManyWithoutUserMetaInput'] | null; // UserMetaCreateManyWithoutUserMetaInput
    userPassword: string; // String!
    userType: number; // Int!
  }
  UserMetaCreateManyWithoutUserMetaInput: { // input type
    connect?: NexusGenInputs['UserMetaWhereUniqueInput'][] | null; // [UserMetaWhereUniqueInput!]
    create?: NexusGenInputs['UserMetaCreateWithoutUserInput'][] | null; // [UserMetaCreateWithoutUserInput!]
  }
  UserMetaCreateWithoutUserInput: { // input type
    metaDeleted?: boolean | null; // Boolean
    metaName: string; // String!
    metaType: string; // String!
    metaValue: string; // String!
  }
  UserMetaWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  UserWhereUniqueInput: { // input type
    confirmHash?: string | null; // String
    forgotHash?: string | null; // String
    id?: number | null; // Int
    privateHash?: string | null; // String
    publicHash?: string | null; // String
    userEmail?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Mutation: {};
  Query: {};
  User: photon.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  PostCreateManyWithoutPostsInput: NexusGenInputs['PostCreateManyWithoutPostsInput'];
  PostCreateWithoutUserInput: NexusGenInputs['PostCreateWithoutUserInput'];
  PostMetaCreateManyWithoutItemMetaInput: NexusGenInputs['PostMetaCreateManyWithoutItemMetaInput'];
  PostMetaCreateWithoutPostInput: NexusGenInputs['PostMetaCreateWithoutPostInput'];
  PostMetaWhereUniqueInput: NexusGenInputs['PostMetaWhereUniqueInput'];
  PostWhereUniqueInput: NexusGenInputs['PostWhereUniqueInput'];
  ReviewCreateManyWithoutReviewsInput: NexusGenInputs['ReviewCreateManyWithoutReviewsInput'];
  ReviewCreateWithoutPostInput: NexusGenInputs['ReviewCreateWithoutPostInput'];
  ReviewMetaCreateManyWithoutItemMetaInput: NexusGenInputs['ReviewMetaCreateManyWithoutItemMetaInput'];
  ReviewMetaCreateWithoutReviewInput: NexusGenInputs['ReviewMetaCreateWithoutReviewInput'];
  ReviewMetaWhereUniqueInput: NexusGenInputs['ReviewMetaWhereUniqueInput'];
  ReviewWhereUniqueInput: NexusGenInputs['ReviewWhereUniqueInput'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserCreateOneWithoutUserInput: NexusGenInputs['UserCreateOneWithoutUserInput'];
  UserCreateWithoutReviewsInput: NexusGenInputs['UserCreateWithoutReviewsInput'];
  UserMetaCreateManyWithoutUserMetaInput: NexusGenInputs['UserMetaCreateManyWithoutUserMetaInput'];
  UserMetaCreateWithoutUserInput: NexusGenInputs['UserMetaCreateWithoutUserInput'];
  UserMetaWhereUniqueInput: NexusGenInputs['UserMetaWhereUniqueInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createOneUser: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    findManyUser: NexusGenRootTypes['User'][] | null; // [User!]
    findOneUser: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
    confirmHash: string; // String!
    forgotHash: string; // String!
    id: number; // Int!
    privateHash: string; // String!
    publicHash: string; // String!
    userConfirmed: number; // Int!
    userDeleted: boolean; // Boolean!
    userEmail: string; // String!
    userType: number; // Int!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
  }
  Query: {
    findManyUser: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    findOneUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Query" | "User";

export type NexusGenInputNames = "PostCreateManyWithoutPostsInput" | "PostCreateWithoutUserInput" | "PostMetaCreateManyWithoutItemMetaInput" | "PostMetaCreateWithoutPostInput" | "PostMetaWhereUniqueInput" | "PostWhereUniqueInput" | "ReviewCreateManyWithoutReviewsInput" | "ReviewCreateWithoutPostInput" | "ReviewMetaCreateManyWithoutItemMetaInput" | "ReviewMetaCreateWithoutReviewInput" | "ReviewMetaWhereUniqueInput" | "ReviewWhereUniqueInput" | "UserCreateInput" | "UserCreateOneWithoutUserInput" | "UserCreateWithoutReviewsInput" | "UserMetaCreateManyWithoutUserMetaInput" | "UserMetaCreateWithoutUserInput" | "UserMetaWhereUniqueInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: {};
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}