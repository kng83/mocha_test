//************************************************

let obj = {
    name: 'pawel',
    age: 34
};

console.log(Object.getOwnPropertyNames(obj)); //[name,age]

Object.defineProperty(obj, 'kot', {value: 'puszek', writable: false, enumerable: false});

console.log(Object.getOwnPropertyNames(obj));
console.log(obj.kot);// puszek
obj.kot = 'piorun';
console.log(obj.kot); //puszek bo writeable


//*************************************************

console.log(Object.getOwnPropertyDescriptor(obj,'name'));
//output dostajemy pelny obraz wlasciwosci objektu
// {   value: 'pawel',
//     writable: true,
//     enumerable: true,
//     configurable: true }

//console.log(Object.getOwnPropertyDescriptors(obj)); // wersja o wszystkich wlasciwosciach



