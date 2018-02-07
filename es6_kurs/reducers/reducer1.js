//Cwiczenia z reducerow
//Prawdopodobnie mozemy kazdy z innych helperow zastapic reducerem


var numbers  = [10,20,30];
let sum = 0;

//liczymy sume tych liczb
for(let i=0; i<numbers.length; i++){
    sum+=numbers[i]; //add on
}
console.log(sum,'for loop');

//sprawdzmy reduce. Reduce rozni sie od innych helperow
//dlatego ze dajemy do niego za w funckja , parametr inicializujacy
//w tym przypadku 0; pozatym mozemy przekazac dwa parametry
//fsum to tutaj wartosc z startowa czyli ta ktora przekazujemy
//po nawiasie , drugim parametrem jest element tablicy

let someNumbers = [10,20,30];

//fsum bedzie przechodzilo do kazdej nastepnej iteracji jako return value
//reducer zmniejsza nasza tablice do jednej wartosci
let wynik = someNumbers.reduce(function(fsum ,number,index){
    console.log(index); // mozemy wziasc index
    return fsum + number;
},0);

console.log(wynik);



