import *as db from "mongodb";

db.connect('mongodb://localhost:27017/greatDB',{},(err,db)=>{
    if(err) throw err;
    else{

        db.createCollection('people',(err,res)=>{
            if(err) throw err;
            else {
                console.log(res.collectionName);
            }
        });
        db.close();
    }
});



