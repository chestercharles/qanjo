import { gql } from "apollo-server-express";

export const schema = gql(`
  type Query {
    currentUser: User
    currentBand: Band
    currentSetlists: [Setlist!]!
    currentSongs: [Song!]!
    currentGigs: [Gig!]!
  }

  type Mutation {
    setUserDefaultBand(band_id: String!): Band!

    createBand(band_name: String!, owner_id: String!): Band!
    createUser(username: String!, password: String!, email: String!): AuthPayload!
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
    defaultBand: Band
    default_band_id: String
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

  type Gig {
    id: String!
    gig_name: String!
    location_name: String!
    date: String!
    gigSets: [GigSet]!
  }

  type GigSet {
    id: String!
    set_name: String!
    set_time: String!
    setlist_id: String
    setlist: Setlist
  }
`);
