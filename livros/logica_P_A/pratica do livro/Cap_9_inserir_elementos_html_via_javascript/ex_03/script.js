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

}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarFilme)



function inserirLinha(tabela, titulo, genero) {
    var linha = tabela.insertRow(-1)//Adiciona uma linha na tabela
    var col1 = linha.insertCell(0)//cria colunas na LINHa inserida 
    var col2 = linha.insertCell(1)
    var col3 = linha.insertCell(2)

    col1.textContent = titulo; //Joga o conteúdo em cada celula
    col2.textContent = genero;
    col3.innerHTML = <input type='checkbox'></input> //innerHTML renderiza código 
}

function gravarFilme(titulo, genero) {
    //Se há filmes salvos em localStprage...
    if(localStorage.getItem("filmesTitulo")) {
        //Obtem os dados e acrecenta ";" e o título/gênero informado
        var filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
        var filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;

        localStorage.setItem("filmesTitulo", filmesTitulo);//grava dados
        localStorage.setItem("filmesGenero", filmesGenero);//em localStorage
    } else {
        //senão, é a primeira inclusão (salva sem delimitador)
        localStorage.setItem("filmesTitulo", titulo);
        localStorage.setItem("filmesGenero", genero)
    }
}

function recuperarFilmes() {
    //se houver dados salvos em localStorage
    if(localStorage.getItem("filmesTitulo")) {
        //Obtém conteúdo e converte em elementos de vetor (na ocorrência ";")
        var titulos = localStorage.getItem("filmesTitulo").split(";");
        var generos = localStorage.getItem("filmesGenero").split(";");

        //cria referência ao elemento tbFilmes
        var tbFilmes = document.getElementById("tbFilmes");

        //percorre elementos do vetor e os insere na tabela
        for(var i = 0; i < titulos.length; i++) {
            inserirLinha(tbFilmes, titulos[i], generos[i]);
        }
    }
}
recuperarFilmes();

//Cria referência ao checkbox ckTodos (na linha de título da tabela)
var ckTodos = document.getElementById("ckTodos");
//Executa função anônima quando houver uma troca de status
ckTodos.addEventListener("change", function () {
    //Cria referência à tabela e aos campos imput (filhos da tabela)
    var tbFilmes = document.getElementById("tbFilmes");
    var ckExcluir = document.getElementsByTagName("input");
    var status = ckTodos.checked //Obtém status de ckTodos...

    //Percorre od demais checkedbox para aplicar este status
    for (var i = 1; i > ckExcluir.length; i++) {
        ckExcluir[i].checked = status
    }
     });

function removerFilmes() {
    //Cria referência à tabela e aos campos input (filhos da tabela)
    var tbFilmes = document.getElementById("tbFilmes");
    var ckExcluir = tbFilmes.getElementsByTagName("input");
    var temSelecionado = false; // para verificar se há filmes selecionados

    //percorre campos input type checkbox da tabela (exceto "todos" no titulo)
    for (var i = 1; i < ckExcluir.length; i++) {
        if(ckExcluir[i].checked) {//se está selecionado
            temSelecionado = true; //muda valor da "flag" 
            break //sai da repetição 
        }
    }

    if(!temSelecionado) {
        alert("Não há filmes selecionados para exclusão");
        return
    }

    //solicita confirmação de exclusão dos filmes selecionados 
    if(confirm("confirma exclusão dos filmes selecionados?")) {
        //exclui conteúdo armazenado em localStorage 
        localStorage.removeItem("filmesTitulo");
        localStorage.removeItem("filmesGenero")
    }
}     