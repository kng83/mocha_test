
const Rx = require('rxjs');
const myInterval = Rx.Observable.interval(2000);

let obs$ = Rx.Observable.of('Pawel'); // robi observable z obiektu

// combine laczy dwie observable
const third = Rx.Observable.combineLatest(myInterval,obs$);
third.subscribe(value=> console.log(value));

// output [1,Pawel],[2,Pawel]

// mapuje inna observable z bierzaca
// po poloczeniu z intervalem zwraca caly czas Pawel
let result = myInterval.mergeMap(() => obs$);
// output Pawel

result.subscribe(some => console.log(some));


// sprawdzenie map tu. Zwraca scalar observable object (dostep do wartosci
// przez value)
let observable$ = Rx.Observable.of('Bobo');
let fourth =myInterval.mapTo(observable$);
fourth.subscribe(value => console.log(value.value));






