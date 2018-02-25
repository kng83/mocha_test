const Rx = require('rxjs');
let interval = Rx.Observable.interval(2000);
// do to funkcja posredniczaca
interval.do(console.log).take(5).subscribe(value=>value);
// omija 4
interval.filter(value => value!==4).take(6).subscribe(value=>console.log(value));

interval.find(value => value===3).subscribe(value =>console.log(value,'this'));

// distinct - odrebny , despite - pommimo , debounce - porzucic

// opoznieamy subskrybowanie
let obs = Rx.Observable.from([10,20,30]);
obs.delay(6000).subscribe(value=>console.log(value));

// jezeli elementy sa mniejsze od 15 zwroc true
let obs2 = Rx.Observable.of(1,2,3,4,5,6,7);
obs2.every(value => value < 15).subscribe(value => console.log(value));
