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
  
    percursoPréOrdem(resultado) {
      // 1. Imprimir valor do nó
      //console.log(this.valor);
      resultado.push(this.valor);
  
      // 2. Visitar subárvore à esquerda (caso exista)
      if (this.esquerda != null) {
        this.esquerda.percursoPréOrdem(resultado); // Recursividade
      }
  
      // 3. Visitar subárvore à direita (caso exista)
      if (this.direita != null) {
        this.direita.percursoPréOrdem(resultado); // Recursividade
      }
    }
  
    percursoEmOrdem(resultado) {
      // 1. Visitar subárvore à esquerda (caso exista)
      if (this.esquerda != null) {
        this.esquerda.percursoEmOrdem(resultado); // Recursividade
      }
  
      // 2. Imprimir valor do nó
      //console.log(this.valor);
      resultado.push(this.valor);
  
      // 3. Visitar subárvore à direita (caso exista)
      if (this.direita != null) {
        this.direita.percursoEmOrdem(resultado); // Recursividade
      }
    }
  
    percursoPósOrdem(resultado) {
      // 1. Visitar subárvore à esquerda (caso exista)
      if (this.esquerda != null) {
        this.esquerda.percursoPósOrdem(resultado); // Recursividade
      }
  
      // 2. Visitar subárvore à direita (caso exista)
      if (this.direita != null) {
        this.direita.percursoPósOrdem(resultado); // Recursividade
      }
  
      // 3. Imprimir valor do nó
      //console.log(this.valor);
      resultado.push(this.valor);
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
  
    percursoPréOrdem() {
      if (this.raiz != null) {
        // Árvore NÃO vazia
        let resultado = [];
        this.raiz.percursoPréOrdem(resultado);
        return resultado;
      } else {
        // Árvore vazia
        // Fazer nada
        return [];
      }
    }
  
    percursoEmOrdem() {
      if (this.raiz != null) {
        // Árvore NÃO vazia
        let resultado = [];
        this.raiz.percursoEmOrdem(resultado);
        return resultado;
      } else {
        // Árvore vazia
        // Fazer nada
        return [];
      }
    }
  
    percursoPósOrdem() {
      if (this.raiz != null) {
        // Árvore NÃO vazia
        let resultado = [];
        this.raiz.percursoPósOrdem(resultado);
        return resultado;
      } else {
        // Árvore vazia
        // Fazer nada
        return [];
      }
    }
  
  }
    
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

  
  let x= parseInt(lines.shift());
  
  for(let i = 1; i <= x; i++){
    let arvore = new ÁrvoreBinária();
    let testes = parseInt(lines.shift());
    let n = lines.shift().split(' ');
    for(let j = 0; j < testes; j++){
      let numero = parseInt(n.shift());
      arvore.inserir(numero);
    }
    console.log(`Case ${i}:`);
    console.log("Pre.: " + arvore.percursoPréOrdem().join(' '));
    console.log("In..: " + arvore.percursoEmOrdem().join(' '));
    console.log("Post: " + arvore.percursoPósOrdem().join(' '));
    console.log('');
  }