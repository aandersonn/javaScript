function converterDuracao() {
    //Cria referência aos elementos da página.
    var inTitulo = document.getElementById("inTitulo");
    var inDuração = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta");

    //Obtem conteúdos dos campos de entrada.
    var titulo = inTitulo.value;
    var duracao = Number(inDuração.value);

    //Arredonda para baixo o resultado da divisão.
    var horas = Math.floor(duracao / 60);

    //Obtem o resto da divisão entre os números.
    var minutos = duracao % 60

    //altera o conteúdo nos parágrafos de resposta.
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + "Hora(s)" + minutos + "Minuto(s)"
}

//Cria uma referência ao elemento btConverter(botão).
var btConverter = document.getElementById("btConverter");
//registra um evento associado ao botão, para carregar uma função;
btConverter.addEventListener("click", converterDuracao)

/*
DEFINIÇÃO DE CADA ELEMENTO:
- function -> função -> é um recipiente de códigos, esses códigos são guardados dentro da função para serem utilizados em outro momento;
- var -> variavel -> guarda dados e informação dentro do computador, ocupando um espaço;
- document -> documento -> é um objeto que da acesso a arvore DOC da página;
- getElementById -> obter elemento por id -> é um método que é uma função com propriedades de um objeto, pega a referência que está na tag com o atributo id.
- value -> valor -> obtem ou altera um elemento no campo de formulário;
- Number -> é metodo que é uma função com o papel de converter strings em numeros;
- Math -> é um objeto utilizado em operações matemáticas;
- floor -> é um método utilizado junto com o Math, faz o arredondamento de números decimais, um número inteiro;
- / -> operador aritmético de divisão;
- % -> operador aritmético modulo -> tras o resto da divisão;
- textContent -> obtem o conteúdo de todos os elementos;
- addEventListiner -> permite a configuração de funções a serem chamadas quando algum evento acontece;

PASSO A PASSO:
1º passo - O usuario vai inserir o titulo do filme e a duração dentro da estrutura html;
2º passo - No javaScript esses dados vão ser referenciados pelo método getElementById através da id inTitulo, inDuracao e colocado dentro das variáveis inTitulo e inDuracao;
3º passo - essas duas variáveis (inTitulo e inDuracao) estão dentro de uma função junto com outras duas variaveis (outTitulo e outDuracao) que vieram da referência id: outTitulo e outDuracao;
4º passo - o valor das duas variáveis in's vai ser obtido pela proprieddade value e inserido em outras duas variáveis titulo e duração.
5º passo - e converter o valor da duração em horas e minutos, que é dividindo a duração por 60 dentro do objeto math e do metodo floor para obter as horas e os minutos é a duração modulo por 60;
6º passo - as variaveis outTitulo e outDuracao vão ser inseridas como objetos com a propriedade tecContent com o valor da varável titulo, horas e minutos;
7º passo - fora da função vai ser criada outra variável converter com o valor da referência id converter;
8º passo - a variavel converter vai ser inserida como objeto com o método addEventListener com os valores click e converterDuração;
9º passo - quando o butão for clicado, abaixo do mesmo vai aparecer o titulo do filme e a duração convertida em horas e minutos; 
*/ 