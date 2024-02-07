var inCrianca = document.getElementById("inCrianca");
var inIdade = document.getElementById("inIdade");
var btnAdicionar = document.getElementById("btnAdicionar");
var btnListar = document.getElementById("btnListar");
var btnFiltrar = document.getElementById("btnFiltrar");
var outLista = document.getElementById("outLista");

let criancas = [];

function adicionarBrinquedo() {
    let nome = inCrianca.value;
    let idade = Number(inIdade.value);

    if(nome == "" || idade == 0 || idade == "" || isNaN(idade)) {
        alert("Preencha os campos corretamente");
        inCrianca.value = "";
        inIdade.value = "";
        inCrianca.focus();
        return
    }

    criancas.push({nome: nome, idade: idade});
    inCrianca.value = "";
    inIdade.value = "";
    inCrianca.focus();

    listarCriancas()
}

btnAdicionar.addEventListener("click", adicionarBrinquedo);

function listarCriancas() {
    if(criancas.length == 0) {
        alert("Não há crianças cadastradas!");
        return
    }

    let lista = "";

    for(let index = 0; index < criancas.length; index++) {
        lista += `${criancas[index].nome} - ${criancas[index].idade} anos \n`;
    }

    outLista.textContent = lista;
}

btnListar.addEventListener("click", listarCriancas)

function resumirIdade() {
    if(criancas.length == 0) {
        alert("Não há crianças na lista!");
        return
    }

    let copia = criancas.slice();

    copia.sort(function(a, b) {
        return a.idade - b.idade
    })

    let resumo = "";

    let menorIdade = copia[0].idade;
    let nome = [];

    for(let index = 0; index < copia.length; index++) {
        if(copia[index].idade == menorIdade) {
            nome.push(copia[index].nome)
        } else {
            resumo += `${menorIdade} ano(s): ${nome.length} crianças - `;
            resumo += `${(nome.length / copia.length * 100).toFixed(2)} % \n`;
            resumo += `(${nome.join(", ")}) \n\n`;
            menorIdade = copia[index].idade;
            nome = [];
            nome.push(copia[index].nome);
        }
    }

    resumo += `${menorIdade} ano(s) ${nome.length} crianças -`
}