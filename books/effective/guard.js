// tworzymy obiekt guard przechowujacy funkcje ktora sprawdza test
// test piszemy na zewnatrz jesli bedzie pomyslny zwroci true

let guard = {
    guard:function(x){
        if(!this.test(x)){
            throw new TypeError("Oczekiwany typ:" +this)
        }
        return true;
    }
}


// bool test

let isBool = Object.create(guard);
isBool.test = function(x){
    return typeof x === "boolean";
}

// testujem guarda dla false
console.log(isBool.guard(false)); //zwroci true