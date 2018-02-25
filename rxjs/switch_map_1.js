
const Rx = require('rxjs');

const obs1$ = Rx.Observable.from(['Pawel', 'Rysiek','Janek']);
// obs1$.subscribe(value=>console.log(value));

const obs2$ = Rx.Observable.from(['Tak','Nie','Lub']);

obs1$.switchMap(()=> obs2$, (obs1,obs2) => obs1 + " "+ obs2)
    .subscribe(value => console.log(value));


obs1$.switchMapTo(obs2$, (x,y) => x + " " + y)
    .subscribe(value => console.log(value));

//output ten sam dla dwoch
// Pawel Tak
// Pawel Nie
// Pawel Lub
// Rysiek Tak
// Rysiek Nie
// Rysiek Lub
// Janek Tak
// Janek Nie
//Janek Lub


