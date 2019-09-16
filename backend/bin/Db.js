var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/lovely', function (err, db) {
  if (err) throw err;
  else console.log("***Connected to MongoServer***");
  })