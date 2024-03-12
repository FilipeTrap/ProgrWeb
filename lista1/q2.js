
// caso não pegue por favor instalar o readline-sync com o comando a baixo
// npm install readline-sync 

const readline = require('readline-sync');
const peso = parseFloat(readline.question('Digite o seu peso: '));
const altura = parseFloat(readline.question('Digite a sua altura: '));

let total = peso / (altura*altura)
total = total.toFixed(2);

if(total < 18.5){
    console.log(`A IMC de é: ${total} você está Abaixo do peso`);
}
else if(total >= 18.5 && total <= 24.9){
    console.log(`A IMC de é: ${total} você está com Peso normal`);
}

else if(total >= 25 && total <= 29.9){
    console.log(`A IMC de é: ${total} você está com Excesso de peso`);
}

else if(total >= 30 && total <= 34.9){
    console.log(`A IMC de é: ${total} você está com Obesidade grau I`);
}
else if(total >= 35 && total <= 39.9){
    console.log(`A IMC de é: ${total} você está com Obesidade grau II`);
}
else if(total > 39.9){
    console.log(`A IMC de é: ${total} você está com Obesidade grau III`);
}

