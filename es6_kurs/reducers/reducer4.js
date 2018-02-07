//some exercises
//obliczanie dlugosc pokonanengo dystansu

let trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

let totalDistance =trips.reduce(function(previous,trip){
    return previous+trip.distance
},0);

console.log(totalDistance);

// stworz obiekt ktory podliczy sitting and standing desks

let desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];

//liczymy liczbe biurek
let deskTypes = desks.reduce(function(previous ,deskType) {
    if(deskType.type === 'sitting'){
        previous.sitting++;
    }
    if(deskType.type ==='standing'){
        previous.standing ++;
    }
    return previous;
}, { sitting: 0, standing: 0 });

console.log(deskTypes);

//niby trudne
//function unique ktora usunie duplikaty z tablicy
//wykorzystalem tu some by znalezc czy jest duplikat w nowej tablicy
let numbers = [5,5,1, 1, 2,1 ,0,0,3, 1,1,4, 4];
function unique(array){
    return array.reduce(function(previous,element){
        if(!previous.some(function(prev){
            return prev === element;
        })){
            previous.push(element);
        }
        return previous;
    },[])
}

console.log(numbers.includes(4)); //to jest ciekawe czy sprawdza czy tablica zawiera
console.log(numbers.indexOf(4));//11
console.log(numbers.indexOf(7));//-1 -nieznaleziono
console.log(numbers.indexOf(0));//6
console.log(numbers.includes(0));
