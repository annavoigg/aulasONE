var tela = document.querySelector('#canvas');
var pincel = tela.getContext('2d');

// escolhendo a cor com um atributo. a cor precisa vir antes
pincel.fillStyle = 'lightgrey';

// coordenada x e y no inicio para definir o ponto de partida do picel, e em seguida colocamos o ponto até onde esses eixos devem ir (no ex é ocupado 100% dos dois eixos). esse numero de tamanho é o máximo possível dentro do canvas (600, 400)
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = 'green';
pincel.fillRect(0, 0, 200, 400);

// cada um dos retangulos contem 200 de largura, entao a conta é feita proporcionalmente na hora de colocar as cores. neste caso pegamos o eixo x na posiçao 400, o 0 ao lado significa que estamos pintando do inicio da posição (topo) e o tamanho é para pegar a altura completa do canvas

pincel.fillStyle = 'red';
pincel.fillRect(400, 0, 200, 400);

// criando um triangulo no meio da nossa bandeira.

// definindo a cor do rtiangulo 
pincel.fillStyle = 'yellow';

// começando um caminho
pincel.beginPath();

// movendo o pincel, seguindo as coordenadas de espaço total do canvas
pincel.moveTo(300, 200);

pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();

pincel.fillStyle = 'blue';
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * 3.14);
pincel.fill();
