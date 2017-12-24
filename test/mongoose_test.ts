import {MainDB} from './mongo_connection';
import * as assert from 'assert';
import * as mongoose from 'mongoose';
import {MainSchema} from "./mongo_connection";
import { Duration } from '../src/class_duration';
import * as chai from 'chai';
import * as chaiAsPromised from "chai-as-promised";

before((done)=>{
    MainDB.collection.drop(()=>{
        done();
    });


});


let peopleArray =[
        {
            name:'Pawel',
            email:'test@test.com',
            age:34,
            time:Date.now()
        },
        {
            name:'Bobo',
            email:'bobo@test.com',
            age:4,
            time:Date.now()

        },
        {
            name:'Koko',
            email:'koko@test.com',
            age:14,
            time:Date.now()

        },
        {
            name:'Porky',
            email:'porky@test.com',
            age:'1',
            time:Date.now()
        }
    ]

/*This is multiple adding function responsible for pushing user
* to database.*/

describe('This is db connection',()=> {
    /*Create new Model to DB*/
    for (let people of peopleArray){
        it('Finds Pawel in dataBase',(done)=>{

        const take = new MainDB(people).save(()=>{
            console.log('Save the db');
        }).then(()=>{
            MainDB.findOne({email:people.email}).then((doc:any)=>{
                assert( doc.name===people.name);
                console.log(people.name);
                done();
            })

        });
        });
    }
});




