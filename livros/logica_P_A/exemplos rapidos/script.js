var palavra = "#SenhA_123!";
var vetor1 = palavra.match(/[a-z]/g);
console.log(vetor1);

var vetor2 = palavra.match(/[A-Z]/g);
console.log(vetor2);

var vetor3 = palavra.match(/[0-9]/g);
console.log(vetor3);

var vetor4 = palavra.match(/\W|_/g);
console.log(vetor4);

var vetor5 = palavra.match(/[T-Z]/g)
console.log(vetor5);

