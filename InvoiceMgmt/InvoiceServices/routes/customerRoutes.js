var express = require('express');
var router = express.Router();
var customerService = require('../services/customerService');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let customers = await customerService.getAll();
  res.json(customers);
});

router.post('/', async function(req, res, next){
	let newCustomer = await customerService.addNew(req.body);
	res.status(201).json(newCustomer);
});

module.exports = router;
