"use strict";
exports.__esModule = true;
var SimpleClass = /** @class */ (function () {
    function SimpleClass(name) {
        this.name = name;
    }
    SimpleClass.prototype.getName = function () {
        console.log(this.name);
    };
    return SimpleClass;
}());
exports.SimpleClass = SimpleClass;
