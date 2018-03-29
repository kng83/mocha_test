// IIFE

function wrapElementes(el) {
    let result = [];
    for (let i = 0 ; i<el.length; i++)
    {

        (function () {
            let j = i;
            result[i] = (function () {
                return el[j]
            });
        })();
    }
    return result;
}
//output kot
console.log(wrapElementes(['kot','pies','mruczek'])[0]());

// inny IIS przyklad z pamiecia

let ans = (function(){
    let i =10;
    return function(){
       return i++;
    }
})();

console.log(ans()); //10
console.log(ans()); //11

// pruba przekazania parametrow
// parametr o wartosci 4 przypisany jest do jakas;
let ans2 = (function(jakas){
    return function(){
        return jakas;
    }
})(4);

console.log(ans2());  //4

// dodanie pamieci do powyzszego

let ans3 = (function(second){
    let mem = 0;
    return function(){
        mem = mem +second;
        return mem;
    }
})(5);

console.log(ans3()); // 5
console.log(ans3()); // 10

// dodawanie do tablicy nastepny przyklad

let ans4 = (function(){
    let mem = [];
    return function(element){
        mem = [...mem,element];
        return mem;
    }
})();

console.log(ans4(10)); // [10];
console.log(ans4(11)); // [10,11];
console.log(ans4());   // [10 ,11 ,undefined];
console.log(ans4(13)); // [10,11,undefined ,13];






