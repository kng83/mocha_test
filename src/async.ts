//Funkcje testow do kodu asynchronicznego

function first(para:any, callback:Function) {
    var local = para + para;
    console.log(local);

    setTimeout(() => {
        callback(local);
    },3000)
}

let second = first(100, function (ans) {
    console.log(ans);
});


/*Funkcja odpowiadajaca za utworznie callback ktory dziala w tle
* Jest to funkcja do przegladarki */

Function.prototype.asynco = function(callback:Function) {
    let blob = new Blob([ "self.addEventListener('message', function(e) { self.postMessage({ result: (" + this + ").apply(null, e.data) }); }, false);" ], { type: "text/javascript" });
    let worker = new Worker(window.URL.createObjectURL(blob));
    worker.addEventListener("message", function(e) {
        this(e.data.result);
    }.bind(callback), false);
    return function() {
        this.postMessage(Array.from(arguments));
    }.bind(worker);
};

let a = (function(x:any) {
    for (let i = 0; i < 2199999999; i++) {}
    return x * 2;
}).asynco(function(result:any) {
    alert(result);
})(10);
