// Importa readline para ler entrada do usuário
const readline = require('readline');

// Cria a interface para entrada e saída no console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0; // Vai guardar a soma total
let numerosLidos = 0; // Conta quantos números foram lidos

// Função que será chamada em cada repetição
function lerNumero() {
    // Pergunta ao usuário
    rl.question(`Digite o ${numerosLidos + 1}º número: `, function(numero) {
        // Converte para número e soma
        numero = Number(numero);
        soma += numero;

        // Aumenta o contador
        numerosLidos++;

        // Se ainda não leu 5 números, continua
        if (numerosLidos < 5) {
            lerNumero();
        } else {
            // Quando chegar a 5, mostra o resultado e encerra
            console.log("A soma total é: " + soma);
            rl.close();
        }
    });
}

// Inicia o processo
lerNumero();
