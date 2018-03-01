
//pipe przyjmuje jedna funkcje jako argument pierwszy i nastepne
//jako argumenty. Wynik kolejno przechodzi przez kolejne funkcje
//generalnie jest to wartosc przepuszczona przez wszystkie funkcje
// w pipe musza byc 2 wywolanie przy pierwszym podajemy tylko referencje
//funkcje w drugim wywolaniu dajemy argument ktory wejdzie do pierwszej funkcji ,
// potem wynik pierwszej funkcji bedzie argumentem drugiej itd...

let splitForTwo = function(value){
    return value /2;
};

let totalCount = function(value){
    let tax = 0.23;
    return value + (value * tax)
};

let convertCurrency= function(value){
    return value *4;
}

// Tu podstawowa  implementacja pipe

let pipe = function (firstFn ,secondFn){
    return function(arg){

        return secondFn(firstFn(arg));
    }
};

let ans = pipe (splitForTwo,totalCount);

console.log(ans(100)); //61,5


//**********************************************
//*************pipe 2
// wersja skrocona tego co wyzej

let pipe2 = (first,second)=>{
    return (arg) => second(first(arg))
};

let odp2 = pipe2(splitForTwo,totalCount);
console.log(odp2(200)); //123


//*******************************************************
//*************pipe 3
// wersja rozbita dla wielu argumentow
// funkcja reduce jesli nie ma wartosci startowej przy pierwszej iteracji
// wezmie 2 pierwsze argumenty function(fn1,fn2) fn1 to acc fn2 to currentValue

const pipe3 = (...ops) => {
    return ops.reduce(function(a,b){
        return function (arg){
            return b(a(arg));
        }
    });
};

let odp3 = pipe3(splitForTwo,totalCount);
console.log(odp3(400));


//*********************************************************
//************* pipe 4
//wersja zbita

const pipe4 = (...functions)=>{
    return functions.reduce((acc,newFunc)=>arg=>newFunc(acc(arg)));

}
const odp4 = pipe4(splitForTwo,totalCount,convertCurrency);
console.log(odp4(1000)); //615 for two //for 3 2460



// simple reduce

let arr = [10,20,30];
let a =[]
let arrAns = arr.reduce(function(acc,passing){
    console.log(acc); // patrz output nizej
    a = [passing, ...a]
    return a;
});
console.log(arrAns); // [30 ,20]

//output

// 10  => startowe acc
// [ 20 ] => przekazane pierwsze a
// [ 30, 20 ] => przekazane 2 a
