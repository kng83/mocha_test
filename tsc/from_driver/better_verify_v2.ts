
type VerifyParams2<R, T> = {
    [P in keyof R]: T;
};
type Verify2<T, R> = T & VerifyParams<R, T>;

class UR2{
    wozkowy: string = 'wozkowy';
    admin: string = 'admin';
}
class Custom2{
    all: string = 'all';
    allLogged: string = 'allLogged';
}

class UserAuth2 {
    private addedProps = Object.assign({}, new UR(), new Custom);
    _vid: string;

    constructor() {
        this.propsMaker();
    }

    get verify() {
        return this as Verify2<this, UR & Custom>;
    }

    private propsMaker() {
        Object.keys(this.addedProps).forEach(key => {
            console.log()
            let c = Object.create(this);
            c._vid = this.addedProps[key];
            this[key] = c;
        });
    }
    protected validate(req) {
        if (this._vid === req['id']) {
            return true;
        }
    }
}

class DerFromUserAuth2 extends UserAuth2 {
    className = this.constructor.name;
    age = 10;

    getAll(req, res) {
        req['id'] = 'all';
        if (!this.validate(req)) {
            console.log('ketter');
            return;
        }
        return 'getAll';
    }
}


let derFromUserAuth2 = new DerFromUserAuth2();
console.log(derFromUserAuth2.verify.wozkowy.age);
console.log(derFromUserAuth2.verify.className);

let req = {};
console.log(derFromUserAuth2.verify.all.getAll(req, ''));
console.log(derFromUserAuth2.verify.allLogged.verify.getAll);
