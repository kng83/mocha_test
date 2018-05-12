
type VerifyParams<R, T> = {
    [P in keyof R]: T;
};
type Verify<T, R> = T & VerifyParams<R, T>;

class UR {
    wozkowy: string = 'wozkowy';
    admin: string = 'admin';
}
class Custom{
    all:string ='all';
    allLogged:string = 'allLogged';
}

class UserAuth {
    private addedProps = Object.assign({}, new UR(),new Custom);
    _vid: string;

    constructor() {
        this.propsMaker();
    }

    get verify() {
        return this as Verify<this, UR & Custom>;
    }

    private propsMaker() {
        Object.keys(this.addedProps).forEach(key => {
            console.log()
            let c = Object.create(this);
            c._vid = this.addedProps[key];
            this[key] = c;
        });
    }
}

class DerFromUserAuth extends UserAuth {
    className = this.constructor.name;
    age = 10;
}



let derFromUserAuth = new DerFromUserAuth();
console.log(derFromUserAuth.verify.wozkowy.age);
console.log(derFromUserAuth.verify.wozkowy._vid);
console.log(derFromUserAuth.verify.admin._vid);
console.log(derFromUserAuth.verify.className);


