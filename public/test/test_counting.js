"use strict";
exports.__esModule = true;
var assert = require("assert");
var class_duration_1 = require("../src/class_duration");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
function takeWholeTest() {
    var expect = chai.expect;
    var assertt = chai.assert;
    chai.should();
    chai.use(chaiAsPromised);
    xdescribe('Test 1', function () {
        it('This value should be equal 2', function () {
            assert(2 === 2);
        });
        it('This value should be equal 3', function () {
            assert(3 === 3);
        });
        it('This value shold be equal 4', function () {
            assert.equal(4, 4);
        });
        it('This value should be equal 5', function () {
            assert.equal([1, 2, 3].indexOf(2), 1);
        });
        it('This is my chai value', function () {
            [1, 2, 3, 5, 6].indexOf(5).should.be.equal(3);
        });
        it('This name should be a length at least of 4', function () {
            var name = 'Pawel';
            name.should.have.length.above(3);
        });
        it('This value should be equal 2', function () {
            var value = 2;
            value.should.be.equal(2);
        });
        it('Expect to have only keys a & b', function () {
            expect({ a: 1, b: 2 }).to.have.all.keys('a', 'b');
        });
        it('Should have keys a & b', function () {
            ({ a: 1, b: 3, c: 4 }).should.have.any.keys('a', 'c');
        });
        it('Target object deeply (but not strictly) has property x: {a: 1} ', function () {
            expect({ a: 1 }).to.have.deep.property('a');
        });
        it('Async test bobo', function (done) {
            var dur = new class_duration_1.Duration('Bobo');
            dur.timeOut().then(function (value) {
                assert(value === 'Bobo');
                done();
            });
        });
        it('Second async test', function () {
            var dur = new class_duration_1.Duration('Koko');
            return dur.timeOut().should.eventually.to.be.equal('Koko');
        });
        it('Third async test with assert', function () {
            return assertt.eventually.equal(new class_duration_1.Duration('Balbo').timeOut(), 'Balbo');
        });
        it('Check this type', function () {
            function bobo(paco) {
                console.log(paco.name, paco.age);
                return paco;
            }
            bobo({ name: 'youre', age: 4 });
        });
    });
}
