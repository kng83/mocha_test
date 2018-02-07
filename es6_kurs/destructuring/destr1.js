//destructuring array
//expense

let expense ={
    type: 'Business',
    amount: '$45 USD',
    name: 'kot',
    val:'3'

};

// w starej wersji es5 aby pobrac elementy z obiektu
//musielibysmy zrobic cos takiego
//mamy tutaj ostro zduplikowany kod

let type1 = expense.type;
let amount1 =expense.amount;

//ES6
//skrocna wersja. To nie jest obiekt. Po prostu wez referncje
//do wlasciwosci obiektu expense.type i przypisz do nowej zmienne
let {type} = expense;
let {amount} = expense;
console.log(type,amount);

//mozemy tez to zrobic w jednej lini
const{name,val} =expense;

