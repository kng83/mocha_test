/*Bardziej skomplikowany przyklad uzacia map
* Map jest czesto uzywany do kolekcjonowania
* wlasciwosci obiektu
* */

let cars = [
    {model: 'Buick', price: 'CHEAP'},
    {model: 'Camaro', price: 'EXPENSIVE'}
];

//chcemy dostac sie tylko do ceny samochodu

let prices = cars.map(function(car){
   return car.price;
});
console.log(prices);
