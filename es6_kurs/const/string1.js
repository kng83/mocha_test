//syntax sugar
//template string , template literals
// mozna dac normalna expression

function getMessage(){
    const year = new Date().getFullYear();
   // return "The year is " + year;
    return `The year is ${year -1}`;
}
console.log(getMessage());

