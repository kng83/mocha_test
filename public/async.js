function first(para, callback) {
    var local = para + para;
    console.log(local);
    setTimeout(function () {
        callback(local);
    }, 3000);
}
var second = first(100, function (ans) {
    console.log(ans);
});
Function.prototype.asynco = function (callback) {
    var blob = new Blob(["self.addEventListener('message', function(e) { self.postMessage({ result: (" + this + ").apply(null, e.data) }); }, false);"], { type: "text/javascript" });
    var worker = new Worker(window.URL.createObjectURL(blob));
    worker.addEventListener("message", function (e) {
        this(e.data.result);
    }.bind(callback), false);
    return function () {
        this.postMessage(Array.from(arguments));
    }.bind(worker);
};
var a = (function (x) {
    for (var i = 0; i < 2199999999; i++) { }
    return x * 2;
}).asynco(function (result) {
    alert(result);
})(10);
