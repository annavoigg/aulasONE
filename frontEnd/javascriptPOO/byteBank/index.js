// é uma boa prática manter o arquivo principal apenas com a execução e os objetos
import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';


// criando objetos da nossa classe. cada cliente é uma instância da classe
// usando esses parametros, nós estamos chamando o construtor da classe e podemos criar o objeto desse cliente em apenas uma linha
const cliente1 = new Cliente ("Ricardo", 11122233309);
// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233309;

const cliente2 = new Cliente ("Alice", 88822233309);
console.log(cliente2.cpf);


const conta1 = new ContaCorrente (cliente1, 1001);
conta1.depositar(500);

const conta2 = new ContaCorrente(cliente2, 102);

// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(-100);

// const valorSacado = contaCorrenteRicardo.sacar(50);

let valor = 200;
conta1.transferencia(valor, conta2);

console.log("O número de contas abertas é:", ContaCorrente.numeroDeContas);




// para que o nosso arquivo seja executado como módulo, precisamos fazer usar o seguinte método no terminal:

// - npm init
// - depois disso, é requisitado o nome do nosso pacote
// - vai nos mostrar uma versão, basta pressionar enter
// - uma descrição é pedida
// - o ponto de execução é mostrado (neste caso, o index.js)
// - os outros preenchimentos são opcionais
// - no fim, será gerado um arquivo json, será necessário - no fim dele - adiciobar o "type": "module", como já foi feito
