"use strict";
exports.__esModule = true;
require("./file_to_import");
var simple_class_1 = require("./simple_class");
require("./sec_file_to_import");
var arr = [3, 'Pawel', 5, 6, 7];
console.log(arr.length);
// testowanie dodanego prototypu
console.log(arr.giveSecond());
// output 'Pawel'
//Sprawdzanie nowych wlasciwosc klasy
//Dodalismy modul ktory rozszerzyl prototyp klasy o metode getName();
var simple = new simple_class_1.SimpleClass('Bobo');
simple.getName(); //Bobo
simple.setName('Robert');
simple.getName(); //Robert
