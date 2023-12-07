function calcularLados() {
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outResposta = document.getElementById("outResposta");
    var outTipo = document.getElementById("outTipo");

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    if(ladoA == 0 || isNaN(ladoA)) {
        alert("Por favor, Informe o lado A do triângulo");
        inLadoA.focus();
        return
    };
    if(ladoB == 0 || isNaN(ladoB)) {
        alert("Por favor, Informe o lado B do triângulo");
        inLadoB.focus();
        return
    };
    if(ladoC == 0 || isNaN(ladoC)) {
        alert("Por favor, Informe o lado C do triângulo");
        inLadoC.focus();
        return
    };

     if(ladoA + ladoB < ladoC || ladoA + ladoC < ladoB || ladoB + ladoC < ladoA) {
        alert("não forma um triângulo") 
        inLadoA.focus();
        return
    }; 

    if(ladoA + ladoB > ladoC || ladoA + ladoC > ladoB || ladoB + ladoC > ladoA) {
        outResposta.textContent = "Lados podem formar um triângulo"
    }; 

    if(ladoA == ladoB && ladoA == ladoC) {
        outTipo.textContent = "Tipo: Équilátero"
    } else if (ladoA == ladoB && ladoA != ladoC) {
        outTipo.textContent = "Tipo: Isósceles"
    } else if (ladoA != ladoB && ladoA == ladoC) {
        outTipo.textContent = "Tipo: Isósceles"
    } else if (ladoC != ladoA && ladoC == ladoB) {
        outTipo.textContent = "Tipo: Isósceles"
    } else if (ladoA != ladoB && ladoA != ladoC) {
        outTipo.textContent = "Tipo: Escaleno"
    }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", calcularLados)