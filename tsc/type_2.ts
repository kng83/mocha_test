

type Adders = (numbers: { a: number, b: number }) => number;
function iTakeAnAdder(adder: Adders) {
    return adder({ a: 1, b: 2 });
}
let me =iTakeAnAdder(({ a, b }) => { // Types of `a` and `b` are inferred
                                     // a = "hello"; // Would Error: cannot assign `string` to a `number`
    return a + b;
});

console.log(me); // 3