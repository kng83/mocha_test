/*object literals; tworzymy funkcje ktora zwraca obiekt
* to literaly obiektowe (funkcje tworzace obiekty
* enhance object literals ta funkcja jest napisana
* po staremu w pliku nastepnym jest nowa wersja
* wlasnie ta skladnia to enhance object literals*/

/* musimy zrobic iteracje po calym objekcie inventory
* zeby uzyskac calkowita cene*/
function createBookShop(inventory){
    return {
        inventory: inventory,
        inventoryValue: function(){
            return this.inventory.reduce((total,book)=>{
              return  total + book.price;
            },0)
        },
        priceForTitle: function(title){
            return this.inventory
                .find(book => book.title === title)
                .price;
        }
    };
}

const inventory = [
    {title :'Harry Potter', price: 10},
    {title : 'Eloquent Javascript', price: 15}
];

const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));