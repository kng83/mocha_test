"use strict";
exports.__esModule = true;
var mongodb_1 = require("mongodb");
var url = "mongodb://localhost:27017";
mongodb_1.MongoClient.connect(url, function (err, dbase) {
    var db = dbase.db('mydb');
    db.createCollection('pokk').then(function (extra) {
        console.log('this here');
    });
    db.collection('pokk').insertOne({ name: 'Kutas', drug: 'text' });
    db.collection('pokk').insertOne({ name: 'Kutass', drug: 'texss' });
    dbase.close();
});
