var tela = document.querySelector('#canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'green';
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo(300, 60);
pincel.lineTo(60, 200);
pincel.lineTo(540, 200);
pincel.fill();

pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo(300, 340);
pincel.lineTo(60, 200);
pincel.lineTo(540, 200);
pincel.fill();

pincel.fillStyle = 'darkblue';
pincel.beginPath();
pincel.arc(300, 200, 78, 0, 2 * 3.14);
pincel.fill();