import {Db, MongoError} from 'mongodb'
import {MongoClient} from "mongodb";


class MyBase extends MongoClient {
    url = "mongodb://localhost:27017/BagnoDB";
   // ss:Promise<Db>;


    constructor() {
        super();

        //create db if doesn't exist
        MyBase.connect(this.url).then((client: Db) => {
            console.log('Db is created')
            client.close()
        }).catch((err) => {
            console.log('something is not ok', err.name)
        });
       // this.vv();

    }
    createCollection(name:string){
        MyBase.connect(this.url).then((client:Db)=>{
            const db = client.db('BagnoDB');
            db.createCollection(name).then((value)=>{
                console.log(value.collectionName);
                client.close().catch((err)=>{console.log(err)});
            }).catch((err)=>{console.log(err)})
        }).catch((err)=>{console.log(err)})
    };

    vv(){

        return MyBase.connect(this.url).then((client:Db)=>{

            return new Promise((resolve)=>{
                resolve(client.db('BagnoDB'));
                // client.close();
            });

        });

    }
    get pp(){
        return MyBase.connect(this.url).then((client:Db)=>{

            return new Promise((resolve)=>{
                resolve({baza:client.db('BagnoDB'),close:client.close()});

            });

        });
    }
}


const biko = new MyBase();
biko.createCollection('pampers');
// biko.vv().then((db:Db)=>{
//     db.collection('pampers').insertOne({name:'kooko'}).catch((err)=>{console.log(err)});
// });
biko.pp.then((db:Db)=>{
    db.collection('pampers').insertOne({name: 'valdek'}).catch((err)=>{console.log(err)});
});

//interface
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
                client.close();
            }).catch((err) => {
            console.log('You got an error', err.name)
        });

    });//

    MongoClient.connect("mongodb://localhost:27017")
        .then((client: Db) => {
            const db = client.db('Thunder');
            db.collection('Hounds')
                .updateOne({name: 'Robo'}, {$set: {name: 'Kot'}}, {upsert: true})
                .then((check) => {
                    client.close();
                    console.log('Update confirm');
                }).catch((err) => {
                console.log(err)

            });

        }).catch((err) => {
        console.log(err)
    });

}

omin();