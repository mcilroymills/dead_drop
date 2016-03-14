var knex = require('./knex');

module.exports = {
    //Get all restaurants
    getPins: function(req, res){
        return knex('pins');
    }

};
