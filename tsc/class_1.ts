//test interfajesu z klasy

class SomeInterface{
    bit_0 =false; //0 ,1
    bit_1 = false; //0,2
    bit_2 = false; //0,4
    bit_3 =false; //0,8
    bit_4 =false; //0,16
    bit_5 =false; //0,32
    bit_6 =false; //0,64
    bit_7 =false; //0, 128
}

let obj = new SomeInterface();
// wyswietl wszystkie klucze
Object.keys(obj).forEach((value)=>(<any>obj)[value]);

// teraz sprobujmy zrobic redukcje
obj.bit_0 = true;
obj.bit_1 = true;
obj.bit_2 = true;
obj.bit_3 = true;

// na dole trzeba dac 0 to wtedy akumulator bedzie dzialal na liczby
let me =Object.keys(obj).reduce((acc,currentValue,index)=>{
    let val =0;
    if((<any>obj)[currentValue] === true){
        val =1;
    }
        acc = (val * Math.pow(2,index)) + acc;
        return acc
},0);

console.log(me,'now'); // przelicza nr bita na wartosc


