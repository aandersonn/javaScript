function adicionarTarefa() {
    var inTarefa = document.getElementById("inTarefa");
    var tarefa = inTarefa.value;

    if(tarefa == "") {
        alert("Informe a tarefa")
        inTarefa.focus()
        return
    }

    var divQuadro = document.getElementById("divQuadro")
    var h5 = document.createElement("h5")
    var texto = document.createTextNode(tarefa)
    h5.appendChild(texto)
    divQuadro.appendChild(h5)

    inTarefa.value = "";
    inTarefa.focus()
}
var btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarTarefa)

function selecionarTarefa() {
    var h5 = document.getElementsByTagName("h5")
    var numH5 = h5.length;

    if(numH5 == 0) {
        alert("Não há tarefas para selecionar");
        return
    }

    var aux = -1

    for(var i = 0; i < numH5; i++) {
        if(h5[i].className == "tarefaSelecionada") {
            h5[i].className = "tarefaNormal";
            aux = i;
            break;
        }
    }

    if(aux == numH5 - 1) {
        aux = -1
    }

    h5[aux + 1].className = "tarefaSelecionada"

    
}

var btSelecionar = document.getElementById("btSelecionar");
btSelecionar.addEventListener("click", selecionarTarefa)

