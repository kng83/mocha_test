// Static operators are pure functions attached to the Observable class,
//and usually are used to create Observables from scratch.
// typowym przykladem static operators jest interval

let Rx = require('rxjs');

let observable1 = Rx.Observable.interval(1000);
let observable2 = Rx.Observable.interval(400);

// uzywamy merge i laczyby 2 observable

let merge = Rx.Observable.merge(observable1, observable2);

// merge.subscribe(value => console.log(value));
// Output to poloaczone 2 observable
// przemiennie 0 ,0 ;0, 1; 1,2;

let combine = Rx.Observable.combineLatest(observable1, observable2);
combine.subscribe(value => console.log(value));

// combineLatest laczy observable w tablice;
//  [ 0, 1 ]
//  [ 0, 2 ]
//  [ 0, 3 ]
//  [ 0, 4 ]
//  [ 1, 4 ]








