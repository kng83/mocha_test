// Przyklad z winow time
const Rx = require('rxjs');

let subject = new Rx.ReplaySubject(100,500/* windowTime */);

subject.subscribe({
    next: (v) => {

        v>50 ? clearInterval(interval): console.log('observerA: ' + v);
    }


});

let i = 1;
let interval = setInterval(() => subject.next(i++), 200);

setTimeout(() => {
    subject.subscribe({
        next: (v) => console.log('observerB: ' + v)
    });
}, 10000);

//output observer b przechwytuje ostatnie dane z 500ms
// inczej by przechwycil 100 danych widac ze parametr window dominuje
// observerA: 1
// observerA: 2
// observerA: 3
// observerA: 4
// observerB: 3
// observerB: 4
