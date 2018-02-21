const Rx = require('rxjs');

// making event from subject

const subject = new Rx.Subject();
const obj = {
    name: 'Pawel',
    age: 34,
    weight: 100
}
setInterval(() => {
    subject.next(obj);
}, 3000);

const observable = Rx.Observable.from(subject);

observable.map(() => state => Object.assign({},state,{name: (state.name ='Bobo')}))
    .subscribe(name => console.log(name));


let me ={}
Object.assign(me,obj,{name:'Bobo'});
console.log(me);


