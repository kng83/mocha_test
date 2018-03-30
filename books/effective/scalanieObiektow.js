// Wstrzykniecie obiektu do obiektu przez bind


let simple = {
    name: 'pawel',
    age: 34,
    getAge:function(){
        return this.age;
    }
};

let pattern = {

    addObj : function(source,target){
         Object.keys(source).forEach((key)=>{
             console.log(source[key] ,key);
             target[key]=source[key];
         })
    }
};
let target = {cash:10};

pattern.addObj(simple,target);
console.log(target); //cash ,name ,age
console.log(target.getAge());
