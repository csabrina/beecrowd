class Nó {

  constructor(valor) {
    this.valor = valor;
    this.esquerda = null;
    this.direita = null;
  }

  inserir(novoNó) {
 
    if (this.valor > novoNó.valor) {
      // Valor sendo inserido é MENOR que o valor do nó em mãos.
      // Tenho que adicionar na subárvore da ESQUERDA.
      if(this.esquerda == null) {
        // Não tenho subárvore à esquerda.
        this.esquerda = novoNó;
      } else {
        // Existe SIM subárvore à esquerda.
        this.esquerda.inserir(novoNó); // Recursividade.
      }

    } else if (this.valor < novoNó.valor) {
      // Valor sendo inseiro é MAIOR que o valor do nó em mãos.
      // Tenho que adicionar na subárvore da DIREITA.
      if (this.direita == null) {
        // Não existe subárvore à direita.
        this.direita = novoNó;
      } else {
        // Existe SIM subárvore à direita.
        this.direita.inserir(novoNó); // Recursividade.
      }
    } else {
      // Valor sendo inserido já existe na minha árvore.
      // Fazer nada.
    }
  }

  busca(valorBuscado) {

    if(this.valor == valorBuscado) { // Primeiro passo.
      return true;
    } else {
      if (this.valor > valorBuscado) { // Segundo passo
        // Valor sendo buscado é menor que o valor do nó:
        // Visitar subárvore à esquerda

        // Terceiro passo
        if(this.esquerda != null) {
          // Subárvore à esquerda existe
          return this.esquerda.busca(valorBuscado); // Recursividade
        } else {
          // Subárvore à esquerda NÃO existe
          return false;
        }
      } else { // Segundo passo
        // this.valor < valorBuscado
        // Valor sendo buscado é maior que o valor do nó:
        // Visitar subárvore à direita
        
        // Terceiro passo
        if (this.direita != null) {
          // Subárvore à direita existe
          return this.direita.busca(valorBuscado); // Recursividade
        } else {
          // Subárvore à direita NÃO existe
          return false;
        }

      }

    }

  }
}

class ÁrvoreBinária {

  constructor() {
    this.raiz = null;
  }

  inserir(valor) {

    let novoNó = new Nó(valor);

    if (this.raiz == null) {
      // Árvore vazia
      this.raiz = novoNó;
    } else {
      // Árvore NÃO vazia
      this.raiz.inserir(novoNó);
    }

  }

  busca(valorBuscado) {

    if (this.raiz == null) {
      return false;
    } else {
      return this.raiz.busca(valorBuscado);
    }

  }
}

class Fila {

constructor() {
  this.lista = new Array();
}

enqueue(e) {
  // Adiciona um elemento na fila
  this.lista.push(e);
}

dequeue() {
  // Retorna o elemento do começo da fila, removendo ele.
  if (this.isEmpty()) {
    return null;
  }
  return this.lista.shift();
}

size() {
  return this.lista.length;
}

isEmpty() {
  return this.lista.length == 0;
}

front() {
  if (this.isEmpty()) {
    return null;
  }
  return this.lista[0];
}
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines.shift());

for(let i = 1; i <= n; i++){
let arvore = new ÁrvoreBinária();
let testes = parseInt(lines.shift());
let espaço = lines.shift().split(' ');
for(let i = 0; i < testes; i++){
  let numero = parseInt(espaço.shift());
  arvore.inserir(numero);
}
let fila = new Fila();
fila.enqueue(arvore.raiz);
let lista = [];
if(arvore.raiz != null){
while(!fila.isEmpty()){
  let no = new Nó()
  no = fila.dequeue();

  lista.push(no.valor);

  if(no.esquerda != null){
    fila.enqueue(no.esquerda);
  }
  if(no.direita != null){
    fila.enqueue(no.direita);
  }
}
}

console.log(`Case ${i}:`)
console.log(lista.join(" "));
console.log("");
}