//Tworzymy 2 observable i razem je mozemy odsubskrybowac

let observable= require('rxjs').Observable;
let observable1 = observable.interval(1400);
let observable2 = observable.interval(1300);

let subscription = observable1.subscribe(x =>console.log(x + ' first'));
let childSubscription = observable2.subscribe(x =>console.log(x + ' second'))

// razem je podpinamy

subscription.add(childSubscription);

setTimeout(() =>{
  //  childSubscription.unsubscribe() // to bedzie sama subscription
    subscription.unsubscribe() // 2 beda osubskrybowane
},4000);


console.log(subscription._subscriptions[0].delay);
console.log(childSubscription._parents);