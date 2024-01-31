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
            lista += `${carros[index].modelo}`
        }
    }