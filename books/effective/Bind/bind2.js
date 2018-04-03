
// Define the original function with four parameters.
let displayArgs = function (val1, val2, val3, val4) {
    console.log(val1 + " " + val2 + " " + val3 + " " + val4);
};

let emptyObject = {};

// tworzymy funkcje ktora uzywa 2 parametrow a nastepne beda dopiero
// dobierane
let displayArgs2 = displayArgs.bind(emptyObject, 12, "a");

// Call the new function. The "b" and "c" parameters are used
// as the third and fourth parameters.

displayArgs2("pawel", "kot");
// Output: 12 a pawel kot