//Practical use of map
//Pokazanie tylko wysokosci obrazka
let images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

let heights = images.map(function(image){
    return image.height;
});

console.log(heights);

//Wyliczenie predkosc

let trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

let speeds= trips.map(function(trip){
    return trip.distance/trip.time;
});

console.log(speeds);

//Implementig Pluck (oskubanie)
//Pluck powinien dostac tablice stringow i nazwe wlasciwosci
//i zwrocic wszystkie wartosci dla danej wlasciwosci (klucza)
let paints = [
    { color: 'red' },
    { color: 'blue' },
    { color: 'yellow' }
    ];

function pluck(array,property){
    return array.map(function(element){
        return element[property];
    });
}

console.log(pluck(paints,'color'));