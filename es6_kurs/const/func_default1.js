//wartosci default dla funkcji

function makeAjax(url,method){
    if(!method){
        method = 'Get'
    }
    return method;
    //logic to the request
}

console.log(makeAjax('google.com'));//tu jest default get
console.log(makeAjax('google.com',null));//Get
console.log(makeAjax('google.com',undefined));//Get

function makeAjax2(url, method = 'GET'){
    return method
    //logic to the request
}

//roznica jest przy null
console.log(makeAjax2('gogo')); //get
console.log(makeAjax2('bobo',null));//null
console.log(makeAjax2('ddd',undefined));//get