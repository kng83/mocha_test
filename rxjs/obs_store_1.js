const Rx = require('rxjs');

// making event from subject

const subject = new Rx.Subject();

setInterval(() => {
    subject.next('click');
}, 3000);

const observable = Rx.Observable.from(subject);

// Observable zwraca tutaj zwraca funkcje ktora zwraca obiekt. Scan moze pamietac wartosci
// wiec w nim jest uruchomina funkcja  zwraca wartosc obiektu do state ktory ta wartosc przechowuje,
// scan ma wartosc startowa {count: 0}

let increase = observable.map(() => state => Object.assign({},state,{count: (state.count +1)}));

let state = increase.scan((state, changeFn) => changeFn(state) , {count: 0});

state.subscribe(value=>console.log(value));

// dodajemy decrease
let decrease = observable.map(() => state => Object.assign({},state,{count: (state.count -1)}));
let state2 = decrease.scan((state,changeFn) => changeFn(state) , {count: 0});
state2.subscribe(value => console.log(value));

let mergeState = Rx.Observable.merge(increase,decrease)
    .scan((state, changeFn)=> changeFn(state),{
        count: 0
});

mergeState.subscribe(value => console.log(value));

//increase w wersji starej
// let increase = observable.map(function(){
//     return function(state){
//         return Object.assign({},state ,{ count: (state.count +1)})
//     }
// });


// let state = store.scan(function(state, changeFn){
//         return changeFn(state)},
//     {count: 0});
