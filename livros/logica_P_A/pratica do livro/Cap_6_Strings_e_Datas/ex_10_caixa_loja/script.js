let inDataVencimento = document.getElementById("inDataVencimento");
let inValor = document.getElementById("inValor");
let inMulta = document.getElementById("inMulta");
let inJuros = document.getElementById("inJuros");
let inTotal = document.getElementById("inTotal");
let btnCalcular = document.getElementById("btnCalcular")
let btnNovaConta = document.getElementById("btnNovaConta");

const taxa_multa = 2 / 100;
const taxa_juros = 0.33 / 100;

function calcularMultaJuros() {
    let dataVenc = inDataVencimento.value;
    let valor = Number(inValor.value);

    if(dataVenc =="" || valor == 0 || isNaN(valor)) {
        alert("Informe corretamente os dados da conta...");
        inDataVencimento.focus;
        return
    }

    let hoje = new Date();
    let vencto = new Date();

    let partes = dataVenc.split("-");
    vencto.setDate(Number(partes[2]));
    vencto.setMonth(Number(partes[1]) -1);
    vencto.setFullYear(Number(partes[0]));

    let atraso = hoje - vencto;

    let multa = 0;
    let juros = 0;

    if(atraso > 0) {
        let dias = Math.round(atraso / 86400000);
        multa = valor * taxa_multa;
        juros = (valor * taxa_juros) * dias
    }

    let total = valor + multa + juros;
    inMulta.value = multa.toFixed(2);
    inJuros.value = juros.toFixed(2);
    inTotal.value = total.toFixed(2);
}

btnCalcular.addEventListener("click", calcularMultaJuros)

function limparCampos() {
    location.reload()
}
btnNovaConta.addEventListener("click", limparCampos)
