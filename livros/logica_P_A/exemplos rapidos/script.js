//repetir a construção do código = 1/5
//construir o código = @    
//depuração de erros = @
//verificar todas as etapas com o console.log = @    
//passar a ideia do código para o papel = @     
//ler a explicação do livro = @

function teste(valor) {
    let cont = 0;

    while(valor < 50000) {
        //valor = valor + 2
        valor += 2
        //cont = cont + 1
        cont++

        if(valor % 2 == 1) {
            continue
        }

        if(cont > 200) {
            console.log("Não foi possível processar todos os dados");
            break
        }
    }
    console.log("cont: " + cont)
    console.log("valor: " + valor)
}
