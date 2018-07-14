var express = require('express');
var router = express.Router();

/* GET full-html version. */
router.get('/full-html', function(req, res, next) {
  res.send('full-html version');
});

module.exports = router;
