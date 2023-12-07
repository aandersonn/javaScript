function verificarVelocidade() {
    var inVPermitida = document.getElementById("inVPermitida");
    var inVCondutor = document.getElementById("inVCondutor");
    var outResposta = document.getElementById("outResposta")

    var vPermitida = Number(inVPermitida.value);
    var vCondutor = Number(inVCondutor.value);

    if(vPermitida == 0 || isNaN(vPermitida)) {
        alert("por favor, Informe a velocidade permitida corretamente");
        inVPermitida.focus();
        return
    };

    if(vCondutor == 0 || isNaN(vCondutor)) {
        alert("Por favor, Informe a velocidade do condutor corretamente");
        inVCondutor.focus();
        return
    }

    var Porcentagem = ((vCondutor * 100) / vPermitida) - 100

   
    if(vCondutor > vPermitida && Porcentagem <= 20) {
        outResposta.textContent = "Situação: Multa leve."
    } else if(vCondutor > vPermitida && Porcentagem > 20) {
        outResposta.textContent = "Situação: Multa grave"
    } else {
        outResposta.textContent = "Situação: Sem multa"
    }
}
var btVerificador = document.getElementById("btVerificador");
btVerificador.addEventListener("click", verificarVelocidade)