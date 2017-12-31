"use strict";
exports.__esModule = true;
var mongo_connection_1 = require("./mongo_connection");
var assert = require("assert");
var people_data_1 = require("../src/data/people_data");
describe('This is db connection to people collection', function () {
    beforeEach(function (done) {
        mongo_connection_1.PeopleCollection.collection.drop(function () {
            done();
        });
    });
    var _loop_1 = function (people) {
        it('Finds Pawel in dataBase check ', function (done) {
            mongo_connection_1.PeopleCollection.collection.insertOne(people)
                .then(function (doc) {
                console.log('Save to db');
                mongo_connection_1.PeopleCollection
                    .findOne({ email: people.email })
                    .then(function (doc) {
                    assert(doc.name === people.name);
                    console.log(people.name);
                    done();
                });
            });
        });
    };
    for (var _i = 0, peopleArray_1 = people_data_1.peopleArray; _i < peopleArray_1.length; _i++) {
        var people = peopleArray_1[_i];
        _loop_1(people);
    }
    it('This is test insert many', function (done) {
        mongo_connection_1.PeopleCollection.collection.insertMany(people_data_1.peopleArray)
            .then(function (downloadOk) {
            assert(downloadOk.result.ok === 1);
            mongo_connection_1.PeopleCollection
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
        mongo_connection_1.PeopleCollection.collection.insertMany(people_data_1.peopleArray)
            .then(function (downloadOk) {
            console.log('4');
            mongo_connection_1.PeopleCollection
                .findOneAndUpdate({ email: 'bobo@test.com' }, { email: 'superbobo@test.com' }, function (err, people) {
                mongo_connection_1.PeopleCollection.collection.findOne({ name: 'Bobo' })
                    .then(function (people) {
                    console.log(people.email);
                    assert(people.email === 'superbobo@test.com');
                    done();
                });
            });
        });
    });
});
