import { Model } from "objection";

export class SetlistSong extends Model {
  id: string;
  song_id: string;
  setlist_id: string;
  sort_order: number;

  static get tableName() {
    return "setlist_songs";
  }
}
