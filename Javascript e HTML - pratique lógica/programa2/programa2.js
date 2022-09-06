var tela = document.querySelector('#canvas')
var pincel = tela.getContext('2d');

function desenhaQuadradoAmarelo(x, y){

pincel.fillStyle = 'yellow';
pincel.fillRect(x, y, 50, 50);
pincel.fillStroke = 'black';
pincel.strokeRect(x, y, 50, 50);

}

function desenhaQuadradoRoxo(x, y){

pincel.fillStyle = 'purple';
pincel.fillRect(x, y, 50, 50);
pincel.fillStroke = 'black';
pincel.strokeRect(x, y, 50, 50);

}

desenhaQuadradoAmarelo(0, 0)
desenhaQuadradoAmarelo(50, 50)

desenhaQuadradoRoxo(50, 0)
desenhaQuadradoRoxo(0, 50)

function desenhaQuadrado(x, y, cor){

pincel.fillStyle = cor;
pincel.fillRect(x, y, 50, 50);
pincel.fillStroke = 'black';
pincel.strokeRect(x, y, 50, 50);

}

desenhaQuadrado(0, 100, 'yellow');
desenhaQuadrado(50, 100, 'purple');

   var x = 0;
   var y = 200;

   while(x < 600){

    desenhaQuadrado(x, 150, 'yellow');
    x = x + 50;
    desenhaQuadrado(x, 150, 'purple');
    x = x + 50;

}

for(var x = 0; x < 600; x = x + 50){
    
    desenhaQuadrado(x, 200, 'purple');
    // desenhaQuadrado(x, 300, 'yellow');
}

for(var x = 50; x < 600; x = x + 100){

    desenhaQuadrado(x, 200, 'yellow');
}

desenhaQuadrado(0, 250, 'yellow');
desenhaQuadrado(50, 250, 'purple');
desenhaQuadrado(0, 300, 'purple');
desenhaQuadrado(50, 300, 'yellow');
desenhaQuadrado(0, 350, 'yellow');
desenhaQuadrado(50, 350, 'purple');



// pincel.fillRect(50, 0, 50, 50);
// pincel.strokeRect(50, 0, 50, 50);

// pincel.fillRect(100, 0, 50, 50);
// pincel.strokeRect(100, 0, 50, 50);
// pincel.strokeRect(150, 0, 50, 50);