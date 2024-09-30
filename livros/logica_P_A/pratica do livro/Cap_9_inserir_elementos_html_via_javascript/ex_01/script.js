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

function retirarSelecionada() {
    //Cria referência que irá "perder" um filho
    var divQuadro = document.getElementById("divQuadro");
    var h5 = document.getElementsByTagName("h5"); //Obtém tags h5 da página
    var numH5 = h5.length; //Obtém contidade de h5
    var aux = -1; //variável auxiliar para indicar linha selecionada

    //Percorre a lista de elementos h5 inseridos na página
    for (var i = 0; i < numH5; i++) {
        //Verifica className da tag h5
        if (h5[i].className == "tarefaSelecionada") {
            //se selecionada aux = i
            aux = i //muda valor da variável aux
            break //sai da repetição
        }
    }

    //se não há tarefa selecionada (ou se lista vazia...)
    if (aux == -1) {
        alert("Selecione uma tarefa para removêla...")
        return
    }

    //Solicita confirmação (exibindo um conteúdo da tag h5 selecionada)
    if (confirm("Confirma a exclusão de '" + h5[aux].textContent + "'?")) {
        divQuadro.removeChild(h5[aux]); //remove um dos filhos de divQuadros
    } 

}
var btRetirar = document.getElementById("btRetirar");
btRetirar.addEventListener("click", retirarSelecionada)

function gravarTarefas() {
    var h5 = document.getElementsByTagName("h5"); //obtém tags h5 da página
    var numH5 = h5.length; //obtém quantidade de h5

    if(numH5 == 0) // se zero...
    {
        alert("Não há tarefas para serem salvas"); //exibe alerta
        return; //retorna
    }

    var tarefas = ""; //irá "acumular" as tarefas

     //percorre a lista de elementos h5 inseridos na página

     for (var i = 0; i < numH5; i++) {
        taferas  += h6[]]
     }
}
