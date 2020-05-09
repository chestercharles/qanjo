exports.up = async function (knex) {
  await knex.schema.table("users", function (t) {
    t.uuid("default_band_id").references("id").inTable("bands");
  });
  return;
};

exports.down = async function (knex) {
  await knex.schema.table("users", function (t) {
    t.dropColumn("default_band_id");
  });
  return;
};
