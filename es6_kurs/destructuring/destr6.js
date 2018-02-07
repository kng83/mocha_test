//why we using destructuring array

const points = [
    [4,5],
    [10,1],
    [0,40]
];

//and of the day array of char
//ale biblioteka wymaga {x:4,y:5},{x:10,y:1]

//ES6

//destrukturyzowac mozemy rowniez w argumentach
// const [x,y] =[pair]; //to znaczy to co w nawiasie
//to wyglada troche skomplikowanie

let ans = points.map(([x,y]) =>{
    // return {x:x,y:y}; //zwracamy zdestrukturyzowany obiekt
    return {x,y}; //to co wyzej
});
console.log(ans);