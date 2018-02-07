//destructuring  more complexnod
//inne zastosowanie

let savedFiled = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary(file){
    return `The file ${file.name}.${file.extension} is of size ${file.size}`
}
console.log(fileSummary(savedFiled));

//ES6
//Mozemy przekazac destrukturyzacje jako argumenty
//dodajemy jeszcze tutaj inny obiekt po przeciku
function fileSumm({name,extension,size},{color}){
    return `${color} The file ${name}.${extension} is of size ${size}`
}
console.log(fileSumm(savedFiled,{color:'red'}));