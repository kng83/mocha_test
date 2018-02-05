/*przyklad wzbogacenia obiektu o gerarator
* dzieki temu mozemy go iterowac for loopem tak jak tablice*/

let simpleArray = ['kot','pies','kos'];
for(let s of simpleArray){
    console.log(s);
}
let simpleObject = {
    name:'Pawel',
    age:'34',
    like: 'Pizza',
    [Symbol.iterator]:function*(){
        yield this.name;
        yield this.age;
        yield this.like;
    }
}
for(let o of simpleObject){
    console .log(o); //Pawel,34,Pizza
}