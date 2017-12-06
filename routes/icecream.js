var express = require('express');
var router = express.Router();

/* GET icecream page. */
router.get('/', function(req, res, next) {
  res.render('icecream', { title: 'icecream' });
});

module.exports = router;
