// jest tu robiona tak zwana zwykla funkcja map ale bez prototypu
// dzieki temu do klasy mozemy dodawac funkcje typu 2.

class Wrapper{
    constructor(value){
        this._value = value
    }
    map(f){
        return f(this._value)
    }
    toString(){
        return `Wrapper (${this._value})`
    }
}

let w = new Wrapper([1,2,3,4]);
let w2 =w.map(value => console.log(value)); //[1,2,3,4]
w.map(console.log)

