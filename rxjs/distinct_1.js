// Testujemy distinct (odrebny)
const Rx = require('rxjs');
let obs =Rx.Observable.of(1,1,2,2,1,3,7);

//wyswietla tylko rozne (odrebne) wartosci
obs.distinct().subscribe(value => console.log(value));
//output 1,2,3,7

// wyswietla tylko nowe wartosci
obs.distinctUntilChanged().subscribe(value => console.log(value));
//output 1,2,1,3,7



