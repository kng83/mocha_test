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
}, 'suma')

let newMovie = makeMovie.bind({ actors: ['kot'], director: 'adolf', film: 'kot i pies' })
let nMovie = newMovie('some')

type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
type FunctionPropertyNames1<T> = [keyof T];

class Hurricane {
    other: string;
    makeMe() {
        console.log('wow')
    }
    showMe() {
        console.log('boo')
    }
}
let myLittle: FunctionPropertyNames<{ some: () => any }> //some
let secondLittle: FunctionPropertyNames<Hurricane>//makeMe,showMe ;none other;
let thirdLittle:FunctionPropertyNames1<Hurricane>//[makeMe,showMe,other]
thirdLittle =['makeMe'] // musi byc jak tablica