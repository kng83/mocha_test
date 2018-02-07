//Practical example of destructuring
//Robimy funkcje do zapisywania uzytkownikow

function signup(username, password,email,dateOfBirth,city){
    //create new user
}

//zamiast tego wyzej mozemy zrobic obiekt i dac mu parametry

function sing({username,password,email}){
    //some code
    return username;
}

let user = {
    username:'Pawel',
    password:'dd',
    email:'test@test.com',
    dateOfBirt:'10/10/1930',
    city:'San Francisco'
};

//i przekazujemy tutaj uzytownika obiekt ;
//nie musimy uzywac wszystkich wlasciwosci obiektu w kodzie
//mozemy pobrac to co potrzebujemy

console.log(sing(user));