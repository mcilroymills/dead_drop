var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'The Login Page' });
});

module.exports = router;