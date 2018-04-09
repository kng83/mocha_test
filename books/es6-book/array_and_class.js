
let arr = [1,2,3];
console.log(Object.getOwnPropertyNames(arr)); //[ '0', '1', '2', 'length' ]
console.log(Object.getOwnPropertySymbols(arr)); // []


class MyArray extends Array{
    constructor(...values){
        super();
        this.values = values;
    }
}

let arr2 = new MyArray(1,2,3,4,5);
console.log(arr2);
function printSome(){
    console.log('pawel jest super');
}
arr2.push(printSome);

console.log(arr2);// MyArray [ [Function: printSome], values: [ 1, 2, 3, 4, 5 ] ]

arr2[0](); // pawel jest super

//********************************** teraz zmieniamy super


class MyArray2 extends Array{

    constructor(...values){
        super();
        this.push(...values);
    }
    getLastValue(){
        console.log(this.length);
        return this[this.length-1]
    }
}

let myArr2 =  new MyArray2(1,2,34,3);
console.log(myArr2); //MyArray2 [ 1, 2, 34, 3 ]
myArr2.push(4);
console.log(myArr2[1],'tutaj');
console.log(myArr2); // MyArray2 [ 1, 2, 34, 3, 4 ]
myArr2.forEach(value => console.log(value)); //1,2,3,34,5


