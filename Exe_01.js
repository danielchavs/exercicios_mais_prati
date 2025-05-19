// Importa o módulo para ler o que o usuário digita
const readline = require("readline");

// Cria uma "caixinha" para fazer perguntas e receber respostas
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Faz uma pergunta para o usuário
entrada.question("Digite um número inteiro: ", function(resposta) {
    // Converte a resposta para número
    let numero = parseInt(resposta);

    // Verifica se o número é par ou ímpar
    if (numero % 2 === 0) {
        console.log("Esse número é PAR.");
    } else {
        console.log("Esse número é ÍMPAR.");
    }

    // Encerra o programa
    entrada.close();
});
