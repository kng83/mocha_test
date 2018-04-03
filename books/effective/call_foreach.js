// wywolujemy callem funkcje dla argumentow
// upakowujemy argumenty do tablicy
// do call obiektem wsakazywanym sa arguments a parametr z forEach(callback) jest na drugim miejscu
function highlight(){
      let arr = [];
      [].forEach.call(arguments,function(element){
        arr.push(element);
    });
    return arr;
}

let arr = highlight(10,14,14,122);
console.log(arr);

