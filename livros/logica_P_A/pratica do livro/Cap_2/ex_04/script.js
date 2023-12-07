//Função
function calcularPreco() {

    //Cria referência aos elementos da página
    var inValor = document.getElementById("inValor");
    var inConsumo = document.getElementById("inConsumo");
    var outPagar = document.getElementById("outPagar");

    //Obtem o conteúdo dos campos de entrada
    var valor = Number(inValor.value);
    var consumo = Number(inConsumo.value);

    //Calculo valor a ser pago
    var pagar = valor * (consumo / 1000);

    //Altera o conteúdo da linha de resposta
    outPagar.textContent = "Valor a pagar R$: " + pagar.toFixed(2)
}

//Cria referência ao elemento calculo
var calculo = document.getElementById("calculo");

//Registra um evento associado ao botão, para carregar uma função
calculo.addEventListener("click", calcularPreco)

/*
CONCEITO DE CADA ELEMENTO:
- function -> função -> Conjunto de instruções, que podem ser utilizadas quando chamadas;
- var -> variável -> é um objeto que tem a função de guardar dados e se apresentar quando chamados;
- objeto -> tudo o que é real, conjunto de propriedades;
propriedades -> características de um objeto;
- inValor -> objeto criado, vai guardar a referência "inValor", elemento de entrada feita pelo getElementById;
- document -> documento -> é o objeto para acessar o html;
- getElementById -> obter elemento pelo id -> é um método que vai buscar a referência no código html pelo id;
- inConsumo -> objeto criado, vai guardar a referência "inConsumo", elemento de entrada feita pelo pelo id;
- outPagar -> objeto criado, vai guardar a referência "outPagar", elemento de saída feita pelo id;
- valor -> objeto criado, vai receber o valor do objeto invalor através da propriedade value; 
- number -> É um método que tem a função de converter string em número;  
- value -> É uma proriedade, que obtem ou altera a área de formulário do html;
- consumo -> objeto criado, vai receber o valor do objeto inConsumo através da propriedade value;
- pagar -> objeto criado, vai receber os objetos "valor" e "propriedade", fazendo um calculo;
- textContent -> conteúdo de texto -> É uma propriedade que obtêm valor textual de tags que contém texto como conteúdo;
- calculo -> Objeto criado, vai receber a referencia do id "calculo"
- addEventListener -> adicionar evento ouvinte -> método que executa alguma ação quando um evento é realizado;
- click -> clique -> tá informando que o evento vai ser de click.

PASSO A PASSO:
1º É inserido as informações no formulário, o preço do quilo da carne e a quantidade que foi consumido em gramas;
2º no javaScript as informações vão ser obtidas primeiro pela referência id e depois pela propriedade value;
3º vai ser calculado o valor da carne multiplicado pela quantidade em gramas que vai ser convertido em quilos "valor * (gramas / 1000)";
4º o resultado vai ser inserido em uma variavel
5º quando acontecer o clique a prorpriedade textContent vai colocar o resultado na página web.
*/ 

