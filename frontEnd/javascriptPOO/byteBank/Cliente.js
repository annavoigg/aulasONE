// o arquivo com letra maiúscula representa uma classe

// criando uma classe/molde, é o que define o que queremos ter
export class Cliente {
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    // essa função serve para preencher os atributos apenas quando criamos os objetos, mas sem dar a opção de serem modififcados já que estamos usando o get
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}
