class Some4 {
    age = 10;
    static makeInstance<T>(this: new () => T) {
        return new this();
    }
}

class Dome extends Some4 {

}

//funkcja dostaje klase jako parametr i zwraca instancje tej klasy
function sommer<T extends any ,K extends { [Key in keyof T]: InstanceType<T[Key]> }>(o: T) {
    let output = {} as K //{ [Key in keyof T]: InstanceType<T[Key]> }
    for (let key in o) {
        output[key] = o[key].makeInstance();
    }
    return output;
}

let min = sommer({s:Some4,d:Dome}); //s:Some4 d:Dome




// class Some {
//     age = 10;
//     public static makeInstance<Some>() {
//       return new Some();
//     }
//   }
//   class Dome extends Some {
  
//   }
  
//   let me: Some;
//   let some = {
//     s: Some,
//     d: Dome
//   }
  
//   function sommer< T extends any >(o: T) {
//     let output = {} as {[Key in keyof T]:InstanceType<T[Key]>}
//     for (let key in o) {
//       output[key] = new o[key]();
//     }
//     return output;
//   }
  
//   let min2 = sommer(some);
//   min2
