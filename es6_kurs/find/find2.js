//more complex example

function Car(model){
    this.model = model;
}

//collection

let cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
];

//Finding a car which has property name 'focus';
//Przyklad szukania po instancjach klasy
//poniewaz kazdy element jest instancja to mozemy
//dostac sie do wlasciwosci model

let myCar = cars.find(function(car){
    return car.model === 'Focus'
});

console.log(myCar);

//Prosty przyklad podobny do poprzedniego

let posts = [
    {id:1, title: 'New Post'},
    {id:2 ,title :'Old Post'}
];

let comment = {postId:1, content: 'Great Post'};

//przekazujemy pojedynczy comment ktory ma znalez w postach
//po id
function postForComment(comment,posts){
    return posts.find(function(post){
        return comment.postId === post.id;
    })
}
console.log(postForComment(comment,posts));