//closures => domkniecia
function f1(cb){
    let a = 1;
    cb();
}
let f2 =() =>{
    return a;
};
// f1(f2);// to tez nie dziala nie widzi a

//domkniecie z count

function count(value){
    let mem=value;
    return function(){
        return ++mem;
    };

}

let a1 =count(3);
console.log(a1); //function
let a2=a1();
console.log(a2); //4
a1(); //5
a1(); //6
a2 =a1();//7
console.log(a2); //7

//a teraz klasyczne domkniecie te domkniecie uzywane jest w typescripcie do tworzenia klass

let MyObj = (function(){


    function MyObj(value){
        //to jest konstruktor tej funckji
        this.value = value;
        this.imie = 'Pawel';
    }

    MyObj.prototype.getValue = function(){
        return this.value;
    };
    MyObj.prototype.setValue = function(val){
        this.value = val;
        return this.value;
    };
    MyObj.prototype.getImie = function(){
        return this.imie;
    };
    return MyObj;
})();

let my = new MyObj(34);
console.log(my.getValue());
console.log(my.setValue(33));
console.log(my.getValue());
console.log(my.getImie());
console.log(my.constructor.name);

