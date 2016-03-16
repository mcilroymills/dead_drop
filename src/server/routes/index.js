var express = require('express');
var router = express.Router();
var queries = require('../db/queries');
var helpers = require('../db/lib/helper');

router.get('/', function(req, res, next) {
    res.render('landing', { title: 'The Landing Page'});
});

router.get('/home', helpers.ensureAuthenticated, function(req, res, next) {
  queries.getPins().then(function(result){
    res.render('index', { title: 'The Main (index) Page', pins: JSON.stringify(result) });
  });
});

// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'The Login Page' });
// });

router.get('/myaccount', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('myaccount', { title: 'The My Account Page' });
});

router.get('/editaccount', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('editaccount', { title: 'The Edit Account Page' });
});

router.get('/mydrops', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('mydrops', { title: 'The My Drops Page' });
});

router.get('/mypickups', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('mypickups', { title: 'The My Pick-ups Page' });
});

router.get('/newpin', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('newpin', { title: 'The New Pin Page', user: req.user});
});

router.get('/pickup/:id', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('pickupPin', { title: 'Pick up a drop!', pin_id: req.params.id, user:req.user});
});



module.exports = router;
