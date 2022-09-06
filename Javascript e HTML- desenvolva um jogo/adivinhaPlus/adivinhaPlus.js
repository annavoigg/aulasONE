function sorteia(){
    return Math.round(Math.random() * 10);
}

// tudo que é declarado dentro das funções só existe dentro da função 

// como parametros usamos a variavel que armazenada o numero 3, como quantidade de segredos que queremos gerar aleatoriamente que não possam ser repetidos

function sorteiaNumeros(quantidade){

    var segredos = [];

    var numero = 1;

    while(numero <= quantidade){

        var numeroAleatorio = sorteia();

        if(numeroAleatorio !== 0) {

        var achou = false

        for (var posicao = 0; posicao < segredos.length; posicao++) {

            if (segredos[posicao] == numeroAleatorio){

                achou = true;

                break;
            }
        }

        if (achou == false){

            segredos.push(numeroAleatorio);
            numero++;
        }

        
    }

        }

    return segredos;

}

var quantidade = 3;


// criando um array para armazenar vários dados

// por regra, o numero de itens dentro de um array começa em 0. por ex: se eu quiser selecionar o primeiro número dentro do meu array, preciso entrar com o número 0, se eu quiser selecionar o segundo número eu preciso entrar com o número 1.

// var segredos = [5,7,10,2,3];
var segredos = sorteiaNumeros(5);

// segredos.push() é uma maneira de adicionar itens ao array:
// segredos.push(sorteia());

console.log(segredos)

// acessando o input no html 

var input = document.querySelector("input");
    input.focus();

function verifica() {

var achou = false;

// o ".length" de um array retorna a quantidade de elementos que ele tem automaticamente conforme mudamos os elementos nele 

for(var posicao = 0; posicao < segredos.length; posicao++) {

// essa leitura do valor só funciona se clicarmos no botão, então precisamos fazer com que o teste abaixo sí seja executado após o clique. colocamos dentro da function para que só seja executado ao chamarmos a função em questão.
   
// para usar o valor exibido dentro de um input usa-se "input.value"

    if(input.value == segredos[posicao]) {

        alert("Você ACERTOU!");
        achou = true;
        break;
    }
}

if(achou == false) {
    alert("Você ERROU!");
}

input.value = "";
input.focus();

}

// chamando o botão do html 

var button = document.querySelector("button");

button.onclick = verifica;

// a função só é chamada no onclick se estiver sem o paranteses, assim a execução dela fica armazenada dentro da que queremos a colocar 
