import { Gig } from "./Gig";

export async function getBandGigs(band_id: string) {
  return Gig.query().where({ band_id });
}
