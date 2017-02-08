var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/addStudent', function(req, res, next) {
  res.render('addStudent');
});

module.exports = router;