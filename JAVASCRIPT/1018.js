var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let notas = parseInt(lines.shift());

let qnt = notas;

/*Math.floor é uma função piso, ou seja,
retorna o maior inteiro menor ou igual a valor.*/
let notasDe100 = Math.floor(qnt/100); 
qnt -= notasDe100*100;

let notasDe50 = Math.floor(qnt/50);
qnt -= notasDe50*50;

let notasDe20 = Math.floor(qnt/20);
qnt -= notasDe20*20;

let notasDe10 = Math.floor(qnt/10);
qnt -= notasDe10*10;

let notasDe5 = Math.floor(qnt/5);
qnt -= notasDe5*5;

let notasDe2 = Math.floor(qnt/2);
qnt -= notasDe2*2;

let notasDe1 = qnt;

console.log(notas);
console.log(`${notasDe100} nota(s) de R$ 100,00`);
console.log(`${notasDe50} nota(s) de R$ 50,00`);
console.log(`${notasDe20} nota(s) de R$ 20,00`);
console.log(`${notasDe10} nota(s) de R$ 10,00`);
console.log(`${notasDe5} nota(s) de R$ 5,00`);
console.log(`${notasDe2} nota(s) de R$ 2,00`);
console.log(`${notasDe1} nota(s) de R$ 1,00`);