exports.up = async function (knex) {
  await knex.schema.table("gig_sets", function (t) {
    t.uuid("setlist_id").references("id").inTable("setlists");
  });
  return;
};

exports.down = async function (knex) {
  await knex.schema.table("gig_sets", function (t) {
    t.dropColumn("setlist_id");
  });
  return;
};
