// class Base {
//     name = 'foo';

//     static makeInstance() {
//         return new this();
//     }
// }
// class Extended extends Base {
//     age = 10;
// }

// let base = Base.makeInstance() // is Base
// let extended = Extended.makeInstance(); //should be Extended 

// console.log(base.name);//ok
// console.log(extended.age); //output ok; age doesn't exists
// console.log(extended.name);// ok

//solved 

class Base {
    name = 'foo';
  
    static makeInstance<T extends Base>(this: { new(): T }) {
      return new this() as T;
    }
  }
  
  class Extended extends Base {
    age = 10;
  }
  
  
  let base = Base.makeInstance() // is Base
  let extended = Extended.makeInstance(); //should be Extended 
  
  console.log(base.name);//ok
  console.log(extended.age); //output ok; age doesn't exists
  console.log(extended.name);// ok