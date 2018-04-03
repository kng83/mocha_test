let average = function(arg){
    let ans = 0;
    let ind= 0;
    arg.forEach(el =>{
        ans += el;
        ind++;
    });
    return ans/ind;
};
console.log(average([10,20,30])); //30
//[2,3,4].forEach((el)=>console.log(el)); //2,3,4

let avr = function(el){
    return el/2;
}

let odp = avr.apply(null ,[1,2]);
console.log(odp);


