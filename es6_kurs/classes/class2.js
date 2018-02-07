
//konstruktor classy jest wykonywany w momencie wykonania
//slowa new;
//zamiast options mozemy sobie odrazu wziac nasz parametr
//dzieki es6 enhanced object literals
class Car {

    constructor({title}){
        this.title = title;
    }

    drive(){
        return 'vroom';
    }
}

const car = new Car({title:'Toyota'});
console.log(car);
console.log(car.drive());

//Robimy inheritance
//super to tak wykonanie konstruktora rodzica
//super = Car.constructor();
//lepiej dac tutaj options tak by wszystko przechodzilo

class Toyota extends Car{
    constructor(options){
        super(options);
        this.color = options.color;
    }

    honk(){
        return 'beep';
    }
}

const toyota = new Toyota({color:'red',title:'Daily'});
console.log(toyota); //{{color:'red',title:'Daily'}}
console.log(toyota.honk())//beep
console.log(toyota.drive());//vroom
