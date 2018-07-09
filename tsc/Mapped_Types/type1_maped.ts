type Item = { a: string, b: number, c: boolean };

type T1 = { [P in "x" | "y"]: number };  // { x: number, y: number }
let t1:T1; // {x:number,y:number}

type T2 ={[P in keyof Item]:any[]};
let t2:T2 //{a:any[],b:any[],c:any[]}

type T3 ={[P in keyof Item]:Item}
let t3:T3;//{a:Item, b:Item,c:Item}

// paramtery opcjonalne tak wyglada Partial<>
type T4 ={[P in keyof Item]?:Item[P]} // parametry w Partial robia sie opcjonalne
let t4:T4 ={};
t4.a = 'some';

// implementacja Pick
type Picks<T, K extends keyof T> = {
    [P in K]: T[P];
}

let simpleObj = {
    name:'pawel',
    age:34,
    props:{
        name:'kot',
        value:'fajny'
    }
};

//teraz mamy typ zrbiony z simpleObj.props
type FromPick = Picks<typeof simpleObj,'props'>
let fp:FromPick // np fp.props.name
