//Declara a função mostrarOla
function mostrarOla() {
    //obtém o conteúdo do campo (com id=) nome
    var nome = document.getElementById("nome").value;
    //exibe o parágrafo (resposta): "Olá " e o nome informado
    document.getElementById("resposta").textContent = "Olá, " + nome;
}
//cria uma referência ao botão (com id=) mostrar
var mostrar = document.getElementById("mostrar");
//registra para o botão "mostrar" um ouvinte para o evento click,
//que ao ser clicado irá chamar a função mostrarOla 
mostrar.addEventListener("click", mostrarOla);

//mostrar ola -> função, conjunto de instruções que executa uma tarefa;
//var nome -> variavel, guarfa dados no computador;
//document -> objeto, faz ter acesso ao DOM(document object model);
//getElementById() -> método, permite obter o conteúdo do seu elemento HTML atraves do id, são objetos com definição function;
//value -> obtem ou altera o conteúdo do campo de formulário HTML;
//textContent -> Propriedade que retorna o conteúdo textual de uma tag HTML;
//addEventListener -> método, adicionar ouvinte de evento, permite que você configure função quando um determinado evento acontece.

//passo a passo:
//1º passo -> é digitado um nome qualquer no input tipo texto, que é armazenado na variável nome, que está dentro da função mostrarOla;
//2º passo -> essa variavel é preparada para ser retornada a página web junto com a string olá;
//3º passo -> fora da função mostrar olá, vai ser criada outra variavel mostrar;
//4º passo -> é adicionado o metodo eventLister, quando o click do butão acontecer vai aparecer a string "olá" + a variavel nome no parágrafo com a id resposta.