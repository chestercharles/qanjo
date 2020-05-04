import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  getUsers?: Maybe<Array<Maybe<User>>>;
};

export type Mutation = {
   __typename?: 'Mutation';
  createBand: Band;
  createUser: User;
  createSong: Song;
  createSetlist: Setlist;
  addSongToSetlist: Setlist;
  removeSongFromSetlist: Setlist;
  updateSetlistSongSortOrder: Setlist;
  addBandMember: Band;
  removeBandMember: Band;
  login: AuthPayload;
};


export type MutationCreateBandArgs = {
  band_name: Scalars['String'];
  owner_id: Scalars['String'];
};


export type MutationCreateUserArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationCreateSongArgs = {
  title: Scalars['String'];
  key: Scalars['String'];
  band_id: Scalars['String'];
};


export type MutationCreateSetlistArgs = {
  setlist_name: Scalars['String'];
  band_id: Scalars['String'];
};


export type MutationAddSongToSetlistArgs = {
  song_id: Scalars['String'];
  setlist_id: Scalars['String'];
  sort_order: Scalars['Int'];
};


export type MutationRemoveSongFromSetlistArgs = {
  song_id: Scalars['String'];
  setlist_id: Scalars['String'];
};


export type MutationUpdateSetlistSongSortOrderArgs = {
  setlist_song_id: Scalars['String'];
  sort_order: Scalars['Int'];
};


export type MutationAddBandMemberArgs = {
  user_id: Scalars['String'];
  band_id: Scalars['String'];
};


export type MutationRemoveBandMemberArgs = {
  user_id: Scalars['String'];
  band_id: Scalars['String'];
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
   __typename?: 'User';
  id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  bands: Array<Maybe<Band>>;
};

export type Band = {
   __typename?: 'Band';
  id: Scalars['String'];
  band_name: Scalars['String'];
  songs: Array<Maybe<Song>>;
  setlists: Array<Maybe<Setlist>>;
  band_members: Array<Maybe<User>>;
};

export type Song = {
   __typename?: 'Song';
  id: Scalars['String'];
  title: Scalars['String'];
  key: Scalars['String'];
  setlist_song_id?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
};

export type Setlist = {
   __typename?: 'Setlist';
  id: Scalars['String'];
  setlist_name: Scalars['String'];
  songs: Array<Maybe<Song>>;
};

export type AuthPayload = {
   __typename?: 'AuthPayload';
  token: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Query: ResolverTypeWrapper<{}>,
  Mutation: ResolverTypeWrapper<{}>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  User: ResolverTypeWrapper<User>,
  Band: ResolverTypeWrapper<Band>,
  Song: ResolverTypeWrapper<Song>,
  Setlist: ResolverTypeWrapper<Setlist>,
  AuthPayload: ResolverTypeWrapper<AuthPayload>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Query: {},
  Mutation: {},
  Int: Scalars['Int'],
  User: User,
  Band: Band,
  Song: Song,
  Setlist: Setlist,
  AuthPayload: AuthPayload,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  getUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createBand?: Resolver<ResolversTypes['Band'], ParentType, ContextType, RequireFields<MutationCreateBandArgs, 'band_name' | 'owner_id'>>,
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'username' | 'password' | 'email'>>,
  createSong?: Resolver<ResolversTypes['Song'], ParentType, ContextType, RequireFields<MutationCreateSongArgs, 'title' | 'key' | 'band_id'>>,
  createSetlist?: Resolver<ResolversTypes['Setlist'], ParentType, ContextType, RequireFields<MutationCreateSetlistArgs, 'setlist_name' | 'band_id'>>,
  addSongToSetlist?: Resolver<ResolversTypes['Setlist'], ParentType, ContextType, RequireFields<MutationAddSongToSetlistArgs, 'song_id' | 'setlist_id' | 'sort_order'>>,
  removeSongFromSetlist?: Resolver<ResolversTypes['Setlist'], ParentType, ContextType, RequireFields<MutationRemoveSongFromSetlistArgs, 'song_id' | 'setlist_id'>>,
  updateSetlistSongSortOrder?: Resolver<ResolversTypes['Setlist'], ParentType, ContextType, RequireFields<MutationUpdateSetlistSongSortOrderArgs, 'setlist_song_id' | 'sort_order'>>,
  addBandMember?: Resolver<ResolversTypes['Band'], ParentType, ContextType, RequireFields<MutationAddBandMemberArgs, 'user_id' | 'band_id'>>,
  removeBandMember?: Resolver<ResolversTypes['Band'], ParentType, ContextType, RequireFields<MutationRemoveBandMemberArgs, 'user_id' | 'band_id'>>,
  login?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'username' | 'password'>>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  bands?: Resolver<Array<Maybe<ResolversTypes['Band']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type BandResolvers<ContextType = any, ParentType extends ResolversParentTypes['Band'] = ResolversParentTypes['Band']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  band_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  songs?: Resolver<Array<Maybe<ResolversTypes['Song']>>, ParentType, ContextType>,
  setlists?: Resolver<Array<Maybe<ResolversTypes['Setlist']>>, ParentType, ContextType>,
  band_members?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SongResolvers<ContextType = any, ParentType extends ResolversParentTypes['Song'] = ResolversParentTypes['Song']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  setlist_song_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SetlistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Setlist'] = ResolversParentTypes['Setlist']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  setlist_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  songs?: Resolver<Array<Maybe<ResolversTypes['Song']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  Band?: BandResolvers<ContextType>,
  Song?: SongResolvers<ContextType>,
  Setlist?: SetlistResolvers<ContextType>,
  AuthPayload?: AuthPayloadResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
