class Look {
    name = "Pawel";
    myage = 34;
  }
  
  
  class Somer {
    protected customModel = new Look();
  
    get verify() {
      let role = <Look>{};
      Object.keys(this.customModel).forEach((key) => {
        console.log(key);
        role[key] = this.customModel[key];
      });
      return role
  
    };
  }
  
  let some = new Somer();
  console.log(some.verify.myage);


  