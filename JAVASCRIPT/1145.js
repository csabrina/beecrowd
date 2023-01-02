var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let X = Number(lines.shift());
let Y = Number(lines.shift());
let linha = "";

for (let i = 1; i <= Y; i += X) {
linha = i + " ";

for (let j = 1; j < X; j++) {
if (i + j <= Y) {
linha += (i + j) + " ";
};
};
console.log(linha.trim());
};

