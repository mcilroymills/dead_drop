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
    // console.log('Error:', err);
    return err;
  });
});

router.post('/newpin', function(req, res, next) {
  var newPin = req.body;

  //Hardcode these properties for now
  newPin.pin_image = '';
  newPin.active = true;
  newPin.missing = false;
  newPin.picked_up = false;
  newPin.dropper_id = 1;
  newPin.receiver_id = null;
  console.log(newPin);
  queries.addPin(newPin)
  .then(function(id) {
    res.redirect('/home');
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });

});

module.exports = router;