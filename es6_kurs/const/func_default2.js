//Przyklad bardziej rozbudowany

function User(id){
    this.id = id;
}

function generateId(){
    return Math.random()*9999999;
}

//dodajemy wlasciwosc do obiektu user
function createAdminUser(user){
    user.admin = true;
    return user;
}

// tu jest brzydkie zagniezdzenie
//wynik to User { id: 3565936.094694982, admin: true }
console.log(createAdminUser(new User(generateId())));

//wersja z defaultem lepsza bo ostatnia funkcje mozna eksportowac
function createSuperUser(user = new User(generateId())){
    user.super = true;
    return user;
}
//User { id: 2279582.615163073, super: true }
console.log(createSuperUser());