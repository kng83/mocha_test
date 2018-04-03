// !!! Wypelanie
// tworzac obiekt z opcjami sprawdzamy liczby dla undefined , dla stringow robimy lub,
// dla boolean mozemy zrobic podwojna negacje wtedy eliminujemy undefined
function Alert(element,message,opts){
    let options = opts || {};
    this.width = options.width === undefined ? 320 : options.width;
    this.height = options.height === undefined ? 320 : options.height;
    this.title = options.title || 'alarm'
    this.make = !!options.make;

    this.answer = function(){
        return [element,message];
    }
}

let al = new Alert('div','hallo');
console.log(al);

let alWithOptions = new Alert('div','jakis',{width:10,make:true,title:'kot'});
console.log(alWithOptions);

// to jest test czy do argumentu mozna przypisac wartosc . Mozna i nie wplywa ona na
// na zewnetrzna wartosc liczby
let liczba;

function mul2(liczba){
    if (liczba === undefined){
        console.log(liczba); //undefined
        liczba =15;
    }
    console.log(typeof liczba); //number
    return liczba *2;
}
console.log(mul2()); //30
console.log(liczba); // undefinded

