var knex = require('./knex');

module.exports = {
    //Get all active pins
    getPins: function() {
        return knex('pins').where('active', true);
    },
    //Adds a pin to db
    addPin: function(pin){
        return knex('pins').insert(pin);
    }
};
