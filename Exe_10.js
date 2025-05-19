// Importa readline para ler entrada do usuário
const readline = require('readline');

// Cria a interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o número inteiro
rl.question("Digite um número inteiro: ", function(numero) {
    // Converte para número inteiro
    numero = parseInt(numero);

    // Repete o número 10 vezes usando for
    for (let i = 1; i <= 10; i++) {
        console.log(i + " - " + numero); // Mostra o número com a contagem
    }

    // Fecha a leitura
    rl.close();
});
