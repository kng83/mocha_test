// Przyklad jak subject_3 ale liczymy referencje
// refCount uruchamia multicasted Observable kiedy liczba subskrybentow
// przejdzie z 0 do 1; przestanie robic multicast jezeli znikna subskrybenci

const Rx = require('rxjs');

let source = Rx.Observable.interval(500);
let subject = new Rx.Subject();
let refCounted = source.multicast(subject).refCount();
let subscription1, subscription2, subscriptionConnect;

// This calls `connect()`, because
// it is the first subscriber to `refCounted`
console.log('observerA subscribed');
subscription1 = refCounted.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

setTimeout(() => {
    console.log('observerB subscribed');
    subscription2 = refCounted.subscribe({
        next: (v) => console.log('observerB: ' + v)
    });
}, 600);

setTimeout(() => {
    console.log('observerA unsubscribed');
    subscription1.unsubscribe();
}, 1200);

// This is when the shared Observable execution will stop, because
// `refCounted` would have no more subscribers after this
setTimeout(() => {
    console.log('observerB unsubscribed');
    subscription2.unsubscribe();
}, 2000);




