function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: 'Jarid',
    age: 35
};

// Jest sprawdzone czy klucz obiektu istanieje
let strings: string[] = pluck(person, ['name']); // ok, string[]

console.log(strings) //Jarid

let personProps: keyof Person; // 'name' | 'age'

let someProps: keyof typeof person; //
someProps = 'name';//ok