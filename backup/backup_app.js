const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    db.createCollection('Hounds').then(function (value) {
        db.collection('Hounds').insertOne({name:'Robo',age:20 })
        client.close();
    }).catch(function(error){
        console.log(error);
    });



});