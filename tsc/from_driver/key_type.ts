// Typ zawierajacy klucze do obiektu podawanego jako pierwszy parametr
function extend<T, U extends keyof T>(first: T, second: U): T[U] {
    return first[second];
}

// musimy teraz jako klucza pierwszego obiektu uzyc drugi parametr funkcji;
let x = extend({some: 'kot'}, 'some');
console.log(x)// kot

//************************************************************
// Typ zwracany jest tablica
function extend2<T, U>(first: T, second: U): [T, U] {
    return [first, second]
}

let x2 = extend2({some: 'kot'}, {b: 'hallo'});
console.log(x); //[object,object]

//***************************************
// zlozony interfejs
interface Pair<T1, T2> {
    first: T1;
    second: T2;
}

let x3: Pair<string, number> = {first: 'pawel', second: 4};

//***************************************
//jakis typ do tworzenia fukcji ktora jako parametr musi przyjac string
type S = (x: string) => string;

let someFunct: S = function (x) {
    return x
};

//*****************************************
// jakis interfejs
interface Defender {
    someFunc: ((x: string) => string)
}

let objs: Defender = {
    someFunc: function (x: string): string {
        return x;
    }
}
objs.someFunc('lpt');

//****************************************
//some types

interface A {
    a: string;
}

interface BI extends A {
    b: string;
}

interface C extends BI {
    c: string;
}

interface G<T, U extends BI> {
    x: T;
    y: U;
}

let v1: G<A, C>;               // Ok
let v2: G<{ a: string }, C>;   // Ok, equivalent to G<A, C>
//let v3: G<A, A>;               // Error, A not valid argument for U  (A not extends BI)
let v4: G<G<A, BI>, C>;         // Ok
let v5: G<any, any>;           // Ok
//let v6: G<any>;                // Error, wrong number of arguments
//let v7: G;                // error
let v8: G<BI, C> // poniewaz C extends BI