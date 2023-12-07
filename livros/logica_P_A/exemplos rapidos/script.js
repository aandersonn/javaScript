//repetir a construção do código = 3/5
//construir o código = @    
//depuração de erros = @
//verificar todas as etapas com o console.log = @    
//passar a ideia do código para o papel = @     
//ler a explicação do livro = @

var inNumero = document.getElementById("inNumero");
var outResposta = document.getElementById("outResposta");
var btExibir = document.getElementById("btExibir");

function exibirEstrelas() {
    var numero = Number(inNumero.value);

    if(numero == 0 || numero == "" || isNaN(numero)) {
        alert("Informe um número natural válido")
        inNumero.value = "";
        inNumero.focus();
        return
    };

    var estrela = "";

    for(var index = 1; index <= numero; index++) {
        for(var i = 1; i <= index; i++) {
            estrela += "*"
        }
        estrela += "\n";
    };

}
