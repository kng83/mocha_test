function Bobo(name,propName) {
    this.name = name;
    this.prop = propName;
    return {
        [this.prop]:10,
        name:this.name
    }
}

Bobo.prototype.getName = function () {
    return this.name;
};




let bobo = new Bobo('littleBobo','age');
console.log(bobo.constructor);
console.log(bobo.name);
console.log(bobo.age);
console.log(Object.getOwnPropertyNames(bobo));
