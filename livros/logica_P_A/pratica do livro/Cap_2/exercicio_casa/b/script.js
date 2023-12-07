//função executando uma instrução
function calcularTempo() {
    //obtendo referências do formulário
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outValorPagar = document.getElementById("outValorPagar")
    //obtendo o valor das variaveis e convertendo para número
    var valor = Number(inValor.value);
    var tempo = Number(inTempo.value);
    //calculo de variaveis 
    var calculo = (tempo / 15) * 2;
    //colocando o valor do calculo na página web
    outValorPagar.textContent = "Valor a pagar R$: " + calculo.toFixed(2)
}
//obtendo a referencia do butão
var btCalculo = document.getElementById("btCalculo");
//executando um evento ouvinte depois do click do botão
btCalculo.addEventListener("click", calcularTempo)