let prompt = require('prompt-sync')();

mainMenu();
function mainMenu(){   


    console.log("   ░█████╗░████████╗██╗░░░██╗███████╗");
    console.log("   ██╔══██╗╚══██╔══╝██║░░░██║╚════██║");
    console.log("   ███████║░░░██║░░░╚██╗░██╔╝░░░░██╔╝");
    console.log("   ██╔══██║░░░██║░░░░╚████╔╝░░░░██╔╝░");
    console.log("   ██║░░██║░░░██║░░░░░╚██╔╝░░░░██╔╝░░");
    console.log("   ╚═╝░░╚═╝░░░╚═╝░░░░░░╚═╝░░░░░╚═╝░░░");
    console.log(" ");
console.log("Digite 1 - Cálculo de potência de um número.");
console.log("Digite 2 - Contagem de números pares e ímpares.");
console.log("Digite 3 - Geração da série de Fibonacci até o n-ésimo termo.");
console.log("Digite 4 - Cálculo do fatorial de um número inteiro.");
console.log("Digite 5 - Identificação do menor valor, maior valor e soma de um conjunto de números.");
console.log("Digite 6 - Identificação do menor valor, maior valor e soma de um conjunto de números (entre 0 e 1000).");
console.log("Digite 7 - Cálculo do fatorial de números inteiros positivos menores que 16.");
console.log("Digite 8 - Verificação de número primo.");
console.log("Digite 9 - Verificação de número primo e identificação dos divisores, se não for primo.");
console.log("Digite 10 - Listagem de números primos até N e número de divisões realizadas.");
console.log("Digite 11 - Cálculo da média aritmética de N notas.");

let escolha = Number(prompt("Digite a opção desejada: "));

if(escolha == 1){
    loop01();
}
else if(escolha == 2){
    loop02();
}
else if (escolha == 3){
    loop03();
}
else if (escolha == 4){
    loop04();
}
else if (escolha == 5){
    loop05();
}
else if (escolha == 6){
    loop06();
}
else if (escolha == 7){
    loop07();
}
else if (escolha == 8){
    loop08();
}
else if (escolha == 9){
    loop09();
}
else if (escolha == 10){
    loop10();
}
else if (escolha == 11){
    loop11();
}

else{
    console.log("DIGITE UMA OPÇÃO VALIDA")
    mainMenu();
}
}
function loop01(){
/*
Faça um programa que peça dois números, base e expoente, 
calcule e mostre o primeiro número elevado ao segundo número. 
Não utilize a função de potência da linguagem.
*/
let base = Number(prompt("Digite a base: "));
let expoente = Number(prompt("Digite o expoente: "));
let resultado = 1;

for (let i = 1; i <= expoente; i++) {
    resultado *= base;
}

console.log(`${base} elevado a ${expoente} é igual a ${resultado}`);

}
function loop02(){
/*
Faça um programa que peça 10 números inteiros, calcule e mostre a 
quantidade de números pares e a quantidade de números ímpares.
*/
    let par = 0;
    let impar = 0;
    for(let i = 1; i <= 10; i++) {
    let numero = Number(prompt(`informe o ${i}º numero: `));
        if (numero % 2 === 0) {
            par++;
        }
        else {
            impar++;
        }
     }
     console.log(`${par} numeros pares e ${impar} numeros impares`)
}
function loop03(){
/**
 * 
A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34,55,... 
Faça um programa capaz de gerar a série até o n−ésimo termo. 
Sequência de Fibonacci com laços A série de Fibonacci é formada 
pela sequência 0,1,1,2,3,5,8,13,21,34,55,... 
Faça um programa que gere a série até que o valor seja maior que 500.
 */
let termo1 = 0, termo2 = 1;

console.log("Sequência de Fibonacci até o valor ser maior que 500:");

do {
    console.log(termo1);
    let proximoTermo = termo1 + termo2;
    termo1 = termo2;
    termo2 = proximoTermo;
} while (termo1 <= 900);


}
function loop04(){
    /*
Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. 
Ex.: 5!=5.4.3.2.1=120. Calcular fatorial com laços 
*/

    let numero = Number(prompt("Digite um número inteiro: "));


        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        console.log(`O fatorial de ${numero} é ${fatorial}`);
    

}
function loop05(){
/*
Faça um programa que, dado um conjunto de N números, 
determine o menor valor, o maior valor e a soma dos valores.
*/

let quant = 0;
let maior = Number.MIN_VALUE;
let menor = Number.MAX_VALUE;
let soma = 0;

while (true) {
    quant++;
    let numero = Number(prompt(`Digite o ${quant}º numero ou 0 para parar o loop: `));
    soma = soma + numero;

    if (numero == 0) {
        break; 
    }
    else if(numero > maior){
        maior = numero;
    }
    else if(numero < menor){
        menor = numero;
    }     
}

console.log(`o menor valor é ${menor}, o maior valor é ${maior} e a soma dos valores é ${soma}`); 

}
function loop06(){
    /*
  Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.
    */
    let quant = 0;
    let maior = Number.MIN_VALUE;
    let menor = Number.MAX_VALUE;
    let soma = 0;
    
    while (true) {
        quant++;
        let numero = Number(prompt(`Digite o ${quant}º numero ou 0 para parar o loop: `));
        soma = soma + numero;
    
        if (numero < 1 || numero > 1000) {
            break; 
        }
        else if(numero > maior){
            maior = numero;
        }
        else if(numero < menor){
            menor = numero;
        }     
    }
    
    console.log(`o menor valor é ${menor}, o maior valor é ${maior} e a soma dos valores é ${soma}`); 
    
}
function loop07(){
    /*
Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. 
Ex.: 5!=5.4.3.2.1=120. Calcular fatorial com laços 

Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial 
várias vezes e limitando o fatorial a números inteiros positivos e menores que 16.
*/

    let numero = Number(prompt("Digite um número inteiro até 16 ou 0 pra sair do programa: "));

if(numero > 1 && numero <= 16){
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é ${fatorial}`);
}
else if(numero == 0){
    console.log(`SAINDO DO PROGRAMA`);
    process.exit();
}
else{
    console.log(`valor invalido tente novamente`);
    loop07();
}

loop07();
       
    

}
function loop08(){
    /*

Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
 Um número primo é aquele que é divisível somente por ele mesmo e por 1. 
 Números primos com laços
*/

    let numero = Number(prompt("Digite um número inteiro: "));
   if (numero <= 1) {
       console.log(`${numero} não é um número primo.`);
       return;
   }

   for (let i = 2; i <= Math.sqrt(numero); i++) {
       if (numero % i === 0) {
           console.log(`${numero} não é um número primo.`);
           return;
       }
   }

   console.log(`${numero} é um número primo.`);
} 
function loop09(){
/*
Altere o programa de cálculo dos números primos, informando, 
caso o número não seja primo, por quais número ele é divisível.
*/

let numero = Number(prompt("Digite um número inteiro: "));


if (numero <= 1) {
    console.log(`${numero} não é um número primo.`);
    return;
}

let divisores = []; // Array para armazenar os divisores encontrados

// Percorre os possíveis divisores do número até a raiz quadrada do número
for (let i = 2; i <= Math.sqrt(numero); i++) {
    // Se o número for divisível por algum número diferente de 1 e ele mesmo, adiciona o divisor ao array
    if (numero % i === 0) {
        divisores.push(i);
    }
}


if (divisores.length === 0) {
    console.log(`${numero} é um número primo.`);
} else {
    console.log(`${numero} não é um número primo.`);
    console.log(`É divisível por: ${divisores.join(', ')}`);
}
}
function loop10(){
    /*Faça um programa que mostre todos os primos entre 1 e N sendo N 
    um número inteiro fornecido pelo usuário. O programa deverá mostrar 
    também o número de divisões que ele executou para encontrar os números primos. 
    Serão avaliados o funcionamento, o estilo e o número de testes (divisões) executados.
     */
    let limiteSuperior = Number(prompt("Digite um número inteiro: "));

     let primosEncontrados = []; 
     let totalDivisoes = 0; 
 
     
     for (let numero = 2; numero <= limiteSuperior; numero++) {
         let divisores = 0; 
 
         
         for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
             
             if (numero % divisor === 0) {
                 divisores++;
             }
         }
 
         
         if (divisores === 0) {
             primosEncontrados.push(numero);
         }
 
         
         totalDivisoes += Math.floor(Math.sqrt(numero));
     }
 

     console.log(`Números primos entre 1 e ${limiteSuperior}: ${primosEncontrados.join(', ')}`);
     console.log(`Total de divisões realizadas: ${(limiteSuperior - 1) * Math.floor(Math.sqrt(limiteSuperior))}`);
 
}
function loop11(){
/*
Faça um programa que calcule o mostre a média aritmética de N notas.
*/
let quant = 0;
let soma = 0;
let total = 0;

while (true) {
    quant++;
    let numero = Number(prompt(`Digite a ${quant}º nota ou 0 para parar o loop: `));
    soma = soma + numero;

    if (numero == 0) {
        quant--;
        break; 
    }
  
}
total = soma / quant;
console.log(`A média das ${quant} notas digitadas é ${total}`)

}


    
