//função => conjunto de instruções
function calcularFusoHorario() {
    //cria uma referência aos elementos da página
    var inHora = document.getElementById("inHora");
    var outResposta = document.getElementById("outResposta");
    //obtém e converte o conteúdo do campo inHora
    var hora = Number(inHora.value);
    //se não preencheu ou se não foi um numero
    if(inHora.value == "" || isNaN(hora)) {
        alert("Por favor, Informe a hora do brasil");//exibe um alerta
        inHora.focus();//volta para o campo de formulário inHora 
        return
    }
    //calcula o horário na frança
    var horaFranca = hora + 5;
    //se passar das 24 horas na frança
    if(horaFranca > 24) {
        horaFranca = horaFranca - 24 //subtrai as 24 horas
    }
    //exibe uma resposta, alterando o conteudo do outResposta
    outResposta.textContent = "Hora na frança: " + horaFranca.toFixed(2);

};
//cria uma referência ao elemento btFusoHorario e registra um evento associado a function
var btFusoHorario = document.getElementById("btFusoHorario");
btFusoHorario.addEventListener("click", calcularFusoHorario)