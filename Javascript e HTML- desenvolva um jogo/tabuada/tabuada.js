           
    function pulaLinha() {
        
        document.write("<br>")
        document.write("<br>")
    }

    function mostra(frase) {
        
        document.write(frase)
        pulaLinha();
    }

    var multiplicador = 1;

    // while (multiplicador <= 10){

    //     mostra(7 * multiplicador)
    //     multiplicador ++
    // }
    // mostra("Fim?!?!?!")

    // ----------------------- for 

    // repetiçao com for 

    // for é uma estrutura com 3 espaços, cada um deles separado por ';'. a variável ocupa um desses espaços, o segundo espaço é ocupado pela condição pra ele saber se deve repetir. o terceiro espaço é ocupado com o incremento da variável (++, +1 ou o que for necessário adicionar na repetição do programa )



    for (var multiplicador = 1; multiplicador <= 10; multiplicador ++){
        mostra(7 * multiplicador)
    }
    mostra("Fim?!?!?!")
