import { Model } from "objection";

export class Song extends Model {
  id: string;
  title: string;
  key: string;
  band_id: string;

  setlist_song_id?: string;
  sort_order?: number;

  createdAt: string;
  updatedAt: string;

  static get tableName() {
    return "songs";
  }
}
