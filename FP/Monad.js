
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const trace = label => value => {
    console.log(`${ label }: ${ value }`);
    return value;
};

const label = 'API call composition';
// a => Promise(b)
const getUserById = id => id === 3 ?
    Promise.resolve({ name: 'Kurt', role: 'Author' }) :
    undefined
;
// b => Promise(c)
const hasPermission = ({ role }) => {
    console.log(role);
    return (Promise.resolve(role === 'Author'))
}
// sprawszenie getUserById dla
let user = getUserById(3).then(({name})=>console.log(name)); //Kurt
// Try to compose them. Warning: this will fail.
const authUser = compose(hasPermission, getUserById);
// Oops! Always false!




const composeM = chainMethod => (...ms) => (
    ms.reduce((f, g) => x => g(x)[chainMethod](f))
);

const composePromises = composeM('then');

const authUser2 = composePromises(hasPermission, getUserById);
authUser2(3).then(trace(label)); // true

//trace
let me = trace('kot')(3); //kot:4



const MyMonad = value => ({
    // <... insert arbitrary chain and of here ...>
    map (f) {
        return this.chain(a => this.constructor.of(f(a)));
    }
});


let w = v =>({name:'kot',value:v});
let myW =w(4);
console.log(myW);//{ name: 'kot', value: 4 }

let w2 = v =>{return {name:'kot',value:5}}
let myW2 = w2(4);
console.log(myW2);//{ name: 'kot', value: 5 }


