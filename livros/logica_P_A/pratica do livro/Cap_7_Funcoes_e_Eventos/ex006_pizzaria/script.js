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
    
})