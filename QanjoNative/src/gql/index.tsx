import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
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
  currentUser?: Maybe<User>;
  currentBand?: Maybe<Band>;
  currentSetlists: Array<Setlist>;
  currentSongs: Array<Song>;
  currentGigs: Array<Gig>;
};

export type Mutation = {
   __typename?: 'Mutation';
  setUserDefaultBand: Band;
  createBand: Band;
  createUser: AuthPayload;
  createSong: Song;
  createSetlist: Setlist;
  addSongToSetlist: Setlist;
  removeSongFromSetlist: Setlist;
  updateSetlistSongSortOrder: Setlist;
  addBandMember: Band;
  removeBandMember: Band;
  login: AuthPayload;
};


export type MutationSetUserDefaultBandArgs = {
  band_id: Scalars['String'];
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
  defaultBand?: Maybe<Band>;
  default_band_id?: Maybe<Scalars['String']>;
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

export type Gig = {
   __typename?: 'Gig';
  id: Scalars['String'];
  gig_name: Scalars['String'];
  location_name: Scalars['String'];
  date: Scalars['String'];
  gigSets: Array<Maybe<GigSet>>;
};

export type GigSet = {
   __typename?: 'GigSet';
  id: Scalars['String'];
  set_name: Scalars['String'];
  set_time: Scalars['String'];
  setlist_id?: Maybe<Scalars['String']>;
  setlist?: Maybe<Setlist>;
};

export type CreateBandMutationVariables = {
  band_name: Scalars['String'];
  owner_id: Scalars['String'];
};


export type CreateBandMutation = (
  { __typename?: 'Mutation' }
  & { createBand: (
    { __typename?: 'Band' }
    & Pick<Band, 'id' | 'band_name'>
  ) }
);

export type CreateSongMutationVariables = {
  title: Scalars['String'];
  key: Scalars['String'];
  band_id: Scalars['String'];
};


export type CreateSongMutation = (
  { __typename?: 'Mutation' }
  & { createSong: (
    { __typename?: 'Song' }
    & Pick<Song, 'id' | 'key' | 'title'>
  ) }
);

export type CreateUserMutationVariables = {
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email'>
    ) }
  ) }
);

export type CurrentBandQueryVariables = {};


export type CurrentBandQuery = (
  { __typename?: 'Query' }
  & { currentBand?: Maybe<(
    { __typename?: 'Band' }
    & Pick<Band, 'id' | 'band_name'>
  )> }
);

export type CurrentGigsQueryVariables = {};


export type CurrentGigsQuery = (
  { __typename?: 'Query' }
  & { currentGigs: Array<(
    { __typename?: 'Gig' }
    & Pick<Gig, 'id' | 'gig_name' | 'location_name' | 'date'>
  )> }
);

export type CurrentSetlistsQueryVariables = {};


export type CurrentSetlistsQuery = (
  { __typename?: 'Query' }
  & { currentSetlists: Array<(
    { __typename?: 'Setlist' }
    & Pick<Setlist, 'id' | 'setlist_name'>
  )> }
);

export type CurrentSongsQueryVariables = {};


export type CurrentSongsQuery = (
  { __typename?: 'Query' }
  & { currentSongs: Array<(
    { __typename?: 'Song' }
    & Pick<Song, 'id' | 'title' | 'key'>
  )> }
);

export type CurrentUserQueryVariables = {};


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email'>
    & { defaultBand?: Maybe<(
      { __typename?: 'Band' }
      & Pick<Band, 'id' | 'band_name'>
    )>, bands: Array<Maybe<(
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


export const CreateBandDocument = gql`
    mutation CreateBand($band_name: String!, $owner_id: String!) {
  createBand(band_name: $band_name, owner_id: $owner_id) {
    id
    band_name
  }
}
    `;
export type CreateBandMutationFn = ApolloReactCommon.MutationFunction<CreateBandMutation, CreateBandMutationVariables>;
export type CreateBandComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateBandMutation, CreateBandMutationVariables>, 'mutation'>;

    export const CreateBandComponent = (props: CreateBandComponentProps) => (
      <ApolloReactComponents.Mutation<CreateBandMutation, CreateBandMutationVariables> mutation={CreateBandDocument} {...props} />
    );
    
export type CreateBandProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateBandMutation, CreateBandMutationVariables>
    } & TChildProps;
export function withCreateBand<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateBandMutation,
  CreateBandMutationVariables,
  CreateBandProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateBandMutation, CreateBandMutationVariables, CreateBandProps<TChildProps, TDataName>>(CreateBandDocument, {
      alias: 'createBand',
      ...operationOptions
    });
};
export type CreateBandMutationResult = ApolloReactCommon.MutationResult<CreateBandMutation>;
export type CreateBandMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBandMutation, CreateBandMutationVariables>;
export const CreateSongDocument = gql`
    mutation CreateSong($title: String!, $key: String!, $band_id: String!) {
  createSong(title: $title, key: $key, band_id: $band_id) {
    id
    key
    title
  }
}
    `;
export type CreateSongMutationFn = ApolloReactCommon.MutationFunction<CreateSongMutation, CreateSongMutationVariables>;
export type CreateSongComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateSongMutation, CreateSongMutationVariables>, 'mutation'>;

    export const CreateSongComponent = (props: CreateSongComponentProps) => (
      <ApolloReactComponents.Mutation<CreateSongMutation, CreateSongMutationVariables> mutation={CreateSongDocument} {...props} />
    );
    
export type CreateSongProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateSongMutation, CreateSongMutationVariables>
    } & TChildProps;
