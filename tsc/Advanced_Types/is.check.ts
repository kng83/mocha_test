type PositiveNumber = number & { positive: true }
let posNumber: PositiveNumber;
type Buko = string | number



function isPositiveNumber(value: number): value is PositiveNumber {
    if (value < 0) return false
    return true;
}
let isPo = isPositiveNumber(10);

//is operator zawsze zwraca boolean
function isSomething(val: Buko): val is string {
    return typeof val == 'string' ? true : false;
}

let me = isSomething(3)
