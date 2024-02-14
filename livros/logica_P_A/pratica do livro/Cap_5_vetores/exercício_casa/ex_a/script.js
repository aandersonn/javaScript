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

    for(let index = 0; index < todosClubes.length; index++) {
        listaDeClubes += `${index + 1}. ${todosClubes[index]}\n`
    }
    outLista.textContent = listaDeClubes;
}

btnListar.addEventListener("click", listarClube);

function mostrarTabela() {
    let jogos = '';
    let ultimoClube = todosClubes[todosClubes.length - 1];

    if((todosClubes.length % 2) !== 0 || todosClubes.length == 0) {
        alert('Adicione mais um clube para mostrar a tabela de jogos');
        inClube.focus();
        return
    }

    for(let index = 0; index < (todosClubes.length - 1) / 2; index++) {
        jogos += `${todosClubes[index]} x ${ultimoClube - index}\n`
    }

    outLista.textContent = jogos
}

btnTabela.addEventListener("click", mostrarTabela)