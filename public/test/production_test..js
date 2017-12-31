"use strict";
exports.__esModule = true;
var mongo_connection_1 = require("./mongo_connection");
var production_data_1 = require("../src/data/production_data");
var assert = require("assert");
var util_1 = require("util");
describe('Check production utilities', function () {
    beforeEach(function (done) {
        mongo_connection_1.ProdCollection.collection.drop(function () {
            done();
        });
    });
    it('Try delete production rekord', function (done) {
        mongo_connection_1.ProdCollection.collection
            .insertOne(production_data_1.singleProduction)
            .then(function (doc) {
            mongo_connection_1.ProdCollection
                .remove({ prodName: 'Otto 232' })
                .then(function () {
                mongo_connection_1.ProdCollection
                    .findOne({ machineNr: 'Supra 2' })
                    .then(function (prod) {
                    assert(util_1.isNull(prod));
                    done();
                });
            });
        });
    });
    it('Check if you can find prodName', function (done) {
        mongo_connection_1.ProdCollection.collection
            .insertOne(production_data_1.singleProduction)
            .then(function (doc) {
            mongo_connection_1.ProdCollection
                .findOne({ prodName: 'Otto 232' })
                .then(function (prod) {
                assert(prod.prodName === 'Otto 232');
                done();
            })["catch"](function (err) {
                console.log('Ups you got an error: ', err.code);
            });
        })["catch"](function (err) {
            console.log('You got first level error', err.code);
        });
    });
});
