//Some practical example of reducers (reduktor)
//"()()()()" //sprawdzamy czy domkniecia maja balance
//"((()))" // balance expression
//")))"// unbalance expression
//())))// unbalance expression
//")(" // przypadek szczegolny unbalance

// We grab a function check parenthesis and return boolean

function balancedParens(string){
    //zwracamy string podzielony na kawalki
    //nasza wartoscia poczatkowa bedzie 0 i bedziemy liczyc nawiasy
    //jesli zobaczymy nawias otwarty bedziemy dodawac 1 jesli zamkniety
    //to bedziemy odejmowac 1
    //tu jest pewien trick jezeli damy ! to przed to co zwracamy
    //to zwracamy bool (jezeli jest 0 to true inaczej 1)
    //aby wylapac )( to to wiemy ze jezeli nasz licznik wejdzie
    //na minusa to mamy cos nie tak i dlatego jeszcze jedno sprawdzenie
    //<0 to jest trick  taki ze juz nie bedzie sie wynik zgadzal
    //jest tu wykorzystanie czytanie od lewej do prawej
    return !string.split("").reduce(function(previous ,char){
        if(previous<0){return previous}
        if(char === "("){return ++previous}
        if(char === ")"){return --previous}
        return previous;
    },0);
}

console.log(balancedParens("()((()))()"));
