var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);


// com um paramentro na função, podemos ter acesso ao parametro passado pelo navegador, que nos dá informações e uma delas é o parametro de onde (exatamente) clicamos na tela

// .pageX e pageY são atributos que nos permitem pegar a posiçao do eixo X e Y de onde foi feito o clique. para que o tamanho da tela toda não interfira em pegar o tamanho do canvas corretamente, precisamos subtrair o tamaho de toda a tela usando offsetTop para x e offsetright para y.

function exibeCirculo(evento){

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    // desenhando uma bolinha sempre que houve o clique 

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();

    // alert(x + ',' + y);
    console.log(x + ',' + y);
}

// não pode-se colocar com os parenteses ao chamar a função neste evento, porque os parenteses fazem com que a funçao seja executada assim que a tela seja exibida e não apenas quando chamada 

tela.onclick = exibeCirculo;