let scores = [4,7,12,13,24];
let total = 0;

for(let score in scores){
    total += scores[score];
}
let mean = total/scores.length;
console.log(mean); //12

//lepiej

total = 0;
for(let score of scores){
    total += score;
}
let mean2 = total/scores.length;
console.log(mean2); //12

// filter test
let ans = scores.filter((arrValue)=>{
    return arrValue > 10 && arrValue< 20;
});

console.log(ans);

// moj filter
Array.prototype.myFilter = function(singleFn){
    let arr = [];
    for(let i =0; i<this.length;i++){
        if(singleFn(this[i]) === true){
            arr.push(this[i])
        }
    }
    return arr;
};
let ans2 = [4,5,12,13].myFilter((value)=>{return value>=5})
console.log(ans2); //[5,12,13]

