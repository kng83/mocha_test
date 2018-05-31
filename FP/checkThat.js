const Zebra = x => ({
    value: x,
    map: (func) => func(Zebra(x)),
    take() {
        return this.value;
    },
    map2(func){
        this.value = func(this.value);
        return this;
    },
    print(){
        console.log(this.value);
    }
});


let z = Zebra(10);

let a = z.map2((value)=>value+10).print();



