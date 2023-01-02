var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());
let Y = parseInt(lines.shift());

let soma = 0;

if (X > Y) {
    for (let i = Y; i <= X; i++) {
	    if (i % 13 != 0)
            soma += i;
};
} else {
    for (let i = X; i <= Y; i++) {
		if (i % 13 != 0)
            soma += i;
};
};

console.log(soma);
    