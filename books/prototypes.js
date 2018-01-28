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
Czlowiek.prototype = malpa;

let romek= new Czlowiek('Romek');
console.log(romek.nazwisko);// Romek
console.log(romek.je); //banany (bo sprawdza swoj prototyp)
console.log(romek.oddycha); //powietrzem/.
console.log(malpa.isPrototypeOf(romek)); //true
