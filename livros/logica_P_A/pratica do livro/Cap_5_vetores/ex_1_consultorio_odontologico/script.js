//Cria referência aos elementos de entrada e saída de dados da página
var inPaciente = document.getElementById("inPaciente");
var btAdicionar = document.getElementById("btAdicionar");
var btUrgencia = document.getElementById("btUrgencia");
var btAtender = document.getElementById("btAtender");
var outAtendimento = document.getElementById("outAtendimento");
var outLista = document.getElementById("outLista");

//Declara vetor global
var paciente = [];

function adicionarPaciente() {
    //obtém nome do paciente
    var nome = inPaciente.value;

    //Verifica preenchimento 
    if(nome == "") {
        alert("Informe o nome da paciente");
        inPaciente.focus();
        return
    }

    paciente.push(nome);

    var lista = "";

    for(i = 0; i < paciente.length; i++) {
        lista += (i + 1) + "." + paciente[i] + "\n"
    };

    outLista.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus()
}

btAdicionar.addEventListener("click", adicionarPaciente)