const MongoClient = require('mongodb').MongoClient,
	util = require('util');

const serverUrl = 'mongodb://localhost:27017';

const client = new MongoClient(serverUrl);

client.connect(function(err){
	if (err){
		console.log(err);
		client.close();
		return;
	}

	var db = client.db('learning');
	var customers = db.collection('customers');

	customers.insert({"name" : "xyz"}, function(err, result){
		console.log(result);
	});

	/*customers.find({})
		.toArray(function(err, customerDocs){
			for(let index in customerDocs)
				console.log(customerDocs[index]);

			client.close();
			console.log('thats all folks!');
		});*/
});
