const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1); //symbol

console.log(symbol3.toString()); //Symbol(foo)

console.log(Symbol('foo') === Symbol('foo')); //false

let sym4 = Symbol(1234);

let obj = {
    [sym4]:function(){
        return 'some tekst'
    },
    name:'pawel'
}

console.log(obj[sym4]()); //some tekst

let some = Object.keys(obj);
console.log(some);

let some2 = Object.getOwnPropertySymbols(obj);
console.log(some2); // Symbol(1234);

let me = Object.create(Symbol.prototype);
console.log(me);
console.log(typeof me);
let me2 = Symbol.for('kot');
console.log(me2);

let me3 = Symbol.keyFor(me2); // Symbol(kot)

let kot  = Symbol('mruczek');
let me4 = {
    [Symbol('pies')]: 10,
    [kot]:11
}

console.log(me4[Symbol('pies')]); //undefined
console.log(me4[kot]); //11

console.log(Object.getOwnPropertySymbols(me4));
