var express = require('express');
var router = express.Router();

/* GET full-pdf version. */
router.get('/full-pdf', function(req, res, next) {
  res.send('full-pdf version');
});

module.exports = router;
