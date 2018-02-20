// scheduler control when subscription start and when notification
// are delivered. Kontrolouje to wirtualnym zegarem ze mozna zaplanowac
// kiedy cos bedzie wyslane

const Rx = require('rxjs');

let observable = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
})
    .observeOn(Rx.Scheduler.async);

console.log('just before subscribe');
observable.subscribe({
    next: x => console.log('got value ' + x),
    complete: () => console.log('done'),
});
console.log('just after subscribe');

// just before subscribe
// just after subscribe
// got value 1
// got value 2
// got value 3
// done

// bez lini .observeOn(Rx.Scheduler.async);

// just before subscribe
// got value 1
// got value 2
// got value 3
// done
// just after subscribe
