// Importa readline para ler entrada do usuário
const readline = require('readline');

// Cria a interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o primeiro valor
rl.question("Digite o primeiro valor: ", function(valor1) {
    // Pergunta o segundo valor
    rl.question("Digite o segundo valor (diferente do primeiro): ", function(valor2) {
        // Converte para números
        valor1 = Number(valor1);
        valor2 = Number(valor2);

        // Verifica se os valores são diferentes
        if (valor1 === valor2) {
            console.log("Os valores não podem ser iguais.");
        } else {
            // Compara e mostra em ordem crescente
            if (valor1 < valor2) {
                console.log("Ordem crescente: " + valor1 + ", " + valor2);
            } else {
                console.log("Ordem crescente: " + valor2 + ", " + valor1);
            }
        }

        // Encerra a leitura
        rl.close();
    });
});
