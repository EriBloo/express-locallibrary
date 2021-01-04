const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Main page');
});

router.get('/about', function(req, res) {
  res.send('About wiki');
});

module.exports = router;
