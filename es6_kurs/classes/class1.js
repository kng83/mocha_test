//robimy najpiew konstruktor

function Car(options){
    this.title = options.title;
    this.speed = options.speed || 0;
    this.getSpeed = function(){
        return this.speed;
    }
}

//dodajemy metode

Car.prototype.drive = function(){
    return 'vroom';
};

const car = new Car({title:'Focus',speed:10});
console.log(car);
console.log(car.drive());
console.log(car.getSpeed());

//robimy dziedzczenie
//call sprawia ze bierzemy wszystkie wlasciwosci rodzica ale
//jeszcze nie dziala metoda w prototypie
function Toyota(options){
    Car.call(this,options);
    this.color = options.color;
}

//Przepisujemy prototypy
//Toyota.prototype = Car.prototype;//moj dzialajacy
//na dole jescze naprawa konstruktora
//Tu chyba jest tak zrobione zeby nie nadpisywac rodzica
//dlatego nowy obiekt

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;
Toyota.prototype.honk = function(){
    return 'beep';
};

const toyota = new Toyota({
    color:'red',
    title:'Daily Driver',
    speed:100
});
console.log(toyota); //bez dziedziczenia mamy tylko color
console.log(toyota.getSpeed(),'here');
console.log(toyota.drive());
console.log(toyota.honk());



