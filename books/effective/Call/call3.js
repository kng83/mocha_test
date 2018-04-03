// pobieranie arugmentow funkcji do modyfikacji
// nie edytujemy arguments jesli robimy na nim operacje ale mozemy zrobic kopie i pracowac na kopii

function someArg(){
    let sli = [].slice;
    let args = sli.call(arguments);
    console.log(args.constructor); // Function:Array
    console.log(arguments.constructor); //Function Object
    return args;
}

console.log(someArg(10,20,23)); //10 ,20 ,23

let copy =[2,3,4].slice();
console.log(copy);