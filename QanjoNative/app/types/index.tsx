import gql from 'graphql-tag';
export type Maybe<T> = T | null;
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


