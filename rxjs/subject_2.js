const Rx = require('rxjs');

let observable = Rx.Observable.from([1, 2, 3]);
let subject = new Rx.Subject();
let multicasted = observable.multicast(subject);

// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
    next: (v) => console.log('observerA: ' + v)
});
multicasted.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

// This is, under the hood, `source.subscribe(subject)`:
//console.log output
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3
// multicasted trzeba wlaczyc connect
// multicast return a ConnectObservable  co jest normalna observable ale
// z metoda connect();
multicasted.connect();
