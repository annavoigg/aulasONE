function pulaLinha() {

    document.write("<br>")
    document.write("<br>")
}

function mostra(frase) {

    document.write(frase)
    pulaLinha();
}

// multiplicado por 10, porque sempre dá um numero como "0," e queremos um número de 0 a 10, então para isso precisamos multiplicar para a virgula andar uma casa decimal. para arredondar o número usamos o math.round 

var numeroPensado = Math.round(Math.random() * 10);

console.log (numeroPensado) 


var tentativas = 1;


while (tentativas <= 3) {

var chute = parseInt(prompt("Digite seu chute!"));

if(chute == numeroPensado) {

    mostra("Você ACERTOU, o número pensado era " + numeroPensado)
    break;

} else {
    
    mostra("Você ERROU!")

}     

tentativas++;

}
mostra("FIM DO JOGO.")