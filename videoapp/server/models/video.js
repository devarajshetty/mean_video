var MongoClient = require('mongodb').MongoClient;
const db = "mongodb://localhost:27017/";

MongoClient.connect(db,{ useNewUrlParser: true }, function(err, db) {

  if(err){
 		console.error("error"+err);
}
});
var Schema = MongoClient.Schema;
const videoshema = new Schema({

	name: String,
	address: String
});

module.exports = MongoClient.model('video',videoshema,'employees');
