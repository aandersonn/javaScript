//declara e inicializa contadores e acumuladores (variáveis globais)
var numContas = 0;
var valTotal = 0;

//Variável string que acumula as contas
var resposta = "";

function registrarConta() {

    //Cria referência aos elementos da página manipulados pela function
    var inDescricao = document.getElementById("inDescricao");
    var inValor = document.getElementById("inValor");
    var outListaContas = document.getElementById("outListaContas");
    var outTotal = document.getElementById("outTotal");

    //Obtém conteúdo dos campos
    var descricao = inDescricao.value;
    var valor = Number(inValor.value);

    //Verifica preenchimento dos campos
    if(descricao == "" || valor == 0 || isNaN(valor)) {
        alert("Informe os dados corretamente.");
        inDescricao.focus();
        return
    };
    
    //adiciona valores ao acumulador e contador
    numContas++;
    valTotal = valTotal + valor;

    //Concatena as contas
        resposta = resposta + descricao + " - R$ " + valor.toFixed(2) + "\n";

    //Altera o conteúdo das tags de resposta
    outListaContas.textContent = resposta + "---------------------------";
    outTotal.textContent = numContas + " Contas - total R$: " + valTotal.toFixed(2);

    //Limpa campos e posiciona o cursor no inDescricao
    inDescricao.value = "";
    inValor.value = "";
    inDescricao.focus()
};

//Refencia elemento e logo após, associa function ao evento crlick
var btConta = document.getElementById("btConta");
btConta.addEventListener("click", registrarConta)