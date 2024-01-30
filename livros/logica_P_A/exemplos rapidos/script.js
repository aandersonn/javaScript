var idade = [12, 16, 15, 17, 14];
var maiores = false;
for(i = 0; i < idade.length; i++){
    if(idade[i] >= 18) {
        alert(idade[i]);
        maiores = true
    }
}

if(!maiores) {
    alert("Não há idades de maiores na lista")
}



