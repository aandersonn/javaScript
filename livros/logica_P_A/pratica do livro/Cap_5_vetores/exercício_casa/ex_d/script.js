const inNoticia = document.getElementById("inNoticia");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnListar = document.getElementById("btnListar");
const outNumeroDeNoticias = document.getElementById("outNumeroDeNoticias");
const outNoticias = document.getElementById("outNoticias");

let noticias = [];

function adicionarNoticias() {
    let noticiaCadastrada = inNoticia.value;

    if(noticiaCadastrada == '') {
        alert("Adicione alguma notícia!");
        inNoticia.focus();
        return
    }

    noticias.push(noticiaCadastrada);

    let lista = '';

    for(let index = 0; index < noticias.length; index++) {
        lista = `Número de notícias cadastrada: ${index + 1}`
    }

    inNoticia.value = '';
    inNoticia.focus();

    outNumeroDeNoticias.textContent = lista
}

btnAdicionar.addEventListener("click", adicionarNoticias)

function listarNoticias() {
    let mostrarNoticia = Number(prompt('Quantos notícias você gostaria de ver?'));
    let totalDeNoticias = noticias.length;

    if(mostrarNoticia == 0) {
        alert('Escolha um número menor ou igual ao de notícias cadastrada!')
        return
    }

    let ultimasNoticias = `${mostrarNoticia} Ultima(s) Notícia(s)\n------------- \n`;

    for(let i = totalDeNoticias - 1; i >= totalDeNoticias - mostrarNoticia; i--) {
        ultimasNoticias += `${i + 1}º) ${noticias[i]}\n`;
    }

    outNoticias.textContent = ultimasNoticias;
}

btnListar.addEventListener("click", listarNoticias)