var bcrypt = require("bcrypt");

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    knex('users').insert(
      {
        username: 'Admin1',
        email: 'millsmcilroy@gmail.com',
        password: bcrypt.hashSync('test', 10),
        drops: 0,
        pickups: 0,
        admin: true,
        banned: false
      }),
    knex('users').insert(
      {
        username: 'Admin2',
        email: 'jonh1016@gmail.com',
        password: bcrypt.hashSync('test', 10),
        drops: 0,
        pickups: 0,
        admin: true,
        banned: false
      }),
    knex('users').insert(
      {
        username: 'regularUser1',
        email: 'fake1@faker.com',
        password: bcrypt.hashSync('test', 10),
        drops: 0,
        pickups: 0,
        admin: false,
        banned: false
      }),
    knex('users').insert(
      {
        username: 'regularUser2',
        email: 'fake2@faker.com',
        password: bcrypt.hashSync('test', 10),
        drops: 0,
        pickups: 0,
        admin: false,
        banned: false
      })
  );
};
