var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

class Pilha {

    constructor() {
      this.list = new Array();
    }
  
    push(e) {
      this.list.push(e);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.list.pop()
    }
  
    size() {
      return this.list.length;
    }
  
    isEmpty() {
      return this.list.length === 0;
    }
  
    top() {
      if (this.isEmpty()) {
        return null;
      }
      let tam = this.list.length -1;
      return this.list[tam];
    }
  
  }

  let n = parseInt(lines.shift());

for(let i = 0; i < n; i++){
    let x = lines.shift();
    let pilha = new Pilha();
    let cont = 0;
    for(let y of x){
        if(y === '<'){
            pilha.push(y);
        }
        if(y === '>'){
            if(pilha.top() == '<'){
                cont++;
                pilha.pop();
            }
        }
    }
    console.log(cont);
} 
