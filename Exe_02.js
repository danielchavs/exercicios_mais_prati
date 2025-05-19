// Importa o módulo para ler o que o usuário digita
const readline = require("readline");

// Cria uma forma de fazer pergunta pro usuário
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta a idade da pessoa
entrada.question("Digite sua idade: ", function(resposta) {
    let idade = parseInt(resposta); // transforma o texto em número

    // Verifica a faixa etária
    if (idade >= 0 && idade <= 12) {
        console.log("Você é uma CRIANÇA.");
    } else if (idade >= 13 && idade <= 17) {
        console.log("Você é um ADOLESCENTE.");
    } else if (idade >= 18 && idade <= 59) {
        console.log("Você é um ADULTO.");
    } else if (idade >= 60) {
        console.log("Você é um IDOSO.");
    } else {
        console.log("Idade inválida.");
    }

    entrada.close(); // finaliza o programa
});
