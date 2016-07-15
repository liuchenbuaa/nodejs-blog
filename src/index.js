var koa = require('koa');
var views = require('koa-views');
var mongo = require('./mongo');
var app = new koa();

app.use(views(__dirname + '/views',{
    map: {html: 'nunjucks'}
}));

app.use(mongo.default);

/*
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');


// Connection URL
var url = 'mongodb://127.0.0.1/person';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  insertDocuments(db, function() {
    db.close();
  });
});

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}
*/

//app.use(require('koa-bodyparser')());
require('./routes').default(app);


app.listen(3000);
