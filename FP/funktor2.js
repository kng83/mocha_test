// dostep za pomoca funktora. Otwiera kontener ,stosuje przekazana funkcje do wartosc kontenera a nastepnie zapisuje
// w kontenerze tego samego typu (fmap)

class Wrapper {
    constructor(value) {
        this._value = value
    }

    fmap(f) {
        return new Wrapper(f(this._value));
    }

    toConsole() {
        console.log(this._value);
    }
}

// w funktorze mozemy przekazac tylko funkcje i nie mozemy np sprawdzic czy liczba jest parzysta
let w3 = new Wrapper(32);
let half = v => v / 2;
w3.fmap(half).fmap(half).toConsole(); //11

// Robimy class empty
class Empty {
    map(f) {
        return this;
    }

    toString() {
        return 'Empty ()';
    }
}

//funkcja wrap robi kontener dla value. Jest tutaj przyklad monady
//ktora zwraca pusty obiekt gdy dane sa niepoprawne
const wrap = val => new Wrapper(val);
const empty = () => new Empty();

const isEven = (n) => Number.isFinite(n) && (n % 2 == 0);
const half2 = (val) => isEven(val) ? wrap(val / 2) : empty();
console.log(half2(5)); //Empty
console.log(half2(4)); //Wrapper {_value:2}



