const Rx = require('rxjs');

// bylejaki magazyn danych
let data = {
    name: 'Pawel',
    age: 30
};

// robimy observera dla ktorego wywolujemy next
let observer = {
    next: (value) => {
        data = value;
    }

};

// robimy observable ktorego dane beda subskrybowane
let observable = new Rx.Observable(observer => {
    observer.next(data);
});


// robimy subject ktory jest naszym observerm i observable
const subject = Rx.Subject.create(observer, observable);

subject.subscribe(value => console.log(value));
//output : pawel ,30
subject.next({name: 'Rysiek', age: 40});

subject.subscribe(value => console.log(value));
//output rysiek ,40


// zwaracamy subject przez funkcje do ktorej mozemy
//miec dostep
const mySubject = function () {
    return new Rx.Subject.create(observer, observable)
}

mySubject().subscribe(value => console.log(value));
mySubject().next({name: 'Kamil', age: '33'});
mySubject().subscribe(value => console.log(value));

// teraz sprawdzmy czy mozemy zrobic gto

let ms = (function() {
        return Rx.Subject.create(observer, observable)
})();

ms.subscribe(value=>console.log(value, 'here'));
ms.next({name:'Roman'});
ms.subscribe(value=> console.log(value));
//Output tylko name:'Roman'



