

class Base1 {
    name = 'piko'
  }
  
  class Alpha extends Base1 {
    color: string = 'white'
  }
  
  
  function builder<T extends Base1>(classParam: new () => T): T {
    let instance = new classParam()
    return instance
  }
  
  let instance = builder(Alpha)
  instance.color = 'black'
  instance.name;