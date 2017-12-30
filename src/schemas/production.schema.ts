import * as mongoose from "mongoose";
import {Document} from "mongoose";

export interface ProdInterface{
    prodName:string|String,
    machineNr:string|String,
    date:number|Date,
    operatorName:string|String,
    numberOfPackets:number|Number,
    packetsPerPallet:number|Number
}

export interface ProdSchemaInterface extends ProdInterface,Document{

}

export const ProductionSchema = new mongoose.Schema({
    prodName:String,
    machineNr:String,
    date:Date,
    operatorName:String,
    numberOfPackets:Number,
    packetsPerPallet:Number

},{
    collection:'Product'
});
