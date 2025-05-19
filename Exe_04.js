// Importa o módulo readline para ler o que o usuário digita
const readline = require('readline');

// Cria a interface para entrada e saída no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Mostra o menu
console.log("Menu:");
console.log("1. Dizer Oi");
console.log("2. Mostrar um número");
console.log("3. Sair");

// Pergunta qual opção o usuário quer
rl.question("Escolha uma opção: ", function(opcao) {
    // Converte a entrada para número
    opcao = Number(opcao);

    // Usa switch-case para decidir o que fazer
    switch(opcao) {
        case 1:
            console.log("Oi!");
            break;
        case 2:
            console.log("O número é 42");
            break;
        case 3:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida");
    }

    // Fecha a interface de leitura
    rl.close();
});
