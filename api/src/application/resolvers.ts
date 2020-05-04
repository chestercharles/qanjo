import {
  getUsers,
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

export const resolvers: Resolvers = {
  Query: {
    hello: () => "howdy",
    getUsers: (root, args, ctx, info) => {
      return getUsers();
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
    login: async (parent, args, ctx, info) => {
      const token = await getTokenFromCredentials(args.username, args.password);
      return { token };
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
