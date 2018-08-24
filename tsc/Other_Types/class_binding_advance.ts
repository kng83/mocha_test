class SomeService{
    constructor(public name: string) { }
}

class UserService {
    constructor(public name: string) { }
    static makeInstance<T, D extends any[]>(this: new (...arg: D) => T, ...services: D) {
        return new this(...services) as T
    }
}

class MessageService {
    layer = 'piko';
    constructor(public name: string) { }

    static makeInstance<T, D extends any[]>(this: new (...arg: D) => T, ...services: D) {
        return new this(...services) as T
    }
}

class UserCtrl {
    constructor(public service: UserService) { }
    static makeInstance<T, D extends any[]>(this: new (...arg: D) => T, ...services: D) {
        return new this(...services) as T
    }
}

class MessageCtrl {

    constructor(public service: MessageService) { }

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

let dbKot = 'dbKot';
let someService = new SomeService('dd')

let mCtlr = MessageCtrl.makeInstance(someService);




function bindedInstance(ctrlClass, services, db) {
    let serviceWithDb = [];
    services.forEach(service => {
        serviceWithDb.push(service(db));
    });
    return ctrlClass.makeInstance(...serviceWithDb);

}

// function makeCtrl<T extends any,K extends new()=> InstanceType<T>, D extends any[]>(ctrlClass: T, ...services: D) {
//     return bindedInstance.bind(null, ctrlClass, services) as (db: string) => T;
// }

function makeCtrl<
    D extends any,
    W extends any[],
    B extends D[],
    Y extends new(...args:W)=>any,
    T extends new (...args: W) => any,
    >(ctrlClass: T, ...services: W) {
    return bindedInstance.bind(null, ctrlClass, services) as T extends new (...args: W) => infer R ? R : never
}




let makeC = makeCtrl(UserCtrl, bs.userService(dbKot), bs.messageService(dbKot));

let obj = {
    userCtrl: makeCtrl(UserCtrl, bs.userService),
    messageCtrl: makeCtrl(MessageCtrl, bs.messageService)
}

console.log(obj.messageCtrl(dbKot));