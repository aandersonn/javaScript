function exibirMoedas() {
    //Gera números aleatórios, entre 1 e 5, para cada moeda
    var num1_00 = Math.ceil(Math.random() * 5);
    var num0_50 = Math.ceil(Math.random() * 5);
    var num0_25 = Math.ceil(Math.random() * 5);
    var num0_10 = Math.ceil(Math.random() * 5); 

    //Cria referência ao local onde as imagens serão inseridas
    var divMoedas = document.getElementById("divMoedas");

    //texto alternativo das imagens (para questões de acessibilidade)
    var alt1_00 = "Moedas de um real";
    var alt0_50 = "Moedas de cinquenta centavos";
    var alt0_25 = "Moedas de vinte e cinco centavos";
    var alt0_10 = "Moedas de dez centavos";

    //Chama o método criar moedas passando os argumentos 
    criarMoedas(num1_00, divMoedas, "1_00.jpg", alt1_00, "moeda1_00");
    criarMoedas(num0_50, divMoedas, "0_50.jpg", alt0_50, "moeda0_50");
    criarMoedas(num0_25, divMoedas, "0_25.jpg", alt0_25, "moeda0_25");
    criarMoedas(num0_10, divMoedas, "0_10.jpg", alt0_10, "moeda0_10");

    console.log(divMoedas)
}

exibirMoedas() //chama o método exibir moedas

function criarMoedas(num, pai, moeda, textoAlt, classe) {
    //cria laço de repetição para inserir várias imagens de moedas na página
    for(var i = 1; i <= num; i++) {
        var novaMoeda = document.createElement("img"); //cria elemento img
        novaMoeda.src = "img/" + 
    }
} 
