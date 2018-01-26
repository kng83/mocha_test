"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
function simpleDecorator(constructor) {
    console.log('decorator started and is super');
    console.log("to jest constructor: " + constructor);
    console.log("to jest constructor.name " + constructor.name);
    constructor.prototype.myprop = 'bolek';
}
var simpleClass = (function () {
    function simpleClass(name) {
        this.name = name;
        this.arg = 'kot';
        this.arg2 = 'pies';
        this.myName = name;
    }
    simpleClass.prototype.getName = function () {
        return this.constructor.name;
    };
    simpleClass = __decorate([
        simpleDecorator
    ], simpleClass);
    return simpleClass;
}());
var me = new simpleClass('Jurek');
console.log(me.myprop);
console.log(me.getName());
function factoryDecorator(name) {
    return function (constr) {
        console.log("Parametr przekazywany fabryka: " + name);
    };
}
function factoryAddPropertyDec(name) {
    return function (constr) {
        constr.prototype.newProp = name;
        constr.prototype.arg1 = 6;
        console.log('lista properties:', constr.prototype);
    };
}
var testWithFactory = (function () {
    function testWithFactory() {
    }
    testWithFactory = __decorate([
        factoryDecorator('Jack'),
        factoryAddPropertyDec('Piotrek')
    ], testWithFactory);
    return testWithFactory;
}());
var tesWF = new testWithFactory();
console.log(chalk_1.default.blue("Nowa wlasciwosc od fabryki agr1 dziala jezeli brak wartosci w klasie: " + tesWF.arg1));
function propertyDec(target, propertyKey) {
    console.log(chalk_1.default.magenta("target: " + target));
    console.log("propertyDecorator target.constructor: " + target.constructor);
    console.log("propertyDecorator target.constructor.name: " + target.constructor.name + " ");
    console.log("propertyDecorator propertyKey " + propertyKey);
    console.log("propertyDecorator propertyKey sprawdzenie typu " + typeof propertyKey);
    target.constructor.prototype.propNazwa = 'bobo';
}
var classTestProperty = (function () {
    function classTestProperty() {
    }
    __decorate([
        propertyDec
    ], classTestProperty.prototype, "propNazwa", void 0);
    return classTestProperty;
}());
var tP = new classTestProperty();
console.log(tP.propNazwa);
function methodDecorator(target, methodName, descriptor) {
    console.log(chalk_1.default.magenta("methodDecorator target: " + target + " "));
    console.log("methodDecorator methodName: " + methodName);
    console.log("methodDecorator whole function: " + target[methodName]);
    console.log("methodDecorator descriptor: " + descriptor.value);
    console.log("another target.constructor name: " + target.constructor.name);
}
function auditDecorator(target, methodName, descriptor) {
    var orginalFunction = target[methodName];
    var auditFunction = function () {
        console.log("Wywolano podmienina wersje funkcji " + methodName);
        orginalFunction.apply(this, arguments);
    };
    target[methodName] = auditFunction;
    return target;
}
var HelpMethodClass = (function () {
    function HelpMethodClass() {
    }
    HelpMethodClass.prototype.print = function (output) {
        console.log(chalk_1.default.blue("To jest output funkcji print: " + output));
    };
    HelpMethodClass.prototype.show = function (output) {
        console.log("This is output from show: " + output);
    };
    __decorate([
        methodDecorator
    ], HelpMethodClass.prototype, "print", null);
    __decorate([
        auditDecorator
    ], HelpMethodClass.prototype, "show", null);
    return HelpMethodClass;
}());
var helpM = new HelpMethodClass();
helpM.print('pawel');
helpM.show('bobo');
function parameterDecorator(target, methodName, parameterIndex) {
    console.log(chalk_1.default.blue("parameterDecorator target: " + target));
    console.log("parameterDecorator class name: " + target.constructor.name);
    console.log("parameterDecorator custom: " + target[methodName]);
    console.log("parameterDecorator methodName: " + methodName);
    console.log("parameterDecorator parameterIndex: " + parameterIndex);
    console.log("parameterDecorator empty test}");
    target[methodName] = function (value) {
        return 'Arnold';
    };
    return target;
}
var ParaDecClass = (function () {
    function ParaDecClass() {
    }
    ParaDecClass.prototype.print = function (value) {
        return value;
    };
    __decorate([
        __param(0, parameterDecorator)
    ], ParaDecClass.prototype, "print", null);
    return ParaDecClass;
}());
var pdc = new ParaDecClass();
console.log(pdc.print());
var first = function (value) {
    if (value === void 0) { value = '4'; }
    console.log("This is value " + value);
    return value;
};
var second = function () {
    var options = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        options[_i] = arguments[_i];
    }
    var kot = function (name) {
        return 4;
    };
    console.log('Pies ktory biega');
    return first.apply(this, arguments);
};
console.log(chalk_1.default.cyan(second('11')));
