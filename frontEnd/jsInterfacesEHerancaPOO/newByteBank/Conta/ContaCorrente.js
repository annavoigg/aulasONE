import { Conta } from "./Conta.js";

// extends serve para usar o código escrito em outro arquivo (é o que chamamos de herança: nossa classe ContaCorrente está herdando o que existe na classe Conta)
export class ContaCorrente extends Conta{

    static numeroDeContas = 0;

    constructor(cliente, agencia){

        super(0, cliente, agencia); // chamando o construtor da classe mãe (Conta)

        ContaCorrente.numeroDeContas += 1;

    }

    // sobrescrevendo o comportamento de sacar 
    sacar(valor){

        let taxa = 1.1;

        return this._sacar(valor, taxa);
        
    }

}
