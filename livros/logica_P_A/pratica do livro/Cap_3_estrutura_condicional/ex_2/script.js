//função -> conjunto de instruções
function calcularPeso() {
    //cria uma referência aos elementos manipulados pela function
    var inNome = document.getElementById("inNome");
    var rbMasculino = document.getElementById("rbMasculino");
    var rbFeminina = document.getElementById("rbFeminina");
    var inAltura = document.getElementById("inAltura");
    var outPeso = document.getElementById("outPeso");
    //Obtém os conteúdos dos campos de edição da página
    var nome = inNome.value;
    var masculino = rbMasculino.checked;
    var feminino = rbFeminina.checked;
    var altura = Number(inAltura.value);
    //Verifica se o nome foi preenchido e sexo selecionado
    if(nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo...");
        inNome.focus();
        return;
    }
    //verifica se a altura não foi preenchida ou NAN not-a-number (um texto for informado)
    if(altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return;
    }
    //se masculino foi selecionado vai recerber "true" se não feminino
    if(masculino) {
        var peso = 22 * Math.pow(altura, 2)
    } else {
        var peso = 21 * Math.pow(altura, 2)
    };
    //Recebe resposta, altera o conteúdo outResposta
    outPeso.textContent = nome + ", Seu peso ideal é: " + peso.toFixed(3) + "KG."
}
//Registra um evento no btCalculo e registra um evento no calcularPesoIdeal
var btCalculo = document.getElementById("btCalculo");
btCalculo.addEventListener("click", calcularPeso);

function limparCampo() {
    //Limpar os conteúdos dos elementos
    document.getElementById("inNome").value = "";
    document.getElementById("rbMasculino").checked = false;
    document.getElementById("rbFeminina").checked = false;
    document.getElementById("inAltura").value = "";
    document.getElementById("outPeso").textContent = "";
    //posiciona (joga o foco) no elemento inNome
    //OBS: com esse metodo focus, o código apresentou erro.
    document.getElementById("inNome").focus();

   /* 
   location.reload();
   //outro método para limpar os campos de formulário, recarregando a página
   */
};

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampo)