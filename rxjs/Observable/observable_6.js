const Rx = require('rxjs');

// zewnetrznie produkowane watki
let myObservable = new Rx.Subject();
myObservable.subscribe(value => console.log(value));
myObservable.next('foo');


// wewnetrznie produkowane watki
let myObservable2= Rx.Observable.create(observer => {
    observer.next('fan');
    setTimeout(() => observer.next('bar'), 1000);
});
myObservable2.subscribe(value => console.log(value));



/**/