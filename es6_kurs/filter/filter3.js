//Practical example

let post ={id:4, title: 'New Post'};

//tu mamy tablice ogolna postow
let comments = [
    {postId:4, content:'awesome post'},
    {postId:3, content: 'it was ok'},
    {postId:4, content: 'neat'} //schludny
];

//give me a comment associated with this post
//chcemy wyciagnac tylko te commenty ktore dotycza tego posta
function commentsForPost(post, comments){
    return comments.filter(function(comment){
        return comment.postId === post.id;
    });
}
console.log(commentsForPost(post,comments));