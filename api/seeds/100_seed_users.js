exports.seed = function (knex) {
  return knex("users").insert({
    email: "chestercarmer@icloud.com",
    username: "demo_user",
    password: "$2a$10$gb5fir4M9RfJWENlydxKNOBcp3TI.A.ps20JPyiLE46nL7yRw9FlC", // Synapse1
  });
};
