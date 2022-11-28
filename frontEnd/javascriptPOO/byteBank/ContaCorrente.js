 import { Cliente } from "./Cliente.js";
 
 export class ContaCorrente {

    // um atributo estático é do tipo que reflete as alterações em todos os objetos daquela classe
    static numeroDeContas = 0;
    agencia;
    _cliente;

    //decladado com #, privamos o nosso atributo de ser acessado fora da própria classe. mas como não é algo realmente implementado, a comunidade usa o _ antes dos atributos que são privadas. assim, quando vemos algum atributo com o _ na frente, sabemos que não deveríamos acessar o mesmo
    _saldo = 0;

    // usando o método acessor set para acessar nosso atributo privado de maneira controlada
    set cliente(novoValor){
        if(novoValor instanceof Cliente){

            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    // tornando saldo um atributo que não pode ser mudado, apenas lido
    get saldo(){
        return this.saldo;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;

        //garantindo que a cada conta criada, o atributo numeroDeContas some e apresente a quantidade de contas abertas que temos
        ContaCorrente.numeroDeContas += 1;
    }

    // criando um método para o comportamento dos saques que recebe o parâmetro do valor, é como uma função
    sacar(valor){

        //this indica que é o saldo de qualquer conta corrente que estejamos usando, não importa de qual dos objetos estamos mexendo, vale para todas
        if (this._saldo >= valor){

            this._saldo -= valor;

            return valor // retornando o valor pedido onde a função/método foi chamado. serve também para parar a execução do método.
        }
    }

    depositar(valor){

        // impossibilitando o depósito de um valor negativo
        if (valor <= 0){
            return
        }
        this._saldo += valor;
    }
    
    transferencia(valor, conta){

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }

}


