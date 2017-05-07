var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.body='Message';
  res.send('Hello_world!!');
});

module.exports = router;
