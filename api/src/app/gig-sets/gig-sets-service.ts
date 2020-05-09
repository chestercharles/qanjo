import { GigSet } from "./GigSet";

export async function getGigGigSets(gig_id: string) {
  const gigSets = await GigSet.query().where({ gig_id });
  return gigSets;
}
