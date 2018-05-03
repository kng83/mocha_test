const { called } = new class {
    count = 0;
    called = () => {
        this.count++;
        console.log(`Called : ${this.count}`);
    }
}

called(); //1
called(); //2

// Pokazanie jak zrobic binda z zachowaniem typu
class Adderr {
    constructor(public a: string) { }
    // This function is now safe to pass around
    add = (b: string): string => {
        return this.a + " " +b;
    }
}
let adder = new Adderr('kot');
const add: typeof adder.add = adder.add.bind(adder);
console.log(add('pies')); //kot pies
