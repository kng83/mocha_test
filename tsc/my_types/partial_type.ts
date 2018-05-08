//dzieki temu mozemy ograniczyc widocznos niektorych typow

type ReadonlyPartial<T> = { readonly [P in keyof T]?: T[P] }
class FirstM{
  name='pk'
}

class SecondM extends FirstM{
  age = 10;
}

let secondM:ReadonlyPartial<FirstM> = new SecondM(); // .name
let otherM :ReadonlyPartial<SecondM> = new SecondM(); //.name,.age
