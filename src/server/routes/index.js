var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Main (index) Page' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'The Login Page' });
});

router.get('/myaccount', function(req, res, next) {
  res.render('myaccount', { title: 'The My Account Page' });
});

router.get('/newaccount', function(req, res, next) {
  res.render('newaccount', { title: 'The My Account Page' });
});

router.get('/mydrops', function(req, res, next) {
  res.render('mydrops', { title: 'The My Drops Page' });
});

router.get('/mypickups', function(req, res, next) {
  res.render('mypickups', { title: 'The My Pick-ups Page' });
});


module.exports = router;
