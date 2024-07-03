function trocarClube() {
    var imgClub = document.getElementById("imgClub");
    var divTitulo = document.getElementById("divTitulo");

    var clube;

    if(rbBrasil.checked) {
        clube = "Brasil"
    } else if (rbPelotas.checked) {
        clube = "Pelotas"
    } else {
        clube = "Farroupilha"
    }

    divTitulo.className = "row-cores" + clube
}