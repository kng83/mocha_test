// do klasy abstract mozemy przekazac model np z klasy ktora dziedziczy i na nim operowac
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base() {
        // dajac do modelu abstract zmuszamy klase pochodna do tego by dodala ta wlasciwosc
        var _this = this;
        this.loadHeight = function () {
            return _this.model.height;
        };
    }
    Base.prototype.loadModel = function () {
        return this.model;
    };
    Base.prototype.loadName = function () {
        return this.model.name;
    };
    Object.defineProperty(Base.prototype, "height", {
        get: function () {
            return this.model.height;
        },
        set: function (value) {
            this.model.height = value;
        },
        enumerable: true,
        configurable: true
    });
    return Base;
}());
var Cat = {
    height: 34,
    name: 'pawel'
};
var Bobo = /** @class */ (function (_super) {
    __extends(Bobo, _super);
    function Bobo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = Cat;
        return _this;
    }
    return Bobo;
}(Base));
var bobo = new Bobo();
console.log(bobo.model);
console.log(bobo.loadName(), 'here');
console.log(bobo.loadModel()); // { height: 34, name: 'pawel' }
console.log(bobo.loadHeight()); //34
console.log(bobo.height); //34
bobo.height = 50;
console.log(bobo.height); //50
