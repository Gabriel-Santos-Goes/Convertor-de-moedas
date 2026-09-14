//Chamar o input e o select do HTML

//Criar uma funcão para converter moedas (especifico)
async function converterMoeda(valor, moedaOrigem, moedaDestino) {
    const url = `https://economia.awesomeapi.com.br/json/last/${moedaOrigem}-${moedaDestino}`;

    try {
        const resposta = await fetch(url) // Trazendo os dados da API
        const dados = await resposta.json(); // cnovertendo os dados para JSON
        const taxaCambio = Number(dados[`${moedaOrigem}${moedaDestino}`].bid); 
        const valorConvertido = valor * taxaCambio; // valor de conversão
        return valorConvertido;

    } catch (error) {
        console.error("failed", error.message);
    }
}

//retornar uma resposta com o valor convertido
console.log(converterMoeda(10, "USD", "BRL")
    .then(resultado => console.log(`O valor convertido é: ${resultado.toFixed(2)}`))
);
