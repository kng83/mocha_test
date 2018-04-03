/*
*Tak prawdopodbnie tworzony jest bind
*/
Function.prototype.bindMe = function(ctx) {
    let fn = this;
    console.log(fn); //Function changeAge (bo this wskazuje na funkcje changeAge
    return function() {
        fn.apply(ctx, arguments);
    };
};

someObj = {name:'Pawel',age:10};

function changeAge(age){
    this.name ='Bobo';
    this.age = age;
}

// bind from library
changeAge.bind(someObj, 12)();
console.log(someObj); //12

// my bind parametr jest wykonywany przez funkcje zwracajaca

changeAge.bindMe(someObj)(24);
console.log(someObj);




