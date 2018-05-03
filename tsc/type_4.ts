let afoo:{ [index:string] : {message: string} } = {};

afoo['a'] = { message: 'some message' };
// foo['b'] = {messages:'come get some'}; //error

console.log(afoo['a'].message); //some message
//foo['b'].messages //error


interface FooP {
    [key: string]: number
    x: number;
    y: number;
}

interface Bar {
    [key: string]: number | string // fix error below
    x: number;
    y: string; // Property `y` must of of type number
}

let obj2:Bar ={
    x:4,
    y:'kot'
}
