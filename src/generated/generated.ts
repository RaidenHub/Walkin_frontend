import client from "../client";
import type {
        ApolloQueryResult, ObservableQuery, WatchQueryOptions, QueryOptions
      } from "@apollo/client";
import { readable } from "svelte/store";
import type { Readable } from "svelte/store";
import gql from "graphql-tag"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Cart = {
  __typename?: 'Cart';
  _id?: Maybe<Scalars['String']>;
  dips?: Maybe<Array<Maybe<Dips>>>;
  extras?: Maybe<Array<Maybe<Extras>>>;
  price?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  sauces?: Maybe<Array<Maybe<Sauces>>>;
  shopId?: Maybe<Scalars['String']>;
  toppings?: Maybe<Array<Maybe<Toppings>>>;
  userId?: Maybe<Scalars['String']>;
};

export type CartInput = {
  dips?: InputMaybe<Array<InputMaybe<DipsCartInput>>>;
  extras?: InputMaybe<Array<InputMaybe<ExtrasCartInput>>>;
  price?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  sauces?: InputMaybe<Array<InputMaybe<SaucesCartInput>>>;
  shopId?: InputMaybe<Scalars['String']>;
  toppings?: InputMaybe<Array<InputMaybe<ToppingsCartInput>>>;
  userId?: InputMaybe<Scalars['String']>;
};

