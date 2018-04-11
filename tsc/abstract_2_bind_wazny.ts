class Base {
    collection:any;

    getAll = () => {
        return this.collection;
    };

    getMe() {
        return this.collection;
    }
}

class Second extends Base{
    collection = 'Kot';
}

let second = new Second();
console.log(second.getAll()); //'kot'
console.log(second.getMe()); //'kot'

function callMe(callback:any) {
    return callback();
}

// W drugim przypadku gubi sie this
// dlatego trzeba ustawic w obiekcie
// w getAll wlasciwosc trafia do construktora natomiast
// w getMe jest to funkcja prototypowa

console.log(callMe(second.getAll)); //'kot
console.log(callMe(second.getMe)); //'undefined
console.log(callMe(second.getMe.bind(second))); //'kot'