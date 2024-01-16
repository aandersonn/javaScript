const inPaciente = document.getElementById("inPaciente");
const btnConsulta = document.getElementById("btnConsulta");
const btnPrioritario = document.getElementById("btnPrioritario");
const btnAtender = document.getElementById("btnAtender");
const pacienteEmAtendimento = document.getElementById("pacienteEmAtendimento");
const outConsulta = document.getElementById("outConsulta");

let todosPacientes = [];

function marcarConsulta() {
    let nomePaciente = inPaciente.value;

    if(nomePaciente == "") {
        alert("Digite seu nome")
        inPaciente.focus();
        return
    }

    todosPacientes.push(nomePaciente);

    let lista = '';

    for(let index = 0; index < todosPacientes.length; index++) {
        lista += `${(index + 1)}.${todosPacientes[index]}\n`
    }

    outConsulta.textContent = lista;
    inPaciente.value = '';
    inPaciente.focus()
}

btnConsulta.addEventListener("click", marcarConsulta)

function atendimentoPrioritario() {
    let nomePaciente = inPaciente.value;

    if(nomePaciente == "") {
        alert("Digite seu nome")
        inPaciente.focus()
        return;

    }

    todosPacientes.unshift(nomePaciente);
    let lista = '';

    for(let index = 0; index < todosPacientes.length; index++) {
        lista += `${(index + 1)}. ${todosPacientes[index]}\n`
    }

    outConsulta.textContent = lista;
    inPaciente.value = '';
    inPaciente.focus();
}

btnPrioritario.addEventListener("click", atendimentoPrioritario)

function atenderPaciente() {
    if(todosPacientes.length == 0) {
        alert("Não há pacientes para atender!");
        inPaciente.focus();
        return
    }

    let atender = todosPacientes.shift();
    pacienteEmAtendimento.textContent = atender;
    let lista = '';

    for(let index = 0; index < todosPacientes.length; index++) {
        lista += `${(index + 1)}. ${todosPacientes[index]}\n`
    }

    outConsulta.textContent = lista;


}

btnAtender.addEventListener("click", atenderPaciente)