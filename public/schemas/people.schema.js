"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.PeopleSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    time: Date
}, {
    versionKey: 'Bobo_super_v',
    collection: 'People'
});
