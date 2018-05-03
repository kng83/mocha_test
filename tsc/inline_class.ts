class Base{
    name = "Pawel"
}

let foox = new class extends Base{
    a: number;
    b: number;
    someValue:string;
    constructor(public name:string){
        super();
        this.someValue = name;
    }
    set bar(value: { a: number, b: number }) {
        this.a = value.a;
        this.b = value.b;
    }
    get bar(){
        return {a:this.a+2, b:this.b}
    }
}('kot');

// wyswietli sie kot
foox.bar = {a:4,b:5};
console.log(foox.bar);
console.log(foox.name);
