// Dynamiczne property dajemy age
class Bobo{
    constructor(name,propName){
        this.name = name;
        this[propName] = 10;
    }
}

let bobo = new Bobo('littleBobo','age');
console.log(bobo.constructor);
console.log(bobo.name);
console.log(bobo.age);
console.log(Object.getOwnPropertyNames(bobo));
