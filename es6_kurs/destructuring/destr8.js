//test
// tu jest wazne ze ostatni element dodany jest pusta tablica
let numbers = [4,5,6];
function printNumbers(numery){
    let [first,...rest] = numery;
    if(first === undefined){
        return [4];
    }
    return [first,...printNumbers(rest)];
}

//jezeli funkcja zwraca tablice to przypisujemy ja do nowej zmiennej
    let x = printNumbers(numbers)
console.log(x);

//przepisanie liczb przy uzyciu petli for do nowej tablicy
let liczby = [5,6,7,8];
let myArray =[];
for(let i=0; i<liczby.length;i++){

    myArray = [...myArray,liczby[i]]
}
console.log(myArray); //5,6,7,8

//przyklad kolejny wsuniecie elementu do tablicy
let hArray = [1,2,3];
hArray.push(4);
console.log(hArray);//1,2,3,4
hArray = [...hArray,5];
console.log(hArray);//1,2,3,4,5;

//some test with array
function itArray(object)
{
    console.log(hArray.constructor);
    return object.constructor === Array;

}
console.log(itArray(hArray));
