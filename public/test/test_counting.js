"use strict";
exports.__esModule = true;
var assert = require("assert");
require("chai/register-should");
describe('Test 1', function () {
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
});
