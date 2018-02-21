const EventEmitter = require('events');
const Rx = require('rxjs');


// wazna kolejnosc
const mojEmitter = new EventEmitter();
mojEmitter.addListener('make', function(someValue){
  console.log(someValue)
});

setTimeout(()=>{
    mojEmitter.emit('make','hi igor ');
},2000)

setInterval(()=>{
    mojEmitter.emit('cyclic', 'this is bobo');
},3000);


// Po stworzeniu emitera zdarzen mozemy subskrybowac go
let input = Rx.Observable.fromEvent(mojEmitter,'make');

input.subscribe(value =>console.log(value + 'this is some tekst'));
// przyklad mapowania
input.map(value => value + 'some tekst').subscribe(value => console.log(value));
// przyklad wprowadzenia opoznienia
input.delay(2000).subscribe(value => console.log(value + ' delay'));



// robimy subskrypcje do eventow pojawiajacych sie okresowa

let cyclic = Rx.Observable.fromEvent(mojEmitter,'cyclic');

// przepuszcza tylko przez 10000ms
cyclic.throttleTime(10000).subscribe(value => console.log(value + ' throttle'));

//porzucamy wyniki po 5s debounce nie dokonca dziala po czasie

cyclic.debounceTime(3000).subscribe(value => console.log(value + ' debounce'));

// stop the stream after 3 events. Po 3 eventach juz nie subskrybuje

cyclic.take(3).subscribe(value => console.log(value + ' take 3'));

// przepuszcza event do poki nastepny event nie pojawi sie i on skasuje dalsze subskrypcje
// input wystepuje po 2s cyclic po 3 i on kasuje dalsze subskrypcje
input.takeUntil(cyclic).subscribe(value => console.log(value + ' takeUntil this selection'));








