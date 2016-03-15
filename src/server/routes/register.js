var express = require('express');
var router = express.Router();
var passport = require('../db/lib/auth');
var helpers = require('../db/lib/helper');
var knex = require('../db/knex.js');

// Route to GET the endpoint /register and display the newaccount.html view
router.get('/', function(req, res, next) {
    res.render('newaccount', { title: 'Create An Account!' });
  });

//route to POST a new user to the database
  router.post('/', function(req, res, next) {
    var userEmail = req.body.email;
    var userPassword = req.body.password;
    console.log("Email input:",userEmail);
    // check if email is unique
    knex('users').where('email', userEmail)
    .then(function(data) {
      // if email is not unique, send an error
      if (data.length) {
        res.send('Email Already Exists');
      } else {
          // else insert email and password
          hashedPassword = helpers.hashing(userPassword);
          knex('users').insert({
          email: userEmail,
          password: hashedPassword
      }).then(function(data) {
          return res.redirect('/login');
      })
      .catch(function(err) {
          res.send('Something broke, check second to last catch.');
        });
    }
    })
    .catch(function(err) {
      console.log('Something broke, check last catch:', err);
      return next(err);
    });
  });

module.exports = router;