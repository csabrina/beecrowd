var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let alcool = 0;
let gasolina = 0;
let diesel = 0;
let tipo = 0;

while (tipo != 4) {
tipo = parseInt(lines.shift());
while (tipo < 1 || tipo > 4) {
tipo = parseInt(lines.shift());
};

switch (tipo) {
    case 1: alcool++;
        break;
    case 2: gasolina++;
        break;
    case 3: diesel++;
        break;
};
};

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcool);
console.log("Gasolina: " + gasolina);
console.log("Diesel: " + diesel);