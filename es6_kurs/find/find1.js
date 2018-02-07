//find

let users = [
    {name: 'Jill'},
    {name: 'Alex'},
    {name: 'Bill'}
];

//finding a user 'Alex'
// jezeli znajdziemy juz uzytkownika to dobrze dac break
//aby petla dalej sie nie wykonywala
let user;
for (let i=0; i<users.length; i++){
    if(users[i].name==='Alex'){
        user=users[i];
        break;
    }
}
console.log(user);

//Find helper jezeli znajdzie szukany rekord od razu
//przerwie petle i zwroci szukany rekord
//find zwroci pierwszy napotkany rekord

let foundedUser = users.find(function(user){
    return user.name === 'Alex'
});

console.log(foundedUser);