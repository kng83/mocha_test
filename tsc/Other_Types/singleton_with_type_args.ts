//Singleton with typed args
// Argumenty sa sprawdzane dla statycznej funkcji makeInstance
//Wyszlo super i jest gotowe do produkcji

class UserService {
    getSome() {
        console.log('get')
    }
}
class MessageService {
    getEles() {
        console.log('soem');
    }
}

class LittleService{

}

class UserCtrl {
    constructor(public service: UserService, public message: MessageService) {

    }
    static makeInstance<T, D extends any[]>(this: new (...arg: D) => T, ...service: D) {
        return new this(...service) as T
    }
}

class BossCtrl extends UserCtrl{
    constructor(public service: UserService, public message: MessageService,public littleService: LittleService){
        super(service,message);
        
    }
    name = 'Big boss'
}

let some = UserCtrl.makeInstance(new UserService(), new MessageService);

let boss = BossCtrl.makeInstance(new UserService,new MessageService,new LittleService)

