//Practical example mamy np metode calculateProducts i
//chcemy zmienic jej nazwe ale zeby kod stary dzialal
const MathLibrary = {
    calculateProduct(a,b){
        return a * b;
    },
    //dobrze ale mamy zduplikowana logike
    multiply(a,b){
        return a *b;
    }
};

//other approach
//robimy odniesieni do nowej metody i przekazujemy
//wszystkie argumenty przez spread operator

const MathLibrary2 = {
    calculateProduct(...rest){
        console.log('Please use multiply method instead')
        return this.multiply(...rest);
    },
    //dobrze ale mamy zduplikowana logike
    multiply(a,b){
        return a *b;
    }
};
console.log(MathLibrary2.multiply(20,2));
console.log(MathLibrary2.calculateProduct(20,10));



