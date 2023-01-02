var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14159;
let raio = parseFloat(lines.shift());
let volume = (4/3.0) * PI * Math.pow(raio, 3.0);

console.log(`VOLUME = ${volume.toFixed(3)}`);