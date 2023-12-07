function calcularDeposito() {
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");

    var valor = Number(inValor.value);
    

    if(valor == 0 || isNaN(valor)) {
        alert("Por favor, Informe o valor corretamente");
        inValor.focus();
        return
    };

    if(valor < 1.00) {
        alert("Valor insuficiente");
        inValor.focus();
        return
    };

    var calculo1 = valor - 1.00;
    var calculo2 = valor - 1.75;
    var calculo3 = valor - 3.00;

    var tempo1 = 30;
    var tempo2 = 60;
    var tempo3 = 120;

    if(valor == 1.00 || valor < 1.75) {
        outTempo.textContent = "Tempo: " + tempo1 + " Min";
        outTroco.textContent = "Troco: " + calculo1.toFixed(2)
    } else if(valor == 1.75 || valor < 3.00) {
        outTempo.textContent = "Tempo: " + tempo2 + " Min";
        outTroco.textContent = "Troco: " + calculo2.toFixed(2)
    } else {
        outTempo.textContent = "Tempo: " + tempo3 + " Min";
        outTroco.textContent = "Troco: " + calculo3.toFixed(2)
    }
}

var btDeposito = document.getElementById("btDeposito");
btDeposito.addEventListener("click", calcularDeposito)