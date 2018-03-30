// pruba wstrzykniecia obiektu do obiektu przy uzyciu bind


let first = {
    name: 'pawel',
    age: 34,
    payload: function () {
        return this;
    },
    addProp: function () {
        this['lubi'] = 'ryby';
    }
};

let second = {
    kot: 'piorun',
    ability: 'fast moving'
};

console.log(first.payload()); //poczotkowy obiekt obiekt
first.addProp(); // dodajemy lubi property
console.log(first.payload()); //lubi dodane


console.log(first.payload.bind(second)()); //wyswietl obiekt kot
first.addProp.bind(second)();
console.log(first.payload.bind(second)()); // dodaje lubi ryby property

