var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

let x = 0;
let y = 1;
let fibonacci = new Array(N);
fibonacci = [x, y];

let soma = 0;

for(let i = 2; i < N; i++){
    soma = x + y;
    x = y;
    y = soma;
    fibonacci[i] = soma;
}

console.log(fibonacci.join(" "));