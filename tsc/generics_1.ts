function foos<T>(x: T): T { return x; }
console.log(foos('10')); // '10'

// to dziala tak jak fook ale kiedys nie dzialalo i
// trzeba bylo stosowac wersje fook
const foo = <T>(x: T) => x;
console.log(foo(10)); //10

const fook = <T extends {}>(x: T) => x;
console.log(fook(10)); //10

