exports.up = async function (knex) {
  await knex.schema.table("users", function (t) {
    t.string("email").notNullable();
  });
  return;
};

exports.down = async function (knex) {
  await knex.schema.table("users", function (t) {
    t.dropColumn("email");
  });
  return;
};
