// Classe abstrata: é um tipo de classe que não pode ser instanciada diretamente, ela funciona apenas para ser herdada.

export class Conta{

    constructor(saldoInicial, cliente, agencia){

        // criando um erro que impede a execução do código caso tentem instanciar um objeto do tipo conta diretamente 
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois esta é uma classe abstrata.");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;


    }
    

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // método abstrato, foi feito para ser sobrescrito e não chamado diretamente
    sacar(valor){

        throw new Error("O método Sacar da conta é abstrato.")
    }

    _sacar(valor, taxa){

        const valorSacado = taxa * valor;

        if(this._saldo >= valorSacado){

            this._saldo -= valorSacado;

            return valorSacado;
        }

        return 0;

    }

    depositar(valor){

        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }

}