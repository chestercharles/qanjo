import { Model } from "objection";
import { Song } from "../songs/Song";
import { Setlist } from "../setlists/Setlist";
import { User } from "../users/User";

export class Band extends Model {
  id: string;
  band_name: string;
  owner_id: string;
  createdAt: string;
  updatedAt: string;
  songs: Song[];
  setlists: Setlist[];
  band_members: User[];

  static get tableName() {
    return "bands";
  }
}
