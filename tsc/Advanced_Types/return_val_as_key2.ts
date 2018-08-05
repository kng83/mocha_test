
//ta funkcja i interfejs potrafia wydobyc wartosc z obiektu i miec do niej dosteph

class UserCtrl{
    name= 'Piotrek';
    age = 5;
}
interface ValueType<K extends string> {
    name: K
}

type VirtualObject<K extends string> = { [P in K]: any }
let vO:VirtualObject<'rico'>;


function getByName<K extends string>(valueArr: ValueType<K>[]): VirtualObject<K> {
    let out = {} as VirtualObject<K>;
    valueArr.forEach(value => {
        out[value.name] = value;
    });
    return out;
}

let a = getByName([{ name: 'poko' }, { name: 'miko' }]);
a.poko = { name: 'poko' }
//a.miko


