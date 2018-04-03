let dict = {'robert':44,'pawel':34,'bobo':3};
// test przynaleznosci
console.log('robert' in dict); //true
console.log('bobi' in dict); //false
console.log('toString' in dict); // true bo jest dziedziczenie po prototypie

// aby sprawdzic tylko wlasciwosci w obiekcie uzywamy hasOwnProperty

console.log(dict.hasOwnProperty('robert')); //true
console.log(dict.hasOwnProperty('toString')); //false // bo nie mama dziedziczenia
