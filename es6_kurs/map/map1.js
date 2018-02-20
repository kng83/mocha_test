//Map helper prosty przyklad ktory podwaja wartosc umieszona
//w tablicy

let numbers = [1,2,3];
let doubledNumbers = [];

//zrobmy najpierw forloope;unikajmy mutowania danych push lepszy od przypisania
for(let i=0;i<numbers.length;i++){
    //doubledNumbers[i] = numbers[i]*2;//tez dziala ale to mutuje dane
      doubledNumbers.push(numbers[i]*2);
}

console.log(doubledNumbers);

//teraz przyklad z uzyciem map dla kazdego elementu
//tablicy zwracamy nowa wartosc. Kazdy element zwracany
//przez funkcje wrzucany jest do nowej tablicy
//przy kazdym ruchu iteratora jest wykonywana funkcja
//najbardzej trzeba uwazac zeby niezgubic returna

// let doubled = numbers.map(function(number){
//     return number *2
// });

let doubled = numbers.map(number => number *2);

console.log(doubled);