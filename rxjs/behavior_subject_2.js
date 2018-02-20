const Subject = require('rxjs').BehaviorSubject;
const Observable = require('rxjs').Observable;


let subject = new Subject(100);
subject.subscribe(
    function next(value) {
        console.log(value)
    }
);

subject.next(4);

// Podpinamy subject pod observable jak ona wywola subskrypcje to przekazemy jej
// wartosc ktora trafi do subjecta bo on
let obs = new Observable(value =>{
    value.next(subject);
});

obs.subscribe(value=> {
   value.next(3);
});

// jezeli mamy behevior subject to teraz po zmianie prze obs mozemy odzyskac nowa wartosc
subject.subscribe((observer)=>console.log(observer,'som'));

// wywolujac next rozsylamy do wszystkich co obserwuja
subject.next(30);

//output
// 100
// 4
// 3
// 3 'som'
// 30
// 30 'som'


