
// Sprawdzenie czy wszyscy uzytkownicy potwierdzili cos
let users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
];

let hasSubmitted = users.every(function(user){
    return user.hasSubmitted; //kazda iteracja jest sprawdzana na warunek true
});
console.log(hasSubmitted);

//Przyklad czy ktorys z requestow jest pending

let requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];

let inProgress = requests.some(function(request){
    return request.status === 'pending'
});

console.log(inProgress,'Sprawdzenie requestow');