//função -> conjunto de instrução
function calcularRaizQuadrada() {

    //cria uma referência aos elementos da página
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    //Obtem o conteúdo do campo inNumero
    var numero = Number(inNumero.value);

    //Se não preencheu o campo inNumero ou colocou alguma palavra
    if(inNumero.value =="" || isNaN(numero)) {
        alert("Por favor, Informe um número qualquer");//exibe um alerta
        inNumero.focus();//posiciona no campo inNumero
        return //retorna
    };

    //calcula a raiz quadrado do numero
    var raizQuadrada = Math.sqrt(numero);

    //se o valor da raíz quadrada for inteiro
    if(raizQuadrada == Math.floor(raizQuadrada)) {
        outResposta.textContent = "A raíz quadrada é: " + raizQuadrada
    } else {//se o valor da raíz quadrada não for inteiro
        outResposta.textContent = "não é uma raíz perfeita " + numero
    }
}

//cria referência ao elemento btCalculo e o evento de clique da função calcularRaizQuadrada
var btCalculo = document.getElementById("btCalculo");
btCalculo.addEventListener("click", calcularRaizQuadrada)