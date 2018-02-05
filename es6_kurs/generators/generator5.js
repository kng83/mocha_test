//Czyszczenie generatora z przykladu nr4 (ladniejszy wyglad)
//symbol iterator pozwoli nam wyczyscic ten kod tutaj
//sybmol iterator uczy obiekt jak zachowywac sie w petli for loop


/*Second Team dodajemy tutaj symboli.iterator dzieki temu
* w generatorze Team iterator nie musimy sie odwolywac do
* do drugiego generatora bo mamy to zawarte w obiekcie
* Symbol.iterator dodaje obiektowi wlasciwosc po ktorej mozemy
* jezdzic for loopem
* jezeli petla loop wejedzie do naszego testingTeam bedzie szukala
* iteratora znajdzie go a tam odwolania do this.lead i kontynuje do tester
* to jest tak zw. key-interpolation (przyblizony klucz wstawienie klucza do kontekstu)
* [Symbol.iterator] - to klucz []-to nie znaczy ze to tablica
* [Symbol.iterator] uczy for of loop jak ma sie poruszac po tym obiekcie
* */
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]:function* (){ //symbol.iterator to klucz
        yield this.lead;
        yield this.tester;
        //yield 5; mozemy co takiego nawet zrobic
        // yield this
    }
};

const engineeringTeam = {
    testingTeam, //Es6 feature
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yield* team.testingTeam;

}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}
console.log(names); //['Jill','Alex','Dave','Amanda','Bill']

