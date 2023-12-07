//função -> conjunto de instruções
function declinarNumero() {

    //Obtem a referencia dos elementos no formulário
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    //obtem o valor da referencia inNumero
    var numero = Number(inNumero.value);

    //verifica a validade do número
    if(numero == 0 || isNaN(numero)) {
        alert("Por favor, Informe um número.");
        inNumero.focus();
        return
    };

    //inicializa a variável resposta 
    var resposta = "Entre " + numero + "e 1: ";

    //cria um for descrecente
    for(var i = numero; i > 0; i = i - 1) {
        resposta = resposta + i + ", "
    };

    //altera o conteúdo de outResposta
    outResposta.textContent = resposta
}

//obtem a referência do botão e cria o evento de click 
var btDeclinio = document.getElementById("btDeclinio");
btDeclinio.addEventListener("click", declinarNumero)