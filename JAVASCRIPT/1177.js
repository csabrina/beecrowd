var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let T = parseInt(lines.shift());
let N = [];
let posicaoDoVetor = 0;

while(posicaoDoVetor < 999){
    for(let i = 0; i < T; i++){
        if (posicaoDoVetor > 999) break;
        N.push(posicaoDoVetor);
        N[posicaoDoVetor]= i;
        posicaoDoVetor++;
    }
}
for(let X = 0; X < N.length; X++){
    console.log("N[" + X + "] = " + N[X]);
}
