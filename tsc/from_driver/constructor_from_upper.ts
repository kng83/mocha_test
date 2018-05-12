class Mika{
    name:string;
    constructor(){}
    get some(){

        let f = this.constructor();
        delete f.name;
        f.name = 'Pawel';
        return f;
    }
}

class Pika extends Mika{
    className ='Pika';
    age=10;
}


let pika = new Pika();
console.log(pika.some.name);
console.log(pika.some.className);
console.log(pika.some.age);
console.log(pika.age);