var express = require('express');
var router = express.Router();
var passport = require('../db/lib/auth');
var helpers = require('../db/lib/helper');

router.get('/', function(req, res, next) {
  var message = req.flash('message');
  var logout = req.flash('logout');
  res.render('login', { title: 'Log In', messages: message, logout: logout });
});

//route to post login and authenticate with passport when the user clicks submit on the /login page
router.post('/', function(req, res, next) {
    passport.authenticate('local', function(err, user) {
      if (err) {
        // console.log('error:', err);
        req.flash('message', {status: 'danger', value: 'Email and/or password is incorrect.'});
        return res.redirect('/login');
        // return next(err);
      } else {
        req.logIn(user, function(err) {
          if (err) {
            // console.log('error:', err);
            return next(err);
          } else {
            return res.redirect('/home');
          }
        });
      }
    })(req, res, next);
  });

module.exports = router;