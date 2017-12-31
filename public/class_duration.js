"use strict";
exports.__esModule = true;
var timers_1 = require("timers");
var Duration = (function () {
    function Duration(name) {
        this.name = name;
    }
    Duration.prototype.timeOut = function () {
        var _this = this;
        return new Promise(function (resolve) {
            timers_1.setTimeout(function () {
                console.log(_this.name);
                resolve(_this.name);
            }, 1000);
        });
    };
    return Duration;
}());
exports.Duration = Duration;
