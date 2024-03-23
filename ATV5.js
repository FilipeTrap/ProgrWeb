let prompt = require('prompt-sync')();

menuPrincipal();
function menuPrincipal(){

    console.clear();

    console.log(" isso ja conta como a primeira atividade ")
    console.log("██████╗░███████╗███╗░░░███╗  ██╗░░░██╗██╗███╗░░██╗██████╗░░█████╗░░██████╗");
    console.log("██╔══██╗██╔════╝████╗░████║  ██║░░░██║██║████╗░██║██╔══██╗██╔══██╗██╔════╝");
    console.log("██████╦╝█████╗░░██╔████╔██║  ╚██╗░██╔╝██║██╔██╗██║██║░░██║██║░░██║╚█████╗░");
    console.log("██╔══██╗██╔══╝░░██║╚██╔╝██║  ░╚████╔╝░██║██║╚████║██║░░██║██║░░██║░╚═══██╗");
    console.log("██████╦╝███████╗██║░╚═╝░██║  ░░╚██╔╝░░██║██║░╚███║██████╔╝╚█████╔╝██████╔╝");
    console.log("╚═════╝░╚══════╝╚═╝░░░░░╚═╝  ░░░╚═╝░░░╚═╝╚═╝░░╚══╝╚═════╝░░╚════╝░╚═════╝░");
    console.log(" ")
    console.log("ESCOLHA A ATIVIDADE A BAIXO")

    console.log("Digite 1 para Função que define se um numero é impar ou par")
    console.log("Digite 2 para calcular a média aritmética de um array")
    console.log("Digite 3 retornar a string com todas as letras em caixa alta")
    console.log("Digite 4 pra saber se um numero é primo")
    console.log("Digite 5 parar inverter a ordem dos elementos em um array")
    console.log("Digite 6 pra calular porcentagem")
    console.log("Digite 7 verificar se uma palavra é um palíndromo")
    console.log("Digite 8 para conversão em binario")
    console.log("Digite 9 para calcular o numero fatorial")

    let escolha = Number(prompt("Informe a opção desejada: "));

    if(escolha == 1){
        imparOUpar();
    }
    else if(escolha == 2){
        calculoArray();
    }
    else if (escolha == 3){
        converterCaixaAlta();
    }
    else if (escolha == 4){
        verificarPrimo();
    }
    else if (escolha == 5){
        inverterArray();
    }
    else if (escolha == 6){
        calcularValorAcrescido();
    }
    else if (escolha == 7){
        palindromo();
    }
    else if (escolha == 8){
        decimalParaBinario();
    }
    else if(escolha == 9){
        calcularFatorial();
    }

}

function imparOUpar(){
    let numero = Number(prompt("Digite um numero Inteiro: "));
    let resultado = function(numero) {
        if (numero % 2 === 0) {
            return true;
        } else {
            return false; 
        }
    };
    
    
    if (resultado) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }
    
}

function calculoArray(){
    let array = [1,2,3,4,5,6,7,8,9,10];

    let soma = 0;
    console.log(array)
 
    for(let i = 0; i < array.length;i++){
        soma = soma + array[i];
    }
        soma = soma / array.length;
        console.log(soma);    
}    

function converterCaixaAlta() {
    let conversao = prompt("Digite a frase: ");
    let resultado = conversao.toUpperCase();
    console.log(resultado);
}

function verificarPrimo() {
    let numero = Number(prompt("Digite um numero Inteiro: "));
    
    if (numero <= 1) {
        console.log("O número não é primo.");
        return;
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            console.log("O número não é primo.");
            return;
        }
    }
    
    console.log("O número é primo.");
}

function inverterArray(){
    let array = [1,2,3,4,5,6,7,8,9,10];

    console.log(array);
 
    for(let i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}

function calcularValorAcrescido() {
    let valor = parseFloat(prompt("Digite o valor:"));
    let porcentagem = parseFloat(prompt("Digite a porcentagem:"));

    let total = valor * (1 + (porcentagem / 100));

    console.log(`o valor de ${valor} + ${porcentagem}% é igual a ${total}`);
}

function palindromo() {
    let texto = prompt("Digite a palavra: ");
    let palindromo = true;

    for (let i = 0; i < texto.length / 2; i++) {
        if (texto[i] !== texto[texto.length - 1 - i]) {
            palindromo = false;
            break;
        }
    }

    if (palindromo) {
        console.log("É um palíndromo");
    } else {
        console.log("Não é um palíndromo");
    }
}

function decimalParaBinario() {
    let numero = Number(prompt("Digite um número inteiro: "));

    let converterParaBinario = function(num) {
        if (num === 0) {
            return '0';
        }

        let binario = '';

        while (num > 0) {
            binario = (num % 2) + binario;
            num = Math.floor(num / 2);
        }

        return binario;
    };

    let resultado = converterParaBinario(numero);
    console.log(`O número ${numero} em binário é: ` + resultado);
}

function calcularFatorial() {
    let numero = Number(prompt("Digite um número inteiro para calcular o fatorial: "));
    let resultadoFatorial = function(numero) {
        if (numero === 0 || numero === 1) {
            return 1; // O fatorial de 0 e 1 é 1
        } else {
            let resultado = 1;
            for (let i = 2; i <= numero; i++) {
                resultado *= i;
            }
            return resultado;
        }
    };

    let fatorial = resultadoFatorial(numero);
    console.log("O fatorial de " + numero + " é: " + fatorial);
}
