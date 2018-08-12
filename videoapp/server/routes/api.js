const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
const Video = require('../models/video');
const db = "mongodb://localhost:27017/";
MongoClient.connect(db,{ useNewUrlParser: true }, function(err, db) {
  
  // var dbo = db.db("CrudDB");
  // var myobj = { name: "Company Inc", address: "Highway 37" };
  // dbo.collection("employees").insertOne(myobj, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document inserted");
  //   db.close();
  //});

  if(err){
 		console.error("error"+err);
}
});
// router.get('/videos', (req, res) => {	
//   res.send('api worksss');
// });

router.get('/videos', (req, res) => {	
  console.log('get reuqest for all videos');
  MongoClient.connect(db, function(err, db) {
  if (err) throw err;
  var dbo = db.db("CrudDB");
  /*Return only the documents with the address "Park Lane 38":*/
  var query = { address:"Highway 37" };
  dbo.collection("employees").find(query).toArray(function(err, result) {
  	res.send(result);
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
});

module.exports = router;