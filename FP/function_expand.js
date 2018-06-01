function curry(fun) {
    return function (arg1) {
        return function (arg2) {
            return fun(arg1, arg2);
        }
    }

}

let add = (val1, val2) => val1 + val2;

let me = curry(add);
console.log(me(4)(3)); //7

//wersja 2 argumentowa strzalkowa
let curry2 = (fun) => (arg1) => (arg2) => fun(arg1, arg2);
let me2 = curry2(add);
console.log(me2(4)(4)); //8


let curry3 = function (fun) {
    let recursion = function (fun, ...arg) {
        let [first, rest] = arg;
        return recursion(fun, rest);
    }
    return recursion();
}

