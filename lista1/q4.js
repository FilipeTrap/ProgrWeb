
// caso não pegue por favor instalar o readline-sync com o comando a baixo
// npm install readline-sync 
const readline = require('readline-sync');


const lado1 = parseFloat(readline.question("Digite o comprimento do lado 1: "));
const lado2 = parseFloat(readline.question("Digite o comprimento do lado 2: "));
const lado3 = parseFloat(readline.question("Digite o comprimento do lado 3: "));


if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
   
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("É um triângulo Equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("É um triângulo Isósceles.");
    } else {
        console.log("É um triângulo Escaleno.");
    }
} else {
    console.log("Os comprimentos dos lados não formam um triângulo válido.");
}
