import { Model } from "objection";
import { Song } from "../songs/Song";

export class Setlist extends Model {
  id: string;
  setlist_name: string;
  band_id: string;
  createdAt: string;
  updatedAt: string;
  songs: Song[];

  static get tableName() {
    return "setlists";
  }
}
