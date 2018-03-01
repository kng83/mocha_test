//ci

let Rx = require('rxjs');

let obs = Rx.Observable.create(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
});


// poniewaz obs.sub.. zwraca obiekt subskrypcji mozemy go unsubscribe
let outObs = obs.subscribe(data => console.log(data));
outObs.unsubscribe();

let hearObs = obs.subscribe(data => console.log(data));

// przyklad odsubskrybowania setInterval

let observable = Rx.Observable.create(observer => {

    let interval = setInterval(() => {

        observer.next('Hallo');
    }, 1000);


    return function unsubscribe() {
        clearInterval(interval);
    }
});

// odsubskrybowanie po 5 sekundach
let counter = 0;
let myObservable = observable.subscribe(observer => {
    console.log(observer + ' ' + counter);
    counter++;
    if (counter > 5) {
        myObservable.unsubscribe();
    }
});


// iterval example
// przekazywany jest licznik do subscribe
let myObs = Rx.Observable.interval(1000);

let subscription = myObs.subscribe(x => {

        x<5 ? console.log(x + ' interval') : subscription.unsubscribe();
    }
);




