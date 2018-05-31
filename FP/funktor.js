// dostep za pomoca funktora. Otwiera kontener ,stosuje przekazana funkcje do wartosc kontenera a nastepnie zapisuje
// w kontenerze tego samego typu (fmap)

class Wrapper{
    constructor(value){
        this._value = value
    }
    map(f){
        return f(this._value)
    }
     fmap(f){
        return new Wrapper(f(this._value));
    }
    toString(){
        return `Wrapper (${this._value})`
    }
    toConsole(){
        console.log(this._value);
    }
}

//let w = new Wrapper([1,2,3,4]);
//let w2 =w.map(value => console.log(value)); //[1,2,3,4]
//w.map(console.log)

let w3 = new Wrapper(5);
w3.fmap(value => value + 2).fmap(value=>value+4).toConsole(); //11
console.log(w3._value);


