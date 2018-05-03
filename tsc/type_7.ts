
// Literal types tworzymy generyczne typy;
type Id<T extends string> = {
    type: T,
    value: string
}

type FooId = Id<'foo'>;
const createFoo = (value: string): FooId => ({ type: 'foo', value });
console.log(createFoo('kot'));//{type: "foo", value: "kot"}
