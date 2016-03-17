var express = require('express');
var router = express.Router();
var queries = require('../db/queries');
var helpers = require('../db/lib/helper');

router.get('/', function(req, res, next) {
    res.redirect('/login');
});

router.get('/home', helpers.ensureAuthenticated, function(req, res, next) {
  console.log(req.session);
  queries.getPins().then(function(result){
    req.flash('message', {status: 'success', value: 'Welcome, ' + req.user.username });
    res.render('index', { title: 'Dead Drop - Home', pins: JSON.stringify(result), messages: req.flash('message') });
  });
});

router.get('/mydrops', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('mydrops', { title: 'My Drops' });
});

router.get('/mypickups', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('mypickups', { title: 'My Pick-ups' });
});

router.get('/newpin', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('newpin', { title: 'Add New Pin', user: req.user});
});

router.get('/pickup/:id', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('pickupPin', { title: 'Pick up a drop!', pin_id: req.params.id, user:req.user});
});

router.get('/logout', function(req, res, next) {
  req.session.passport = {};
  req.logout();
  req.flash('logout', {status: 'danger', value: 'PEACE OUT' });
  res.redirect('/login');
});

module.exports = router;
