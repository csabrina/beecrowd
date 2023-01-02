var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
let valores = [];

for(let i = 2; i <= N; i+= 2){
   valores.push(i);
   valores[i] = i * i;
}

for(let x = 2; x <= valores.length; x += 2){
    console.log (x + '^2 = ' + valores[x]);
}


