interface Some<T> {
    value: T;
    age: T
}

let somes: Some<number> = {
    value: 4,
    age: 23
}


type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };
let six: Action = {type: 'INCREMENT'};
console.log(six)


function counter(state = 0, action: Action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

console.log(counter(10, {type: 'INCREMENT'})); //11
console.log(counter(10, {type: 'DECREMENT'})); // 9