import {Document} from "mongoose";
import * as mongoose from "mongoose";


/*Implements interfaces for typescript usage*/
export interface PeopleInterface{
    name?:string|StringConstructor;
    email?:string|StringConstructor;
    age?:number|NumberConstructor
    time?:number|DateConstructor;
}

export interface PeopleSchemaInterface extends PeopleInterface,Document{

}


/*Making a new schema to put to mode. The given collection name
* is People*/
export const PeopleSchema  = new mongoose.Schema({
    name:String,
    email:String,
    age: Number,
    time:Date

},{
    versionKey:'Bobo_super_v',
    collection:'People'

});

