import {
  createUser,
  getTokenFromCredentials,
  getUsersInBand,
  getTokenFromUser,
} from "./users/user-service";
import {
  getUserBands,
  createBand,
  addBandMember,
  removeBandMember,
  getBand,
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
import { getBandGigs } from "./gigs/gigs-service";
import { getGigGigSets } from "./gig-sets/gig-sets-service";

export const resolvers: Resolvers = {
  Query: {
    currentUser(root, args, ctx, info) {
      return ctx.user || null;
    },
    currentBand(root, args, ctx, info) {
      if (ctx.user?.default_band_id) {
        return getBand(ctx.user.default_band_id);
      }
      return null;
    },
    currentSetlists(root, args, ctx, info) {
      if (ctx.user?.default_band_id) {
        return getBandSetlists(ctx.user.default_band_id);
      }
      return [];
    },
    currentSongs(root, args, ctx, info) {
      if (ctx.user?.default_band_id) {
        return getBandSongs(ctx.user.default_band_id);
      }
      return [];
    },
    currentGigs(root, args, ctx, info) {
      if (ctx.user?.default_band_id) {
        return getBandGigs(ctx.user.default_band_id);
      }
      return [];
    },
  },
  Mutation: {
    setUserDefaultBand(parent, args, ctx, info) {
      return null;
    },
    createBand(parent, args, ctx, info) {
      return createBand(args);
    },
    createUser: async (parent, args, ctx, info) => {
      const user = await createUser(args);
      const token = await getTokenFromUser(user);
      return {
        user,
        token,
      };
    },
    createSong(parent, args, ctx, info) {
      return createSong(args);
    },
    createSetlist(parent, args, ctx, info) {
      return createSetlist(args);
    },
    addSongToSetlist(parent, args, ctx, info) {
      return addSongToSetlist(args);
    },
    removeSongFromSetlist(parent, args, ctx, info) {
      return removeSongFromSetlist(args);
    },
    updateSetlistSongSortOrder(parent, args, ctx, info) {
      return updateSetlistSongSortOrder(args);
    },
    addBandMember(parent, args, ctx, info) {
      return addBandMember(args);
    },
    removeBandMember(parent, args, ctx, info) {
      return removeBandMember(args);
    },
    login(parent, args, ctx, info) {
      return getTokenFromCredentials(args.username, args.password);
    },
  },
  User: {
    bands(user, args, ctx, info) {
      return getUserBands(user.id);
    },
    defaultBand(user, args, ctx, info) {
      if (user.default_band_id) {
        return getBand(user.default_band_id);
      } else {
        return null;
      }
    },
  },
  Band: {
    songs(band, args, ctx, info) {
      return getBandSongs(band.id);
    },
    setlists(band, args, ctx, info) {
      return getBandSetlists(band.id);
    },
    band_members(band, args, ctx, info) {
      return getUsersInBand(band.id);
    },
  },
  Setlist: {
    songs(setlist, args, ctx, info) {
      return getSetlistSongs(setlist.id);
    },
  },
  Gig: {
    gigSets(gig, args, ctx, info) {
      return getGigGigSets(gig.id);
    },
  },
  GigSet: {
    setlist(gigSet, args, ctx, info) {
      if (gigSet.setlist_id) {
        return getSetlist(gigSet.setlist_id);
      }
      return null;
    },
  },
};
