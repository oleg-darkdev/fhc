var express = require('express');
var router = express.Router();

/* GET demo-pdf version. */
router.get('/demo-pdf', function(req, res, next) {
  res.send('demo-pdf version');
});

module.exports = router;
