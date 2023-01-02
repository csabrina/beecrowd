var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let line = lines.shift().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);

if (A % B == 0 || B % A == 0) {
    console.log("Sao Multiplos");
}else{
    console.log("Nao sao Multiplos");
};
 