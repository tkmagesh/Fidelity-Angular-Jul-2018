const MongoClient = require('mongodb').MongoClient;
const serverUrl = 'mongodb://localhost:27017';

const client = new MongoClient(serverUrl, { useNewUrlParser: true });

let db = null;

function open(){
	client.connect(function(err){
		if (err){
			console.log(err);
			client.close();
			return;
		}
		db = client.db('learning');
	});
}

function getDb(){
	if (!db) throw new Error('Database not available');
	return db;
}

function close(){
	client.close();
}

module.exports = { getDb, close, open };