/*Delegacja generatoro
* przyklad ze mamy lead manager Engineer i Testing Team ktora
* jest niezalezna i sklada sie z Lead i Tester*/


/*Second Team*/
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
};
/*Dodajemy tutaj testingTeam ktore bedzie sie odwolywac do
* obiektu testingTeam*/
const engineeringTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    testingTeam: testingTeam //poniewaz mamy klucz value takie samo moglibysmy uzyc tylko raz
};

/*generator dla druzyny testerow*/
function* TestigTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

/*Robimy generator ktory bedzie nam przechodzil tylko
* po pracownikach aby byli wszyscy dodajemy delegowany generator
* ktory wprowadzi na iteracje po jego elementach
* yield* to delegacja generatora*/
function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    //yield team.testingTeam.lead; //to dziala ale chcemy inaczej
    const testingTeamGenerator = TestigTeamIterator(team.testingTeam);
    //teraz zeby iterowac po drugim generatorze dajemy:
    yield* testingTeamGenerator; //gdy for loop trafi na to to przejdzie do nowego generatora

    //  yield* TestigTeamIterator(team.testingTeam); //tez dziala
}


/*Pobieramy teraz imiona i dajemy je do tablicy
* chcemy teraz 2 nasze generatory umiescic w jednej petli
* we must delegate iteration from EngineeringTeam to
* TestigTeam chcemy zrobic iteracje razem dla jednej druzyny
* i drugiej druzyny to sie nazywa generator delegate*/

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}
console.log(names); //['Jill','Alex','Dave','Amanda','Bill']
