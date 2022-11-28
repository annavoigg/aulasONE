console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro)

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listasDeDestinos.push(`Curitiba`); //adicionando um item na lista

console.log(listasDeDestinos);

listasDeDestinos.splice(1,1); //deletando um elemento passando a posição dele e a quantidade de itens a serem deletados
console.log(listasDeDestinos);
console.log(listasDeDestinos[1], listasDeDestinos[0]); // exibindo um elemento em uma posição específica
