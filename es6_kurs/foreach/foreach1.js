let colors = ['red' , 'blue', 'green'];

for( let i =0; i<colors.length; i++){
    console.log(colors[i]);
}

//fat arrow function to funkcja iteratora czyli
// funkcja wywolywana jest dla kazdego elementu
//i przekazywany jest w wywolaniu kazdy element tablicy
// czyli dla kazego elementu tablicy jest wywolana funkcja
//ktora umozliwia zrobienie operacji na kazdym elemencie
colors.forEach(function(color){
    console.log(color);
});
colors.forEach((color)=>{
    console.log(color);
});