//testowanie funckji z opcja calle dzieki ktorej mozna dostac nazwe funkcji
function foo(a, b) {
    console.log(arguments.callee.name);
    return a + b;
}

foo(10, 2);

// testowanie metody call. Umozliwia ona wywolanie metody innego obiektu i podstawienie swojego obiektu
// call dziala podbnie do apply

let myObj = {
    show: function () {
        return this.myName;
    },
    myName: 'kot'
};

let mySecond = {
    myName: 'pawel'
};
console.log(myObj.show());
console.log(myObj.show.call(mySecond));

/*Sprawdzenie metody bind*/
//
let obiekt = {
    x: 42,
    getX: function () {
        return this.x;
    }
};

let retrieveX = obiekt.getX; //tu mamy referencje tylko
console.log(retrieveX()); // The function gets invoked at the global scope
// expected output: undefined


let boundGetX = retrieveX.bind(obiekt);
console.log(boundGetX()); //output :42

let nowa = function () {
    return this.x + 4;
};

let bound2 = nowa.bind(obiekt); // bierzemy nowa funkcje bindujemy ja z obiektem
console.log(bound2()); // output: 46

//dalej bind nastepny przyklad
//tutaj widac ze mozna np przekazac latwo ustawiony obiekt
function add(a, b) {
    return a + b;
}

let plus5 = add.bind(null, 5); //jeden argument ustatwia sie na 5 /wywolanie funkcji plus5 bedzie pobierac nowy argument
console.log(plus5(6) /*11*/);
console.log(plus5(7)/*12*/);

let plus8 = add.bind(null, 5, 2); //pelne zapchanie binda nastepny argument nie bedzie juz pobierany
console.log(plus8(3)/*7*/); //3 juz nie jest pobierana

//test funkcji z wieloma argumentami

let arg = [1, 2, 3, 5, 6];

function addMany(...arg) {
    return arg;
}

let many = add(arg);
console.log(many);
let many5 = addMany.bind(null, ...arg);
console.log(many5(7, 8, 9)); //tu wyswietli 123...9

//nastepny przyklad z bind

function list() {
    return Array.prototype.slice.call(arguments);
}

let list_1 = list(1, 2, 3, 4); // [1, 2, 3]
console.log(list_1, 'nr 1');

// Create a function with a preset leading argument
let listBind = list.bind(null, 37);

let list_2 = listBind();
console.log(list_2, 'nr 2');
// [37]

let list_3 = listBind(1, 2, 3);
console.log(list_3, 'nr 3');
// [37, 1, 2, 3]

let list_4 = listBind(4, 5);
console.log(list_4, 'nr 4');
//[37,4,5]

// nastepny przyklad spozniony kwiat generacja listkow

function LateBloomer() {
    this.petalCount = Math.floor(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function () {
    setTimeout(this.createFlower.bind(this), 1000);
    // this.createFlower.bind(this);
};
LateBloomer.prototype.createFlower = function () {
    console.log('I am a beautiful flower with ' +
        this.petalCount + ' petals!');
};


// after 1 second, triggers the 'declare' method
let flower = new LateBloomer();
console.log(flower.bloom());


// teraz przyklady z microsoft

// Definiujemy obiekt ktorego funcja zakresNumerow bedzie sie bindowala z obiektem range
// jak bysmy wywolali sama funkcje zakresNumerow bez opakowania jes w object to jezeli bysmy ja
// wywolali to this odnosilo by sie do obiektu globalnego i funkcji nie moglibysmy wywolac
let bigObj = {

    min:20,
    max:40,
    zakresNumerow: function (value) {

        if (typeof value !== 'number') {
            return false;
        }
        else {
            //this pochodzi z boundowanego uwiazanego obiektu
            console.log('min:', this.min, ' ', 'max:', this.max);
            return value >= this.min && value <= this.max;
        }
    }
};

// Tutaj jest zakres funkcji
let range = {min: 10, max: 20};

// Bind the zakresNumerow function.
let boundZakresNumerow = bigObj.zakresNumerow.bind(range);

// Use the new function to check whether 12 is in the numeric range.
let result = boundZakresNumerow(12);
console.log('Czy liczba jest w zakresie', result);
//Tutaj nie bindujemy
console.log(bigObj.zakresNumerow(10));


//Nastepny microsoftu tym razem z argumentami;

// Define the original function with four parameters.
let displayArgs = function (val1, val2, val3, val4) {
   console.log(val1 + " " + val2 + " " + val3 + " " + val4);
};

//zamiast tego obiektu mozna by dac null'a
let emptyObject = {};

// Create a new function that uses the 12 and "a" parameters
// as the first and second parameters.
let displayArgsBounded = displayArgs.bind(emptyObject, 12, "a");

// Call the new function. The "b" and "c" parameters are used
// as the third and fourth parameters.
//te parametry sa jakby uzupelniajacymi parametrami
displayArgsBounded("b", "c");
// Output: 12 a b c

