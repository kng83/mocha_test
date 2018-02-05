function foo(a, b) {
    return a + b;
}
console.log(foo.length); //2 liczba argumentow
console.log(foo.constructor); //Function:Function
console.log(typeof foo.prototype);  //object

/*Rozszerzajac funkcje o this bedziemy mieli nowe funkcjonalnosci jak stworzymy obiekt
*
*/
function Gadget(name,color){
    this.name = name;
    this.color = color;
    this.whatYouAre= function(){
        return `Jestem ${name} i mam kolor ${color}`
    }
}

Gadget.prototype.cena = '100';
Gadget.prototype.podajCene=function(){
    return this.cena;
};
Gadget.prototype.marka = 'Nikkon';
Gadget.prototype.pobierz = function(coPobrac){
    return this[coPobrac];
};
//te przepisanie sprawia ze obiektowi wydaje sie ze to jego hasOwnPorperty
//dzieje sia tak dlatego bo do obiektu dodajemy a nie do jego prototypu
Gadget.prototype.zmien =function(prop,value){
    this[prop] = value;
};

let kamera = new Gadget('kamera','czarny');
console.log(kamera.whatYouAre());
console.log(kamera.cena); //100
kamera.zmien('cena',50); // cena zmieniona na 50;
//console.log(kamera.podajCene());//50
console.log(kamera.pobierz('color')); //czarny

console.log(kamera.constructor); //Function Gadget
console.log(kamera.constructor.prototype.name); //undefined poniewaz nalezy do tworzonego obiektu
console.log(kamera.constructor.prototype.cena); //100 bo nalezy do prototypu naszego obiektu
console.log(kamera.hasOwnProperty('name')); //true
console.log(kamera.hasOwnProperty('cena')); //true  blad (bo zmieniamy this[prop]
console.log(kamera.hasOwnProperty('marka'));//false -dobrze

//inny przyklad
console.log('##########################################');

let malpa ={
    owlosiona:true,
    je: 'banany',
    oddycha: 'powietrzem'
};

function Czlowiek(nazwisko){
    this.nazwisko = nazwisko;
}

// ustawiamy prototyp czlowieka na malpe
// jesli dany obiekt nie ma swojego pola to sprawdzi swoj prototyp
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! tu jest dziedziczenie
Czlowiek.prototype = malpa;

let romek= new Czlowiek('Romek');
console.log(romek.nazwisko);// Romek
console.log(romek.je); //banany (bo sprawdza swoj prototyp)
console.log(romek.oddycha); //powietrzem/.
console.log(malpa.isPrototypeOf(romek)); //true

//nowa instancja czlowiek

let programista = new Czlowiek();
programista.je = 'pizza';
programista.wymiata = 'javascript';

console.log(programista.wymiata); //javascript
console.log(programista.constructor.prototype);//obiekt
programista.constructor= 'cos';
console.log(typeof  programista.constructor.prototype); // mamy undefind po nadpisaniu konstruktora
console.log(programista.oddycha); // a jednak jest powietrze
console.log(programista.__proto__); //{ owlosiona: true, je: 'banany', oddycha: 'powietrzem' } dostep do prototypu
//__proto__ to pole instancji a prototype to pole konstruktora
malpa.test = 'lubie wspinac sie';
console.log(programista.test); // lubie wspinac sie

//sprawdzmy teraz rozszerzanie obiektow wbudowanych dodajemy pole do tablic inArray;
//wyszukiwanie czy element jest w tablicy

Array.prototype.inArray = function(check){
    for (let i=0; i <this.length; i++){
        if (this[i] ===check){ //sprawdzamy czy instnieje pole z przenoszonym kontekstem
            return true;
        }
    }
    return false;
};

//dwie konstrukcje sa rownowazne
let tablica = ['czerwony', 'bialy', 'zielony'];
let tab = new Array(1,2,3,4);
console.log(tablica.inArray('czarny')); //false
console.log(tablica.inArray('bialy'));// true
console.log(tab.inArray(3)); //true

//teraz do obiektu string dodajmy revers najpierw bierzemy tablice ktora posiada taka metode
let myTab = ['bobik','reksio','rob'];
console.log(myTab.reverse()); //[rob, reksio, bobik]
console.log(myTab.join()); //rob,reksio,bobik
console.log(myTab.join(';'));  //rob;reksio,bobik

//przenosimy to na stringa

let myString = 'to jest jakis tekst';
console.log(myString.split('')); //['t','o',' ','j',...]
console.log(myString.split('').join('')); //to jest ...

String.prototype.reverse= function(){
    //to samo mozna zrobic z apply
    //uzywamy metody reverse z tablicy i wywolujemy ja na stringu
    //najpierw jest split na litery pozniej odwrocenie kolejnosci(reverse) i join na koncu
     return Array.prototype.reverse.call(this.split('')).join('');//tsket sikaj tsej ot
};

console.log(myString.reverse());
console.log('Robert'.reverse());

//Jak sam prototyp
let kotek = ['bialy','duzy','fajny'];
console.log(kotek.reverse()); //fajny, duzy, bialy
console.log(Array.prototype.reverse(kotek)); //in Array: [Function];

console.log(kotek,'2');
console.log(
    (function(){
        this.kotek = kotek; //tu juz jest obrocony kotek
        return Array.prototype.reverse.call(this.kotek); //reverse i call pozwala uruchomic funckje z prototypu
        // ten obiekt tutaj wraca do swojego porzedniego stanu [bialy,duzy,fajny]
    })()
);

//kotek sie tu zmienia wiec zmieniamy obiekt
console.log(Array.prototype.reverse.call(kotek),'3'); //fajny, duzy ,bialy
console.log(Array.prototype.reverse.call(kotek),'4'); //bialy, duzy,fajny
console.log(kotek);



