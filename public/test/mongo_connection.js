"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var schemaPeople = {
    name: String,
    email: String,
    age: Number,
    time: Date
};
mongoose.connect('mongodb://localhost/mainDB', {
    useMongoClient: true
}, function () {
    console.log('Db connected');
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error appears'));
db.once('open', function () {
    console.log('Connection OK and OK');
});
var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    time: Date
}, {
    versionKey: 'Bobo_super_v',
    collection: 'People'
});
var ProductionSchema = new mongoose.Schema({
    prodName: String,
    machineNr: String,
    date: Date,
    operatorName: String,
    numberOfPackets: Number,
    packetsPerPallet: Number
}, {
    collection: 'Product'
});
exports.UserCol = mongoose.model('UserCol', UserSchema);
exports.ProdCollection = mongoose.model('ProductionCollection', ProductionSchema);
