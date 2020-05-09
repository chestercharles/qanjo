import { Model } from "objection";
import { Band } from "../bands/Band";

export class User extends Model {
  id: string;
  username: string;
  password: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  default_band_id?: string;
  bands: Band[];

  static get tableName() {
    return "users";
  }
}
