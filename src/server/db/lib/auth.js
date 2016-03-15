var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var knex = require('../knex.js');
var helpers = require('./helper');

function Users () {
  return knex('users');
}

passport.use(new LocalStrategy({
   usernameField: 'email'}, function(email, password, done) {
    //does user exist?
    Users().where('email', email).then(function(data) {
      //email does not exist, return error
      if (!data.length) {
        return done('Incorrect email');
      }
      var user = data[0];
      //email found but do the passwords match?
      if (helpers.comparePassword(password, user.password)) {
        // passwords match! return user
        return done(null, user);
      }
      else {
        // password does not match, return error
        return done('Incorrect password');
      }
    })
    .catch(function(err) {
      //issue with SQL/Knex query
      return done('Incorrect email and/or password.');
    });
  }
));


// sets the user to req.user and establishes a session via a cookie
passport.serializeUser(function(user, done) {
  console.log(user);
  done(null, user.user_id);
});

// used on subsequent requests to update 'req.user' and update session
passport.deserializeUser(function(id, done) {
  // find user and return
  Users().where('id', id)
  .then(function(data) {
    return done(null, data[0]);
  })
  .catch(function(err){
    return next(err);
  });
});


module.exports = passport;