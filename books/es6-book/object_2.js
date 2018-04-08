let obj = {
    name: 'Pawel',
    age:34
};
obj['lubi'] = 'nic';

Object.defineProperties(obj,{'kot':{value:'mruczek',writable:false,enumerable:false},
                             'pies':{value:'Reksio',writeable:false,enumerable:false}
                        });

console.log(Object.getOwnPropertyNames(obj)); //['name','age','lubi','kot','pies']

// klucze dodane za pomoca define properties nie sa widoczne w object keys gdy enumerable:false
console.log(Object.keys(obj).toString()); // name,age,lubi

console.log(Object.isExtensible(obj)); //true czy mozna dodawac do obiektu

console.log(Object.assign(obj,{'auto':'czarne'})); // { name: 'Pawel', age: 34, lubi: 'nic', auto: 'czarne' }

