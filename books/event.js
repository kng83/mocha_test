const EventEmitter = require('events');


// tworzymy event emitter
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occurred!');
});
myEmitter.emit('event');

//try it old way
//czyli mozemy wywolac funkcje Emitter.on gdy wyzwolimiy metode .emit
//addListener i .on robia w zasadzie to samo
const mojEmitter = new EventEmitter();
mojEmitter.on('make', function(someValue){
    console.log(`Nowy emitter powstal i ma imie ${someValue}`);
    return someValue;
});

// 3 wersje event emittera

mojEmitter.on('koko', ()=>{
    console.log('I hear you event second time')
});

mojEmitter.addListener('koko',()=>{
    console.log('I hear make event first time');
});

mojEmitter.once('koko', ()=>{
    console.log('I hear this is make once');
});

let someValue ='Robot';
mojEmitter.emit('make',someValue);
mojEmitter.emit('koko');



// Teraz wykonajmy event emitter polaczony bind z event emitter

{
    let data;

    let eventDaneGotowe = new EventEmitter();


    function DataObject() {
        this.name = "Data Object";
        this.data = function () {
            return data;
        };

        // tutaj jest referencja do funkcji obrabiajacej dane.
        // Widac tu ze mozemy wziac funkcje z zewnatrz i przpisac jej bindem nasz obiekt
        // i na nim operowac

        this.daneUkonczone = daneUkonczoneHandler;
        //tu nasluchujemy eventu z emittera
        eventDaneGotowe.on('dataReady', daneUkonczoneHandler.bind(this));
        //lub tak
        eventDaneGotowe.on('dataReady',this.daneUkonczone.bind(this));
    }

    // funkcja wyswietlajaca dane this odwoluje sie do DataObject
    function daneUkonczoneHandler() {
        if (console && console.log) {
            console.log("Objekt danych nazwa: " + this.name);
            console.log("Objekt danych wartosc: " + this.data());
        }
    }

    setTimeout(function () {
        data = [0, 1, 2, 3];
        eventDaneGotowe.emit("dataReady", true, false);
    }, 4000);
}

const dataObj = new DataObject();



// wersja z klasa
// w es6 inczej niz w typescript trzeba definiowac stale do konstruktora

class MyClass{

    constructor(){
        this.name= 'super klasa';
        this.val = 10;
        this.myEvent = new EventEmitter();
    }
    eventEmitt(value,data){
        this.myEvent.emit(value,data);
    }
    eventListen(){

       this.myEvent.on('some',(data)=>{
           //przy arrow funkcji this odnosi sie do tego na zewnatrz funkcji
           console.log(data);
           this.name = data.name;
           this.val = data.val;
           let help = printData.bind(this);
           help();

       });
    }
}

let myClass = new MyClass();
myClass.eventListen();


function printData(){
    console.log('to jest nazwa:',this.name);
    console.log('to jest wartosc:', this.val);
}



(function eventPusher(){
    setTimeout(()=>{
       myClass.eventEmitt('some',{name:'super pawel',val:34});
    },5000)
})();


