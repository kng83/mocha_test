class U1Ctrl{
    name= 'Piotrek';
    age = 5;
}

type D11<K> = {[Key in keyof K]:(req:any,res:any)=>any | void}
let d11:D11<InstanceType<typeof DCtrl>>;
type D22<T extends new()=>any> = D11<InstanceType<T>>
let d22:D22<typeof U1Ctrl>;// d22.age(4,4)()
