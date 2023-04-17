/* tslint:disable */
/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface IQuery {
  listUsers?: IIListUsers;
  userById?: IIUser;
  me?: IIUser;
}

export interface IFilterVaraiblesListUser {
  take: number;
  skip: number;
}

export interface IIListUsers {
  items?: Array<IIUser | null>;
  totalCount?: number;
  pageInfo?: IPagionationInfo;
}

export interface IIUser {
  email?: string;
  name?: string;
  lastName?: string;
  id?: string;
  photo_user?: string;
  location?: string;
  isActive?: boolean;
}

export interface IPagionationInfo {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
}

export interface IFilterUserById {
  id?: string;
}

export interface IMutation {
  createUser?: IICreateUserReturn;
  activeUser?: IActiveSuccessfully;
  loginUser?: IICreateUserReturn;
  updateUser?: IIUser;
}

export interface IInputUserVariables {
  email: string;
  name: string;
  lastName: string;
  password: string;
  photo_user?: string;
  location?: string;
}

export interface IICreateUserReturn {
  token?: string;
  user?: IIUser;
}

export interface IInputActiveVariables {
  id: string;
}

export interface IActiveSuccessfully {
  message?: string;
  user?: IIUser;
}

export interface IInputUserLoginVariables {
  email: string;
  password: string;
}

export interface IInputUpdateUserVariables {
  id: string;
  name?: string;
  lastName?: string;
  password?: string;
  photo_user?: string;
  location?: string;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface IResolver {
  Query?: IQueryTypeResolver;
  IListUsers?: IIListUsersTypeResolver;
  IUser?: IIUserTypeResolver;
  PagionationInfo?: IPagionationInfoTypeResolver;
  Mutation?: IMutationTypeResolver;
  ICreateUserReturn?: IICreateUserReturnTypeResolver;
  ActiveSuccessfully?: IActiveSuccessfullyTypeResolver;
}
export interface IQueryTypeResolver<TParent = any> {
  listUsers?: QueryToListUsersResolver<TParent>;
  userById?: QueryToUserByIdResolver<TParent>;
  me?: QueryToMeResolver<TParent>;
}

export interface QueryToListUsersArgs {
  filter?: IFilterVaraiblesListUser;
}
export interface QueryToListUsersResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToListUsersArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToUserByIdArgs {
  filter?: IFilterUserById;
}
export interface QueryToUserByIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToUserByIdArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToMeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IIListUsersTypeResolver<TParent = any> {
  items?: IListUsersToItemsResolver<TParent>;
  totalCount?: IListUsersToTotalCountResolver<TParent>;
  pageInfo?: IListUsersToPageInfoResolver<TParent>;
}

export interface IListUsersToItemsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IListUsersToTotalCountResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IListUsersToPageInfoResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IIUserTypeResolver<TParent = any> {
  email?: IUserToEmailResolver<TParent>;
  name?: IUserToNameResolver<TParent>;
  lastName?: IUserToLastNameResolver<TParent>;
  id?: IUserToIdResolver<TParent>;
  photo_user?: IUserToPhoto_userResolver<TParent>;
  location?: IUserToLocationResolver<TParent>;
  isActive?: IUserToIsActiveResolver<TParent>;
}

export interface IUserToEmailResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUserToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUserToLastNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUserToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUserToPhoto_userResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUserToLocationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUserToIsActiveResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IPagionationInfoTypeResolver<TParent = any> {
  hasNextPage?: PagionationInfoToHasNextPageResolver<TParent>;
  hasPreviousPage?: PagionationInfoToHasPreviousPageResolver<TParent>;
}

export interface PagionationInfoToHasNextPageResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PagionationInfoToHasPreviousPageResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IMutationTypeResolver<TParent = any> {
  createUser?: MutationToCreateUserResolver<TParent>;
  activeUser?: MutationToActiveUserResolver<TParent>;
  loginUser?: MutationToLoginUserResolver<TParent>;
  updateUser?: MutationToUpdateUserResolver<TParent>;
}

export interface MutationToCreateUserArgs {
  input?: IInputUserVariables;
}
export interface MutationToCreateUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreateUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToActiveUserArgs {
  input?: IInputActiveVariables;
}
export interface MutationToActiveUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToActiveUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToLoginUserArgs {
  input?: IInputUserLoginVariables;
}
export interface MutationToLoginUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToLoginUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToUpdateUserArgs {
  input?: IInputUpdateUserVariables;
}
export interface MutationToUpdateUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToUpdateUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IICreateUserReturnTypeResolver<TParent = any> {
  token?: ICreateUserReturnToTokenResolver<TParent>;
  user?: ICreateUserReturnToUserResolver<TParent>;
}

export interface ICreateUserReturnToTokenResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateUserReturnToUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IActiveSuccessfullyTypeResolver<TParent = any> {
  message?: ActiveSuccessfullyToMessageResolver<TParent>;
  user?: ActiveSuccessfullyToUserResolver<TParent>;
}

export interface ActiveSuccessfullyToMessageResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ActiveSuccessfullyToUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
