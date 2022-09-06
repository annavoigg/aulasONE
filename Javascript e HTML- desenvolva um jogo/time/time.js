    
    function pulaLinha() {
        
        document.write("<br>")
        document.write("<br>")
    }

    function mostra(frase) {
        
        document.write(frase)
        pulaLinha();
    }

    // dentro do prompt, os numeros inseridos sempre são lidos como uma string, então ele converte a string que contém numero para realmente um número. porém a concatenação dá errado, ele apenas junta a primeira operação (de vitorias vezes 3) com o número colocado nos empates. por ex: vitorias = 3 (isso vai resultar em nove se multiplicado por tres) e empates = 1, vai simplesmente concatenar como: 91

    var anoPassado = parseInt(prompt("Qual foi a pontuação do seu time no ano passado?"))

    var vitorias = parseInt(prompt("Entre com o número de vitórias."))

    // com parseInt garantimos que o js leia como um numero o que for inserido dentro do prompt 

    var empates = parseInt(prompt("Entre com o número de empates."))

    var pontos = (vitorias * 3) + empates;

    // mostra("Seu time está pior do que o ano passado.")

    if (pontos>anoPassado){
        mostra("Seu time tem um total de " + pontos + " pontos. Está melhor do que o ano passado!");
    } else if (pontos == anoPassado){
        mostra("Seu time tem um total de " + pontos + " pontos. Está igual ao ano passado.");
    } else {
        mostra("Seu time tem um total de " + pontos + " pontos. Está pior do que o ano passado.");
    }

   
