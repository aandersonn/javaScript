const inPreco = document.getElementById("inPreco");
const btExibir = document.getElementById("btExibir");
const outParcelas = document.getElementById("outParcelas");

btExibir.addEventListener("click", function () {
    let preco = Number(inPreco.value);

    let lista = "";

    for (let i = 1; i <= 10; i++) {

        lista += i + "x de R$: " + (preco / i).toFixed(2) + "\n";
    }
    outParcelas.textContent = "Opções de pagamento\n\n" + lista
})