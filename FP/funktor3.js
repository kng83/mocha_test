// dostep za pomoca funktora. Otwiera kontener ,stosuje przekazana funkcje do wartosc kontenera a nastepnie zapisuje
// w kontenerze tego samego typu (fmap)
// aby polepszyc wrapper mozemy dodac operator of (tworzy nowa istancje wrappera);
// join splaszcza nam efekt koncowy zagniezdzanych obiektow

class Wrapper {
    constructor(value) {
        this._value = value
    }
    static of(a){
        return new Wrapper(a);
    }

    map(f) {
        return Wrapper.of(f(this._value)); //funktor
    }
    //szukam poziomu undefined i biore 2 wyzej
    join(){
        if(this._value._value._value === undefined){
            return this;
        }
        this._value = this._value._value;
        return this.join();
    }

    toConsole() {
        console.log(this._value);
    }
}



// Robimy class empty
class Empty {
    map(f) {
        return this;
    }
}
Wrapper.of('Witajcie,monady').map(value => value.toUpperCase()).toConsole(); //WITAJCIE,MONADY
let w =Wrapper.of('Witajcie,monady').map(value => value.toUpperCase()).map(value=>value.toLowerCase()).map(value=>value);
console.log(w);// Wrapper { _value: 'witajcie,monady' }
//test tablic
let arr =[[1,3],4].join();
console.log(arr); //1,3,4 - join nam splaszcza tablice

//join splaszcza nam rekurencyjnie wrappera. Moj sposob srednio dobry;
let w2 = Wrapper.of(Wrapper.of(Wrapper.of(Wrapper.of('stosuj podejscie funkcyjne')))).join();
w2.toConsole();

let obj = {name:{name:{name:'Pawel'}}};



