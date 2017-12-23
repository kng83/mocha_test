"use strict";
exports.__esModule = true;
var mongo_connection_1 = require("./mongo_connection");
var assert = require("assert");
describe('This is db connection', function () {
    it('Finds Pawel in dataBase', function (done) {
        var take = new mongo_connection_1.MainDB({
            name: 'Pawel',
            email: 'test@test.com',
            age: 34
        }).save(function () {
            console.log('Save the db');
        }).then(function () {
            mongo_connection_1.MainDB.findOne({ email: 'test@test.com' }).then(function (doc) {
                assert(doc.name === 'Pawel');
                done();
            });
        });
    });
});
