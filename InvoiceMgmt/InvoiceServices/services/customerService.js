var db = require('./db');

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

module.exports = { getAll };