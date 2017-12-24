"use strict";
exports.__esModule = true;
var mongo_connection_1 = require("./mongo_connection");
var assert = require("assert");
before(function (done) {
    mongo_connection_1.MainDB.collection.drop(function () {
        done();
    });
});
var peopleArray = [
    {
        name: 'Pawel',
        email: 'test@test.com',
        age: 34,
        time: Date.now()
    },
    {
        name: 'Bobo',
        email: 'bobo@test.com',
        age: 4,
        time: Date.now()
    },
    {
        name: 'Koko',
        email: 'koko@test.com',
        age: 14,
        time: Date.now()
    },
    {
        name: 'Porky',
        email: 'porky@test.com',
        age: '1',
        time: Date.now()
    }
];
describe('This is db connection', function () {
    var _loop_1 = function (people) {
        it('Finds Pawel in dataBase', function (done) {
            var take = new mongo_connection_1.MainDB(people).save(function () {
                console.log('Save the db');
            }).then(function () {
                mongo_connection_1.MainDB.findOne({ email: people.email }).then(function (doc) {
                    assert(doc.name === people.name);
                    console.log(people.name);
                    done();
                });
            });
        });
    };
    for (var _i = 0, peopleArray_1 = peopleArray; _i < peopleArray_1.length; _i++) {
        var people = peopleArray_1[_i];
        _loop_1(people);
    }
});
