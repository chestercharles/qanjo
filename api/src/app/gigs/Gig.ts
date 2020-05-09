import { Model } from "objection";
import { GigSet } from "../types";

export class Gig extends Model {
  id: string;
  gig_name: string;
  location_name: string;
  date: string;
  band_id: string;
  createdAt: string;
  updatedAt: string;
  gigSets: GigSet[];

  static get tableName() {
    return "gigs";
  }
}
