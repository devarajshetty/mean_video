const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
//const Video = require('../models/video');
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
router.get('/videos', (req, res) => {	
MongoClient.connect(db,{ useNewUrlParser: true }, function(err, db) {
 
  var dbo = db.db("CrudDB");
  /*Return only the documents with the address "Park Lane 38":*/
  var query = { address:"Highway 37" };
  dbo.collection("employees").find({}).toArray(function(err, result) {
  	console.log(result);
    
res.json(result);
    db.close();
  });
});
});

router.post('/data_add', (req, res) => {	
MongoClient.connect(db,{ useNewUrlParser: true }, function(err, db) {
 
  var dbo = db.db("CrudDB");
  

  var title = req.body.name;
  var title_data = req.body.address;
  var myobj = { name: title, address:title_data };
  dbo.collection("employees").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
});

// router.get('/videos', (req, res) => {	
//   console.log("result");
//   Video.find({})
//   .exec(function(err,employees){
// if(err){
// 	console.log("er");
// }
// else
// {
// 	res.json(employees);
// }
//   });
//   MongoClient.connect(db, function(err, db) {
  
//   var dbo = db.db("CrudDB");
  
 
// });
// });

module.exports = router;