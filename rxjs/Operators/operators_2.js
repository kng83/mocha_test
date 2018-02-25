// tujest pokazene jak zrobic instancje operatora

const Rx = require('rxjs');

Rx.Observable.prototype.multiplyByTen = function multiplyByTen() {
    let input = this;
    return Rx.Observable.create(function subscribe(observer) {
        input.subscribe({
            next: (v) => observer.next(10 * v)
        });
    });
};

let observable = Rx.Observable.from([1, 2, 3, 4]).multiplyByTen();

observable.subscribe(value => console.log(value));


// tworzenie instacji Observable gdzie this uzyte od razu

Rx.Observable.prototype.addText = function addText(someText) {

    return Rx.Observable.create((observer) => {
        this.subscribe({
            next: (value) => observer.next(value + ' ' +someText)
        })
    })
};

let obs = Rx.Observable.from(['Pawel', 'Jurek', 'Janek'])
    .addText('Bobo')
    .subscribe((value) => console.log(value));

