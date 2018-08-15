
//ta funkcja i interfejs potrafia wydobyc wartosc z obiektu i miec do niej dosteph

class U2Ctrl{
    name= 'Piotrek';
    age = 5;
}
class D2Ctrl{
    wname= 'Piotrek';
    wage = 5;
}

interface MainT<K extends string,T extends any> {
    controllerName: K;
    className:T
}

type OutObj<K extends string,T extends any> = { [Key in K]:T}



function getSome<K extends string,T extends any>(valueArr: MainT<K,T>[]): OutObj<K,T> {
    let out = {} as OutObj<K, T>;
    for(let index in valueArr){
        out[valueArr[index].controllerName] = valueArr[index].className;
    }
    return out
}

let ac = getSome([
    { controllerName: 'poko',className: new D2Ctrl() },
    { controllerName: 'miko',className:new D2Ctrl() }
    ]);

ac


