import {PeopleCollection} from './mongo_connection';
import * as assert from 'assert';
import {PeopleSchemaInterface,PeopleInterface} from "../src/schemas/people.schema";
import {peopleArray} from '../src/data/people_data';



/*This is multiple adding function responsible for pushing user
* to database.*/

describe('This is db connection to people collection', () => {

    beforeEach((done) => {
        PeopleCollection.collection.drop(() => {
            done();
        });
    });

    /*Create new Model to DB
    * version with save const take = new PeopleCollection(people).save*/
    for (let people of peopleArray) {
        it('Finds Pawel in dataBase check ', (done) => {

            PeopleCollection.collection.insertOne(people)
                .then((doc) => {
                    console.log('Save to db');
                    PeopleCollection
                        .findOne({email: people.email})
                        .then((doc: PeopleSchemaInterface) => {
                            assert(doc.name === people.name);
                            console.log(people.name);
                            done();
                        });
                });
        });
    }

    /*Instead of go over the for loop use method insertMany method*/
    it('This is test insert many', (done) => {
        PeopleCollection.collection.insertMany(peopleArray)
            .then((downloadOk) => {
                assert(downloadOk.result.ok === 1);
                PeopleCollection
                    .collection
                    .findOne({name: 'Bobo'})
                    .then((people: PeopleSchemaInterface) => {
                        assert(people.email === 'bobo@test.com');
                        assert(people.age === 4);
                        done();
                    });
            });
    });

    it('Should update bobo@test.com to superbobo@test.com',(done)=>{
        PeopleCollection.collection.insertMany(peopleArray)
            .then((downloadOk)=>{
                console.log('4')
                PeopleCollection
                    .findOneAndUpdate(
                        {email: 'bobo@test.com'}
                        ,{email:'superbobo@test.com'}
                        ,(err,people:PeopleSchemaInterface)=>{

                            PeopleCollection.collection.findOne({name:'Bobo'})
                                .then((people:PeopleInterface)=>{
                                    console.log(people.email);
                                    assert(people.email === 'superbobo@test.com');
                                    done();
                                });
                        });
            });
    });


});






