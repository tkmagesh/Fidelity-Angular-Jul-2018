var db = require('./db');
var ObjectId = require('mongodb').ObjectId;


function getAll(){
	const customers = db.getDb().collection('customers');

	return new Promise(function(resolve, reject){
		customers.find({}).toArray(function(err, customerDocs){
			if (err){
				reject(err);
				return;
			}
			resolve(customerDocs);
		});
	});
}

function addNew(customerData){
	const customers = db.getDb().collection('customers');

	return new Promise(function(resolve, reject){
		customers.insert(customerData, (err, result) => {
			var newCustomerId = result.insertedIds[0];
			get(newCustomerId)
				.then(newCustomer => resolve(newCustomer));
		});
	});
}

function get(customerId){
	const customers = db.getDb().collection('customers');
	return new Promise((resolve, reject) => {
		customers.find({"_id" : new ObjectId(customerId)})
				.toArray(function(err, customerDocs){
				if (err){
					reject(err);
					return;
				}
				resolve(customerDocs[0]);
			});
	});
}
module.exports = { getAll, get, addNew };