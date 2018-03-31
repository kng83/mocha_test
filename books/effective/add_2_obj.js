// Wstrzykniecie obiektu do obiektu przez

let simple = {
    name: 'pawel',
    age: 34,
    getAge: function () {
        return this.age;
    },
    someArr: [10, 20, 30]
};

/*Kopiownia obiektu source do target dane w target sa dodawane
* a nie nadpisywane kopiowane sa wartosci a nie referencje nie dotyczy tablic
* wiec to jest plytkie dodawanie*/
let pattern = {
    addObj: function (source, target) {
        Object.keys(source).forEach((key) => {
            console.log(source[key], key);
            target[key] = source[key];
        })
    }
};
let targetObj = {cash: 10};

pattern.addObj(simple, targetObj);
//taget ma teraz wlasciwosci simple i swoje
console.log(targetObj, 'tagetObj'); //cash ,name ,age
targetObj.age = 44;
console.log(targetObj.age); //44
console.log(simple.age); //34

// sprawdzenie tablicy
targetObj.someArr[0] = 11;
console.log(simple.someArr); // 11 tablica jest tu referencja
