//Practical use of every & some
//Testujemy tu przyklad validacji danych na przyklad na
//stronie internetowej

// to reprezentuje pole na stronie
function Field(value){
    this.value = value;
}

//dokladamy prototyp sprawdzajacy validacje pod wzgledem dlugosici
Field.prototype.validate = function(){
    return this.value.length >4;
};

let username = new Field("2cool");
let password = new Field("my_password");
let birthdate = new Field('10/10/2010');
let nick = new Field('bil');

//tutaj sprawdzamy validacje po kolei
console.log(username.validate() && password.validate());

//moglibysmy tak jak wyzej ale mozemy uzyc every
let fields = [username,password,birthdate,nick];
let formIsValid = fields.every(function(field){
    return field.validate();
});

if(formIsValid){
    //allow user to submit
    console.log('user allowed')
}else{
    //show an error messages
    console.log('user is not valid')
}
