function saveFile(url,data) {
    $.ajax({method: 'Post',url: url ,data:data});
}

const url = "http://fileupload.com";
const data = {color: 'red'};

saveFile(url,data);

//Wykorzystanie uproszczenia object literals
//jezeli wykorzystujemy skrocona wersje klucz wartosc to
// nazwy skrocone dajemy na poczatek obiektu
function sFile(url,data) {
    $.ajax({url,data, method: 'Post'});
}

const url1 = "http://fileupload.com";
const data1= {color: 'red'};

sFile(url1,data1);