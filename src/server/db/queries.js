var knex = require('./knex');

module.exports = {
    //Get a single pin
    getPin: function(pin_id) {
        return knex('pins').innerJoin('users', 'users.user_id', 'pins.dropper_id').where('pin_id', pin_id);
    },
    //Get all active pins & user info
    getPins: function() {
        return knex('pins').innerJoin('users', 'users.user_id', 'pins.dropper_id').where('active', true);
    },
    //Adds a pin to db
    addPin: function(pin){
        return knex('pins').insert(pin);
    },
    //Changes a pin to its picked-up state
    pickupPin: function(pin_id, pin){
        return knex('pins').where('pin_id', pin_id).update(pin);
    }

};
