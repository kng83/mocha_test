import * as mongoose from 'mongoose';

//Adding global promises instead of mongoose
(<any>mongoose).Promise = global.Promise;

//Adding interface to the schema

export interface MainSchema{
    name:string;
    email:string;
    age:number;
}

mongoose.connect('mongodb://localhost/mainDB',{
    useMongoClient: true
});

const db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error appears'));
db.once('open', ()=>{
    console.log('Connection OK and OK');
});

/*Making a new schema to put to mode*/
const mainDBSchema = new mongoose.Schema({
    name:String,
    email:String,
    age: Number

});

export const MainDB = mongoose.model('MainDB', mainDBSchema);



