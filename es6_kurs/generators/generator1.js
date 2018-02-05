const util = require('util'); //do inpekcji
/*function that can be exit end back multiple times
* ponizej pierwszy generator
* dwie wersje gwiazdka przy funkcji lub przy nazwie funkcji function* numbers()
* suspended to zawieszony
* enter and exit multiple times - generator
* reveal - odslonic
* generatorami mozna robic tranzycje
* */

//niby to potrafi gleboko wejsc
let help = {};
console.dir(help,{depth:null});

/*Przyklad generatora
* W generatorz musi byc yield(plon)
* generator zwraca obiekt ktory ma metode next()
* liczba yield odkresl ilosc wywolan do done:true*/
function *numbers(){
    yield;
}
console.log(numbers()); //{}

const generator =numbers();
console.log(generator.next()); //value undefined, done false
console.log(generator.next()); //value undefined, done true


/*Przyklad generatora pujscie do chodnikiem do sklepu
* wejscie do sklepu z pieniedzmi kupienie i wyjscie ze
* sklepu lekcja 16 wyklad 51
* generator trzeba zadeklarowac np const pierwsze next wywoluje
* kod do pierwszego yield nastepnie funkcja jest opuszczana do kolejnego next
* yield moze przenosic wartosc na zewnatz next do wewnatrz i nie ma nastepnego nextu wiec
* ten drugi zwroci w callbacku groceries*/
console.log('-------------------------------')

function *shopping(){
    //stuff on the sidewalk (chodnik)

    //walking down the sidewalk

    //go into the store with cash
    //tutaj wyjdzie yield z cash na zwnatrz a next.gen przesle
    // wartosc groceries do stuffFromStore i wystartuje od tego momentu
    const stuffFromStore = yield 'cash'; //cash to value

    //zanim pujdziemy do domu pojdziemy do plarni bo chcemy czyste ubrania
    const cleanClothes  =yield 'laundry';

    //walking back home damy do tablicy 2 rzeczy
    return [stuffFromStore,cleanClothes];
}

//stuff in the store (to w sklepie)

const gen = shopping();
//leaving our house
console.log(gen.next()); //value: 'cash' , done: false
//leaving a store with groceries (artykuly spozywcze)
console.log(gen.next('groceries'));//value:'laundry, done: true
console.log(gen.next('clean clothes'));//value:['groc..','clea..'],done:true




