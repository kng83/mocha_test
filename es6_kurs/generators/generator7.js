/*Practical use of generators: Robienie drzewa czegos
* W tym przypadku to drzewo komentarzy aby iterowac po nim
* array helper as map don't works with generators
* musimy dodac iterator do klasy*/

class Comment{
    constructor(content,children){
        this.content = content;
        this.children = children;
    }
    /* troche inna skladnia uzywamy for loop aby
    * przejsc przez kazda iteracje
    */

    *[Symbol.iterator](){
        yield this.content;
        for(let child of this.children){
            yield* child;
        }

    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('meh', [])

];

//root node which has 3 children
const tree = new Comment('Great post!',children);
//console.log(tree);
/*Pobieramy wartosci z calego naszego drzewa i robimy agregacje
* */
const values =[];
for(let value of tree){
    values.push(value);
}
console.log(values);