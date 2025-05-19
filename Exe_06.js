// Importa readline para ler entradas do usuário
const readline = require('readline');

// Cria a interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta os três lados do triângulo
rl.question("Digite o valor do lado A: ", function(a) {
    rl.question("Digite o valor do lado B: ", function(b) {
        rl.question("Digite o valor do lado C: ", function(c) {

            // Converte os valores para número
            a = Number(a);
            b = Number(b);
            c = Number(c);

            // Verifica se forma um triângulo usando a desigualdade triangular
            if (a + b > c && a + c > b && b + c > a) {
                console.log("Os lados formam um triângulo.");

                // Verifica o tipo do triângulo
                if (a === b && b === c) {
                    console.log("Tipo: Equilátero");
                } else if (a === b || a === c || b === c) {
                    console.log("Tipo: Isósceles");
                } else {
                    console.log("Tipo: Escaleno");
                }

            } else {
                console.log("Os valores fornecidos NÃO formam um triângulo.");
            }

            // Encerra a leitura
            rl.close();
        });
    });
});
