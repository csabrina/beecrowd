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

let quant = lines.length;
  
while(quant !== 0){
    let x = lines.shift();
    x = x.split('');
    let pilha = new Pilha();
    let y = true;
    let quanta = 0;
    let quantb = 0;
    let quant1 = 0;
    let quant2 = 0;
    for(let i of x){
        if(i === '('){
            pilha.push(i);
            quant1++;
            quanta++;
        }
        if(i === ')'){
          quant2++;
            if(pilha.top() === '('){
                pilha.pop();
                 }
            quantb ++;
        }
    } 
   if(pilha.size() !== 0 || quanta != quantb){
       y = false;
   }
   
    if(quant1 === 0 && quant2 === 0){

    }
else{
if(y){
    console.log("correct");
}

else {
    console.log("incorrect");
}
}
quant--;
}