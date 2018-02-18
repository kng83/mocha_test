
const Rx = require('rxjs');
let subject = new Rx.ReplaySubject(3); // buffer 3 values for new subscribers

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

subject.next(5);

//output replaySubject pamieta poprzednie wartosc i moze je przekazac
//do subskrybenta ( w tym przypadku 3 ostanie przekazuje
// jak dalibyscmy liczbe 4 to wszystkie poprzedzajace bylyby przekazane
// jako drugi parametr ma windowtime (ze mozna przekazac np z ostatnich minut)
// observerA: 1
// observerA: 2
// observerA: 3
// observerA: 4
// observerB: 2
// observerB: 3
// observerB: 4
// observerA: 5
// observerB: 5
