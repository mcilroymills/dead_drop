var express = require('express');
var router = express.Router();
var queries = require('../queries');

router.get('/', function(req, res, next) {
  queries.Pins()
  .then(function(pinsList) {
    console.log('pinsList:',pinsList);
    res.render('index', {title: 'The Pin-Testing Page', pinsList: pinsList});
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

module.exports = router;