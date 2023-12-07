//o programa está pedindo um número, o mesmo vai ter os seus divisores verificados, sendo exibidos na tela junto com a soma entre eles dando na resposta do número digitado. obs: o unico divisor que não vai aparecer, é o próprio número digitado.

//função -> conjunto de codigos, executando uma ação.
function verificarNumero() {
    //variáveis obtendo a referência que está no campo de formulário.
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");
    var outSegundaResposta = document.getElementById("outSegundaResposta")

    //variável obtendo o valor da referência.
    var numero = Number(inNumero.value);

    //estrutura condicional, verificando se o usuário vai informar o dado carretamente.
    if(numero == 0 || isNaN(numero)) {
        alert("Informe número natural válido");
        inNumero.focus();
        return
    };

    //variáveis acumuladoras e variável isolando o primeiro divisor
    var repeticao = "";
    var acumulador = 2;
    var soma = 0;
    var numeroIsolado = 1

    //estrutura de repetição, se repetindo enquanto a variável "acumulador" for menor que a variável "numero"
    while (acumulador < numero) {
        //estrutura condicional, obtendo somente as diviões que possuem o resto zero e fazendo a soma entre eles.
        if(numero % acumulador == 0) {
            repeticao = repeticao + ", " + acumulador;
            soma = soma + acumulador;
                        
        } 

        acumulador++
          
    } 
    //objeto recebendo um método de modificação do conteúdo de texto
    outResposta.textContent = "Divisores do " + numero + ": " + numeroIsolado + repeticao + "." + " ( " + "Soma: " + (soma + numeroIsolado) + " )" ;

    //estrutura condicional, verificando se a soma dos divisores da variável número é igual ao próprio número, se sim o número vai ser perfeito, se não o número não é perfeito
    if(soma + numeroIsolado == acumulador) {
        outSegundaResposta.textContent = "O número é perfeito"
    } else if(soma + numeroIsolado != acumulador) {
        outSegundaResposta.textContent = "O número não é perfeito"
    }
}

//variável obtendo a referência do botão no campo de formulário
var btVerificar = document.getElementById("btVerificar");
//objeto recebendo um método/função de evento ouvinte de clique
btVerificar.addEventListener("click", verificarNumero)