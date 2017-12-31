"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
exports.ProductionSchema = new mongoose.Schema({
    prodName: String,
    machineNr: String,
    date: Date,
    operatorName: String,
    numberOfPackets: Number,
    packetsPerPallet: Number
}, {
    collection: 'Product'
});
