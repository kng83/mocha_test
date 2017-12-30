"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var people_schema_1 = require("../src/schemas/people.schema");
var production_schema_1 = require("../src/schemas/production.schema");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mainDB', {
    useMongoClient: true
}, function () {
    console.log('Db connected');
})["catch"](function (err) {
    console.log('Failed to connect db: ', err);
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error appears'));
db.once('open', function () {
    console.log('Connection OK and OK');
});
exports.PeopleCollection = mongoose.model('PeopleCollection', people_schema_1.PeopleSchema);
exports.ProdCollection = mongoose.model('ProductionCollection', production_schema_1.ProductionSchema);
