var express = require('express');
var router = express.Router();

/*user Login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login_page' });
});

/* POST User details to login page. */
router.post('/', function(req, res) {
  if(req.body.username == 'admin' && req.body.password == '123') {
    res.send('password accepted');
  }
  else {
    res.send('invalid username or password');
  }
});

module.exports = router;
