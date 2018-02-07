//example
//destrukturyzacja
const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

function isEngineer(profile) {
    let {title,department} = profile;
    return title === 'Engineer' && department === 'Engineering';
}
console.log(isEngineer(profile));

//teraz konwersja na
//[{subject:'Geography',time:'2PM, teacher: 'Mrs. Larsen'}]

const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];
//najpierw rodzielamy na properties
const classesAsObject = classes.map(([subject,time,teacher])=>{
    return {subject:subject,time:time,teacher:teacher}
});
console.log(classesAsObject);

//Przyklad ostatni zrob podwojenie z rekurencja

const numbers = [1, 2, 3];

function double(numbers) {

    let helpArray =[];
    let recurs =function(numbers){
        let [item, ...rest] = numbers;
            if(!item){
                return false;
            }
            helpArray=[...helpArray,item *2];
            recurs(rest);
    };
    recurs(numbers);
    return helpArray;

}
console.log(double(numbers));

//prosciej

function doub(numbers) {
        let [item, ...rest] = numbers;

        if(item instanceof Array) {
            return numbers;
        }
        return doub([...rest,[item*2]]);
}

console.log(doub(numbers));

let [item,...rest] = numbers; //[1,2,3]
let simpleArray = [[item],rest];
let secondArray = [[item],...rest];
let thirdArray = [...rest,[item]];

console.log(simpleArray);  //[ [ 1 ], [ 2, 3 ] ]
console.log(secondArray); //[ [ 1 ], 2, 3 ]
console.log(thirdArray);//[ 2, 3, [ 1 ] ]
console.log(thirdArray instanceof Array); //true
console.log(item instanceof Array);

//ciekawy przyklad
//ostatnie wywolanie make2 zwraca pusta tablice i zamyka returna na dole
function make2( [ number, ...rest ] ) {
    if (number === undefined){
        return [];
    }else {
        return [number *3,...make2(rest)]
    }
  //  return number === undefined ? [] : [number * 2, ...make2(rest)];
}

console.log(make2(numbers),'make');


