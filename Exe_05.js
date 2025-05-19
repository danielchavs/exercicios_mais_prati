// Importa o módulo readline para ler entrada do usuário
const readline = require('readline');

// Cria a interface para leitura e escrita no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o peso
rl.question("Digite seu peso em kg: ", function(peso) {
    // Pergunta a altura
    rl.question("Digite sua altura em metros: ", function(altura) {
        // Converte peso e altura para número
        peso = Number(peso);
        altura = Number(altura);

        // Calcula o IMC usando a fórmula
        const imc = peso / (altura * altura);

        console.log("Seu IMC é:", imc.toFixed(2)); // Mostra com 2 casas decimais

        // Verifica em qual categoria o IMC se encaixa
        if (imc < 18.5) {
            console.log("Categoria: Baixo peso");
        } else if (imc >= 18.5 && imc < 25) {
            console.log("Categoria: Peso normal");
        } else if (imc >= 25 && imc < 30) {
            console.log("Categoria: Sobrepeso");
        } else {
            console.log("Categoria: Obesidade");
        }

        // Fecha a leitura
        rl.close();
    });
});
16