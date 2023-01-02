var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let line = lines.shift().split(" ");
let hInicio = parseInt(line[0]);
let mInicio = parseInt(line[1]);
let hFim = parseInt(line[2]);
let mFim = parseInt(line[3]);

let totalH = hFim - hInicio;
let totalM = mFim - mInicio;

if (totalM < 0) {
totalM += 60;
totalH--;
}

if (totalH < 0) {
totalH += 24;
}

if (hInicio == hFim && mInicio == mFim){
console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
} else {
console.log('O JOGO DUROU '+ totalH + ' HORA(S) E ' + totalM + ' MINUTO(S)'); };