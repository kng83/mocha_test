//Proxify bierze klucz i typ z wartosci 
// dzieki temu mozemy zrobic pobranie np z obiektu i zachowac typ number 
// z age.
//

type Proxy<T> = {
    get(): T;
    set(value: T): void;
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
}

let me = { name: 'Pawel', age: 10 }
type Mix = Proxify<typeof me>
let some: Mix;
some.age.get()// number
some.name.get()//string;
