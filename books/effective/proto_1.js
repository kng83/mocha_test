function User (name,password){
    this.name = name;
    this.password = password;
}

User.prototype.toString = function(){
    return "[User" + this.name +"]";
};

User.prototype.checkPassword = function(password){
    return  password === this.password;
};

let u = new User('pawel',1234);

console.log(u.checkPassword(1234)); // true

// te 3 funkcje sa rownowazne . 2 pierwsze odnosza sie do instancji klasy a ostatnia do samej klasy
console.log(Object.getPrototypeOf(u)); // User { toString: [Function], checkPassword: [Function] }
console.log(u.__proto__); // User { toString: [Function], checkPassword: [Function] }
console.log(User.prototype); // User { toString: [Function], checkPassword: [Function] }

// Niby lepiej jest uzywac getPrototypeOf niz __proto__ bo jest ona w standardzie ES5


