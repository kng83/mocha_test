///<reference path="../node_modules/@types/mongoose/index.d.ts"/>
import * as mongoose from 'mongoose';
import Doc = Mocha.reporters.Doc;
import {Document} from 'mongoose';

//Adding global promises instead of mongoose
(<any>mongoose).Promise = global.Promise;

//Adding interface to the schema

export interface People{
    name?:string|StringConstructor;
    email?:string|StringConstructor;
    age?:number|NumberConstructor
    time?:number|DateConstructor;
}

const schemaPeople:People = {
    name:String,
    email:String,
    age: Number,
    time:Date
}

export interface PeopleSchema extends Document,People{

}

mongoose.connect('mongodb://localhost/mainDB',{
    useMongoClient: true,

},()=>{
   console.log('Db connected');
});


const db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error appears'));
db.once('open', ()=>{
    console.log('Connection OK and OK');
});

/*Making a new schema to put to mode. The given collection name
* is People*/
const UserSchema  = new mongoose.Schema({
    name:String,
    email:String,
    age: Number,
    time:Date

},{
    versionKey:'Bobo_super_v',
    collection:'People'

});

const ProductionSchema = new mongoose.Schema({
    prodName:String,
    machineNr:String,
    date:Date,
    operatorName:String,
    numberOfPackets:Number,
    packetsPerPallet:Number

},{
    collection:'Product'
})


export const UserCol = mongoose.model('UserCol', UserSchema);
export const ProdCollection = mongoose.model('ProductionCollection',ProductionSchema);


