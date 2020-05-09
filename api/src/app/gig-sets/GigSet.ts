import { Model } from "objection";

export class GigSet extends Model {
  id: string;
  set_name: string;
  set_time: string;
  gig_id: string;
  createdAt: string;
  updatedAt: string;

  static get tableName() {
    return "gig_sets";
  }
}
