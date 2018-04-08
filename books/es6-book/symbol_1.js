//dodanie symbolu do obiektu
//jako iteratora
let obj = {
    name: 'pawel',
    age: 34,
    keys: [],
    *[Symbol.iterator](){
        this.keys = Object.getOwnPropertyNames(this);
        for(let key of this.keys){
            yield key;
        }
    }
};

for (let o of obj) {
    console.log(o);
}

//******************************************************