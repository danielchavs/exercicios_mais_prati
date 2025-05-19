// Importa o módulo para ler o que o usuário digita
const readline = require("readline");

// Cria a entrada de dados
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta a nota do aluno
entrada.question("Digite a nota (de 0 a 10): ", function(resposta) {
    let nota = parseFloat(resposta); // transforma a resposta em número decimal

    // Verifica se a nota é válida
    if (nota < 0 || nota > 10) {
        console.log("Nota inválida.");
    } else if (nota >= 7) {
        console.log("Aprovado!");
    } else if (nota >= 5) {
        console.log("Recuperação.");
    } else {
        console.log("Reprovado.");
    }

    entrada.close(); // Encerra o programa
});

///parseFloat() é usado porque notas podem ter vírgula (ex: 7.5).
//
// if verifica se passou direto.
//
// else if vê se está em recuperação.
//
// else é o caso da reprovação.
//
// Pronto pra próxima? Pode mandar!