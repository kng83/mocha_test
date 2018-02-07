//teraz przyklad odwrotny spread operator
//pallet of colors to are users

const  defaultColors = ['red', 'green'];
const  userFavoriteColors =['orange','yellow'];
const fallColors = ['fire red','fall orange'];
//join colors old ways using concatenate
let oldColors = defaultColors.concat(userFavoriteColors);
console.log(oldColors);

//we can use sread operator. spread operator wypycha elementy i tworzy nowa
//tablice. Mozemy takze dodac nowe elementy np z przodu
let newColors =['blue',...fallColors,...defaultColors,...userFavoriteColors];
console.log(newColors);


//nowy przyklad. Robimy validacje tutaj. I chcemy zawsze mleko;
//sprawdzamy czy jest mleko
//sprytnie zwracamy tablice powiekszona o mleko
function validateShoppingList(...items){
    if(items.indexOf('milk')<0){
        return ['milk',...items]
    }
    return items;
}

let myList = validateShoppingList('oranges', 'bread','eggs');
console.log(myList);