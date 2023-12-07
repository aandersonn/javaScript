function revendaVeiculo() {
    // Cria referência aos elementos manipulados pelo programa.
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    console.log(inPreco);
    var outVeiculo = document.getElementById("outVeiculo");
    var outPreco = document.getElementById("outPreco");
    var outSaldo = document.getElementById("outSaldo");
    //Obtem conteúdo dos campos de entrada.
    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);
    //Calcula o valor de entrada e das parcelas.
    var entrada = (preco * 50) / 100;
    var saldo = entrada / 12;
    //Altera o conteúdo dos parágrafos de resposta
    outVeiculo.textContent = "Promoção: " + veiculo;
    outPreco.textContent = "Entrade de R$: " + entrada.toFixed(2);
    outSaldo.textContent = "+ 12x d R$: " + saldo.toFixed(2);
}
//Cria uma referência ao botão btPromocao.
var btPromocao = document.getElementById("btPromocao");
//Registra um avento associado ao botão, para carregar uma função;
btPromocao.addEventListener("click", revendaVeiculo);

/*
CONCEITOS DE CADA ELEMENTO CONTIDO NO CÓDIGO:
function - função -> conjunto de instruções que realiza uma tarefa ou calcula valores;
revendaVeiculo -> nome qualquer para definir uma função;
() - parâmetro -> são dados enviados quando é chamada a função que este parâmetro está associado;
{} - bloco -> é onde fica contido um código local;
var - variável -> é um objeto capaz de reter e representar uma expressão;
objeto -> é algo que pode ser sentido, tudo é considerado um objeto que contém coleções de propriedades;
propriedades -> são funções membros, características de um objeto definido;
inVeiculo -> é um nome qualquer dado a uma variavel se tornando um objeto criado pelo programador;
document - documento -> é um objeto do documento da pagina web;
getElementById - Obter elemento por id -> é um método que faz referência a um elemento do código HTML;
método -> é uma sub-rotida que é executada por um objeto ao receber uma mensagem;
inPreco -> é um nome qualquer dado a uma variavel se tornando um objeto criado pelo programador;
outVeiculo -> é um nome qualquer dado a uma variavel se tornando um objeto criado pelo programador;
outPreco -> é um nome qualquer dado a uma variavel se tornando um objeto criado pelo programador;
outSaldo -> é um nome qualquer dado a uma variavel se tornando um objeto criado pelo programador;
veiculo -> é um nome qualquer dado a uma variavel se tornando um objeto criado pelo programador;
value -> obtem ou altera o cinteúdo de um campo de formulário do HTML;
entrada -> é um nome qualquer dado a uma variavel se tornando um objeto criado pelo programador;
* -> operador aritmético de multiplicação;
/ -> operador aritmética de divisão;
textContent - conteúdo de texto -> propriedade que obtem o conteúdo de texto dos elementos;
"" - string - corda -> as aspas serve para colocar texto que vai aparecer na página web;
btPromoção - nome qualquer dado a uma variável se tornando um objeto criado pelo programador;
addEventListener -adicionar ouvinte de evento -> é um método que permite que funções sejam chamados quando um evento de click aocnteça;
click -> simula o click do mouse em um elemento;

PASSO A PASSO:
1º o formulária é preenchido na página web;
2º a informação é passada para as variáveis "inVeiculo e inPreco";
3º as variaveis "veiculo e preco" vão obter a informacao das variaveis "inVeiculo e inPreco" atraves da propriedade value;
4º antes de ser obtida pela variável "preco" a informacao da variável "inPreco" vai ser convertida de string para número;
5º a variavel "preco" vai passar por um cálculo, que é achar 50% de "preco" depois ser inserida na variável entrada;
6º a variavel "preco" vai passar por outro cálculo, achar a divisão em 12x do restante do 50% e ser inserida na variável saldo;
7º a informção que está na variável "veiculo" vai ser tranferida para o objeto outVeiculo através da propriedade textContent, aparecendo em um parágrafo na página web depois do click do botão;
8º simultaneamente vai aparecer o valor de entrada, que é 50% do total do preço do carro e em seguida os outros 50% dividido em 12X.
*/



