            
    function pulaLinha() {
        
        document.write("<br>")
        document.write("<br>")
    }

    function mostra(frase) {
        
        document.write(frase)
        pulaLinha();
    }



    var totalFamiliares = parseInt(prompt("Qual a quantidade de familiares?"));
    
    var numero = 1;

    var totalIDades = 0;
   
    
    while (numero <= totalFamiliares) {

        var idade = parseInt(prompt("Informe a idade do familiar")) 

        totalIDades = totalIDades + idade

        numero++

    }
        var mediaIdades = totalIDades / totalFamiliares;

    mostra("A média das idades é: " + mediaIdades)
