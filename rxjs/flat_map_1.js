const Rx = require('rxjs');

const obs = Rx.Observable.of(
    {id: 1, name: 'aze1'},
    {id: 2, name: 'sf2'},
    {id: 2, name: 'dg2'},
    {id: 1, name: 'erg1'},
    {id: 1, name: 'df1'},
    {id: 2, name: 'sfqfb2'},
    {id: 7, name: 'qfs3'},
    {id: 2, name: 'qsgqsfg2'}
);



obs.groupBy(p => p.id, p => p.name)
    .flatMap((group$) => {
        console.log(group$.key);
        return group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key])
    })
    .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
    .subscribe(p => console.log(p));//


// flat map oczekuje wielu observable i on je mapuje wyplaszaczajac je i
// emitujac kazdy element jako Observable
// flatMap oczekuje na wejsciu tablicy observable
// flatMap to inaczej mergeMap
let obs1 = Rx.Observable.from(['Pawel','Janek','Rysiek']);
let obs2 = Rx.Observable.of(1,3,4);

let obs3 = Rx.Observable.from([obs1,obs2]);
obs3.flatMap(value=>value).subscribe(value=>console.log(value));
//output to strumien pawel,Janek, Rysiek ,1, 3, 4

function bibo(tab, element) {
    return [...tab, element];
}

let ttt = [4, 5, 6];
let me = bibo(ttt, 1);
console.log(me); //4,5,6,1