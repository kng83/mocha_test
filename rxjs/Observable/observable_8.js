const Rx = require('rxjs');
const EventEmiter = require('events');

//tworzymy eventa
//z event emiterem jest tak ze jesli nie opoznimy go to musimy go
//dac po subskrybcji
const myEvent = new EventEmiter();

setInterval(()=>{
    myEvent.emit('take', {name:'Igor idzie do szkoly', age: 'romek jedzie'});
},3000);


// tworzymy observable fromEvent

const obs = Rx.Observable.fromEvent(myEvent, 'take');

// test observable
obs.take(1).subscribe(value => console.log(value));

//dodanie first do testow
 obs.map(value => value.name + ' nowej').first().subscribe(name => console.log(name));

// testing pluck (oskubowanie)
// take hold of (something) and quickly remove it from its place.
// pluck pozwala nam dostac sie do obiektu przekazywanego np przez
// event emitter mozemy go wtedy nadpisac
obs.pluck('name').take(2).subscribe(value => console.log(value+ ' something'));
//output : Igor idzie do szkoly something

// parwise nam robi tablice gdzie 1 element bedzie orginalny drugi
// nadipsany [orginal , orginal + edited]
obs.pluck('age').pairwise().take(2)
    .subscribe(value =>{
     value[1] = value[1] +' kot';
        console.log(value);
    })
//output [ 'romek jedzie', 'romek jedzie kot' ]

// w distinct() (odrebny) tylko nowe rzeczy sa subskrybowane
// dlatego nie trzeba dac take
obs.pluck('name').distinct().subscribe(value=> console.log(value+' jakiejs'));




