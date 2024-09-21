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
    console.log(divQuadro)
}

adicionarTarefa()