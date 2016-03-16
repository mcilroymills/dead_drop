var express = require('express');
var router = express.Router();
var queries = require('../db/queries');
var helpers = require('../db/lib/helper');

router.get('/', function(req, res, next) {
    res.redirect('/login');
});

router.get('/home', function(req, res, next) {
  queries.getPins().then(function(result){
    res.render('index', { title: 'Dead Drop - Home', pins: JSON.stringify(result) });
  });
});

router.get('/myaccount', function(req, res, next) {
  res.render('myaccount', { title: 'The My Account Page' });
});

router.get('/editaccount', function(req, res, next) {
  res.render('editaccount', { title: 'The Edit Account Page' });
});

router.get('/mydrops', function(req, res, next) {
  res.render('mydrops', { title: 'The My Drops Page' });
});

router.get('/mypickups', function(req, res, next) {
  res.render('mypickups', { title: 'The My Pick-ups Page' });
});

router.get('/newpin', function(req, res, next) {
  res.render('newpin', { title: 'The New Pin Page', user: req.user});
});

router.get('/pickup/:id', function(req, res, next) {
  res.render('pickupPin', { title: 'Pick up a drop!', pin_id: req.params.id, user:req.user});
});



module.exports = router;
