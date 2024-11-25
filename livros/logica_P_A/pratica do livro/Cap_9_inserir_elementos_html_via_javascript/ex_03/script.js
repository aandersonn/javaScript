function adicionarFilme() {
    //Criar referência aos campos de entrada
    var inTitulo = document.getElementById("inTitulo");
    var inGenero = document.getElementById("inGenero");
    var titulo = inTitulo.value; //Obtém conteúdo dos campos
    var genero = inGenero.value;

    //Valida preenchimento
    if(titulo == "" || genero == "") {
        alert("Informe corretamente os dados");
        inTitulo.focus();
        return
    }

    //Cria referência ao elemento tbFilme
    var tbFilme = document.getElementById("tbFilme");
    
    //Chama function que irá inserir filme na tabela
    inserirLinha(tbFilme, titulo, genero);

    //Chama function que irá gravar dados em localStorage
    gravarFilme(titulo, genero)

    inTitulo.value = "";//Limpa o campo de entrada
    inGenero.value = "";
    inTitulo.focus()//posiciona o cursor em inTitulo

    console.log(inTitulo, inGenero, titulo, genero, tbFilme)
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarFilme)

adicionarFilme()

function inserirLinha(tabela, titulo, genero) {

}