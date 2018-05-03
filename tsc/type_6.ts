

let efoo = 123;
let ebar: typeof efoo; // `bar` has the same type as `foo` (here `number`)
ebar = 456; // Okay
// ebar = '789'; // ERROR

const colors = {
    red: 'red',
    blue: 'blue'
}
// mozemy lapac typy z obiektu
type Colors = keyof typeof colors;
let color: Colors;
color = 'red'; // okay
color = 'blue'; // okay
// color = 'anythingElse'; // Error