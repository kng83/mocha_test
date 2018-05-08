type HeadAndTail<T> = T & { first: string, tail: string };

// typ this mozemy dac tylko w interfejsie dotyczacym klasy dlatego musimy go podac tutaj generycznie

interface ListItem{
    getHead(): this;
    readonly someValue: HeadAndTail<this>
}


class Brico implements ListItem {
    value=4;
    getHead() {
        return this;
    }
    showValue(){
        return this.value;
    }
    // dzieki temu mozemy rozszerzyc nasz zwracany typ o obiekt ktory dodalismy
    get someValue(){
        this.value = 5;
        Object.assign(this,{first:'my first',second:'mySecond'})
        return this as HeadAndTail<this>
    }
}

let brico = new Brico();
console.log(brico.someValue.showValue());
console.log(brico.someValue.first); // mozna first
