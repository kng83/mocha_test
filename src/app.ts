console.log('ddd')
const promise = new Promise<any>((resolve: any, reject: any) => {
    resolve(123);
});
promise.then((value)=>console.log(value)); 