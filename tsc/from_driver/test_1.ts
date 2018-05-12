abstract class First {

    abstract name: string;
    private value:string;
    get verify() {
        this.value = 'Pawel'
        return this
    }
    get verfiy2(){
        this.value = 'Robert'
        return this;
    }
    protected passValue(value) {
        if (this.value === value) {
            return true;
        }
    }
}


class Second extends First {
    name = 'pawel';

    giveName(name: string) {
        if (this.passValue(name)) {
            return `${this.name}`
        }
        return 'fault';

    }
}

let sec = new Second();
console.log(sec.verify.giveName('Pawel'));
console.log(sec.verfiy2.giveName('Robert'));
