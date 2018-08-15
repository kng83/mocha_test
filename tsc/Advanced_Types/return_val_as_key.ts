
//ta funkcja i interfejs potrafia wydobyc wartosc z obiektu i miec do niej dosteph

class UserCtrl{
    name= 'Piotrek';
    age = 5;
}
interface ValueType<K extends string> {
    name: K
}

let valDef: ValueType<'kot'>;
valDef.name = 'kot';

type ObjectType<K extends string> = { [P in K]: ValueType<P> }
type VirtualObject<K extends string> = { [P in K]: any }

let valDefTest: ObjectType<'kot'>;
valDefTest = { 'kot': { name: 'kot' } }


function getByName<K extends string>(valueArr: ValueType<K>[]): VirtualObject<K> {
    let out = {} as VirtualObject<K>
    for (const key in valueArr) {
        out[valueArr[key].name] = valueArr[key]
    }
    return out;
}

let a = getByName([{ name: 'poko' }, { name: 'miko' }]);
//a.poko ={name:'poko'} =>wyniki
a.poko = { name: 'poko' }
//a.miko




type SuperValue<K extends string> = { [P in K]: any }
let sv:SuperValue<'kot'>;
//sv.kot

function maskName<K extends string>(obj:{}):SuperValue<K>{
    let out = {} as SuperValue<K>
    for(let key in obj){
        out[key] = {some:'mis'}
    }
    return out ;
}

let mN = maskName({name:'jozef'});
