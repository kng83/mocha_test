const Rx = require('rxjs');

// zip observable paruje nam w pary observable
const sourceOne = Rx.Observable.of(1,2,3);
const sourceTwo = Rx.Observable.of(4,5,6);


const example =sourceOne.zip(sourceTwo);
example.subscribe(value => console.log(value));
//output
// [ 1, 4 ]
// [ 2, 5 ]
// [ 3, 6 ]
