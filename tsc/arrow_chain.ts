// A curried function
let addSome = (x: number) => (y: number) => x + y;
// Simple usage
addSome(123)(456);
// partially applied
let add123 = addSome(123);
// fully apply the function
console.log(add123(456)); //579

type AddMore = (x:number)=>(y:number) => number;

let myAdd:AddMore = function(x:number){
    return function(y:number){
        return x + y;
    }
}
let myAnswer = myAdd(10)(10); // 20