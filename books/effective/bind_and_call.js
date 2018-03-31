// They all attach this into function (or object) and the
// difference is in the function invocation (see below).
// call attaches this into function and executes the function immediately
// call wywoluje od razu funkcje .bind tworzy deklaracje ktora moze byc wywolana

let person = {
    name: "Default",
    hello: function(value) {
        console.log(this.name +" says "+ value);
    }
};
//default
person.hello("0");
// output: "Default says 0"

//call
person.hello.call({ name: "Call" }, "1");
// output: "Call says 1"

//apply
person.hello.apply({ name: "Apply" }, ["2"]);
// output: "Apply  says 2"

// bind
let helloFunc = person.hello.bind({ name: "Bind" });
helloFunc("3");
// output: Bind says 3"

console.log(typeof person.hello); // function
console.log(typeof helloFunc); // function