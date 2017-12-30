import {ProdCollection} from "./mongo_connection";
import {singleProduction} from "../src/data/production_data";
import {ProdInterface, ProdSchemaInterface} from "../src/schemas/production.schema";
import {InsertOneWriteOpResult} from "mongodb";
import * as assert from "assert";
import {isNull} from "util";




describe('Check production utilities',  ()=>{

    beforeEach((done) => {
      ProdCollection.collection.drop(() => {
            done();
       });
    });

    /*Create element in collection and remove this element
    * */
    it('Try delete production rekord',(done)=>{
        ProdCollection.collection
            .insertOne(singleProduction)
            .then((doc:InsertOneWriteOpResult)=>{
                ProdCollection
                    .remove({prodName:'Otto 232'})
                    .then(()=>{
                        ProdCollection
                            .findOne({ machineNr:'Supra 2'})
                            .then((prod:ProdSchemaInterface)=>{
                                assert(isNull(prod));
                                done();
                            });
                    });
            });
    });

    it('Check if you can find prodName',(done)=>{
        ProdCollection.collection
            .insertOne(singleProduction)
            .then((doc:InsertOneWriteOpResult)=>{
                ProdCollection
                    .findOne({prodName:'Otto 232'})
                    .then((prod:ProdSchemaInterface)=> {
                        assert(prod.prodName === 'Otto 232');
                        done();
                        //
                    }).catch((err)=>{
                        console.log('Ups you got an error: ',err.code);
                });
        })
            .catch((err)=>{
                console.log('You got first level error',err.code);
            });
    });

});
