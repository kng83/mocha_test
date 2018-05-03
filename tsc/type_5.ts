
// tworzenie typu klucza
type Index = 'a' | 'b' | 'c'
type FromIndex = {[key in Index]?: number }

const good: FromIndex = { b: 1, c: 2 }

class Beko implements FromIndex{
    a = 4;
    z='kot'
}

// dodanie typu generycznego
type FromSomeIndex<K extends string> = { [key in K]?: number }

const somer:FromSomeIndex<Index> = {
    b:1,
    a:2,
    // c:'kot' //error
    //zorro:4 //error
}
