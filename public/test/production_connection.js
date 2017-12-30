"use strict";
exports.__esModule = true;
var mongo_connection_1 = require("./mongo_connection");
describe('Check production utilities', function () {
    beforeEach(function (done) {
        mongo_connection_1.ProdCollection.collection.drop(function () {
            done();
        });
    });
    it('Check if connection is OK', function () {
        mongo_connection_1.ProdCollection.collection.insertOne({
            prodName: 'Otto 232',
            machineNr: 'Supra 2',
            date: Date.now(),
            operatorName: 'Grzes',
            numberOfPackets: 14,
            packetsPerPallet: 40
        }).then(function (hhh) {
        });
    });
});
