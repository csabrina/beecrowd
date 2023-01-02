var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseFloat(lines.shift());
let l2 = lines.shift();
    let Y = l2.split(" ");
    let menor = 998;
    let posicao = 0;
    
    for(let i = 0; i < N; i++) {
        let x = parseFloat(Y.shift());
        if(x < menor) {
            
            menor = x;
            posicao = i;
     }
             
     }
     console.log("Menor valor: " + menor);
     console.log("Posicao: " + posicao);