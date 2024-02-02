const inModeloCarro = document.getElementById("inModeloCarro");
const inPreco = document.getElementById("inPreco");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnListar = document.getElementById("btnListar");
const btnFiltrar = document.getElementById("btnFiltrar");
const outLista = document.getElementById("outLista");

let carros = [];

function adicionarCarrro() {
    let modeloCarro = inModeloCarro.value;
    let precoCarro = inPreco.value;

    //Verifica a validade dos dados
    if(modeloCarro == '' || precoCarro == 0 || isNaN(precoCarro)) {
        alert("Preencha os dados corretamente!")
        inModeloCarro.value = '';
        inPreco.value = '';
        inModeloCarro.focus();
        return
    }

    //adiciona no array o carro e o preço
    carros.push({modelo: modeloCarro, preco: precoCarro, });
    inModeloCarro.value = '';
    inPreco.value = '';
    inModeloCarro.focus()   

    

}

btnAdicionar.addEventListener("click", adicionarCarrro)

    function listarCarros() {
        if(carros.length == 0) {
            alert("Não há carros listados!");
            return;
        }

        let lista = '';
        
        for(let index = 0; index < carros.length; index++) {
            //adiciona os carros à listagem
            lista += `${carros[index].modelo} - R$: ${(carros[index].preco).tofixed(2)}\n`
        }
        outLista.textContent = lista
    }

    btnListar.addEventListener("click", listarCarros)

    function filtrarCarros() {
        let valorMaximo = Number(prompt('Qual a faixa de preço do carro que procura!'));

        if(valorMaximo == 0 || isNaN(valorMaximo)) {
            return
        }

        let lista = '';

        for(let index = 0; index < carros.length; index++) {

            if(carros[index].preco <= valorMaximo) {
                lista += `${carros[index].modelo} - R$ ${(carros[index].preco).tofixed(2)}\n`
            }

            if(lista == '') {
                outLista.textContent = `Não há carros na faixa de R$: ${(valorMaximo).toFixed(2)}`
            } else {
                outLista.textContent = `Carros com preços até R$: ${valorMaximo.toFixed(2)}\n ------------------------------ \n ${lista} \n`
            }
        }
    }

    btnFiltrar.addEventListener('click', filtrarCarros)