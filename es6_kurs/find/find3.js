//Some exercises

//find account with balance 1

let accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];

let account = accounts.find(function(account){
    return account.balance === 12
});
console.log(account);

//find object with given criteria. Wyszukujemy
//klucze dla obiektu criteria i porownujemy wartosci
//w array-helper find dla danych kluczy

function findWhere(array,criteria){
    let property = Object.keys(criteria)[0];
    return array.find(function(element){

        return element[property] === criteria[property];
    });
}

let ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
];

console.log(findWhere(ladders, { height: 25 }));


//To jest taki szybki przyklad metody dostepowej od obiektu
let c = {height: '15'};
let ans = Object.keys(c)[0];