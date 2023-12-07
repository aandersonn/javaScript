//função -> conjunto de instruções.
function calcularMedia() {
    //Cria referência aos elementos da página.
    var inNomeAluno = document.getElementById("inNomeAluno");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var outMedia = document.getElementById("outMedia");
    var outSituacao = document.getElementById("outSituacao");
    //Obtem os conteúdos dos campos de edição da página. 
    var nomeAluno = inNomeAluno.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);
    //Calcula a media das notas
    var media = (nota1 + nota2) / 2;
    //apresenta a média (altera o conteúdo do elemento outMedia)
    outMedia.textContent = "Média das notas: " + media.toFixed(1);
    //Cria a condição
    if(media >= 6) {
        //Altera o texto e a cor do elemento outSituacao
        outSituacao.textContent = "Parabens " + nomeAluno + "! Você foi aprovado(a)"
        outSituacao.style.color = "blue"    
    } else if (media >= 5) {
        outSituacao.textContent = "Atenção " + nomeAluno + "! Você está em Recuperação"
        outSituacao.style.color = "yellow"
    } else {
        outSituacao.textContent = "Se deu mal " + nomeAluno + "! Você foi reprovado(a)"
        outSituacao.style.color = "red"
    }
}
//Cria uma referêcia ao elemento btNota.
var btNota = document.getElementById("btNota");
//Registra um evento associado ao botão, para carregar uma função.
btNota.addEventListener("click", calcularMedia)