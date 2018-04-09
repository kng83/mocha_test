function Bobo(name) {
    this.name = name;
}

Bobo.prototype.getName = function () {
    return this.name;
}

let prop = 'age';
class Some extends Bobo {
    constructor(name){
        super(name);
        this.age = 10;
    }
    setName(){
        return this.name;
    }
}

let some = new Some('pawel');

console.log(some.getName());
console.log(some.age);