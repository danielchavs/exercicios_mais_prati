// Importa readline para ler entrada do usuário
const readline = require('readline');

// Cria a interface para entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta quantas maçãs o usuário quer comprar
rl.question("Digite o número de maçãs compradas: ", function(quantidade) {
    // Converte a quantidade para número
    quantidade = Number(quantidade);

    let precoUnitario;
    let total;

    // Define o preço com base na quantidade
    if (quantidade < 12) {
        precoUnitario = 0.30;
    } else {
        precoUnitario = 0.25;
    }

    // Calcula o valor total da compra
    total = quantidade * precoUnitario;

    // Mostra os detalhes da compra
    console.log("Você comprou " + quantidade + " maçã(s).");
    console.log("Cada maçã custa R$ " + precoUnitario.toFixed(2));
    console.log("Valor total da compra: R$ " + total.toFixed(2));

    // Fecha a leitura
    rl.close();
});
