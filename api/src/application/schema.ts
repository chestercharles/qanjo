import { gql } from "apollo-server-express";

export const schema = gql(`
  type Query {
    currentUser: User
  }

  type Mutation {
    createBand(band_name: String!, owner_id: String!): Band!
    createUser(username: String!, password: String!, email: String!): User!
    createSong(title: String!, key: String!, band_id: String!): Song!
    createSetlist(setlist_name: String!, band_id: String!): Setlist!

    addSongToSetlist(song_id: String!, setlist_id: String!, sort_order: Int!): Setlist!
    removeSongFromSetlist(song_id: String!, setlist_id: String!): Setlist!
    updateSetlistSongSortOrder(setlist_song_id: String!, sort_order: Int!): Setlist!

    addBandMember(user_id: String!, band_id: String!): Band!
    removeBandMember(user_id: String!, band_id: String!): Band!

    login(username: String!, password: String!): AuthPayload!
  }

  type User {
    id: String!
    username: String!
    email: String!
    bands: [Band]!
  }

  type Band {
    id: String!
    band_name: String!
    songs: [Song]!
    setlists: [Setlist]!
    band_members: [User]!
  }

  type Song {
    id: String!
    title: String!
    key: String!
    setlist_song_id: String
    sort_order: Int
  }

  type Setlist {
    id: String!
    setlist_name: String!
    songs: [Song]!
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`);
