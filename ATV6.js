let prompt = require('prompt-sync')();

mainMenu();
function mainMenu(){    

    console.log(" ░█████╗░████████╗██╗░░░██╗░█████╗░")
    console.log(" ██╔══██╗╚══██╔══╝██║░░░██║██╔═══╝░")
    console.log(" ███████║░░░██║░░░╚██╗░██╔╝██████╗░")
    console.log(" ██╔══██║░░░██║░░░░╚████╔╝░██╔══██╗")
    console.log(" ██║░░██║░░░██║░░░░░╚██╔╝░░╚█████╔╝")
    console.log(" ╚═╝░░╚═╝░░░╚═╝░░░░░░╚═╝░░░░╚════╝░")

    console.log("");

    console.log("Digite 1 - Solicitação de nota entre zero e dez.");
    console.log("Digite 2 - Verificação de nome de usuário e senha.");
    console.log("Digite 3 - Validação de informações: nome, idade, salário, sexo e estado civil.");
    console.log("Digite 4 - Cálculo do tempo para país A ultrapassar país B em população.");
    console.log("Digite 5 - Entrada das populações e taxas de crescimento dos países.");
    console.log("Digite 6 - Impressão dos números de 1 a 20.");
    console.log("Digite 7 - Identificação do maior número entre 5 informados.");
    console.log("Digite 8 - Cálculo da soma e média de 5 números.");
    console.log("Digite 9 - Impressão de números ímpares entre 1 e 50.");
    console.log("Digite 10 - Geração de números inteiros em um intervalo definido.");
    console.log("Digite 11 - Exibição dos números gerados e soma final.");
    console.log("Digite 12 - Tabuada de um número escolhido pelo usuário.");
    

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
    else if (escolha == 12){
        loop12();
    }

    else{
        console.log("DIGITE UMA OPÇÃO VALIDA")
        mainMenu();
    }

}


function loop01(){
    let numero = Number(prompt("Digite uma nota de 0 a 10: "));
    while (true) {
        numero = parseInt(prompt('Digite um número de 0 a 10: '));

        if (numero >= 0 && numero <= 10) {
            break; 
        } else {
            console.log('Número fora da faixa. Tente novamente.'); 
        }
    }
    
    console.log('Número válido: ' + numero); 

}
function loop02(){
  
    while (true) {
        let nome = prompt("Digite o nome do usuário: ");
        let senha = prompt("Digite a senha: ");
    
        if (nome !== senha) {
            console.log('Nome e senha válidos');
            break;
        } else {
            console.log('Usuário e senha não podem ser iguais.');
        }
    }

}
function loop03(){
    //vou fazer esse sem while ou for 
        let nome = prompt("Digite o nome do usuário: ");
        if (nome.length <= 3) {
            console.log('nome Invalido');
            loop03();
        }
        let idade = prompt("Digite a idade: ");
        if(idade < 1 || idade > 149){
            console.log('idade Invalida');
            loop03();
        }
        let salario = prompt("Digite o seu salario: ");
        if(salario < 1 ){
            console.log('valor Invalido');
            loop03();
        }
        let sexo = prompt("Digite o sexo: ");
        if(sexo != "m" && sexo != "f"){
            console.log('Dado invalido');
            loop03();
        }


        let estadoCivil = prompt("Estado Civil: 's', 'c', 'v', 'd'");
        if(estadoCivil !== "s" && estadoCivil !== "c" && estadoCivil !== "v" && estadoCivil !== "d"){
            console.log('Dado invalido');
            loop03();
        }
     
            console.log('Todos os dados foram validados');

}
function loop04(){
    let paisA = 80000;
    let paisB = 200000;
    let anos = 0;

    while (true) {
        paisA = paisA * (1 + (3 / 100));
        paisB = paisB * (1 + (1.5 / 100));
        anos ++;
    
        if (paisA > paisB) {
            console.log(`O Pais A atinge a população de ${paisA.toFixed(0)}`);
            console.log(`O Pais B atinge a população de ${paisB.toFixed(0)}`);
            console.log(`em ${anos} anos`);
            break;
    
    }
}
}
function loop05(){
   
    let paisA = prompt("Digite a população do pais A: ");
    let paisB = prompt("Digite a população do pais B: ");
    let taxaCresA = prompt("Digite a taxa de crescimento anual do pais A: ");
    let taxaCresB = prompt("Digite a taxa de crescimento anual do pais B: ");
    let anos = 0;

    while (true) {
        paisA = paisA * (1 + (taxaCresA / 100));
        paisB = paisB * (1 + (taxaCresB / 100));
        anos ++;
    
        if (paisA > paisB) {
            console.log(``);
            console.log(`O Pais A atinge a população de ${paisA.toFixed(0)}`);
            console.log(`O Pais B atinge a população de ${paisB.toFixed(0)}`);
            console.log(`em ${anos} anos`);
            break;
    
    }
}
}
function loop06(){
    let array = [];
    for(let i = 1; i <= 20; i++) {
       console.log(i);
       array.push(i);
    }
    console.log (array);
    
}
function loop07(){
    let maior = 0;

    for(let i = 1; i <= 5; i++) {
        let numero = prompt("Digite o numero: ");
        if (numero > maior){
            maior = numero;
        }
     }
     console.log(`o maior numero digitado foi ${maior}`)

}
function loop08(){

    let total = 0;

    for(let i = 1; i <= 5; i++) {
      let numero = Number(prompt("Digite o numero: "));
      total = total + numero;
    }
    let media = total / 5;
    console.log(`A média dos números é ${media}`);
    

}
function loop09(){
    for(let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
     }
}
function loop10(){
    let numero1 = Number(prompt("Digite o primeiro numero: "));
    let numero2 = Number(prompt("Digite o ultimo numero: "));

    for(let i = (numero1+1); i <= (numero2-1); i++) {
    
            console.log(i);

     }
}
function loop11(){
    let numero1 = Number(prompt("Digite o primeiro numero: "));
    let numero2 = Number(prompt("Digite o ultimo numero: "));
    let total = 0;

    for(let i = (numero1+1); i <= (numero2-1); i++) {
    
            console.log(i);
            total += i;

     }
     console.log(`a soma dos numeros é ${total}`);

}
function loop12(){
    let numero = Number(prompt("Digite o numero: "));

    for(let i = 1; i <= 10; i++) {
        console.log(`${numero} X ${i} = ${i*numero}`);
    }

}
