// Bind do uzywania metod o stalym odbiorcy
let buffer = {
    entries: [],
    add: function (s) {
        this.entries.push(s);
    },
    concat: function () {
        return this.entries.join("");

    }
};

buffer.add('pawel');
buffer.add(' Keng');
console.log(buffer.concat()); //pawel keng

let source = ["kot", "-", "bobo "];
source.forEach((s) => buffer.add(s));
console.log(buffer.concat()); // pawel keng kot-bobo

source.forEach(buffer.add.bind(buffer));
console.log(buffer.concat()); // pawel Kengkot-bobo kot-bobo
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

// inny przyklad od mozilli
// pobieramy funkcje jako referencje i bindujemy ja z obiektem
// mozemy bindowac z tym samym obiektem badz innym ale musza zgadzac sie wlasciwosci

let myModule = {
    x: 42,
    getX: function () {
        return this.x;
    },
    setX: function () {
        console.log(arguments,'tutuj')
        this.x = arguments[0];
    }
};

let secondModule = {
    x: 34
};

let retrieveX = myModule.getX;
console.log(retrieveX()); // undefined

let boundGetX = retrieveX.bind(myModule);
console.log(boundGetX()); // expected output: 42



let boundSecond = retrieveX.bind(secondModule);
console.log(boundSecond()); // expected output: 34


//!!!!!!!!!!!!!!!!!!!!!!!!!!!! dziala.
//nie dzialalo bo funkcje bind trzeba wywolac a nie tylko referencja
//sprawdzam set i nie dziala

myModule.setX(990); //990
myModule.setX.bind(myModule,[199])(); //199
console.log(myModule); //x:199

// sprawdzam z second
myModule.setX.bind(secondModule,40)();
console.log(secondModule); //x:40








