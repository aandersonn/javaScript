const inFuncionario = document.getElementById("inFuncionario");
console.log(inFuncionario)
const btnGerar = document.getElementById("btnGerar");
console.log(btnGerar)
const outEmail = document.getElementById("outEmail");
console.log(outEmail)

function gerarEmail() {
    let funcionario = inFuncionario.value;
    console.log(funcionario)
    if(funcionario == "" || funcionario.indexOf(" ") == -1) {
        alert("Informe o nome completo do funcionário...");
        inFuncionario.focus();
        return
    }

    let partes = funcionario.split(" ");
    console.log(partes)
    let email = "";
    console.log(email)
    let tam = partes.length;
    console.log(tam)

    for(let i = 0; i < tam -1; i++) {
        email += partes[i].charAt(0)
    }

    email += partes[tam -1] + "@empresa.com.br";
    outEmail.textContent = "Email: " + email.toLowerCase()
}

btnGerar.addEventListener("click", gerarEmail)