console.log(`Trabalhando com condicionais`);

const listasDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade");

//   listasDeDestinos.splice(1, 1); // removendo item
// } else if (estaAcompanhada == true) {
//   console.log("Comprador está acompanhado");

//   listasDeDestinos.splice(1, 1);
// } else {
//   console.log("Não é maior de idade e não posso vender");
// }

if (idadeComprador >= 18 ||
    estaAcompanhada == true
    ) {
  console.log("Boa viagem!");

  listasDeDestinos.splice(2, 1); // removendo item

} else {
  console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n ")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
}else {
    console.log("Infelizmente você não pode embarcar. :(")
}

console.log(listasDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
