import { clienteService } from "../service/cliente-service.js";

// função que recebe um template que quando os dados da api forem pegos, são adicionados ao template e exibidos

const criaNovaLinha = (nome, email, id) => {

    const linhaNovoCliente = document.createElement('tr');

    const conteudo = `
        <td class="td" data-td>${nome}</td>
            <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td>
                `;

    linhaNovoCliente.innerHTML = conteudo;

    //adicionando um id a cada td, assim todos ficam enumerados automaticamente e podemos identificar cada um deles
    linhaNovoCliente.dataset.id = id;

    return linhaNovoCliente;

}

const tabela = document.querySelector('[data-tabela]');

// uma função async (assincrona) pode substituir o ".then", já que este tipo de função pode conter o "await", que pausa a função e espera uma resposta antes de executar essa função
tabela.addEventListener('click', async (evento) => {

    //após identificar o evento de click, a função verifica se a classe do botão é esta abaixo, o que significa que é o nosso botão e excluir
    let ehBotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir';

    
    if(ehBotaoDeletar){

        //em funções async podemos utilizar o try catch. ele tenta executar o código com o try, e caso não seja possível por alguma razão, ele executa o catch. portanto, dentro do try colocamos o comportamento comum da função, e dentro do catch colocamos a alternativa para caso não seja possível executar a primeira opção. neste caso, o catch redireciona à página de erro.
        try {

            const linhaCliente = evento.target.closest('[data-id]');
            let id = linhaCliente.dataset.id;
    
            await clienteService.removeCliente(id);
    
            linhaCliente.remove();
        }
        catch(erro) {

            console.log(erro)
            window.location.href = '../telas/erro.html'
        }


    }
})

const render = async () => {

    try{

        // recebendo dados e os exibindo na tela
        const listaClientes = await clienteService.listaClientes()
     
            listaClientes.forEach(elemento => {
                
                tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email, elemento.id))
                
            })
    }
    catch(erro) {

        console.log(erro)
        window.location.href = '../telas/erro.html'
    }


}

render();
