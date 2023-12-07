//Função do evento
function calcularPreco() {

    //Obtendo as referências de entrada e saída de dados
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outMedicamento = document.getElementById("outMedicamento")
    var outPreco = document.getElementById("outPreco")

    //Obtendo os valores de entrada
    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);

    //Calculo do valor de entrada
    var calculo = preco * 2;
    var arredondamento = Math.floor(calculo)

    //Inserindo os dados de entrada na página web
    outMedicamento.textContent = "Promoção de " + medicamento
    outPreco.textContent = "Leve dois por apenas R$: " + arredondamento.toFixed(2);
}

//Obtendo  referência do evento de click
var btCalculo = document.getElementById("btCalculo");

//funcionamento do evento de click
btCalculo.addEventListener("click", calcularPreco)

/* 
CONCEITO DOS ELEMENTOS:
- function -> função -> conjunto de instruções, para serem utilizadas em um determinado momento escolhido pelo programador;
- var -> variavel -> É um objeto capaz de reter e representar um valor ou expressão, tem a função de guardar dados na memória do computador;
- inMedicamento -> É o nome para representar um objeto criado pelo programador, esse nome vai receber os dados de uma referência, através do método getElementById;
- document -> documento -> É um objeto que possibilita fazer modificações no html;
- getElementById -> obtendo elemento por id -> é um método que retorna uma referência atravês de seu id;
- inPreco -> É o nome para representar um objeto criado pelo programador, esse nome  vai receber os dados de uma referência, através do método getElementById;
- outMedicamento -> É o nome para representar um objeto criado pelo programador, esse nome  vai receber os dados de uma referência, através do método getElementById;
- outPreco -> É o nome para representar um objeto criado pelo programador, esse nome  vai receber os dados de uma referência, através do método getElementById;
- Medicamento -> É o nome para representar um objeto criado pelo programador, esse nome  vai receber os dados do objeto inMedicamento através da propriedade value;
- value -> valor -> É uma propriedade que obtém ou altera elementos de um campo de formulário HTML;
- Propriedade -> É uma característica de um objeto, considerada uma função membro;
- Number -> número -> É metodo que permite trabalhar com valores numéricos;
- calculo -> É um nome qualquer para representar um objeto criado pelo programador, esse nome  vai receber os dados do objeto preco e irá ocorrer um cálculo matemático de multiplicação;
- arredondamento -> É  um nome qualquer para representar um objeto criado pelo programador, esse nome vai receber os dados do objeto calculo;
- Math -> É um objeto utilizado para realizar operações matematicas;
- floor -> É um método que retorna o maior inteiro de um número;
- outMedicamento -> É um nome qualquer criado pelo programador para ser um objeto, vai pegar os dados e com o auxilio da propriedade textContent vai inserir string e os dados do objeto medicamento na página web;
- textContent -> conteudo de texto -> É uma propriedade que obtem o conteúdo de texto dos elementos que possuem texto;
- bt calculo -> É um nome qualquer criado pelo programador para ser um objeto vai pegar a referência do campo de formulário utilizando a propredade getElementByid;
- addEventListener -> adicionar evento ouvinte -> É um método que vai processar a função calcular preco quando um click acontecer. 
*/