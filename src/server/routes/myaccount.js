var express = require('express');
var router = express.Router();
var passport = require('../db/lib/auth');
var helpers = require('../db/lib/helper');
var queries = require('../db/queries');
var knex = require('../db/knex.js');

//Route to GET and render user information on the myaccount.html view
router.get('/', function(req, res, next) {
  queries.getUsers().where('user_id', req.user.user_id)
  .then(function(user) {
    console.log(user);
    // console.log(req.user.user_id);
    res.render('myaccount', { title: 'My Account', username: user[0].username, email: user[0].email });
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

//Route to GET and render user information on the editaccount.html view
router.get('/edit', function(req, res, next) {
  queries.getUsers().where('user_id', req.user.user_id)
  .then(function(user) {
    console.log(user);
    // console.log(req.user.user_id);
    res.render('editaccount', { title: 'Edit Account', username: user[0].username, email: user[0].email });
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

//Route to POST updated user information to the database and then redirect to the myaccount page
router.post('/edit', function(req, res, next) {
  var userInfo = req.body;
  var userId = req.user.user_id;
  queries.updateUser(userId, userInfo)
  .then(function(id){
    res.redirect('/myaccount');
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

module.exports = router;