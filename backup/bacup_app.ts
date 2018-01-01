import {Db, MongoError} from 'mongodb'
import {MongoClient} from "mongodb";


class MyBase extends MongoClient {
    url = "mongodb://localhost:27017/superDB";

}

const biko = new MyBase();

// biko.connect("mongodb://localhost:27017/kufel",(error:MongoError,client:Db)=>{
//
//     const db=client.db('kufel');
//     db.createCollection('rosomak').then((extra)=>{
//
//         console.log('this here')
//         db.collection('rosomak')
//             .insertOne({name:'Bobo', drug:'text'})
//             .then(()=>{console.log('ok')
//                 client.close();
//             }).catch((err)=>{
//                 console.log(err);
//         });
//
//     });
// });

interface Schema {
    name: string;
    age: number;
}

function omin() {
    MongoClient.connect("mongodb://localhost:27017", <MongoCallback>(err: MongoError, client: Db) => {
        if (err) throw err;
        console.log("Connected successfully to server");

        const db = client.db('Thunder');
        db.createCollection('Hounds')

            .then((value) => {
                db.collection('Hounds')
                    .insertOne({name: 'Robo', age: 20})
                    .catch((err) => {
                        console.log(err)
                    });
                client.close();
            })
            .catch((error) => {
                console.log(error);
            })


    });

    MongoClient.connect("mongodb://localhost:27017", (err: MongoError, client: Db) => {
        const db = client.db('Thunder');
        db.collection('Hounds')
            .findOne({name: 'Robo'})
            .then((value: Schema) => {
                console.log(value.age);
            }).catch((err) => {
            console.log('You got an error', err.name)
        });
    });

    MongoClient.connect("mongodb://localhost:27017")
        .then((client: Db) => {
            const db = client.db('Thunder');
            db.collection('Hounds')
                .updateOne({name: 'Robo'}, {$set: {name: 'Kot'}}, {upsert: true})
                .then((check) => {
                    console.log('Update confirm');
                }).catch((err) => {
                console.log(err)

            });
        }).catch((err) => {
        console.log(err)
    });

}

omin();