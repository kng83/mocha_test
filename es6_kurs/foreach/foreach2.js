//bardziej skomplikowany przyklad
//Create array of numbers
let numbers = [1,2,3,4,5,6];

//Create a variable to hold the sum
let sum = 0;

//Loop over the array, incrementing the sum variable
//uzywamy formy pojedynczej
numbers.forEach(number =>{
    sum +=number;
});
//print the sum variable
console.log(sum);

//funkcje iteratora mozemy napisac osobno

let liczby =[1,2,3,4,5];
let suma = 0;

function liczSume(liczba){
    suma+=liczba;
}
//przekazujemy tylko referencje do funkcji
liczby.forEach(liczSume);

console.log(suma);