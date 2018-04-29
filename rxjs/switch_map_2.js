//Testujemy flat map ktrorych jednym observable bedzie strumien obiektow a drugim
//wartosci

const Rx = require('rxjs');
let data = [
    {name: 'Pawel', age: 30},
    {name: 'Rysiek', age: 40},
    {name: 'Janke', age: 50}
]
const obs1 = Rx.Observable.from(data);
const obs2 = Rx.Observable.from(['Romek', 'Zenek', 'Tolek']);

const obs3 = Rx.Observable.of(obs1, obs2);

// bierze dla wszystkich ob1 przyporzadkowuje obs2 dlatego mamy za duzo wartosci
obs1.switchMapTo(obs2,(obs1, obs2) => {
  //  console.log(obs2,'!!!!!!!!!!!1');
  //  console.log(obs1);
    obs1['name'] = obs2;
    return obs1;
})
    .subscribe(console.log);

// output za duzo wartosci
//{ name: 'Romek', age: 30 }
// { name: 'Zenek', age: 30 }
// { name: 'Tolek', age: 30 }
// { name: 'Romek', age: 40 }
// { name: 'Zenek', age: 40 }
// { name: 'Tolek', age: 40 }
// { name: 'Romek', age: 50 }
// { name: 'Zenek', age: 50 }
// { name: 'Tolek', age: 50 }
