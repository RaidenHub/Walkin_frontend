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
};

export type Cart = {
  __typename?: 'Cart';
  _id?: Maybe<Scalars['String']>;
  dips?: Maybe<Array<Maybe<Dips>>>;
  extras?: Maybe<Array<Maybe<Extras>>>;
  foodId?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  sauces?: Maybe<Array<Maybe<Sauces>>>;
  toppings?: Maybe<Array<Maybe<Toppings>>>;
  userId?: Maybe<Scalars['String']>;
};

export type Dip = {
  __typename?: 'Dip';
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Dips = {
  __typename?: 'Dips';
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type DipsInput = {
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type Extra = {
  __typename?: 'Extra';
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Extras = {
  __typename?: 'Extras';
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type ExtrasInput = {
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type Food = {
  __typename?: 'Food';
  _id: Scalars['ID'];
  category: Scalars['String'];
  description: Scalars['String'];
  dips?: Maybe<Array<Dip>>;
  discount: Scalars['Float'];
  extras?: Maybe<Array<Extra>>;
  foodType: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  numberOfFreeDips: Scalars['Int'];
  numberOfFreeExtras: Scalars['Int'];
  numberOfFreeSauces: Scalars['Int'];
  numberOfFreeToppings: Scalars['Int'];
  price: Scalars['Float'];
  sauces?: Maybe<Array<Sauce>>;
  status: Scalars['String'];
  toppings?: Maybe<Array<Topping>>;
};

export type Items = {
  __typename?: 'Items';
  foodId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export type ItemsInput = {
  foodId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
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
export type MutationAddToOrderArgs = {
  foodId?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<ItemsInput>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  token?: InputMaybe<Scalars['String']>;
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
  dips?: InputMaybe<Array<InputMaybe<DipsInput>>>;
  extras?: InputMaybe<Array<InputMaybe<ExtrasInput>>>;
  foodId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
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
  foodId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  items?: InputMaybe<ItemsInput>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  token?: InputMaybe<Scalars['String']>;
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
  id: Scalars['ID'];
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
  discount?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<Items>>>;
  paymentId?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
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

export type Sauce = {
  __typename?: 'Sauce';
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Sauces = {
  __typename?: 'Sauces';
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type SaucesInput = {
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type Shopper = {
  __typename?: 'Shopper';
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

export type Topping = {
  __typename?: 'Topping';
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Toppings = {
  __typename?: 'Toppings';
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type ToppingsInput = {
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
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

export type DipsInput = {
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type ExtrasInput = {
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type SaucesInput = {
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type ToppingsInput = {
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type MyqueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyqueryQuery = { __typename?: 'Query', getFoods?: Array<{ __typename?: 'Food', category: string, description: string, dips?: Array<{ __typename?: 'Dip', name: string, price: number }> | null }> | null };


export const MyqueryDoc = gql`
    query myquery {
  getFoods {
    dips {
      name
      price
    }
    category
    description
  }
}
    `;
export const myquery = (
            options: Omit<
              WatchQueryOptions<MyqueryQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<MyqueryQuery> & {
              query: ObservableQuery<
                MyqueryQuery,
                MyqueryQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: MyqueryDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<MyqueryQuery> & {
                query: ObservableQuery<
                  MyqueryQuery,
                  MyqueryQueryVariables
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
        
              export const Asyncmyquery = (
                options: Omit<
                  QueryOptions<MyqueryQueryVariables>,
                  "query"
                >
              ) => {
                return client.query<MyqueryQuery>({query: MyqueryDoc, ...options})
              }
            