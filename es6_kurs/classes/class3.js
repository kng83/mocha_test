
//Potwor ktoremy dasz imie i health 100
class Monster{

    constructor(options){
        this.name = options.name;
        this.health = 100;
    }
}

let monster = new Monster({name:'Pawel'});
console.log(monster);

//nastepny

class Snake extends Monster{
    constructor(options){
        super(options)
    }
    bite(snake){
        snake.health = snake.health - 10;

    }
}

//waz gryzie weza instancje sa sobie przekazywane



let snake = new Snake({name:'Robert',health:'100'})
let snake2 = new Snake({name:'Robert',health:'100'})
snake.bite(snake2)
console.log(snake2);
snake.bite(snake2);
console.log(snake2);