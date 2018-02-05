/*Practical example */
function *colors(){
    yield 'red';
    yield 'blue';
    yield 'green';
}

const gen = colors();
console.log(gen.next()); //{value:'red', done:false}
console.log(gen.next());//{value:'blue', done:false}
console.log(gen.next());//{value:'green', done:false}
console.log(gen.next());//{value:'undefined', done:true}

/*Generatory dobrze dzialaja z for of loop
* zwroc uwage ze colors() jest teraz obiektem
* generatory uzywamy do iterowania struktury danych
* dzieki for of loop*/

const myColors = [];
for(let color of colors()){
    myColors.push(color);
}
/*Z tego wynika ze generato ma iterator*/
console.log(myColors); // ['red','blue','green']