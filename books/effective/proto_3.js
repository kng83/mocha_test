// robimy liczenie instancji dzieki zastosowaniu na zewnatrz Actor.nextID = 0; sprawiamy ze
// wartosc ta bedzie zmieniala sie dla kazdego nowego obiektu

function Actor(scene,x,y){
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.id = ++ Actor.nextID;
    this.id2 = ++ Actor.next2ID;

}
// zerujemy property nextID; Nie uzywamy prototypu bo zalezy nam zeby liczyla instancje
Actor.nextID = 0;
Actor.prototype.next2ID =0;// to wogole nie dziala id2 = NaN

let actor1 = new Actor('scene',10,10);
console.log(actor1); // Actor { scene: 'scene', x: 10, y: 10, id: 1 }

let actor2 = new Actor('scene2',12,12);
console.log(actor2); //Actor { scene: 'scene2', x: 12, y: 12, id: 2 }

// teraz ze sprawdzeniem ja next jest w prototypie



