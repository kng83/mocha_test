// test z funkcja Object.Create tak aby niezalezne bylo od wywolania new


function User(name, password) {
    let self = this instanceof User
        ? this
        : Object.create(User.prototype);

    self.name = name;
    self.password = password;
    return self; // wazne zeby to zworcic
}

User.prototype.toString = function () {
    return "[User" + this.name + "]";
};

User.prototype.checkPassword = function (password) {
    return password === this.password;
};

// ponizsze wywolania so rownowaze
let us = new User('bobo', 'kot');
console.log(us);  // User { name: 'bobo', password: 'kot' }
console.log(us.__proto__); // User { toString: [Function], checkPassword: [Function] }

let us2 = User('mis', 'yogi');
console.log(us2);
console.log(us2.__proto__);