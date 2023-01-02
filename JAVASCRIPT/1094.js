var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
let quant = [];
let total = 0;
let rato = 0;
let sapo = 0;
let coelho = 0;

    for(let i = 0; i < N; i++) {
    let Y = lines.shift().split(' ');

    let X = parseInt(Y.shift());
    let tipo = Y.shift().trim();

    quant[i] = X;
    total += quant[i];
    
    if (tipo == 'R'){
        rato += quant[i];
        quant.push(rato.length);

    } else if(tipo == 'S'){
        sapo += quant[i];
        quant.push(sapo.length);

    } else if(tipo == 'C'){
        coelho += quant[i];
        quant.push(coelho.length);
    }
}
let porcentualcoelho = ((coelho/total)*100).toFixed(2);
let porcentualrato = ((rato/total)*100).toFixed(2);
let porcentualsapo = ((sapo/total)*100).toFixed(2);

console.log("Total: " + total + " cobaias");
console.log("Total de coelhos: " + coelho);
console.log("Total de ratos: " + rato);
console.log("Total de sapos: " + sapo);
console.log("Percentual de coelhos: " + porcentualcoelho + " %");
console.log("Percentual de ratos: " + porcentualrato + " %");
console.log("Percentual de sapos: " + porcentualsapo + " %");