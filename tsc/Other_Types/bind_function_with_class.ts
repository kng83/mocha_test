class UserService10 {
    user = 'user';
    constructor(animal: string) {
        this.user = this.user + animal;
    }
}

class MessageService10 {
    message = 'message'
    constructor(animal: string) {
        this.message = this.message + animal;
    }
}


function makingServices<T extends any, K extends { [Key in keyof T]: InstanceType<T[Key]> }>(servicesObj: T) {
    return createServices.bind(null, servicesObj) as (db:string)=> K
}

let dbKot = 'kot';


function createServices<T extends any, K extends { [Key in keyof T]: InstanceType<T[Key]> }>(servicesObj: T, dbKot) {
    let output = {} as K;
    for (let k in servicesObj) {
        output[k] = new servicesObj[k](dbKot);
    }
    return output
}


let services = makingServices({ userService: UserService10, messageService: MessageService10 })(dbKot);
console.log(services);
