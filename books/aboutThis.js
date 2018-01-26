
//sprawdzenie zasiegu this
function ops(nazwa, callback) {
    return callback(nazwa);
}

function cb(val) {
    console.log(val,this.name);
}

    //dodanie globalnej zmiennej
    global.imie = 'Rysiek'

    function Wrapper() {
        this.name = 'Pawel';
        ops('Waldek', cb); //waldek i undefind

        //second i pawel arrow function  bierze this z wrappera
        ops('Romek', () => {
            console.log('second', this.name);
        });

        //third i pawel // jesli this to ono do niczego nie referuje
        let self = this.name;
        ops('Tadek', function () {
            console.log('third', self);
        });

        //aby referowalo do globalnej musimy dac global
        //on referuje do globalnej zmiennej (w przegladarce do winodow) fourth Rysiek
        ops('Jurek',function(){
            console.log('fourth', this.imie);
        })
    }

const wrap = new Wrapper();

// Teraz test funckji

global.zmienna = 'kot';

function spr(){
    console.log(this.zmienna); //kot
}
spr();

function spr2(){
    let zmienna = 'pies'; //kot
    spr();
}

spr2();

let spr4 = new spr2(); // kot mimo ze tworzony jest obiekt

function spr3(){
    this.zmienna = 'pies'; //pies
    spr();
}
spr3();
spr2(); //pies bo nadpisana zmienna


//Nastepny test

function K1(){
    this.zmienna = 'kura';
    this.show=function(){
        console.log(this.zmienna) //bedzie kura jesli nowy obiekt
    };
    console.log(zmienna); // tu bedzie pies
}
let k1 = new K1();
k1.show();
