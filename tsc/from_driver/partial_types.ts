class Roll{
    wozkowy ='wozkowy';
    admin ='admin';
}

// dzieki partial mamy pewne uzupelnienie skladi szkoda z
class Person {
    public name: string = "default"
    public address: string = "default"
    public age: number = 0;

    public constructor(init?:Partial<Roll>) {
        Object.assign(this, init);
        return this;
    }
}

let persons = new Person({wozkowy:'woz',admin:'ad'})
// console.log(persons.wozkowy) // poprawnie wozkoy jest obliczany ale typ jest nie znany
