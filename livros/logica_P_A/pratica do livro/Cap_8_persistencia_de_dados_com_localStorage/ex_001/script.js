function trocarClube() {
    var imgClub = document.getElementById("imgClub");
    var divTitulo = document.getElementById("divTitulo");

    var clube;

    if(rbBrasil.checked) {
        clube = "Brasil"
    } else if (rbPelotas.checked) {
        clube = "Pelotas"
    } else {
        clube = "Farroupilha"
    }

    divTitulo.className = "row-cores" + clube;

    imgClub.src = "img/" + clube.toLowerCase() + ".png";
    imgClub.className = "exibe";
    imgClub.alt = "Símbolo do " + clube;

    localStorage.setItem("clube", clube);
}

var rbBrasil = document.getElementById("rbBrasil");
var rbPelotas = document.getElementById("rbPelotas");
var rbFarroupilha = document.getElementById("rbFarroupilha");

rbBrasil.addEventListener("change", trocarClube);
rbPelotas.addEventListener("change", trocarClube);
rbFarroupilha.addEventListener("change", trocarClube)

function verificarClube() {
    if(localStorage.getItem("clube")) {
        var clube = localStorage.getItem("clube");

        if(clube == "Brasil") {
            rbBrasil.checked = true
        } else if (clube == "Pelotas") {
            rbPelotas.checked = true
        } else {
            rbFarroupilha.checked = true
        }
        trocarClube()
    }
}

verificarClube()