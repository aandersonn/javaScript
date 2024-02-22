const inCandidato = document.getElementById("inCandidato");
const inAcerto = document.getElementById("inAcerto");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnListar = document.getElementById("btnListar");
const btnAprovados = document.getElementById("btnAprovados");
const outAcertos = document.getElementById("outAcertos");

let candidatosAcertos = [];

function adicionar() {
    let candidato = inCandidato.value;
    let acertos = Number(inAcerto.value);
    if((candidato == '') || acertos == "" || isNaN(acertos)) {
        alert("Preencha os campos corretamente!")
        inCandidato.focus();
        return
    }
    candidatosAcertos.push({nome: candidato, acertos: acertos})

    inCandidato .value == ""
    inAcerto.value == ""
    inCandidato.focus();

    listarTodos();
}

btnAdicionar.addEventListener("click", adicionar);

function listarTodos() {
    if(candidatosAcertos.length == 0) {
        alert("Não há dados de nenhum candidato!");
        return
    }

    let lista = '';

    for(let index = 0; index < candidatosAcertos.length; index++) {
        lista += `${index + 1}º - ${candidatosAcertos[index].nome} - ${candidatosAcertos[index].acertos} acertos\n`;
    }
    outAcertos.textContent = lista;
}

btnListar.addEventListener("click", listarTodos);

function todosAprovados() {
    if(candidatosAcertos.length == 0) {
        alert("Não há candidatos! Adicione candidatos.");
        inCandidato.focus();
        return
    }

    let acertosParaAprovar = Number(prompt("Os aprovados devem acertar pelo menos:"));

    if((acertosParaAprovar == 0) || isNaN(acertosParaAprovar)) {
        alert('Número invalido');
        return
    }

    let copia = candidatosAcertos.slice();

    copia.sort( function (a, b) {
        return a.acertos - b.acertos
    });
    
    copia.reverse();

    let aprovados = '';

    for(let index = 0; index < copia.length; index++) {
        if(copia[index].acertos >= acertosParaAprovar) {
            aprovados += `${index + 1}º colocado - ${copia[index].nome} - ${copia[index].acertos} acertos\n`
        }
    }

    if(aprovados == '') {
        outAcertos.textContent = 'Não há aprovados no concurso!';
    } else {
        outAcertos.textContent = aprovados
    }
}

btnAprovados.addEventListener("click", todosAprovados)