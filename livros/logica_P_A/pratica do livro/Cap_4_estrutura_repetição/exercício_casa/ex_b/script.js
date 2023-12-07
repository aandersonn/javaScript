
//função: conjunto de códigos que vão executar alguma ação
function mostrarPrevisao() {

    //variáveis que vão receber as referências do html
    var inChinchilas = document.getElementById("inChinchilas");
    var inAnos = document.getElementById("inAnos");
    var outResposta = document.getElementById("outResposta");

    //variáveis que vão receber os valores dos dados das referências do html
    var chinchilas = Number(inChinchilas.value);
    var ano = Number(inAnos.value);

    //estrutura condicional, verificando se o campo Nº de chinchilas vai receber os dados corretos
    if(chinchilas == 0 || isNaN(chinchilas) || chinchilas % 2 != 0) {
        alert("Informe um número par natural válido no campo Nº de chinchilas!");
        inChinchilas.focus();
        return
    };
    //estrutura condicional, verificando se o campo Nº de anos vai receber os dados corretos
    if(ano == 0 || isNaN(ano)) {
        alert("Informe um número natural válido no campo Nº de anos!");
        inAnos.focus();
        return
    };

    //variável que vai receber um valor vazio para acumular dados na estrutura de repetição
    var repeticao = "";
    //variável que vai receber o valor 1. na estrutura de repetição irá se repetir ate atingir a mesma quantidade do campo Nº de anos
    var conAno = 1;

    //estrutura de repetição, contendo as variáveis acumuladoras 
    do {
        repeticao = repeticao + conAno + "º Ano: " + chinchilas + " Chinchilas \n";
        conAno++
        chinchilas = chinchilas * 3;
    } while(conAno <= ano);

    //objeto junto com a propriedade, alterando a tag vazia do html "pre"
    outResposta.textContent = repeticao
};

//variável que vai receber a referência do botão da função 
var btMostrar = document.getElementById("btMostrar");
//objeto junto com o método ouvinte, a função será executada quando o botão for clicado
btMostrar.addEventListener("click", mostrarPrevisao)