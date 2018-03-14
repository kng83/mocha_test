import './file_to_import';
import {SimpleClass} from "./simple_class";
import './sec_file_to_import';

let arr = [3,'Pawel',5,6,7];

console.log(arr.length);

// testowanie dodanego prototypu
console.log(arr.giveSecond());
// output 'Pawel'

//Sprawdzanie nowych wlasciwosc klasy
//Dodalismy modul ktory rozszerzyl prototyp klasy o metode getName();

let simple = new SimpleClass('Bobo');
simple.getName();//Bobo
simple.setName('Robert');
simple.getName(); //Robert