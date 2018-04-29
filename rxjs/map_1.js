//Testujemy flat map ktrorych jednym observable bedzie strumien obiektow a drugim
//wartosci

const Rx = require('rxjs');
let data = [
    {name: 'Pawel', age: 30},
    {name: 'Rysiek', age: 40},
    {name: 'Janek', age: 50}
]
const obs1 = Rx.Observable.from(data);
const obs2 = Rx.Observable.from(['Romek', 'Zenek', 'Tolek']);
obs1.switchMapTo(data =>{
    data.name =obs2;
    return data;
}).subscribe(console.log);

