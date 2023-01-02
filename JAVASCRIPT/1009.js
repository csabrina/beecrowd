var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
let nomeDoVendedor = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let vendasEfetuadas = parseFloat(lines.shift());
let total = (((vendasEfetuadas * 15) / 100) + salarioFixo);

console.log(`TOTAL = R$ ${total.toFixed(2)}`);