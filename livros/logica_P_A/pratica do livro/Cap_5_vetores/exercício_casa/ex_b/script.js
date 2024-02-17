const inNumero = document.getElementById("inNumero");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnVerificar = document.getElementById("btnVerificar");
const outNumeros = document.getElementById("outNumeros");
const outTexto = document.getElementById("outTexto");

let todosNumeros = [];

function adicionarNumero() {
    let numero = Number(inNumero.value);

    if(inNumero.value == '' || todosNumeros.indexOf(numero) >= 0 || isNaN(numero)) {
        alert("Digite um número válido");
        inNumero.value = '';
        inNumero.focus();
        return;
    }

    let listaDeNumeros = '';
    todosNumeros.push(numero);
    let primeiroNumero = todosNumeros[0];

    for(let index = 1; index < todosNumeros.length; index++) {
        listaDeNumeros += `, ${todosNumeros[index]}`;

    }

    outNumeros.textContent = `Números: ${primeiroNumero}${listaDeNumeros}`;
    outTexto.textContent = '';
    inNumero.value = '';
    inNumero.focus();
}

btnAdicionar.addEventListener("click", adicionarNumero)

function verificarOrdem() {
    if(todosNumeros.length == 0) {
        alert("Adicione algum Número!");
        return
    }

    for(let index = 0; index < todosNumeros.length -1; index++) {
        if(todosNumeros[index] < todosNumeros[index + 1]) {
            outTexto.textContent = 'Os números estão em ordem crescente!'
        } else {
            outTexto.textContent = 'Atenção... Os números não estão em ordem crescente!'
        }
    }
}

btnVerificar.addEventListener("click", verificarOrdem)