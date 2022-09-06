function calcularImc (peso, altura) {

    return peso / (altura * altura);
    
    };
    
    function mostra(frase) {
            
            document.write(frase)
            pulaLinha();
        }
    
    var nome = prompt("Informe seu nome")
    var altura = prompt(nome + ", informe sua altura")
    var peso = prompt("Agora me informe seu peso")
    var imc = calcularImc(peso, altura)
    
    
    // document.write(nome + ", seu IMC calculado foi: " + imc)
    
    if (imc < 18.5){
        mostra(nome + ", seu IMC calculado foi: " + imc + ". Está abaixo do recomendado.")
    } if (imc > 35){
        mostra(nome + ", seu IMC calculado foi: " + imc + ". Está acima do recomendado.")
    } else if(imc >= 18.5 && imc <= 35) {
        mostra(nome + ", seu IMC calculado foi: " + imc + ". Parabéns! Está dentro do recomendado.")
    } else {
        mostra("Insira suas informações corretamente.")
    }