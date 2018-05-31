///ddd
//ddd
let some = new Promise(resolve => resolve(10));
some.then(value => console.log(value));


class MyPromise {
    constructor(func) {

        this.value = value;
    }

    resolve(func){

    };

    myThen(func) {
        return func(this.value);
    }
}


let my = new MyPromise((resolve) => resolve(20));
my.myThen((value)=>console.log(value));

