var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let letra = lines.shift();
let posicaodaletra = 0;
let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let lista = [];
lista = alfabeto.split('');
lista.push(alfabeto.length);

for(let i = 0; i < 26; i++){
    if(lista[i] == letra){
    posicaodaletra = i;
    }
}
    console.log(posicaodaletra + 1);