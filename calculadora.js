const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

console.log(sumar(5,7));// debe escribir 12
console.log(restar(7,5));// debe escribir 2
console.log(multiplicar(7,5));// debe escribir 35
console.log(multiplicar(0,5));// debe escribir 0
console.log(dividir(10,5)); // debe escribir 2
console.log(dividir(10,0));// debe escribir "no se puede dividir"            