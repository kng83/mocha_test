//Uzywamy tutaj union types utworzony typ odnosi sie do obiektu
//mozna go wykorzystac jako wzor obiektu
type BooleanPerson = {
    [P in "name" | "age" | "location"]: boolean
};

let z: BooleanPerson = {} as BooleanPerson;
z.age = true;
z.name = true;
z.location = true;


// sprawdzenie z funkcjami budujemy klase ktora musi zawierac funkcje
type SuperFunction = {
    [P in "make" | "take"]: Function;
}

type SuperType= {
    [P in "lake" | "whana"]: Function;
}

// dodajemy tu typ ktory mozemy rozszerzac
class SuperMe implements SuperFunction {
    make = function () {

    };
    take = function () {

    };
    get me(){
        return <this & SuperType> this;
    }
}

let me = new SuperMe();
console.log(me.me.lake); //bierzemy tutaj rozszerzenie typu
