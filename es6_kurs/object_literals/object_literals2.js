/*Skladnia enhance object literals*/

function createBookShop(inventory){
    return {
        inventory, // ukrocone inventory:inventory
        inventoryValue(){ // omijamy nazwe funkcja
            return this.inventory.reduce((total,book)=>{
                return  total + book.price;
            },0)
        },
        priceForTitle(title){
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