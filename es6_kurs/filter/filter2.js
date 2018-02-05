//More complicated examples pluck to podobnie jak pick(quickly)


let products = [
    {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
    {name: 'banana', type: 'fruit', quantity: 10, price: 15},
    {name: 'celery', type: 'vegetable', quantity: 30, price: 8},
    {name: 'orange', type: 'fruit', quantity: 3, price: 5},
    {name: 'onion', type: 'vegetable', quantity: 30, price: 4},
];

//robimy filter ktory ma price <10 quantity > 0 i sa warzywami

let filteredProducts = products
    .filter(function (product) {
        return product.type === 'vegetable';
    }).filter(function (product) {
        return product.quantity > 0;
    }).filter(function (product) {
        return product.price < 10;
    });
console.log(filteredProducts);

//Przyklad ze strony
let fProducts = products.filter(function(product){
    return product.type === 'vegetable'
        && product.quantity > 0
        && product.price <10
});
console.log(fProducts);