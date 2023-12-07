//função -> conjunto de códigos
function calcularTabuada() {

    //Obtendo referência dos elementos da página
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    //Converte conteúdo do campo inNumero
    var numero = Number(inNumero.value);

    //valida o numero
    if(numero == 0 || isNaN(numero)) {
        alert("Por favor, Informe um número");
        inNumero.focus();
        return
    };

    //cria uma variavel do tipo string, que irá concatenar a resposta
    var resposta = " ";

    //Cria um laço de repetição
    for(var i = 1; i <= 10 ; i++) {
        //a variavel vai acumulando os novos conteúdos
        resposta = resposta + numero + " x " + i + " = " +  numero * i + "\n"
    };

    //O conteúdo da tag pre é alterado para exibir a tabuada do numero
    outResposta.textContent = resposta
};

//Cria referência ao botão e após associa a função ao evento click
var btTabuada = document.getElementById("btTabuada");
btTabuada.addEventListener("click", calcularTabuada) 