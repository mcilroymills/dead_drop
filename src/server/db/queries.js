var knex = require('./knex');

module.exports = {
    //Get all active pins & user info
    getPins: function() {
        return knex('pins').innerJoin('users', 'users.user_id', 'pins.dropper_id').where('active', true);
    },
    //Adds a pin to db
    addPin: function(pin){
        return knex('pins').insert(pin);
    }
};
