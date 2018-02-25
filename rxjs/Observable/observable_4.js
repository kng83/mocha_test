const Subject = require('rxjs').Subject;
const Observable = require('rxjs').Observable;


let subject = new Subject();

// subject subskrybuje wartosc  wymusza przez observable
// on jest terz observerem bo wartosci sa do niego przekazywane

subject.subscribe({
    next: (value) => console.log(value)
});

//
let obs = Observable.from(['Pawel', 'Janek'])

/*let obs = new Observable(observer =>{
    observer.next('Pawel');
    observer.next('Janek');
});*/

obs.subscribe(subject);







