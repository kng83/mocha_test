// promises are unresolved , resolved , rejected
//resolved lapiemy then
//rejected lapiemy catch

let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject();
    },3000);

});

promise
    .then(() => {console.log('promise resolved')})
    .then(() => {console.log('wait a minute')})
    .catch(() => {console.log('something goes wrong')});