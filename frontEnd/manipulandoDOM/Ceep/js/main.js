import BotaoConclui from "../componentes/concluirTarefa.js";
import BotaoDeleta from "../componentes/deletaTarefa.js";

    const criarTarefa = (evento) =>{

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task')
    const conteudo = `<p class= "content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa); // adiciona um item filho dentro do elemento selecinado
    input.value = " ";

}

const addTarefa = document.querySelector('[data-form-button]');


addTarefa.addEventListener('click', criarTarefa);

// ( () => {
// })(); função que engloba todas as outras para a excução, prevenindo que nossa regra de negócio possa ser facilmente acessada. método IIFE, Immediately Invoked Function Expression ou “Função de Invocação Imediata”.