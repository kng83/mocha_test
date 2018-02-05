/*Practical use case of foreach
 usuniecie np niechcianych mail poprzez zaznaczenie
 tego ktorego nie chcemy */

function savePost(someObject){
    console.log(someObject);
}
function handlePosts() {
    const posts = [
        { id: 23, title: 'Daily JS News' },
        { id: 52, title: 'Code Refactor City' },
        { id: 105, title: 'The Brightest Ruby' }
    ];

    posts.forEach(function(post){
        savePost(post);
    });
}

let images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];

//Nastepny przyklad
let areas = [];

images.forEach(function(area){
    areas.push(area.height*area.width);
});

console.log(areas);