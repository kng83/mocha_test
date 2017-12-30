//This version of import are also ok
//import 'chai/register-should';
//import {expect} from 'chai';
import * as assert from 'assert';
import { Duration } from '../src/class_duration';
import * as chai from 'chai';
import * as chaiAsPromised from "chai-as-promised";


/*Preparing interface for chai
* Take whole test*/
function takeWholeTest() {


    let expect = chai.expect;
    let assertt = chai.assert;
    chai.should();
    chai.use(chaiAsPromised);


    describe('Test 1', () => {
        it('This value should be equal 2', () => {
            assert(2 === 2);
        });
        it('This value should be equal 3', () => {
            assert(3 === 3);
        });
        it('This value shold be equal 4', () => {
            assert.equal(4, 4);
        });

        it('This value should be equal 5', () => {
            assert.equal([1, 2, 3].indexOf(2), 1);
        })

        it('This is my chai value', () => {
            [1, 2, 3, 5, 6].indexOf(5).should.be.equal(3);
        });
        it('This name should be a length at least of 4', () => {
            let name = 'Pawel';
            name.should.have.length.above(3);
        });
        it('This value should be equal 2', () => {
            let value = 2;
            value.should.be.equal(2);
        });
        it('Expect to have only keys a & b', () => {
            expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
        });

        it('Should have keys a & b', () => {
            ({a: 1, b: 3, c: 4}).should.have.any.keys('a', 'c');
        });

        it('Target object deeply (but not strictly) has property x: {a: 1} ', () => {
            expect({a: 1}).to.have.deep.property('a');
        });

        /*Here are starting promise response part of test
        * */
        it('Async test bobo', (done) => {
            let dur = new Duration('Bobo');
            dur.timeOut().then((value) => {
                assert(value === 'Bobo');
                done();
            });
//
        });

        it('Second async test', () => {
            let dur = new Duration('Koko');
            return dur.timeOut().should.eventually.to.be.equal('Koko');


        });
        it('Third async test with assert', () => {
            return assertt.eventually.equal(new Duration('Balbo').timeOut(), 'Balbo');
        });

        it('Check this type',()=>{
            function bobo(paco:{name:string, age:number} ){
                console.log(paco.name,paco.age);
                return paco;

            }
            bobo({name:'youre',age:4})

        })
    });
}
//takeWholeTest();