"use strict";
exports.__esModule = true;
var db = require("mongodb");
db.connect('mongodb://localhost:27017/greatDB', {}, function (err, db) {
    if (err)
        throw err;
    else {
        db.createCollection('people', function (err, res) {
            if (err)
                throw err;
            else {
                console.log(res.collectionName);
            }
        });
        db.close();
    }
});
