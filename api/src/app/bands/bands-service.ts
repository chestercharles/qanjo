import { Band } from "./Band";
import { BandMember } from "./BandMember";
import { User } from "../users/User";

export async function getUserBands(user_id: string) {
  const bands = await Band.query()
    .select("bands.*")
    .innerJoin("band_members", "band_members.band_id", "bands.id")
    .where("band_members.user_id", user_id);
  return bands;
}

export async function createBand({
  band_name,
  owner_id,
}: {
  band_name: string;
  owner_id: string;
}) {
  return Band.transaction(async (trx) => {
    const band = await Band.query().insert({ band_name, owner_id });
    await User.query(trx)
      .where({ id: owner_id })
      .update({ default_band_id: band.id });
    return band;
  });
}

export async function addBandMember({
  band_id,
  user_id,
}: {
  band_id: string;
  user_id: string;
}) {
  return BandMember.transaction(async (trx) => {
    await BandMember.query(trx).insert({ band_id, user_id });
    const [band] = await Band.query(trx).where({ id: band_id });
    return band;
  });
}

export async function removeBandMember({
  band_id,
  user_id,
}: {
  band_id: string;
  user_id: string;
}) {
  return BandMember.transaction(async (trx) => {
    await BandMember.query(trx).delete().where({ user_id, band_id });
    const [band] = await Band.query(trx).where({ id: band_id });
    return band;
  });
}

export async function getBand(band_id: string) {
  const [band] = await Band.query().where({ id: band_id });
  return band;
}
