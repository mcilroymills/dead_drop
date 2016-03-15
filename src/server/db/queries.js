var knex = require('./knex');

module.exports = {
    //Get all pins
    getPins: function() {
        return knex('pins');
    },
    //Adds a pin to db
    addPin: function(){
        return knex('pins');
    }
};
