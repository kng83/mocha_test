// Create observable from multiple values

const Rx = require('rxjs');

//stworzenie observable z wartosci

let myObservable = Rx.Observable.of('Pawel', 'Janek');
myObservable.subscribe(value => console.log(value));

//stworzenie observable z tablicy

let secondObservable = Rx.Observable.from(['Czesiek', 'Rysiek']);
secondObservable.subscribe(value => console.log(value));

// lets make simple promise

let promise = new Promise(resolve => {

    setTimeout(() => {
        resolve('Vladek')
    }, 3000)
});

// promise.then(value=> console.log(value));
// Teraz z observable podpinamy do promisa

let promiseObservable = Rx.Observable.fromPromise(promise);
promiseObservable.subscribe((value) => console.log(value));


// teraz sprubjemy podpiac observable do callback
let callback = function () {
    console.log('tu jest igor');
    return this;
};

// Pruba bindowania do callback'a , bidujemy do setTimeout
// i podstawiamy observable
// to dziala ale za chiny nie mozna dostac sie do Igora

let cbObservable = Rx.Observable.bindCallback(setTimeout);
let some =cbObservable(callback,4000).subscribe();



