interface URole {
    wozkowy: string;
    maszynista: string;
}

class Roles<T>{
    readonly wozkowy: T;
    maszynista: T;
    some = 10;
    doIt() {
    }
}
class Based{}

function decorate<T, E>(model: { key: string, value: any }) {
    return function <T extends Role<E>>(constructor: new () => T) {
        console.log('dekorator started');
        constructor.prototype[model.key] = model.value;
    }
}

@decorate({ key: 'wozkowy', value: 'mruczek' })
class SuperUser extends Role<string>{

}

let sUser = new SuperUser();
console.log(sUser);
console.log(sUser.wozkowy)