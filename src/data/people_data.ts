import {PeopleInterface} from "../schemas/people.schema";


export const  peopleArray:PeopleInterface[]= [
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