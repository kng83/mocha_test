interface User{
    name:string;
    age:string;
}
let promise:Promise<User> = new Promise(resolve => {
    setTimeout(() => {
        resolve({name:'Bobo',age:'4'})
    }, 2000)
})

async function getCat(promise: Promise<User>):Promise<User> {
    let p = await promise;
    return p;
}


export let {name, age}:Promise<User> | any = getCat(promise).then((value:User)=>{
    name = value.name;
    age =value.age;
});



