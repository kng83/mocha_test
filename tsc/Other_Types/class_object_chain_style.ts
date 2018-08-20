

class UserCtrl {
    constructor(public service: UserService) {

    }
}
class MessageCtrl {
    constructor(public service: MessageService) {

    }
}
class UserService {

}


class MessageService {

}

class Bootstrap {

    services: any;
    makeServices<K extends any>(obj: K) {

        Object.assign(this, { services: obj })
        return this as this & { services: K };
    }
    makeControllers<K extends any>(obj: K) {
        return obj;
    }
    createControllers<K, T extends { services: any }>(this: T, fn: Function): K {
        let value = this.services as T;
        return fn(value) as K;
    }

}

let b = new Bootstrap();
let me = b.makeServices({ userService: new UserService(), messageService: new MessageService() })
let ce = me.createControllers((value: any) => {
    return {userCtrl:value.userService}
})
console.log(ce);