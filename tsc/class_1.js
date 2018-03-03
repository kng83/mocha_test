//test interfajesu z klasy
var SomeInterface = /** @class */ (function () {
    function SomeInterface() {
        this.bit_0 = false; //0 ,1
        this.bit_1 = false; //0,2
        this.bit_2 = false; //0,4
        this.bit_3 = false; //0,8
        this.bit_4 = false; //0,16
        this.bit_5 = false; //0,32
        this.bit_6 = false; //0,64
        this.bit_7 = false; //0, 128
    }
    return SomeInterface;
}());
var obj = new SomeInterface();
// wyswietl wszystkie klucze
Object.keys(obj).forEach(function (value) { return obj[value]; });
// teraz sprobujmy zrobic redukcje
obj.bit_0 = true;
obj.bit_1 = true;
obj.bit_2 = true;
obj.bit_3 = true;
// na dole trzeba dac 0 to wtedy akumulator bedzie dzialal na liczby
var me = Object.keys(obj).reduce(function (acc, currentValue, index) {
    var val = 0;
    if (obj[currentValue] === true) {
        val = 1;
    }
    acc = (val * Math.pow(2, index)) + acc;
    return acc;
}, 0);
console.log(me, 'now'); // przelicza nr bita na wartosc
