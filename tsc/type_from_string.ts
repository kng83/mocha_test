
// funkcja robi z tablicy stringow obiekt ktory ma klucze i wartosci
// o tej samej nazwie
function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}



const Direction = strEnum([
    'North',
    'South',
    'East',
    'West',
])
/** Create a Type */
type Direction = keyof typeof Direction;

let sample: Direction;
sample = Direction.North; // Okay
sample = 'North'; // Okay
sample = Direction.West;
sample = Direction.South;

let obj = {
    name:'Pawel',
    age:10
};

type Ob= keyof typeof obj;
let some: Ob;
some = 'name'; //'name'| 'age'
console.log(some); //'name'
