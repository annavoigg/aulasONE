    
    // calculando imc 

    function pulaLinha(){

        document.write("<br>");
        document.write("<br>");
    }
    
    function mostra(frase) {
        
        document.write(frase);
        pulaLinha();
    }
    
    
    
    function calcularImc (peso, altura) {
    
    var imc = peso / (altura * altura);
    
    // return deixa disponivel o resultado carregado pela função 
    return imc;
    
    };
    
    //  é a mesma coisa que o exemplo abaixo, porque quando o return for devolver o resultad da função (calcularImc) ele lê a expressão tanto se estiver dentro da variavel quanto se estiver ao lado do proprio return e devolve por meio da função usada
    
    // function calcularImc (peso, altura) {
    
    // return peso / (altura * altura);
    
    // 
    
    // preparando a função para receber mais paramentos (ex: x, y e z)
    function somaImc (peso1, altura1, peso2, altura2, peso3, altura3) {
    
    var imc1 = peso1 / (altura1 * altura1);
    var imc2 = peso2 / (altura2 * altura2);
    var imc3 = peso3 / (altura3 * altura3);
    var imcTotal = imc1 + imc2 + imc3;
    
    mostra("A soma dos IMC's é: " + imcTotal);
    
    };
    
    var imcFlavio = calcularImc(73, 1.71);
    mostra ("O IMC de Flávio é: " + imcFlavio)
    
    var imcAmigo = calcularImc(68, 1.72);
    mostra ("O IMC do meu amigo é: " + imcAmigo)
    
    
    var imcTia = calcularImc(50, 1.62);
    mostra ("O IMC da minha tia é: " + imcTia)
    
    
    somaImc(73, 1.71,68, 1.72, 50, 1.62)
        
    // estudar programação funcional para aprender melhor sobre funções
    
    
        