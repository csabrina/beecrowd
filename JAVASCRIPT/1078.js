var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let lista = [];
let valores = lines.shift();

for(let i = 0; i <= 10; i++){
    lista.push(i);
    lista[i] = valores;
}

for(let x = 1; x < lista.length; x++){
    console.log(x + ' x ' + lista[x] + ' = ' + lista[x] * x);
}

