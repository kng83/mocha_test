function prefix(target: Object,name: string, descriptor: PropertyDescriptor){
    let method = descriptor.value as Function;
  
    if (typeof method !== 'function') {
      throw new Error('Expecting decorating a method');
    }
  
    return {
      value: async function () {
        console.log(this)
        return method.apply(this, arguments);
      },
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable
    };
  }
  
  class Foo {
    @prefix
    async getContents(someText:string): Promise<string> {
      return await Promise.resolve(someText);
    }
  }
  
  let foo = new Foo();
  foo.getContents('pawel').then(console.log)