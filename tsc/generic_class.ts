class Foo<T>{
    foo: T;
}

// robimy klase ktora uzywa klasy Foo z typem number
let FooNumber = Foo as { new ():Foo<number> }; // ref 1

let fooNumber = new FooNumber();
fooNumber.foo = 10;
// fooNumber.foo = 'koadkd'; //error

// alternatywne przekazanie typu
let SecondFoo:{new(): Foo<number>};
let secondFoo = new SecondFoo();
secondFoo.foo= 10;


// jeszcze inaczej
class ThirdNumber extends Foo<number>{}
let thirdNumber = new ThirdNumber();
thirdNumber.foo = 20;
