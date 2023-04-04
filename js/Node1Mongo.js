const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log('Connected to database!');
  // Perform database operations here
  db.close();
});
