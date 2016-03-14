
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    knex('users').insert(
      {
        username: 'Admin1',
        email: 'millsmcilroy@gmail.com',
        password: 'test',
        drops: 0,
        pickups: 0,
        admin: true,
        banned: false
      }),
    knex('users').insert(
      {
        username: 'Admin2',
        email: 'jonh1016@gmail.com',
        password: 'test',
        drops: 0,
        pickups: 0,
        admin: true,
        banned: false
      }),
    knex('users').insert(
      {
        username: 'Admin2',
        email: 'jonh1016@gmail.com',
        password: 'test',
        drops: 0,
        pickups: 0,
        admin: true,
        banned: false
      }),
    knex('users').insert(
      {
        name: 'Puget Sound',
        admin: false
      })
  );
};

/*
    table.increments('user_id');
    table.string('username');
    table.string('email');
    table.string('password');
    table.integer('drops');
    table.integer('pickups');
    table.boolean('admin');//true if admin
    table.boolean('banned');//true if banned
  });*/