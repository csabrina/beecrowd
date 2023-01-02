var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let lista= [];
for(let i= 0; i<= 100; i++){
    lista.push(i);
    lista[i]= parseInt(lines[i]);
}

let maior= -1;
let posicaomaior= -1;

for(let x= 0; x < 100; x++){
    let atual= lista[x];
    if(atual>maior){
        maior=atual;
        posicaomaior= x+1;
    }
}
console.log(maior);
console.log(posicaomaior);



