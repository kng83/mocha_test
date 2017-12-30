import {UserCol} from './mongo_connection';
import * as assert from 'assert';
import {PeopleSchema,People} from "./mongo_connection";





let peopleArray:People[]= [
    {
        name: 'Pawel',
        email: 'test@test.com',
        age: 34,
        time: Date.now()
    },
    {
        name: 'Bobo',
        email: 'bobo@test.com',
        age: 4,
        time: Date.now()
    },
    {
        name: 'Koko',
        email: 'koko@test.com',
        age: 14,
        time: Date.now()
    },
    {
        name: 'Porky',
        email: 'porky@test.com',
        age: 1,
        time: Date.now()
    }
];

/*This is multiple adding function responsible for pushing user
* to database.*/

describe('This is db connection', () => {
    beforeEach((done) => {

        UserCol.collection.drop(() => {
            done();
        });
    });

    /*Create new Model to DB
    * version with save const take = new UserCol(people).save*/
    for (let people of peopleArray) {
        it('Finds Pawel in dataBase', (done) => {

            UserCol.collection.insertOne(people)
                .then((doc) => {
                    console.log('Save to db');
                    UserCol
                        .findOne({email: people.email})
                        .then((doc: PeopleSchema) => {
                            assert(doc.name === people.name);
                            console.log(people.name);
                            done();
                        });
                });
        });
    }

    /*Instead of go over the for loop use method insertMany method*/
    it('This is test insert many', (done) => {
        UserCol.collection.insertMany(peopleArray)
            .then((downloadOk) => {
                assert(downloadOk.result.ok === 1);
                UserCol
                    .collection
                    .findOne({name: 'Bobo'})
                    .then((people: People) => {
                        assert(people.email === 'bobo@test.com');
                        assert(people.age === 4);
                        done();
                    });
            });
    });

    it('Should update bobo@test.com to superbobo@test.com',(done)=>{
        UserCol.collection.insertMany(peopleArray)
            .then((downloadOk)=>{
                console.log('4')
                UserCol
                    .findOneAndUpdate(
                        {email: 'bobo@test.com'}
                        ,{email:'superbobo@test.com'}
                        ,(err,people:PeopleSchema)=>{

                            UserCol.collection.findOne({name:'Bobo'})
                                .then((people:People)=>{
                                    console.log(people.email);
                                    assert(people.email === 'superbobo@test.com');
                                    done();
                                });
                        });
            });
    });


});






