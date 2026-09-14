// Valores digitados
const inputValor = document.querySelector('input');
const moedaDestino = document.getElementById('moedaDestino');
const moedaOrigem = document.getElementById('moedaOrigem');
const btnCarregar = document.querySelector('button');

// Criar uma funcão para converter moedas (especifico)
async function converterMoeda(valor, moedaOrigem, moedaDestino) {
    const url = `https://economia.awesomeapi.com.br/json/last/${moedaOrigem}-${moedaDestino}`;

    try {
        const resposta = await fetch(url) // Trazendo os dados da API
        const dados = await resposta.json(); // Convertendo os dados para JSON
        const taxaCambio = Number(dados[`${moedaOrigem}${moedaDestino}`].bid); 
        const valorConvertido = valor * taxaCambio; // Valor de Conversão
        return valorConvertido;

    } catch (error) {
        console.error("failed", error.message);
    }
}

//Carregar os dados depois de apertar o botao
btnCarregar.addEventListener('click', async() => {
    const valor = Number(inputValor.value);
    const origem = moedaOrigem.value;
    const destino = moedaDestino.value;
    
    const resultado = await converterMoeda(valor, origem, destino);
    console.log(resultado);

})


//retornar uma resposta com o valor convertido
converterMoeda(50, "USD", "BRL")
  .then(resultado => console.log(`O valor convertido é: ${resultado.toFixed(2)}`));
