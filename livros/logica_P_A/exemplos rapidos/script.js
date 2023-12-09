//repetir a construção do código = 5/5
//construir o código = @    
//depuração de erros = @
//verificar todas as etapas com o console.log = @    
//passar a ideia do código para o papel = @     
//ler a explicação do livro = @

var inNumero = document.getElementById("inNumero");
var btExibir = document.getElementById("btExibir");
var outResposta = document.getElementById("outResposta");

function exibirEstrelas() {
    var numero = Number(inNumero.value);
    
    if(numero == 0 || numero == "" || isNaN(numero)) {
        alert("Informe um número natural válido!");
        inNumero.value = "";
        inNumero.focus();
        return
    };

    var estrelas = "";

    for(var index = 1; index <= numero; index++) {
        for(var i = 1; i <= index; i++) {
            estrelas += "*"
        };
        estrelas += "\n"
    };
    outResposta.textContent = estrelas
};
btExibir.addEventListener("click", exibirEstrelas)