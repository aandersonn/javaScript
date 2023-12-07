//função -> conjunto de instruções
function exibirRepeticaoFruta() {

    //variáveis recebendo as referência do campo do formulário
    var inFruta = document.getElementById("inFruta");
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    //variáveis obtendo o valor das referências do campo do formulário
    var fruta = inFruta.value;
    var numero = Number(inNumero.value);

    //estrutura condicional, vereficando se o campo vai receber os dados corretamente
    if(fruta == "") {
        alert("Informe o nome de uma fruta válida!");
        inFruta.focus();
        return
    };
    if(numero == 0 || isNaN(numero)) {
        alert("Informe um número natural válido!");
        inNumero.focus();
        return
    };

    //variável contadora
    var repeticao = "";

    //Estrutura de repetição, repetindo a fruta na quantidade que foi informado no campo do formulário
    for(var i = 1; i <= numero; i++) {
        var repeticao = repeticao + fruta + "*"
    };

    //modificação na área de texto, inserido a quantidade de repetição da fruta
    outResposta.textContent = repeticao
};

//referência do botão e evento de click de toda a função 
var btFruta = document.getElementById("btFruta");
btFruta.addEventListener("click", exibirRepeticaoFruta())