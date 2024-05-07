const inModelo = document.getElementById("inModelo");
const inFabricacao = document.getElementById("inFabricacao");
const inPropriedade = document.getElementById("inPropriedade");
const btCalcular = document.getElementById("btCalcular");
const outModelo = document.getElementById("outModelo");
const outPreco = document.getElementById("outPreco");

function classificarCalcularPreco() {
    let modelo = inModelo.value;
    let fabricacao = Number(inFabricacao.value);
    let propriedade = Number(inPropriedade.value);

    if(modelo == "" || fabricacao == 0 || propriedade == 0 || isNaN(fabricacao) || isNaN(propriedade)) {
        alert("Informe corretamente os dados do veículo");
        inModelo.focus();
        return
    }
    let classificacao = classificarVeiculo(fabricacao);
    let precoVenda = calcularVenda(propriedade, classificacao);

    outModelo.textContent = modelo + " - " + classificacao;
    outPreco.textContent = "Preço de venda R$: " + precoVenda.toFixed(2)
}

btCalcular.addEventListener("click", classificarCalcularPreco);

function classificarVeiculo(fabricacao) {
    let anoAtual = new Date().getFullYear();
    let classif;

    if(fabricacao == anoAtual) {
        classif = "Novo"
    } else if(fabricacao == anoAtual - 1 || fabricacao == anoAtual - 2) {
        classif == "Seminovo";
    } else {
        classif = "Usado"
    }
    return classif;
}

function calcularVenda(valor, status) {
    let prVenda = (status == "Novo") ? valor * 1.08 : valor * 1.10;
    return prVenda;
}