var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let funcionario = parseInt(lines.shift());
let horasTrabalhadas = parseInt(lines.shift());
let valorPorHora = parseFloat(lines.shift());
let salario = horasTrabalhadas * valorPorHora;

console.log(`NUMBER = ${funcionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);