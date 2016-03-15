var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

router.get('/', function(req, res, next) {
    res.render('index');
  });

router.get('/api', function(req, res, next) {
  queries.getPins()
  .then(function(pinsList) {
    res.json(pinsList);
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});



module.exports = router;