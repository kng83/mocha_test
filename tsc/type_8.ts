// ten typ tworzy nam stos
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}

let people:LinkedList<Person>;
let s = people.next.next.name;
let sa = people.next.next.next.next.next.next.name;


type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

let tree:Tree<string>;
let smoleTree =tree.left.right.right.value;


let someElse:Tree<LinkedList<Person>>;
let soso = someElse.right.value.next.name;