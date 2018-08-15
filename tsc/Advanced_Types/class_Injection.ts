
// Klasy sa przekazywane do innych klas przy uzyciu this
// Kod mozna sprawdzic na stackblitz
interface Node1 {
    appendTo(visitor: NodeVisitor): void
  }
  
  interface NodeVisitor {
    appendText(text: Text1): void;
    appendBold(text: BoldText): void;
    appendUnorderedList(list: UnorderedList): void;
    appendListItem(item: ListItem): void;
  }
  
  class Text1 implements Node1 {
    constructor(public content: string) { }
  
    appendTo(visitor: NodeVisitor) {
  
    }
  }
  
  class BoldText implements Node1 {
    constructor(public content: string) { }
  
    appendTo(visitor: NodeVisitor) {
      visitor.appendBold(this);
    }
  }
  
  class UnorderedList implements Node1 {
    constructor(public items: ListItem[]) { }
  
    appendTo(visitor: NodeVisitor) {
      visitor.appendUnorderedList(this);
    }
  }
  
  class ListItem implements Node1 {
    constructor(public content: string) { }
  
    appendTo(visitor: NodeVisitor) {
      visitor.appendListItem(this);
    }
  }
  
  
  class HTMLVisitor implements NodeVisitor {
    output = "";
    appendText(text: Text1) {
      this.output += text.content;
    }
  
    appendBold(text: BoldText) {
      this.output += `<b>${text.content}</b>`
    }
  
    appendUnorderedList(list: UnorderedList) {
      this.output += `<ul>`
      for (let item of list.items) {
        item.appendTo(this);
      }
      this.output += `</ul>`
    }
  
    appendListItem(item: ListItem) {
      this.output += `<li>${item.content}</li>`
    }
  }
  
  let nodes =[
    new Text1('Hell'),
    new BoldText('To jest grube'),
    new UnorderedList([
      new ListItem('vlis'),
      new ListItem('ghag'),
      new ListItem('bobo')
    ])
  ]
  
  let htmlVisitor = new HTMLVisitor()
  for(let n of nodes){
   n.appendTo(htmlVisitor);
  }
  
  console.log(htmlVisitor.output);
  let inside = document.getElementById("app");
  inside.innerHTML = `<div>${htmlVisitor.output}</div>`