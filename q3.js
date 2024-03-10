
// caso não pegue por favor instalar o readline-sync com o comando a baixo
// npm install readline-sync


const readline = require('readline-sync');
const ano = parseFloat(readline.question('digite o ano do seu nascimento: '));

let total = 2024 - ano


console.log(`vocêm tem ${total} anos`);
