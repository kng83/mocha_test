interface Movie {
    film: string;
    director: string;
    actors: string[];
}

function makeMovie<T extends Movie>(make: T, resume: string) {
    return make.actors;
}

let film = makeMovie({
    actors: ['kot', 'pies'],
    director: 'Pawel',
    film: "siedze w krzakach i sie boje"
},'suma')

let newMovie = makeMovie.bind({actors:['kot'],director:'adolf',film:'kot i pies'})
let nMovie = newMovie('some')

type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
declare function addSome(a:number,b:number,c:number):number;


let myLittle : FunctionPropertyNames<{some:()=>any}>

