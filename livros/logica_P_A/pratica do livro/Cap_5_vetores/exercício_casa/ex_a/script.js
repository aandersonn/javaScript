const inClube = document.getElementById("inClube");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnListar = document.getElementById("btnListar");
const btnTabela = document.getElementById("btnTabela");
const outLista = document.getElementById("outLista");

let todosClubes = [];

function adicionarClube() {
    let clube = inClube.value;

    if(clube == '') {
        alert("Preencha o campo corretamente");
        inClube.value = '';
        inClube.focus();
        return
    }

    todosClubes.push(clube);
    inClube.value = '';
    inClube.focus();

    listarClube()
}

btnAdicionar.addEventListener("click", adicionarClube);

function listarClube() {
    if(todosClubes.length == 0) {
        alert("Não há clubes adicionados!");
        return
    }

    let listaDeClubes = '';

    for(let index = 0; index < todosClubes.length; index++)
}