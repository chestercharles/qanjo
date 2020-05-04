import {
  createUser,
  getTokenFromCredentials,
  getUsersInBand,
} from "./users/user-service";
import {
  getUserBands,
  createBand,
  addBandMember,
  removeBandMember,
} from "./bands/bands-service";
import {
  getBandSongs,
  getSetlistSongs,
  createSong,
} from "./songs/songs-service";
import {
  getBandSetlists,
  createSetlist,
  addSongToSetlist,
  getSetlist,
  removeSongFromSetlist,
  updateSetlistSongSortOrder,
} from "./setlists/setlists-service";
import { Resolvers } from "./types";
import { AuthenticationError } from "apollo-server-express";

export const resolvers: Resolvers = {
  Query: {
    currentUser: (root, args, ctx, info) => {
      if (!ctx.user) {
        throw new AuthenticationError("Not logged in");
      }
      return ctx.user;
    },
  },
  Mutation: {
    createBand: (parent, args, ctx, info) => {
      return createBand(args);
    },
    createUser: (parent, args, ctx, info) => {
      return createUser(args);
    },
    createSong: (parent, args, ctx, info) => {
      return createSong(args);
    },
    createSetlist: (parent, args, ctx, info) => {
      return createSetlist(args);
    },
    addSongToSetlist: (parent, args, ctx, info) => {
      return addSongToSetlist(args);
    },
    removeSongFromSetlist: (parent, args, ctx, info) => {
      return removeSongFromSetlist(args);
    },
    updateSetlistSongSortOrder: (parent, args, ctx, info) => {
      return updateSetlistSongSortOrder(args);
    },
    addBandMember: (parent, args, ctx, info) => {
      return addBandMember(args);
    },
    removeBandMember: (parent, args, ctx, info) => {
      return removeBandMember(args);
    },
    login: (parent, args, ctx, info) => {
      return getTokenFromCredentials(args.username, args.password);
    },
  },
  User: {
    bands: (user, args, ctx, info) => {
      return getUserBands(user.id);
    },
  },
  Band: {
    songs: (band, args, ctx, info) => {
      return getBandSongs(band.id);
    },
    setlists: (band, args, ctx, info) => {
      return getBandSetlists(band.id);
    },
    band_members: (band, args, ctx, info) => {
      return getUsersInBand(band.id);
    },
  },
  Setlist: {
    songs: (setlist, args, ctx, info) => {
      return getSetlistSongs(setlist.id);
    },
  },
};
