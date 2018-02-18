// On trzyma wartosc bierzaca subskrypcji

const Rx = require('rxjs');

let subject = new Rx.BehaviorSubject(0) // 0 is the initial value

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);

subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

subject.next(3);

// observer b dopiero subskrybuje po 2 next
// ale bierze wartosc juz przy pierwszym subskrybowaniu bo BSubject zawiera wartosc
// dla Subject patrz nizej tak by juz nie bylo
// observerA: 0
// observerA: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3

// dla zwyklego subjecta bylo by to
// observerA: 1
// observerA: 2
// observerA: 3
// observerB: 3
