let itens = [];
function trocarItem() {
    let inPizza = document.getElementById("inPizza");
    let inBebida = document.getElementById("inBebida");

    if(rbPizza.checked) {
        inBebida.className = "oculta";
        inPizza.className = "exibe";

    } else {
        inPizza.className = "oculta";
        inBebida.className = "exibe";
    }
}

let rbPizza = document.getElementById("rbPizza");
rbPizza.addEventListener("change", trocarItem)

function mostrarNumSabores() {
    if(inPizza.checked) {
        let inPizza = document.getElementById("inPizza");
        let pizza = inPizza.value;
        let num = (pizza == "Média") ? 2 : (pizza == "Grande") ? 3 : 4;
        inDetalhes.placeholder = "Até " + num + " Sabores"
    }
}

let inDetalhes = document.getElementById("inDetalhes");
inDetalhes.addEventListener("focus", mostrarNumSabores);

inDetalhes.addEventListener("blur", function() {
    inDetalhes.placeholder = "";
})

inDetalhes.addEventListener("keypress", function(tecla) {
    if(tecla.keyCode == 13) {
        adicionarItem()
    }  
})

function adicionarItem() {
    let inPizza = document.getElementById("inPizza");
    let inBebida = document.getElementById("inBebida");
    let outPedido = document.getElementById("outPedido");

    if(rbPizza.checked) {
        let num = inPizza.selectedIndex;
        let produto = inBebida.options[num].text;
    }
    let detalhes = inDetalhes.value;
    itens.push(produto + "(" + detalhes + ")");
    outPedido.textContent = itens.join("\n");
    limparCampos();
}

let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarItem);

function limparCampos() {
    rbPizza.checked = true;
    inBebida.className = "oculta";
    inPizza.className = "exibe";
    inPizza.selectedIndex = 0;
    inDetalhes.value = "";
    rbPizza.focus();
    }
