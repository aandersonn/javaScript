//Função que vai executar a tarefa
function calcularPromocao() {
    //objetos que vão receber os dados de referência do formulário
    var inProduto = document.getElementById("inProdut");
    var inPreco = document.getElementById("inPreco");
    var outProduto = document.getElementById("outProduto");
    var outPromocao = document.getElementById("outPromocao");
    //objetos que vão receber os dados de entrada dos objetos anteriores através da propriedade value
    var produto = inProduto.value;
    var preco = Number(inPreco.value);
    //objetos que vão receber dados de entrada númericos e realizaram dois calculos
    var porcentagem = (preco * 50) / 100;
    var calculo = (preco * 2) + porcentagem;
    //objetos que receber os dados de entrada e vão exibir os mesmos na página web depois do click do botão
    outProduto.textContent = produto + " - Promoção: leve 3 por R$ " + calculo.toFixed(2);
    outPromocao.textContent = "O 3º produto custa apenas R$: " + porcentagem.toFixed(2);  
}
//objeto que vai receber a referência do botão
var btPromocao = document.getElementById("btPromocao");
//objeto do botão que vai executar a função acima
btPromocao.addEventListener("click", calcularPromocao);