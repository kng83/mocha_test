
export {};
export interface Array<T> {
        giveThird(): T;
    }


Array.prototype.giveThird= function(){
    return this[2];
}


//let a = [1,2,3,4];
//let b = a.giveSecond();
//output 2

