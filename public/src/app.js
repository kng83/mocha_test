console.log('ddd');
var promise = new Promise(function (resolve, reject) {
    resolve(123);
});
promise.then(function (value) { return console.log(value); });
