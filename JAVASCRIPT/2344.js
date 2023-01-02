var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
let letra;
let notas = [];

for(let i = 0; i <= 101; i++){
notas[i] = i;
}
for(let i = 0; i <= notas.length; i ++){
    if(N == i){
        
        if(N === 0){
            letra = 'E';
        }
        
        if(N >= 1 && N <= 35){
            letra = 'D';
        }
        
        if(N >= 36 && N <= 60){
            letra = 'C';
        }
        
        if(N >= 61 && N <= 85){
            letra = 'B';
        }
        
        if(N >= 86 && N <= 100){
            letra = 'A';
      }
        
    }
}
console.log(letra);
