let logProp = function(prop){
    console.log(this[prop]);
};

let Obj = {
    x:5,
    y:10
};

Obj.log = logProp.bind(Obj);
Obj.log('x'); //5

// tworzymy logY bindujemy nowa funkcje z argumentem

Obj.logY = Obj.log.bind(Obj,'y');
Obj.logY(); // 10
console.log(Obj); // jest teraz funkcja log i log x