
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pins').del(),

    knex('pins').insert(
      {
        pin_id: 1,
        latitude: 39.732219,
        longitude: -104.9673627,
        active: true,
        missing: false,
        picked_up: false,
        dropper_id: 2,
        receiver_id: null
      }),
    knex('pins').insert(
      {
        pin_id: 2,
        latitude: 39.739065,
        longitude: -104.9898202,
        active: true,
        missing: false,
        picked_up: false,
        dropper_id: 1,
        receiver_id: null
      }),
    knex('pins').insert(
      {
        pin_id: 3,
        latitude: 39.733463,
        longitude: -104.9947773,
        active: true,
        missing: false,
        picked_up: false,
        dropper_id: 3,
        receiver_id: null
      })
  );
};