
export {}

// tutaj musi byc global dlatego ze nie pobieramy
// typu tablicy z modulu .Dlatego trzeba dac global a
// dla innych module 'sciezka'
declare global{
    interface Array<T> {
        giveSecond(): T;
    }
}


Array.prototype.giveSecond= function(){
    return this[1];
}


//let a = [1,2,3,4];
//let b = a.giveSecond();
//output 2

