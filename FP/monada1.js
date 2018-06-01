class Maybe{
    static just(a){
        return new Just(a)
    }
    static  nothing(){
        return new Nothing()
    }
    static fromNullable(a){
        return (a!==null && a!==undefined) ? Maybe.just(a):Maybe.nothing();
    }
    static  of(a){
        return Maybe.just(a);
    }

    get isNothing(){
        return false;
    }
    get isJust(){
        return false;
    }
}

class Just extends Maybe{
    constructor(value){
        super();
        this._value = value;
    }
    get value(){
        return this._value;
    }
    map(f){
        return Maybe.fromNullable(f(this._value))
    }
    getOrElse(){
        return this._value;
    }
    filter(f){
        Maybe.fromNullable(f(this._value) ? this._value : null);
    }
    chain(f){
        return f(this._value);
    }
    log(){
        console.log(this._value);
    }
}

class Nothing extends Maybe{
    map(f){
        return this;
    }
    get value(){
        throw new TypeError('Nie mozna pobrac z objektu nothing')
    }
    getOrElse(other){
        return other;
    }
    filter(){
        return this._value;
    }
    chain(f){
        return this;
    }
    log(){
        console.log('Maybe.Nothing');
    }
}

let pork='8';
let me = Maybe.fromNullable(pork);
console.log(me.isNothing);
console.log(me.isJust);
me.map(value=>value.toUpperCase()).log();
let some =me.map(value=>value.toUpperCase()).value;
console.log(some);

class Dog{
    constructor(name){
        this.name = name;
    }
    getName(){
      console.log(this.name);
    }
}
Dog.prototype.sound=function(){
    console.log('Hau Hau',this.name,this.constructor.prototype);
};

let dog =new Dog('burek')
console.log(dog);
dog.sound();
