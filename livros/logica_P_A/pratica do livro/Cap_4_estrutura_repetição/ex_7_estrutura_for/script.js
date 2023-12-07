//função -> conjunto de instruções
function ExibirSimbolo() {

    //cria referência aos elementos html manipulados pela function
    var inNumero = document.getElementById("inNumero");
    var outSimbolo = document.getElementById("outSimbolo");

    //obtém conteúdo do campo inNumero
    var numero = Number(inNumero.value);

    //condicional verificando se foi inserido algum caractere no campo e se esse caractere é um número
    if(numero == 0 || isNaN(numero)) {
        alert("Informe um número válido");
        inNumero.focus();
        return
    };

    //declara variável que irá concatenar as estrelas/traço
    var estrela = "";

    //cria um laço de repetição do número 1 até o número informado
    for(var i = 1; i <= numero; i++) {
        if(i % 2 == 1) {
            estrela = estrela + "*"
        } else {
            estrela = estrela + "_"
        }
    };

    //exibe as estrelas
    outSimbolo.textContent = estrela
}

//cria referência ao botão e após associa function ao evento click
var btSimbolo = document.getElementById("btSimbolo");
btSimbolo.addEventListener("click", ExibirSimbolo)