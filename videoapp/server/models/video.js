var MongoClient = require('mongodb').MongoClient;
const db = "mongodb://localhost:27017/";
// MongoClient.connect(db, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("CrudDB");
//   /*Return only the documents with the address "Park Lane 38":*/
//   var query = { address:"Highway 37" };
//   dbo.collection("employees").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

//module.exports = router;
