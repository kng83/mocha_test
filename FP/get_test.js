function reqRes(req, res) {
    return { req: req, res: res }
}

class Route {

    constructor(){
        this.req ='request';
        this.res ='response'
    }
    get(fn) {
        return fn(this.req,this.res);
    }
}


class Ctrl {
    getAll(req, res) {
        return new Wrapper({req,res})
    }
}

class Wrapper{
    obj={};
    constructor(obj){
        this.obj = obj;

    }
    make(){
        console.log(this.obj);

    }
    get verify(){
        return  this.admin;
    }

    get admin(){
        return 'some';
    }
}

const route = new Route();
const userCtrl = new Ctrl();
let testRoute = route.get((req,res)=>userCtrl.getAll(req,res).make());
let otherRoute = route.get(userCtrl.getAll(req,res).verify.admin);
