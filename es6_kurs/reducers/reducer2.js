//tougher example
//slightly more complex example

let primaryColors = [
    {color : 'red'},
    {color :'yellow'},
    {color:  'blue'}
];

// ['red', 'yellow', 'blue'] //end of the day
// pobieramy kolory jako obiekt ini dajemy tablic i value nam to przenosi
// dobrze jezeli wartosci wyjsciowa jest tablica to jako initial damy tablice
// nazwy tego elementu 1 sa rozne np: mem(memory) ,acc(accumulator), previous (poprzedni)
let colorsArray = primaryColors.reduce(function(previous, primaryColor){
        previous.push(primaryColor.color);
        return previous;
    },[]);



console.log(colorsArray);

