let prompt = require('prompt-sync')();

let saldo = 0;
let saldo2 = 0;
let chequeEspecial = 1000;
let nomeCliente = "Cleitinho"

menuPrincipal();




function menuPrincipal(){

    console.clear();

    
    console.log(`▒█▀▀█ ░█▀▀█ ▒█▄░▒█ ▒█▀▀█ ▒█▀▀▀█ `);
    console.log(`▒█▀▀▄ ▒█▄▄█ ▒█▒█▒█ ▒█░░░ ▒█░░▒█ `);
    console.log(`▒█▄▄█ ▒█░▒█ ▒█░░▀█ ▒█▄▄█ ▒█▄▄▄█`);

    console.log(` `);
    
    console.log(`░█████╗░░█████╗░██╗██╗░░██╗░█████╗░`);
    console.log(`██╔══██╗██╔══██╗██║╚██╗██╔╝██╔══██╗`);
    console.log(`██║░░╚═╝███████║██║░╚███╔╝░███████║`);
    console.log(`██║░░██╗██╔══██║██║░██╔██╗░██╔══██║`);
    console.log(`╚█████╔╝██║░░██║██║██╔╝╚██╗██║░░██║`);
    console.log(`░╚════╝░╚═╝░░╚═╝╚═╝╚═╝░░╚═╝╚═╝░░╚═╝`);


    console.log(`Bem vindo ${nomeCliente}`);

    console.log("***** MENU ****************************");
    console.log("*                                     *");
    console.log("* 1. Verificar saldo                  *");
    console.log("* 2. Realizar saques                  *");
    console.log("* 3. Depósitos                        *");
    console.log("* 4. Transferências                   *");
    console.log("* 5. Checar status do cheque especial *");
    console.log("* 6. Atualizar cadastro               *");
    console.log("* 7. Avaliar crédito                  *");
    console.log("* 0. Sair                             *");
    console.log("***************************************");
    
    let escolha = Number(prompt("Informe a opção desejada: "));
    
    if (escolha === 1) {
        verificarSaldo();
    } else if (escolha === 2) {
        realizarSaque();
    } else if (escolha === 3) {
        fazerDeposito();
    } else if (escolha === 4) {
        fazerTransferencia();
    } else if (escolha === 5) {
        checarStatusChequeEspecial();
    } else if (escolha === 6) {
        atualizarCadastro();
    } else if (escolha === 7) {
        avaliarCredito();
    } else if (escolha === 0) {
        console.log("Saindo do programa...");
    } else {
        console.log("Opção inválida. Por favor, tente novamente.");
        // Chama a opção de novo, se desejar.
    }
    

}

function verificarSaldo() {
    console.log(`**********************************`);
    console.log(`Seu saldo é: R$ ${saldo},00`);
    console.log(`**********************************`);
    console.log(` `);
    let escolha = Number(prompt(" Escolha 1 para o menu inicial ou 0 para sair do programa: "));
    if (escolha === 1) {
        return menuPrincipal();
    } else if (escolha === 0) {
        console.log("Programa encerrado.");
        process.exit(); 
    } else {
        console.log(`Escolha uma opção válida`);
         
    }
}

function realizarSaque() {

let escolha = Number(prompt(" Digite o valor a ser sacado ou 0 para voltar ao menu anterior: "));
if (escolha === 0) {
    return menuPrincipal();
} else if (escolha <= saldo) {

    saldo = saldo - escolha
    
    console.log(`O valor de R$ ${escolha},00 foi sacado`);

    let escolha0 = Number(prompt(" Escolha 1 para o menu inicial ou 0 para sair do programa: "));
    if (escolha0 === 1) {
        return menuPrincipal();
    } else if (escolha0 === 0) {
        console.log("Programa encerrado.");
        process.exit(); // Encerra a execução do programa aqui
    } else {
        console.log(`Escolha uma opção válida`);
       ;
    }


} else {
    console.log(`O valor digitado é maior que o saldo atual.`);
   let escolha2 = Number(prompt(" Para tentar novametne digite 1, para voltar ao menu Digite 2: "));
if (escolha2 === 1) {
    return realizarSaque();
} else if (escolha2 == 2) {

    menuPrincipal();

}
    
}
    
}

