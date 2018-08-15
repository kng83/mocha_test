interface Lengthwise {
    length: number;
}

//K extends keyof Lengthwise - to length =>lengthwise[length] =>number
function loggingIdentity<T extends Lengthwise,K extends keyof Lengthwise>(arg: T[K]): T[K] {
    return arg;
}
let me = loggingIdentity(43); // type number