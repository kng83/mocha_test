// szukanie liter alfabetu
let aIndex = "a".charCodeAt(0);
console.log(aIndex); //97

let alphabet = "";
for (let i = 0; i < 26; i++) {
    alphabet += String.fromCharCode(aIndex + i);
}
console.log(alphabet); //caly alfabet abcd

// teraz liczby od 0...10

let digits = "";

for (let i = 0; i < 10; i++) {
    digits += i;
}
console.log(digits);

// teraz robimy z tego callback
function buildString (n,callback){
    let result = "";
    for(let i=0; i<n; i++){
        result += callback(i)
    }
    return result;
}

// test alphabet

let alphIndex = "a".charCodeAt(0);
let alphabet2 = buildString(26,function(i){
    return String.fromCharCode(alphIndex + i );
});

console.log(alphabet2,'!!!alphabet2'); //abc...z

// test z digits

let dig ="";

let digResult = buildString(10,function(i){
    return i;
});
console.log(digResult,'!!!digResult'); //01234...9

//my map
function myMap(arr,callback){
    for(let i=0 ;i<arr.length;i++){
        arr[i] = callback(arr[i]);
    }
    return arr;
}

let mulByTwo= myMap([10,20,30],(value)=>{
    return value*2 ;
});
console.log(mulByTwo);// [20,40,60];

// sprawdzenie jak byloby z prototypem

Array.prototype.superMap = function(callback){
    for(let i=0;i<this.length;i++){
        this[i]=callback(this[i])
    }
    return this;
};

let mulByThree= [10,15,20].superMap((value)=>{
    return value *3;
});

console.log(mulByThree); // [30,45,60]