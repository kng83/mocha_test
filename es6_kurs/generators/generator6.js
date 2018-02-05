/*Teraz uproscimy nasza druzyne inzynierow*/
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]:function* (){ //symbol.iterator to klucz
        yield this.lead;
        yield this.tester;
    }
};

//teraz dodajemy symbol iterator do naszej druzyny inzynierskiej
//testingTeam tez mozemy wrzucic do naszego iteratora
const engineeringTeam = {
    testingTeam, //Es6 feature
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]:function* (){
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
};

const names = [];
//tutaj mozemy sie odwolac do engineeringTeam bezposrednio
for (let name of engineeringTeam) {
    names.push(name);
}
console.log(names); //['Jill','Alex','Dave','Amanda','Bill']

