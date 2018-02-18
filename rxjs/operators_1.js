//An Operator is a function which creates
// a new Observable based on the current Observable.
// This is a pure operation:
// the previous Observable stays unmodified.
// To co wyzej jest najwazniejsze

const Rx =require('rxjs');

function multiplyByTen(input) {
    let output = Rx.Observable.create(function subscribe(observer) {
        input.subscribe({
            next: (v) => observer.next(10 * v),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        });
    });
    return output;
}

let input = Rx.Observable.from([1, 2, 3, 4]);
let output = multiplyByTen(input);
output.subscribe(x => console.log(x));

//output widac ze tu tez zwaracana byla observable
// 10
// 20
// 30
// 40
