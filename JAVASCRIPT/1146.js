var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift());
let linha = "";

while(x !== 0){
for (let i = 1; i <= x; i++) {
linha += i + " ";
};

console.log(linha.trim());
linha = "";
x = Number(lines.shift());
};
