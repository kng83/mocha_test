// dostep za pomoca funktora. Otwiera kontener ,stosuje przekazana funkcje do wartosc kontenera a nastepnie zapisuje
// w kontenerze tego samego typu (fmap)

class Wrapper{
    constructor(value){
        this._value = value
    }
    fmap(f){
        return new Wrapper(f(this._value));
    }
    toConsole(){
        console.log(this._value);
    }
}


// w funktorze mozemy przekazac tylko funkcje i nie mozemy np sprawdzic czy liczba jest parzysta
let w3 = new Wrapper(32);
let half = v => v/2;
w3.fmap(half).fmap(half).toConsole(); //11



