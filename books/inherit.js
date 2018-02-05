/*Przyklady z dziedziczeniem*/

function Figura() {
    this.nazwa= 'figura';
    this.getNazwa= function(){
        return this.nazwa;
    }
}

function Figura2D() {
    this.nazwa = 'figura 2D'
}

function Trojkat(bok,wysokosc){
    this.nazwa = 'Trojkat'
    this.bok = bok;
    this.wysokosc = wysokosc;
    this.getPole = function(){
        return this.wysokosc*this.bok/2;
    }
}

//Dziedziczenie wyglada tak
Figura2D.prototype = new Figura();
Trojkat.prototype = new Figura2D();
//dobrze jest jeszcze nadpisac konstruktory

Figura2D.prototype.constructor = Figura2D;
Trojkat.prototype.constructor = Trojkat;

let trojkat = new Trojkat(10,4);
console.log(trojkat.getPole());// pole 20
console.log(trojkat.getNazwa()); //trojkat

//__proto__ mozna wedrowac po instancji
// jezeli metoda badz w wlasciwosc nie jest znaleziona w obiekcie sprawdzany jest __proto__ i tam szukana jest metoda
console.log(trojkat.__proto__.nazwa); //figura 2D
console.log(trojkat.__proto__.__proto__.nazwa);//figura
console.log(trojkat.constructor);//Function Trojkat
console.log(trojkat.constructor.prototype.nazwa);//figura 2D
console.log(trojkat instanceof Figura2D); //true
console.log(trojkat instanceof Figura); //true /instanceof of- mala litera
//sprawdzenie czy jest polem obiektu
console.log(Figura.prototype.isPrototypeOf(trojkat)); //true;
console.log(Trojkat.prototype.isPrototypeOf(trojkat));//true

//wersja lepsza bo operujaca na prototypach

console.log('nowy przyklad ************************')
console.log('najpierw nalezy zadbac o dziedziczenie a pozniej o rozszerzenie typu jest tu wieksza wydajnosc');
function Fig(){}
Fig.prototype.nazwa = 'Figura';
Fig.prototype.getNazwa = function(){return this.nazwa}; //musi byc normalna funkcja nie arrow bo this nie moze byc lokalny

function Fig2D(){}
//obsluga dziedziczenia
Fig2D.prototype = new Fig();
Fig2D.prototype.constructor = Fig2D;

//rozszerzenie prototypu
Fig2D.prototype.nazwa ='Figura 2D';

function Troj(bok,wysokosc){
    this.bok = bok;
    this.wysokosc = wysokosc;
}

//dziedziczenie z figury 2d
Troj.prototype = new Fig2D();
Troj.prototype.constructor = Troj;

//rozszerzenie prototypu
Troj.prototype.nazwa = 'Trojkat nowy'
Troj.prototype.getPole = function(){return (this.bok * this.wysokosc)/ 2};//z arrow function this don't work

let myTroj = new Troj(10,5);
console.log(myTroj.getPole());
console.log(myTroj.getNazwa());


/*Wada ponizszego przykladu jest to ze jak zminimy dziecko to zmienimy rowniez rodzica bo nie jest to po obiekcie
* tylko przez referencje jezeli utworzymy teraz obiekt new FigZ to wartosc bedzie trojkat
* jak wprowadzimy tymczasowy konstruktor new F() to odetniemy dzieci od rodzica
* */
console.log('nowy przyklad ************************');
console.log('tu dziedziczymy sam prototyp bez tworzenia nowych obiektow jeszcze wieksza wydajnosc');

//tymczasowy konstruktor
let F = function(){}

function FigZ(){}
FigZ.prototype.nazwa = 'Figura';
FigZ.prototype.getNazwa = function(){return this.nazwa}; //musi byc normalna funkcja nie arrow bo this nie moze byc lokalny

function FigZD(){}
//obsluga dziedziczenia ale po prototypie nie po obiekcie
FigZD.prototype = FigZ.prototype;
FigZD.prototype = new F(); //konstruktor tymczasowy
FigZD.prototype.constructor = FigZD;

//rozszerzenie prototypu
FigZD.prototype.nazwa ='Figura 2D';

function TrojZ(bok,wysokosc){
    this.bok = bok;
    this.wysokosc = wysokosc;
}

//dziedziczenie z figury 2d
TrojZ.prototype = FigZD.prototype;
TrojZ.prototype = new F(); //konstruktor tymczasowy odcinajacy
TrojZ.prototype.constructor = TrojZ;

//rozszerzenie prototypu
TrojZ.prototype.nazwa = 'Trojkat nowy'
TrojZ.prototype.getPole = function(){return (this.bok * this.wysokosc)/ 2};//z arrow function this don't work

let myTrojZ = new TrojZ(10,5);
console.log(myTrojZ.getPole());
console.log(myTroj.constructor);

let myFigZ= new FigZ();

//jezeli ominiemy  = new F() to bedziemy mieli ponizej trojkat bo bedzie przejscie przez referencje
console.log(myFigZ.getNazwa());//Figura

//tu sie znudziles i skonczyles na stronie 112 javascript obiekty;