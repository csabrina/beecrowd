var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distanciaTotalPercorrida = parseInt(lines.shift());
let totalDeCombustivelGasto = parseFloat(lines.shift());
let consumoMedio = distanciaTotalPercorrida/totalDeCombustivelGasto;

console.log(`${consumoMedio.toFixed(3)} km/l`);