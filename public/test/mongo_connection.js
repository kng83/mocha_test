"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mainDB', {
    useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error appears'));
db.once('open', function () {
    console.log('Connection OK and OK');
});
var mainDBSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});
exports.MainDB = mongoose.model('MainDB', mainDBSchema);
