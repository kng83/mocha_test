const Rx = require('rxjs');

const subject= new Rx.Subject();
setInterval(()=>{

    subject.next(1);

},2000);

// emitter zrobiony z subjecta
const obs = Rx.Observable.from(subject);
obs.take(2).subscribe(value=> console.log(value));

// robimy teraz scan
// scan pozwala na robic obliczenia na observable i posiada pamiec ostatniej
// wartosci. Drugi parametr pozwala nam ustawienie wartosci domyslnej
obs.scan(count => count+1,10).take(3).subscribe(value => console.log(value + ' from scout'));

// testing do, robi obliczenia ale nie przechowuje wartosci
obs.do(count => count+1).take(3).subscribe(value => console.log(value + ' from do'));

//zawansowany skan
obs.scan((acc,value,index)=>{
    console.log(value +' in second scan and index'+ index);
    return ++acc

}).subscribe(value=> console.log(value + ' from second scan'));

