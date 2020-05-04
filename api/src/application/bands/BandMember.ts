import { Model } from "objection";

export class BandMember extends Model {
  id: string;
  band_id: string;
  user_id: string;
  createdAt: string;
  updatedAt: string;

  static get tableName() {
    return "band_members";
  }
}
