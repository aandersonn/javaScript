//Constante com nomes dos cavalos participantes do páreo
const cavalos = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

//Vetor que irá armazenar um objeto aposta (Com o Nº cavalo e o valor da aposta)
var aposta = [];

function adicionarAposta() {
    //Cria referência aos elementos inValor e outApostas
    //(inCavalo é referenciado em variável global na sequência do programa)
    var inValor = document.getElementById("inValor");

    var outApostas = document.getElementById("outApostas");
    //Obtém o nº do cavalo e valor da aposta
    var cavalo = Number(inCavalo.value);
    var valor = Number(inValor.value);
    //Valida os dados
    if(isNaN(cavalo) || isNaN(valor) || valor == 0 || !validarCavalo(cavalo)) {
        alert("Aposta inválida!");
        inCavalo.focus();
        return
    }

    //Adiciona ao vetor de objetos (atributos cavalo e valor)
    aposta.push({cavalo: cavalo, valor: valor});

    //Variável para exibir a lista das apostas realizadas
    var lista = "Apostas realizadas\n------------------------------\n";

    //Percorre o vetor e concatena em lista as apostas realizadas 
    for (var i = 0; i < aposta.length; i++) {
        lista += "N° " + aposta[i].cavalo + " " + obterCavalo(aposta[i].cavalo);
        lista += " - R$ " + aposta[i].valor.toFixed(2) + "\n";
    }
    outApostas.textContent = lista; //exibe a lista das apostas
}