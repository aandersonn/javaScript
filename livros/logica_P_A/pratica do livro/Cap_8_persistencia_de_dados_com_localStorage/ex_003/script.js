function incluirAposta() {
    var inNome = document.getElementById("inNome");
    var inPeso = document.getElementById("inPeso");

    var nome = inNome.value;
    var peso = Number(inPeso.value);

    if(nome == "" || peso == 0 || isNaN(peso)) {
        alert("Informe o nome e o peso da aposta");
        inNome.focus();
        return;
    }

    if(verApostaExiste(peso)) {
        alert("Alguem já apostou neste peso, Informe outro");
        inPeso.focus();
        return;
    }

    if(localStorage.getItem("melanciaNome")) {
        var melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
        var melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + nome;

        localStorage.setItem("melanciaNome", melanciaNome);
        localStorage.setItem("melanciaNome", melanciaPeso);
    } else {
        localStorage.setItem("melanciaNome", nome);
        localStorage.setItem("melanciaPeso", peso);
    }

    mostrarAposta();
    inNome.value = "";
    inPeso.value = "";
    inNome.focus();
}

var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", incluirAposta);

function verApostaExiste(peso) {
    var existe = false;

    if(localStorage.getItem("melanciaPeso")) {
        var pesos = localStorage.getItem("melanciaPeso").split(";");
        if(pesos.indexOf(peso.toString()) >= 0) {
            existe = true;
        }
    }
    return existe;
}

function mostrarApostas() {
    var outApostas = document.getElementById("outApostas");
    if(!localStorage.getItem("melanciaNome")) {
        outApostas.textContent = "";
        return
    }

    var nomes = localStorage.getItem("melanciaNome").split(";");
    var pesos = localStorage.getItem("melanciaPeso").split(";");

    var linhas = "";

    for (var i = 0; i < nomes.length; i++) {
        linhas += nomes[i] + " - " + pesos[i] + "gr \n";
    }

    outApostas.textContent = linhas;
}

mostrarApostas();

function verificarVencedor() {
    if(!localStorage.getItem("")) {

    }
}