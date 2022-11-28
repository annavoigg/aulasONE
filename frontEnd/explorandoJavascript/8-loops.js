console.log(`\n Trabalhando com condicionais`);

const listasDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
console.log(listasDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < listasDeDestinos.length) {
  if (listasDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador++;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
  console.log("Boa viagem!");
} else {
  console.log("Desculpe, tivemos um erro.");
}

for (let i = 0; i < listasDeDestinos.length; i++) {
  if (listasDeDestinos[i] == destino) {
    destinoExiste = true;
    break;
  }
}
