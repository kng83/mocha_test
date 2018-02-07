//some exercises

//mnozymy wszstkie produkty razem z soba
function product(...items) {
    let numbers = items;
    //lub tak let numbers = [...items]

    return numbers.reduce(function(acc, number) {
        return acc * number;
    }, 1)
}

console.log(product(1,2,3));

//drugi przyklad
function join(array1, array2) {
    return [...array1,...array2]
}
console.log(join([3,3],[3]));

//mixing rest and spread

function unshift(array,...items) {
    return [...items,...array];
}

console.log(unshift([4,3],1,2))

