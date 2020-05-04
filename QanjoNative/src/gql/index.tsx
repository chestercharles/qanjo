import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
  currentUser?: Maybe<User>;
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
  user: User;
};

export type CurrentUserQueryVariables = {};


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'email'>
    & { bands: Array<Maybe<(
      { __typename?: 'Band' }
      & Pick<Band, 'band_name'>
    )>> }
  )> }
);

export type LoginMutationVariables = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  ) }
);


export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    username
    email
    bands {
      band_name
    }
  }
}
    `;
export type CurrentUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CurrentUserQuery, CurrentUserQueryVariables>, 'query'>;

    export const CurrentUserComponent = (props: CurrentUserComponentProps) => (
      <ApolloReactComponents.Query<CurrentUserQuery, CurrentUserQueryVariables> query={CurrentUserDocument} {...props} />
    );
    
export type CurrentUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CurrentUserQuery, CurrentUserQueryVariables>
    } & TChildProps;
export function withCurrentUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CurrentUserQuery,
  CurrentUserQueryVariables,
  CurrentUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CurrentUserQuery, CurrentUserQueryVariables, CurrentUserProps<TChildProps, TDataName>>(CurrentUserDocument, {
      alias: 'currentUser',
      ...operationOptions
    });
};
export type CurrentUserQueryResult = ApolloReactCommon.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;