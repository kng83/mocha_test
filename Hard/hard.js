class Inject{
    constructor(){
        this.obs  = null;
    }
    //lapanie observera
    subscribe(observer){
        this.obs = observer;
    }
    // roglaszenie informacji to wywola funkcje next klasie first
    next(data){
        this.obs.next(data);

    }
}

let inject = new Inject();

class First{
    constructor(){
        this.name = 'Pawel';
        inject.subscribe(this);
    }
    // zmienie sie imie gdy funkcja wywolane bedzie inject.next()
    next(data){
        this.name = data;
    }
}

let first = new First();
console.log(first); // First { name: 'Pawel' }
console.log(inject);// Inject { obs: First { name: 'Pawel' } }
inject.next('Bobo');
console.log(inject); //Inject { obs: First { name: 'Bobo' } }
console.log(first); //First { name: 'Bobo' }




