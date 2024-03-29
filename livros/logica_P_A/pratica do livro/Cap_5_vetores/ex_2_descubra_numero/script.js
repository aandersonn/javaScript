const inNumero = document.getElementById("inNumero");
const btnApostar = document.getElementById("btnApostar");
const btnJogarNovamente = document.getElementById("btnJogarNovamente");
const outErros = document.getElementById("outErros");
const outChances = document.getElementById("outChances");
const outDica = document.getElementById("outDica");

let erros = [];
let numeroGerado = Math.floor(Math.random() * 100) + 1;
const numeroDeChances = 6;

function apostarNumero() {
    let numeroApostado = Number(inNumero.value);

    //Checa a validade do número
    if(numeroApostado <= 0 || numeroApostado > 100 || isNaN(numeroApostado)) {
        alert("Informe um número válido");
        inNumero.value = "";
        inNumero.focus();
        return
    }

    //Caso a pessoa acerte o número
    if(numeroApostado == numeroGerado) {
        alert("Parabéns você acertou o número!");
        btnApostar.disabled = true;
        btnJogarNovamente.className = 'exibe';
        outDica.textContent = `O número sortteado foi: ${numeroGerado}`

        //caso não acerte, terá duas opções: O número de chances acabar ou apostar em um número repetido
    } else {
        //Verifica se o número é repetido
        if(erros.indexOf(numeroApostado) >= 0) {
            alert(`Você já apostou o número ${numeroApostado}. tente outro número...`  );

            //atualiza as chances até acabar as chances do jogador
        } else {
        erros.push(numeroApostado);
        let numeroDeErros = erros.length;
        let chancesRestantes = numeroDeChances - numeroDeErros;

        outErros.textContent = `${numeroDeErros} (${erros.join(', ')})`;
        outChances.textContent = chancesRestantes;

        if(chancesRestantes == 0) {
            alert("Suas chances acabaram, reinicie o jogo para tentar novamente!");
            btnApostar.disabled = true;
            btnJogarNovamente.className = 'exibe';
            outDica.textContent = `Game over !! Número sorteado ${numeroGerado}`

            //Dá uma dica se o número é maior ou menor do que o apostado.
        } else {
            let dica = numeroApostado < numeroGerado ? 'Maior': 'Menor';
            outDica.textContent = `Dica: tente um número ${dica} que o número ${numeroApostado}`;
        }
     } 
    }  
    inNumero.value = "";
    inNumero.focus(); 
}

btnApostar.addEventListener('click', apostarNumero);

function reiniciarJogo() {
    location.reload();
}

btnJogarNovamente.addEventListener('click', reiniciarJogo)



