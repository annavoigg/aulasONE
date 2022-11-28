/*
Ser autenticável significa ter o método autenticar

polimorfismo: é quando podemos tratar diferentes objetos de uma maneira similar contanto que tenham uma interface padrão, uma maneira de manusear que seja comum entre eles.

duck type: é comum em linguagens fracamente tipadas, significa que não importa o tipo do objeto, apenas o comportamento dele. então, se o objeto possui determinados métodos e propriedades que queremos usar, ele será usado independente do tipo.
*/

export class SistemaAutenticacao{

    static login(autenticavel, senha){

        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){

            return autenticavel.autenticar(senha);
        }

        return false;
    }

    static ehAutenticavel(autenticavel){

        //verificando se existe a chave "autenticar" dentro do objeto autenticavel 
        return "autenticar" in autenticavel && 

        //verificando se é um método que pode ser chamado 
        autenticavel.autenticar instanceof Function
    }
}