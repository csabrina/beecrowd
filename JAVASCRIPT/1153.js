var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
let fatorial = 1;
    for (let i = 1; i <= N; i++) {
    fatorial *= i;
};

console.log(fatorial);
