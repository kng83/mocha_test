"use strict";
exports.__esModule = true;
var async_1_export_1 = require("./async_1_export");
var async_2_export_1 = require("./async_2_export");
var async_2_export_2 = require("./async_2_export");
setTimeout(function () {
    // console.log(typeof one);
    //   console.log(one.name);
    console.log(async_2_export_2.one.whatName(), 'other function');
    console.log(async_2_export_2.two.name, 'this is name');
    console.log(async_1_export_1.name, async_1_export_1.age);
    console.log(async_2_export_1.second.whatName());
    console.log(async_2_export_1.first.whatName());
}, 4000);
