var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base1 = (function () {
    function Base1() {
        this.name = 'piko';
    }
    return Base1;
}());
var Alpha = (function (_super) {
    __extends(Alpha, _super);
    function Alpha() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = 'white';
        return _this;
    }
    return Alpha;
}(Base1));
function builder(classParam) {
    var instance = new classParam();
    return instance;
}
var instance = builder(Alpha);
instance.color = 'black';
instance.name;
//# sourceMappingURL=builder.class.js.map