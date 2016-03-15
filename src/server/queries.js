var knex = require('./db/knex');

function Pins () {
  return knex('pins');
}
 module.exports = {Pins: Pins};