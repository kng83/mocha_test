let Rx = require('rxjs');
let sub = new Rx.BehaviorSubject(4);
console.log(sub.getValue());

let observable = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
        observer.next(4);
        let end = observer.complete();


    }, 1000);
});

observable.subscribe((payload) => {
    console.log(payload);
}, (err) => err, () => console.log('im finish'))


observable.subscribe(value => console.log(value + ' next subscription'));


// Teraz observable przez obiekt
// Obiekt observable przyjmuje callback jako parametrt
// wyswietli na koncu Pawel keng potem jest keng potem najlepszy keng

let Obs = require('rxjs').Observable;
let obs = new Obs(function (observer) {
    observer.next('Pawel');
    observer.next('jest');
    observer.next('najlepszy');
});

obs.subscribe(name => console.log(name + ' Keng')); // tu jest wszystko subskrybowane


// teraz robimy logowanie hi co sekunde

let myObservable = Rx.Observable.create((observer)=>{
    let id = setInterval(()=>{
        observer.next('hi there');
        observer.next('hi there once again');
        observer.unsubscribe(); //konczymy subskrypcje
    },1000)
});


myObservable.subscribe(observer => {
    console.log(observer);
    //
});


// teraz z complete

let obserwowana = new Obs((observer)=>{
    observer.next('Czesc');
    observer.next('Jozek');
    observer.complete();
})


obserwowana.subscribe((observer) => console.log(observer));
// po complete juz nie bedzie obserwownas