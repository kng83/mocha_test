// tworzenie obiektu bez prototypu dzieki temu obiekt nie jest zasmiecany

function C(){}
C.prototype = null;
//sprawdzenie
let o  = new C();
console.log(Object.getPrototypeOf(o) === null);//false
console.log(Object.getPrototypeOf(o) === Object.prototype); //true wynika ze prototypem jest obiekt

// jezeli nie chcemy zasmiecania przez prototypy to stosujemy obiekt create

let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj)=== null); //true //brak prototypu

// wersja niezalecana

let obj2 = {__proto__: null};
console.log(Object.getPrototypeOf(obj2)=== null); //true //brak prototypu


// sprawdzenie czy mozna dodac wlasciwosci
obj.kot = 'mruczek';
obj.age = 3;
console.log(obj); //{ kot: 'mruczek', age: 3 }
console.log(Object.getPrototypeOf(obj)); //null

// test obj2;
obj2.kot = 'bobo';
obj2.age = 4;
console.log(obj2);
console.log(Object.getPrototypeOf(obj2)); //null
