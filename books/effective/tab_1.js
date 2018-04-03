// robimy prosty slownik

let dict = {'robert':44,'pawel':34,'bobo':3};
let people = [];

// impie jest tu kluczem do obiektu
for(let key in dict){
    people.push(key + ': ' + dict[key]);
}

console.log(people); // tablica par [ 'robert: 44', 'pawel: 34', 'bobo: 3' ]

// wersja z obiektem powinna byc preferowana
let dict2 = {};
dict2.jan = 33;
dict2.staszek =44;
dict2.don =32;

let names = [];

for(const name in dict2){
    names.push(name);
}
console.log(dict2); //{ jan: 33, staszek: 44, don: 32 }