function fazerDeposito() {
   let escolha = Number(prompt(" Informe o valor a ser depositado ou 0 para voltar ao menu anterior: "));
if (escolha > 0) {
    saldo = saldo + escolha;
    console.log(`O valor de R$ ${escolha},00 foi depositado com sucesso em sua conta`);
    
    let escolha0 = Number(prompt(" Escolha 1 para o menu inicial ou 0 para sair do programa: "));
    if (escolha0 === 1) {
        return menuPrincipal();
    } else if (escolha0 === 0) {
        console.log("Programa encerrado.");
        process.exit(); // Encerra a execução do programa aqui
    } else {
        console.log(`Escolha uma opção válida`);
       ;
    }
} 
 else {
    return menuPrincipal();
}
}

function fazerTransferencia() {
    let escolha = Number(prompt(" Informe o valor a ser transferido ou 0 para voltar ao menu anterior: "));
    if (escolha <= saldo) {
        saldo -= escolha;
        saldo2 += escolha
        console.log(`O valor de R$ ${escolha},00 foi transferido com sucesso da sua conta`);
        let escolha0 = Number(prompt(" Escolha 1 para o menu inicial ou 0 para sair do programa: "));
    if (escolha0 === 1) {
        return menuPrincipal();
    } else if (escolha0 === 0) {
        console.log("Programa encerrado.");
        process.exit(); // Encerra a execução do programa aqui
    } else {
        console.log(`Escolha uma opção válida`);
         
    }
    } 
     else if(escolha == 0) {
        return menuPrincipal();
    }
}

function checarStatusChequeEspecial() {
    console.log(`O valor de R$ ${chequeEspecial},00 de cheque especial está disponivel para o saque`);
    let escolha = Number(prompt(`informe o valor a ser adicionado a conta do chegue especial ou 0 para voltar: `));
    if (escolha <= chequeEspecial) {
        saldo =+ escolha;
        chequeEspecial =- escolha;
        console.log(`O valor de R$ ${escolha},00 foi depositado com sucesso em sua conta`);
        let escolha0 = Number(prompt(" Escolha 1 para o menu inicial ou 0 para sair do programa: "));
    if (escolha0 === 1) {
        return menuPrincipal();
    } else if (escolha0 === 0) {
        console.log("Programa encerrado.");
        process.exit(); // Encerra a execução do programa aqui
    } else {
        console.log(`Escolha uma opção válida`);
         
    }
    } 
     else {
        console.log(`O valor digitado é maior que o valor disponivel do cheque especial.`);
 
        let escolha0 = Number(prompt(" Escolha 1 para o menu inicial ou 0 para sair do programa: "));
        if (escolha0 === 1) {
            return menuPrincipal();
        } else if (escolha0 === 0) {
            console.log("Programa encerrado.");
            process.exit(); // Encerra a execução do programa aqui
        } else {
            console.log(`Escolha uma opção válida`);
           ;
        }
    }
}

function atualizarCadastro() {

    let mudarnome = prompt("Informe o nome do usuario: ");

    nomeCliente = mudarnome;


    console.log(`Nome Alterado com Sucesso!`);
    let escolha0 = Number(prompt(" Escolha 1 para o menu inicial ou 0 para sair do programa: "));
    if (escolha0 === 1) {
        return menuPrincipal();
    } else if (escolha0 === 0) {
        console.log("Programa encerrado.");
        process.exit(); // Encerra a execução do programa aqui
    } else {
        console.log(`Escolha uma opção válida`);
         
    }
    
    
}

function avaliarCredito() {

 
    console.log(`Bem vindo a avaliação de Credito`);
    let escolha1 = Number(prompt(`Informe sua renda atual`));
    let escolha2 = Number(prompt(`Informe o valor de suas dividas atuais`));

    if (escolha1 >= escolha2) {
        console.log(`Seu escore é BOM!`);
        let escolha0 = Number(prompt(" Escolha 1 para o menu inicial ou 0 para sair do programa: "));
    if (escolha0 === 1) {
        return menuPrincipal();
    } else if (escolha0 === 0) {
        console.log("Programa encerrado.");
        process.exit(); // Encerra a execução do programa aqui
    } else {
        console.log(`Escolha uma opção válida`);
         
    }
    } 
    else{
        console.log(`você não tem escore para solicitar credito`);
        let escolha0 = Number(prompt(" Escolha 1 para o menu inicial ou 0 para sair do programa: "));
    if (escolha0 === 1) {
        return menuPrincipal();
    } else if (escolha0 === 0) {
        console.log("Programa encerrado.");
        process.exit(); // Encerra a execução do programa aqui
    } else {
        console.log(`Escolha uma opção válida`);
         
    }
    }
}


