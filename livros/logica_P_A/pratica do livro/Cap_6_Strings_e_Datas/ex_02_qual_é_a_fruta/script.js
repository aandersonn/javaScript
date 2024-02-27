let inFruta = document.getElementById("inFruta");
let btnMontar = document.getElementById("btnMontar");
let outDica = document.getElementById("outDica");

function montarDica() {
    const fruta = inFruta.value;

    if(fruta == "") {
        alert("Informe a fruta ...");
        inFruta.focus();
        return
    }

    let resposta = fruta.charAt(0);
    let estrela = "*";
    let tam = fruta.length;

    for(let i = 1; i < tam; i++) {
        if(fruta.charAt(i) == fruta.charAt(0)) {
            resposta += fruta.charAt(0);
        } else {
            resposta += "_"
        }
        estrela += "+"
    }
    outDica.textContent = resposta;
    inFruta.value = estrela
}

btnMontar.addEventListener("click", montarDica)