type MakeFunct<R,T> = {
    [P in keyof R]: T;
  };
  type Fir<T,R> = T & MakeFunct<R,T>;
  
  class UserRole {
    wozkowy:string  = 'wozkowy' ;
    admin:string  = 'admin';
  }
  
  
  class FirstOfAlla {
    uRole = new UserRole();
      _id:string;
  
    get verify() {
      Object.keys(this.uRole).forEach(key => {
        let a = new FirstOfAlla()
        a._id=this.uRole[key];
        delete a.uRole;
        this[key] = a;
      })
      return this as Fir<this,UserRole>
    }
  
    getValue(){
      return this;
    }
  }
  
  let firstOfAlla = new FirstOfAlla();
  console.log(firstOfAlla.verify.wozkowy.getValue());
  console.log(firstOfAlla.verify.admin);
  
  