var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/tumblr', function(req, res, next) {
  res.render('tumblr', { title: 'Tumblr Viewer' });
});

module.exports = router;
