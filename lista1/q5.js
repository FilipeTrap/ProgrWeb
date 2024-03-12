
// caso não pegue por favor instalar o readline-sync com o comando a baixo
// npm install readline-sync
const readline = require('readline-sync');

const valorSaque = parseInt(readline.question("Digite o valor que deseja sacar: "));

if (valorSaque % 10 === 0) {
    console.log("Saque realizado com sucesso.");
} else {
    console.log("Valor inválido. Digite um valor múltiplo de 10.");
}
 
