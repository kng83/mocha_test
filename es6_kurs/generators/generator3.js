/*Mamy tutaj obiekti druzyna ala niechecmy calosci
* chcemy tylko ludzi tu wymienionychs*/
const engineeringTeam ={
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
};

/*Robimy generator ktory bedzie nam przechodzil tylko
* po pracownikach */
function *TeamIterator(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

/*Pobieramy teraz imiona i dajemy je do tablicy*/
const names = [];
for(let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}
console.log(names); //['Jill','Alex','Dave']
