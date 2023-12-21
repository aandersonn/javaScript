//repetir a construção do código = 2/5
//construir o código = @    
//depuração de erros = @
//verificar todas as etapas com o console.log = @    
//passar a ideia do código para o papel = @     
//ler a explicação do livro = @

function hello(name) {
    let welcome = `Bem vindo ${name}`;
    write(welcome, 1);
}

function write(phrase, type) {
    switch(type) {
        case 1: 
            console.log(phrase);
            break
        case 2:
            alert(phrase);
            break
        default:
            document.write(phrase)
    }
}

hello("hcode")