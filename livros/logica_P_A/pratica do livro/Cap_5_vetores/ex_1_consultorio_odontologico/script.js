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

    //Verifica preenchimento do nome do paciente
    if(nome == "") {
        alert("Informe o nome da paciente");
        inPaciente.focus();
        return
    }

    //Adiciona o nome no final do vetor
    paciente.push(nome);

    var lista = "";

    for(i = 0; i < paciente.length; i++) {
        lista += (i + 1) + "." + paciente[i] + "\n"
    };

    //Altera o conteúdo da tag outList
    outLista.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus()
}

function atenderPaciente() {
    if(paciente.length == 0) {
        alert("Não há paciente na lista de espera");
        inPaciente.focus()
    }
}

//Remove paciente do início da fila
var atender = paciente.shift();

//Exibe nome do paciente em atendimento
outAtendimento.textContent = atender;

//string para concatenar pacientes
var lista = "";

for() {
    
}

//Associa function ao evento click
btAdicionar.addEventListener("click", adicionarPaciente)