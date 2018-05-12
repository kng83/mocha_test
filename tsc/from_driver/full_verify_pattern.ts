type MakeMe<R, T> = {
    [P in keyof R]: T;
};
type Firty<T, R> = T & MakeMe<R, T>;

class UserR{
    wozkowy: string = 'wozkowy';
    admin: string = 'admin';
}

class First1 {
    uRole = new UserR();
    _id: string;

    get verify() {
        Object.keys(this.uRole).forEach(key => {
            // tworzy egzemplarz klasy dziedziczacej
            let c = Object.create(this);
            c._id = this.uRole[key];
            this[key] = c;
        });
        return this as Firty<this,UserR>

    }
}

class Second1 extends First1 {
    className = 'Second';
    age = 10;
}

class Third1 extends Second1{
    someName = 'pawel';
}


let second1 = new Second1();
console.log(second1.verify.wozkowy.age);
console.log(second1.verify.admin._id);
console.log(second1.verify._id);

let third1 = new Third1();
console.log(third1.verify.admin._id);