const inParticipante = document.getElementById("inParticipante");
const btnGerar = document.getElementById("btnGerar");
const outCracha = document.getElementById("outCracha");

function gerarCracha() {
    let participante = inParticipante.value;

    if(participante == 0 || participante.indexOf(" ") == -1) {
        alert("Informe o nome completo do participante...");
        inParticipante.focus();
        return
    }

    let priEspaco = participante.indexOf(" ");
    let ultEspaco = participante.lastIndexOf(" ");

    let cracha = participante.substr(0, priEspaco) + participante.substr(ultEspaco);

    outCracha.textContent = "Crachá: " + cracha
}

btnGerar.addEventListener("click", gerarCracha)