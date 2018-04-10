// do klasy abstract mozemy przekazac model np z klasy ktora dziedziczy i na nim operowac

abstract class Base{
    // dajac do modelu abstract zmuszamy klase pochodna do tego by dodala ta wlasciwosc

    abstract model:any;
    loadModel(){
        return this.model;
    }
    loadName(){
        return this.model.name;
    }
    loadHeight = ()=> {
        return this.model.height;
    };

    get height(){
        return this.model.height;
    }
    set height(value){
        this.model.height = value;
    }

}

let Cat = {
    height:34,
    name:'pawel'
};

class Bobo extends Base{
     model = Cat;
}

let bobo = new Bobo();
console.log(bobo.model);
console.log(bobo.loadName(),'here');
console.log(bobo.loadModel()); // { height: 34, name: 'pawel' }
console.log(bobo.loadHeight()); //34
console.log(bobo.height); //34
bobo.height = 50;
console.log(bobo.height); //50
