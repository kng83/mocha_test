import {ProdCollection} from "./mongo_connection";





interface Prod{
    prodName:string|String,
    machineNr:string|String,
    date:number|Date,
    operatorName:string|String,
    numberOfPackets:number|Number,
    packetsPerPallet:number|Number
}
describe('Check production utilities',  ()=>{

    beforeEach((done) => {
        ProdCollection.collection.drop(() => {
            done();
        });
    });


    it('Check if connection is OK',()=>{
        ProdCollection.collection.insertOne({
            prodName:'Otto 232',
            machineNr:'Supra 2',
            date: Date.now(),
            operatorName:'Grzes',
            numberOfPackets:14,
            packetsPerPallet:40

        }).then((hhh)=>{
           // console.log(hhh);
        })
    })

});
