import { clienteService } from "../service/cliente-service.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {

    //prevenindo o evento padrão, que seria enviar os dados mesmo sem checar o que temos dentro da função
    evento.preventDefault()

    // percorrendo o formulario, pegando os data atributes dentro dele com 'evento.target' e selecionando estes data-atributes com o querySelector
    const nome = evento.target.querySelector('[data-nome]').value;
    const email = evento.target.querySelector('[data-email]').value;

    // enviando os dados que pegamos para o criaCliente 
    clienteService.criaCliente(nome, email)
    .then(() => {
        window.location.href = '../telas/cadastro_concluido.html'
    })
    //redirecionando o cliente para outra janela ao cadastrar: janela.location.href (location pega a janela atual e href é para onde queremos ir)
})