//   class Base {
//     name = 'foo';

//     static makeInstance<T>(this: new () => T) {
//         return new this();
//     }
// }
// class Extended extends Base {
//     age = 10;
// }

// let base = Base.makeInstance() // is Base
// let extended = Extended.makeInstance(); //is Extended 

// console.log(base.name);//ok
// console.log(extended.age); //ok
// console.log(extended.name);// ok

class Base2 {
    name = 'piko'
    static makeInstance<T>(this: new () => T) {
        return new this();
    }
}

class Alpha2 extends Base2 {
    age = 10
}

interface MakeInstance<T> {
    makeInstance(): new () => T
}


function builder<T extends new () => T>(classParam: T): T {
    let instance = (<any>classParam).makeInstance();
    return instance;
}

let instance1 = builder(Alpha2);
console.log(instance1.age)