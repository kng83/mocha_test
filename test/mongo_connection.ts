import * as mongoose from 'mongoose';
import {PeopleSchema, PeopleSchemaInterface} from '../src/schemas/people.schema';
import {ProductionSchema} from '../src/schemas/production.schema';

//Adding global promises instead of mongoose
(<any>mongoose).Promise = global.Promise;

//Adding interface to the schema



mongoose.connect('mongodb://localhost/mainDB',{
    useMongoClient: true,

},()=>{
   console.log('Db connected');
}).catch((err)=>{
    console.log('Failed to connect db: ',err);
});


const db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error appears'));
db.once('open', ()=>{
    console.log('Connection OK and OK');
});


export const PeopleCollection = mongoose.model('PeopleCollection',PeopleSchema);
export const ProdCollection = mongoose.model('ProductionCollection',ProductionSchema);


