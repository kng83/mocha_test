"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var HelpMethodClass = (function () {
    function HelpMethodClass() {
    }
    HelpMethodClass.prototype.print = function (output) {
        console.log(chalk_1.default.blue("To jest output funkcji print: " + output));
    };
    __decorate([
        methodDecorator
    ], HelpMethodClass.prototype, "print", null);
    return HelpMethodClass;
}());
var helpM = new HelpMethodClass();
helpM.print('pawel');
