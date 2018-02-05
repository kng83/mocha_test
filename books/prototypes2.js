//dalszy ciag prototypow

function Pies (){
    this.ogon = true;
}

let burek = new Pies();
let azor = new Pies();

//dodajmy prototyp

Pies.prototype.szczekaj = function () {
    return 'Hau';
};


console.log(burek.ogon,azor.ogon); //true , true
console.log(burek.constructor); //Function :Pies
console.log(burek.constructor.prototype); //Pies {}
console.log(burek.szczekaj()); //Hau
console.log(typeof azor.constructor.prototype); //object
console.log(typeof azor.constructor.prototype.ogon); //undefined
console.log(typeof azor.constructor.prototype.szczekaj); //function
console.log(typeof azor.constructor.prototype.constructor.prototype.szczekaj);//function
console.log(typeof azor.ogon); //boolean

Pies.prototype = {lapy:4, owlosiony:true};
console.log(azor.lapy); //undefined azor nie ma dostepu do prototypu bo zostal wczesniej dodany
let bobik = new Pies();
console.log(bobik.lapy); //4 bobik ma dostep do prototypu
console.log(typeof bobik.szczekaj); //undefined bo nadpisalismy prototype
console.log(typeof azor.szczekaj); //function bo obiekt utworzony przed nadpisaniem prototypu
console.log(azor.constructor);//Function:Pies
console.log(bobik.constructor);//Function: Object
//---
console.log(bobik.constructor.prototype.lapy); //undefined
console.log(azor.constructor.prototype.lapy); //4 czyli znaczy ze jednak istniej dostep z azora do lap

//Aby naprawic bledy trzeba dopisac jescze wskazanie na
//do metody szczekaj nie dostaniemy sie tak latwo

function Dog (){
    this.ogon = true;
}
let rys = new Dog();
console.log(rys.ogon,rys.lapy);//true undefined
console.log(rys.ogon,rys.constructor.prototype.lapy); //true undefined [9]

Dog.prototype.szczekaj = function(){
    return 'haau haau';
};


Dog.prototype={lapy:4,owlosiony:true};
Dog.prototype.constructor= Dog; //to naprawia  bo konstruktor tez bedzie wskazywal na psa

let czarek = new Dog();
console.log(czarek.szczekaj); //undefind
console.log(czarek.lapy); //4
console.log(czarek.ogon);//true
console.log(rys.ogon,rys.constructor.prototype.lapy);//true i 4 [9]

//Trening

let ksztalt = {
    typ : 'typ',
    getType:function(){
        return this.typ;
    }
};
console.log(ksztalt.getType()); //typ
console.log(ksztalt.typ); //typ

let Figura = {
    name:'Figura'
};

function Trojkat(a,b,c){
    this.a = a;
    this.b = b;
    this.c =c;
}
Trojkat.prototype = Figura;
Trojkat.prototype.constructor = Trojkat; //bez tego constructor bedzie wskazywal na obiekt a tak na trojkat [3]
Trojkat.prototype.pobierzObwod = function(){
    return this.a + this.b + this.c;
};

let mojTrojkat = new Trojkat(3,4,5);
console.log(mojTrojkat.pobierzObwod());//
console.log(mojTrojkat.constructor); //Object
console.log(mojTrojkat.name); //Figura
console.log(mojTrojkat.constructor.name); //Trojkat[3] bez przepisania konstruktora na Object

//sprawdzamy ktore wlasciwosci naleza do obiektu trojkat a ktore do prototypow
console.log('#################')
for (let key in mojTrojkat){
    if(mojTrojkat.hasOwnProperty(key)){
        console.log(key);
    }else{
        console.log(key,'none own property')
    }
}

//Dodajemy metode potasuj() do tablicy

Array.prototype.potasuj = function(){

    let nowaTablica = [];
    do{
        //trzeba dac this to bedzie sie odnosilo do nowego obiektu tablicy
        //help element to tablica z 1 elementem losowanym z puli pozostalych elementow
        let helpElement = this.splice(Math.floor(Math.random()*this.length),1);
        nowaTablica.push(helpElement[0])

    }while (this.length > 0);
    return nowaTablica;
};

let mojaTab = [1,2,3,4,5,6,7,8,9];
console.log(mojaTab.potasuj());//dziala
let mojeTeksty = ['romek','azor','rysiel','bobo','koko','drago','dlato'];
console.log(mojeTeksty);
let noweTeksty = mojeTeksty.potasuj();
console.log(noweTeksty); //[ 'rysiel', 'azor', 'koko', 'drago', 'romek', 'dlato', 'bobo' ]




