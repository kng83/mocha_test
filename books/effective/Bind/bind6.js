const EventEmitter = require('events');

/*Tworzymy event clik ktory zostanie wyemitowany po 2 sekundach*/
let myEvent = new EventEmitter();

setTimeout(()=>{
    myEvent.emit('click');
},2000);

//----------------------------------
/* Tworzymy obiekt do ktorego wstrzykujemy event nasluchujacy click
* dzieki bindowaniu mozemy wywolac funkcje nalezaca do obiektu ale dodana proptotypowo
* onclick
* */
class MyObject{
    constructor(element){
        this.elm = element;
        this.onListen();
    }
    onListen(){
        this.elm.addListener('click', this.onClick.bind(this, true))
    }
}

MyObject.prototype.onClick = function(e) {
    let t = this;
    console.log(e);
    // do something with [t]...
    // without bind the context of this function wouldn't be a MyObject
    // instance as you would normally expect.
};

let myObj = new MyObject(myEvent);
