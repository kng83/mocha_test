//array help filter
//sort some products

let products = [
    {name: 'cucumber', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'cucumber', type: 'vegetable'},
    {name: 'orange', type: 'fruit'},
];

//only show me fruits. We don't want to delete items
//i array. We want to make a subset of this array contains
//less values;

let filteredProducts = [];

for(let i=0; i<products.length;i++){
    if(products[i].type === 'fruit'){
        filteredProducts.push(products[i]);
    }
}
console.log(filteredProducts);

//Teraz przyklad filter. Iterator w filterze zwraca nam
//prawde lub falsz. Jezali jest prawda to dorzuci to dany
//element trafi do tablicy wynikowej
//filter podobnie jak map zwraca nam wynik
//zwracamy wlasciwie porownanie ktore jest przyporzadkowane
//do elementu tablicy

let fruits = products.filter(function(product){
    return product.type === 'fruit';
});

console.log(fruits);



