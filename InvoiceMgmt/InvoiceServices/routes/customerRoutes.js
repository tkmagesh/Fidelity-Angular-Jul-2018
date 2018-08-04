var express = require('express');
var router = express.Router();
var customerService = require('../services/customerService');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let customers = await customerService.getAll();
  res.json(customers);
});

module.exports = router;
