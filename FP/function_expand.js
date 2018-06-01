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


function curry3(fn) {
    if (fn.length === 0) {
        return fn;
    }
    function nest(N, args) {
        return (x) => {
            if (N - 1 === 0) {
                return fn(...args, x);
            }
            return nest(N - 1, [...args, x]);
        };
    }
    return nest(fn.length, []);
}

let add3 =(a,b,c)=>a+b+c;
let me3 = curry3(add);
console.log(me3(4)(3));

let me4 =curry3(add3);
console.log(me4(30)(33)(3));

// te curry jest dobre
function curry4(fn) {
    return (...xs) => {
        if (xs.length === 0) {
            throw Error('EMPTY INVOCATION');
        }
        if (xs.length >= fn.length) {
            return fn(...xs);
        }
        return curry4(fn.bind(null, ...xs));
    };
}

let me5 = curry4(add3);
console.log(me5(4)(44)(4));
console.log(me5(1,32)(3)); //36


//a to wersja czysto funkcyjna
function curry5(fn) {
    function nest(N, args) {
        return (...xs) => {
            if (N - xs.length <= 0) {
                return fn(...args, ...xs);
            }
            return nest(N - xs.length, [...args, ...xs]);
        };
    }
    return nest(fn.length, []);
}

let me6 = curry5(add3);
console.log(me6(1,2)()(5));//8