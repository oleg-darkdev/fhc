var express = require('express');
var router = express.Router();

/* GET demo-html version. */
router.get('/demo-html', function(req, res, next) {
  res.send('demo-html version');
});

module.exports = router;
