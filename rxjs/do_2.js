const Rx = require('rxjs');


// tap operator to do (tylko czasami trzeba uzyc tap jak np tutaj bo do jest
// zarezerwoana. Tap robi co do ale niedziala jak jest subscribe chain
// if you are using as a pipeable operator, do is known as tap!

const source = Rx.Observable.of(1,2,3,4);
const map = Rx.operators.map;
const tap = Rx.operators.tap;
const example = source.pipe(map(value => value),tap(console.log));
example.subscribe(value => console.log(value, 'here'));

example.do(value=>console.log(value,'do')).subscribe();


