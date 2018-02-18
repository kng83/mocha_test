// Every subject is an Observer and Observable

let Rx = require('rxjs');

let subject = new Rx.Subject();

subject.subscribe({
    next: function(value){
        console.log('observerA: ' + value)
    }
});

subject.subscribe({
    next:(value) => console.log('observerB: ' + value)
});

// przezanie do subject ktory jest obserwatorerm
subject.next(1); //observerA: 1,observerB :1
subject.next(2); //observerA: 2,observerB :2
subject.next('Pawel'); //observerA: 'Pawel',observerB :'Pawel'

// tak mozemy zrobic subskrypce subjecta
// do from mozemy wkladac tablice wartosci ktore beda jako observable
let observable = Rx.Observable.from([10,20,30]);
observable.subscribe(subject); //observer A:10,B:10,A:20,B:20,A:30,B:30


