var MongoClient = require('mongodb').MongoClient;
const db = "mongodb://localhost:27017/";

MongoClient.connect(db,{ useNewUrlParser: true }, function(err, db) {

  if(err){
 		console.error("error"+err);
}
else{
	var dbo = db.db("CrudDB");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("employees").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
}
});

