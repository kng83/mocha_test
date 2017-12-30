"use strict";
exports.__esModule = true;
var mongo_connection_1 = require("./mongo_connection");
var assert = require("assert");
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
        age: 1,
        time: Date.now()
    }
];
describe('This is db connection', function () {
    beforeEach(function (done) {
        mongo_connection_1.UserCol.collection.drop(function () {
            done();
        });
    });
    var _loop_1 = function (people) {
        it('Finds Pawel in dataBase', function (done) {
            mongo_connection_1.UserCol.collection.insertOne(people)
                .then(function (doc) {
                console.log('Save to db');
                mongo_connection_1.UserCol
                    .findOne({ email: people.email })
                    .then(function (doc) {
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
    it('This is test insert many', function (done) {
        mongo_connection_1.UserCol.collection.insertMany(peopleArray)
            .then(function (downloadOk) {
            assert(downloadOk.result.ok === 1);
            mongo_connection_1.UserCol
                .collection
                .findOne({ name: 'Bobo' })
                .then(function (people) {
                assert(people.email === 'bobo@test.com');
                assert(people.age === 4);
                done();
            });
        });
    });
    it('Should update bobo@test.com to superbobo@test.com', function (done) {
        mongo_connection_1.UserCol.collection.insertMany(peopleArray)
            .then(function (downloadOk) {
            console.log('4');
            mongo_connection_1.UserCol
                .findOneAndUpdate({ email: 'bobo@test.com' }, { email: 'superbobo@test.com' }, function (err, people) {
                mongo_connection_1.UserCol.collection.findOne({ name: 'Bobo' })
                    .then(function (people) {
                    console.log(people.email);
                    assert(people.email === 'superbobo@test.com');
                    done();
                });
            });
        });
    });
});
