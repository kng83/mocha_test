
let names = [
    'Alexandia',
    'Matthew',
    'Joe'
];

//Patrzymy czy sa imiona o wiecej niz 4 litery

let every = names.every(function(name){
    return name.length > 4;
});
console.log(every);

let some = names.some(function(name){
    return name.length >4;
});
console.log(some);

