interface MyNode {
    appendTo(visitor: NodeVisitor): void
  }
  
  interface NodeChecker {
    appendText(text: InnerText): void;
    appendListItem(item: ListItem): void;
  }
  
  class InnerText implements MyNode {
    constructor(public content: string) { }
  
    appendTo(visitor: NodeChecker) {
      visitor.appendText(this);
    }
  }
  
  class ListElement implements MyNode {
    constructor(public content: string) { }
  
    appendTo(visitor: NodeChecker) {
      visitor.appendListItem(this);
    }
  }
  
  
  class HTMLV implements NodeChecker {
    output = "";
    appendText(text: InnerText) {
      this.output += text.content;
    }
  
    appendListItem(item: ListItem) {
      this.output += `<li>${item.content}</li>`
    }
  }
  
  let myNodes = [
    new InnerText('<div style="background:#992153;padding:15px;color:white">'),
    new InnerText('Hell'),
    new ListElement('kot'),
    new ListElement('pies'),
    new InnerText('</div>')
  
  ]
  
  let htmlV = new HTMLV()
  nodes.forEach(node=>node.appendTo(htmlVisitor))
  
  console.log(htmlV.output);
  let insideOf = document.getElementById("app");
  insideOf.innerHTML = `<div>${htmlVisitor.output}</div>`