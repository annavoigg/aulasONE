export class Cliente{

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    //criando um método que possa ser chamado para que o cliente possa ser autenticado

    autenticar(){
        return true;
    }

}