export type Dips = {
  __typename?: 'Dips';
  isAvailable?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type DipsCartInput = {
  isAvailable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type DipsInput = {
  isAvailable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type Extras = {
  __typename?: 'Extras';
  isAvailable?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type ExtrasCartInput = {
  isAvailable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type ExtrasInput = {
  isAvailable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type Food = {
  __typename?: 'Food';
  _id?: Maybe<Scalars['String']>;
  category: Scalars['String'];
  description: Scalars['String'];
  dips?: Maybe<Array<Maybe<Dips>>>;
  discount: Scalars['Float'];
  extras?: Maybe<Array<Maybe<Extras>>>;
  foodType: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  numberOfFreeDips: Scalars['Int'];
  numberOfFreeExtras: Scalars['Int'];
  numberOfFreeSauces: Scalars['Int'];
  numberOfFreeToppings: Scalars['Int'];
  price: Scalars['Float'];
  sauces?: Maybe<Array<Maybe<Sauces>>>;
  status: Scalars['String'];
  toppings?: Maybe<Array<Maybe<Toppings>>>;
};

/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type Mutation = {
  __typename?: 'Mutation';
  addToCart?: Maybe<Cart>;
  addToOrder?: Maybe<Order>;
  createFood?: Maybe<Food>;
  createShopper?: Maybe<Shopper>;
  createUser?: Maybe<User>;
  deleteFood?: Maybe<Food>;
  deleteOrder?: Maybe<Order>;
  deleteShopper?: Maybe<Shopper>;
  deleteUser?: Maybe<User>;
  login?: Maybe<AccessToken>;
  removeFromCart?: Maybe<Cart>;
  signup?: Maybe<AccessToken>;
  updateCart?: Maybe<Cart>;
  updateFood?: Maybe<Food>;
  updateOrder?: Maybe<Order>;
  updateShopper?: Maybe<Shopper>;
  updateUser?: Maybe<User>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationAddToCartArgs = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dips?: InputMaybe<Array<InputMaybe<DipsInput>>>;
  extras?: InputMaybe<Array<InputMaybe<ExtrasInput>>>;
  price?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  sauces?: InputMaybe<Array<InputMaybe<SaucesInput>>>;
  shopId?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
  toppings?: InputMaybe<Array<InputMaybe<ToppingsInput>>>;
  userId?: InputMaybe<Scalars['String']>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationAddToOrderArgs = {
  createdAt?: InputMaybe<Scalars['String']>;
  customeName?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Int']>;
  items?: InputMaybe<Array<InputMaybe<CartInput>>>;
  paymentId?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<Scalars['String']>;
  shopId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationCreateFoodArgs = {
  category: Scalars['String'];
  description: Scalars['String'];
  dips?: InputMaybe<Array<DipsInput>>;
  discount: Scalars['Float'];
  extras?: InputMaybe<Array<ExtrasInput>>;
  foodType: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  numberOfFreeDips: Scalars['Int'];
  numberOfFreeExtras: Scalars['Int'];
  numberOfFreeSauces: Scalars['Int'];
  numberOfFreeToppings: Scalars['Int'];
  price: Scalars['Float'];
  sauces?: InputMaybe<Array<SaucesInput>>;
  status: Scalars['String'];
  toppings?: InputMaybe<Array<ToppingsInput>>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationCreateShopperArgs = {
  address?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  subCategory?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationCreateUserArgs = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
  zip?: InputMaybe<Scalars['String']>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationDeleteFoodArgs = {
  id: Scalars['ID'];
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationDeleteOrderArgs = {
  id?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['String']>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationDeleteShopperArgs = {
  id: Scalars['ID'];
  token?: InputMaybe<Scalars['String']>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['String']>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationLoginArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationRemoveFromCartArgs = {
  id: Scalars['ID'];
  token: Scalars['String'];
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationSignupArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Scalars['String']>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationUpdateCartArgs = {
  _id: Scalars['String'];
  dips?: InputMaybe<Array<InputMaybe<DipsInput>>>;
  extras?: InputMaybe<Array<InputMaybe<ExtrasInput>>>;
  foodId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  sauces?: InputMaybe<Array<InputMaybe<SaucesInput>>>;
  token: Scalars['String'];
  toppings?: InputMaybe<Array<InputMaybe<ToppingsInput>>>;
  userId?: InputMaybe<Scalars['String']>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationUpdateFoodArgs = {
  category: Scalars['String'];
  description: Scalars['String'];
  dips?: InputMaybe<Array<DipsInput>>;
  discount: Scalars['Float'];
  extras?: InputMaybe<Array<ExtrasInput>>;
  foodType: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  numberOfFreeDips: Scalars['Int'];
  numberOfFreeExtras: Scalars['Int'];
  numberOfFreeSauces: Scalars['Int'];
  numberOfFreeToppings: Scalars['Int'];
  price: Scalars['Float'];
  sauces?: InputMaybe<Array<SaucesInput>>;
  status: Scalars['String'];
  toppings?: InputMaybe<Array<ToppingsInput>>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationUpdateOrderArgs = {
  createdAt?: InputMaybe<Scalars['String']>;
  customeName?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<InputMaybe<CartInput>>>;
  paymentId?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<Scalars['String']>;
  shopId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationUpdateShopperArgs = {
  address?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  subCategory?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationUpdateUserArgs = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  _id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  customeName?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<Cart>>>;
  paymentId?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  shopId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type Query = {
  __typename?: 'Query';
  getCart?: Maybe<Array<Cart>>;
  getCartById?: Maybe<Cart>;
  getFood?: Maybe<Food>;
  getFoods?: Maybe<Array<Food>>;
  getOrder?: Maybe<Array<Maybe<Order>>>;
  getOrderById?: Maybe<Order>;
  getShopper?: Maybe<Shopper>;
  getShoppers?: Maybe<Array<Maybe<Shopper>>>;
  getUser?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetCartArgs = {
  token: Scalars['String'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetCartByIdArgs = {
  id: Scalars['String'];
  token?: InputMaybe<Scalars['String']>;
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetFoodArgs = {
  id: Scalars['ID'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetOrderArgs = {
  token?: InputMaybe<Scalars['String']>;
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetOrderByIdArgs = {
  id?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetShopperArgs = {
  token: Scalars['String'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetUserArgs = {
  token: Scalars['String'];
};

export type Sauces = {
  __typename?: 'Sauces';
  isAvailable?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type SaucesCartInput = {
  isAvailable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type SaucesInput = {
  isAvailable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type Shopper = {
  __typename?: 'Shopper';
  _id?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  subCategory?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type Toppings = {
  __typename?: 'Toppings';
  isAvailable?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type ToppingsCartInput = {
  isAvailable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type ToppingsInput = {
  isAvailable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type AccessToken = {
  __typename?: 'accessToken';
  accessToken?: Maybe<Scalars['String']>;
};

export type FoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type FoodsQuery = { __typename?: 'Query', getFoods?: Array<{ __typename?: 'Food', _id?: string | null, category: string, description: string, status: string, foodType: string, image: string, name: string, price: number }> | null };

export type OrdersQueryVariables = Exact<{
  token?: InputMaybe<Scalars['String']>;
}>;


export type OrdersQuery = { __typename?: 'Query', getOrder?: Array<{ __typename?: 'Order', _id?: string | null, createdAt?: string | null, customeName?: string | null, total?: number | null, status?: string | null, paymentMethod?: string | null } | null> | null };

export type OrderIdQueryVariables = Exact<{
  token?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
}>;


export type OrderIdQuery = { __typename?: 'Query', getOrderById?: { __typename?: 'Order', _id?: string | null, createdAt?: string | null, customeName?: string | null, discount?: number | null, paymentId?: string | null, paymentMethod?: string | null, shopId?: string | null, status?: string | null, total?: number | null, userId?: string | null, items?: Array<{ __typename?: 'Cart', _id?: string | null, price?: number | null, productId?: string | null, quantity?: number | null, shopId?: string | null, userId?: string | null, dips?: Array<{ __typename?: 'Dips', name?: string | null, price?: number | null } | null> | null, extras?: Array<{ __typename?: 'Extras', name?: string | null, price?: number | null } | null> | null, sauces?: Array<{ __typename?: 'Sauces', name?: string | null, price?: number | null } | null> | null, toppings?: Array<{ __typename?: 'Toppings', name?: string | null, price?: number | null } | null> | null } | null> | null } | null };


export const FoodsDoc = gql`
    query foods {
  getFoods {
    _id
    category
    description
    status
    foodType
    image
    name
    price
  }
}
    `;
export const OrdersDoc = gql`
    query Orders($token: String) {
  getOrder(token: $token) {
    _id
    createdAt
    customeName
    total
    status
    paymentMethod
  }
}
    `;
export const OrderIdDoc = gql`
    query orderId($token: String, $id: String) {
  getOrderById(id: $id, token: $token) {
    _id
    createdAt
    customeName
    discount
    items {
      _id
      price
      productId
      quantity
      shopId
      userId
      dips {
        name
        price
      }
      extras {
        name
        price
      }
      sauces {
        name
        price
      }
      toppings {
        name
        price
      }
    }
    paymentId
    paymentMethod
    shopId
    status
    total
    userId
  }
}
    `;
export const foods = (
            options: Omit<
              WatchQueryOptions<FoodsQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<FoodsQuery> & {
              query: ObservableQuery<
                FoodsQuery,
                FoodsQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: FoodsDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<FoodsQuery> & {
                query: ObservableQuery<
                  FoodsQuery,
                  FoodsQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
              export const Asyncfoods = (
                options: Omit<
                  QueryOptions<FoodsQueryVariables>,
                  "query"
                >
              ) => {
                return client.query<FoodsQuery>({query: FoodsDoc, ...options})
              }
            
export const Orders = (
            options: Omit<
              WatchQueryOptions<OrdersQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<OrdersQuery> & {
              query: ObservableQuery<
                OrdersQuery,
                OrdersQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: OrdersDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<OrdersQuery> & {
                query: ObservableQuery<
                  OrdersQuery,
                  OrdersQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
              export const AsyncOrders = (
                options: Omit<
                  QueryOptions<OrdersQueryVariables>,
                  "query"
                >
              ) => {
                return client.query<OrdersQuery>({query: OrdersDoc, ...options})
              }
            
export const orderId = (
            options: Omit<
              WatchQueryOptions<OrderIdQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<OrderIdQuery> & {
              query: ObservableQuery<
                OrderIdQuery,
                OrderIdQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: OrderIdDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<OrderIdQuery> & {
                query: ObservableQuery<
                  OrderIdQuery,
                  OrderIdQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
              export const AsyncorderId = (
                options: Omit<
                  QueryOptions<OrderIdQueryVariables>,
                  "query"
                >
              ) => {
                return client.query<OrderIdQuery>({query: OrderIdDoc, ...options})
              }
            