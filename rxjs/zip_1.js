const Rx = require('rxjs');

// zip observable paruje nam w pary observable
const sourceOne = Rx.Observable.of(1,2,3);
const sourceTwo = Rx.Observable.of(4,5,6);


const example =sourceOne.zip(sourceTwo);
example.subscribe(value => console.log(value));
//output
// [ 1, 4 ]
// [ 2, 5 ]
// [ 3, 6 ]


//Srawdzenie nadpisanie observable obiektu

const myObs = Rx.Observable.of(
    {id: 1, name: 'Pawel'},
    {id: 2, name: 'Rysiek'},
    {id: 3, name: 'Janek'},
    {id: 4, name: 'Zenek'},
);

const secObs = Rx.Observable.of('PK','RS','WK','ZK')

const zipObs = myObs.zip(secObs).map(value =>{
    // wersja stara ponizej
    //  value[0]['name'] = value[1];

    const [first, second] = value;
    first['name'] = second;
    return first
});
zipObs.subscribe(value => console.log(value));

//output
// { id: 1, name: 'PK' }
// { id: 2, name: 'RS' }
// { id: 3, name: 'WK' }
// { id: 4, name: 'ZK' }

