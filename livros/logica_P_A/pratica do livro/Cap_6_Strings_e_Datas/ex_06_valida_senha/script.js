const inSenha = document.getElementById("inSenha");
const btnSenha = document.getElementById("btnSenha");
const outResposta = document.getElementById("outResposta");

function verificarSenha() {
    let senha = inSenha.value;
    let erro = [];

    if(senha.length < 8 || senha.length > 15) {
        erro.push("Possuir entre 8 e 15 caracteres");

    }

    if(senha.match(/[0-9]/g) == null) {
        erro.push("Possuir números (no mínimo, 1)");
    }

    if(!senha.match(/[a-z]/g)) {
        erro.push("Possuir letras minúsculas (no mínimo, 1)");
    }

    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
        erro.push("Possuir letras maiúsculas (no mínimo, 2)");
    }

    if(!senha.match(/[\W|_]/g)) {
        erro.push("Possuir símbolos (No mínimo, 1");
    }

    if(erro.length == 0) {
        outResposta.textContent = "Ok, Senha válida!"
    } else {
        outResposta.textContent = "Erro... A senha deve" + erro.join(",")
    }
}

btnSenha.addEventListener("click", verificarSenha)