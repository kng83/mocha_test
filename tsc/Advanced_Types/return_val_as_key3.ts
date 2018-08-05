
//ta funkcja i interfejs potrafia wydobyc wartosc z obiektu i miec do niej dosteph

class UCtrl{
    name= 'Piotrek';
    age = 5;
}
class DCtrl{
    name= 'Piotrek';
    age = 5;
}


type D1<K> = {[Key in keyof K]:(req:any,res:any)=>any | void}
type D2<T extends new()=>any> = D1<InstanceType<T>>


interface ValueT<K extends string,T extends any> {
    controllerName: K;
    className:T
}

type VirtualObj<K extends string,T extends any> = { [Key in K]:T}



function getByN<K extends string,T extends any>(valueArr: ValueT<K,T>[]): VirtualObj<K,T> {
    let out = {} as VirtualObj<K, T>;
    valueArr.forEach((value:ValueT<K,T>) => {

        out[value.controllerName] = value.className;
    });
    return out
}

let ab = getByN([
    { controllerName: 'poko',className: new DCtrl() },
    { controllerName: 'miko',className:new UCtrl() }
    ]);
ab.




