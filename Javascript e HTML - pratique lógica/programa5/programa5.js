    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();
    }

    function limpaTela() {

        pincel.clearRect(0, 0, 600, 400);
    }

    var raio = 19;

    var crescimento = 0;

    function atualizaTela() {

        limpaTela();

        if(raio > 30) {
            crescimento--;
        } else if (raio < 20) {
            crescimento++;
        }

        raio = raio + crescimento;

        desenhaCirculo(300, 200, raio, 'yellow');

    }

    setInterval(atualizaTela, 20);