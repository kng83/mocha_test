
class MyFirst{
    protected verify;

    get verifyAll(){
        this.verify = 'verifyAll';
        return this;
    }
    get verifySome(){
        this.verify = 'verifySome';
        return this;
    }
    validate(req:any){
        return this.signDoc.bind(null,this.verify,req)

    }
    signDoc(verifyId,req){
        // checking validation rules
        return true;
    }
}


class MySecond extends MyFirst{

    makeSomething(req:any){
        console.log(req);
        if(this.validate(req)) return true;

    }
}
let second = new MySecond();
console.log(second.verifyAll.makeSomething('Pawel')) //true
console.log(second.verifySome.makeSomething('robert')) //true