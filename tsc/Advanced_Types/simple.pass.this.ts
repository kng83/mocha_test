//Te klasy maja wstrzykiwany serwis ktory odpowiada za wywolanie metod na obiekcie
//przyklad ten mozna wrzucic do stackblitz


class InnerText {
    constructor(public content: string) { }
  
    addTo(tService: TextService<this>) {
      tService.addText(this);
    }
  }
  
  class OtherText {
    constructor(public content: string) { }
  
    addTo(tService: TextService<OtherText>) {
      tService.addItem(this);
    }
  }
  
  
  class TextService<T extends { content: any }>{
    public output = ''
    public block = ''
  
    addText(text: T) {
      this.output += text.content;
    }
    addItem(item: T) {
      this.output += item.content;
    }
  }
  
  let elements = [
    new InnerText('Hell'),
    new OtherText('<p>kot</p>'),
    new OtherText('<p>pies</p>'),
    new OtherText('<p>'),
    new InnerText('</p>')
  ]
  
  let textService = new TextService();
  elements.forEach(element => element.addTo(textService))
  
  let inDiv = document.getElementById("app");
  inDiv.innerHTML = `
  <div style="background:#2255;padding:15px;color:gray">
  ${textService.output}
  </div>`