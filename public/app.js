"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class MyBase extends mongodb_1.MongoClient {
    constructor() {
        super();
        this.url = "mongodb://localhost:27017/BagnoDB";
        MyBase.connect(this.url).then((client) => {
            console.log('Db is created');
            client.close();
        }).catch((err) => {
            console.log('something is not ok', err.name);
        });
    }
    createCollection(name) {
        MyBase.connect(this.url).then((client) => {
            const db = client.db('BagnoDB');
            db.createCollection(name).then((value) => {
                console.log(value.collectionName);
                client.close().catch((err) => { console.log(err); });
            }).catch((err) => { console.log(err); });
        }).catch((err) => { console.log(err); });
    }
    ;
    vv() {
        return MyBase.connect(this.url).then((client) => {
            return new Promise((resolve) => {
                resolve(client.db('BagnoDB'));
            });
        });
    }
    get pp() {
        return MyBase.connect(this.url).then((client) => {
            return new Promise((resolve) => {
                resolve({ baza: client.db('BagnoDB'), close: client.close() });
            });
        });
    }
}
const biko = new MyBase();
biko.createCollection('pampers');
biko.pp.then((db) => {
    db.collection('pampers').insertOne({ name: 'valdek' }).catch((err) => { console.log(err); });
});
function omin() {
    mongodb_1.MongoClient.connect("mongodb://localhost:27017", (err, client) => {
        if (err)
            throw err;
        console.log("Connected successfully to server");
        const db = client.db('Thunder');
        db.createCollection('Hounds')
            .then((value) => {
            db.collection('Hounds')
                .insertOne({ name: 'Robo', age: 20 })
                .catch((err) => {
                console.log(err);
            });
            client.close();
        })
            .catch((error) => {
            console.log(error);
        });
    });
    mongodb_1.MongoClient.connect("mongodb://localhost:27017", (err, client) => {
        const db = client.db('Thunder');
        db.collection('Hounds')
            .findOne({ name: 'Robo' })
            .then((value) => {
            console.log(value.age);
            client.close();
        }).catch((err) => {
            console.log('You got an error', err.name);
        });
    });
    mongodb_1.MongoClient.connect("mongodb://localhost:27017")
        .then((client) => {
        const db = client.db('Thunder');
        db.collection('Hounds')
            .updateOne({ name: 'Robo' }, { $set: { name: 'Kot' } }, { upsert: true })
            .then((check) => {
            client.close();
            console.log('Update confirm');
        }).catch((err) => {
            console.log(err);
        });
    }).catch((err) => {
        console.log(err);
    });
}
omin();
