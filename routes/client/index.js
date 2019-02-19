var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: '템플릿 목록' });
});

module.exports = router;
