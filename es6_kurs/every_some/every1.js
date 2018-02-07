//Z tego helpera otrzymamy nie tablice tylko wartosc

let computers = [
    {name: 'Apple', ram: 4},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 4}
];

//chcemy znalezc komputer ktory ma wiecej niz 16 GRam
//chcemy zobaczyc ktore komputer moga nam pociagnac program
//powyżej 16GR

let allComputersCanRunProgram = true;
let onlySomeComputerCanRunPrograms = false;

for(let i =0; i<computers.length; i++){
    if(computers[i].ram >16){
        allComputersCanRunProgram = allComputersCanRunProgram && true;
        onlySomeComputerCanRunPrograms = true;
    }else{
        allComputersCanRunProgram = allComputersCanRunProgram && false;
    }
}

console.log(allComputersCanRunProgram);
console.log(onlySomeComputerCanRunPrograms);

//different approach
let allComp = true;
let onlyComp = false;

for(let i=0; i<computers.length; i++){
    let computer = computers[i];

    if(computer.ram <16){
        allComp = false;
    }else{
        //jak jest wiekszy od 16 to wejdzie tu chociaz raz
        onlyComp = true
    }
}
console.log('=====')
console.log(allComp);
console.log(onlyComp);

//Teraz przyklad iterator przechodzi przez wszystkie elementy
//tablicy i robi rownanie && i patrzymy na ostateczny wynik
//every to operacja and na elementach
//some to operacja or na elementach
console.log('=====');
let every = computers.every(function(computer){
    return computer.ram >16;
});
console.log(every); //false

let some = computers.some(function(computer){
    return computer.ram<16;
});
console.log(some); //true