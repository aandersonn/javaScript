//repetir a construção do código = 2/5
//construir o código = @    
//depuração de erros = @
//verificar todas as etapas com o console.log = @    
//passar a ideia do código para o papel = @     
//ler a explicação do livro = @

var inDescricao = document.getElementById("inDescricao");
var inValor = document.getElementById("inValor");
var btExibir = document.getElementById("btExibir");
var outResposta = document.getElementById("outResposta");
var outTotal = document.getElementById("outTotal");

var numContas = 0;
var valorTotal = 0;
var resposta = ""

function exibirConta() {
    var descricao = inDescricao.value;
    var valor = Number(inValor.value);


    if(valor == 0 || isNaN(valor)) {
        alert("informe o valor da conta.");
        inValor.value = "";
        inValor.focus()
    }

    numContas++;
    valorTotal = valorTotal + valor;

    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";

    outResposta.textContent = resposta + "----------------------------------";

    outTotal.textContent = numContas + " Conta(s) - total R$: " + valorTotal.toFixed(2);

    inDescricao.value = "";
    inValor.value = "";
    inDescricao.focus()
}

btExibir.addEventListener("click", exibirConta)

