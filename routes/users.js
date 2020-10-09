var express = require('express');
var router = express.Router();
var database = require("./databaseAccess");


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users', { title: 'Users', users: req.val})
  });

module.exports = router;
