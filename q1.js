// caso não pegue por favor instalar o readline-sync com o comando a baixo
// npm install readline-sync

const readline = require('readline-sync');
const num1 = parseFloat(readline.question('Digite o primeiro número: '));
const num2 = parseFloat(readline.question('Digite o segundo número: '));

// Calcula a soma
const soma = num1 + num2;

// Exibe o resultado
console.log(`A soma de ${num1} e ${num2} é: ${soma}`);
