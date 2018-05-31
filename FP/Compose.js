// simple reducer which adds elements from array;
let arr = [1, 2, 3, 4];
let a = arr.reduce((prev, acc) => prev + acc, 10);
console.log(a);
// reducers is ok

//f(g(x));
const pipe = function (...fns) {
    return function (value) {
        return fns.reduce((previous, acc) => acc(previous), value);
    }
};

//f(g(x));
const compose = (...fns) => x => fns.reduceRight((g, f) => f(g), x);

let double = (a) => a * 2;
let subOne = (a) => a - 1;

let com = compose(double, subOne);
let c = com(4);
console.log(c); //6
