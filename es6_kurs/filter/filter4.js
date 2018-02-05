//przyklady filtra zadania

//liczby >50
let arrayOfNumbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

let filteredNumbers = arrayOfNumbers
    .filter(function(number){
        return number>50;
});
console.log(filteredNumbers);

//Filter the array of users,
// only returning users who have admin level access.
// Assign the result to the variable 'filteredUsers'.
// Don't forget to use the 'return' keyword in the function!

let users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];

let filteredUsers= users.filter(function(user){
    return user.admin
});

console.log(filteredUsers);
/*This is a hard one!
 Create a function called 'reject'.
 Reject should work in the opposite way of 'filter'
 - if a function returns 'true', the item should *not*
 be included in the new array.  Hint: you can reuse filter
*/

// tut trzeba bylo zwrocic zanegowany wynik z funkcji iteratorFunction

function reject(array,iteratorFunction) {
    return array.filter(function(number){
        return !iteratorFunction(number);
    });
}

let numbers = [10, 20, 30];
let lessThanFifteen = reject(numbers, function(number){
    return number > 15;
});

console.log(lessThanFifteen);