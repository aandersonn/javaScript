//função -> conjunto de instruções
function verificarParImpar() {

    //referências dos campos de formulário
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    //obtenção do valor dos campos de formulário a partir da referência
    var numero = Number(inNumero.value);

    //estrutura condicional: se o campo de formulário não receber nenhum ou valor ou não for um número vai aparecer uma caixa de texto com uma advertência.
    if(numero == 0 || isNaN(numero)){
        alert("Por favor, informe um número qualquer corretamente");
        inNumero.focus();
        return
    };

    //Estrutura condicional: se o resto da divisão for 0 o numero é par se não o número é ímpar
    if(numero % 2 == 0) {
        outResposta.textContent = "Resposta: " + numero + " é par."
    }else{
        outResposta.textContent = "reposta: " + numero + " é ímpar"
    }
}
// obtenção da referência do botão e criação do evento de clique do botão
var btParImpar = document.getElementById("btParImpar");
btParImpar.addEventListener("click", verificarParImpar)