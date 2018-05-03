interface URole{
    wozkowy:string;
    maszynista:string;
}

class Role<T>{
    wozkowy:T;
    maszynista:T;
    doIt(){

    }
}

function modelDecorator<E,D>(model:  {roleModel:URole,secret:string}) {
    return <T extends Role<E>>(constructor: new () => T): new () => T => {
        Object.keys(model).forEach((key:string)=> {
            constructor.prototype[key] = model[key]

        });
        return constructor;

    }
}
let modelUser:URole = {
    maszynista:'Bolek',
    wozkowy:'Romek'
}

@modelDecorator({roleModel:modelUser,secret:'secret'})
class Something extends Role<string>{

}
let some = new Something()
console.log(some['maszynista']);

console.log(some.constructor.prototype)
console.log(some);