export function withCreateSong<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateSongMutation,
  CreateSongMutationVariables,
  CreateSongProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateSongMutation, CreateSongMutationVariables, CreateSongProps<TChildProps, TDataName>>(CreateSongDocument, {
      alias: 'createSong',
      ...operationOptions
    });
};
export type CreateSongMutationResult = ApolloReactCommon.MutationResult<CreateSongMutation>;
export type CreateSongMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateSongMutation, CreateSongMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($username: String!, $password: String!, $email: String!) {
  createUser(username: $username, password: $password, email: $email) {
    token
    user {
      id
      username
      email
    }
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUserMutation, CreateUserMutationVariables>, 'mutation'>;

    export const CreateUserComponent = (props: CreateUserComponentProps) => (
      <ApolloReactComponents.Mutation<CreateUserMutation, CreateUserMutationVariables> mutation={CreateUserDocument} {...props} />
    );
    
export type CreateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>
    } & TChildProps;
export function withCreateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUserMutation, CreateUserMutationVariables, CreateUserProps<TChildProps, TDataName>>(CreateUserDocument, {
      alias: 'createUser',
      ...operationOptions
    });
};
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CurrentBandDocument = gql`
    query CurrentBand {
  currentBand {
    id
    band_name
  }
}
    `;
export type CurrentBandComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CurrentBandQuery, CurrentBandQueryVariables>, 'query'>;

    export const CurrentBandComponent = (props: CurrentBandComponentProps) => (
      <ApolloReactComponents.Query<CurrentBandQuery, CurrentBandQueryVariables> query={CurrentBandDocument} {...props} />
    );
    
export type CurrentBandProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CurrentBandQuery, CurrentBandQueryVariables>
    } & TChildProps;
export function withCurrentBand<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CurrentBandQuery,
  CurrentBandQueryVariables,
  CurrentBandProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CurrentBandQuery, CurrentBandQueryVariables, CurrentBandProps<TChildProps, TDataName>>(CurrentBandDocument, {
      alias: 'currentBand',
      ...operationOptions
    });
};
export type CurrentBandQueryResult = ApolloReactCommon.QueryResult<CurrentBandQuery, CurrentBandQueryVariables>;
export const CurrentGigsDocument = gql`
    query CurrentGigs {
  currentGigs {
    id
    gig_name
    location_name
    date
  }
}
    `;
export type CurrentGigsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CurrentGigsQuery, CurrentGigsQueryVariables>, 'query'>;

    export const CurrentGigsComponent = (props: CurrentGigsComponentProps) => (
      <ApolloReactComponents.Query<CurrentGigsQuery, CurrentGigsQueryVariables> query={CurrentGigsDocument} {...props} />
    );
    
export type CurrentGigsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CurrentGigsQuery, CurrentGigsQueryVariables>
    } & TChildProps;
export function withCurrentGigs<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CurrentGigsQuery,
  CurrentGigsQueryVariables,
  CurrentGigsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CurrentGigsQuery, CurrentGigsQueryVariables, CurrentGigsProps<TChildProps, TDataName>>(CurrentGigsDocument, {
      alias: 'currentGigs',
      ...operationOptions
    });
};
export type CurrentGigsQueryResult = ApolloReactCommon.QueryResult<CurrentGigsQuery, CurrentGigsQueryVariables>;
export const CurrentSetlistsDocument = gql`
    query CurrentSetlists {
  currentSetlists {
    id
    setlist_name
  }
}
    `;
export type CurrentSetlistsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CurrentSetlistsQuery, CurrentSetlistsQueryVariables>, 'query'>;

    export const CurrentSetlistsComponent = (props: CurrentSetlistsComponentProps) => (
      <ApolloReactComponents.Query<CurrentSetlistsQuery, CurrentSetlistsQueryVariables> query={CurrentSetlistsDocument} {...props} />
    );
    
export type CurrentSetlistsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CurrentSetlistsQuery, CurrentSetlistsQueryVariables>
    } & TChildProps;
export function withCurrentSetlists<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CurrentSetlistsQuery,
  CurrentSetlistsQueryVariables,
  CurrentSetlistsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CurrentSetlistsQuery, CurrentSetlistsQueryVariables, CurrentSetlistsProps<TChildProps, TDataName>>(CurrentSetlistsDocument, {
      alias: 'currentSetlists',
      ...operationOptions
    });
};
export type CurrentSetlistsQueryResult = ApolloReactCommon.QueryResult<CurrentSetlistsQuery, CurrentSetlistsQueryVariables>;
export const CurrentSongsDocument = gql`
    query CurrentSongs {
  currentSongs {
    id
    title
    key
  }
}
    `;
export type CurrentSongsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CurrentSongsQuery, CurrentSongsQueryVariables>, 'query'>;

    export const CurrentSongsComponent = (props: CurrentSongsComponentProps) => (
      <ApolloReactComponents.Query<CurrentSongsQuery, CurrentSongsQueryVariables> query={CurrentSongsDocument} {...props} />
    );
    
export type CurrentSongsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CurrentSongsQuery, CurrentSongsQueryVariables>
    } & TChildProps;
export function withCurrentSongs<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CurrentSongsQuery,
  CurrentSongsQueryVariables,
  CurrentSongsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CurrentSongsQuery, CurrentSongsQueryVariables, CurrentSongsProps<TChildProps, TDataName>>(CurrentSongsDocument, {
      alias: 'currentSongs',
      ...operationOptions
    });
};
export type CurrentSongsQueryResult = ApolloReactCommon.QueryResult<CurrentSongsQuery, CurrentSongsQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    id
    username
    email
    defaultBand {
      id
      band_name
    }
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