
//Wciskanie serwisu do klasy i mapowanie z odpowiednim typem.
//Jest to fabryka class ktore moga pozniej zostac utworzone instancje i sa przechowywane w jednym obiekcie

class UserService {
    constructor(public name: string, public secondName: string) { }
    static makeInstance<T, D extends any[]>(this: new (...arg: D) => T, ...services: D) {
        return new this(...services) as T
    }
}

class MessageService {

    constructor(public name: string, public secondName: string) { }

    static makeInstance<T, D extends any[]>(this: new (...arg: D) => T, ...services: D) {
        return new this(...services) as T
    }
}


function bindedServices<T extends any, K extends { [Key in keyof T]: (db: string) => InstanceType<T[Key]> }>(servicesObj: T) {
    let output = {} as K;
    for (let k in servicesObj) {
        output[k] = servicesObj[k].makeInstance.bind(servicesObj[k]); //egz.: UserService.bind.makeInstance(UserService);
    }
    return output
}

let bs = bindedServices({
    userService: UserService,
    messageService: MessageService
});
let ww = bs.userService('some');
console.log(ww);

//console.log(UserService.makeInstance.call(UserService, 'kot', 'pise'))