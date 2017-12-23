import {MainDB} from './mongo_connection';
import * as assert from 'assert';
import {MainSchema} from "./mongo_connection";
import { Duration } from '../src/class_duration';
import * as chai from 'chai';
import * as chaiAsPromised from "chai-as-promised";


describe('This is db connection',()=> {
    /*Create new Model to DB*/
    it('Finds Pawel in dataBase',(done)=>{
        const take = new MainDB({
            name:'Pawel',
            email:'test@test.com',
            age:34
        }).save(()=>{
            console.log('Save the db');
        }).then(()=>{
            MainDB.findOne({email:'test@test.com'}).then((doc:any)=>{
                assert( doc.name==='Pawel');
                done();
            })

        });

    })
});




