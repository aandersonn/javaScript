//Programa pede um número natural, vai transforma-lo em estrelas, colocando-o em ordem crescrente e em sequência um embaixo do outro, formando uma escada de estrelas.

//função -> conjunto de código
function exibirEstrelas() {
    //variáveis recebendo referências do campo de formulário 
    var inNumero = document.getElementById("inNumero")
    var outResposta = document.getElementById("outResposta")

    //variável recebendo o valor da referência vinda do campo de formulário
    var numero = Number(inNumero.value);

    //estrutura condicional, verificando se o número está nos termos exigidos
    if(numero == 0 || isNaN(numero)) {
        alert("Informe um número natural válido");
        inNumero.focus();
        return
    };

    //variável acumuladora
    var estrela = "";

    //estrutura de repetição, repetindo, à cada repetição o número de estrelas aumenta e as estrelas são colocadas uma embaixo da outra 
    for(index = 1; index <= numero; index++) {
        for(i = 1; i <= index; i++) {
            estrela += "*"
        }
        estrela += "\n"
    }
    //objeto sofrendo uma ação do método, modicando o conteúdo da tag "pre"
     outResposta.textContent = estrela
    
}
//variável recebendo a referência do botão que está no campo de formulário
var btEstrelas = document.getElementById("btEstrelas");
btEstrelas.addEventListener("click", exibirEstrelas)