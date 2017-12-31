import{Db} from 'mongodb'
import {MongoClient} from "mongodb";


const url = "mongodb://localhost:27017";

// Use connect method to connect to the server
MongoClient.connect(url,(err,dbase)=> {

    const db=dbase.db('mydb');

    db.createCollection('pokk').then((extra)=>{

        console.log('this here')
    });


    db.collection('pokk').insertOne({name:'Kutas', drug:'text'});
    db.collection('pokk').insertOne({name:'Kutass', drug:'texss'});

    dbase.close();
});

