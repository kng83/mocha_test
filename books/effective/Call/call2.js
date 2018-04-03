// przyklad z ksiazki przerobieny. Jest to kopiowanie tablicy obiektow z jednej tablicy do drugiej

let table = {

    addEntry: function (key, value,target) {
        target.push( {key: key, value: value});
    },
    copy: function (thisArg,target) {
        // let entries = this.entries;
        console.log(thisArg, this.entries);

        for (let i = 0; i < thisArg.length; i++) {
            let entry = thisArg[i];
            // wywolujemy wewnetrzna metode ktora operowac bedzie na przekazanym obiekcie
            this.addEntry.call(thisArg, entry.key, entry.value,target)
        }
    }
};

let table2 = [{key: 'pawel', value: 4}, {key: 'bobo', value: 5}, {key: 'robert', value: 6}];
let table3 = [];
table.copy(table2,table3); //kopiowanie tablicy obiektow
console.log(table3);
table2[0].value =15;
console.log(table2,'jeszcze raz'); // [key:'pawel',value:15]
console.log(table3,'spawdzenia'); // [key:'pawel',value:4] jest kopia wiec wartosc sie nie nadpisala

