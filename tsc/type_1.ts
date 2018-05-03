interface OtherAdder{
    (a:number,b:number):number;
}
type Adder = (a: number, b: number) => number;
let fooAdder: Adder = (a, b) => a + b;

let foosMull: Adder = function (a, b) {
    return a * b;
}

let oAdder:OtherAdder = (a,b)=> a+b;