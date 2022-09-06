var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio){

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela(){
    pincel.clearRect(0, 0, 600, 400);
}


var x = 20;

sentido = 1;

// a função mostra a bolinha se movendo de tal forma: desenha o desenhaCirculo e o apaga antes de mostrar o próximo circulo desenhado na posição a frente e isso dá a impressão de animação 

// function atualizaTela(){

//     limpaTela();
//     desenhaCirculo(x, 20, 10);
//     x++;

// }

function atualizaTela(){

    limpaTela();
    
    if(x > 600){
        sentido -1
    } else if (x < 0){
        sentido = 1;
    }

    desenhaCirculo(x, 20, 10);
    x = x + sentido;
}

// o set interval chama a função no tempo definido 
setInterval(atualizaTela, 10);

