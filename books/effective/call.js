// testowanie metody call. Umozliwia ona wywolanie metody innego obiektu i podstawienie swojego obiektu
// call dziala podbnie do apply

let myObj = {
    show: function () {
        return this.myName;
    },
    myName: 'kot'
};

let mySecond = {
    myName: 'pawel'
};
console.log(myObj.show()); //kot
console.log(myObj.show.call(mySecond)); //'pawel'

// wersja po co nam jest call. Jest to wersja bez prototypu a jednak dziala
// funkcja ktora zwraca sume
function sum(arg1, arg2) {
    return arg1 + arg2;
}

let obj = {name: 'pawel'};

obj.temporary = sum; // przypisujemy funkcje do wlasciwosci obiektu
let arg1 = 1, arg2 = 2;
let result = obj.temporary(arg1, arg2); // wywlujemy to funkcje
console.log(result, Object.keys(obj)); //3 ['name','temporary']
delete obj.temporary;
console.log(Object.keys(obj));// ['name']


// to pierwszy przyklad call ale funkcja nie nalezy do obiektu
function sum2(arg1, arg2) {
    return arg1 + arg2;
}

let obj2 = {name: 'bobo'};

let res2 = sum2.call(obj2, 2, 2);
console.log(res2);
console.log(Object.keys(obj2)); // name

// funkcja w obiekcie i call odwoluje sie do value;

let obj3 = {
    value:0,
    add: function (arg1, arg2) {
        console.log('co to',arg1,arg2);
        this.value = arg1 +arg2;
       // return arg1 + arg2;
    }
};

let res3 = {
    value: 10,
    sec:function(arg){
        return arg;
    }
};

obj3.add.call(res3, 3, 4); // obj3.value = 7;
console.log(res3);
console.log(res3.sec('kot'));

let obj4 ={};
console.log(res3.sec.call(obj4,'pies'));
console.log(obj4);


