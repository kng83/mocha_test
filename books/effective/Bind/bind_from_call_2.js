// pruba zrobienia bind from call wersja moje

Function.prototype.bindMe = function (thisArgs, args) {
    let fn = this;
    let arg = args;
    return function () {
        fn.call(thisArgs, arg);
    };
};

someObj = {name: 'Pawel', age: 10};

function changeAge(age) {
    this.name = 'Bobo';
    this.age = age;
}

let chAge = changeAge.bindMe(someObj, 23)(); //moja wersja bind bliska natywnej
console.log(someObj); //zmiana age na 23

let chAge2 = changeAge.bind(someObj, 24)();
console.log(someObj); //zmiana age na 23